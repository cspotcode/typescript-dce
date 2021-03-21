#!/usr/bin/env bash
set -euo pipefail

outputPathTsc="./tmp/typescript-tsc.js"
outputPath="./tmp/typescript-postprocessed.js"
outputPath2="./tmp/typescript-postprocessed2.js"
outputPathMjs="./dist/typescript-lib.mjs"
outputPathCjs="./dist/typescript-lib.cjs"

exports=sys

function copyFiles() {
    copy src/compiler sys.ts
    copy src/compiler core.ts # isString
    copy src/compiler corePublic.ts # EqualityComparer
    copy src/compiler utilities.ts # matchFiles
    copy src/shims collectionShims.ts # ShimCollections
    copy src/compiler path.ts # combinePaths
    copy src/compiler watchUtilities.ts # closeFileWatcherOf
    copy src/compiler types.ts # CharacterCodes
    # copy src/compiler/factory nodeFactory.ts
    # copy src/compiler/factory nodeTests.ts
    # copy src/compiler/factory utilities.ts
    # copy src/compiler utilitiesPublic.ts
    # copy src/compiler scanner.ts
    # copy src/compiler debug.ts
    # copy src/compiler parser.ts
    # copy src/compiler commandLineParser.ts
    # copy src/compiler checker.ts
}

function copy() {
    mkdir -p "$1"
    cp "./TypeScript/$1/$2" "./$1/$2"

    # Use `__exports__` namespace instead of `ts` to enable hacky find-and-replace postprocessing.
    sed -i -E -e 's/namespace ts /namespace __exports__ /' "./$1/$2"
}

# Clean and init
rm -r ./src/compiler ./src/shims || true
mkdir -p dist
mkdir -p tmp

# Extract source files from TypeScript codebase
copyFiles

# Compile into a single file
tsc || true

cat "$outputPathTsc" \
        | sed -E -e 's/var __exports__;//' \
        | sed -E -e 's/\(function \(__exports__\) \{/{/' \
        | sed -E -e 's/\}\)\(__exports__ \|\| \(__exports__ = \{\}\)\);/}/' \
    > "$outputPath"

# Discover list of all exports onto the ts namespace
allExports="$( cat "./$outputPath" | grep -oh -E '__exports__\.[a-zA-Z0-9_$]+\b' | sed -e 's/__exports__.//' | sort -u )"

for export in $allExports ; do
    printf 'var __exports__%s;\n' "$export"
done > "$outputPath2"

# HACK run twice when one line has multiples.  How to tell sed to find-and-replace all occurrences on a single line?
cat "$outputPath" \
    | sed -e 's/__exports__\./__exports__/' \
    | sed -e 's/__exports__\./__exports__/' \
    | sed -e 's/__exports__\./__exports__/' \
    | sed -e 's/__exports__\./__exports__/' \
    | sed -e 's/__exports__\./__exports__/' \
    >> "$outputPath2"

# These exports must be preserved, so add export statements
for export in $exports ; do
    printf 'export {__exports__%s as %s};\n' "$export" "$export"
done >> "$outputPath2"

# Dead code elimination
terser --compress module=true,toplevel=true,passes=30,unsafe=true,pure_getters=true "$outputPath2" > "$outputPathMjs"

# Readable formatting
prettier --write "$outputPathMjs"

cat "$outputPathMjs" | sed -E 's/export \{ (__exports__.*) as (.*) \};/exports.\2 = \1;/' > "$outputPathCjs"

