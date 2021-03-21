var __exports__addRange;
var __exports__addRelatedInfo;
var __exports__addToSeen;
var __exports__adjustExtensionPriority;
var __exports__altDirectorySeparator;
var __exports__and;
var __exports__append;
var __exports__appendIfUnique;
var __exports__arrayFrom;
var __exports__arrayIsEqualTo;
var __exports__arrayIsHomogeneous;
var __exports__arrayIsSorted;
var __exports__arrayIterator;
var __exports__arrayOf;
var __exports__arrayReverseIterator;
var __exports__arraysEqual;
var __exports__arrayToMap;
var __exports__arrayToMultiMap;
var __exports__arrayToNumericMap;
var __exports__assertType;
var __exports__assign;
var __exports__attachFileToDiagnostics;
var __exports__base64decode;
var __exports__base64encode;
var __exports__binarySearch;
var __exports__binarySearchKey;
var __exports__cartesianProduct;
var __exports__cast;
var __exports__chainDiagnosticMessages;
var __exports__changeAnyExtension;
var __exports__changeExtension;
var __exports__changesAffectModuleResolution;
var __exports__childIsDecorated;
var __exports__clear;
var __exports__clearMap;
var __exports__clone;
var __exports__closeFileWatcher;
var __exports__closeFileWatcherOf;
var __exports__combine;
var __exports__combinePaths;
var __exports__commentPragmas;
var __exports__commonPackageFolders;
var __exports__compact;
var __exports__compareBooleans;
var __exports__compareDataObjects;
var __exports__compareDiagnostics;
var __exports__compareDiagnosticsSkipRelatedInformation;
var __exports__compareNumberOfDirectorySeparators;
var __exports__comparePaths;
var __exports__comparePathsCaseInsensitive;
var __exports__comparePathsCaseSensitive;
var __exports__compareProperties;
var __exports__compareStringsCaseInsensitive;
var __exports__compareStringsCaseSensitive;
var __exports__compareStringsCaseSensitiveUI;
var __exports__compareTextSpans;
var __exports__compareValues;
var __exports__compilerOptionsAffectEmit;
var __exports__compilerOptionsAffectSemanticDiagnostics;
var __exports__compose;
var __exports__concatenate;
var __exports__concatenateDiagnosticMessageChains;
var __exports__ConfigFileProgramReloadLevel;
var __exports__contains;
var __exports__containsIgnoredPath;
var __exports__containsParseError;
var __exports__containsPath;
var __exports__convertToBase64;
var __exports__convertToRelativePath;
var __exports__copyEntries;
var __exports__copyProperties;
var __exports__countWhere;
var __exports__createCachedDirectoryStructureHost;
var __exports__createCommentDirectivesMap;
var __exports__createCompilerDiagnostic;
var __exports__createCompilerDiagnosticFromMessageChain;
var __exports__createDetachedDiagnostic;
var __exports__createDiagnosticCollection;
var __exports__createDiagnosticForFileFromMessageChain;
var __exports__createDiagnosticForNode;
var __exports__createDiagnosticForNodeArray;
var __exports__createDiagnosticForNodeFromMessageChain;
var __exports__createDiagnosticForNodeInSourceFile;
var __exports__createDiagnosticForRange;
var __exports__createDirectoryWatcherSupportingRecursive;
var __exports__createDynamicPriorityPollingWatchFile;
var __exports__createFileDiagnostic;
var __exports__createFileDiagnosticFromMessageChain;
var __exports__createFileWatcherCallback;
var __exports__createGetCanonicalFileName;
var __exports__createMap;
var __exports__createMapFromTemplate;
var __exports__createMultiMap;
var __exports__createRange;
var __exports__createSingleFileWatcherPerName;
var __exports__createSymbolTable;
var __exports__createSymlinkCache;
var __exports__createSystemWatchFunctions;
var __exports__createTextWriter;
var __exports__createTokenRange;
var __exports__createUnderscoreEscapedMap;
var __exports__createUnderscoreEscapedMultiMap;
var __exports__Debug;
var __exports__declarationNameToString;
var __exports__deduplicate;
var __exports__defaultMaximumTruncationLength;
var __exports__DiagnosticCategory;
var __exports__diagnosticCategoryName;
var __exports__Diagnostics;
var __exports__directoryProbablyExists;
var __exports__directorySeparator;
var __exports__discoverProbableSymlinks;
var __exports__elementAt;
var __exports__emitComments;
var __exports__emitDetachedComments;
var __exports__emitNewLineBeforeLeadingCommentOfPosition;
var __exports__emitNewLineBeforeLeadingComments;
var __exports__emitNewLineBeforeLeadingCommentsOfPosition;
var __exports__emptyArray;
var __exports__emptyFileSystemEntries;
var __exports__emptyIterator;
var __exports__emptyMap;
var __exports__emptySet;
var __exports__endsWith;
var __exports__ensurePathIsNonModuleName;
var __exports__ensureScriptKind;
var __exports__ensureTrailingDirectorySeparator;
var __exports__entityNameToString;
var __exports__enumerateInsertsAndDeletes;
var __exports__equalOwnProperties;
var __exports__equateStringsCaseInsensitive;
var __exports__equateStringsCaseSensitive;
var __exports__equateValues;
var __exports__escapeJsxAttributeString;
var __exports__escapeNonAsciiString;
var __exports__escapeString;
var __exports__every;
var __exports__ExitStatus;
var __exports__exportAssignmentIsAlias;
var __exports__expressionResultIsUnused;
var __exports__extend;
var __exports__extensionFromPath;
var __exports__extensionIsTS;
var __exports__externalHelpersModuleNameText;
var __exports__fileExtensionIs;
var __exports__fileExtensionIsOneOf;
var __exports__FileIncludeKind;
var __exports__FileWatcherEventKind;
var __exports__fill;
var __exports__filter;
var __exports__filterMutate;
var __exports__find;
var __exports__findBestPatternMatch;
var __exports__findIndex;
var __exports__findLast;
var __exports__findLastIndex;
var __exports__findMap;
var __exports__first;
var __exports__firstDefined;
var __exports__firstDefinedIterator;
var __exports__firstOrUndefined;
var __exports__flatMap;
var __exports__flatMapIterator;
var __exports__flatMapToMutable;
var __exports__flatten;
var __exports__forEach;
var __exports__forEachAncestor;
var __exports__forEachAncestorDirectory;
var __exports__forEachEntry;
var __exports__forEachImportClauseDeclaration;
var __exports__forEachKey;
var __exports__forEachReturnStatement;
var __exports__forEachRight;
var __exports__forEachYieldExpression;
var __exports__formatMessage;
var __exports__formatStringFromArgs;
var __exports__forSomeAncestorDirectory;
var __exports__fullTripleSlashAMDReferencePathRegEx;
var __exports__fullTripleSlashReferencePathRegEx;
var __exports__generateDjb2Hash;
var __exports__getAliasDeclarationFromName;
var __exports__getAllAccessorDeclarations;
var __exports__getAllKeys;
var __exports__getAllowJSCompilerOption;
var __exports__getAllowSyntheticDefaultImports;
var __exports__getAllSuperTypeNodes;
var __exports__getAncestor;
var __exports__getAnyExtensionFromPath;
var __exports__getAreDeclarationMapsEnabled;
var __exports__getAssignedExpandoInitializer;
var __exports__getAssignmentDeclarationKind;
var __exports__getAssignmentDeclarationPropertyAccessKind;
var __exports__getAssignmentTargetKind;
var __exports__getBaseFileName;
var __exports__getBinaryOperatorPrecedence;
var __exports__getCheckFlags;
var __exports__getClassExtendsHeritageElement;
var __exports__getClassLikeDeclarationOfSymbol;
var __exports__getCombinedLocalAndExportSymbolFlags;
var __exports__getCompilerOptionValue;
var __exports__getContainingClass;
var __exports__getContainingFunction;
var __exports__getContainingFunctionDeclaration;
var __exports__getDeclarationEmitOutputFilePath;
var __exports__getDeclarationEmitOutputFilePathWorker;
var __exports__getDeclarationFromName;
var __exports__getDeclarationModifierFlagsFromSymbol;
var __exports__getDeclarationOfKind;
var __exports__getDeclaredExpandoInitializer;
var __exports__getDirectoryPath;
var __exports__getEffectiveBaseTypeNode;
var __exports__getEffectiveImplementsTypeNodes;
var __exports__getEffectiveInitializer;
var __exports__getEffectiveJSDocHost;
var __exports__getEffectiveModifierFlags;
var __exports__getEffectiveModifierFlagsAlwaysIncludeJSDoc;
var __exports__getEffectiveModifierFlagsNoCache;
var __exports__getEffectiveReturnTypeNode;
var __exports__getEffectiveSetAccessorTypeAnnotationNode;
var __exports__getEffectiveTypeAnnotationNode;
var __exports__getElementOrPropertyAccessArgumentExpressionOrName;
var __exports__getElementOrPropertyAccessName;
var __exports__getEmitDeclarations;
var __exports__getEmitFlags;
var __exports__getEmitModuleKind;
var __exports__getEmitModuleResolutionKind;
var __exports__getEmitScriptTarget;
var __exports__getEnclosingBlockScopeContainer;
var __exports__getEndLinePosition;
var __exports__getEntityNameFromTypeNode;
var __exports__getEntries;
var __exports__getErrorSpanForNode;
var __exports__getEscapedTextOfIdentifierOrLiteral;
var __exports__getExpandoInitializer;
var __exports__getExportAssignmentExpression;
var __exports__getExpressionAssociativity;
var __exports__getExpressionPrecedence;
var __exports__getExtensionPriority;
var __exports__getExternalModuleImportEqualsDeclarationExpression;
var __exports__getExternalModuleName;
var __exports__getExternalModuleNameFromDeclaration;
var __exports__getExternalModuleNameFromPath;
var __exports__getExternalModuleRequireArgument;
var __exports__getFallbackOptions;
var __exports__getFileMatcherPatterns;
var __exports__getFileWatcherEventKind;
var __exports__getFirstConstructorWithBody;
var __exports__getFirstIdentifier;
var __exports__getFullWidth;
var __exports__getFunctionFlags;
var __exports__getHeritageClause;
var __exports__getHostSignatureFromJSDoc;
var __exports__getImmediatelyInvokedFunctionExpression;
var __exports__getIndentSize;
var __exports__getIndentString;
var __exports__getInitializedVariables;
var __exports__getInitializerOfBinaryExpression;
var __exports__getInterfaceBaseTypeNodes;
var __exports__getInvokedExpression;
var __exports__getIterator;
var __exports__getJSDocCommentRanges;
var __exports__getJSDocCommentsAndTags;
var __exports__getJSDocHost;
var __exports__getJSDocRoot;
var __exports__getJSDocTypeParameterDeclarations;
var __exports__getJSXImplicitImportBase;
var __exports__getJSXRuntimeImport;
var __exports__getJSXTransformEnabled;
var __exports__getLanguageVariant;
var __exports__getLastChild;
var __exports__getLeadingCommentRangesOfNode;
var __exports__getLeftmostAccessExpression;
var __exports__getLeftmostExpression;
var __exports__getLineOfLocalPosition;
var __exports__getLineOfLocalPositionFromLineMap;
var __exports__getLinesBetweenPositionAndNextNonWhitespaceCharacter;
var __exports__getLinesBetweenPositionAndPrecedingNonWhitespaceCharacter;
var __exports__getLinesBetweenRangeEndAndRangeStart;
var __exports__getLinesBetweenRangeEndPositions;
var __exports__getLiteralText;
var __exports__getLocaleSpecificMessage;
var __exports__getLocalSymbolForExportDefault;
var __exports__getMembersOfDeclaration;
var __exports__getNameFromIndexInfo;
var __exports__getNameOfAccessExpression;
var __exports__getNameOfExpando;
var __exports__getNameOrArgument;
var __exports__getNamespaceDeclarationNode;
var __exports__getNewLineCharacter;
var __exports__getNewTargetContainer;
var __exports__getNextJSDocCommentLocation;
var __exports__getNextLowestExtensionPriority;
var __exports__getNodeMajorVersion;
var __exports__getNonAugmentationDeclaration;
var __exports__getNonDecoratorTokenPosOfNode;
var __exports__getNormalizedAbsolutePath;
var __exports__getNormalizedAbsolutePathWithoutRoot;
var __exports__getNormalizedPathComponents;
var __exports__getObjectFlags;
var __exports__getOperator;
var __exports__getOperatorAssociativity;
var __exports__getOperatorPrecedence;
var __exports__getOriginalSourceFile;
var __exports__getOrUpdate;
var __exports__getOwnEmitOutputFilePath;
var __exports__getOwnKeys;
var __exports__getOwnValues;
var __exports__getParameterSymbolFromJSDoc;
var __exports__getPathComponents;
var __exports__getPathComponentsRelativeTo;
var __exports__getPathFromPathComponents;
var __exports__getPathsBasePath;
var __exports__getPatternFromSpec;
var __exports__getProperty;
var __exports__getPropertyArrayElementValue;
var __exports__getPropertyAssignment;
var __exports__getPropertyAssignmentAliasLikeExpression;
var __exports__getPropertyNameForKnownSymbolName;
var __exports__getPropertyNameForPropertyNameNode;
var __exports__getPropertyNameForUniqueESSymbol;
var __exports__getRangesWhere;
var __exports__getRegexFromPattern;
var __exports__getRegularExpressionForWildcard;
var __exports__getRegularExpressionsForWildcards;
var __exports__getRelativePathFromDirectory;
var __exports__getRelativePathFromFile;
var __exports__getRelativePathToDirectoryOrUrl;
var __exports__getResolvedExternalModuleName;
var __exports__getResolvedModule;
var __exports__getRestParameterElementType;
var __exports__getRightMostAssignedExpression;
var __exports__getRootDeclaration;
var __exports__getRootLength;
var __exports__getScriptKindFromFileName;
var __exports__getScriptTargetFeatures;
var __exports__getSelectedEffectiveModifierFlags;
var __exports__getSelectedSyntacticModifierFlags;
var __exports__getSemanticJsxChildren;
var __exports__getSetAccessorTypeAnnotationNode;
var __exports__getSetAccessorValueParameter;
var __exports__getSingleInitializerOfVariableStatementOrPropertyDeclaration;
var __exports__getSingleVariableOfVariableStatement;
var __exports__getSourceFileOfNode;
var __exports__getSourceFilePathInNewDir;
var __exports__getSourceFilePathInNewDirWorker;
var __exports__getSourceFilesToEmit;
var __exports__getSourceTextOfNodeFromSourceFile;
var __exports__getSpanOfTokenAtPosition;
var __exports__getSpellingSuggestion;
var __exports__getStartPositionOfLine;
var __exports__getStartPositionOfRange;
var __exports__getStrictOptionValue;
var __exports__getStringComparer;
var __exports__getSuperContainer;
var __exports__getSuppoertedExtensionsWithJsonIfResolveJsonModule;
var __exports__getSupportedExtensions;
var __exports__getSymbolNameForPrivateIdentifier;
var __exports__getSyntacticModifierFlags;
var __exports__getSyntacticModifierFlagsNoCache;
var __exports__getTextOfConstantValue;
var __exports__getTextOfIdentifierOrLiteral;
var __exports__getTextOfNode;
var __exports__getTextOfNodeFromSourceText;
var __exports__getTextOfPropertyName;
var __exports__getThisContainer;
var __exports__getThisParameter;
var __exports__getTokenPosOfNode;
var __exports__getTrailingSemicolonDeferringWriter;
var __exports__getTsConfigObjectLiteralExpression;
var __exports__getTsConfigPropArray;
var __exports__getTsConfigPropArrayElementValue;
var __exports__getTypeAnnotationNode;
var __exports__getTypeParameterFromJsDoc;
var __exports__getUILocale;
var __exports__getWatchFactory;
var __exports__group;
var __exports__hasChangesInResolutions;
var __exports__hasDynamicName;
var __exports__hasEffectiveModifier;
var __exports__hasEffectiveModifiers;
var __exports__hasEffectiveReadonlyModifier;
var __exports__hasEntries;
var __exports__hasExtension;
var __exports__hasInvalidEscape;
var __exports__hasJSFileExtension;
var __exports__hasJsonModuleEmitEnabled;
var __exports__hasPossibleExternalModuleReference;
var __exports__hasProperty;
var __exports__hasQuestionToken;
var __exports__hasRestParameter;
var __exports__hasStaticModifier;
var __exports__hasSyntacticModifier;
var __exports__hasSyntacticModifiers;
var __exports__hasTrailingDirectorySeparator;
var __exports__hasTSFileExtension;
var __exports__hasTypeArguments;
var __exports__hasZeroOrOneAsteriskCharacter;
var __exports__hostGetCanonicalFileName;
var __exports__hostUsesCaseSensitiveFileNames;
var __exports__identifierIsThisKeyword;
var __exports__identity;
var __exports__ignoredPaths;
var __exports__importFromModuleSpecifier;
var __exports__indexOfAnyCharCode;
var __exports__indexOfNode;
var __exports__indicesOf;
var __exports__insertSorted;
var __exports__insertStatementAfterCustomPrologue;
var __exports__insertStatementAfterStandardPrologue;
var __exports__insertStatementsAfterCustomPrologue;
var __exports__insertStatementsAfterStandardPrologue;
var __exports__intersperse;
var __exports__introducesArgumentsExoticObject;
var __exports__isAbstractConstructorSymbol;
var __exports__isAccessExpression;
var __exports__isAliasableExpression;
var __exports__isAliasSymbolDeclaration;
var __exports__isAmbientModule;
var __exports__isAnyDirectorySeparator;
var __exports__isAnyImportOrReExport;
var __exports__isAnyImportSyntax;
var __exports__isAnySupportedFileExtension;
var __exports__isArray;
var __exports__isAssignmentDeclaration;
var __exports__isAssignmentExpression;
var __exports__isAssignmentOperator;
var __exports__isAssignmentTarget;
var __exports__isAsyncFunction;
var __exports__isBindableObjectDefinePropertyCall;
var __exports__isBindableStaticAccessExpression;
var __exports__isBindableStaticElementAccessExpression;
var __exports__isBindableStaticNameExpression;
var __exports__isBlockOrCatchScoped;
var __exports__isBlockScope;
var __exports__isBlockScopedContainerTopLevel;
var __exports__isBundleFileTextLike;
var __exports__isCatchClauseVariableDeclarationOrBindingElement;
var __exports__isCheckJsEnabledForFile;
var __exports__isChildOfNodeWithKind;
var __exports__isCollapsedRange;
var __exports__isComputedNonLiteralName;
var __exports__isContextualKeyword;
var __exports__isCustomPrologue;
var __exports__isDeclarationName;
var __exports__isDeclarationNameOfEnumOrNamespace;
var __exports__isDeclarationReadonly;
var __exports__isDeclarationWithTypeParameterChildren;
var __exports__isDeclarationWithTypeParameters;
var __exports__isDefaultedExpandoInitializer;
var __exports__isDefaultImport;
var __exports__isDeleteTarget;
var __exports__isDestructuringAssignment;
var __exports__isDiskPathRoot;
var __exports__isDottedName;
var __exports__isDynamicName;
var __exports__isEffectiveExternalModule;
var __exports__isEffectiveModuleDeclaration;
var __exports__isEffectiveStrictModeSourceFile;
var __exports__isEmittedFileOfProgram;
var __exports__isEmptyArrayLiteral;
var __exports__isEmptyObjectLiteral;
var __exports__isEntityNameExpression;
var __exports__isEnumConst;
var __exports__isESSymbolIdentifier;
var __exports__isExportNamespaceAsDefaultDeclaration;
var __exports__isExportsIdentifier;
var __exports__isExpressionNode;
var __exports__isExpressionWithTypeArgumentsInClassExtendsClause;
var __exports__isExternalModuleAugmentation;
var __exports__isExternalModuleImportEqualsDeclaration;
var __exports__isExternalOrCommonJsModule;
var __exports__isFileLevelUniqueName;
var __exports__isFunctionBlock;
var __exports__isFunctionSymbol;
var __exports__isFutureReservedKeyword;
var __exports__isGlobalScopeAugmentation;
var __exports__isHoistedFunction;
var __exports__isHoistedVariableStatement;
var __exports__isIdentifierANonContextualKeyword;
var __exports__isIdentifierName;
var __exports__isIdentifierTypePredicate;
var __exports__isIdentifierTypeReference;
var __exports__isIgnoredFileFromWildCardWatching;
var __exports__isImplicitGlob;
var __exports__isImportCall;
var __exports__isImportMeta;
var __exports__isIncrementalCompilation;
var __exports__isInExpressionContext;
var __exports__isInJSDoc;
var __exports__isInJSFile;
var __exports__isInJsonFile;
var __exports__isInternalModuleImportEqualsDeclaration;
var __exports__isInTopLevelContext;
var __exports__isIntrinsicJsxName;
var __exports__isJSDocConstructSignature;
var __exports__isJSDocIndexSignature;
var __exports__isJSDocTypeAlias;
var __exports__isJsonEqual;
var __exports__isJsonSourceFile;
var __exports__isJSXTagName;
var __exports__isKeyword;
var __exports__isKnownSymbol;
var __exports__isLateVisibilityPaintedStatement;
var __exports__isLet;
var __exports__isLiteralComputedPropertyDeclarationName;
var __exports__isLiteralImportTypeNode;
var __exports__isLiteralLikeAccess;
var __exports__isLiteralLikeElementAccess;
var __exports__isLogicalOperator;
var __exports__isLogicalOrCoalescingAssignmentExpression;
var __exports__isLogicalOrCoalescingAssignmentOperator;
var __exports__isModuleAugmentationExternal;
var __exports__isModuleExportsAccessExpression;
var __exports__isModuleIdentifier;
var __exports__isModuleWithStringLiteralName;
var __exports__isNamedImportsOrExports;
var __exports__isNodeArrayMultiLine;
var __exports__isNodeDescendantOf;
var __exports__isNodeModulesDirectory;
var __exports__isNodeWithPossibleHoistedDeclaration;
var __exports__isNonContextualKeyword;
var __exports__isNonGlobalAmbientModule;
var __exports__isNumber;
var __exports__isObjectLiteralMethod;
var __exports__isObjectLiteralOrClassExpressionMethod;
var __exports__isObjectTypeDeclaration;
var __exports__isPackedArrayLiteral;
var __exports__isParameterDeclaration;
var __exports__isPartOfTypeNode;
var __exports__isPartOfTypeQuery;
var __exports__isPinnedComment;
var __exports__isPrologueDirective;
var __exports__isPropertyAccessEntityNameExpression;
var __exports__isPropertyNameLiteral;
var __exports__isPrototypeAccess;
var __exports__isPrototypePropertyAssignment;
var __exports__isPushOrUnshiftIdentifier;
var __exports__isRecognizedTripleSlashComment;
var __exports__isRequireCall;
var __exports__isRequireVariableDeclaration;
var __exports__isRequireVariableStatement;
var __exports__isRestParameter;
var __exports__isRightSideOfQualifiedNameOrPropertyAccess;
var __exports__isRootedDiskPath;
var __exports__isSameEntityName;
var __exports__isShorthandAmbientModuleSymbol;
var __exports__isSignedNumericLiteral;
var __exports__isSingleOrDoubleQuote;
var __exports__isSourceFileJS;
var __exports__isSourceFileNotJS;
var __exports__isSourceFileNotJson;
var __exports__isSpecialPropertyDeclaration;
var __exports__isStatementWithLocals;
var __exports__isString;
var __exports__isStringAKeyword;
var __exports__isStringANonContextualKeyword;
var __exports__isStringDoubleQuoted;
var __exports__isStringOrNumericLiteralLike;
var __exports__isSuperCall;
var __exports__isSuperOrSuperProperty;
var __exports__isSuperProperty;
var __exports__isSupportedSourceFileName;
var __exports__isThisIdentifier;
var __exports__isThisInitializedDeclaration;
var __exports__isThisProperty;
var __exports__isThisTypePredicate;
var __exports__isTransientSymbol;
var __exports__isTrivia;
var __exports__isTypeAlias;
var __exports__isTypeNodeKind;
var __exports__isUMDExportSymbol;
var __exports__isUrl;
var __exports__isValidESSymbolDeclaration;
var __exports__isValidTypeOnlyAliasUseSite;
var __exports__isValueSignatureDeclaration;
var __exports__isVarConst;
var __exports__isVariableDeclarationInVariableStatement;
var __exports__isVariableLike;
var __exports__isVariableLikeOrAccessor;
var __exports__isWatchSet;
var __exports__isWellKnownSymbolSyntactically;
var __exports__isWriteAccess;
var __exports__isWriteOnlyAccess;
var __exports__last;
var __exports__lastOrUndefined;
var __exports__length;
var __exports__localizedDiagnosticMessages;
var __exports__makeIdentifierFromModuleName;
var __exports__map;
var __exports__Map;
var __exports__mapAllOrFail;
var __exports__mapDefined;
var __exports__mapDefinedEntries;
var __exports__mapDefinedIterator;
var __exports__mapDefinedValues;
var __exports__mapEntries;
var __exports__mapIterator;
var __exports__matchedText;
var __exports__matchFiles;
var __exports__matchPatternOrExact;
var __exports__maybeBind;
var __exports__memoize;
var __exports__memoizeOne;
var __exports__min;
var __exports__minAndMax;
var __exports__missingFileModifiedTime;
var __exports__modifiersToFlags;
var __exports__modifierToFlag;
var __exports__ModuleKind;
var __exports__moduleResolutionIsEqualTo;
var __exports__ModuleResolutionKind;
var __exports__moveRangeEnd;
var __exports__moveRangePastDecorators;
var __exports__moveRangePastModifiers;
var __exports__moveRangePos;
var __exports__mutateMap;
var __exports__mutateMapSkippingNewValues;
var __exports__NativeCollections;
var __exports__nodeCanBeDecorated;
var __exports__nodeIsDecorated;
var __exports__nodeIsMissing;
var __exports__nodeIsPresent;
var __exports__nodeIsSynthesized;
var __exports__nodeOrChildIsDecorated;
var __exports__nodePosToString;
var __exports__nodeStartsNewLexicalEnvironment;
var __exports__noop;
var __exports__normalizePath;
var __exports__normalizePathAndParts;
var __exports__normalizeSlashes;
var __exports__not;
var __exports__notImplemented;
var __exports__noTruncationMaximumTruncationLength;
var __exports__objectAllocator;
var __exports__onWatchedFileStat;
var __exports__OperationCanceledException;
var __exports__optionsHaveModuleResolutionChanges;
var __exports__or;
var __exports__orderedRemoveItem;
var __exports__orderedRemoveItemAt;
var __exports__outFile;
var __exports__packageIdToString;
var __exports__padLeft;
var __exports__padRight;
var __exports__parameterIsThisKeyword;
var __exports__parsePseudoBigInt;
var __exports__patchWriteFileEnsuringDirectory;
var __exports__pathIsAbsolute;
var __exports__pathIsBareSpecifier;
var __exports__pathIsRelative;
var __exports__patternText;
var __exports__perfLogger;
var __exports__PollingInterval;
var __exports__PollingWatchKind;
var __exports__positionIsSynthesized;
var __exports__positionsAreOnSameLine;
var __exports__projectReferenceIsEqualTo;
var __exports__pseudoBigIntToString;
var __exports__pushIfUnique;
var __exports__rangeEndIsOnSameLineAsRangeStart;
var __exports__rangeEndPositionsAreOnSameLine;
var __exports__rangeEquals;
var __exports__rangeIsOnSingleLine;
var __exports__rangeOfNode;
var __exports__rangeOfTypeParameters;
var __exports__rangeStartIsOnSameLineAsRangeEnd;
var __exports__rangeStartPositionsAreOnSameLine;
var __exports__readJson;
var __exports__reduceLeft;
var __exports__reduceLeftIterator;
var __exports__reducePathComponents;
var __exports__regExpEscape;
var __exports__relativeComplement;
var __exports__removeExtension;
var __exports__removeFileExtension;
var __exports__removeMinAndVersionNumbers;
var __exports__removePrefix;
var __exports__removeSuffix;
var __exports__removeTrailingDirectorySeparator;
var __exports__replaceElement;
var __exports__resolutionExtensionIsTSOrJson;
var __exports__resolvePath;
var __exports__resolvingEmptyArray;
var __exports__returnFalse;
var __exports__returnTrue;
var __exports__returnUndefined;
var __exports__sameFlatMap;
var __exports__sameMap;
var __exports__Set;
var __exports__setCustomPollingValues;
var __exports__setEachParent;
var __exports__setLocalizedDiagnosticMessages;
var __exports__setNodeFlags;
var __exports__setObjectAllocator;
var __exports__setParent;
var __exports__setParentRecursive;
var __exports__setResolvedModule;
var __exports__setResolvedTypeReferenceDirective;
var __exports__setStackTraceLimit;
var __exports__setSysLog;
var __exports__setTextRangeEnd;
var __exports__setTextRangePos;
var __exports__setTextRangePosEnd;
var __exports__setTextRangePosWidth;
var __exports__setUILocale;
var __exports__setValueDeclaration;
var __exports__ShimCollections;
var __exports__shouldPreserveConstEnums;
var __exports__showModuleSpecifier;
var __exports__singleElementArray;
var __exports__singleIterator;
var __exports__singleOrMany;
var __exports__singleOrUndefined;
var __exports__skipAlias;
var __exports__skipParentheses;
var __exports__skipTypeChecking;
var __exports__sliceAfter;
var __exports__some;
var __exports__sort;
var __exports__sortAndDeduplicate;
var __exports__sourceFileMayBeEmitted;
var __exports__spanMap;
var __exports__stableSort;
var __exports__startsWith;
var __exports__startsWithDirectory;
var __exports__stringContains;
var __exports__stripQuotes;
var __exports__sum;
var __exports__supportedJSAndJsonExtensions;
var __exports__supportedJSExtensions;
var __exports__supportedTSExtensions;
var __exports__supportedTSExtensionsForExtractExtension;
var __exports__supportedTSExtensionsWithJson;
var __exports__sys;
var __exports__sysLog;
var __exports__takeWhile;
var __exports__toArray;
var __exports__toFileNameLowerCase;
var __exports__toLowerCase;
var __exports__toPath;
var __exports__tracing;
var __exports__tryAddToSet;
var __exports__tryCast;
var __exports__tryExtractTSExtension;
var __exports__tryGetClassExtendingExpressionWithTypeArguments;
var __exports__tryGetClassImplementingOrExtendingExpressionWithTypeArguments;
var __exports__tryGetExtensionFromPath;
var __exports__tryGetImportFromModuleSpecifier;
var __exports__tryGetPropertyAccessOrIdentifierToString;
var __exports__tryParsePattern;
var __exports__tryRemoveDirectoryPrefix;
var __exports__tryRemoveExtension;
var __exports__tryRemovePrefix;
var __exports__tryRemoveSuffix;
var __exports__typeDirectiveIsEqualTo;
var __exports__typeHasCallOrConstructSignatures;
var __exports__typeOnlyDeclarationIsExport;
var __exports__TypeReferenceSerializationKind;
var __exports__unchangedPollThresholds;
var __exports__unorderedRemoveItem;
var __exports__unorderedRemoveItemAt;
var __exports__unreachableCodeIsError;
var __exports__unusedLabelIsError;
var __exports__unwrapInnermostStatementOfLabel;
var __exports__updateMissingFilePathsWatch;
var __exports__updateSharedExtendedConfigFileWatcher;
var __exports__updateWatchingWildcardDirectories;
var __exports__usingSingleLineStringWriter;
var __exports__version;
var __exports__versionMajorMinor;
var __exports__walkUpParenthesizedExpressions;
var __exports__walkUpParenthesizedTypes;
var __exports__walkUpParenthesizedTypesAndGetParentAndChild;
var __exports__WatchDirectoryKind;
var __exports__WatchFileKind;
var __exports__WatchLogLevel;
var __exports__writeCommentRange;
var __exports__writeFile;
var __exports__writeFileEnsuringDirectories;
var __exports__zipToIterator;
var __exports__zipToMap;
var __exports__zipWith;

{
    __exports__Diagnostics = {};
    __exports__tracing = false;
    __exports__perfLogger = {
        logEvent(message) { },
        logStartReadFile() { },
        logStopReadFile() { }
    };
    __exports__Debug = {
        assert(...args) { },
        fail(...args) { },
        getFunctionName(...args) { },
        isDebugging() { return false; },
        assertIsDefined(...args) { },
        assertEqual(...args) { },
        assertLessThanOrEqual(...args) { },
        assertGreaterThanOrEqual(...args) { },
        checkDefined(v) { return v; },
        setAssertionLevel(...args) { },
        assertNever(...args) { },
        failBadSyntaxKind(...args) { },
    };
}

{
    class OperationCanceledException {
    }
    __exports__OperationCanceledException = OperationCanceledException;
    /*@internal*/
    let FileIncludeKind;
    (function (FileIncludeKind) {
        FileIncludeKind[FileIncludeKind["RootFile"] = 0] = "RootFile";
        FileIncludeKind[FileIncludeKind["SourceFromProjectReference"] = 1] = "SourceFromProjectReference";
        FileIncludeKind[FileIncludeKind["OutputFromProjectReference"] = 2] = "OutputFromProjectReference";
        FileIncludeKind[FileIncludeKind["Import"] = 3] = "Import";
        FileIncludeKind[FileIncludeKind["ReferenceFile"] = 4] = "ReferenceFile";
        FileIncludeKind[FileIncludeKind["TypeReferenceDirective"] = 5] = "TypeReferenceDirective";
        FileIncludeKind[FileIncludeKind["LibFile"] = 6] = "LibFile";
        FileIncludeKind[FileIncludeKind["LibReferenceDirective"] = 7] = "LibReferenceDirective";
        FileIncludeKind[FileIncludeKind["AutomaticTypeDirectiveFile"] = 8] = "AutomaticTypeDirectiveFile";
    })(FileIncludeKind = __exports__FileIncludeKind || (__exports__FileIncludeKind = {}));
    /** Return code used by getEmitOutput function to indicate status of the function */
    let ExitStatus;
    (function (ExitStatus) {
        // Compiler ran successfully.  Either this was a simple do-nothing compilation (for example,
        // when -version or -help was provided, or this was a normal compilation, no diagnostics
        // were produced, and all outputs were generated successfully.
        ExitStatus[ExitStatus["Success"] = 0] = "Success";
        // Diagnostics were produced and because of them no code was generated.
        ExitStatus[ExitStatus["DiagnosticsPresent_OutputsSkipped"] = 1] = "DiagnosticsPresent_OutputsSkipped";
        // Diagnostics were produced and outputs were generated in spite of them.
        ExitStatus[ExitStatus["DiagnosticsPresent_OutputsGenerated"] = 2] = "DiagnosticsPresent_OutputsGenerated";
        // When build skipped because passed in project is invalid
        ExitStatus[ExitStatus["InvalidProject_OutputsSkipped"] = 3] = "InvalidProject_OutputsSkipped";
        // When build is skipped because project references form cycle
        ExitStatus[ExitStatus["ProjectReferenceCycle_OutputsSkipped"] = 4] = "ProjectReferenceCycle_OutputsSkipped";
        /** @deprecated Use ProjectReferenceCycle_OutputsSkipped instead. */
        ExitStatus[ExitStatus["ProjectReferenceCycle_OutputsSkupped"] = 4] = "ProjectReferenceCycle_OutputsSkupped";
    })(ExitStatus = __exports__ExitStatus || (__exports__ExitStatus = {}));
    /** Indicates how to serialize the name for a TypeReferenceNode when emitting decorator metadata */
    /* @internal */
    let TypeReferenceSerializationKind;
    (function (TypeReferenceSerializationKind) {
        // The TypeReferenceNode could not be resolved.
        // The type name should be emitted using a safe fallback.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["Unknown"] = 0] = "Unknown";
        // The TypeReferenceNode resolves to a type with a constructor
        // function that can be reached at runtime (e.g. a `class`
        // declaration or a `var` declaration for the static side
        // of a type, such as the global `Promise` type in lib.d.ts).
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["TypeWithConstructSignatureAndValue"] = 1] = "TypeWithConstructSignatureAndValue";
        // The TypeReferenceNode resolves to a Void-like, Nullable, or Never type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["VoidNullableOrNeverType"] = 2] = "VoidNullableOrNeverType";
        // The TypeReferenceNode resolves to a Number-like type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["NumberLikeType"] = 3] = "NumberLikeType";
        // The TypeReferenceNode resolves to a BigInt-like type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["BigIntLikeType"] = 4] = "BigIntLikeType";
        // The TypeReferenceNode resolves to a String-like type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["StringLikeType"] = 5] = "StringLikeType";
        // The TypeReferenceNode resolves to a Boolean-like type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["BooleanType"] = 6] = "BooleanType";
        // The TypeReferenceNode resolves to an Array-like type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["ArrayLikeType"] = 7] = "ArrayLikeType";
        // The TypeReferenceNode resolves to the ESSymbol type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["ESSymbolType"] = 8] = "ESSymbolType";
        // The TypeReferenceNode resolved to the global Promise constructor symbol.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["Promise"] = 9] = "Promise";
        // The TypeReferenceNode resolves to a Function type or a type with call signatures.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["TypeWithCallSignature"] = 10] = "TypeWithCallSignature";
        // The TypeReferenceNode resolves to any other type.
        TypeReferenceSerializationKind[TypeReferenceSerializationKind["ObjectType"] = 11] = "ObjectType";
    })(TypeReferenceSerializationKind = __exports__TypeReferenceSerializationKind || (__exports__TypeReferenceSerializationKind = {}));
    let DiagnosticCategory;
    (function (DiagnosticCategory) {
        DiagnosticCategory[DiagnosticCategory["Warning"] = 0] = "Warning";
        DiagnosticCategory[DiagnosticCategory["Error"] = 1] = "Error";
        DiagnosticCategory[DiagnosticCategory["Suggestion"] = 2] = "Suggestion";
        DiagnosticCategory[DiagnosticCategory["Message"] = 3] = "Message";
    })(DiagnosticCategory = __exports__DiagnosticCategory || (__exports__DiagnosticCategory = {}));
    /* @internal */
    function diagnosticCategoryName(d, lowerCase = true) {
        const name = DiagnosticCategory[d.category];
        return lowerCase ? name.toLowerCase() : name;
    }
    __exports__diagnosticCategoryName = diagnosticCategoryName;
    let ModuleResolutionKind;
    (function (ModuleResolutionKind) {
        ModuleResolutionKind[ModuleResolutionKind["Classic"] = 1] = "Classic";
        ModuleResolutionKind[ModuleResolutionKind["NodeJs"] = 2] = "NodeJs";
    })(ModuleResolutionKind = __exports__ModuleResolutionKind || (__exports__ModuleResolutionKind = {}));
    let WatchFileKind;
    (function (WatchFileKind) {
        WatchFileKind[WatchFileKind["FixedPollingInterval"] = 0] = "FixedPollingInterval";
        WatchFileKind[WatchFileKind["PriorityPollingInterval"] = 1] = "PriorityPollingInterval";
        WatchFileKind[WatchFileKind["DynamicPriorityPolling"] = 2] = "DynamicPriorityPolling";
        WatchFileKind[WatchFileKind["UseFsEvents"] = 3] = "UseFsEvents";
        WatchFileKind[WatchFileKind["UseFsEventsOnParentDirectory"] = 4] = "UseFsEventsOnParentDirectory";
    })(WatchFileKind = __exports__WatchFileKind || (__exports__WatchFileKind = {}));
    let WatchDirectoryKind;
    (function (WatchDirectoryKind) {
        WatchDirectoryKind[WatchDirectoryKind["UseFsEvents"] = 0] = "UseFsEvents";
        WatchDirectoryKind[WatchDirectoryKind["FixedPollingInterval"] = 1] = "FixedPollingInterval";
        WatchDirectoryKind[WatchDirectoryKind["DynamicPriorityPolling"] = 2] = "DynamicPriorityPolling";
    })(WatchDirectoryKind = __exports__WatchDirectoryKind || (__exports__WatchDirectoryKind = {}));
    let PollingWatchKind;
    (function (PollingWatchKind) {
        PollingWatchKind[PollingWatchKind["FixedInterval"] = 0] = "FixedInterval";
        PollingWatchKind[PollingWatchKind["PriorityInterval"] = 1] = "PriorityInterval";
        PollingWatchKind[PollingWatchKind["DynamicPriority"] = 2] = "DynamicPriority";
    })(PollingWatchKind = __exports__PollingWatchKind || (__exports__PollingWatchKind = {}));
    let ModuleKind;
    (function (ModuleKind) {
        ModuleKind[ModuleKind["None"] = 0] = "None";
        ModuleKind[ModuleKind["CommonJS"] = 1] = "CommonJS";
        ModuleKind[ModuleKind["AMD"] = 2] = "AMD";
        ModuleKind[ModuleKind["UMD"] = 3] = "UMD";
        ModuleKind[ModuleKind["System"] = 4] = "System";
        // NOTE: ES module kinds should be contiguous to more easily check whether a module kind is *any* ES module kind.
        //       Non-ES module kinds should not come between ES2015 (the earliest ES module kind) and ESNext (the last ES
        //       module kind).
        ModuleKind[ModuleKind["ES2015"] = 5] = "ES2015";
        ModuleKind[ModuleKind["ES2020"] = 6] = "ES2020";
        ModuleKind[ModuleKind["ESNext"] = 99] = "ESNext";
    })(ModuleKind = __exports__ModuleKind || (__exports__ModuleKind = {}));
    // While not strictly a type, this is here because `PragmaMap` needs to be here to be used with `SourceFile`, and we don't
    //  fancy effectively defining it twice, once in value-space and once in type-space
    /* @internal */
    __exports__commentPragmas = {
        "reference": {
            args: [
                { name: "types", optional: true, captureSpan: true },
                { name: "lib", optional: true, captureSpan: true },
                { name: "path", optional: true, captureSpan: true },
                { name: "no-default-lib", optional: true }
            ],
            kind: 1 /* TripleSlashXML */
        },
        "amd-dependency": {
            args: [{ name: "path" }, { name: "name", optional: true }],
            kind: 1 /* TripleSlashXML */
        },
        "amd-module": {
            args: [{ name: "name" }],
            kind: 1 /* TripleSlashXML */
        },
        "ts-check": {
            kind: 2 /* SingleLine */
        },
        "ts-nocheck": {
            kind: 2 /* SingleLine */
        },
        "jsx": {
            args: [{ name: "factory" }],
            kind: 4 /* MultiLine */
        },
        "jsxfrag": {
            args: [{ name: "factory" }],
            kind: 4 /* MultiLine */
        },
        "jsximportsource": {
            args: [{ name: "factory" }],
            kind: 4 /* MultiLine */
        },
        "jsxruntime": {
            args: [{ name: "factory" }],
            kind: 4 /* MultiLine */
        },
    };
}

{
    // WARNING: The script `configurePrerelease.ts` uses a regexp to parse out these values.
    // If changing the text in this section, be sure to test `configurePrerelease` too.
    __exports__versionMajorMinor = "4.2";
    // The following is baselined as a literal template type without intervention
    /** The version of the TypeScript compiler release */
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    __exports__version = "4.2.2";
    /* @internal */
    let NativeCollections;
    (function (NativeCollections) {
        /**
         * Returns the native Map implementation if it is available and compatible (i.e. supports iteration).
         */
        function tryGetNativeMap() {
            // Internet Explorer's Map doesn't support iteration, so don't use it.
            // eslint-disable-next-line no-in-operator
            return typeof Map !== "undefined" && "entries" in Map.prototype && new Map([[0, 0]]).size === 1 ? Map : undefined;
        }
        NativeCollections.tryGetNativeMap = tryGetNativeMap;
        /**
         * Returns the native Set implementation if it is available and compatible (i.e. supports iteration).
         */
        function tryGetNativeSet() {
            // Internet Explorer's Set doesn't support iteration, so don't use it.
            // eslint-disable-next-line no-in-operator
            return typeof Set !== "undefined" && "entries" in Set.prototype && new Set([0]).size === 1 ? Set : undefined;
        }
        NativeCollections.tryGetNativeSet = tryGetNativeSet;
    })(NativeCollections = __exports__NativeCollections || (__exports__NativeCollections = {}));
}
/* @internal */

{
    function getCollectionImplementation(name, nativeFactory, shimFactory) {
        // NOTE: ts.ShimCollections will be defined for typescriptServices.js but not for tsc.js, so we must test for it.
        const constructor = __exports__NativeCollections[nativeFactory]() ?? __exports__ShimCollections?.[shimFactory](getIterator);
        if (constructor)
            return constructor;
        throw new Error(`TypeScript requires an environment that provides a compatible native ${name} implementation.`);
    }
    __exports__Map = getCollectionImplementation("Map", "tryGetNativeMap", "createMapShim");
    __exports__Set = getCollectionImplementation("Set", "tryGetNativeSet", "createSetShim");
    function getIterator(iterable) {
        if (iterable) {
            if (isArray(iterable))
                return arrayIterator(iterable);
            if (iterable instanceof __exports__Map)
                return iterable.entries();
            if (iterable instanceof __exports__Set)
                return iterable.values();
            throw new Error("Iteration not supported.");
        }
    }
    __exports__getIterator = getIterator;
    __exports__emptyArray = [];
    __exports__emptyMap = new __exports__Map();
    __exports__emptySet = new __exports__Set();
    function createMap() {
        return new __exports__Map();
    }
    __exports__createMap = createMap;
    /**
     * Create a new map from a template object is provided, the map will copy entries from it.
     * @deprecated Use `new Map(getEntries(template))` instead.
     */
    function createMapFromTemplate(template) {
        const map = new __exports__Map();
        // Copies keys/values from template. Note that for..in will not throw if
        // template is undefined, and instead will just exit the loop.
        for (const key in template) {
            if (hasOwnProperty.call(template, key)) {
                map.set(key, template[key]);
            }
        }
        return map;
    }
    __exports__createMapFromTemplate = createMapFromTemplate;
    function length(array) {
        return array ? array.length : 0;
    }
    __exports__length = length;
    /**
     * Iterates through 'array' by index and performs the callback on each element of array until the callback
     * returns a truthy value, then returns that value.
     * If no such value is found, the callback is applied to each element of array and undefined is returned.
     */
    function forEach(array, callback) {
        if (array) {
            for (let i = 0; i < array.length; i++) {
                const result = callback(array[i], i);
                if (result) {
                    return result;
                }
            }
        }
        return undefined;
    }
    __exports__forEach = forEach;
    /**
     * Like `forEach`, but iterates in reverse order.
     */
    function forEachRight(array, callback) {
        if (array) {
            for (let i = array.length - 1; i >= 0; i--) {
                const result = callback(array[i], i);
                if (result) {
                    return result;
                }
            }
        }
        return undefined;
    }
    __exports__forEachRight = forEachRight;
    /** Like `forEach`, but suitable for use with numbers and strings (which may be falsy). */
    function firstDefined(array, callback) {
        if (array === undefined) {
            return undefined;
        }
        for (let i = 0; i < array.length; i++) {
            const result = callback(array[i], i);
            if (result !== undefined) {
                return result;
            }
        }
        return undefined;
    }
    __exports__firstDefined = firstDefined;
    function firstDefinedIterator(iter, callback) {
        while (true) {
            const iterResult = iter.next();
            if (iterResult.done) {
                return undefined;
            }
            const result = callback(iterResult.value);
            if (result !== undefined) {
                return result;
            }
        }
    }
    __exports__firstDefinedIterator = firstDefinedIterator;
    function reduceLeftIterator(iterator, f, initial) {
        let result = initial;
        if (iterator) {
            for (let step = iterator.next(), pos = 0; !step.done; step = iterator.next(), pos++) {
                result = f(result, step.value, pos);
            }
        }
        return result;
    }
    __exports__reduceLeftIterator = reduceLeftIterator;
    function zipWith(arrayA, arrayB, callback) {
        const result = [];
        __exports__Debug.assertEqual(arrayA.length, arrayB.length);
        for (let i = 0; i < arrayA.length; i++) {
            result.push(callback(arrayA[i], arrayB[i], i));
        }
        return result;
    }
    __exports__zipWith = zipWith;
    function zipToIterator(arrayA, arrayB) {
        __exports__Debug.assertEqual(arrayA.length, arrayB.length);
        let i = 0;
        return {
            next() {
                if (i === arrayA.length) {
                    return { value: undefined, done: true };
                }
                i++;
                return { value: [arrayA[i - 1], arrayB[i - 1]], done: false };
            }
        };
    }
    __exports__zipToIterator = zipToIterator;
    function zipToMap(keys, values) {
        __exports__Debug.assert(keys.length === values.length);
        const map = new __exports__Map();
        for (let i = 0; i < keys.length; ++i) {
            map.set(keys[i], values[i]);
        }
        return map;
    }
    __exports__zipToMap = zipToMap;
    /**
     * Creates a new array with `element` interspersed in between each element of `input`
     * if there is more than 1 value in `input`. Otherwise, returns the existing array.
     */
    function intersperse(input, element) {
        if (input.length <= 1) {
            return input;
        }
        const result = [];
        for (let i = 0, n = input.length; i < n; i++) {
            if (i)
                result.push(element);
            result.push(input[i]);
        }
        return result;
    }
    __exports__intersperse = intersperse;
    /**
     * Iterates through `array` by index and performs the callback on each element of array until the callback
     * returns a falsey value, then returns false.
     * If no such value is found, the callback is applied to each element of array and `true` is returned.
     */
    function every(array, callback) {
        if (array) {
            for (let i = 0; i < array.length; i++) {
                if (!callback(array[i], i)) {
                    return false;
                }
            }
        }
        return true;
    }
    __exports__every = every;
    function find(array, predicate) {
        for (let i = 0; i < array.length; i++) {
            const value = array[i];
            if (predicate(value, i)) {
                return value;
            }
        }
        return undefined;
    }
    __exports__find = find;
    function findLast(array, predicate) {
        for (let i = array.length - 1; i >= 0; i--) {
            const value = array[i];
            if (predicate(value, i)) {
                return value;
            }
        }
        return undefined;
    }
    __exports__findLast = findLast;
    /** Works like Array.prototype.findIndex, returning `-1` if no element satisfying the predicate is found. */
    function findIndex(array, predicate, startIndex) {
        for (let i = startIndex || 0; i < array.length; i++) {
            if (predicate(array[i], i)) {
                return i;
            }
        }
        return -1;
    }
    __exports__findIndex = findIndex;
    function findLastIndex(array, predicate, startIndex) {
        for (let i = startIndex === undefined ? array.length - 1 : startIndex; i >= 0; i--) {
            if (predicate(array[i], i)) {
                return i;
            }
        }
        return -1;
    }
    __exports__findLastIndex = findLastIndex;
    /**
     * Returns the first truthy result of `callback`, or else fails.
     * This is like `forEach`, but never returns undefined.
     */
    function findMap(array, callback) {
        for (let i = 0; i < array.length; i++) {
            const result = callback(array[i], i);
            if (result) {
                return result;
            }
        }
        return __exports__Debug.fail();
    }
    __exports__findMap = findMap;
    function contains(array, value, equalityComparer = equateValues) {
        if (array) {
            for (const v of array) {
                if (equalityComparer(v, value)) {
                    return true;
                }
            }
        }
        return false;
    }
    __exports__contains = contains;
    function arraysEqual(a, b, equalityComparer = equateValues) {
        return a.length === b.length && a.every((x, i) => equalityComparer(x, b[i]));
    }
    __exports__arraysEqual = arraysEqual;
    function indexOfAnyCharCode(text, charCodes, start) {
        for (let i = start || 0; i < text.length; i++) {
            if (contains(charCodes, text.charCodeAt(i))) {
                return i;
            }
        }
        return -1;
    }
    __exports__indexOfAnyCharCode = indexOfAnyCharCode;
    function countWhere(array, predicate) {
        let count = 0;
        if (array) {
            for (let i = 0; i < array.length; i++) {
                const v = array[i];
                if (predicate(v, i)) {
                    count++;
                }
            }
        }
        return count;
    }
    __exports__countWhere = countWhere;
    function filter(array, f) {
        if (array) {
            const len = array.length;
            let i = 0;
            while (i < len && f(array[i]))
                i++;
            if (i < len) {
                const result = array.slice(0, i);
                i++;
                while (i < len) {
                    const item = array[i];
                    if (f(item)) {
                        result.push(item);
                    }
                    i++;
                }
                return result;
            }
        }
        return array;
    }
    __exports__filter = filter;
    function filterMutate(array, f) {
        let outIndex = 0;
        for (let i = 0; i < array.length; i++) {
            if (f(array[i], i, array)) {
                array[outIndex] = array[i];
                outIndex++;
            }
        }
        array.length = outIndex;
    }
    __exports__filterMutate = filterMutate;
    function clear(array) {
        array.length = 0;
    }
    __exports__clear = clear;
    function map(array, f) {
        let result;
        if (array) {
            result = [];
            for (let i = 0; i < array.length; i++) {
                result.push(f(array[i], i));
            }
        }
        return result;
    }
    __exports__map = map;
    function mapIterator(iter, mapFn) {
        return {
            next() {
                const iterRes = iter.next();
                return iterRes.done ? iterRes : { value: mapFn(iterRes.value), done: false };
            }
        };
    }
    __exports__mapIterator = mapIterator;
    function sameMap(array, f) {
        if (array) {
            for (let i = 0; i < array.length; i++) {
                const item = array[i];
                const mapped = f(item, i);
                if (item !== mapped) {
                    const result = array.slice(0, i);
                    result.push(mapped);
                    for (i++; i < array.length; i++) {
                        result.push(f(array[i], i));
                    }
                    return result;
                }
            }
        }
        return array;
    }
    __exports__sameMap = sameMap;
    /**
     * Flattens an array containing a mix of array or non-array elements.
     *
     * @param array The array to flatten.
     */
    function flatten(array) {
        const result = [];
        for (const v of array) {
            if (v) {
                if (isArray(v)) {
                    addRange(result, v);
                }
                else {
                    result.push(v);
                }
            }
        }
        return result;
    }
    __exports__flatten = flatten;
    /**
     * Maps an array. If the mapped value is an array, it is spread into the result.
     *
     * @param array The array to map.
     * @param mapfn The callback used to map the result into one or more values.
     */
    function flatMap(array, mapfn) {
        let result;
        if (array) {
            for (let i = 0; i < array.length; i++) {
                const v = mapfn(array[i], i);
                if (v) {
                    if (isArray(v)) {
                        result = addRange(result, v);
                    }
                    else {
                        result = append(result, v);
                    }
                }
            }
        }
        return result || __exports__emptyArray;
    }
    __exports__flatMap = flatMap;
    function flatMapToMutable(array, mapfn) {
        const result = [];
        if (array) {
            for (let i = 0; i < array.length; i++) {
                const v = mapfn(array[i], i);
                if (v) {
                    if (isArray(v)) {
                        addRange(result, v);
                    }
                    else {
                        result.push(v);
                    }
                }
            }
        }
        return result;
    }
    __exports__flatMapToMutable = flatMapToMutable;
    function flatMapIterator(iter, mapfn) {
        const first = iter.next();
        if (first.done) {
            return __exports__emptyIterator;
        }
        let currentIter = getIterator(first.value);
        return {
            next() {
                while (true) {
                    const currentRes = currentIter.next();
                    if (!currentRes.done) {
                        return currentRes;
                    }
                    const iterRes = iter.next();
                    if (iterRes.done) {
                        return iterRes;
                    }
                    currentIter = getIterator(iterRes.value);
                }
            },
        };
        function getIterator(x) {
            const res = mapfn(x);
            return res === undefined ? __exports__emptyIterator : isArray(res) ? arrayIterator(res) : res;
        }
    }
    __exports__flatMapIterator = flatMapIterator;
    function sameFlatMap(array, mapfn) {
        let result;
        if (array) {
            for (let i = 0; i < array.length; i++) {
                const item = array[i];
                const mapped = mapfn(item, i);
                if (result || item !== mapped || isArray(mapped)) {
                    if (!result) {
                        result = array.slice(0, i);
                    }
                    if (isArray(mapped)) {
                        addRange(result, mapped);
                    }
                    else {
                        result.push(mapped);
                    }
                }
            }
        }
        return result || array;
    }
    __exports__sameFlatMap = sameFlatMap;
    function mapAllOrFail(array, mapFn) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            const mapped = mapFn(array[i], i);
            if (mapped === undefined) {
                return undefined;
            }
            result.push(mapped);
        }
        return result;
    }
    __exports__mapAllOrFail = mapAllOrFail;
    function mapDefined(array, mapFn) {
        const result = [];
        if (array) {
            for (let i = 0; i < array.length; i++) {
                const mapped = mapFn(array[i], i);
                if (mapped !== undefined) {
                    result.push(mapped);
                }
            }
        }
        return result;
    }
    __exports__mapDefined = mapDefined;
    function mapDefinedIterator(iter, mapFn) {
        return {
            next() {
                while (true) {
                    const res = iter.next();
                    if (res.done) {
                        return res;
                    }
                    const value = mapFn(res.value);
                    if (value !== undefined) {
                        return { value, done: false };
                    }
                }
            }
        };
    }
    __exports__mapDefinedIterator = mapDefinedIterator;
    function mapDefinedEntries(map, f) {
        if (!map) {
            return undefined;
        }
        const result = new __exports__Map();
        map.forEach((value, key) => {
            const entry = f(key, value);
            if (entry !== undefined) {
                const [newKey, newValue] = entry;
                if (newKey !== undefined && newValue !== undefined) {
                    result.set(newKey, newValue);
                }
            }
        });
        return result;
    }
    __exports__mapDefinedEntries = mapDefinedEntries;
    function mapDefinedValues(set, f) {
        if (set) {
            const result = new __exports__Set();
            set.forEach(value => {
                const newValue = f(value);
                if (newValue !== undefined) {
                    result.add(newValue);
                }
            });
            return result;
        }
    }
    __exports__mapDefinedValues = mapDefinedValues;
    function getOrUpdate(map, key, callback) {
        if (map.has(key)) {
            return map.get(key);
        }
        const value = callback();
        map.set(key, value);
        return value;
    }
    __exports__getOrUpdate = getOrUpdate;
    function tryAddToSet(set, value) {
        if (!set.has(value)) {
            set.add(value);
            return true;
        }
        return false;
    }
    __exports__tryAddToSet = tryAddToSet;
    __exports__emptyIterator = { next: () => ({ value: undefined, done: true }) };
    function singleIterator(value) {
        let done = false;
        return {
            next() {
                const wasDone = done;
                done = true;
                return wasDone ? { value: undefined, done: true } : { value, done: false };
            }
        };
    }
    __exports__singleIterator = singleIterator;
    function spanMap(array, keyfn, mapfn) {
        let result;
        if (array) {
            result = [];
            const len = array.length;
            let previousKey;
            let key;
            let start = 0;
            let pos = 0;
            while (start < len) {
                while (pos < len) {
                    const value = array[pos];
                    key = keyfn(value, pos);
                    if (pos === 0) {
                        previousKey = key;
                    }
                    else if (key !== previousKey) {
                        break;
                    }
                    pos++;
                }
                if (start < pos) {
                    const v = mapfn(array.slice(start, pos), previousKey, start, pos);
                    if (v) {
                        result.push(v);
                    }
                    start = pos;
                }
                previousKey = key;
                pos++;
            }
        }
        return result;
    }
    __exports__spanMap = spanMap;
    function mapEntries(map, f) {
        if (!map) {
            return undefined;
        }
        const result = new __exports__Map();
        map.forEach((value, key) => {
            const [newKey, newValue] = f(key, value);
            result.set(newKey, newValue);
        });
        return result;
    }
    __exports__mapEntries = mapEntries;
    function some(array, predicate) {
        if (array) {
            if (predicate) {
                for (const v of array) {
                    if (predicate(v)) {
                        return true;
                    }
                }
            }
            else {
                return array.length > 0;
            }
        }
        return false;
    }
    __exports__some = some;
    /** Calls the callback with (start, afterEnd) index pairs for each range where 'pred' is true. */
    function getRangesWhere(arr, pred, cb) {
        let start;
        for (let i = 0; i < arr.length; i++) {
            if (pred(arr[i])) {
                start = start === undefined ? i : start;
            }
            else {
                if (start !== undefined) {
                    cb(start, i);
                    start = undefined;
                }
            }
        }
        if (start !== undefined)
            cb(start, arr.length);
    }
    __exports__getRangesWhere = getRangesWhere;
    function concatenate(array1, array2) {
        if (!some(array2))
            return array1;
        if (!some(array1))
            return array2;
        return [...array1, ...array2];
    }
    __exports__concatenate = concatenate;
    function selectIndex(_, i) {
        return i;
    }
    function indicesOf(array) {
        return array.map(selectIndex);
    }
    __exports__indicesOf = indicesOf;
    function deduplicateRelational(array, equalityComparer, comparer) {
        // Perform a stable sort of the array. This ensures the first entry in a list of
        // duplicates remains the first entry in the result.
        const indices = indicesOf(array);
        stableSortIndices(array, indices, comparer);
        let last = array[indices[0]];
        const deduplicated = [indices[0]];
        for (let i = 1; i < indices.length; i++) {
            const index = indices[i];
            const item = array[index];
            if (!equalityComparer(last, item)) {
                deduplicated.push(index);
                last = item;
            }
        }
        // restore original order
        deduplicated.sort();
        return deduplicated.map(i => array[i]);
    }
    function deduplicateEquality(array, equalityComparer) {
        const result = [];
        for (const item of array) {
            pushIfUnique(result, item, equalityComparer);
        }
        return result;
    }
    /**
     * Deduplicates an unsorted array.
     * @param equalityComparer An `EqualityComparer` used to determine if two values are duplicates.
     * @param comparer An optional `Comparer` used to sort entries before comparison, though the
     * result will remain in the original order in `array`.
     */
    function deduplicate(array, equalityComparer, comparer) {
        return array.length === 0 ? [] :
            array.length === 1 ? array.slice() :
                comparer ? deduplicateRelational(array, equalityComparer, comparer) :
                    deduplicateEquality(array, equalityComparer);
    }
    __exports__deduplicate = deduplicate;
    /**
     * Deduplicates an array that has already been sorted.
     */
    function deduplicateSorted(array, comparer) {
        if (array.length === 0)
            return __exports__emptyArray;
        let last = array[0];
        const deduplicated = [last];
        for (let i = 1; i < array.length; i++) {
            const next = array[i];
            switch (comparer(next, last)) {
                // equality comparison
                case true:
                // relational comparison
                // falls through
                case 0 /* EqualTo */:
                    continue;
                case -1 /* LessThan */:
                    // If `array` is sorted, `next` should **never** be less than `last`.
                    return __exports__Debug.fail("Array is unsorted.");
            }
            deduplicated.push(last = next);
        }
        return deduplicated;
    }
    function insertSorted(array, insert, compare) {
        if (array.length === 0) {
            array.push(insert);
            return;
        }
        const insertIndex = binarySearch(array, insert, identity, compare);
        if (insertIndex < 0) {
            array.splice(~insertIndex, 0, insert);
        }
    }
    __exports__insertSorted = insertSorted;
    function sortAndDeduplicate(array, comparer, equalityComparer) {
        return deduplicateSorted(sort(array, comparer), equalityComparer || comparer || compareStringsCaseSensitive);
    }
    __exports__sortAndDeduplicate = sortAndDeduplicate;
    function arrayIsSorted(array, comparer) {
        if (array.length < 2)
            return true;
        let prevElement = array[0];
        for (const element of array.slice(1)) {
            if (comparer(prevElement, element) === 1 /* GreaterThan */) {
                return false;
            }
            prevElement = element;
        }
        return true;
    }
    __exports__arrayIsSorted = arrayIsSorted;
    function arrayIsEqualTo(array1, array2, equalityComparer = equateValues) {
        if (!array1 || !array2) {
            return array1 === array2;
        }
        if (array1.length !== array2.length) {
            return false;
        }
        for (let i = 0; i < array1.length; i++) {
            if (!equalityComparer(array1[i], array2[i], i)) {
                return false;
            }
        }
        return true;
    }
    __exports__arrayIsEqualTo = arrayIsEqualTo;
    function compact(array) {
        let result;
        if (array) {
            for (let i = 0; i < array.length; i++) {
                const v = array[i];
                if (result || !v) {
                    if (!result) {
                        result = array.slice(0, i);
                    }
                    if (v) {
                        result.push(v);
                    }
                }
            }
        }
        return result || array;
    }
    __exports__compact = compact;
    /**
     * Gets the relative complement of `arrayA` with respect to `arrayB`, returning the elements that
     * are not present in `arrayA` but are present in `arrayB`. Assumes both arrays are sorted
     * based on the provided comparer.
     */
    function relativeComplement(arrayA, arrayB, comparer) {
        if (!arrayB || !arrayA || arrayB.length === 0 || arrayA.length === 0)
            return arrayB;
        const result = [];
        loopB: for (let offsetA = 0, offsetB = 0; offsetB < arrayB.length; offsetB++) {
            if (offsetB > 0) {
                // Ensure `arrayB` is properly sorted.
                __exports__Debug.assertGreaterThanOrEqual(comparer(arrayB[offsetB], arrayB[offsetB - 1]), 0 /* EqualTo */);
            }
            loopA: for (const startA = offsetA; offsetA < arrayA.length; offsetA++) {
                if (offsetA > startA) {
                    // Ensure `arrayA` is properly sorted. We only need to perform this check if
                    // `offsetA` has changed since we entered the loop.
                    __exports__Debug.assertGreaterThanOrEqual(comparer(arrayA[offsetA], arrayA[offsetA - 1]), 0 /* EqualTo */);
                }
                switch (comparer(arrayB[offsetB], arrayA[offsetA])) {
                    case -1 /* LessThan */:
                        // If B is less than A, B does not exist in arrayA. Add B to the result and
                        // move to the next element in arrayB without changing the current position
                        // in arrayA.
                        result.push(arrayB[offsetB]);
                        continue loopB;
                    case 0 /* EqualTo */:
                        // If B is equal to A, B exists in arrayA. Move to the next element in
                        // arrayB without adding B to the result or changing the current position
                        // in arrayA.
                        continue loopB;
                    case 1 /* GreaterThan */:
                        // If B is greater than A, we need to keep looking for B in arrayA. Move to
                        // the next element in arrayA and recheck.
                        continue loopA;
                }
            }
        }
        return result;
    }
    __exports__relativeComplement = relativeComplement;
    function sum(array, prop) {
        let result = 0;
        for (const v of array) {
            result += v[prop];
        }
        return result;
    }
    __exports__sum = sum;
    function append(to, value) {
        if (value === undefined)
            return to;
        if (to === undefined)
            return [value];
        to.push(value);
        return to;
    }
    __exports__append = append;
    function combine(xs, ys) {
        if (xs === undefined)
            return ys;
        if (ys === undefined)
            return xs;
        if (isArray(xs))
            return isArray(ys) ? concatenate(xs, ys) : append(xs, ys);
        if (isArray(ys))
            return append(ys, xs);
        return [xs, ys];
    }
    __exports__combine = combine;
    /**
     * Gets the actual offset into an array for a relative offset. Negative offsets indicate a
     * position offset from the end of the array.
     */
    function toOffset(array, offset) {
        return offset < 0 ? array.length + offset : offset;
    }
    function addRange(to, from, start, end) {
        if (from === undefined || from.length === 0)
            return to;
        if (to === undefined)
            return from.slice(start, end);
        start = start === undefined ? 0 : toOffset(from, start);
        end = end === undefined ? from.length : toOffset(from, end);
        for (let i = start; i < end && i < from.length; i++) {
            if (from[i] !== undefined) {
                to.push(from[i]);
            }
        }
        return to;
    }
    __exports__addRange = addRange;
    /**
     * @return Whether the value was added.
     */
    function pushIfUnique(array, toAdd, equalityComparer) {
        if (contains(array, toAdd, equalityComparer)) {
            return false;
        }
        else {
            array.push(toAdd);
            return true;
        }
    }
    __exports__pushIfUnique = pushIfUnique;
    /**
     * Unlike `pushIfUnique`, this can take `undefined` as an input, and returns a new array.
     */
    function appendIfUnique(array, toAdd, equalityComparer) {
        if (array) {
            pushIfUnique(array, toAdd, equalityComparer);
            return array;
        }
        else {
            return [toAdd];
        }
    }
    __exports__appendIfUnique = appendIfUnique;
    function stableSortIndices(array, indices, comparer) {
        // sort indices by value then position
        indices.sort((x, y) => comparer(array[x], array[y]) || compareValues(x, y));
    }
    /**
     * Returns a new sorted array.
     */
    function sort(array, comparer) {
        return (array.length === 0 ? array : array.slice().sort(comparer));
    }
    __exports__sort = sort;
    function arrayIterator(array) {
        let i = 0;
        return { next: () => {
                if (i === array.length) {
                    return { value: undefined, done: true };
                }
                else {
                    i++;
                    return { value: array[i - 1], done: false };
                }
            } };
    }
    __exports__arrayIterator = arrayIterator;
    function arrayReverseIterator(array) {
        let i = array.length;
        return {
            next: () => {
                if (i === 0) {
                    return { value: undefined, done: true };
                }
                else {
                    i--;
                    return { value: array[i], done: false };
                }
            }
        };
    }
    __exports__arrayReverseIterator = arrayReverseIterator;
    /**
     * Stable sort of an array. Elements equal to each other maintain their relative position in the array.
     */
    function stableSort(array, comparer) {
        const indices = indicesOf(array);
        stableSortIndices(array, indices, comparer);
        return indices.map(i => array[i]);
    }
    __exports__stableSort = stableSort;
    function rangeEquals(array1, array2, pos, end) {
        while (pos < end) {
            if (array1[pos] !== array2[pos]) {
                return false;
            }
            pos++;
        }
        return true;
    }
    __exports__rangeEquals = rangeEquals;
    /**
     * Returns the element at a specific offset in an array if non-empty, `undefined` otherwise.
     * A negative offset indicates the element should be retrieved from the end of the array.
     */
    function elementAt(array, offset) {
        if (array) {
            offset = toOffset(array, offset);
            if (offset < array.length) {
                return array[offset];
            }
        }
        return undefined;
    }
    __exports__elementAt = elementAt;
    /**
     * Returns the first element of an array if non-empty, `undefined` otherwise.
     */
    function firstOrUndefined(array) {
        return array.length === 0 ? undefined : array[0];
    }
    __exports__firstOrUndefined = firstOrUndefined;
    function first(array) {
        __exports__Debug.assert(array.length !== 0);
        return array[0];
    }
    __exports__first = first;
    /**
     * Returns the last element of an array if non-empty, `undefined` otherwise.
     */
    function lastOrUndefined(array) {
        return array.length === 0 ? undefined : array[array.length - 1];
    }
    __exports__lastOrUndefined = lastOrUndefined;
    function last(array) {
        __exports__Debug.assert(array.length !== 0);
        return array[array.length - 1];
    }
    __exports__last = last;
    /**
     * Returns the only element of an array if it contains only one element, `undefined` otherwise.
     */
    function singleOrUndefined(array) {
        return array && array.length === 1
            ? array[0]
            : undefined;
    }
    __exports__singleOrUndefined = singleOrUndefined;
    function singleOrMany(array) {
        return array && array.length === 1
            ? array[0]
            : array;
    }
    __exports__singleOrMany = singleOrMany;
    function replaceElement(array, index, value) {
        const result = array.slice(0);
        result[index] = value;
        return result;
    }
    __exports__replaceElement = replaceElement;
    /**
     * Performs a binary search, finding the index at which `value` occurs in `array`.
     * If no such index is found, returns the 2's-complement of first index at which
     * `array[index]` exceeds `value`.
     * @param array A sorted array whose first element must be no larger than number
     * @param value The value to be searched for in the array.
     * @param keySelector A callback used to select the search key from `value` and each element of
     * `array`.
     * @param keyComparer A callback used to compare two keys in a sorted array.
     * @param offset An offset into `array` at which to start the search.
     */
    function binarySearch(array, value, keySelector, keyComparer, offset) {
        return binarySearchKey(array, keySelector(value), keySelector, keyComparer, offset);
    }
    __exports__binarySearch = binarySearch;
    /**
     * Performs a binary search, finding the index at which an object with `key` occurs in `array`.
     * If no such index is found, returns the 2's-complement of first index at which
     * `array[index]` exceeds `key`.
     * @param array A sorted array whose first element must be no larger than number
     * @param key The key to be searched for in the array.
     * @param keySelector A callback used to select the search key from each element of `array`.
     * @param keyComparer A callback used to compare two keys in a sorted array.
     * @param offset An offset into `array` at which to start the search.
     */
    function binarySearchKey(array, key, keySelector, keyComparer, offset) {
        if (!some(array)) {
            return -1;
        }
        let low = offset || 0;
        let high = array.length - 1;
        while (low <= high) {
            const middle = low + ((high - low) >> 1);
            const midKey = keySelector(array[middle], middle);
            switch (keyComparer(midKey, key)) {
                case -1 /* LessThan */:
                    low = middle + 1;
                    break;
                case 0 /* EqualTo */:
                    return middle;
                case 1 /* GreaterThan */:
                    high = middle - 1;
                    break;
            }
        }
        return ~low;
    }
    __exports__binarySearchKey = binarySearchKey;
    function reduceLeft(array, f, initial, start, count) {
        if (array && array.length > 0) {
            const size = array.length;
            if (size > 0) {
                let pos = start === undefined || start < 0 ? 0 : start;
                const end = count === undefined || pos + count > size - 1 ? size - 1 : pos + count;
                let result;
                if (arguments.length <= 2) {
                    result = array[pos];
                    pos++;
                }
                else {
                    result = initial;
                }
                while (pos <= end) {
                    result = f(result, array[pos], pos);
                    pos++;
                }
                return result;
            }
        }
        return initial;
    }
    __exports__reduceLeft = reduceLeft;
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    /**
     * Indicates whether a map-like contains an own property with the specified key.
     *
     * @param map A map-like.
     * @param key A property key.
     */
    function hasProperty(map, key) {
        return hasOwnProperty.call(map, key);
    }
    __exports__hasProperty = hasProperty;
    /**
     * Gets the value of an owned property in a map-like.
     *
     * @param map A map-like.
     * @param key A property key.
     */
    function getProperty(map, key) {
        return hasOwnProperty.call(map, key) ? map[key] : undefined;
    }
    __exports__getProperty = getProperty;
    /**
     * Gets the owned, enumerable property keys of a map-like.
     */
    function getOwnKeys(map) {
        const keys = [];
        for (const key in map) {
            if (hasOwnProperty.call(map, key)) {
                keys.push(key);
            }
        }
        return keys;
    }
    __exports__getOwnKeys = getOwnKeys;
    function getAllKeys(obj) {
        const result = [];
        do {
            const names = Object.getOwnPropertyNames(obj);
            for (const name of names) {
                pushIfUnique(result, name);
            }
        } while (obj = Object.getPrototypeOf(obj));
        return result;
    }
    __exports__getAllKeys = getAllKeys;
    function getOwnValues(sparseArray) {
        const values = [];
        for (const key in sparseArray) {
            if (hasOwnProperty.call(sparseArray, key)) {
                values.push(sparseArray[key]);
            }
        }
        return values;
    }
    __exports__getOwnValues = getOwnValues;
    const _entries = Object.entries || ((obj) => {
        const keys = getOwnKeys(obj);
        const result = Array(keys.length);
        for (let i = 0; i < keys.length; i++) {
            result[i] = [keys[i], obj[keys[i]]];
        }
        return result;
    });
    function getEntries(obj) {
        return obj ? _entries(obj) : [];
    }
    __exports__getEntries = getEntries;
    function arrayOf(count, f) {
        const result = new Array(count);
        for (let i = 0; i < count; i++) {
            result[i] = f(i);
        }
        return result;
    }
    __exports__arrayOf = arrayOf;
    function arrayFrom(iterator, map) {
        const result = [];
        for (let iterResult = iterator.next(); !iterResult.done; iterResult = iterator.next()) {
            result.push(map ? map(iterResult.value) : iterResult.value);
        }
        return result;
    }
    __exports__arrayFrom = arrayFrom;
    function assign(t, ...args) {
        for (const arg of args) {
            if (arg === undefined)
                continue;
            for (const p in arg) {
                if (hasProperty(arg, p)) {
                    t[p] = arg[p];
                }
            }
        }
        return t;
    }
    __exports__assign = assign;
    /**
     * Performs a shallow equality comparison of the contents of two map-likes.
     *
     * @param left A map-like whose properties should be compared.
     * @param right A map-like whose properties should be compared.
     */
    function equalOwnProperties(left, right, equalityComparer = equateValues) {
        if (left === right)
            return true;
        if (!left || !right)
            return false;
        for (const key in left) {
            if (hasOwnProperty.call(left, key)) {
                if (!hasOwnProperty.call(right, key))
                    return false;
                if (!equalityComparer(left[key], right[key]))
                    return false;
            }
        }
        for (const key in right) {
            if (hasOwnProperty.call(right, key)) {
                if (!hasOwnProperty.call(left, key))
                    return false;
            }
        }
        return true;
    }
    __exports__equalOwnProperties = equalOwnProperties;
    function arrayToMap(array, makeKey, makeValue = identity) {
        const result = new __exports__Map();
        for (const value of array) {
            const key = makeKey(value);
            if (key !== undefined)
                result.set(key, makeValue(value));
        }
        return result;
    }
    __exports__arrayToMap = arrayToMap;
    function arrayToNumericMap(array, makeKey, makeValue = identity) {
        const result = [];
        for (const value of array) {
            result[makeKey(value)] = makeValue(value);
        }
        return result;
    }
    __exports__arrayToNumericMap = arrayToNumericMap;
    function arrayToMultiMap(values, makeKey, makeValue = identity) {
        const result = createMultiMap();
        for (const value of values) {
            result.add(makeKey(value), makeValue(value));
        }
        return result;
    }
    __exports__arrayToMultiMap = arrayToMultiMap;
    function group(values, getGroupId, resultSelector = identity) {
        return arrayFrom(arrayToMultiMap(values, getGroupId).values(), resultSelector);
    }
    __exports__group = group;
    function clone(object) {
        const result = {};
        for (const id in object) {
            if (hasOwnProperty.call(object, id)) {
                result[id] = object[id];
            }
        }
        return result;
    }
    __exports__clone = clone;
    /**
     * Creates a new object by adding the own properties of `second`, then the own properties of `first`.
     *
     * NOTE: This means that if a property exists in both `first` and `second`, the property in `first` will be chosen.
     */
    function extend(first, second) {
        const result = {};
        for (const id in second) {
            if (hasOwnProperty.call(second, id)) {
                result[id] = second[id];
            }
        }
        for (const id in first) {
            if (hasOwnProperty.call(first, id)) {
                result[id] = first[id];
            }
        }
        return result;
    }
    __exports__extend = extend;
    function copyProperties(first, second) {
        for (const id in second) {
            if (hasOwnProperty.call(second, id)) {
                first[id] = second[id];
            }
        }
    }
    __exports__copyProperties = copyProperties;
    function maybeBind(obj, fn) {
        return fn ? fn.bind(obj) : undefined;
    }
    __exports__maybeBind = maybeBind;
    function createMultiMap() {
        const map = new __exports__Map();
        map.add = multiMapAdd;
        map.remove = multiMapRemove;
        return map;
    }
    __exports__createMultiMap = createMultiMap;
    function multiMapAdd(key, value) {
        let values = this.get(key);
        if (values) {
            values.push(value);
        }
        else {
            this.set(key, values = [value]);
        }
        return values;
    }
    function multiMapRemove(key, value) {
        const values = this.get(key);
        if (values) {
            unorderedRemoveItem(values, value);
            if (!values.length) {
                this.delete(key);
            }
        }
    }
    function createUnderscoreEscapedMultiMap() {
        return createMultiMap();
    }
    __exports__createUnderscoreEscapedMultiMap = createUnderscoreEscapedMultiMap;
    /**
     * Tests whether a value is an array.
     */
    function isArray(value) {
        return Array.isArray ? Array.isArray(value) : value instanceof Array;
    }
    __exports__isArray = isArray;
    function toArray(value) {
        return isArray(value) ? value : [value];
    }
    __exports__toArray = toArray;
    /**
     * Tests whether a value is string
     */
    function isString(text) {
        return typeof text === "string";
    }
    __exports__isString = isString;
    function isNumber(x) {
        return typeof x === "number";
    }
    __exports__isNumber = isNumber;
    function tryCast(value, test) {
        return value !== undefined && test(value) ? value : undefined;
    }
    __exports__tryCast = tryCast;
    function cast(value, test) {
        if (value !== undefined && test(value))
            return value;
        return __exports__Debug.fail(`Invalid cast. The supplied value ${value} did not pass the test '${__exports__Debug.getFunctionName(test)}'.`);
    }
    __exports__cast = cast;
    /** Does nothing. */
    function noop(_) { }
    __exports__noop = noop;
    /** Do nothing and return false */
    function returnFalse() { return false; }
    __exports__returnFalse = returnFalse;
    /** Do nothing and return true */
    function returnTrue() { return true; }
    __exports__returnTrue = returnTrue;
    /** Do nothing and return undefined */
    function returnUndefined() { return undefined; }
    __exports__returnUndefined = returnUndefined;
    /** Returns its argument. */
    function identity(x) { return x; }
    __exports__identity = identity;
    /** Returns lower case string */
    function toLowerCase(x) { return x.toLowerCase(); }
    __exports__toLowerCase = toLowerCase;
    // We convert the file names to lower case as key for file name on case insensitive file system
    // While doing so we need to handle special characters (eg \u0130) to ensure that we dont convert
    // it to lower case, fileName with its lowercase form can exist along side it.
    // Handle special characters and make those case sensitive instead
    //
    // |-#--|-Unicode--|-Char code-|-Desc-------------------------------------------------------------------|
    // | 1. | i        | 105       | Ascii i                                                                |
    // | 2. | I        | 73        | Ascii I                                                                |
    // |-------- Special characters ------------------------------------------------------------------------|
    // | 3. | \u0130   | 304       | Upper case I with dot above                                            |
    // | 4. | i,\u0307 | 105,775   | i, followed by 775: Lower case of (3rd item)                           |
    // | 5. | I,\u0307 | 73,775    | I, followed by 775: Upper case of (4th item), lower case is (4th item) |
    // | 6. | \u0131   | 305       | Lower case i without dot, upper case is I (2nd item)                   |
    // | 7. | \u00DF   | 223       | Lower case sharp s                                                     |
    //
    // Because item 3 is special where in its lowercase character has its own
    // upper case form we cant convert its case.
    // Rest special characters are either already in lower case format or
    // they have corresponding upper case character so they dont need special handling
    //
    // But to avoid having to do string building for most common cases, also ignore
    // a-z, 0-9, \u0131, \u00DF, \, /, ., : and space
    const fileNameLowerCaseRegExp = /[^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+/g;
    /**
     * Case insensitive file systems have descripencies in how they handle some characters (eg. turkish Upper case I with dot on top - \u0130)
     * This function is used in places where we want to make file name as a key on these systems
     * It is possible on mac to be able to refer to file name with I with dot on top as a fileName with its lower case form
     * But on windows we cannot. Windows can have fileName with I with dot on top next to its lower case and they can not each be referred with the lowercase forms
     * Technically we would want this function to be platform sepcific as well but
     * our api has till now only taken caseSensitive as the only input and just for some characters we dont want to update API and ensure all customers use those api
     * We could use upper case and we would still need to deal with the descripencies but
     * we want to continue using lower case since in most cases filenames are lowercasewe and wont need any case changes and avoid having to store another string for the key
     * So for this function purpose, we go ahead and assume character I with dot on top it as case sensitive since its very unlikely to use lower case form of that special character
     */
    function toFileNameLowerCase(x) {
        return fileNameLowerCaseRegExp.test(x) ?
            x.replace(fileNameLowerCaseRegExp, toLowerCase) :
            x;
    }
    __exports__toFileNameLowerCase = toFileNameLowerCase;
    /** Throws an error because a function is not implemented. */
    function notImplemented() {
        throw new Error("Not implemented");
    }
    __exports__notImplemented = notImplemented;
    function memoize(callback) {
        let value;
        return () => {
            if (callback) {
                value = callback();
                callback = undefined;
            }
            return value;
        };
    }
    __exports__memoize = memoize;
    /** A version of `memoize` that supports a single primitive argument */
    function memoizeOne(callback) {
        const map = new __exports__Map();
        return (arg) => {
            const key = `${typeof arg}:${arg}`;
            let value = map.get(key);
            if (value === undefined && !map.has(key)) {
                value = callback(arg);
                map.set(key, value);
            }
            return value;
        };
    }
    __exports__memoizeOne = memoizeOne;
    function compose(a, b, c, d, e) {
        if (!!e) {
            const args = [];
            for (let i = 0; i < arguments.length; i++) {
                args[i] = arguments[i];
            }
            return t => reduceLeft(args, (u, f) => f(u), t);
        }
        else if (d) {
            return t => d(c(b(a(t))));
        }
        else if (c) {
            return t => c(b(a(t)));
        }
        else if (b) {
            return t => b(a(t));
        }
        else if (a) {
            return t => a(t);
        }
        else {
            return t => t;
        }
    }
    __exports__compose = compose;
    function equateValues(a, b) {
        return a === b;
    }
    __exports__equateValues = equateValues;
    /**
     * Compare the equality of two strings using a case-sensitive ordinal comparison.
     *
     * Case-sensitive comparisons compare both strings one code-point at a time using the integer
     * value of each code-point after applying `toUpperCase` to each string. We always map both
     * strings to their upper-case form as some unicode characters do not properly round-trip to
     * lowercase (such as `ẞ` (German sharp capital s)).
     */
    function equateStringsCaseInsensitive(a, b) {
        return a === b
            || a !== undefined
                && b !== undefined
                && a.toUpperCase() === b.toUpperCase();
    }
    __exports__equateStringsCaseInsensitive = equateStringsCaseInsensitive;
    /**
     * Compare the equality of two strings using a case-sensitive ordinal comparison.
     *
     * Case-sensitive comparisons compare both strings one code-point at a time using the
     * integer value of each code-point.
     */
    function equateStringsCaseSensitive(a, b) {
        return equateValues(a, b);
    }
    __exports__equateStringsCaseSensitive = equateStringsCaseSensitive;
    function compareComparableValues(a, b) {
        return a === b ? 0 /* EqualTo */ :
            a === undefined ? -1 /* LessThan */ :
                b === undefined ? 1 /* GreaterThan */ :
                    a < b ? -1 /* LessThan */ :
                        1 /* GreaterThan */;
    }
    /**
     * Compare two numeric values for their order relative to each other.
     * To compare strings, use any of the `compareStrings` functions.
     */
    function compareValues(a, b) {
        return compareComparableValues(a, b);
    }
    __exports__compareValues = compareValues;
    /**
     * Compare two TextSpans, first by `start`, then by `length`.
     */
    function compareTextSpans(a, b) {
        return compareValues(a?.start, b?.start) || compareValues(a?.length, b?.length);
    }
    __exports__compareTextSpans = compareTextSpans;
    function min(a, b, compare) {
        return compare(a, b) === -1 /* LessThan */ ? a : b;
    }
    __exports__min = min;
    /**
     * Compare two strings using a case-insensitive ordinal comparison.
     *
     * Ordinal comparisons are based on the difference between the unicode code points of both
     * strings. Characters with multiple unicode representations are considered unequal. Ordinal
     * comparisons provide predictable ordering, but place "a" after "B".
     *
     * Case-insensitive comparisons compare both strings one code-point at a time using the integer
     * value of each code-point after applying `toUpperCase` to each string. We always map both
     * strings to their upper-case form as some unicode characters do not properly round-trip to
     * lowercase (such as `ẞ` (German sharp capital s)).
     */
    function compareStringsCaseInsensitive(a, b) {
        if (a === b)
            return 0 /* EqualTo */;
        if (a === undefined)
            return -1 /* LessThan */;
        if (b === undefined)
            return 1 /* GreaterThan */;
        a = a.toUpperCase();
        b = b.toUpperCase();
        return a < b ? -1 /* LessThan */ : a > b ? 1 /* GreaterThan */ : 0 /* EqualTo */;
    }
    __exports__compareStringsCaseInsensitive = compareStringsCaseInsensitive;
    /**
     * Compare two strings using a case-sensitive ordinal comparison.
     *
     * Ordinal comparisons are based on the difference between the unicode code points of both
     * strings. Characters with multiple unicode representations are considered unequal. Ordinal
     * comparisons provide predictable ordering, but place "a" after "B".
     *
     * Case-sensitive comparisons compare both strings one code-point at a time using the integer
     * value of each code-point.
     */
    function compareStringsCaseSensitive(a, b) {
        return compareComparableValues(a, b);
    }
    __exports__compareStringsCaseSensitive = compareStringsCaseSensitive;
    function getStringComparer(ignoreCase) {
        return ignoreCase ? compareStringsCaseInsensitive : compareStringsCaseSensitive;
    }
    __exports__getStringComparer = getStringComparer;
    /**
     * Creates a string comparer for use with string collation in the UI.
     */
    const createUIStringComparer = (() => {
        let defaultComparer;
        let enUSComparer;
        const stringComparerFactory = getStringComparerFactory();
        return createStringComparer;
        function compareWithCallback(a, b, comparer) {
            if (a === b)
                return 0 /* EqualTo */;
            if (a === undefined)
                return -1 /* LessThan */;
            if (b === undefined)
                return 1 /* GreaterThan */;
            const value = comparer(a, b);
            return value < 0 ? -1 /* LessThan */ : value > 0 ? 1 /* GreaterThan */ : 0 /* EqualTo */;
        }
        function createIntlCollatorStringComparer(locale) {
            // Intl.Collator.prototype.compare is bound to the collator. See NOTE in
            // http://www.ecma-international.org/ecma-402/2.0/#sec-Intl.Collator.prototype.compare
            const comparer = new Intl.Collator(locale, { usage: "sort", sensitivity: "variant" }).compare;
            return (a, b) => compareWithCallback(a, b, comparer);
        }
        function createLocaleCompareStringComparer(locale) {
            // if the locale is not the default locale (`undefined`), use the fallback comparer.
            if (locale !== undefined)
                return createFallbackStringComparer();
            return (a, b) => compareWithCallback(a, b, compareStrings);
            function compareStrings(a, b) {
                return a.localeCompare(b);
            }
        }
        function createFallbackStringComparer() {
            // An ordinal comparison puts "A" after "b", but for the UI we want "A" before "b".
            // We first sort case insensitively.  So "Aaa" will come before "baa".
            // Then we sort case sensitively, so "aaa" will come before "Aaa".
            //
            // For case insensitive comparisons we always map both strings to their
            // upper-case form as some unicode characters do not properly round-trip to
            // lowercase (such as `Ã¡ÂºÅ¾` (German sharp capital s)).
            return (a, b) => compareWithCallback(a, b, compareDictionaryOrder);
            function compareDictionaryOrder(a, b) {
                return compareStrings(a.toUpperCase(), b.toUpperCase()) || compareStrings(a, b);
            }
            function compareStrings(a, b) {
                return a < b ? -1 /* LessThan */ : a > b ? 1 /* GreaterThan */ : 0 /* EqualTo */;
            }
        }
        function getStringComparerFactory() {
            // If the host supports Intl, we use it for comparisons using the default locale.
            if (typeof Intl === "object" && typeof Intl.Collator === "function") {
                return createIntlCollatorStringComparer;
            }
            // If the host does not support Intl, we fall back to localeCompare.
            // localeCompare in Node v0.10 is just an ordinal comparison, so don't use it.
            if (typeof String.prototype.localeCompare === "function" &&
                typeof String.prototype.toLocaleUpperCase === "function" &&
                "a".localeCompare("B") < 0) {
                return createLocaleCompareStringComparer;
            }
            // Otherwise, fall back to ordinal comparison:
            return createFallbackStringComparer;
        }
        function createStringComparer(locale) {
            // Hold onto common string comparers. This avoids constantly reallocating comparers during
            // tests.
            if (locale === undefined) {
                return defaultComparer || (defaultComparer = stringComparerFactory(locale));
            }
            else if (locale === "en-US") {
                return enUSComparer || (enUSComparer = stringComparerFactory(locale));
            }
            else {
                return stringComparerFactory(locale);
            }
        }
    })();
    let uiComparerCaseSensitive;
    let uiLocale;
    function getUILocale() {
        return uiLocale;
    }
    __exports__getUILocale = getUILocale;
    function setUILocale(value) {
        if (uiLocale !== value) {
            uiLocale = value;
            uiComparerCaseSensitive = undefined;
        }
    }
    __exports__setUILocale = setUILocale;
    /**
     * Compare two strings in a using the case-sensitive sort behavior of the UI locale.
     *
     * Ordering is not predictable between different host locales, but is best for displaying
     * ordered data for UI presentation. Characters with multiple unicode representations may
     * be considered equal.
     *
     * Case-sensitive comparisons compare strings that differ in base characters, or
     * accents/diacritic marks, or case as unequal.
     */
    function compareStringsCaseSensitiveUI(a, b) {
        const comparer = uiComparerCaseSensitive || (uiComparerCaseSensitive = createUIStringComparer(uiLocale));
        return comparer(a, b);
    }
    __exports__compareStringsCaseSensitiveUI = compareStringsCaseSensitiveUI;
    function compareProperties(a, b, key, comparer) {
        return a === b ? 0 /* EqualTo */ :
            a === undefined ? -1 /* LessThan */ :
                b === undefined ? 1 /* GreaterThan */ :
                    comparer(a[key], b[key]);
    }
    __exports__compareProperties = compareProperties;
    /** True is greater than false. */
    function compareBooleans(a, b) {
        return compareValues(a ? 1 : 0, b ? 1 : 0);
    }
    __exports__compareBooleans = compareBooleans;
    /**
     * Given a name and a list of names that are *not* equal to the name, return a spelling suggestion if there is one that is close enough.
     * Names less than length 3 only check for case-insensitive equality.
     *
     * find the candidate with the smallest Levenshtein distance,
     *    except for candidates:
     *      * With no name
     *      * Whose length differs from the target name by more than 0.34 of the length of the name.
     *      * Whose levenshtein distance is more than 0.4 of the length of the name
     *        (0.4 allows 1 substitution/transposition for every 5 characters,
     *         and 1 insertion/deletion at 3 characters)
     */
    function getSpellingSuggestion(name, candidates, getName) {
        const maximumLengthDifference = Math.min(2, Math.floor(name.length * 0.34));
        let bestDistance = Math.floor(name.length * 0.4) + 1; // If the best result is worse than this, don't bother.
        let bestCandidate;
        for (const candidate of candidates) {
            const candidateName = getName(candidate);
            if (candidateName !== undefined && Math.abs(candidateName.length - name.length) <= maximumLengthDifference) {
                if (candidateName === name) {
                    continue;
                }
                // Only consider candidates less than 3 characters long when they differ by case.
                // Otherwise, don't bother, since a user would usually notice differences of a 2-character name.
                if (candidateName.length < 3 && candidateName.toLowerCase() !== name.toLowerCase()) {
                    continue;
                }
                const distance = levenshteinWithMax(name, candidateName, bestDistance - 0.1);
                if (distance === undefined) {
                    continue;
                }
                __exports__Debug.assert(distance < bestDistance); // Else `levenshteinWithMax` should return undefined
                bestDistance = distance;
                bestCandidate = candidate;
            }
        }
        return bestCandidate;
    }
    __exports__getSpellingSuggestion = getSpellingSuggestion;
    function levenshteinWithMax(s1, s2, max) {
        let previous = new Array(s2.length + 1);
        let current = new Array(s2.length + 1);
        /** Represents any value > max. We don't care about the particular value. */
        const big = max + 0.01;
        for (let i = 0; i <= s2.length; i++) {
            previous[i] = i;
        }
        for (let i = 1; i <= s1.length; i++) {
            const c1 = s1.charCodeAt(i - 1);
            const minJ = Math.ceil(i > max ? i - max : 1);
            const maxJ = Math.floor(s2.length > max + i ? max + i : s2.length);
            current[0] = i;
            /** Smallest value of the matrix in the ith column. */
            let colMin = i;
            for (let j = 1; j < minJ; j++) {
                current[j] = big;
            }
            for (let j = minJ; j <= maxJ; j++) {
                // case difference should be significantly cheaper than other differences
                const substitutionDistance = s1[i - 1].toLowerCase() === s2[j - 1].toLowerCase()
                    ? (previous[j - 1] + 0.1)
                    : (previous[j - 1] + 2);
                const dist = c1 === s2.charCodeAt(j - 1)
                    ? previous[j - 1]
                    : Math.min(/*delete*/ previous[j] + 1, /*insert*/ current[j - 1] + 1, /*substitute*/ substitutionDistance);
                current[j] = dist;
                colMin = Math.min(colMin, dist);
            }
            for (let j = maxJ + 1; j <= s2.length; j++) {
                current[j] = big;
            }
            if (colMin > max) {
                // Give up -- everything in this column is > max and it can't get better in future columns.
                return undefined;
            }
            const temp = previous;
            previous = current;
            current = temp;
        }
        const res = previous[s2.length];
        return res > max ? undefined : res;
    }
    function endsWith(str, suffix) {
        const expectedPos = str.length - suffix.length;
        return expectedPos >= 0 && str.indexOf(suffix, expectedPos) === expectedPos;
    }
    __exports__endsWith = endsWith;
    function removeSuffix(str, suffix) {
        return endsWith(str, suffix) ? str.slice(0, str.length - suffix.length) : str;
    }
    __exports__removeSuffix = removeSuffix;
    function tryRemoveSuffix(str, suffix) {
        return endsWith(str, suffix) ? str.slice(0, str.length - suffix.length) : undefined;
    }
    __exports__tryRemoveSuffix = tryRemoveSuffix;
    function stringContains(str, substring) {
        return str.indexOf(substring) !== -1;
    }
    __exports__stringContains = stringContains;
    /**
     * Takes a string like "jquery-min.4.2.3" and returns "jquery"
     */
    function removeMinAndVersionNumbers(fileName) {
        // Match a "." or "-" followed by a version number or 'min' at the end of the name
        const trailingMinOrVersion = /[.-]((min)|(\d+(\.\d+)*))$/;
        // The "min" or version may both be present, in either order, so try applying the above twice.
        return fileName.replace(trailingMinOrVersion, "").replace(trailingMinOrVersion, "");
    }
    __exports__removeMinAndVersionNumbers = removeMinAndVersionNumbers;
    /** Remove an item from an array, moving everything to its right one space left. */
    function orderedRemoveItem(array, item) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === item) {
                orderedRemoveItemAt(array, i);
                return true;
            }
        }
        return false;
    }
    __exports__orderedRemoveItem = orderedRemoveItem;
    /** Remove an item by index from an array, moving everything to its right one space left. */
    function orderedRemoveItemAt(array, index) {
        // This seems to be faster than either `array.splice(i, 1)` or `array.copyWithin(i, i+ 1)`.
        for (let i = index; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }
        array.pop();
    }
    __exports__orderedRemoveItemAt = orderedRemoveItemAt;
    function unorderedRemoveItemAt(array, index) {
        // Fill in the "hole" left at `index`.
        array[index] = array[array.length - 1];
        array.pop();
    }
    __exports__unorderedRemoveItemAt = unorderedRemoveItemAt;
    /** Remove the *first* occurrence of `item` from the array. */
    function unorderedRemoveItem(array, item) {
        return unorderedRemoveFirstItemWhere(array, element => element === item);
    }
    __exports__unorderedRemoveItem = unorderedRemoveItem;
    /** Remove the *first* element satisfying `predicate`. */
    function unorderedRemoveFirstItemWhere(array, predicate) {
        for (let i = 0; i < array.length; i++) {
            if (predicate(array[i])) {
                unorderedRemoveItemAt(array, i);
                return true;
            }
        }
        return false;
    }
    function createGetCanonicalFileName(useCaseSensitiveFileNames) {
        return useCaseSensitiveFileNames ? identity : toFileNameLowerCase;
    }
    __exports__createGetCanonicalFileName = createGetCanonicalFileName;
    function patternText({ prefix, suffix }) {
        return `${prefix}*${suffix}`;
    }
    __exports__patternText = patternText;
    /**
     * Given that candidate matches pattern, returns the text matching the '*'.
     * E.g.: matchedText(tryParsePattern("foo*baz"), "foobarbaz") === "bar"
     */
    function matchedText(pattern, candidate) {
        __exports__Debug.assert(isPatternMatch(pattern, candidate));
        return candidate.substring(pattern.prefix.length, candidate.length - pattern.suffix.length);
    }
    __exports__matchedText = matchedText;
    /** Return the object corresponding to the best pattern to match `candidate`. */
    function findBestPatternMatch(values, getPattern, candidate) {
        let matchedValue;
        // use length of prefix as betterness criteria
        let longestMatchPrefixLength = -1;
        for (const v of values) {
            const pattern = getPattern(v);
            if (isPatternMatch(pattern, candidate) && pattern.prefix.length > longestMatchPrefixLength) {
                longestMatchPrefixLength = pattern.prefix.length;
                matchedValue = v;
            }
        }
        return matchedValue;
    }
    __exports__findBestPatternMatch = findBestPatternMatch;
    function startsWith(str, prefix) {
        return str.lastIndexOf(prefix, 0) === 0;
    }
    __exports__startsWith = startsWith;
    function removePrefix(str, prefix) {
        return startsWith(str, prefix) ? str.substr(prefix.length) : str;
    }
    __exports__removePrefix = removePrefix;
    function tryRemovePrefix(str, prefix, getCanonicalFileName = identity) {
        return startsWith(getCanonicalFileName(str), getCanonicalFileName(prefix)) ? str.substring(prefix.length) : undefined;
    }
    __exports__tryRemovePrefix = tryRemovePrefix;
    function isPatternMatch({ prefix, suffix }, candidate) {
        return candidate.length >= prefix.length + suffix.length &&
            startsWith(candidate, prefix) &&
            endsWith(candidate, suffix);
    }
    function and(f, g) {
        return (arg) => f(arg) && g(arg);
    }
    __exports__and = and;
    function or(...fs) {
        return (...args) => {
            for (const f of fs) {
                if (f(...args)) {
                    return true;
                }
            }
            return false;
        };
    }
    __exports__or = or;
    function not(fn) {
        return (...args) => !fn(...args);
    }
    __exports__not = not;
    function assertType(_) { }
    __exports__assertType = assertType;
    function singleElementArray(t) {
        return t === undefined ? undefined : [t];
    }
    __exports__singleElementArray = singleElementArray;
    function enumerateInsertsAndDeletes(newItems, oldItems, comparer, inserted, deleted, unchanged) {
        unchanged = unchanged || noop;
        let newIndex = 0;
        let oldIndex = 0;
        const newLen = newItems.length;
        const oldLen = oldItems.length;
        let hasChanges = false;
        while (newIndex < newLen && oldIndex < oldLen) {
            const newItem = newItems[newIndex];
            const oldItem = oldItems[oldIndex];
            const compareResult = comparer(newItem, oldItem);
            if (compareResult === -1 /* LessThan */) {
                inserted(newItem);
                newIndex++;
                hasChanges = true;
            }
            else if (compareResult === 1 /* GreaterThan */) {
                deleted(oldItem);
                oldIndex++;
                hasChanges = true;
            }
            else {
                unchanged(oldItem, newItem);
                newIndex++;
                oldIndex++;
            }
        }
        while (newIndex < newLen) {
            inserted(newItems[newIndex++]);
            hasChanges = true;
        }
        while (oldIndex < oldLen) {
            deleted(oldItems[oldIndex++]);
            hasChanges = true;
        }
        return hasChanges;
    }
    __exports__enumerateInsertsAndDeletes = enumerateInsertsAndDeletes;
    function fill(length, cb) {
        const result = Array(length);
        for (let i = 0; i < length; i++) {
            result[i] = cb(i);
        }
        return result;
    }
    __exports__fill = fill;
    function cartesianProduct(arrays) {
        const result = [];
        cartesianProductWorker(arrays, result, /*outer*/ undefined, 0);
        return result;
    }
    __exports__cartesianProduct = cartesianProduct;
    function cartesianProductWorker(arrays, result, outer, index) {
        for (const element of arrays[index]) {
            let inner;
            if (outer) {
                inner = outer.slice();
                inner.push(element);
            }
            else {
                inner = [element];
            }
            if (index === arrays.length - 1) {
                result.push(inner);
            }
            else {
                cartesianProductWorker(arrays, result, inner, index + 1);
            }
        }
    }
    /**
     * Returns string left-padded with spaces or zeros until it reaches the given length.
     *
     * @param s String to pad.
     * @param length Final padded length. If less than or equal to 's.length', returns 's' unchanged.
     * @param padString Character to use as padding (default " ").
     */
    function padLeft(s, length, padString = " ") {
        return length <= s.length ? s : padString.repeat(length - s.length) + s;
    }
    __exports__padLeft = padLeft;
    /**
     * Returns string right-padded with spaces until it reaches the given length.
     *
     * @param s String to pad.
     * @param length Final padded length. If less than or equal to 's.length', returns 's' unchanged.
     * @param padString Character to use as padding (default " ").
     */
    function padRight(s, length, padString = " ") {
        return length <= s.length ? s : s + padString.repeat(length - s.length);
    }
    __exports__padRight = padRight;
    function takeWhile(array, predicate) {
        const len = array.length;
        let index = 0;
        while (index < len && predicate(array[index])) {
            index++;
        }
        return array.slice(0, index);
    }
    __exports__takeWhile = takeWhile;
}
/* @internal */

{
    function createMapData() {
        const sentinel = {};
        sentinel.prev = sentinel;
        return { head: sentinel, tail: sentinel, size: 0 };
    }
    function createMapEntry(key, value) {
        return { key, value, next: undefined, prev: undefined };
    }
    function sameValueZero(x, y) {
        // Treats -0 === 0 and NaN === NaN
        return x === y || x !== x && y !== y;
    }
    function getPrev(entry) {
        const prev = entry.prev;
        // Entries without a 'prev' have been removed from the map.
        // An entry whose 'prev' points to itself is the head of the list and is invalid here.
        if (!prev || prev === entry)
            throw new Error("Illegal state");
        return prev;
    }
    function getNext(entry) {
        while (entry) {
            // Entries without a 'prev' have been removed from the map. Their 'next'
            // pointer should point to the previous entry prior to deletion and
            // that entry should be skipped to resume iteration.
            const skipNext = !entry.prev;
            entry = entry.next;
            if (skipNext) {
                continue;
            }
            return entry;
        }
    }
    function getEntry(data, key) {
        // We walk backwards from 'tail' to prioritize recently added entries.
        // We skip 'head' because it is an empty entry used to track iteration start.
        for (let entry = data.tail; entry !== data.head; entry = getPrev(entry)) {
            if (sameValueZero(entry.key, key)) {
                return entry;
            }
        }
    }
    function addOrUpdateEntry(data, key, value) {
        const existing = getEntry(data, key);
        if (existing) {
            existing.value = value;
            return;
        }
        const entry = createMapEntry(key, value);
        entry.prev = data.tail;
        data.tail.next = entry;
        data.tail = entry;
        data.size++;
        return entry;
    }
    function deleteEntry(data, key) {
        // We walk backwards from 'tail' to prioritize recently added entries.
        // We skip 'head' because it is an empty entry used to track iteration start.
        for (let entry = data.tail; entry !== data.head; entry = getPrev(entry)) {
            // all entries in the map should have a 'prev' pointer.
            if (entry.prev === undefined)
                throw new Error("Illegal state");
            if (sameValueZero(entry.key, key)) {
                if (entry.next) {
                    entry.next.prev = entry.prev;
                }
                else {
                    // an entry in the map without a 'next' pointer must be the 'tail'.
                    if (data.tail !== entry)
                        throw new Error("Illegal state");
                    data.tail = entry.prev;
                }
                entry.prev.next = entry.next;
                entry.next = entry.prev;
                entry.prev = undefined;
                data.size--;
                return entry;
            }
        }
    }
    function clearEntries(data) {
        let node = data.tail;
        while (node !== data.head) {
            const prev = getPrev(node);
            node.next = data.head;
            node.prev = undefined;
            node = prev;
        }
        data.head.next = undefined;
        data.tail = data.head;
        data.size = 0;
    }
    function forEachEntry(data, action) {
        let entry = data.head;
        while (entry) {
            entry = getNext(entry);
            if (entry) {
                action(entry.value, entry.key);
            }
        }
    }
    function forEachIteration(iterator, action) {
        if (iterator) {
            for (let step = iterator.next(); !step.done; step = iterator.next()) {
                action(step.value);
            }
        }
    }
    function createIteratorData(data, selector) {
        return { current: data.head, selector };
    }
    function iteratorNext(data) {
        // Navigate to the next entry.
        data.current = getNext(data.current);
        if (data.current) {
            return { value: data.selector(data.current.key, data.current.value), done: false };
        }
        else {
            return { value: undefined, done: true };
        }
    }
    /* @internal */
    let ShimCollections;
    (function (ShimCollections) {
        function createMapShim(getIterator) {
            class MapIterator {
                constructor(data, selector) {
                    this._data = createIteratorData(data, selector);
                }
                next() { return iteratorNext(this._data); }
            }
            return class Map {
                constructor(iterable) {
                    this._mapData = createMapData();
                    forEachIteration(getIterator(iterable), ([key, value]) => this.set(key, value));
                }
                get size() { return this._mapData.size; }
                get(key) { return getEntry(this._mapData, key)?.value; }
                set(key, value) { return addOrUpdateEntry(this._mapData, key, value), this; }
                has(key) { return !!getEntry(this._mapData, key); }
                delete(key) { return !!deleteEntry(this._mapData, key); }
                clear() { clearEntries(this._mapData); }
                keys() { return new MapIterator(this._mapData, (key, _value) => key); }
                values() { return new MapIterator(this._mapData, (_key, value) => value); }
                entries() { return new MapIterator(this._mapData, (key, value) => [key, value]); }
                forEach(action) { forEachEntry(this._mapData, action); }
            };
        }
        ShimCollections.createMapShim = createMapShim;
        function createSetShim(getIterator) {
            class SetIterator {
                constructor(data, selector) {
                    this._data = createIteratorData(data, selector);
                }
                next() { return iteratorNext(this._data); }
            }
            return class Set {
                constructor(iterable) {
                    this._mapData = createMapData();
                    forEachIteration(getIterator(iterable), value => this.add(value));
                }
                get size() { return this._mapData.size; }
                add(value) { return addOrUpdateEntry(this._mapData, value, value), this; }
                has(value) { return !!getEntry(this._mapData, value); }
                delete(value) { return !!deleteEntry(this._mapData, value); }
                clear() { clearEntries(this._mapData); }
                keys() { return new SetIterator(this._mapData, (key, _value) => key); }
                values() { return new SetIterator(this._mapData, (_key, value) => value); }
                entries() { return new SetIterator(this._mapData, (key, value) => [key, value]); }
                forEach(action) { forEachEntry(this._mapData, action); }
            };
        }
        ShimCollections.createSetShim = createSetShim;
    })(ShimCollections = __exports__ShimCollections || (__exports__ShimCollections = {}));
}
/* @internal */

{
    /**
     * Internally, we represent paths as strings with '/' as the directory separator.
     * When we make system calls (eg: LanguageServiceHost.getDirectory()),
     * we expect the host to correctly handle paths in our specified format.
     */
    __exports__directorySeparator = "/";
    __exports__altDirectorySeparator = "\\";
    const urlSchemeSeparator = "://";
    const backslashRegExp = /\\/g;
    //// Path Tests
    /**
     * Determines whether a charCode corresponds to `/` or `\`.
     */
    function isAnyDirectorySeparator(charCode) {
        return charCode === 47 /* slash */ || charCode === 92 /* backslash */;
    }
    __exports__isAnyDirectorySeparator = isAnyDirectorySeparator;
    /**
     * Determines whether a path starts with a URL scheme (e.g. starts with `http://`, `ftp://`, `file://`, etc.).
     */
    function isUrl(path) {
        return getEncodedRootLength(path) < 0;
    }
    __exports__isUrl = isUrl;
    /**
     * Determines whether a path is an absolute disk path (e.g. starts with `/`, or a dos path
     * like `c:`, `c:\` or `c:/`).
     */
    function isRootedDiskPath(path) {
        return getEncodedRootLength(path) > 0;
    }
    __exports__isRootedDiskPath = isRootedDiskPath;
    /**
     * Determines whether a path consists only of a path root.
     */
    function isDiskPathRoot(path) {
        const rootLength = getEncodedRootLength(path);
        return rootLength > 0 && rootLength === path.length;
    }
    __exports__isDiskPathRoot = isDiskPathRoot;
    /**
     * Determines whether a path starts with an absolute path component (i.e. `/`, `c:/`, `file://`, etc.).
     *
     * ```ts
     * // POSIX
     * pathIsAbsolute("/path/to/file.ext") === true
     * // DOS
     * pathIsAbsolute("c:/path/to/file.ext") === true
     * // URL
     * pathIsAbsolute("file:///path/to/file.ext") === true
     * // Non-absolute
     * pathIsAbsolute("path/to/file.ext") === false
     * pathIsAbsolute("./path/to/file.ext") === false
     * ```
     */
    function pathIsAbsolute(path) {
        return getEncodedRootLength(path) !== 0;
    }
    __exports__pathIsAbsolute = pathIsAbsolute;
    /**
     * Determines whether a path starts with a relative path component (i.e. `.` or `..`).
     */
    function pathIsRelative(path) {
        return /^\.\.?($|[\\/])/.test(path);
    }
    __exports__pathIsRelative = pathIsRelative;
    /**
     * Determines whether a path is neither relative nor absolute, e.g. "path/to/file".
     * Also known misleadingly as "non-relative".
     */
    function pathIsBareSpecifier(path) {
        return !pathIsAbsolute(path) && !pathIsRelative(path);
    }
    __exports__pathIsBareSpecifier = pathIsBareSpecifier;
    function hasExtension(fileName) {
        return __exports__stringContains(getBaseFileName(fileName), ".");
    }
    __exports__hasExtension = hasExtension;
    function fileExtensionIs(path, extension) {
        return path.length > extension.length && __exports__endsWith(path, extension);
    }
    __exports__fileExtensionIs = fileExtensionIs;
    function fileExtensionIsOneOf(path, extensions) {
        for (const extension of extensions) {
            if (fileExtensionIs(path, extension)) {
                return true;
            }
        }
        return false;
    }
    __exports__fileExtensionIsOneOf = fileExtensionIsOneOf;
    /**
     * Determines whether a path has a trailing separator (`/` or `\\`).
     */
    function hasTrailingDirectorySeparator(path) {
        return path.length > 0 && isAnyDirectorySeparator(path.charCodeAt(path.length - 1));
    }
    __exports__hasTrailingDirectorySeparator = hasTrailingDirectorySeparator;
    //// Path Parsing
    function isVolumeCharacter(charCode) {
        return (charCode >= 97 /* a */ && charCode <= 122 /* z */) ||
            (charCode >= 65 /* A */ && charCode <= 90 /* Z */);
    }
    function getFileUrlVolumeSeparatorEnd(url, start) {
        const ch0 = url.charCodeAt(start);
        if (ch0 === 58 /* colon */)
            return start + 1;
        if (ch0 === 37 /* percent */ && url.charCodeAt(start + 1) === 51 /* _3 */) {
            const ch2 = url.charCodeAt(start + 2);
            if (ch2 === 97 /* a */ || ch2 === 65 /* A */)
                return start + 3;
        }
        return -1;
    }
    /**
     * Returns length of the root part of a path or URL (i.e. length of "/", "x:/", "//server/share/, file:///user/files").
     * If the root is part of a URL, the twos-complement of the root length is returned.
     */
    function getEncodedRootLength(path) {
        if (!path)
            return 0;
        const ch0 = path.charCodeAt(0);
        // POSIX or UNC
        if (ch0 === 47 /* slash */ || ch0 === 92 /* backslash */) {
            if (path.charCodeAt(1) !== ch0)
                return 1; // POSIX: "/" (or non-normalized "\")
            const p1 = path.indexOf(ch0 === 47 /* slash */ ? __exports__directorySeparator : __exports__altDirectorySeparator, 2);
            if (p1 < 0)
                return path.length; // UNC: "//server" or "\\server"
            return p1 + 1; // UNC: "//server/" or "\\server\"
        }
        // DOS
        if (isVolumeCharacter(ch0) && path.charCodeAt(1) === 58 /* colon */) {
            const ch2 = path.charCodeAt(2);
            if (ch2 === 47 /* slash */ || ch2 === 92 /* backslash */)
                return 3; // DOS: "c:/" or "c:\"
            if (path.length === 2)
                return 2; // DOS: "c:" (but not "c:d")
        }
        // URL
        const schemeEnd = path.indexOf(urlSchemeSeparator);
        if (schemeEnd !== -1) {
            const authorityStart = schemeEnd + urlSchemeSeparator.length;
            const authorityEnd = path.indexOf(__exports__directorySeparator, authorityStart);
            if (authorityEnd !== -1) { // URL: "file:///", "file://server/", "file://server/path"
                // For local "file" URLs, include the leading DOS volume (if present).
                // Per https://www.ietf.org/rfc/rfc1738.txt, a host of "" or "localhost" is a
                // special case interpreted as "the machine from which the URL is being interpreted".
                const scheme = path.slice(0, schemeEnd);
                const authority = path.slice(authorityStart, authorityEnd);
                if (scheme === "file" && (authority === "" || authority === "localhost") &&
                    isVolumeCharacter(path.charCodeAt(authorityEnd + 1))) {
                    const volumeSeparatorEnd = getFileUrlVolumeSeparatorEnd(path, authorityEnd + 2);
                    if (volumeSeparatorEnd !== -1) {
                        if (path.charCodeAt(volumeSeparatorEnd) === 47 /* slash */) {
                            // URL: "file:///c:/", "file://localhost/c:/", "file:///c%3a/", "file://localhost/c%3a/"
                            return ~(volumeSeparatorEnd + 1);
                        }
                        if (volumeSeparatorEnd === path.length) {
                            // URL: "file:///c:", "file://localhost/c:", "file:///c$3a", "file://localhost/c%3a"
                            // but not "file:///c:d" or "file:///c%3ad"
                            return ~volumeSeparatorEnd;
                        }
                    }
                }
                return ~(authorityEnd + 1); // URL: "file://server/", "http://server/"
            }
            return ~path.length; // URL: "file://server", "http://server"
        }
        // relative
        return 0;
    }
    /**
     * Returns length of the root part of a path or URL (i.e. length of "/", "x:/", "//server/share/, file:///user/files").
     *
     * For example:
     * ```ts
     * getRootLength("a") === 0                   // ""
     * getRootLength("/") === 1                   // "/"
     * getRootLength("c:") === 2                  // "c:"
     * getRootLength("c:d") === 0                 // ""
     * getRootLength("c:/") === 3                 // "c:/"
     * getRootLength("c:\\") === 3                // "c:\\"
     * getRootLength("//server") === 7            // "//server"
     * getRootLength("//server/share") === 8      // "//server/"
     * getRootLength("\\\\server") === 7          // "\\\\server"
     * getRootLength("\\\\server\\share") === 8   // "\\\\server\\"
     * getRootLength("file:///path") === 8        // "file:///"
     * getRootLength("file:///c:") === 10         // "file:///c:"
     * getRootLength("file:///c:d") === 8         // "file:///"
     * getRootLength("file:///c:/path") === 11    // "file:///c:/"
     * getRootLength("file://server") === 13      // "file://server"
     * getRootLength("file://server/path") === 14 // "file://server/"
     * getRootLength("http://server") === 13      // "http://server"
     * getRootLength("http://server/path") === 14 // "http://server/"
     * ```
     */
    function getRootLength(path) {
        const rootLength = getEncodedRootLength(path);
        return rootLength < 0 ? ~rootLength : rootLength;
    }
    __exports__getRootLength = getRootLength;
    function getDirectoryPath(path) {
        path = normalizeSlashes(path);
        // If the path provided is itself the root, then return it.
        const rootLength = getRootLength(path);
        if (rootLength === path.length)
            return path;
        // return the leading portion of the path up to the last (non-terminal) directory separator
        // but not including any trailing directory separator.
        path = removeTrailingDirectorySeparator(path);
        return path.slice(0, Math.max(rootLength, path.lastIndexOf(__exports__directorySeparator)));
    }
    __exports__getDirectoryPath = getDirectoryPath;
    function getBaseFileName(path, extensions, ignoreCase) {
        path = normalizeSlashes(path);
        // if the path provided is itself the root, then it has not file name.
        const rootLength = getRootLength(path);
        if (rootLength === path.length)
            return "";
        // return the trailing portion of the path starting after the last (non-terminal) directory
        // separator but not including any trailing directory separator.
        path = removeTrailingDirectorySeparator(path);
        const name = path.slice(Math.max(getRootLength(path), path.lastIndexOf(__exports__directorySeparator) + 1));
        const extension = extensions !== undefined && ignoreCase !== undefined ? getAnyExtensionFromPath(name, extensions, ignoreCase) : undefined;
        return extension ? name.slice(0, name.length - extension.length) : name;
    }
    __exports__getBaseFileName = getBaseFileName;
    function tryGetExtensionFromPath(path, extension, stringEqualityComparer) {
        if (!__exports__startsWith(extension, "."))
            extension = "." + extension;
        if (path.length >= extension.length && path.charCodeAt(path.length - extension.length) === 46 /* dot */) {
            const pathExtension = path.slice(path.length - extension.length);
            if (stringEqualityComparer(pathExtension, extension)) {
                return pathExtension;
            }
        }
    }
    function getAnyExtensionFromPathWorker(path, extensions, stringEqualityComparer) {
        if (typeof extensions === "string") {
            return tryGetExtensionFromPath(path, extensions, stringEqualityComparer) || "";
        }
        for (const extension of extensions) {
            const result = tryGetExtensionFromPath(path, extension, stringEqualityComparer);
            if (result)
                return result;
        }
        return "";
    }
    function getAnyExtensionFromPath(path, extensions, ignoreCase) {
        // Retrieves any string from the final "." onwards from a base file name.
        // Unlike extensionFromPath, which throws an exception on unrecognized extensions.
        if (extensions) {
            return getAnyExtensionFromPathWorker(removeTrailingDirectorySeparator(path), extensions, ignoreCase ? __exports__equateStringsCaseInsensitive : __exports__equateStringsCaseSensitive);
        }
        const baseFileName = getBaseFileName(path);
        const extensionIndex = baseFileName.lastIndexOf(".");
        if (extensionIndex >= 0) {
            return baseFileName.substring(extensionIndex);
        }
        return "";
    }
    __exports__getAnyExtensionFromPath = getAnyExtensionFromPath;
    function pathComponents(path, rootLength) {
        const root = path.substring(0, rootLength);
        const rest = path.substring(rootLength).split(__exports__directorySeparator);
        if (rest.length && !__exports__lastOrUndefined(rest))
            rest.pop();
        return [root, ...rest];
    }
    /**
     * Parse a path into an array containing a root component (at index 0) and zero or more path
     * components (at indices > 0). The result is not normalized.
     * If the path is relative, the root component is `""`.
     * If the path is absolute, the root component includes the first path separator (`/`).
     *
     * ```ts
     * // POSIX
     * getPathComponents("/path/to/file.ext") === ["/", "path", "to", "file.ext"]
     * getPathComponents("/path/to/") === ["/", "path", "to"]
     * getPathComponents("/") === ["/"]
     * // DOS
     * getPathComponents("c:/path/to/file.ext") === ["c:/", "path", "to", "file.ext"]
     * getPathComponents("c:/path/to/") === ["c:/", "path", "to"]
     * getPathComponents("c:/") === ["c:/"]
     * getPathComponents("c:") === ["c:"]
     * // URL
     * getPathComponents("http://typescriptlang.org/path/to/file.ext") === ["http://typescriptlang.org/", "path", "to", "file.ext"]
     * getPathComponents("http://typescriptlang.org/path/to/") === ["http://typescriptlang.org/", "path", "to"]
     * getPathComponents("http://typescriptlang.org/") === ["http://typescriptlang.org/"]
     * getPathComponents("http://typescriptlang.org") === ["http://typescriptlang.org"]
     * getPathComponents("file://server/path/to/file.ext") === ["file://server/", "path", "to", "file.ext"]
     * getPathComponents("file://server/path/to/") === ["file://server/", "path", "to"]
     * getPathComponents("file://server/") === ["file://server/"]
     * getPathComponents("file://server") === ["file://server"]
     * getPathComponents("file:///path/to/file.ext") === ["file:///", "path", "to", "file.ext"]
     * getPathComponents("file:///path/to/") === ["file:///", "path", "to"]
     * getPathComponents("file:///") === ["file:///"]
     * getPathComponents("file://") === ["file://"]
     */
    function getPathComponents(path, currentDirectory = "") {
        path = combinePaths(currentDirectory, path);
        return pathComponents(path, getRootLength(path));
    }
    __exports__getPathComponents = getPathComponents;
    //// Path Formatting
    /**
     * Formats a parsed path consisting of a root component (at index 0) and zero or more path
     * segments (at indices > 0).
     *
     * ```ts
     * getPathFromPathComponents(["/", "path", "to", "file.ext"]) === "/path/to/file.ext"
     * ```
     */
    function getPathFromPathComponents(pathComponents) {
        if (pathComponents.length === 0)
            return "";
        const root = pathComponents[0] && ensureTrailingDirectorySeparator(pathComponents[0]);
        return root + pathComponents.slice(1).join(__exports__directorySeparator);
    }
    __exports__getPathFromPathComponents = getPathFromPathComponents;
    //// Path Normalization
    /**
     * Normalize path separators, converting `\` into `/`.
     */
    function normalizeSlashes(path) {
        return path.replace(backslashRegExp, __exports__directorySeparator);
    }
    __exports__normalizeSlashes = normalizeSlashes;
    /**
     * Reduce an array of path components to a more simplified path by navigating any
     * `"."` or `".."` entries in the path.
     */
    function reducePathComponents(components) {
        if (!__exports__some(components))
            return [];
        const reduced = [components[0]];
        for (let i = 1; i < components.length; i++) {
            const component = components[i];
            if (!component)
                continue;
            if (component === ".")
                continue;
            if (component === "..") {
                if (reduced.length > 1) {
                    if (reduced[reduced.length - 1] !== "..") {
                        reduced.pop();
                        continue;
                    }
                }
                else if (reduced[0])
                    continue;
            }
            reduced.push(component);
        }
        return reduced;
    }
    __exports__reducePathComponents = reducePathComponents;
    /**
     * Combines paths. If a path is absolute, it replaces any previous path. Relative paths are not simplified.
     *
     * ```ts
     * // Non-rooted
     * combinePaths("path", "to", "file.ext") === "path/to/file.ext"
     * combinePaths("path", "dir", "..", "to", "file.ext") === "path/dir/../to/file.ext"
     * // POSIX
     * combinePaths("/path", "to", "file.ext") === "/path/to/file.ext"
     * combinePaths("/path", "/to", "file.ext") === "/to/file.ext"
     * // DOS
     * combinePaths("c:/path", "to", "file.ext") === "c:/path/to/file.ext"
     * combinePaths("c:/path", "c:/to", "file.ext") === "c:/to/file.ext"
     * // URL
     * combinePaths("file:///path", "to", "file.ext") === "file:///path/to/file.ext"
     * combinePaths("file:///path", "file:///to", "file.ext") === "file:///to/file.ext"
     * ```
     */
    function combinePaths(path, ...paths) {
        if (path)
            path = normalizeSlashes(path);
        for (let relativePath of paths) {
            if (!relativePath)
                continue;
            relativePath = normalizeSlashes(relativePath);
            if (!path || getRootLength(relativePath) !== 0) {
                path = relativePath;
            }
            else {
                path = ensureTrailingDirectorySeparator(path) + relativePath;
            }
        }
        return path;
    }
    __exports__combinePaths = combinePaths;
    /**
     * Combines and resolves paths. If a path is absolute, it replaces any previous path. Any
     * `.` and `..` path components are resolved. Trailing directory separators are preserved.
     *
     * ```ts
     * resolvePath("/path", "to", "file.ext") === "path/to/file.ext"
     * resolvePath("/path", "to", "file.ext/") === "path/to/file.ext/"
     * resolvePath("/path", "dir", "..", "to", "file.ext") === "path/to/file.ext"
     * ```
     */
    function resolvePath(path, ...paths) {
        return normalizePath(__exports__some(paths) ? combinePaths(path, ...paths) : normalizeSlashes(path));
    }
    __exports__resolvePath = resolvePath;
    /**
     * Parse a path into an array containing a root component (at index 0) and zero or more path
     * components (at indices > 0). The result is normalized.
     * If the path is relative, the root component is `""`.
     * If the path is absolute, the root component includes the first path separator (`/`).
     *
     * ```ts
     * getNormalizedPathComponents("to/dir/../file.ext", "/path/") === ["/", "path", "to", "file.ext"]
     * ```
     */
    function getNormalizedPathComponents(path, currentDirectory) {
        return reducePathComponents(getPathComponents(path, currentDirectory));
    }
    __exports__getNormalizedPathComponents = getNormalizedPathComponents;
    function getNormalizedAbsolutePath(fileName, currentDirectory) {
        return getPathFromPathComponents(getNormalizedPathComponents(fileName, currentDirectory));
    }
    __exports__getNormalizedAbsolutePath = getNormalizedAbsolutePath;
    function normalizePath(path) {
        path = normalizeSlashes(path);
        const normalized = getPathFromPathComponents(reducePathComponents(getPathComponents(path)));
        return normalized && hasTrailingDirectorySeparator(path) ? ensureTrailingDirectorySeparator(normalized) : normalized;
    }
    __exports__normalizePath = normalizePath;
    function getPathWithoutRoot(pathComponents) {
        if (pathComponents.length === 0)
            return "";
        return pathComponents.slice(1).join(__exports__directorySeparator);
    }
    function getNormalizedAbsolutePathWithoutRoot(fileName, currentDirectory) {
        return getPathWithoutRoot(getNormalizedPathComponents(fileName, currentDirectory));
    }
    __exports__getNormalizedAbsolutePathWithoutRoot = getNormalizedAbsolutePathWithoutRoot;
    function toPath(fileName, basePath, getCanonicalFileName) {
        const nonCanonicalizedPath = isRootedDiskPath(fileName)
            ? normalizePath(fileName)
            : getNormalizedAbsolutePath(fileName, basePath);
        return getCanonicalFileName(nonCanonicalizedPath);
    }
    __exports__toPath = toPath;
    function normalizePathAndParts(path) {
        path = normalizeSlashes(path);
        const [root, ...parts] = reducePathComponents(getPathComponents(path));
        if (parts.length) {
            const joinedParts = root + parts.join(__exports__directorySeparator);
            return { path: hasTrailingDirectorySeparator(path) ? ensureTrailingDirectorySeparator(joinedParts) : joinedParts, parts };
        }
        else {
            return { path: root, parts };
        }
    }
    __exports__normalizePathAndParts = normalizePathAndParts;
    function removeTrailingDirectorySeparator(path) {
        if (hasTrailingDirectorySeparator(path)) {
            return path.substr(0, path.length - 1);
        }
        return path;
    }
    __exports__removeTrailingDirectorySeparator = removeTrailingDirectorySeparator;
    function ensureTrailingDirectorySeparator(path) {
        if (!hasTrailingDirectorySeparator(path)) {
            return path + __exports__directorySeparator;
        }
        return path;
    }
    __exports__ensureTrailingDirectorySeparator = ensureTrailingDirectorySeparator;
    /**
     * Ensures a path is either absolute (prefixed with `/` or `c:`) or dot-relative (prefixed
     * with `./` or `../`) so as not to be confused with an unprefixed module name.
     *
     * ```ts
     * ensurePathIsNonModuleName("/path/to/file.ext") === "/path/to/file.ext"
     * ensurePathIsNonModuleName("./path/to/file.ext") === "./path/to/file.ext"
     * ensurePathIsNonModuleName("../path/to/file.ext") === "../path/to/file.ext"
     * ensurePathIsNonModuleName("path/to/file.ext") === "./path/to/file.ext"
     * ```
     */
    function ensurePathIsNonModuleName(path) {
        return !pathIsAbsolute(path) && !pathIsRelative(path) ? "./" + path : path;
    }
    __exports__ensurePathIsNonModuleName = ensurePathIsNonModuleName;
    function changeAnyExtension(path, ext, extensions, ignoreCase) {
        const pathext = extensions !== undefined && ignoreCase !== undefined ? getAnyExtensionFromPath(path, extensions, ignoreCase) : getAnyExtensionFromPath(path);
        return pathext ? path.slice(0, path.length - pathext.length) + (__exports__startsWith(ext, ".") ? ext : "." + ext) : path;
    }
    __exports__changeAnyExtension = changeAnyExtension;
    //// Path Comparisons
    // check path for these segments: '', '.'. '..'
    const relativePathSegmentRegExp = /(^|\/)\.{0,2}($|\/)/;
    function comparePathsWorker(a, b, componentComparer) {
        if (a === b)
            return 0 /* EqualTo */;
        if (a === undefined)
            return -1 /* LessThan */;
        if (b === undefined)
            return 1 /* GreaterThan */;
        // NOTE: Performance optimization - shortcut if the root segments differ as there would be no
        //       need to perform path reduction.
        const aRoot = a.substring(0, getRootLength(a));
        const bRoot = b.substring(0, getRootLength(b));
        const result = __exports__compareStringsCaseInsensitive(aRoot, bRoot);
        if (result !== 0 /* EqualTo */) {
            return result;
        }
        // NOTE: Performance optimization - shortcut if there are no relative path segments in
        //       the non-root portion of the path
        const aRest = a.substring(aRoot.length);
        const bRest = b.substring(bRoot.length);
        if (!relativePathSegmentRegExp.test(aRest) && !relativePathSegmentRegExp.test(bRest)) {
            return componentComparer(aRest, bRest);
        }
        // The path contains a relative path segment. Normalize the paths and perform a slower component
        // by component comparison.
        const aComponents = reducePathComponents(getPathComponents(a));
        const bComponents = reducePathComponents(getPathComponents(b));
        const sharedLength = Math.min(aComponents.length, bComponents.length);
        for (let i = 1; i < sharedLength; i++) {
            const result = componentComparer(aComponents[i], bComponents[i]);
            if (result !== 0 /* EqualTo */) {
                return result;
            }
        }
        return __exports__compareValues(aComponents.length, bComponents.length);
    }
    /**
     * Performs a case-sensitive comparison of two paths. Path roots are always compared case-insensitively.
     */
    function comparePathsCaseSensitive(a, b) {
        return comparePathsWorker(a, b, __exports__compareStringsCaseSensitive);
    }
    __exports__comparePathsCaseSensitive = comparePathsCaseSensitive;
    /**
     * Performs a case-insensitive comparison of two paths.
     */
    function comparePathsCaseInsensitive(a, b) {
        return comparePathsWorker(a, b, __exports__compareStringsCaseInsensitive);
    }
    __exports__comparePathsCaseInsensitive = comparePathsCaseInsensitive;
    function comparePaths(a, b, currentDirectory, ignoreCase) {
        if (typeof currentDirectory === "string") {
            a = combinePaths(currentDirectory, a);
            b = combinePaths(currentDirectory, b);
        }
        else if (typeof currentDirectory === "boolean") {
            ignoreCase = currentDirectory;
        }
        return comparePathsWorker(a, b, __exports__getStringComparer(ignoreCase));
    }
    __exports__comparePaths = comparePaths;
    function containsPath(parent, child, currentDirectory, ignoreCase) {
        if (typeof currentDirectory === "string") {
            parent = combinePaths(currentDirectory, parent);
            child = combinePaths(currentDirectory, child);
        }
        else if (typeof currentDirectory === "boolean") {
            ignoreCase = currentDirectory;
        }
        if (parent === undefined || child === undefined)
            return false;
        if (parent === child)
            return true;
        const parentComponents = reducePathComponents(getPathComponents(parent));
        const childComponents = reducePathComponents(getPathComponents(child));
        if (childComponents.length < parentComponents.length) {
            return false;
        }
        const componentEqualityComparer = ignoreCase ? __exports__equateStringsCaseInsensitive : __exports__equateStringsCaseSensitive;
        for (let i = 0; i < parentComponents.length; i++) {
            const equalityComparer = i === 0 ? __exports__equateStringsCaseInsensitive : componentEqualityComparer;
            if (!equalityComparer(parentComponents[i], childComponents[i])) {
                return false;
            }
        }
        return true;
    }
    __exports__containsPath = containsPath;
    /**
     * Determines whether `fileName` starts with the specified `directoryName` using the provided path canonicalization callback.
     * Comparison is case-sensitive between the canonical paths.
     *
     * Use `containsPath` if file names are not already reduced and absolute.
     */
    function startsWithDirectory(fileName, directoryName, getCanonicalFileName) {
        const canonicalFileName = getCanonicalFileName(fileName);
        const canonicalDirectoryName = getCanonicalFileName(directoryName);
        return __exports__startsWith(canonicalFileName, canonicalDirectoryName + "/") || __exports__startsWith(canonicalFileName, canonicalDirectoryName + "\\");
    }
    __exports__startsWithDirectory = startsWithDirectory;
    //// Relative Paths
    function getPathComponentsRelativeTo(from, to, stringEqualityComparer, getCanonicalFileName) {
        const fromComponents = reducePathComponents(getPathComponents(from));
        const toComponents = reducePathComponents(getPathComponents(to));
        let start;
        for (start = 0; start < fromComponents.length && start < toComponents.length; start++) {
            const fromComponent = getCanonicalFileName(fromComponents[start]);
            const toComponent = getCanonicalFileName(toComponents[start]);
            const comparer = start === 0 ? __exports__equateStringsCaseInsensitive : stringEqualityComparer;
            if (!comparer(fromComponent, toComponent))
                break;
        }
        if (start === 0) {
            return toComponents;
        }
        const components = toComponents.slice(start);
        const relative = [];
        for (; start < fromComponents.length; start++) {
            relative.push("..");
        }
        return ["", ...relative, ...components];
    }
    __exports__getPathComponentsRelativeTo = getPathComponentsRelativeTo;
    function getRelativePathFromDirectory(fromDirectory, to, getCanonicalFileNameOrIgnoreCase) {
        __exports__Debug.assert((getRootLength(fromDirectory) > 0) === (getRootLength(to) > 0), "Paths must either both be absolute or both be relative");
        const getCanonicalFileName = typeof getCanonicalFileNameOrIgnoreCase === "function" ? getCanonicalFileNameOrIgnoreCase : __exports__identity;
        const ignoreCase = typeof getCanonicalFileNameOrIgnoreCase === "boolean" ? getCanonicalFileNameOrIgnoreCase : false;
        const pathComponents = getPathComponentsRelativeTo(fromDirectory, to, ignoreCase ? __exports__equateStringsCaseInsensitive : __exports__equateStringsCaseSensitive, getCanonicalFileName);
        return getPathFromPathComponents(pathComponents);
    }
    __exports__getRelativePathFromDirectory = getRelativePathFromDirectory;
    function convertToRelativePath(absoluteOrRelativePath, basePath, getCanonicalFileName) {
        return !isRootedDiskPath(absoluteOrRelativePath)
            ? absoluteOrRelativePath
            : getRelativePathToDirectoryOrUrl(basePath, absoluteOrRelativePath, basePath, getCanonicalFileName, /*isAbsolutePathAnUrl*/ false);
    }
    __exports__convertToRelativePath = convertToRelativePath;
    function getRelativePathFromFile(from, to, getCanonicalFileName) {
        return ensurePathIsNonModuleName(getRelativePathFromDirectory(getDirectoryPath(from), to, getCanonicalFileName));
    }
    __exports__getRelativePathFromFile = getRelativePathFromFile;
    function getRelativePathToDirectoryOrUrl(directoryPathOrUrl, relativeOrAbsolutePath, currentDirectory, getCanonicalFileName, isAbsolutePathAnUrl) {
        const pathComponents = getPathComponentsRelativeTo(resolvePath(currentDirectory, directoryPathOrUrl), resolvePath(currentDirectory, relativeOrAbsolutePath), __exports__equateStringsCaseSensitive, getCanonicalFileName);
        const firstComponent = pathComponents[0];
        if (isAbsolutePathAnUrl && isRootedDiskPath(firstComponent)) {
            const prefix = firstComponent.charAt(0) === __exports__directorySeparator ? "file://" : "file:///";
            pathComponents[0] = prefix + firstComponent;
        }
        return getPathFromPathComponents(pathComponents);
    }
    __exports__getRelativePathToDirectoryOrUrl = getRelativePathToDirectoryOrUrl;
    function forEachAncestorDirectory(directory, callback) {
        while (true) {
            const result = callback(directory);
            if (result !== undefined) {
                return result;
            }
            const parentPath = getDirectoryPath(directory);
            if (parentPath === directory) {
                return undefined;
            }
            directory = parentPath;
        }
    }
    __exports__forEachAncestorDirectory = forEachAncestorDirectory;
    function isNodeModulesDirectory(dirPath) {
        return __exports__endsWith(dirPath, "/node_modules");
    }
    __exports__isNodeModulesDirectory = isNodeModulesDirectory;
}
/* @internal */

{
    __exports__resolvingEmptyArray = [];
    __exports__externalHelpersModuleNameText = "tslib";
    __exports__defaultMaximumTruncationLength = 160;
    __exports__noTruncationMaximumTruncationLength = 1_000_000;
    function getDeclarationOfKind(symbol, kind) {
        const declarations = symbol.declarations;
        if (declarations) {
            for (const declaration of declarations) {
                if (declaration.kind === kind) {
                    return declaration;
                }
            }
        }
        return undefined;
    }
    __exports__getDeclarationOfKind = getDeclarationOfKind;
    /**
     * Create a new escaped identifier map.
     * @deprecated Use `new Map<__String, T>()` instead.
     */
    function createUnderscoreEscapedMap() {
        return new __exports__Map();
    }
    __exports__createUnderscoreEscapedMap = createUnderscoreEscapedMap;
    /**
     * @deprecated Use `!!map?.size` instead
     */
    function hasEntries(map) {
        return !!map && !!map.size;
    }
    __exports__hasEntries = hasEntries;
    function createSymbolTable(symbols) {
        const result = new __exports__Map();
        if (symbols) {
            for (const symbol of symbols) {
                result.set(symbol.escapedName, symbol);
            }
        }
        return result;
    }
    __exports__createSymbolTable = createSymbolTable;
    function isTransientSymbol(symbol) {
        return (symbol.flags & 33554432 /* Transient */) !== 0;
    }
    __exports__isTransientSymbol = isTransientSymbol;
    const stringWriter = createSingleLineStringWriter();
    function createSingleLineStringWriter() {
        let str = "";
        const writeText = text => str += text;
        return {
            getText: () => str,
            write: writeText,
            rawWrite: writeText,
            writeKeyword: writeText,
            writeOperator: writeText,
            writePunctuation: writeText,
            writeSpace: writeText,
            writeStringLiteral: writeText,
            writeLiteral: writeText,
            writeParameter: writeText,
            writeProperty: writeText,
            writeSymbol: (s, _) => writeText(s),
            writeTrailingSemicolon: writeText,
            writeComment: writeText,
            getTextPos: () => str.length,
            getLine: () => 0,
            getColumn: () => 0,
            getIndent: () => 0,
            isAtStartOfLine: () => false,
            hasTrailingComment: () => false,
            hasTrailingWhitespace: () => !!str.length && isWhiteSpaceLike(str.charCodeAt(str.length - 1)),
            // Completely ignore indentation for string writers.  And map newlines to
            // a single space.
            writeLine: () => str += " ",
            increaseIndent: __exports__noop,
            decreaseIndent: __exports__noop,
            clear: () => str = "",
            trackSymbol: __exports__noop,
            reportInaccessibleThisError: __exports__noop,
            reportInaccessibleUniqueSymbolError: __exports__noop,
            reportPrivateInBaseOfClassExpression: __exports__noop,
        };
    }
    function changesAffectModuleResolution(oldOptions, newOptions) {
        return oldOptions.configFilePath !== newOptions.configFilePath ||
            optionsHaveModuleResolutionChanges(oldOptions, newOptions);
    }
    __exports__changesAffectModuleResolution = changesAffectModuleResolution;
    function optionsHaveModuleResolutionChanges(oldOptions, newOptions) {
        return moduleResolutionOptionDeclarations.some(o => !isJsonEqual(getCompilerOptionValue(oldOptions, o), getCompilerOptionValue(newOptions, o)));
    }
    __exports__optionsHaveModuleResolutionChanges = optionsHaveModuleResolutionChanges;
    function forEachAncestor(node, callback) {
        while (true) {
            const res = callback(node);
            if (res === "quit")
                return undefined;
            if (res !== undefined)
                return res;
            if (isSourceFile(node))
                return undefined;
            node = node.parent;
        }
    }
    __exports__forEachAncestor = forEachAncestor;
    /**
     * Calls `callback` for each entry in the map, returning the first truthy result.
     * Use `map.forEach` instead for normal iteration.
     */
    function forEachEntry(map, callback) {
        const iterator = map.entries();
        for (let iterResult = iterator.next(); !iterResult.done; iterResult = iterator.next()) {
            const [key, value] = iterResult.value;
            const result = callback(value, key);
            if (result) {
                return result;
            }
        }
        return undefined;
    }
    __exports__forEachEntry = forEachEntry;
    /** `forEachEntry` for just keys. */
    function forEachKey(map, callback) {
        const iterator = map.keys();
        for (let iterResult = iterator.next(); !iterResult.done; iterResult = iterator.next()) {
            const result = callback(iterResult.value);
            if (result) {
                return result;
            }
        }
        return undefined;
    }
    __exports__forEachKey = forEachKey;
    /** Copy entries from `source` to `target`. */
    function copyEntries(source, target) {
        source.forEach((value, key) => {
            target.set(key, value);
        });
    }
    __exports__copyEntries = copyEntries;
    function usingSingleLineStringWriter(action) {
        const oldString = stringWriter.getText();
        try {
            action(stringWriter);
            return stringWriter.getText();
        }
        finally {
            stringWriter.clear();
            stringWriter.writeKeyword(oldString);
        }
    }
    __exports__usingSingleLineStringWriter = usingSingleLineStringWriter;
    function getFullWidth(node) {
        return node.end - node.pos;
    }
    __exports__getFullWidth = getFullWidth;
    function getResolvedModule(sourceFile, moduleNameText) {
        return sourceFile && sourceFile.resolvedModules && sourceFile.resolvedModules.get(moduleNameText);
    }
    __exports__getResolvedModule = getResolvedModule;
    function setResolvedModule(sourceFile, moduleNameText, resolvedModule) {
        if (!sourceFile.resolvedModules) {
            sourceFile.resolvedModules = new __exports__Map();
        }
        sourceFile.resolvedModules.set(moduleNameText, resolvedModule);
    }
    __exports__setResolvedModule = setResolvedModule;
    function setResolvedTypeReferenceDirective(sourceFile, typeReferenceDirectiveName, resolvedTypeReferenceDirective) {
        if (!sourceFile.resolvedTypeReferenceDirectiveNames) {
            sourceFile.resolvedTypeReferenceDirectiveNames = new __exports__Map();
        }
        sourceFile.resolvedTypeReferenceDirectiveNames.set(typeReferenceDirectiveName, resolvedTypeReferenceDirective);
    }
    __exports__setResolvedTypeReferenceDirective = setResolvedTypeReferenceDirective;
    function projectReferenceIsEqualTo(oldRef, newRef) {
        return oldRef.path === newRef.path &&
            !oldRef.prepend === !newRef.prepend &&
            !oldRef.circular === !newRef.circular;
    }
    __exports__projectReferenceIsEqualTo = projectReferenceIsEqualTo;
    function moduleResolutionIsEqualTo(oldResolution, newResolution) {
        return oldResolution.isExternalLibraryImport === newResolution.isExternalLibraryImport &&
            oldResolution.extension === newResolution.extension &&
            oldResolution.resolvedFileName === newResolution.resolvedFileName &&
            oldResolution.originalPath === newResolution.originalPath &&
            packageIdIsEqual(oldResolution.packageId, newResolution.packageId);
    }
    __exports__moduleResolutionIsEqualTo = moduleResolutionIsEqualTo;
    function packageIdIsEqual(a, b) {
        return a === b || !!a && !!b && a.name === b.name && a.subModuleName === b.subModuleName && a.version === b.version;
    }
    function packageIdToString({ name, subModuleName, version }) {
        const fullName = subModuleName ? `${name}/${subModuleName}` : name;
        return `${fullName}@${version}`;
    }
    __exports__packageIdToString = packageIdToString;
    function typeDirectiveIsEqualTo(oldResolution, newResolution) {
        return oldResolution.resolvedFileName === newResolution.resolvedFileName && oldResolution.primary === newResolution.primary;
    }
    __exports__typeDirectiveIsEqualTo = typeDirectiveIsEqualTo;
    function hasChangesInResolutions(names, newResolutions, oldResolutions, comparer) {
        __exports__Debug.assert(names.length === newResolutions.length);
        for (let i = 0; i < names.length; i++) {
            const newResolution = newResolutions[i];
            const oldResolution = oldResolutions && oldResolutions.get(names[i]);
            const changed = oldResolution
                ? !newResolution || !comparer(oldResolution, newResolution)
                : newResolution;
            if (changed) {
                return true;
            }
        }
        return false;
    }
    __exports__hasChangesInResolutions = hasChangesInResolutions;
    // Returns true if this node contains a parse error anywhere underneath it.
    function containsParseError(node) {
        aggregateChildData(node);
        return (node.flags & 262144 /* ThisNodeOrAnySubNodesHasError */) !== 0;
    }
    __exports__containsParseError = containsParseError;
    function aggregateChildData(node) {
        if (!(node.flags & 524288 /* HasAggregatedChildData */)) {
            // A node is considered to contain a parse error if:
            //  a) the parser explicitly marked that it had an error
            //  b) any of it's children reported that it had an error.
            const thisNodeOrAnySubNodesHasError = ((node.flags & 65536 /* ThisNodeHasError */) !== 0) ||
                forEachChild(node, containsParseError);
            // If so, mark ourselves accordingly.
            if (thisNodeOrAnySubNodesHasError) {
                node.flags |= 262144 /* ThisNodeOrAnySubNodesHasError */;
            }
            // Also mark that we've propagated the child information to this node.  This way we can
            // always consult the bit directly on this node without needing to check its children
            // again.
            node.flags |= 524288 /* HasAggregatedChildData */;
        }
    }
    function getSourceFileOfNode(node) {
        while (node && node.kind !== 297 /* SourceFile */) {
            node = node.parent;
        }
        return node;
    }
    __exports__getSourceFileOfNode = getSourceFileOfNode;
    function isStatementWithLocals(node) {
        switch (node.kind) {
            case 230 /* Block */:
            case 258 /* CaseBlock */:
            case 237 /* ForStatement */:
            case 238 /* ForInStatement */:
            case 239 /* ForOfStatement */:
                return true;
        }
        return false;
    }
    __exports__isStatementWithLocals = isStatementWithLocals;
    function getStartPositionOfLine(line, sourceFile) {
        __exports__Debug.assert(line >= 0);
        return getLineStarts(sourceFile)[line];
    }
    __exports__getStartPositionOfLine = getStartPositionOfLine;
    // This is a useful function for debugging purposes.
    function nodePosToString(node) {
        const file = getSourceFileOfNode(node);
        const loc = getLineAndCharacterOfPosition(file, node.pos);
        return `${file.fileName}(${loc.line + 1},${loc.character + 1})`;
    }
    __exports__nodePosToString = nodePosToString;
    function getEndLinePosition(line, sourceFile) {
        __exports__Debug.assert(line >= 0);
        const lineStarts = getLineStarts(sourceFile);
        const lineIndex = line;
        const sourceText = sourceFile.text;
        if (lineIndex + 1 === lineStarts.length) {
            // last line - return EOF
            return sourceText.length - 1;
        }
        else {
            // current line start
            const start = lineStarts[lineIndex];
            // take the start position of the next line - 1 = it should be some line break
            let pos = lineStarts[lineIndex + 1] - 1;
            __exports__Debug.assert(isLineBreak(sourceText.charCodeAt(pos)));
            // walk backwards skipping line breaks, stop the the beginning of current line.
            // i.e:
            // <some text>
            // $ <- end of line for this position should match the start position
            while (start <= pos && isLineBreak(sourceText.charCodeAt(pos))) {
                pos--;
            }
            return pos;
        }
    }
    __exports__getEndLinePosition = getEndLinePosition;
    /**
     * Returns a value indicating whether a name is unique globally or within the current file.
     * Note: This does not consider whether a name appears as a free identifier or not, so at the expression `x.y` this includes both `x` and `y`.
     */
    function isFileLevelUniqueName(sourceFile, name, hasGlobalName) {
        return !(hasGlobalName && hasGlobalName(name)) && !sourceFile.identifiers.has(name);
    }
    __exports__isFileLevelUniqueName = isFileLevelUniqueName;
    // Returns true if this node is missing from the actual source code. A 'missing' node is different
    // from 'undefined/defined'. When a node is undefined (which can happen for optional nodes
    // in the tree), it is definitely missing. However, a node may be defined, but still be
    // missing.  This happens whenever the parser knows it needs to parse something, but can't
    // get anything in the source code that it expects at that location. For example:
    //
    //          let a: ;
    //
    // Here, the Type in the Type-Annotation is not-optional (as there is a colon in the source
    // code). So the parser will attempt to parse out a type, and will create an actual node.
    // However, this node will be 'missing' in the sense that no actual source-code/tokens are
    // contained within it.
    function nodeIsMissing(node) {
        if (node === undefined) {
            return true;
        }
        return node.pos === node.end && node.pos >= 0 && node.kind !== 1 /* EndOfFileToken */;
    }
    __exports__nodeIsMissing = nodeIsMissing;
    function nodeIsPresent(node) {
        return !nodeIsMissing(node);
    }
    __exports__nodeIsPresent = nodeIsPresent;
    function insertStatementsAfterPrologue(to, from, isPrologueDirective) {
        if (from === undefined || from.length === 0)
            return to;
        let statementIndex = 0;
        // skip all prologue directives to insert at the correct position
        for (; statementIndex < to.length; ++statementIndex) {
            if (!isPrologueDirective(to[statementIndex])) {
                break;
            }
        }
        to.splice(statementIndex, 0, ...from);
        return to;
    }
    function insertStatementAfterPrologue(to, statement, isPrologueDirective) {
        if (statement === undefined)
            return to;
        let statementIndex = 0;
        // skip all prologue directives to insert at the correct position
        for (; statementIndex < to.length; ++statementIndex) {
            if (!isPrologueDirective(to[statementIndex])) {
                break;
            }
        }
        to.splice(statementIndex, 0, statement);
        return to;
    }
    function isAnyPrologueDirective(node) {
        return isPrologueDirective(node) || !!(getEmitFlags(node) & 1048576 /* CustomPrologue */);
    }
    /**
     * Prepends statements to an array while taking care of prologue directives.
     */
    function insertStatementsAfterStandardPrologue(to, from) {
        return insertStatementsAfterPrologue(to, from, isPrologueDirective);
    }
    __exports__insertStatementsAfterStandardPrologue = insertStatementsAfterStandardPrologue;
    function insertStatementsAfterCustomPrologue(to, from) {
        return insertStatementsAfterPrologue(to, from, isAnyPrologueDirective);
    }
    __exports__insertStatementsAfterCustomPrologue = insertStatementsAfterCustomPrologue;
    /**
     * Prepends statements to an array while taking care of prologue directives.
     */
    function insertStatementAfterStandardPrologue(to, statement) {
        return insertStatementAfterPrologue(to, statement, isPrologueDirective);
    }
    __exports__insertStatementAfterStandardPrologue = insertStatementAfterStandardPrologue;
    function insertStatementAfterCustomPrologue(to, statement) {
        return insertStatementAfterPrologue(to, statement, isAnyPrologueDirective);
    }
    __exports__insertStatementAfterCustomPrologue = insertStatementAfterCustomPrologue;
    /**
     * Determine if the given comment is a triple-slash
     *
     * @return true if the comment is a triple-slash comment else false
     */
    function isRecognizedTripleSlashComment(text, commentPos, commentEnd) {
        // Verify this is /// comment, but do the regexp match only when we first can find /// in the comment text
        // so that we don't end up computing comment string and doing match for all // comments
        if (text.charCodeAt(commentPos + 1) === 47 /* slash */ &&
            commentPos + 2 < commentEnd &&
            text.charCodeAt(commentPos + 2) === 47 /* slash */) {
            const textSubStr = text.substring(commentPos, commentEnd);
            return textSubStr.match(__exports__fullTripleSlashReferencePathRegEx) ||
                textSubStr.match(__exports__fullTripleSlashAMDReferencePathRegEx) ||
                textSubStr.match(fullTripleSlashReferenceTypeReferenceDirectiveRegEx) ||
                textSubStr.match(defaultLibReferenceRegEx) ?
                true : false;
        }
        return false;
    }
    __exports__isRecognizedTripleSlashComment = isRecognizedTripleSlashComment;
    function isPinnedComment(text, start) {
        return text.charCodeAt(start + 1) === 42 /* asterisk */ &&
            text.charCodeAt(start + 2) === 33 /* exclamation */;
    }
    __exports__isPinnedComment = isPinnedComment;
    function createCommentDirectivesMap(sourceFile, commentDirectives) {
        const directivesByLine = new __exports__Map(commentDirectives.map(commentDirective => ([
            `${getLineAndCharacterOfPosition(sourceFile, commentDirective.range.end).line}`,
            commentDirective,
        ])));
        const usedLines = new __exports__Map();
        return { getUnusedExpectations, markUsed };
        function getUnusedExpectations() {
            return __exports__arrayFrom(directivesByLine.entries())
                .filter(([line, directive]) => directive.type === 0 /* ExpectError */ && !usedLines.get(line))
                .map(([_, directive]) => directive);
        }
        function markUsed(line) {
            if (!directivesByLine.has(`${line}`)) {
                return false;
            }
            usedLines.set(`${line}`, true);
            return true;
        }
    }
    __exports__createCommentDirectivesMap = createCommentDirectivesMap;
    function getTokenPosOfNode(node, sourceFile, includeJsDoc) {
        // With nodes that have no width (i.e. 'Missing' nodes), we actually *don't*
        // want to skip trivia because this will launch us forward to the next token.
        if (nodeIsMissing(node)) {
            return node.pos;
        }
        if (isJSDocNode(node) || node.kind === 11 /* JsxText */) {
            // JsxText cannot actually contain comments, even though the scanner will think it sees comments
            return skipTrivia((sourceFile || getSourceFileOfNode(node)).text, node.pos, /*stopAfterLineBreak*/ false, /*stopAtComments*/ true);
        }
        if (includeJsDoc && hasJSDocNodes(node)) {
            return getTokenPosOfNode(node.jsDoc[0], sourceFile);
        }
        // For a syntax list, it is possible that one of its children has JSDocComment nodes, while
        // the syntax list itself considers them as normal trivia. Therefore if we simply skip
        // trivia for the list, we may have skipped the JSDocComment as well. So we should process its
        // first child to determine the actual position of its first token.
        if (node.kind === 334 /* SyntaxList */ && node._children.length > 0) {
            return getTokenPosOfNode(node._children[0], sourceFile, includeJsDoc);
        }
        return skipTrivia((sourceFile || getSourceFileOfNode(node)).text, node.pos);
    }
    __exports__getTokenPosOfNode = getTokenPosOfNode;
    function getNonDecoratorTokenPosOfNode(node, sourceFile) {
        if (nodeIsMissing(node) || !node.decorators) {
            return getTokenPosOfNode(node, sourceFile);
        }
        return skipTrivia((sourceFile || getSourceFileOfNode(node)).text, node.decorators.end);
    }
    __exports__getNonDecoratorTokenPosOfNode = getNonDecoratorTokenPosOfNode;
    function getSourceTextOfNodeFromSourceFile(sourceFile, node, includeTrivia = false) {
        return getTextOfNodeFromSourceText(sourceFile.text, node, includeTrivia);
    }
    __exports__getSourceTextOfNodeFromSourceFile = getSourceTextOfNodeFromSourceFile;
    function isJSDocTypeExpressionOrChild(node) {
        return !!findAncestor(node, isJSDocTypeExpression);
    }
    function isExportNamespaceAsDefaultDeclaration(node) {
        return !!(isExportDeclaration(node) && node.exportClause && isNamespaceExport(node.exportClause) && node.exportClause.name.escapedText === "default");
    }
    __exports__isExportNamespaceAsDefaultDeclaration = isExportNamespaceAsDefaultDeclaration;
    function getTextOfNodeFromSourceText(sourceText, node, includeTrivia = false) {
        if (nodeIsMissing(node)) {
            return "";
        }
        let text = sourceText.substring(includeTrivia ? node.pos : skipTrivia(sourceText, node.pos), node.end);
        if (isJSDocTypeExpressionOrChild(node)) {
            // strip space + asterisk at line start
            text = text.replace(/(^|\r?\n|\r)\s*\*\s*/g, "$1");
        }
        return text;
    }
    __exports__getTextOfNodeFromSourceText = getTextOfNodeFromSourceText;
    function getTextOfNode(node, includeTrivia = false) {
        return getSourceTextOfNodeFromSourceFile(getSourceFileOfNode(node), node, includeTrivia);
    }
    __exports__getTextOfNode = getTextOfNode;
    function getPos(range) {
        return range.pos;
    }
    /**
     * Note: it is expected that the `nodeArray` and the `node` are within the same file.
     * For example, searching for a `SourceFile` in a `SourceFile[]` wouldn't work.
     */
    function indexOfNode(nodeArray, node) {
        return __exports__binarySearch(nodeArray, node, getPos, __exports__compareValues);
    }
    __exports__indexOfNode = indexOfNode;
    /**
     * Gets flags that control emit behavior of a node.
     */
    function getEmitFlags(node) {
        const emitNode = node.emitNode;
        return emitNode && emitNode.flags || 0;
    }
    __exports__getEmitFlags = getEmitFlags;
    ;
    function getScriptTargetFeatures() {
        return {
            es2015: {
                Array: ["find", "findIndex", "fill", "copyWithin", "entries", "keys", "values"],
                RegExp: ["flags", "sticky", "unicode"],
                Reflect: ["apply", "construct", "defineProperty", "deleteProperty", "get", " getOwnPropertyDescriptor", "getPrototypeOf", "has", "isExtensible", "ownKeys", "preventExtensions", "set", "setPrototypeOf"],
                ArrayConstructor: ["from", "of"],
                ObjectConstructor: ["assign", "getOwnPropertySymbols", "keys", "is", "setPrototypeOf"],
                NumberConstructor: ["isFinite", "isInteger", "isNaN", "isSafeInteger", "parseFloat", "parseInt"],
                Math: ["clz32", "imul", "sign", "log10", "log2", "log1p", "expm1", "cosh", "sinh", "tanh", "acosh", "asinh", "atanh", "hypot", "trunc", "fround", "cbrt"],
                Map: ["entries", "keys", "values"],
                Set: ["entries", "keys", "values"],
                Promise: __exports__emptyArray,
                PromiseConstructor: ["all", "race", "reject", "resolve"],
                Symbol: ["for", "keyFor"],
                WeakMap: ["entries", "keys", "values"],
                WeakSet: ["entries", "keys", "values"],
                Iterator: __exports__emptyArray,
                AsyncIterator: __exports__emptyArray,
                String: ["codePointAt", "includes", "endsWith", "normalize", "repeat", "startsWith", "anchor", "big", "blink", "bold", "fixed", "fontcolor", "fontsize", "italics", "link", "small", "strike", "sub", "sup"],
                StringConstructor: ["fromCodePoint", "raw"]
            },
            es2016: {
                Array: ["includes"]
            },
            es2017: {
                Atomics: __exports__emptyArray,
                SharedArrayBuffer: __exports__emptyArray,
                String: ["padStart", "padEnd"],
                ObjectConstructor: ["values", "entries", "getOwnPropertyDescriptors"],
                DateTimeFormat: ["formatToParts"]
            },
            es2018: {
                Promise: ["finally"],
                RegExpMatchArray: ["groups"],
                RegExpExecArray: ["groups"],
                RegExp: ["dotAll"],
                Intl: ["PluralRules"],
                AsyncIterable: __exports__emptyArray,
                AsyncIterableIterator: __exports__emptyArray,
                AsyncGenerator: __exports__emptyArray,
                AsyncGeneratorFunction: __exports__emptyArray,
            },
            es2019: {
                Array: ["flat", "flatMap"],
                ObjectConstructor: ["fromEntries"],
                String: ["trimStart", "trimEnd", "trimLeft", "trimRight"],
                Symbol: ["description"]
            },
            es2020: {
                BigInt: __exports__emptyArray,
                BigInt64Array: __exports__emptyArray,
                BigUint64Array: __exports__emptyArray,
                PromiseConstructor: ["allSettled"],
                SymbolConstructor: ["matchAll"],
                String: ["matchAll"],
                DataView: ["setBigInt64", "setBigUint64", "getBigInt64", "getBigUint64"],
                RelativeTimeFormat: ["format", "formatToParts", "resolvedOptions"]
            },
            esnext: {
                PromiseConstructor: ["any"],
                String: ["replaceAll"],
                NumberFormat: ["formatToParts"]
            }
        };
    }
    __exports__getScriptTargetFeatures = getScriptTargetFeatures;
    function getLiteralText(node, sourceFile, flags) {
        // If we don't need to downlevel and we can reach the original source text using
        // the node's parent reference, then simply get the text as it was originally written.
        if (canUseOriginalText(node, flags)) {
            return getSourceTextOfNodeFromSourceFile(sourceFile, node);
        }
        // If we can't reach the original source text, use the canonical form if it's a number,
        // or a (possibly escaped) quoted form of the original text if it's string-like.
        switch (node.kind) {
            case 10 /* StringLiteral */: {
                const escapeText = flags & 2 /* JsxAttributeEscape */ ? escapeJsxAttributeString :
                    flags & 1 /* NeverAsciiEscape */ || (getEmitFlags(node) & 16777216 /* NoAsciiEscaping */) ? escapeString :
                        escapeNonAsciiString;
                if (node.singleQuote) {
                    return "'" + escapeText(node.text, 39 /* singleQuote */) + "'";
                }
                else {
                    return '"' + escapeText(node.text, 34 /* doubleQuote */) + '"';
                }
            }
            case 14 /* NoSubstitutionTemplateLiteral */:
            case 15 /* TemplateHead */:
            case 16 /* TemplateMiddle */:
            case 17 /* TemplateTail */: {
                // If a NoSubstitutionTemplateLiteral appears to have a substitution in it, the original text
                // had to include a backslash: `not \${a} substitution`.
                const escapeText = flags & 1 /* NeverAsciiEscape */ || (getEmitFlags(node) & 16777216 /* NoAsciiEscaping */) ? escapeString :
                    escapeNonAsciiString;
                const rawText = node.rawText || escapeTemplateSubstitution(escapeText(node.text, 96 /* backtick */));
                switch (node.kind) {
                    case 14 /* NoSubstitutionTemplateLiteral */:
                        return "`" + rawText + "`";
                    case 15 /* TemplateHead */:
                        return "`" + rawText + "${";
                    case 16 /* TemplateMiddle */:
                        return "}" + rawText + "${";
                    case 17 /* TemplateTail */:
                        return "}" + rawText + "`";
                }
                break;
            }
            case 8 /* NumericLiteral */:
            case 9 /* BigIntLiteral */:
                return node.text;
            case 13 /* RegularExpressionLiteral */:
                if (flags & 4 /* TerminateUnterminatedLiterals */ && node.isUnterminated) {
                    return node.text + (node.text.charCodeAt(node.text.length - 1) === 92 /* backslash */ ? " /" : "/");
                }
                return node.text;
        }
        return __exports__Debug.fail(`Literal kind '${node.kind}' not accounted for.`);
    }
    __exports__getLiteralText = getLiteralText;
    function canUseOriginalText(node, flags) {
        if (nodeIsSynthesized(node) || !node.parent || (flags & 4 /* TerminateUnterminatedLiterals */ && node.isUnterminated)) {
            return false;
        }
        if (isNumericLiteral(node) && node.numericLiteralFlags & 512 /* ContainsSeparator */) {
            return !!(flags & 8 /* AllowNumericSeparator */);
        }
        return !isBigIntLiteral(node);
    }
    function getTextOfConstantValue(value) {
        return __exports__isString(value) ? '"' + escapeNonAsciiString(value) + '"' : "" + value;
    }
    __exports__getTextOfConstantValue = getTextOfConstantValue;
    // Make an identifier from an external module name by extracting the string after the last "/" and replacing
    // all non-alphanumeric characters with underscores
    function makeIdentifierFromModuleName(moduleName) {
        return __exports__getBaseFileName(moduleName).replace(/^(\d)/, "_$1").replace(/\W/g, "_");
    }
    __exports__makeIdentifierFromModuleName = makeIdentifierFromModuleName;
    function isBlockOrCatchScoped(declaration) {
        return (getCombinedNodeFlags(declaration) & 3 /* BlockScoped */) !== 0 ||
            isCatchClauseVariableDeclarationOrBindingElement(declaration);
    }
    __exports__isBlockOrCatchScoped = isBlockOrCatchScoped;
    function isCatchClauseVariableDeclarationOrBindingElement(declaration) {
        const node = getRootDeclaration(declaration);
        return node.kind === 249 /* VariableDeclaration */ && node.parent.kind === 287 /* CatchClause */;
    }
    __exports__isCatchClauseVariableDeclarationOrBindingElement = isCatchClauseVariableDeclarationOrBindingElement;
    function isAmbientModule(node) {
        return isModuleDeclaration(node) && (node.name.kind === 10 /* StringLiteral */ || isGlobalScopeAugmentation(node));
    }
    __exports__isAmbientModule = isAmbientModule;
    function isModuleWithStringLiteralName(node) {
        return isModuleDeclaration(node) && node.name.kind === 10 /* StringLiteral */;
    }
    __exports__isModuleWithStringLiteralName = isModuleWithStringLiteralName;
    function isNonGlobalAmbientModule(node) {
        return isModuleDeclaration(node) && isStringLiteral(node.name);
    }
    __exports__isNonGlobalAmbientModule = isNonGlobalAmbientModule;
    /**
     * An effective module (namespace) declaration is either
     * 1. An actual declaration: namespace X { ... }
     * 2. A Javascript declaration, which is:
     *    An identifier in a nested property access expression: Y in `X.Y.Z = { ... }`
     */
    function isEffectiveModuleDeclaration(node) {
        return isModuleDeclaration(node) || isIdentifier(node);
    }
    __exports__isEffectiveModuleDeclaration = isEffectiveModuleDeclaration;
    /** Given a symbol for a module, checks that it is a shorthand ambient module. */
    function isShorthandAmbientModuleSymbol(moduleSymbol) {
        return isShorthandAmbientModule(moduleSymbol.valueDeclaration);
    }
    __exports__isShorthandAmbientModuleSymbol = isShorthandAmbientModuleSymbol;
    function isShorthandAmbientModule(node) {
        // The only kind of module that can be missing a body is a shorthand ambient module.
        return node && node.kind === 256 /* ModuleDeclaration */ && (!node.body);
    }
    function isBlockScopedContainerTopLevel(node) {
        return node.kind === 297 /* SourceFile */ ||
            node.kind === 256 /* ModuleDeclaration */ ||
            isFunctionLike(node);
    }
    __exports__isBlockScopedContainerTopLevel = isBlockScopedContainerTopLevel;
    function isGlobalScopeAugmentation(module) {
        return !!(module.flags & 1024 /* GlobalAugmentation */);
    }
    __exports__isGlobalScopeAugmentation = isGlobalScopeAugmentation;
    function isExternalModuleAugmentation(node) {
        return isAmbientModule(node) && isModuleAugmentationExternal(node);
    }
    __exports__isExternalModuleAugmentation = isExternalModuleAugmentation;
    function isModuleAugmentationExternal(node) {
        // external module augmentation is a ambient module declaration that is either:
        // - defined in the top level scope and source file is an external module
        // - defined inside ambient module declaration located in the top level scope and source file not an external module
        switch (node.parent.kind) {
            case 297 /* SourceFile */:
                return isExternalModule(node.parent);
            case 257 /* ModuleBlock */:
                return isAmbientModule(node.parent.parent) && isSourceFile(node.parent.parent.parent) && !isExternalModule(node.parent.parent.parent);
        }
        return false;
    }
    __exports__isModuleAugmentationExternal = isModuleAugmentationExternal;
    function getNonAugmentationDeclaration(symbol) {
        return __exports__find(symbol.declarations, d => !isExternalModuleAugmentation(d) && !(isModuleDeclaration(d) && isGlobalScopeAugmentation(d)));
    }
    __exports__getNonAugmentationDeclaration = getNonAugmentationDeclaration;
    function isEffectiveExternalModule(node, compilerOptions) {
        return isExternalModule(node) || compilerOptions.isolatedModules || ((getEmitModuleKind(compilerOptions) === __exports__ModuleKind.CommonJS) && !!node.commonJsModuleIndicator);
    }
    __exports__isEffectiveExternalModule = isEffectiveExternalModule;
    /**
     * Returns whether the source file will be treated as if it were in strict mode at runtime.
     */
    function isEffectiveStrictModeSourceFile(node, compilerOptions) {
        // We can only verify strict mode for JS/TS files
        switch (node.scriptKind) {
            case 1 /* JS */:
            case 3 /* TS */:
            case 2 /* JSX */:
            case 4 /* TSX */:
                break;
            default:
                return false;
        }
        // Strict mode does not matter for declaration files.
        if (node.isDeclarationFile) {
            return false;
        }
        // If `alwaysStrict` is set, then treat the file as strict.
        if (getStrictOptionValue(compilerOptions, "alwaysStrict")) {
            return true;
        }
        // Starting with a "use strict" directive indicates the file is strict.
        if (startsWithUseStrict(node.statements)) {
            return true;
        }
        if (isExternalModule(node) || compilerOptions.isolatedModules) {
            // ECMAScript Modules are always strict.
            if (getEmitModuleKind(compilerOptions) >= __exports__ModuleKind.ES2015) {
                return true;
            }
            // Other modules are strict unless otherwise specified.
            return !compilerOptions.noImplicitUseStrict;
        }
        return false;
    }
    __exports__isEffectiveStrictModeSourceFile = isEffectiveStrictModeSourceFile;
    function isBlockScope(node, parentNode) {
        switch (node.kind) {
            case 297 /* SourceFile */:
            case 258 /* CaseBlock */:
            case 287 /* CatchClause */:
            case 256 /* ModuleDeclaration */:
            case 237 /* ForStatement */:
            case 238 /* ForInStatement */:
            case 239 /* ForOfStatement */:
            case 166 /* Constructor */:
            case 165 /* MethodDeclaration */:
            case 167 /* GetAccessor */:
            case 168 /* SetAccessor */:
            case 251 /* FunctionDeclaration */:
            case 208 /* FunctionExpression */:
            case 209 /* ArrowFunction */:
                return true;
            case 230 /* Block */:
                // function block is not considered block-scope container
                // see comment in binder.ts: bind(...), case for SyntaxKind.Block
                return !isFunctionLike(parentNode);
        }
        return false;
    }
    __exports__isBlockScope = isBlockScope;
    function isDeclarationWithTypeParameters(node) {
        switch (node.kind) {
            case 324 /* JSDocCallbackTag */:
            case 331 /* JSDocTypedefTag */:
            case 313 /* JSDocSignature */:
                return true;
            default:
                __exports__assertType(node);
                return isDeclarationWithTypeParameterChildren(node);
        }
    }
    __exports__isDeclarationWithTypeParameters = isDeclarationWithTypeParameters;
    function isDeclarationWithTypeParameterChildren(node) {
        switch (node.kind) {
            case 169 /* CallSignature */:
            case 170 /* ConstructSignature */:
            case 164 /* MethodSignature */:
            case 171 /* IndexSignature */:
            case 174 /* FunctionType */:
            case 175 /* ConstructorType */:
            case 308 /* JSDocFunctionType */:
            case 252 /* ClassDeclaration */:
            case 221 /* ClassExpression */:
            case 253 /* InterfaceDeclaration */:
            case 254 /* TypeAliasDeclaration */:
            case 330 /* JSDocTemplateTag */:
            case 251 /* FunctionDeclaration */:
            case 165 /* MethodDeclaration */:
            case 166 /* Constructor */:
            case 167 /* GetAccessor */:
            case 168 /* SetAccessor */:
            case 208 /* FunctionExpression */:
            case 209 /* ArrowFunction */:
                return true;
            default:
                __exports__assertType(node);
                return false;
        }
    }
    __exports__isDeclarationWithTypeParameterChildren = isDeclarationWithTypeParameterChildren;
    function isAnyImportSyntax(node) {
        switch (node.kind) {
            case 261 /* ImportDeclaration */:
            case 260 /* ImportEqualsDeclaration */:
                return true;
            default:
                return false;
        }
    }
    __exports__isAnyImportSyntax = isAnyImportSyntax;
    function isLateVisibilityPaintedStatement(node) {
        switch (node.kind) {
            case 261 /* ImportDeclaration */:
            case 260 /* ImportEqualsDeclaration */:
            case 232 /* VariableStatement */:
            case 252 /* ClassDeclaration */:
            case 251 /* FunctionDeclaration */:
            case 256 /* ModuleDeclaration */:
            case 254 /* TypeAliasDeclaration */:
            case 253 /* InterfaceDeclaration */:
            case 255 /* EnumDeclaration */:
                return true;
            default:
                return false;
        }
    }
    __exports__isLateVisibilityPaintedStatement = isLateVisibilityPaintedStatement;
    function hasPossibleExternalModuleReference(node) {
        return isAnyImportOrReExport(node) || isModuleDeclaration(node) || isImportTypeNode(node) || isImportCall(node);
    }
    __exports__hasPossibleExternalModuleReference = hasPossibleExternalModuleReference;
    function isAnyImportOrReExport(node) {
        return isAnyImportSyntax(node) || isExportDeclaration(node);
    }
    __exports__isAnyImportOrReExport = isAnyImportOrReExport;
    // Gets the nearest enclosing block scope container that has the provided node
    // as a descendant, that is not the provided node.
    function getEnclosingBlockScopeContainer(node) {
        return findAncestor(node.parent, current => isBlockScope(current, current.parent));
    }
    __exports__getEnclosingBlockScopeContainer = getEnclosingBlockScopeContainer;
    // Return display name of an identifier
    // Computed property names will just be emitted as "[<expr>]", where <expr> is the source
    // text of the expression in the computed property.
    function declarationNameToString(name) {
        return !name || getFullWidth(name) === 0 ? "(Missing)" : getTextOfNode(name);
    }
    __exports__declarationNameToString = declarationNameToString;
    function getNameFromIndexInfo(info) {
        return info.declaration ? declarationNameToString(info.declaration.parameters[0].name) : undefined;
    }
    __exports__getNameFromIndexInfo = getNameFromIndexInfo;
    function isComputedNonLiteralName(name) {
        return name.kind === 158 /* ComputedPropertyName */ && !isStringOrNumericLiteralLike(name.expression);
    }
    __exports__isComputedNonLiteralName = isComputedNonLiteralName;
    function getTextOfPropertyName(name) {
        switch (name.kind) {
            case 78 /* Identifier */:
            case 79 /* PrivateIdentifier */:
                return name.escapedText;
            case 10 /* StringLiteral */:
            case 8 /* NumericLiteral */:
            case 14 /* NoSubstitutionTemplateLiteral */:
                return escapeLeadingUnderscores(name.text);
            case 158 /* ComputedPropertyName */:
                if (isStringOrNumericLiteralLike(name.expression))
                    return escapeLeadingUnderscores(name.expression.text);
                return __exports__Debug.fail("Text of property name cannot be read from non-literal-valued ComputedPropertyNames");
            default:
                return __exports__Debug.assertNever(name);
        }
    }
    __exports__getTextOfPropertyName = getTextOfPropertyName;
    function entityNameToString(name) {
        switch (name.kind) {
            case 107 /* ThisKeyword */:
                return "this";
            case 79 /* PrivateIdentifier */:
            case 78 /* Identifier */:
                return getFullWidth(name) === 0 ? idText(name) : getTextOfNode(name);
            case 157 /* QualifiedName */:
                return entityNameToString(name.left) + "." + entityNameToString(name.right);
            case 201 /* PropertyAccessExpression */:
                if (isIdentifier(name.name) || isPrivateIdentifier(name.name)) {
                    return entityNameToString(name.expression) + "." + entityNameToString(name.name);
                }
                else {
                    return __exports__Debug.assertNever(name.name);
                }
            default:
                return __exports__Debug.assertNever(name);
        }
    }
    __exports__entityNameToString = entityNameToString;
    function createDiagnosticForNode(node, message, arg0, arg1, arg2, arg3) {
        const sourceFile = getSourceFileOfNode(node);
        return createDiagnosticForNodeInSourceFile(sourceFile, node, message, arg0, arg1, arg2, arg3);
    }
    __exports__createDiagnosticForNode = createDiagnosticForNode;
    function createDiagnosticForNodeArray(sourceFile, nodes, message, arg0, arg1, arg2, arg3) {
        const start = skipTrivia(sourceFile.text, nodes.pos);
        return createFileDiagnostic(sourceFile, start, nodes.end - start, message, arg0, arg1, arg2, arg3);
    }
    __exports__createDiagnosticForNodeArray = createDiagnosticForNodeArray;
    function createDiagnosticForNodeInSourceFile(sourceFile, node, message, arg0, arg1, arg2, arg3) {
        const span = getErrorSpanForNode(sourceFile, node);
        return createFileDiagnostic(sourceFile, span.start, span.length, message, arg0, arg1, arg2, arg3);
    }
    __exports__createDiagnosticForNodeInSourceFile = createDiagnosticForNodeInSourceFile;
    function createDiagnosticForNodeFromMessageChain(node, messageChain, relatedInformation) {
        const sourceFile = getSourceFileOfNode(node);
        const span = getErrorSpanForNode(sourceFile, node);
        return createFileDiagnosticFromMessageChain(sourceFile, span.start, span.length, messageChain, relatedInformation);
    }
    __exports__createDiagnosticForNodeFromMessageChain = createDiagnosticForNodeFromMessageChain;
    function assertDiagnosticLocation(file, start, length) {
        __exports__Debug.assertGreaterThanOrEqual(start, 0);
        __exports__Debug.assertGreaterThanOrEqual(length, 0);
        if (file) {
            __exports__Debug.assertLessThanOrEqual(start, file.text.length);
            __exports__Debug.assertLessThanOrEqual(start + length, file.text.length);
        }
    }
    function createFileDiagnosticFromMessageChain(file, start, length, messageChain, relatedInformation) {
        assertDiagnosticLocation(file, start, length);
        return {
            file,
            start,
            length,
            code: messageChain.code,
            category: messageChain.category,
            messageText: messageChain.next ? messageChain : messageChain.messageText,
            relatedInformation
        };
    }
    __exports__createFileDiagnosticFromMessageChain = createFileDiagnosticFromMessageChain;
    function createDiagnosticForFileFromMessageChain(sourceFile, messageChain, relatedInformation) {
        return {
            file: sourceFile,
            start: 0,
            length: 0,
            code: messageChain.code,
            category: messageChain.category,
            messageText: messageChain.next ? messageChain : messageChain.messageText,
            relatedInformation
        };
    }
    __exports__createDiagnosticForFileFromMessageChain = createDiagnosticForFileFromMessageChain;
    function createDiagnosticForRange(sourceFile, range, message) {
        return {
            file: sourceFile,
            start: range.pos,
            length: range.end - range.pos,
            code: message.code,
            category: message.category,
            messageText: message.message,
        };
    }
    __exports__createDiagnosticForRange = createDiagnosticForRange;
    function getSpanOfTokenAtPosition(sourceFile, pos) {
        const scanner = createScanner(sourceFile.languageVersion, /*skipTrivia*/ true, sourceFile.languageVariant, sourceFile.text, /*onError:*/ undefined, pos);
        scanner.scan();
        const start = scanner.getTokenPos();
        return createTextSpanFromBounds(start, scanner.getTextPos());
    }
    __exports__getSpanOfTokenAtPosition = getSpanOfTokenAtPosition;
    function getErrorSpanForArrowFunction(sourceFile, node) {
        const pos = skipTrivia(sourceFile.text, node.pos);
        if (node.body && node.body.kind === 230 /* Block */) {
            const { line: startLine } = getLineAndCharacterOfPosition(sourceFile, node.body.pos);
            const { line: endLine } = getLineAndCharacterOfPosition(sourceFile, node.body.end);
            if (startLine < endLine) {
                // The arrow function spans multiple lines,
                // make the error span be the first line, inclusive.
                return createTextSpan(pos, getEndLinePosition(startLine, sourceFile) - pos + 1);
            }
        }
        return createTextSpanFromBounds(pos, node.end);
    }
    function getErrorSpanForNode(sourceFile, node) {
        let errorNode = node;
        switch (node.kind) {
            case 297 /* SourceFile */:
                const pos = skipTrivia(sourceFile.text, 0, /*stopAfterLineBreak*/ false);
                if (pos === sourceFile.text.length) {
                    // file is empty - return span for the beginning of the file
                    return createTextSpan(0, 0);
                }
                return getSpanOfTokenAtPosition(sourceFile, pos);
            // This list is a work in progress. Add missing node kinds to improve their error
            // spans.
            case 249 /* VariableDeclaration */:
            case 198 /* BindingElement */:
            case 252 /* ClassDeclaration */:
            case 221 /* ClassExpression */:
            case 253 /* InterfaceDeclaration */:
            case 256 /* ModuleDeclaration */:
            case 255 /* EnumDeclaration */:
            case 291 /* EnumMember */:
            case 251 /* FunctionDeclaration */:
            case 208 /* FunctionExpression */:
            case 165 /* MethodDeclaration */:
            case 167 /* GetAccessor */:
            case 168 /* SetAccessor */:
            case 254 /* TypeAliasDeclaration */:
            case 163 /* PropertyDeclaration */:
            case 162 /* PropertySignature */:
                errorNode = node.name;
                break;
            case 209 /* ArrowFunction */:
                return getErrorSpanForArrowFunction(sourceFile, node);
            case 284 /* CaseClause */:
            case 285 /* DefaultClause */:
                const start = skipTrivia(sourceFile.text, node.pos);
                const end = node.statements.length > 0 ? node.statements[0].pos : node.end;
                return createTextSpanFromBounds(start, end);
        }
        if (errorNode === undefined) {
            // If we don't have a better node, then just set the error on the first token of
            // construct.
            return getSpanOfTokenAtPosition(sourceFile, node.pos);
        }
        __exports__Debug.assert(!isJSDoc(errorNode));
        const isMissing = nodeIsMissing(errorNode);
        const pos = isMissing || isJsxText(node)
            ? errorNode.pos
            : skipTrivia(sourceFile.text, errorNode.pos);
        // These asserts should all be satisfied for a properly constructed `errorNode`.
        if (isMissing) {
            __exports__Debug.assert(pos === errorNode.pos, "This failure could trigger https://github.com/Microsoft/TypeScript/issues/20809");
            __exports__Debug.assert(pos === errorNode.end, "This failure could trigger https://github.com/Microsoft/TypeScript/issues/20809");
        }
        else {
            __exports__Debug.assert(pos >= errorNode.pos, "This failure could trigger https://github.com/Microsoft/TypeScript/issues/20809");
            __exports__Debug.assert(pos <= errorNode.end, "This failure could trigger https://github.com/Microsoft/TypeScript/issues/20809");
        }
        return createTextSpanFromBounds(pos, errorNode.end);
    }
    __exports__getErrorSpanForNode = getErrorSpanForNode;
    function isExternalOrCommonJsModule(file) {
        return (file.externalModuleIndicator || file.commonJsModuleIndicator) !== undefined;
    }
    __exports__isExternalOrCommonJsModule = isExternalOrCommonJsModule;
    function isJsonSourceFile(file) {
        return file.scriptKind === 6 /* JSON */;
    }
    __exports__isJsonSourceFile = isJsonSourceFile;
    function isEnumConst(node) {
        return !!(getCombinedModifierFlags(node) & 2048 /* Const */);
    }
    __exports__isEnumConst = isEnumConst;
    function isDeclarationReadonly(declaration) {
        return !!(getCombinedModifierFlags(declaration) & 64 /* Readonly */ && !isParameterPropertyDeclaration(declaration, declaration.parent));
    }
    __exports__isDeclarationReadonly = isDeclarationReadonly;
    function isVarConst(node) {
        return !!(getCombinedNodeFlags(node) & 2 /* Const */);
    }
    __exports__isVarConst = isVarConst;
    function isLet(node) {
        return !!(getCombinedNodeFlags(node) & 1 /* Let */);
    }
    __exports__isLet = isLet;
    function isSuperCall(n) {
        return n.kind === 203 /* CallExpression */ && n.expression.kind === 105 /* SuperKeyword */;
    }
    __exports__isSuperCall = isSuperCall;
    function isImportCall(n) {
        return n.kind === 203 /* CallExpression */ && n.expression.kind === 99 /* ImportKeyword */;
    }
    __exports__isImportCall = isImportCall;
    function isImportMeta(n) {
        return isMetaProperty(n)
            && n.keywordToken === 99 /* ImportKeyword */
            && n.name.escapedText === "meta";
    }
    __exports__isImportMeta = isImportMeta;
    function isLiteralImportTypeNode(n) {
        return isImportTypeNode(n) && isLiteralTypeNode(n.argument) && isStringLiteral(n.argument.literal);
    }
    __exports__isLiteralImportTypeNode = isLiteralImportTypeNode;
    function isPrologueDirective(node) {
        return node.kind === 233 /* ExpressionStatement */
            && node.expression.kind === 10 /* StringLiteral */;
    }
    __exports__isPrologueDirective = isPrologueDirective;
    function isCustomPrologue(node) {
        return !!(getEmitFlags(node) & 1048576 /* CustomPrologue */);
    }
    __exports__isCustomPrologue = isCustomPrologue;
    function isHoistedFunction(node) {
        return isCustomPrologue(node)
            && isFunctionDeclaration(node);
    }
    __exports__isHoistedFunction = isHoistedFunction;
    function isHoistedVariable(node) {
        return isIdentifier(node.name)
            && !node.initializer;
    }
    function isHoistedVariableStatement(node) {
        return isCustomPrologue(node)
            && isVariableStatement(node)
            && __exports__every(node.declarationList.declarations, isHoistedVariable);
    }
    __exports__isHoistedVariableStatement = isHoistedVariableStatement;
    function getLeadingCommentRangesOfNode(node, sourceFileOfNode) {
        return node.kind !== 11 /* JsxText */ ? getLeadingCommentRanges(sourceFileOfNode.text, node.pos) : undefined;
    }
    __exports__getLeadingCommentRangesOfNode = getLeadingCommentRangesOfNode;
    function getJSDocCommentRanges(node, text) {
        const commentRanges = (node.kind === 160 /* Parameter */ ||
            node.kind === 159 /* TypeParameter */ ||
            node.kind === 208 /* FunctionExpression */ ||
            node.kind === 209 /* ArrowFunction */ ||
            node.kind === 207 /* ParenthesizedExpression */) ?
            __exports__concatenate(getTrailingCommentRanges(text, node.pos), getLeadingCommentRanges(text, node.pos)) :
            getLeadingCommentRanges(text, node.pos);
        // True if the comment starts with '/**' but not if it is '/**/'
        return __exports__filter(commentRanges, comment => text.charCodeAt(comment.pos + 1) === 42 /* asterisk */ &&
            text.charCodeAt(comment.pos + 2) === 42 /* asterisk */ &&
            text.charCodeAt(comment.pos + 3) !== 47 /* slash */);
    }
    __exports__getJSDocCommentRanges = getJSDocCommentRanges;
    __exports__fullTripleSlashReferencePathRegEx = /^(\/\/\/\s*<reference\s+path\s*=\s*)('|")(.+?)\2.*?\/>/;
    const fullTripleSlashReferenceTypeReferenceDirectiveRegEx = /^(\/\/\/\s*<reference\s+types\s*=\s*)('|")(.+?)\2.*?\/>/;
    __exports__fullTripleSlashAMDReferencePathRegEx = /^(\/\/\/\s*<amd-dependency\s+path\s*=\s*)('|")(.+?)\2.*?\/>/;
    const defaultLibReferenceRegEx = /^(\/\/\/\s*<reference\s+no-default-lib\s*=\s*)('|")(.+?)\2\s*\/>/;
    function isPartOfTypeNode(node) {
        if (172 /* FirstTypeNode */ <= node.kind && node.kind <= 195 /* LastTypeNode */) {
            return true;
        }
        switch (node.kind) {
            case 128 /* AnyKeyword */:
            case 152 /* UnknownKeyword */:
            case 144 /* NumberKeyword */:
            case 155 /* BigIntKeyword */:
            case 147 /* StringKeyword */:
            case 131 /* BooleanKeyword */:
            case 148 /* SymbolKeyword */:
            case 145 /* ObjectKeyword */:
            case 150 /* UndefinedKeyword */:
            case 141 /* NeverKeyword */:
                return true;
            case 113 /* VoidKeyword */:
                return node.parent.kind !== 212 /* VoidExpression */;
            case 223 /* ExpressionWithTypeArguments */:
                return !isExpressionWithTypeArgumentsInClassExtendsClause(node);
            case 159 /* TypeParameter */:
                return node.parent.kind === 190 /* MappedType */ || node.parent.kind === 185 /* InferType */;
            // Identifiers and qualified names may be type nodes, depending on their context. Climb
            // above them to find the lowest container
            case 78 /* Identifier */:
                // If the identifier is the RHS of a qualified name, then it's a type iff its parent is.
                if (node.parent.kind === 157 /* QualifiedName */ && node.parent.right === node) {
                    node = node.parent;
                }
                else if (node.parent.kind === 201 /* PropertyAccessExpression */ && node.parent.name === node) {
                    node = node.parent;
                }
                // At this point, node is either a qualified name or an identifier
                __exports__Debug.assert(node.kind === 78 /* Identifier */ || node.kind === 157 /* QualifiedName */ || node.kind === 201 /* PropertyAccessExpression */, "'node' was expected to be a qualified name, identifier or property access in 'isPartOfTypeNode'.");
            // falls through
            case 157 /* QualifiedName */:
            case 201 /* PropertyAccessExpression */:
            case 107 /* ThisKeyword */: {
                const { parent } = node;
                if (parent.kind === 176 /* TypeQuery */) {
                    return false;
                }
                if (parent.kind === 195 /* ImportType */) {
                    return !parent.isTypeOf;
                }
                // Do not recursively call isPartOfTypeNode on the parent. In the example:
                //
                //     let a: A.B.C;
                //
                // Calling isPartOfTypeNode would consider the qualified name A.B a type node.
                // Only C and A.B.C are type nodes.
                if (172 /* FirstTypeNode */ <= parent.kind && parent.kind <= 195 /* LastTypeNode */) {
                    return true;
                }
                switch (parent.kind) {
                    case 223 /* ExpressionWithTypeArguments */:
                        return !isExpressionWithTypeArgumentsInClassExtendsClause(parent);
                    case 159 /* TypeParameter */:
                        return node === parent.constraint;
                    case 330 /* JSDocTemplateTag */:
                        return node === parent.constraint;
                    case 163 /* PropertyDeclaration */:
                    case 162 /* PropertySignature */:
                    case 160 /* Parameter */:
                    case 249 /* VariableDeclaration */:
                        return node === parent.type;
                    case 251 /* FunctionDeclaration */:
                    case 208 /* FunctionExpression */:
                    case 209 /* ArrowFunction */:
                    case 166 /* Constructor */:
                    case 165 /* MethodDeclaration */:
                    case 164 /* MethodSignature */:
                    case 167 /* GetAccessor */:
                    case 168 /* SetAccessor */:
                        return node === parent.type;
                    case 169 /* CallSignature */:
                    case 170 /* ConstructSignature */:
                    case 171 /* IndexSignature */:
                        return node === parent.type;
                    case 206 /* TypeAssertionExpression */:
                        return node === parent.type;
                    case 203 /* CallExpression */:
                    case 204 /* NewExpression */:
                        return __exports__contains(parent.typeArguments, node);
                    case 205 /* TaggedTemplateExpression */:
                        // TODO (drosen): TaggedTemplateExpressions may eventually support type arguments.
                        return false;
                }
            }
        }
        return false;
    }
    __exports__isPartOfTypeNode = isPartOfTypeNode;
    function isChildOfNodeWithKind(node, kind) {
        while (node) {
            if (node.kind === kind) {
                return true;
            }
            node = node.parent;
        }
        return false;
    }
    __exports__isChildOfNodeWithKind = isChildOfNodeWithKind;
    // Warning: This has the same semantics as the forEach family of functions,
    //          in that traversal terminates in the event that 'visitor' supplies a truthy value.
    function forEachReturnStatement(body, visitor) {
        return traverse(body);
        function traverse(node) {
            switch (node.kind) {
                case 242 /* ReturnStatement */:
                    return visitor(node);
                case 258 /* CaseBlock */:
                case 230 /* Block */:
                case 234 /* IfStatement */:
                case 235 /* DoStatement */:
                case 236 /* WhileStatement */:
                case 237 /* ForStatement */:
                case 238 /* ForInStatement */:
                case 239 /* ForOfStatement */:
                case 243 /* WithStatement */:
                case 244 /* SwitchStatement */:
                case 284 /* CaseClause */:
                case 285 /* DefaultClause */:
                case 245 /* LabeledStatement */:
                case 247 /* TryStatement */:
                case 287 /* CatchClause */:
                    return forEachChild(node, traverse);
            }
        }
    }
    __exports__forEachReturnStatement = forEachReturnStatement;
    function forEachYieldExpression(body, visitor) {
        return traverse(body);
        function traverse(node) {
            switch (node.kind) {
                case 219 /* YieldExpression */:
                    visitor(node);
                    const operand = node.expression;
                    if (operand) {
                        traverse(operand);
                    }
                    return;
                case 255 /* EnumDeclaration */:
                case 253 /* InterfaceDeclaration */:
                case 256 /* ModuleDeclaration */:
                case 254 /* TypeAliasDeclaration */:
                    // These are not allowed inside a generator now, but eventually they may be allowed
                    // as local types. Regardless, skip them to avoid the work.
                    return;
                default:
                    if (isFunctionLike(node)) {
                        if (node.name && node.name.kind === 158 /* ComputedPropertyName */) {
                            // Note that we will not include methods/accessors of a class because they would require
                            // first descending into the class. This is by design.
                            traverse(node.name.expression);
                            return;
                        }
                    }
                    else if (!isPartOfTypeNode(node)) {
                        // This is the general case, which should include mostly expressions and statements.
                        // Also includes NodeArrays.
                        forEachChild(node, traverse);
                    }
            }
        }
    }
    __exports__forEachYieldExpression = forEachYieldExpression;
    /**
     * Gets the most likely element type for a TypeNode. This is not an exhaustive test
     * as it assumes a rest argument can only be an array type (either T[], or Array<T>).
     *
     * @param node The type node.
     */
    function getRestParameterElementType(node) {
        if (node && node.kind === 178 /* ArrayType */) {
            return node.elementType;
        }
        else if (node && node.kind === 173 /* TypeReference */) {
            return __exports__singleOrUndefined(node.typeArguments);
        }
        else {
            return undefined;
        }
    }
    __exports__getRestParameterElementType = getRestParameterElementType;
    function getMembersOfDeclaration(node) {
        switch (node.kind) {
            case 253 /* InterfaceDeclaration */:
            case 252 /* ClassDeclaration */:
            case 221 /* ClassExpression */:
            case 177 /* TypeLiteral */:
                return node.members;
            case 200 /* ObjectLiteralExpression */:
                return node.properties;
        }
    }
    __exports__getMembersOfDeclaration = getMembersOfDeclaration;
    function isVariableLike(node) {
        if (node) {
            switch (node.kind) {
                case 198 /* BindingElement */:
                case 291 /* EnumMember */:
                case 160 /* Parameter */:
                case 288 /* PropertyAssignment */:
                case 163 /* PropertyDeclaration */:
                case 162 /* PropertySignature */:
                case 289 /* ShorthandPropertyAssignment */:
                case 249 /* VariableDeclaration */:
                    return true;
            }
        }
        return false;
    }
    __exports__isVariableLike = isVariableLike;
    function isVariableLikeOrAccessor(node) {
        return isVariableLike(node) || isAccessor(node);
    }
    __exports__isVariableLikeOrAccessor = isVariableLikeOrAccessor;
    function isVariableDeclarationInVariableStatement(node) {
        return node.parent.kind === 250 /* VariableDeclarationList */
            && node.parent.parent.kind === 232 /* VariableStatement */;
    }
    __exports__isVariableDeclarationInVariableStatement = isVariableDeclarationInVariableStatement;
    function isValidESSymbolDeclaration(node) {
        return isVariableDeclaration(node) ? isVarConst(node) && isIdentifier(node.name) && isVariableDeclarationInVariableStatement(node) :
            isPropertyDeclaration(node) ? hasEffectiveReadonlyModifier(node) && hasStaticModifier(node) :
                isPropertySignature(node) && hasEffectiveReadonlyModifier(node);
    }
    __exports__isValidESSymbolDeclaration = isValidESSymbolDeclaration;
    function introducesArgumentsExoticObject(node) {
        switch (node.kind) {
            case 165 /* MethodDeclaration */:
            case 164 /* MethodSignature */:
            case 166 /* Constructor */:
            case 167 /* GetAccessor */:
            case 168 /* SetAccessor */:
            case 251 /* FunctionDeclaration */:
            case 208 /* FunctionExpression */:
                return true;
        }
        return false;
    }
    __exports__introducesArgumentsExoticObject = introducesArgumentsExoticObject;
    function unwrapInnermostStatementOfLabel(node, beforeUnwrapLabelCallback) {
        while (true) {
            if (beforeUnwrapLabelCallback) {
                beforeUnwrapLabelCallback(node);
            }
            if (node.statement.kind !== 245 /* LabeledStatement */) {
                return node.statement;
            }
            node = node.statement;
        }
    }
    __exports__unwrapInnermostStatementOfLabel = unwrapInnermostStatementOfLabel;
    function isFunctionBlock(node) {
        return node && node.kind === 230 /* Block */ && isFunctionLike(node.parent);
    }
    __exports__isFunctionBlock = isFunctionBlock;
    function isObjectLiteralMethod(node) {
        return node && node.kind === 165 /* MethodDeclaration */ && node.parent.kind === 200 /* ObjectLiteralExpression */;
    }
    __exports__isObjectLiteralMethod = isObjectLiteralMethod;
    function isObjectLiteralOrClassExpressionMethod(node) {
        return node.kind === 165 /* MethodDeclaration */ &&
            (node.parent.kind === 200 /* ObjectLiteralExpression */ ||
                node.parent.kind === 221 /* ClassExpression */);
    }
    __exports__isObjectLiteralOrClassExpressionMethod = isObjectLiteralOrClassExpressionMethod;
    function isIdentifierTypePredicate(predicate) {
        return predicate && predicate.kind === 1 /* Identifier */;
    }
    __exports__isIdentifierTypePredicate = isIdentifierTypePredicate;
    function isThisTypePredicate(predicate) {
        return predicate && predicate.kind === 0 /* This */;
    }
    __exports__isThisTypePredicate = isThisTypePredicate;
    function getPropertyAssignment(objectLiteral, key, key2) {
        return objectLiteral.properties.filter((property) => {
            if (property.kind === 288 /* PropertyAssignment */) {
                const propName = getTextOfPropertyName(property.name);
                return key === propName || (!!key2 && key2 === propName);
            }
            return false;
        });
    }
    __exports__getPropertyAssignment = getPropertyAssignment;
    function getPropertyArrayElementValue(objectLiteral, propKey, elementValue) {
        return __exports__firstDefined(getPropertyAssignment(objectLiteral, propKey), property => isArrayLiteralExpression(property.initializer) ?
            __exports__find(property.initializer.elements, (element) => isStringLiteral(element) && element.text === elementValue) :
            undefined);
    }
    __exports__getPropertyArrayElementValue = getPropertyArrayElementValue;
    function getTsConfigObjectLiteralExpression(tsConfigSourceFile) {
        if (tsConfigSourceFile && tsConfigSourceFile.statements.length) {
            const expression = tsConfigSourceFile.statements[0].expression;
            return __exports__tryCast(expression, isObjectLiteralExpression);
        }
    }
    __exports__getTsConfigObjectLiteralExpression = getTsConfigObjectLiteralExpression;
    function getTsConfigPropArrayElementValue(tsConfigSourceFile, propKey, elementValue) {
        return __exports__firstDefined(getTsConfigPropArray(tsConfigSourceFile, propKey), property => isArrayLiteralExpression(property.initializer) ?
            __exports__find(property.initializer.elements, (element) => isStringLiteral(element) && element.text === elementValue) :
            undefined);
    }
    __exports__getTsConfigPropArrayElementValue = getTsConfigPropArrayElementValue;
    function getTsConfigPropArray(tsConfigSourceFile, propKey) {
        const jsonObjectLiteral = getTsConfigObjectLiteralExpression(tsConfigSourceFile);
        return jsonObjectLiteral ? getPropertyAssignment(jsonObjectLiteral, propKey) : __exports__emptyArray;
    }
    __exports__getTsConfigPropArray = getTsConfigPropArray;
    function getContainingFunction(node) {
        return findAncestor(node.parent, isFunctionLike);
    }
    __exports__getContainingFunction = getContainingFunction;
    function getContainingFunctionDeclaration(node) {
        return findAncestor(node.parent, isFunctionLikeDeclaration);
    }
    __exports__getContainingFunctionDeclaration = getContainingFunctionDeclaration;
    function getContainingClass(node) {
        return findAncestor(node.parent, isClassLike);
    }
    __exports__getContainingClass = getContainingClass;
    function getThisContainer(node, includeArrowFunctions) {
        __exports__Debug.assert(node.kind !== 297 /* SourceFile */);
        while (true) {
            node = node.parent;
            if (!node) {
                return __exports__Debug.fail(); // If we never pass in a SourceFile, this should be unreachable, since we'll stop when we reach that.
            }
            switch (node.kind) {
                case 158 /* ComputedPropertyName */:
                    // If the grandparent node is an object literal (as opposed to a class),
                    // then the computed property is not a 'this' container.
                    // A computed property name in a class needs to be a this container
                    // so that we can error on it.
                    if (isClassLike(node.parent.parent)) {
                        return node;
                    }
                    // If this is a computed property, then the parent should not
                    // make it a this container. The parent might be a property
                    // in an object literal, like a method or accessor. But in order for
                    // such a parent to be a this container, the reference must be in
                    // the *body* of the container.
                    node = node.parent;
                    break;
                case 161 /* Decorator */:
                    // Decorators are always applied outside of the body of a class or method.
                    if (node.parent.kind === 160 /* Parameter */ && isClassElement(node.parent.parent)) {
                        // If the decorator's parent is a Parameter, we resolve the this container from
                        // the grandparent class declaration.
                        node = node.parent.parent;
                    }
                    else if (isClassElement(node.parent)) {
                        // If the decorator's parent is a class element, we resolve the 'this' container
                        // from the parent class declaration.
                        node = node.parent;
                    }
                    break;
                case 209 /* ArrowFunction */:
                    if (!includeArrowFunctions) {
                        continue;
                    }
                // falls through
                case 251 /* FunctionDeclaration */:
                case 208 /* FunctionExpression */:
                case 256 /* ModuleDeclaration */:
                case 163 /* PropertyDeclaration */:
                case 162 /* PropertySignature */:
                case 165 /* MethodDeclaration */:
                case 164 /* MethodSignature */:
                case 166 /* Constructor */:
                case 167 /* GetAccessor */:
                case 168 /* SetAccessor */:
                case 169 /* CallSignature */:
                case 170 /* ConstructSignature */:
                case 171 /* IndexSignature */:
                case 255 /* EnumDeclaration */:
                case 297 /* SourceFile */:
                    return node;
            }
        }
    }
    __exports__getThisContainer = getThisContainer;
    function isInTopLevelContext(node) {
        // The name of a class or function declaration is a BindingIdentifier in its surrounding scope.
        if (isIdentifier(node) && (isClassDeclaration(node.parent) || isFunctionDeclaration(node.parent)) && node.parent.name === node) {
            node = node.parent;
        }
        const container = getThisContainer(node, /*includeArrowFunctions*/ true);
        return isSourceFile(container);
    }
    __exports__isInTopLevelContext = isInTopLevelContext;
    function getNewTargetContainer(node) {
        const container = getThisContainer(node, /*includeArrowFunctions*/ false);
        if (container) {
            switch (container.kind) {
                case 166 /* Constructor */:
                case 251 /* FunctionDeclaration */:
                case 208 /* FunctionExpression */:
                    return container;
            }
        }
        return undefined;
    }
    __exports__getNewTargetContainer = getNewTargetContainer;
    /**
     * Given an super call/property node, returns the closest node where
     * - a super call/property access is legal in the node and not legal in the parent node the node.
     *   i.e. super call is legal in constructor but not legal in the class body.
     * - the container is an arrow function (so caller might need to call getSuperContainer again in case it needs to climb higher)
     * - a super call/property is definitely illegal in the container (but might be legal in some subnode)
     *   i.e. super property access is illegal in function declaration but can be legal in the statement list
     */
    function getSuperContainer(node, stopOnFunctions) {
        while (true) {
            node = node.parent;
            if (!node) {
                return node;
            }
            switch (node.kind) {
                case 158 /* ComputedPropertyName */:
                    node = node.parent;
                    break;
                case 251 /* FunctionDeclaration */:
                case 208 /* FunctionExpression */:
                case 209 /* ArrowFunction */:
                    if (!stopOnFunctions) {
                        continue;
                    }
                // falls through
                case 163 /* PropertyDeclaration */:
                case 162 /* PropertySignature */:
                case 165 /* MethodDeclaration */:
                case 164 /* MethodSignature */:
                case 166 /* Constructor */:
                case 167 /* GetAccessor */:
                case 168 /* SetAccessor */:
                    return node;
                case 161 /* Decorator */:
                    // Decorators are always applied outside of the body of a class or method.
                    if (node.parent.kind === 160 /* Parameter */ && isClassElement(node.parent.parent)) {
                        // If the decorator's parent is a Parameter, we resolve the this container from
                        // the grandparent class declaration.
                        node = node.parent.parent;
                    }
                    else if (isClassElement(node.parent)) {
                        // If the decorator's parent is a class element, we resolve the 'this' container
                        // from the parent class declaration.
                        node = node.parent;
                    }
                    break;
            }
        }
    }
    __exports__getSuperContainer = getSuperContainer;
    function getImmediatelyInvokedFunctionExpression(func) {
        if (func.kind === 208 /* FunctionExpression */ || func.kind === 209 /* ArrowFunction */) {
            let prev = func;
            let parent = func.parent;
            while (parent.kind === 207 /* ParenthesizedExpression */) {
                prev = parent;
                parent = parent.parent;
            }
            if (parent.kind === 203 /* CallExpression */ && parent.expression === prev) {
                return parent;
            }
        }
    }
    __exports__getImmediatelyInvokedFunctionExpression = getImmediatelyInvokedFunctionExpression;
    function isSuperOrSuperProperty(node) {
        return node.kind === 105 /* SuperKeyword */
            || isSuperProperty(node);
    }
    __exports__isSuperOrSuperProperty = isSuperOrSuperProperty;
    /**
     * Determines whether a node is a property or element access expression for `super`.
     */
    function isSuperProperty(node) {
        const kind = node.kind;
        return (kind === 201 /* PropertyAccessExpression */ || kind === 202 /* ElementAccessExpression */)
            && node.expression.kind === 105 /* SuperKeyword */;
    }
    __exports__isSuperProperty = isSuperProperty;
    /**
     * Determines whether a node is a property or element access expression for `this`.
     */
    function isThisProperty(node) {
        const kind = node.kind;
        return (kind === 201 /* PropertyAccessExpression */ || kind === 202 /* ElementAccessExpression */)
            && node.expression.kind === 107 /* ThisKeyword */;
    }
    __exports__isThisProperty = isThisProperty;
    function isThisInitializedDeclaration(node) {
        return !!node && isVariableDeclaration(node) && node.initializer?.kind === 107 /* ThisKeyword */;
    }
    __exports__isThisInitializedDeclaration = isThisInitializedDeclaration;
    function getEntityNameFromTypeNode(node) {
        switch (node.kind) {
            case 173 /* TypeReference */:
                return node.typeName;
            case 223 /* ExpressionWithTypeArguments */:
                return isEntityNameExpression(node.expression)
                    ? node.expression
                    : undefined;
            // TODO(rbuckton): These aren't valid TypeNodes, but we treat them as such because of `isPartOfTypeNode`, which returns `true` for things that aren't `TypeNode`s.
            case 78 /* Identifier */:
            case 157 /* QualifiedName */:
                return node;
        }
        return undefined;
    }
    __exports__getEntityNameFromTypeNode = getEntityNameFromTypeNode;
    function getInvokedExpression(node) {
        switch (node.kind) {
            case 205 /* TaggedTemplateExpression */:
                return node.tag;
            case 275 /* JsxOpeningElement */:
            case 274 /* JsxSelfClosingElement */:
                return node.tagName;
            default:
                return node.expression;
        }
    }
    __exports__getInvokedExpression = getInvokedExpression;
    function nodeCanBeDecorated(node, parent, grandparent) {
        // private names cannot be used with decorators yet
        if (isNamedDeclaration(node) && isPrivateIdentifier(node.name)) {
            return false;
        }
        switch (node.kind) {
            case 252 /* ClassDeclaration */:
                // classes are valid targets
                return true;
            case 163 /* PropertyDeclaration */:
                // property declarations are valid if their parent is a class declaration.
                return parent.kind === 252 /* ClassDeclaration */;
            case 167 /* GetAccessor */:
            case 168 /* SetAccessor */:
            case 165 /* MethodDeclaration */:
                // if this method has a body and its parent is a class declaration, this is a valid target.
                return node.body !== undefined
                    && parent.kind === 252 /* ClassDeclaration */;
            case 160 /* Parameter */:
                // if the parameter's parent has a body and its grandparent is a class declaration, this is a valid target;
                return parent.body !== undefined
                    && (parent.kind === 166 /* Constructor */
                        || parent.kind === 165 /* MethodDeclaration */
                        || parent.kind === 168 /* SetAccessor */)
                    && grandparent.kind === 252 /* ClassDeclaration */;
        }
        return false;
    }
    __exports__nodeCanBeDecorated = nodeCanBeDecorated;
    function nodeIsDecorated(node, parent, grandparent) {
        return node.decorators !== undefined
            && nodeCanBeDecorated(node, parent, grandparent); // TODO: GH#18217
    }
    __exports__nodeIsDecorated = nodeIsDecorated;
    function nodeOrChildIsDecorated(node, parent, grandparent) {
        return nodeIsDecorated(node, parent, grandparent) || childIsDecorated(node, parent); // TODO: GH#18217
    }
    __exports__nodeOrChildIsDecorated = nodeOrChildIsDecorated;
    function childIsDecorated(node, parent) {
        switch (node.kind) {
            case 252 /* ClassDeclaration */:
                return __exports__some(node.members, m => nodeOrChildIsDecorated(m, node, parent)); // TODO: GH#18217
            case 165 /* MethodDeclaration */:
            case 168 /* SetAccessor */:
                return __exports__some(node.parameters, p => nodeIsDecorated(p, node, parent)); // TODO: GH#18217
            default:
                return false;
        }
    }
    __exports__childIsDecorated = childIsDecorated;
    function isJSXTagName(node) {
        const { parent } = node;
        if (parent.kind === 275 /* JsxOpeningElement */ ||
            parent.kind === 274 /* JsxSelfClosingElement */ ||
            parent.kind === 276 /* JsxClosingElement */) {
            return parent.tagName === node;
        }
        return false;
    }
    __exports__isJSXTagName = isJSXTagName;
    function isExpressionNode(node) {
        switch (node.kind) {
            case 105 /* SuperKeyword */:
            case 103 /* NullKeyword */:
            case 109 /* TrueKeyword */:
            case 94 /* FalseKeyword */:
            case 13 /* RegularExpressionLiteral */:
            case 199 /* ArrayLiteralExpression */:
            case 200 /* ObjectLiteralExpression */:
            case 201 /* PropertyAccessExpression */:
            case 202 /* ElementAccessExpression */:
            case 203 /* CallExpression */:
            case 204 /* NewExpression */:
            case 205 /* TaggedTemplateExpression */:
            case 224 /* AsExpression */:
            case 206 /* TypeAssertionExpression */:
            case 225 /* NonNullExpression */:
            case 207 /* ParenthesizedExpression */:
            case 208 /* FunctionExpression */:
            case 221 /* ClassExpression */:
            case 209 /* ArrowFunction */:
            case 212 /* VoidExpression */:
            case 210 /* DeleteExpression */:
            case 211 /* TypeOfExpression */:
            case 214 /* PrefixUnaryExpression */:
            case 215 /* PostfixUnaryExpression */:
            case 216 /* BinaryExpression */:
            case 217 /* ConditionalExpression */:
            case 220 /* SpreadElement */:
            case 218 /* TemplateExpression */:
            case 222 /* OmittedExpression */:
            case 273 /* JsxElement */:
            case 274 /* JsxSelfClosingElement */:
            case 277 /* JsxFragment */:
            case 219 /* YieldExpression */:
            case 213 /* AwaitExpression */:
            case 226 /* MetaProperty */:
                return true;
            case 157 /* QualifiedName */:
                while (node.parent.kind === 157 /* QualifiedName */) {
                    node = node.parent;
                }
                return node.parent.kind === 176 /* TypeQuery */ || isJSXTagName(node);
            case 78 /* Identifier */:
                if (node.parent.kind === 176 /* TypeQuery */ || isJSXTagName(node)) {
                    return true;
                }
            // falls through
            case 8 /* NumericLiteral */:
            case 9 /* BigIntLiteral */:
            case 10 /* StringLiteral */:
            case 14 /* NoSubstitutionTemplateLiteral */:
            case 107 /* ThisKeyword */:
                return isInExpressionContext(node);
            default:
                return false;
        }
    }
    __exports__isExpressionNode = isExpressionNode;
    function isInExpressionContext(node) {
        const { parent } = node;
        switch (parent.kind) {
            case 249 /* VariableDeclaration */:
            case 160 /* Parameter */:
            case 163 /* PropertyDeclaration */:
            case 162 /* PropertySignature */:
            case 291 /* EnumMember */:
            case 288 /* PropertyAssignment */:
            case 198 /* BindingElement */:
                return parent.initializer === node;
            case 233 /* ExpressionStatement */:
            case 234 /* IfStatement */:
            case 235 /* DoStatement */:
            case 236 /* WhileStatement */:
            case 242 /* ReturnStatement */:
            case 243 /* WithStatement */:
            case 244 /* SwitchStatement */:
            case 284 /* CaseClause */:
            case 246 /* ThrowStatement */:
                return parent.expression === node;
            case 237 /* ForStatement */:
                const forStatement = parent;
                return (forStatement.initializer === node && forStatement.initializer.kind !== 250 /* VariableDeclarationList */) ||
                    forStatement.condition === node ||
                    forStatement.incrementor === node;
            case 238 /* ForInStatement */:
            case 239 /* ForOfStatement */:
                const forInStatement = parent;
                return (forInStatement.initializer === node && forInStatement.initializer.kind !== 250 /* VariableDeclarationList */) ||
                    forInStatement.expression === node;
            case 206 /* TypeAssertionExpression */:
            case 224 /* AsExpression */:
                return node === parent.expression;
            case 228 /* TemplateSpan */:
                return node === parent.expression;
            case 158 /* ComputedPropertyName */:
                return node === parent.expression;
            case 161 /* Decorator */:
            case 283 /* JsxExpression */:
            case 282 /* JsxSpreadAttribute */:
            case 290 /* SpreadAssignment */:
                return true;
            case 223 /* ExpressionWithTypeArguments */:
                return parent.expression === node && isExpressionWithTypeArgumentsInClassExtendsClause(parent);
            case 289 /* ShorthandPropertyAssignment */:
                return parent.objectAssignmentInitializer === node;
            default:
                return isExpressionNode(parent);
        }
    }
    __exports__isInExpressionContext = isInExpressionContext;
    function isPartOfTypeQuery(node) {
        while (node.kind === 157 /* QualifiedName */ || node.kind === 78 /* Identifier */) {
            node = node.parent;
        }
        return node.kind === 176 /* TypeQuery */;
    }
    __exports__isPartOfTypeQuery = isPartOfTypeQuery;
    function isExternalModuleImportEqualsDeclaration(node) {
        return node.kind === 260 /* ImportEqualsDeclaration */ && node.moduleReference.kind === 272 /* ExternalModuleReference */;
    }
    __exports__isExternalModuleImportEqualsDeclaration = isExternalModuleImportEqualsDeclaration;
    function getExternalModuleImportEqualsDeclarationExpression(node) {
        __exports__Debug.assert(isExternalModuleImportEqualsDeclaration(node));
        return node.moduleReference.expression;
    }
    __exports__getExternalModuleImportEqualsDeclarationExpression = getExternalModuleImportEqualsDeclarationExpression;
    function getExternalModuleRequireArgument(node) {
        return isRequireVariableDeclaration(node, /*requireStringLiteralLikeArgument*/ true)
            && getLeftmostAccessExpression(node.initializer).arguments[0];
    }
    __exports__getExternalModuleRequireArgument = getExternalModuleRequireArgument;
    function isInternalModuleImportEqualsDeclaration(node) {
        return node.kind === 260 /* ImportEqualsDeclaration */ && node.moduleReference.kind !== 272 /* ExternalModuleReference */;
    }
    __exports__isInternalModuleImportEqualsDeclaration = isInternalModuleImportEqualsDeclaration;
    function isSourceFileJS(file) {
        return isInJSFile(file);
    }
    __exports__isSourceFileJS = isSourceFileJS;
    function isSourceFileNotJS(file) {
        return !isInJSFile(file);
    }
    __exports__isSourceFileNotJS = isSourceFileNotJS;
    function isInJSFile(node) {
        return !!node && !!(node.flags & 131072 /* JavaScriptFile */);
    }
    __exports__isInJSFile = isInJSFile;
    function isInJsonFile(node) {
        return !!node && !!(node.flags & 33554432 /* JsonFile */);
    }
    __exports__isInJsonFile = isInJsonFile;
    function isSourceFileNotJson(file) {
        return !isJsonSourceFile(file);
    }
    __exports__isSourceFileNotJson = isSourceFileNotJson;
    function isInJSDoc(node) {
        return !!node && !!(node.flags & 4194304 /* JSDoc */);
    }
    __exports__isInJSDoc = isInJSDoc;
    function isJSDocIndexSignature(node) {
        return isTypeReferenceNode(node) &&
            isIdentifier(node.typeName) &&
            node.typeName.escapedText === "Object" &&
            node.typeArguments && node.typeArguments.length === 2 &&
            (node.typeArguments[0].kind === 147 /* StringKeyword */ || node.typeArguments[0].kind === 144 /* NumberKeyword */);
    }
    __exports__isJSDocIndexSignature = isJSDocIndexSignature;
    function isRequireCall(callExpression, requireStringLiteralLikeArgument) {
        if (callExpression.kind !== 203 /* CallExpression */) {
            return false;
        }
        const { expression, arguments: args } = callExpression;
        if (expression.kind !== 78 /* Identifier */ || expression.escapedText !== "require") {
            return false;
        }
        if (args.length !== 1) {
            return false;
        }
        const arg = args[0];
        return !requireStringLiteralLikeArgument || isStringLiteralLike(arg);
    }
    __exports__isRequireCall = isRequireCall;
    function isRequireVariableDeclaration(node, requireStringLiteralLikeArgument) {
        if (node.kind === 198 /* BindingElement */) {
            node = node.parent.parent;
        }
        return isVariableDeclaration(node) && !!node.initializer && isRequireCall(getLeftmostAccessExpression(node.initializer), requireStringLiteralLikeArgument);
    }
    __exports__isRequireVariableDeclaration = isRequireVariableDeclaration;
    function isRequireVariableStatement(node, requireStringLiteralLikeArgument = true) {
        return isVariableStatement(node)
            && node.declarationList.declarations.length > 0
            && __exports__every(node.declarationList.declarations, decl => isRequireVariableDeclaration(decl, requireStringLiteralLikeArgument));
    }
    __exports__isRequireVariableStatement = isRequireVariableStatement;
    function isSingleOrDoubleQuote(charCode) {
        return charCode === 39 /* singleQuote */ || charCode === 34 /* doubleQuote */;
    }
    __exports__isSingleOrDoubleQuote = isSingleOrDoubleQuote;
    function isStringDoubleQuoted(str, sourceFile) {
        return getSourceTextOfNodeFromSourceFile(sourceFile, str).charCodeAt(0) === 34 /* doubleQuote */;
    }
    __exports__isStringDoubleQuoted = isStringDoubleQuoted;
    function isAssignmentDeclaration(decl) {
        return isBinaryExpression(decl) || isAccessExpression(decl) || isIdentifier(decl) || isCallExpression(decl);
    }
    __exports__isAssignmentDeclaration = isAssignmentDeclaration;
    /** Get the initializer, taking into account defaulted Javascript initializers */
    function getEffectiveInitializer(node) {
        if (isInJSFile(node) && node.initializer &&
            isBinaryExpression(node.initializer) &&
            (node.initializer.operatorToken.kind === 56 /* BarBarToken */ || node.initializer.operatorToken.kind === 60 /* QuestionQuestionToken */) &&
            node.name && isEntityNameExpression(node.name) && isSameEntityName(node.name, node.initializer.left)) {
            return node.initializer.right;
        }
        return node.initializer;
    }
    __exports__getEffectiveInitializer = getEffectiveInitializer;
    /** Get the declaration initializer when it is container-like (See getExpandoInitializer). */
    function getDeclaredExpandoInitializer(node) {
        const init = getEffectiveInitializer(node);
        return init && getExpandoInitializer(init, isPrototypeAccess(node.name));
    }
    __exports__getDeclaredExpandoInitializer = getDeclaredExpandoInitializer;
    function hasExpandoValueProperty(node, isPrototypeAssignment) {
        return __exports__forEach(node.properties, p => isPropertyAssignment(p) &&
            isIdentifier(p.name) &&
            p.name.escapedText === "value" &&
            p.initializer &&
            getExpandoInitializer(p.initializer, isPrototypeAssignment));
    }
    /**
     * Get the assignment 'initializer' -- the righthand side-- when the initializer is container-like (See getExpandoInitializer).
     * We treat the right hand side of assignments with container-like initializers as declarations.
     */
    function getAssignedExpandoInitializer(node) {
        if (node && node.parent && isBinaryExpression(node.parent) && node.parent.operatorToken.kind === 62 /* EqualsToken */) {
            const isPrototypeAssignment = isPrototypeAccess(node.parent.left);
            return getExpandoInitializer(node.parent.right, isPrototypeAssignment) ||
                getDefaultedExpandoInitializer(node.parent.left, node.parent.right, isPrototypeAssignment);
        }
        if (node && isCallExpression(node) && isBindableObjectDefinePropertyCall(node)) {
            const result = hasExpandoValueProperty(node.arguments[2], node.arguments[1].text === "prototype");
            if (result) {
                return result;
            }
        }
    }
    __exports__getAssignedExpandoInitializer = getAssignedExpandoInitializer;
    /**
     * Recognized expando initializers are:
     * 1. (function() {})() -- IIFEs
     * 2. function() { } -- Function expressions
     * 3. class { } -- Class expressions
     * 4. {} -- Empty object literals
     * 5. { ... } -- Non-empty object literals, when used to initialize a prototype, like `C.prototype = { m() { } }`
     *
     * This function returns the provided initializer, or undefined if it is not valid.
     */
    function getExpandoInitializer(initializer, isPrototypeAssignment) {
        if (isCallExpression(initializer)) {
            const e = skipParentheses(initializer.expression);
            return e.kind === 208 /* FunctionExpression */ || e.kind === 209 /* ArrowFunction */ ? initializer : undefined;
        }
        if (initializer.kind === 208 /* FunctionExpression */ ||
            initializer.kind === 221 /* ClassExpression */ ||
            initializer.kind === 209 /* ArrowFunction */) {
            return initializer;
        }
        if (isObjectLiteralExpression(initializer) && (initializer.properties.length === 0 || isPrototypeAssignment)) {
            return initializer;
        }
    }
    __exports__getExpandoInitializer = getExpandoInitializer;
    /**
     * A defaulted expando initializer matches the pattern
     * `Lhs = Lhs || ExpandoInitializer`
     * or `var Lhs = Lhs || ExpandoInitializer`
     *
     * The second Lhs is required to be the same as the first except that it may be prefixed with
     * 'window.', 'global.' or 'self.' The second Lhs is otherwise ignored by the binder and checker.
     */
    function getDefaultedExpandoInitializer(name, initializer, isPrototypeAssignment) {
        const e = isBinaryExpression(initializer)
            && (initializer.operatorToken.kind === 56 /* BarBarToken */ || initializer.operatorToken.kind === 60 /* QuestionQuestionToken */)
            && getExpandoInitializer(initializer.right, isPrototypeAssignment);
        if (e && isSameEntityName(name, initializer.left)) {
            return e;
        }
    }
    function isDefaultedExpandoInitializer(node) {
        const name = isVariableDeclaration(node.parent) ? node.parent.name :
            isBinaryExpression(node.parent) && node.parent.operatorToken.kind === 62 /* EqualsToken */ ? node.parent.left :
                undefined;
        return name && getExpandoInitializer(node.right, isPrototypeAccess(name)) && isEntityNameExpression(name) && isSameEntityName(name, node.left);
    }
    __exports__isDefaultedExpandoInitializer = isDefaultedExpandoInitializer;
    /** Given an expando initializer, return its declaration name, or the left-hand side of the assignment if it's part of an assignment declaration. */
    function getNameOfExpando(node) {
        if (isBinaryExpression(node.parent)) {
            const parent = ((node.parent.operatorToken.kind === 56 /* BarBarToken */ || node.parent.operatorToken.kind === 60 /* QuestionQuestionToken */) && isBinaryExpression(node.parent.parent)) ? node.parent.parent : node.parent;
            if (parent.operatorToken.kind === 62 /* EqualsToken */ && isIdentifier(parent.left)) {
                return parent.left;
            }
        }
        else if (isVariableDeclaration(node.parent)) {
            return node.parent.name;
        }
    }
    __exports__getNameOfExpando = getNameOfExpando;
    /**
     * Is the 'declared' name the same as the one in the initializer?
     * @return true for identical entity names, as well as ones where the initializer is prefixed with
     * 'window', 'self' or 'global'. For example:
     *
     * var my = my || {}
     * var min = window.min || {}
     * my.app = self.my.app || class { }
     */
    function isSameEntityName(name, initializer) {
        if (isPropertyNameLiteral(name) && isPropertyNameLiteral(initializer)) {
            return getTextOfIdentifierOrLiteral(name) === getTextOfIdentifierOrLiteral(initializer);
        }
        if (isIdentifier(name) && isLiteralLikeAccess(initializer) &&
            (initializer.expression.kind === 107 /* ThisKeyword */ ||
                isIdentifier(initializer.expression) &&
                    (initializer.expression.escapedText === "window" ||
                        initializer.expression.escapedText === "self" ||
                        initializer.expression.escapedText === "global"))) {
            const nameOrArgument = getNameOrArgument(initializer);
            if (isPrivateIdentifier(nameOrArgument)) {
                __exports__Debug.fail("Unexpected PrivateIdentifier in name expression with literal-like access.");
            }
            return isSameEntityName(name, nameOrArgument);
        }
        if (isLiteralLikeAccess(name) && isLiteralLikeAccess(initializer)) {
            return getElementOrPropertyAccessName(name) === getElementOrPropertyAccessName(initializer)
                && isSameEntityName(name.expression, initializer.expression);
        }
        return false;
    }
    __exports__isSameEntityName = isSameEntityName;
    function getRightMostAssignedExpression(node) {
        while (isAssignmentExpression(node, /*excludeCompoundAssignments*/ true)) {
            node = node.right;
        }
        return node;
    }
    __exports__getRightMostAssignedExpression = getRightMostAssignedExpression;
    function isExportsIdentifier(node) {
        return isIdentifier(node) && node.escapedText === "exports";
    }
    __exports__isExportsIdentifier = isExportsIdentifier;
    function isModuleIdentifier(node) {
        return isIdentifier(node) && node.escapedText === "module";
    }
    __exports__isModuleIdentifier = isModuleIdentifier;
    function isModuleExportsAccessExpression(node) {
        return (isPropertyAccessExpression(node) || isLiteralLikeElementAccess(node))
            && isModuleIdentifier(node.expression)
            && getElementOrPropertyAccessName(node) === "exports";
    }
    __exports__isModuleExportsAccessExpression = isModuleExportsAccessExpression;
    /// Given a BinaryExpression, returns SpecialPropertyAssignmentKind for the various kinds of property
    /// assignments we treat as special in the binder
    function getAssignmentDeclarationKind(expr) {
        const special = getAssignmentDeclarationKindWorker(expr);
        return special === 5 /* Property */ || isInJSFile(expr) ? special : 0 /* None */;
    }
    __exports__getAssignmentDeclarationKind = getAssignmentDeclarationKind;
    function isBindableObjectDefinePropertyCall(expr) {
        return __exports__length(expr.arguments) === 3 &&
            isPropertyAccessExpression(expr.expression) &&
            isIdentifier(expr.expression.expression) &&
            idText(expr.expression.expression) === "Object" &&
            idText(expr.expression.name) === "defineProperty" &&
            isStringOrNumericLiteralLike(expr.arguments[1]) &&
            isBindableStaticNameExpression(expr.arguments[0], /*excludeThisKeyword*/ true);
    }
    __exports__isBindableObjectDefinePropertyCall = isBindableObjectDefinePropertyCall;
    /** x.y OR x[0] */
    function isLiteralLikeAccess(node) {
        return isPropertyAccessExpression(node) || isLiteralLikeElementAccess(node);
    }
    __exports__isLiteralLikeAccess = isLiteralLikeAccess;
    /** x[0] OR x['a'] OR x[Symbol.y] */
    function isLiteralLikeElementAccess(node) {
        return isElementAccessExpression(node) && (isStringOrNumericLiteralLike(node.argumentExpression) ||
            isWellKnownSymbolSyntactically(node.argumentExpression));
    }
    __exports__isLiteralLikeElementAccess = isLiteralLikeElementAccess;
    /** Any series of property and element accesses. */
    function isBindableStaticAccessExpression(node, excludeThisKeyword) {
        return isPropertyAccessExpression(node) && (!excludeThisKeyword && node.expression.kind === 107 /* ThisKeyword */ || isIdentifier(node.name) && isBindableStaticNameExpression(node.expression, /*excludeThisKeyword*/ true))
            || isBindableStaticElementAccessExpression(node, excludeThisKeyword);
    }
    __exports__isBindableStaticAccessExpression = isBindableStaticAccessExpression;
    /** Any series of property and element accesses, ending in a literal element access */
    function isBindableStaticElementAccessExpression(node, excludeThisKeyword) {
        return isLiteralLikeElementAccess(node)
            && ((!excludeThisKeyword && node.expression.kind === 107 /* ThisKeyword */) ||
                isEntityNameExpression(node.expression) ||
                isBindableStaticAccessExpression(node.expression, /*excludeThisKeyword*/ true));
    }
    __exports__isBindableStaticElementAccessExpression = isBindableStaticElementAccessExpression;
    function isBindableStaticNameExpression(node, excludeThisKeyword) {
        return isEntityNameExpression(node) || isBindableStaticAccessExpression(node, excludeThisKeyword);
    }
    __exports__isBindableStaticNameExpression = isBindableStaticNameExpression;
    function getNameOrArgument(expr) {
        if (isPropertyAccessExpression(expr)) {
            return expr.name;
        }
        return expr.argumentExpression;
    }
    __exports__getNameOrArgument = getNameOrArgument;
    function getAssignmentDeclarationKindWorker(expr) {
        if (isCallExpression(expr)) {
            if (!isBindableObjectDefinePropertyCall(expr)) {
                return 0 /* None */;
            }
            const entityName = expr.arguments[0];
            if (isExportsIdentifier(entityName) || isModuleExportsAccessExpression(entityName)) {
                return 8 /* ObjectDefinePropertyExports */;
            }
            if (isBindableStaticAccessExpression(entityName) && getElementOrPropertyAccessName(entityName) === "prototype") {
                return 9 /* ObjectDefinePrototypeProperty */;
            }
            return 7 /* ObjectDefinePropertyValue */;
        }
        if (expr.operatorToken.kind !== 62 /* EqualsToken */ || !isAccessExpression(expr.left) || isVoidZero(getRightMostAssignedExpression(expr))) {
            return 0 /* None */;
        }
        if (isBindableStaticNameExpression(expr.left.expression, /*excludeThisKeyword*/ true) && getElementOrPropertyAccessName(expr.left) === "prototype" && isObjectLiteralExpression(getInitializerOfBinaryExpression(expr))) {
            // F.prototype = { ... }
            return 6 /* Prototype */;
        }
        return getAssignmentDeclarationPropertyAccessKind(expr.left);
    }
    function isVoidZero(node) {
        return isVoidExpression(node) && isNumericLiteral(node.expression) && node.expression.text === "0";
    }
    /**
     * Does not handle signed numeric names like `a[+0]` - handling those would require handling prefix unary expressions
     * throughout late binding handling as well, which is awkward (but ultimately probably doable if there is demand)
     */
    /* @internal */
    function getElementOrPropertyAccessArgumentExpressionOrName(node) {
        if (isPropertyAccessExpression(node)) {
            return node.name;
        }
        const arg = skipParentheses(node.argumentExpression);
        if (isNumericLiteral(arg) || isStringLiteralLike(arg)) {
            return arg;
        }
        return node;
    }
    __exports__getElementOrPropertyAccessArgumentExpressionOrName = getElementOrPropertyAccessArgumentExpressionOrName;
    function getElementOrPropertyAccessName(node) {
        const name = getElementOrPropertyAccessArgumentExpressionOrName(node);
        if (name) {
            if (isIdentifier(name)) {
                return name.escapedText;
            }
            if (isStringLiteralLike(name) || isNumericLiteral(name)) {
                return escapeLeadingUnderscores(name.text);
            }
        }
        if (isElementAccessExpression(node) && isWellKnownSymbolSyntactically(node.argumentExpression)) {
            return getPropertyNameForKnownSymbolName(idText(node.argumentExpression.name));
        }
        return undefined;
    }
    __exports__getElementOrPropertyAccessName = getElementOrPropertyAccessName;
    function getAssignmentDeclarationPropertyAccessKind(lhs) {
        if (lhs.expression.kind === 107 /* ThisKeyword */) {
            return 4 /* ThisProperty */;
        }
        else if (isModuleExportsAccessExpression(lhs)) {
            // module.exports = expr
            return 2 /* ModuleExports */;
        }
        else if (isBindableStaticNameExpression(lhs.expression, /*excludeThisKeyword*/ true)) {
            if (isPrototypeAccess(lhs.expression)) {
                // F.G....prototype.x = expr
                return 3 /* PrototypeProperty */;
            }
            let nextToLast = lhs;
            while (!isIdentifier(nextToLast.expression)) {
                nextToLast = nextToLast.expression;
            }
            const id = nextToLast.expression;
            if ((id.escapedText === "exports" ||
                id.escapedText === "module" && getElementOrPropertyAccessName(nextToLast) === "exports") &&
                // ExportsProperty does not support binding with computed names
                isBindableStaticAccessExpression(lhs)) {
                // exports.name = expr OR module.exports.name = expr OR exports["name"] = expr ...
                return 1 /* ExportsProperty */;
            }
            if (isBindableStaticNameExpression(lhs, /*excludeThisKeyword*/ true) || (isElementAccessExpression(lhs) && isDynamicName(lhs))) {
                // F.G...x = expr
                return 5 /* Property */;
            }
        }
        return 0 /* None */;
    }
    __exports__getAssignmentDeclarationPropertyAccessKind = getAssignmentDeclarationPropertyAccessKind;
    function getInitializerOfBinaryExpression(expr) {
        while (isBinaryExpression(expr.right)) {
            expr = expr.right;
        }
        return expr.right;
    }
    __exports__getInitializerOfBinaryExpression = getInitializerOfBinaryExpression;
    function isPrototypePropertyAssignment(node) {
        return isBinaryExpression(node) && getAssignmentDeclarationKind(node) === 3 /* PrototypeProperty */;
    }
    __exports__isPrototypePropertyAssignment = isPrototypePropertyAssignment;
    function isSpecialPropertyDeclaration(expr) {
        return isInJSFile(expr) &&
            expr.parent && expr.parent.kind === 233 /* ExpressionStatement */ &&
            (!isElementAccessExpression(expr) || isLiteralLikeElementAccess(expr)) &&
            !!getJSDocTypeTag(expr.parent);
    }
    __exports__isSpecialPropertyDeclaration = isSpecialPropertyDeclaration;
    function setValueDeclaration(symbol, node) {
        const { valueDeclaration } = symbol;
        if (!valueDeclaration ||
            !(node.flags & 8388608 /* Ambient */ && !(valueDeclaration.flags & 8388608 /* Ambient */)) &&
                (isAssignmentDeclaration(valueDeclaration) && !isAssignmentDeclaration(node)) ||
            (valueDeclaration.kind !== node.kind && isEffectiveModuleDeclaration(valueDeclaration))) {
            // other kinds of value declarations take precedence over modules and assignment declarations
            symbol.valueDeclaration = node;
        }
    }
    __exports__setValueDeclaration = setValueDeclaration;
    function isFunctionSymbol(symbol) {
        if (!symbol || !symbol.valueDeclaration) {
            return false;
        }
        const decl = symbol.valueDeclaration;
        return decl.kind === 251 /* FunctionDeclaration */ || isVariableDeclaration(decl) && decl.initializer && isFunctionLike(decl.initializer);
    }
    __exports__isFunctionSymbol = isFunctionSymbol;
    function importFromModuleSpecifier(node) {
        return tryGetImportFromModuleSpecifier(node) || __exports__Debug.failBadSyntaxKind(node.parent);
    }
    __exports__importFromModuleSpecifier = importFromModuleSpecifier;
    function tryGetImportFromModuleSpecifier(node) {
        switch (node.parent.kind) {
            case 261 /* ImportDeclaration */:
            case 267 /* ExportDeclaration */:
                return node.parent;
            case 272 /* ExternalModuleReference */:
                return node.parent.parent;
            case 203 /* CallExpression */:
                return isImportCall(node.parent) || isRequireCall(node.parent, /*checkArg*/ false) ? node.parent : undefined;
            case 191 /* LiteralType */:
                __exports__Debug.assert(isStringLiteral(node));
                return __exports__tryCast(node.parent.parent, isImportTypeNode);
            default:
                return undefined;
        }
    }
    __exports__tryGetImportFromModuleSpecifier = tryGetImportFromModuleSpecifier;
    function getExternalModuleName(node) {
        switch (node.kind) {
            case 261 /* ImportDeclaration */:
            case 267 /* ExportDeclaration */:
                return node.moduleSpecifier;
            case 260 /* ImportEqualsDeclaration */:
                return node.moduleReference.kind === 272 /* ExternalModuleReference */ ? node.moduleReference.expression : undefined;
            case 195 /* ImportType */:
                return isLiteralImportTypeNode(node) ? node.argument.literal : undefined;
            case 203 /* CallExpression */:
                return node.arguments[0];
            case 256 /* ModuleDeclaration */:
                return node.name.kind === 10 /* StringLiteral */ ? node.name : undefined;
            default:
                return __exports__Debug.assertNever(node);
        }
    }
    __exports__getExternalModuleName = getExternalModuleName;
    function getNamespaceDeclarationNode(node) {
        switch (node.kind) {
            case 261 /* ImportDeclaration */:
                return node.importClause && __exports__tryCast(node.importClause.namedBindings, isNamespaceImport);
            case 260 /* ImportEqualsDeclaration */:
                return node;
            case 267 /* ExportDeclaration */:
                return node.exportClause && __exports__tryCast(node.exportClause, isNamespaceExport);
            default:
                return __exports__Debug.assertNever(node);
        }
    }
    __exports__getNamespaceDeclarationNode = getNamespaceDeclarationNode;
    function isDefaultImport(node) {
        return node.kind === 261 /* ImportDeclaration */ && !!node.importClause && !!node.importClause.name;
    }
    __exports__isDefaultImport = isDefaultImport;
    function forEachImportClauseDeclaration(node, action) {
        if (node.name) {
            const result = action(node);
            if (result)
                return result;
        }
        if (node.namedBindings) {
            const result = isNamespaceImport(node.namedBindings)
                ? action(node.namedBindings)
                : __exports__forEach(node.namedBindings.elements, action);
            if (result)
                return result;
        }
    }
    __exports__forEachImportClauseDeclaration = forEachImportClauseDeclaration;
    function hasQuestionToken(node) {
        if (node) {
            switch (node.kind) {
                case 160 /* Parameter */:
                case 165 /* MethodDeclaration */:
                case 164 /* MethodSignature */:
                case 289 /* ShorthandPropertyAssignment */:
                case 288 /* PropertyAssignment */:
                case 163 /* PropertyDeclaration */:
                case 162 /* PropertySignature */:
                    return node.questionToken !== undefined;
            }
        }
        return false;
    }
    __exports__hasQuestionToken = hasQuestionToken;
    function isJSDocConstructSignature(node) {
        const param = isJSDocFunctionType(node) ? __exports__firstOrUndefined(node.parameters) : undefined;
        const name = __exports__tryCast(param && param.name, isIdentifier);
        return !!name && name.escapedText === "new";
    }
    __exports__isJSDocConstructSignature = isJSDocConstructSignature;
    function isJSDocTypeAlias(node) {
        return node.kind === 331 /* JSDocTypedefTag */ || node.kind === 324 /* JSDocCallbackTag */ || node.kind === 325 /* JSDocEnumTag */;
    }
    __exports__isJSDocTypeAlias = isJSDocTypeAlias;
    function isTypeAlias(node) {
        return isJSDocTypeAlias(node) || isTypeAliasDeclaration(node);
    }
    __exports__isTypeAlias = isTypeAlias;
    function getSourceOfAssignment(node) {
        return isExpressionStatement(node) &&
            isBinaryExpression(node.expression) &&
            node.expression.operatorToken.kind === 62 /* EqualsToken */
            ? getRightMostAssignedExpression(node.expression)
            : undefined;
    }
    function getSourceOfDefaultedAssignment(node) {
        return isExpressionStatement(node) &&
            isBinaryExpression(node.expression) &&
            getAssignmentDeclarationKind(node.expression) !== 0 /* None */ &&
            isBinaryExpression(node.expression.right) &&
            (node.expression.right.operatorToken.kind === 56 /* BarBarToken */ || node.expression.right.operatorToken.kind === 60 /* QuestionQuestionToken */)
            ? node.expression.right.right
            : undefined;
    }
    function getSingleInitializerOfVariableStatementOrPropertyDeclaration(node) {
        switch (node.kind) {
            case 232 /* VariableStatement */:
                const v = getSingleVariableOfVariableStatement(node);
                return v && v.initializer;
            case 163 /* PropertyDeclaration */:
                return node.initializer;
            case 288 /* PropertyAssignment */:
                return node.initializer;
        }
    }
    __exports__getSingleInitializerOfVariableStatementOrPropertyDeclaration = getSingleInitializerOfVariableStatementOrPropertyDeclaration;
    function getSingleVariableOfVariableStatement(node) {
        return isVariableStatement(node) ? __exports__firstOrUndefined(node.declarationList.declarations) : undefined;
    }
    __exports__getSingleVariableOfVariableStatement = getSingleVariableOfVariableStatement;
    function getNestedModuleDeclaration(node) {
        return isModuleDeclaration(node) &&
            node.body &&
            node.body.kind === 256 /* ModuleDeclaration */
            ? node.body
            : undefined;
    }
    function getJSDocCommentsAndTags(hostNode, noCache) {
        let result;
        // Pull parameter comments from declaring function as well
        if (isVariableLike(hostNode) && hasInitializer(hostNode) && hasJSDocNodes(hostNode.initializer)) {
            result = __exports__append(result, __exports__last(hostNode.initializer.jsDoc));
        }
        let node = hostNode;
        while (node && node.parent) {
            if (hasJSDocNodes(node)) {
                result = __exports__append(result, __exports__last(node.jsDoc));
            }
            if (node.kind === 160 /* Parameter */) {
                result = __exports__addRange(result, (noCache ? getJSDocParameterTagsNoCache : getJSDocParameterTags)(node));
                break;
            }
            if (node.kind === 159 /* TypeParameter */) {
                result = __exports__addRange(result, (noCache ? getJSDocTypeParameterTagsNoCache : getJSDocTypeParameterTags)(node));
                break;
            }
            node = getNextJSDocCommentLocation(node);
        }
        return result || __exports__emptyArray;
    }
    __exports__getJSDocCommentsAndTags = getJSDocCommentsAndTags;
    function getNextJSDocCommentLocation(node) {
        const parent = node.parent;
        if (parent.kind === 288 /* PropertyAssignment */ ||
            parent.kind === 266 /* ExportAssignment */ ||
            parent.kind === 163 /* PropertyDeclaration */ ||
            parent.kind === 233 /* ExpressionStatement */ && node.kind === 201 /* PropertyAccessExpression */ ||
            getNestedModuleDeclaration(parent) ||
            isBinaryExpression(node) && node.operatorToken.kind === 62 /* EqualsToken */) {
            return parent;
        }
        // Try to recognize this pattern when node is initializer of variable declaration and JSDoc comments are on containing variable statement.
        // /**
        //   * @param {number} name
        //   * @returns {number}
        //   */
        // var x = function(name) { return name.length; }
        else if (parent.parent &&
            (getSingleVariableOfVariableStatement(parent.parent) === node ||
                isBinaryExpression(parent) && parent.operatorToken.kind === 62 /* EqualsToken */)) {
            return parent.parent;
        }
        else if (parent.parent && parent.parent.parent &&
            (getSingleVariableOfVariableStatement(parent.parent.parent) ||
                getSingleInitializerOfVariableStatementOrPropertyDeclaration(parent.parent.parent) === node ||
                getSourceOfDefaultedAssignment(parent.parent.parent))) {
            return parent.parent.parent;
        }
    }
    __exports__getNextJSDocCommentLocation = getNextJSDocCommentLocation;
    /** Does the opposite of `getJSDocParameterTags`: given a JSDoc parameter, finds the parameter corresponding to it. */
    function getParameterSymbolFromJSDoc(node) {
        if (node.symbol) {
            return node.symbol;
        }
        if (!isIdentifier(node.name)) {
            return undefined;
        }
        const name = node.name.escapedText;
        const decl = getHostSignatureFromJSDoc(node);
        if (!decl) {
            return undefined;
        }
        const parameter = __exports__find(decl.parameters, p => p.name.kind === 78 /* Identifier */ && p.name.escapedText === name);
        return parameter && parameter.symbol;
    }
    __exports__getParameterSymbolFromJSDoc = getParameterSymbolFromJSDoc;
    function getHostSignatureFromJSDoc(node) {
        const host = getEffectiveJSDocHost(node);
        return host && isFunctionLike(host) ? host : undefined;
    }
    __exports__getHostSignatureFromJSDoc = getHostSignatureFromJSDoc;
    function getEffectiveJSDocHost(node) {
        const host = getJSDocHost(node);
        if (host) {
            return getSourceOfDefaultedAssignment(host)
                || getSourceOfAssignment(host)
                || getSingleInitializerOfVariableStatementOrPropertyDeclaration(host)
                || getSingleVariableOfVariableStatement(host)
                || getNestedModuleDeclaration(host)
                || host;
        }
    }
    __exports__getEffectiveJSDocHost = getEffectiveJSDocHost;
    /** Use getEffectiveJSDocHost if you additionally need to look for jsdoc on parent nodes, like assignments. */
    function getJSDocHost(node) {
        const jsDoc = getJSDocRoot(node);
        if (!jsDoc) {
            return undefined;
        }
        const host = jsDoc.parent;
        if (host && host.jsDoc && jsDoc === __exports__lastOrUndefined(host.jsDoc)) {
            return host;
        }
    }
    __exports__getJSDocHost = getJSDocHost;
    function getJSDocRoot(node) {
        return findAncestor(node.parent, isJSDoc);
    }
    __exports__getJSDocRoot = getJSDocRoot;
    function getTypeParameterFromJsDoc(node) {
        const name = node.name.escapedText;
        const { typeParameters } = node.parent.parent.parent;
        return typeParameters && __exports__find(typeParameters, p => p.name.escapedText === name);
    }
    __exports__getTypeParameterFromJsDoc = getTypeParameterFromJsDoc;
    function hasRestParameter(s) {
        const last = __exports__lastOrUndefined(s.parameters);
        return !!last && isRestParameter(last);
    }
    __exports__hasRestParameter = hasRestParameter;
    function isRestParameter(node) {
        const type = isJSDocParameterTag(node) ? (node.typeExpression && node.typeExpression.type) : node.type;
        return node.dotDotDotToken !== undefined || !!type && type.kind === 309 /* JSDocVariadicType */;
    }
    __exports__isRestParameter = isRestParameter;
    function hasTypeArguments(node) {
        return !!node.typeArguments;
    }
    __exports__hasTypeArguments = hasTypeArguments;
    function getAssignmentTargetKind(node) {
        let parent = node.parent;
        while (true) {
            switch (parent.kind) {
                case 216 /* BinaryExpression */:
                    const binaryOperator = parent.operatorToken.kind;
                    return isAssignmentOperator(binaryOperator) && parent.left === node ?
                        binaryOperator === 62 /* EqualsToken */ || isLogicalOrCoalescingAssignmentOperator(binaryOperator) ? 1 /* Definite */ : 2 /* Compound */ :
                        0 /* None */;
                case 214 /* PrefixUnaryExpression */:
                case 215 /* PostfixUnaryExpression */:
                    const unaryOperator = parent.operator;
                    return unaryOperator === 45 /* PlusPlusToken */ || unaryOperator === 46 /* MinusMinusToken */ ? 2 /* Compound */ : 0 /* None */;
                case 238 /* ForInStatement */:
                case 239 /* ForOfStatement */:
                    return parent.initializer === node ? 1 /* Definite */ : 0 /* None */;
                case 207 /* ParenthesizedExpression */:
                case 199 /* ArrayLiteralExpression */:
                case 220 /* SpreadElement */:
                case 225 /* NonNullExpression */:
                    node = parent;
                    break;
                case 289 /* ShorthandPropertyAssignment */:
                    if (parent.name !== node) {
                        return 0 /* None */;
                    }
                    node = parent.parent;
                    break;
                case 288 /* PropertyAssignment */:
                    if (parent.name === node) {
                        return 0 /* None */;
                    }
                    node = parent.parent;
                    break;
                default:
                    return 0 /* None */;
            }
            parent = node.parent;
        }
    }
    __exports__getAssignmentTargetKind = getAssignmentTargetKind;
    // A node is an assignment target if it is on the left hand side of an '=' token, if it is parented by a property
    // assignment in an object literal that is an assignment target, or if it is parented by an array literal that is
    // an assignment target. Examples include 'a = xxx', '{ p: a } = xxx', '[{ a }] = xxx'.
    // (Note that `p` is not a target in the above examples, only `a`.)
    function isAssignmentTarget(node) {
        return getAssignmentTargetKind(node) !== 0 /* None */;
    }
    __exports__isAssignmentTarget = isAssignmentTarget;
    /**
     * Indicates whether a node could contain a `var` VariableDeclarationList that contributes to
     * the same `var` declaration scope as the node's parent.
     */
    function isNodeWithPossibleHoistedDeclaration(node) {
        switch (node.kind) {
            case 230 /* Block */:
            case 232 /* VariableStatement */:
            case 243 /* WithStatement */:
            case 234 /* IfStatement */:
            case 244 /* SwitchStatement */:
            case 258 /* CaseBlock */:
            case 284 /* CaseClause */:
            case 285 /* DefaultClause */:
            case 245 /* LabeledStatement */:
            case 237 /* ForStatement */:
            case 238 /* ForInStatement */:
            case 239 /* ForOfStatement */:
            case 235 /* DoStatement */:
            case 236 /* WhileStatement */:
            case 247 /* TryStatement */:
            case 287 /* CatchClause */:
                return true;
        }
        return false;
    }
    __exports__isNodeWithPossibleHoistedDeclaration = isNodeWithPossibleHoistedDeclaration;
    function isValueSignatureDeclaration(node) {
        return isFunctionExpression(node) || isArrowFunction(node) || isMethodOrAccessor(node) || isFunctionDeclaration(node) || isConstructorDeclaration(node);
    }
    __exports__isValueSignatureDeclaration = isValueSignatureDeclaration;
    function walkUp(node, kind) {
        while (node && node.kind === kind) {
            node = node.parent;
        }
        return node;
    }
    function walkUpParenthesizedTypes(node) {
        return walkUp(node, 186 /* ParenthesizedType */);
    }
    __exports__walkUpParenthesizedTypes = walkUpParenthesizedTypes;
    function walkUpParenthesizedExpressions(node) {
        return walkUp(node, 207 /* ParenthesizedExpression */);
    }
    __exports__walkUpParenthesizedExpressions = walkUpParenthesizedExpressions;
    /**
     * Walks up parenthesized types.
     * It returns both the outermost parenthesized type and its parent.
     * If given node is not a parenthesiezd type, undefined is return as the former.
     */
    function walkUpParenthesizedTypesAndGetParentAndChild(node) {
        let child;
        while (node && node.kind === 186 /* ParenthesizedType */) {
            child = node;
            node = node.parent;
        }
        return [child, node];
    }
    __exports__walkUpParenthesizedTypesAndGetParentAndChild = walkUpParenthesizedTypesAndGetParentAndChild;
    function skipParentheses(node) {
        return skipOuterExpressions(node, 1 /* Parentheses */);
    }
    __exports__skipParentheses = skipParentheses;
    function skipParenthesesUp(node) {
        while (node.kind === 207 /* ParenthesizedExpression */) {
            node = node.parent;
        }
        return node;
    }
    // a node is delete target iff. it is PropertyAccessExpression/ElementAccessExpression with parentheses skipped
    function isDeleteTarget(node) {
        if (node.kind !== 201 /* PropertyAccessExpression */ && node.kind !== 202 /* ElementAccessExpression */) {
            return false;
        }
        node = walkUpParenthesizedExpressions(node.parent);
        return node && node.kind === 210 /* DeleteExpression */;
    }
    __exports__isDeleteTarget = isDeleteTarget;
    function isNodeDescendantOf(node, ancestor) {
        while (node) {
            if (node === ancestor)
                return true;
            node = node.parent;
        }
        return false;
    }
    __exports__isNodeDescendantOf = isNodeDescendantOf;
    // True if `name` is the name of a declaration node
    function isDeclarationName(name) {
        return !isSourceFile(name) && !isBindingPattern(name) && isDeclaration(name.parent) && name.parent.name === name;
    }
    __exports__isDeclarationName = isDeclarationName;
    // See GH#16030
    function getDeclarationFromName(name) {
        const parent = name.parent;
        switch (name.kind) {
            case 10 /* StringLiteral */:
            case 14 /* NoSubstitutionTemplateLiteral */:
            case 8 /* NumericLiteral */:
                if (isComputedPropertyName(parent))
                    return parent.parent;
            // falls through
            case 78 /* Identifier */:
                if (isDeclaration(parent)) {
                    return parent.name === name ? parent : undefined;
                }
                else if (isQualifiedName(parent)) {
                    const tag = parent.parent;
                    return isJSDocParameterTag(tag) && tag.name === parent ? tag : undefined;
                }
                else {
                    const binExp = parent.parent;
                    return isBinaryExpression(binExp) &&
                        getAssignmentDeclarationKind(binExp) !== 0 /* None */ &&
                        (binExp.left.symbol || binExp.symbol) &&
                        getNameOfDeclaration(binExp) === name
                        ? binExp
                        : undefined;
                }
            case 79 /* PrivateIdentifier */:
                return isDeclaration(parent) && parent.name === name ? parent : undefined;
            default:
                return undefined;
        }
    }
    __exports__getDeclarationFromName = getDeclarationFromName;
    function isLiteralComputedPropertyDeclarationName(node) {
        return isStringOrNumericLiteralLike(node) &&
            node.parent.kind === 158 /* ComputedPropertyName */ &&
            isDeclaration(node.parent.parent);
    }
    __exports__isLiteralComputedPropertyDeclarationName = isLiteralComputedPropertyDeclarationName;
    // Return true if the given identifier is classified as an IdentifierName
    function isIdentifierName(node) {
        const parent = node.parent;
        switch (parent.kind) {
            case 163 /* PropertyDeclaration */:
            case 162 /* PropertySignature */:
            case 165 /* MethodDeclaration */:
            case 164 /* MethodSignature */:
            case 167 /* GetAccessor */:
            case 168 /* SetAccessor */:
            case 291 /* EnumMember */:
            case 288 /* PropertyAssignment */:
            case 201 /* PropertyAccessExpression */:
                // Name in member declaration or property name in property access
                return parent.name === node;
            case 157 /* QualifiedName */:
                // Name on right hand side of dot in a type query or type reference
                return parent.right === node;
            case 198 /* BindingElement */:
            case 265 /* ImportSpecifier */:
                // Property name in binding element or import specifier
                return parent.propertyName === node;
            case 270 /* ExportSpecifier */:
            case 280 /* JsxAttribute */:
                // Any name in an export specifier or JSX Attribute
                return true;
        }
        return false;
    }
    __exports__isIdentifierName = isIdentifierName;
    // An alias symbol is created by one of the following declarations:
    // import <symbol> = ...
    // import <symbol> from ...
    // import * as <symbol> from ...
    // import { x as <symbol> } from ...
    // export { x as <symbol> } from ...
    // export * as ns <symbol> from ...
    // export = <EntityNameExpression>
    // export default <EntityNameExpression>
    // module.exports = <EntityNameExpression>
    // {<Identifier>}
    // {name: <EntityNameExpression>}
    function isAliasSymbolDeclaration(node) {
        return node.kind === 260 /* ImportEqualsDeclaration */ ||
            node.kind === 259 /* NamespaceExportDeclaration */ ||
            node.kind === 262 /* ImportClause */ && !!node.name ||
            node.kind === 263 /* NamespaceImport */ ||
            node.kind === 269 /* NamespaceExport */ ||
            node.kind === 265 /* ImportSpecifier */ ||
            node.kind === 270 /* ExportSpecifier */ ||
            node.kind === 266 /* ExportAssignment */ && exportAssignmentIsAlias(node) ||
            isBinaryExpression(node) && getAssignmentDeclarationKind(node) === 2 /* ModuleExports */ && exportAssignmentIsAlias(node) ||
            isPropertyAccessExpression(node) && isBinaryExpression(node.parent) && node.parent.left === node && node.parent.operatorToken.kind === 62 /* EqualsToken */ && isAliasableExpression(node.parent.right) ||
            node.kind === 289 /* ShorthandPropertyAssignment */ ||
            node.kind === 288 /* PropertyAssignment */ && isAliasableExpression(node.initializer);
    }
    __exports__isAliasSymbolDeclaration = isAliasSymbolDeclaration;
    function getAliasDeclarationFromName(node) {
        switch (node.parent.kind) {
            case 262 /* ImportClause */:
            case 265 /* ImportSpecifier */:
            case 263 /* NamespaceImport */:
            case 270 /* ExportSpecifier */:
            case 266 /* ExportAssignment */:
            case 260 /* ImportEqualsDeclaration */:
                return node.parent;
            case 157 /* QualifiedName */:
                do {
                    node = node.parent;
                } while (node.parent.kind === 157 /* QualifiedName */);
                return getAliasDeclarationFromName(node);
        }
    }
    __exports__getAliasDeclarationFromName = getAliasDeclarationFromName;
    function isAliasableExpression(e) {
        return isEntityNameExpression(e) || isClassExpression(e);
    }
    __exports__isAliasableExpression = isAliasableExpression;
    function exportAssignmentIsAlias(node) {
        const e = getExportAssignmentExpression(node);
        return isAliasableExpression(e);
    }
    __exports__exportAssignmentIsAlias = exportAssignmentIsAlias;
    function getExportAssignmentExpression(node) {
        return isExportAssignment(node) ? node.expression : node.right;
    }
    __exports__getExportAssignmentExpression = getExportAssignmentExpression;
    function getPropertyAssignmentAliasLikeExpression(node) {
        return node.kind === 289 /* ShorthandPropertyAssignment */ ? node.name : node.kind === 288 /* PropertyAssignment */ ? node.initializer :
            node.parent.right;
    }
    __exports__getPropertyAssignmentAliasLikeExpression = getPropertyAssignmentAliasLikeExpression;
    function getEffectiveBaseTypeNode(node) {
        const baseType = getClassExtendsHeritageElement(node);
        if (baseType && isInJSFile(node)) {
            // Prefer an @augments tag because it may have type parameters.
            const tag = getJSDocAugmentsTag(node);
            if (tag) {
                return tag.class;
            }
        }
        return baseType;
    }
    __exports__getEffectiveBaseTypeNode = getEffectiveBaseTypeNode;
    function getClassExtendsHeritageElement(node) {
        const heritageClause = getHeritageClause(node.heritageClauses, 93 /* ExtendsKeyword */);
        return heritageClause && heritageClause.types.length > 0 ? heritageClause.types[0] : undefined;
    }
    __exports__getClassExtendsHeritageElement = getClassExtendsHeritageElement;
    function getEffectiveImplementsTypeNodes(node) {
        if (isInJSFile(node)) {
            return getJSDocImplementsTags(node).map(n => n.class);
        }
        else {
            const heritageClause = getHeritageClause(node.heritageClauses, 116 /* ImplementsKeyword */);
            return heritageClause?.types;
        }
    }
    __exports__getEffectiveImplementsTypeNodes = getEffectiveImplementsTypeNodes;
    /** Returns the node in an `extends` or `implements` clause of a class or interface. */
    function getAllSuperTypeNodes(node) {
        return isInterfaceDeclaration(node) ? getInterfaceBaseTypeNodes(node) || __exports__emptyArray :
            isClassLike(node) ? __exports__concatenate(__exports__singleElementArray(getEffectiveBaseTypeNode(node)), getEffectiveImplementsTypeNodes(node)) || __exports__emptyArray :
                __exports__emptyArray;
    }
    __exports__getAllSuperTypeNodes = getAllSuperTypeNodes;
    function getInterfaceBaseTypeNodes(node) {
        const heritageClause = getHeritageClause(node.heritageClauses, 93 /* ExtendsKeyword */);
        return heritageClause ? heritageClause.types : undefined;
    }
    __exports__getInterfaceBaseTypeNodes = getInterfaceBaseTypeNodes;
    function getHeritageClause(clauses, kind) {
        if (clauses) {
            for (const clause of clauses) {
                if (clause.token === kind) {
                    return clause;
                }
            }
        }
        return undefined;
    }
    __exports__getHeritageClause = getHeritageClause;
    function getAncestor(node, kind) {
        while (node) {
            if (node.kind === kind) {
                return node;
            }
            node = node.parent;
        }
        return undefined;
    }
    __exports__getAncestor = getAncestor;
    function isKeyword(token) {
        return 80 /* FirstKeyword */ <= token && token <= 156 /* LastKeyword */;
    }
    __exports__isKeyword = isKeyword;
    function isContextualKeyword(token) {
        return 125 /* FirstContextualKeyword */ <= token && token <= 156 /* LastContextualKeyword */;
    }
    __exports__isContextualKeyword = isContextualKeyword;
    function isNonContextualKeyword(token) {
        return isKeyword(token) && !isContextualKeyword(token);
    }
    __exports__isNonContextualKeyword = isNonContextualKeyword;
    function isFutureReservedKeyword(token) {
        return 116 /* FirstFutureReservedWord */ <= token && token <= 124 /* LastFutureReservedWord */;
    }
    __exports__isFutureReservedKeyword = isFutureReservedKeyword;
    function isStringANonContextualKeyword(name) {
        const token = stringToToken(name);
        return token !== undefined && isNonContextualKeyword(token);
    }
    __exports__isStringANonContextualKeyword = isStringANonContextualKeyword;
    function isStringAKeyword(name) {
        const token = stringToToken(name);
        return token !== undefined && isKeyword(token);
    }
    __exports__isStringAKeyword = isStringAKeyword;
    function isIdentifierANonContextualKeyword({ originalKeywordKind }) {
        return !!originalKeywordKind && !isContextualKeyword(originalKeywordKind);
    }
    __exports__isIdentifierANonContextualKeyword = isIdentifierANonContextualKeyword;
    function isTrivia(token) {
        return 2 /* FirstTriviaToken */ <= token && token <= 7 /* LastTriviaToken */;
    }
    __exports__isTrivia = isTrivia;
    function getFunctionFlags(node) {
        if (!node) {
            return 4 /* Invalid */;
        }
        let flags = 0 /* Normal */;
        switch (node.kind) {
            case 251 /* FunctionDeclaration */:
            case 208 /* FunctionExpression */:
            case 165 /* MethodDeclaration */:
                if (node.asteriskToken) {
                    flags |= 1 /* Generator */;
                }
            // falls through
            case 209 /* ArrowFunction */:
                if (hasSyntacticModifier(node, 256 /* Async */)) {
                    flags |= 2 /* Async */;
                }
                break;
        }
        if (!node.body) {
            flags |= 4 /* Invalid */;
        }
        return flags;
    }
    __exports__getFunctionFlags = getFunctionFlags;
    function isAsyncFunction(node) {
        switch (node.kind) {
            case 251 /* FunctionDeclaration */:
            case 208 /* FunctionExpression */:
            case 209 /* ArrowFunction */:
            case 165 /* MethodDeclaration */:
                return node.body !== undefined
                    && node.asteriskToken === undefined
                    && hasSyntacticModifier(node, 256 /* Async */);
        }
        return false;
    }
    __exports__isAsyncFunction = isAsyncFunction;
    function isStringOrNumericLiteralLike(node) {
        return isStringLiteralLike(node) || isNumericLiteral(node);
    }
    __exports__isStringOrNumericLiteralLike = isStringOrNumericLiteralLike;
    function isSignedNumericLiteral(node) {
        return isPrefixUnaryExpression(node) && (node.operator === 39 /* PlusToken */ || node.operator === 40 /* MinusToken */) && isNumericLiteral(node.operand);
    }
    __exports__isSignedNumericLiteral = isSignedNumericLiteral;
    /**
     * A declaration has a dynamic name if all of the following are true:
     *   1. The declaration has a computed property name.
     *   2. The computed name is *not* expressed as a StringLiteral.
     *   3. The computed name is *not* expressed as a NumericLiteral.
     *   4. The computed name is *not* expressed as a PlusToken or MinusToken
     *      immediately followed by a NumericLiteral.
     *   5. The computed name is *not* expressed as `Symbol.<name>`, where `<name>`
     *      is a property of the Symbol constructor that denotes a built-in
     *      Symbol.
     */
    function hasDynamicName(declaration) {
        const name = getNameOfDeclaration(declaration);
        return !!name && isDynamicName(name);
    }
    __exports__hasDynamicName = hasDynamicName;
    function isDynamicName(name) {
        if (!(name.kind === 158 /* ComputedPropertyName */ || name.kind === 202 /* ElementAccessExpression */)) {
            return false;
        }
        const expr = isElementAccessExpression(name) ? skipParentheses(name.argumentExpression) : name.expression;
        return !isStringOrNumericLiteralLike(expr) &&
            !isSignedNumericLiteral(expr) &&
            !isWellKnownSymbolSyntactically(expr);
    }
    __exports__isDynamicName = isDynamicName;
    /**
     * Checks if the expression is of the form:
     *    Symbol.name
     * where Symbol is literally the word "Symbol", and name is any identifierName
     */
    function isWellKnownSymbolSyntactically(node) {
        return isPropertyAccessExpression(node) && isESSymbolIdentifier(node.expression);
    }
    __exports__isWellKnownSymbolSyntactically = isWellKnownSymbolSyntactically;
    function getPropertyNameForPropertyNameNode(name) {
        switch (name.kind) {
            case 78 /* Identifier */:
            case 79 /* PrivateIdentifier */:
                return name.escapedText;
            case 10 /* StringLiteral */:
            case 8 /* NumericLiteral */:
                return escapeLeadingUnderscores(name.text);
            case 158 /* ComputedPropertyName */:
                const nameExpression = name.expression;
                if (isWellKnownSymbolSyntactically(nameExpression)) {
                    return getPropertyNameForKnownSymbolName(idText(nameExpression.name));
                }
                else if (isStringOrNumericLiteralLike(nameExpression)) {
                    return escapeLeadingUnderscores(nameExpression.text);
                }
                else if (isSignedNumericLiteral(nameExpression)) {
                    if (nameExpression.operator === 40 /* MinusToken */) {
                        return tokenToString(nameExpression.operator) + nameExpression.operand.text;
                    }
                    return nameExpression.operand.text;
                }
                return undefined;
            default:
                return __exports__Debug.assertNever(name);
        }
    }
    __exports__getPropertyNameForPropertyNameNode = getPropertyNameForPropertyNameNode;
    function isPropertyNameLiteral(node) {
        switch (node.kind) {
            case 78 /* Identifier */:
            case 10 /* StringLiteral */:
            case 14 /* NoSubstitutionTemplateLiteral */:
            case 8 /* NumericLiteral */:
                return true;
            default:
                return false;
        }
    }
    __exports__isPropertyNameLiteral = isPropertyNameLiteral;
    function getTextOfIdentifierOrLiteral(node) {
        return isIdentifierOrPrivateIdentifier(node) ? idText(node) : node.text;
    }
    __exports__getTextOfIdentifierOrLiteral = getTextOfIdentifierOrLiteral;
    function getEscapedTextOfIdentifierOrLiteral(node) {
        return isIdentifierOrPrivateIdentifier(node) ? node.escapedText : escapeLeadingUnderscores(node.text);
    }
    __exports__getEscapedTextOfIdentifierOrLiteral = getEscapedTextOfIdentifierOrLiteral;
    function getPropertyNameForUniqueESSymbol(symbol) {
        return `__@${getSymbolId(symbol)}@${symbol.escapedName}`;
    }
    __exports__getPropertyNameForUniqueESSymbol = getPropertyNameForUniqueESSymbol;
    function getPropertyNameForKnownSymbolName(symbolName) {
        return "__@" + symbolName;
    }
    __exports__getPropertyNameForKnownSymbolName = getPropertyNameForKnownSymbolName;
    function getSymbolNameForPrivateIdentifier(containingClassSymbol, description) {
        return `__#${getSymbolId(containingClassSymbol)}@${description}`;
    }
    __exports__getSymbolNameForPrivateIdentifier = getSymbolNameForPrivateIdentifier;
    function isKnownSymbol(symbol) {
        return __exports__startsWith(symbol.escapedName, "__@");
    }
    __exports__isKnownSymbol = isKnownSymbol;
    /**
     * Includes the word "Symbol" with unicode escapes
     */
    function isESSymbolIdentifier(node) {
        return node.kind === 78 /* Identifier */ && node.escapedText === "Symbol";
    }
    __exports__isESSymbolIdentifier = isESSymbolIdentifier;
    function isPushOrUnshiftIdentifier(node) {
        return node.escapedText === "push" || node.escapedText === "unshift";
    }
    __exports__isPushOrUnshiftIdentifier = isPushOrUnshiftIdentifier;
    function isParameterDeclaration(node) {
        const root = getRootDeclaration(node);
        return root.kind === 160 /* Parameter */;
    }
    __exports__isParameterDeclaration = isParameterDeclaration;
    function getRootDeclaration(node) {
        while (node.kind === 198 /* BindingElement */) {
            node = node.parent.parent;
        }
        return node;
    }
    __exports__getRootDeclaration = getRootDeclaration;
    function nodeStartsNewLexicalEnvironment(node) {
        const kind = node.kind;
        return kind === 166 /* Constructor */
            || kind === 208 /* FunctionExpression */
            || kind === 251 /* FunctionDeclaration */
            || kind === 209 /* ArrowFunction */
            || kind === 165 /* MethodDeclaration */
            || kind === 167 /* GetAccessor */
            || kind === 168 /* SetAccessor */
            || kind === 256 /* ModuleDeclaration */
            || kind === 297 /* SourceFile */;
    }
    __exports__nodeStartsNewLexicalEnvironment = nodeStartsNewLexicalEnvironment;
    function nodeIsSynthesized(range) {
        return positionIsSynthesized(range.pos)
            || positionIsSynthesized(range.end);
    }
    __exports__nodeIsSynthesized = nodeIsSynthesized;
    function getOriginalSourceFile(sourceFile) {
        return getParseTreeNode(sourceFile, isSourceFile) || sourceFile;
    }
    __exports__getOriginalSourceFile = getOriginalSourceFile;
    function getExpressionAssociativity(expression) {
        const operator = getOperator(expression);
        const hasArguments = expression.kind === 204 /* NewExpression */ && expression.arguments !== undefined;
        return getOperatorAssociativity(expression.kind, operator, hasArguments);
    }
    __exports__getExpressionAssociativity = getExpressionAssociativity;
    function getOperatorAssociativity(kind, operator, hasArguments) {
        switch (kind) {
            case 204 /* NewExpression */:
                return hasArguments ? 0 /* Left */ : 1 /* Right */;
            case 214 /* PrefixUnaryExpression */:
            case 211 /* TypeOfExpression */:
            case 212 /* VoidExpression */:
            case 210 /* DeleteExpression */:
            case 213 /* AwaitExpression */:
            case 217 /* ConditionalExpression */:
            case 219 /* YieldExpression */:
                return 1 /* Right */;
            case 216 /* BinaryExpression */:
                switch (operator) {
                    case 42 /* AsteriskAsteriskToken */:
                    case 62 /* EqualsToken */:
                    case 63 /* PlusEqualsToken */:
                    case 64 /* MinusEqualsToken */:
                    case 66 /* AsteriskAsteriskEqualsToken */:
                    case 65 /* AsteriskEqualsToken */:
                    case 67 /* SlashEqualsToken */:
                    case 68 /* PercentEqualsToken */:
                    case 69 /* LessThanLessThanEqualsToken */:
                    case 70 /* GreaterThanGreaterThanEqualsToken */:
                    case 71 /* GreaterThanGreaterThanGreaterThanEqualsToken */:
                    case 72 /* AmpersandEqualsToken */:
                    case 77 /* CaretEqualsToken */:
                    case 73 /* BarEqualsToken */:
                    case 74 /* BarBarEqualsToken */:
                    case 75 /* AmpersandAmpersandEqualsToken */:
                    case 76 /* QuestionQuestionEqualsToken */:
                        return 1 /* Right */;
                }
        }
        return 0 /* Left */;
    }
    __exports__getOperatorAssociativity = getOperatorAssociativity;
    function getExpressionPrecedence(expression) {
        const operator = getOperator(expression);
        const hasArguments = expression.kind === 204 /* NewExpression */ && expression.arguments !== undefined;
        return getOperatorPrecedence(expression.kind, operator, hasArguments);
    }
    __exports__getExpressionPrecedence = getExpressionPrecedence;
    function getOperator(expression) {
        if (expression.kind === 216 /* BinaryExpression */) {
            return expression.operatorToken.kind;
        }
        else if (expression.kind === 214 /* PrefixUnaryExpression */ || expression.kind === 215 /* PostfixUnaryExpression */) {
            return expression.operator;
        }
        else {
            return expression.kind;
        }
    }
    __exports__getOperator = getOperator;
    function getOperatorPrecedence(nodeKind, operatorKind, hasArguments) {
        switch (nodeKind) {
            case 337 /* CommaListExpression */:
                return 0 /* Comma */;
            case 220 /* SpreadElement */:
                return 1 /* Spread */;
            case 219 /* YieldExpression */:
                return 2 /* Yield */;
            case 217 /* ConditionalExpression */:
                return 4 /* Conditional */;
            case 216 /* BinaryExpression */:
                switch (operatorKind) {
                    case 27 /* CommaToken */:
                        return 0 /* Comma */;
                    case 62 /* EqualsToken */:
                    case 63 /* PlusEqualsToken */:
                    case 64 /* MinusEqualsToken */:
                    case 66 /* AsteriskAsteriskEqualsToken */:
                    case 65 /* AsteriskEqualsToken */:
                    case 67 /* SlashEqualsToken */:
                    case 68 /* PercentEqualsToken */:
                    case 69 /* LessThanLessThanEqualsToken */:
                    case 70 /* GreaterThanGreaterThanEqualsToken */:
                    case 71 /* GreaterThanGreaterThanGreaterThanEqualsToken */:
                    case 72 /* AmpersandEqualsToken */:
                    case 77 /* CaretEqualsToken */:
                    case 73 /* BarEqualsToken */:
                    case 74 /* BarBarEqualsToken */:
                    case 75 /* AmpersandAmpersandEqualsToken */:
                    case 76 /* QuestionQuestionEqualsToken */:
                        return 3 /* Assignment */;
                    default:
                        return getBinaryOperatorPrecedence(operatorKind);
                }
            // TODO: Should prefix `++` and `--` be moved to the `Update` precedence?
            case 206 /* TypeAssertionExpression */:
            case 225 /* NonNullExpression */:
            case 214 /* PrefixUnaryExpression */:
            case 211 /* TypeOfExpression */:
            case 212 /* VoidExpression */:
            case 210 /* DeleteExpression */:
            case 213 /* AwaitExpression */:
                return 16 /* Unary */;
            case 215 /* PostfixUnaryExpression */:
                return 17 /* Update */;
            case 203 /* CallExpression */:
                return 18 /* LeftHandSide */;
            case 204 /* NewExpression */:
                return hasArguments ? 19 /* Member */ : 18 /* LeftHandSide */;
            case 205 /* TaggedTemplateExpression */:
            case 201 /* PropertyAccessExpression */:
            case 202 /* ElementAccessExpression */:
                return 19 /* Member */;
            case 224 /* AsExpression */:
                return 11 /* Relational */;
            case 107 /* ThisKeyword */:
            case 105 /* SuperKeyword */:
            case 78 /* Identifier */:
            case 103 /* NullKeyword */:
            case 109 /* TrueKeyword */:
            case 94 /* FalseKeyword */:
            case 8 /* NumericLiteral */:
            case 9 /* BigIntLiteral */:
            case 10 /* StringLiteral */:
            case 199 /* ArrayLiteralExpression */:
            case 200 /* ObjectLiteralExpression */:
            case 208 /* FunctionExpression */:
            case 209 /* ArrowFunction */:
            case 221 /* ClassExpression */:
            case 13 /* RegularExpressionLiteral */:
            case 14 /* NoSubstitutionTemplateLiteral */:
            case 218 /* TemplateExpression */:
            case 207 /* ParenthesizedExpression */:
            case 222 /* OmittedExpression */:
            case 273 /* JsxElement */:
            case 274 /* JsxSelfClosingElement */:
            case 277 /* JsxFragment */:
                return 20 /* Primary */;
            default:
                return -1 /* Invalid */;
        }
    }
    __exports__getOperatorPrecedence = getOperatorPrecedence;
    function getBinaryOperatorPrecedence(kind) {
        switch (kind) {
            case 60 /* QuestionQuestionToken */:
                return 4 /* Coalesce */;
            case 56 /* BarBarToken */:
                return 5 /* LogicalOR */;
            case 55 /* AmpersandAmpersandToken */:
                return 6 /* LogicalAND */;
            case 51 /* BarToken */:
                return 7 /* BitwiseOR */;
            case 52 /* CaretToken */:
                return 8 /* BitwiseXOR */;
            case 50 /* AmpersandToken */:
                return 9 /* BitwiseAND */;
            case 34 /* EqualsEqualsToken */:
            case 35 /* ExclamationEqualsToken */:
            case 36 /* EqualsEqualsEqualsToken */:
            case 37 /* ExclamationEqualsEqualsToken */:
                return 10 /* Equality */;
            case 29 /* LessThanToken */:
            case 31 /* GreaterThanToken */:
            case 32 /* LessThanEqualsToken */:
            case 33 /* GreaterThanEqualsToken */:
            case 101 /* InstanceOfKeyword */:
            case 100 /* InKeyword */:
            case 126 /* AsKeyword */:
                return 11 /* Relational */;
            case 47 /* LessThanLessThanToken */:
            case 48 /* GreaterThanGreaterThanToken */:
            case 49 /* GreaterThanGreaterThanGreaterThanToken */:
                return 12 /* Shift */;
            case 39 /* PlusToken */:
            case 40 /* MinusToken */:
                return 13 /* Additive */;
            case 41 /* AsteriskToken */:
            case 43 /* SlashToken */:
            case 44 /* PercentToken */:
                return 14 /* Multiplicative */;
            case 42 /* AsteriskAsteriskToken */:
                return 15 /* Exponentiation */;
        }
        // -1 is lower than all other precedences.  Returning it will cause binary expression
        // parsing to stop.
        return -1;
    }
    __exports__getBinaryOperatorPrecedence = getBinaryOperatorPrecedence;
    function getSemanticJsxChildren(children) {
        return __exports__filter(children, i => {
            switch (i.kind) {
                case 283 /* JsxExpression */:
                    return !!i.expression;
                case 11 /* JsxText */:
                    return !i.containsOnlyTriviaWhiteSpaces;
                default:
                    return true;
            }
        });
    }
    __exports__getSemanticJsxChildren = getSemanticJsxChildren;
    function createDiagnosticCollection() {
        let nonFileDiagnostics = []; // See GH#19873
        const filesWithDiagnostics = [];
        const fileDiagnostics = new __exports__Map();
        let hasReadNonFileDiagnostics = false;
        return {
            add,
            lookup,
            getGlobalDiagnostics,
            getDiagnostics,
        };
        function lookup(diagnostic) {
            let diagnostics;
            if (diagnostic.file) {
                diagnostics = fileDiagnostics.get(diagnostic.file.fileName);
            }
            else {
                diagnostics = nonFileDiagnostics;
            }
            if (!diagnostics) {
                return undefined;
            }
            const result = __exports__binarySearch(diagnostics, diagnostic, __exports__identity, compareDiagnosticsSkipRelatedInformation);
            if (result >= 0) {
                return diagnostics[result];
            }
            return undefined;
        }
        function add(diagnostic) {
            let diagnostics;
            if (diagnostic.file) {
                diagnostics = fileDiagnostics.get(diagnostic.file.fileName);
                if (!diagnostics) {
                    diagnostics = []; // See GH#19873
                    fileDiagnostics.set(diagnostic.file.fileName, diagnostics);
                    __exports__insertSorted(filesWithDiagnostics, diagnostic.file.fileName, __exports__compareStringsCaseSensitive);
                }
            }
            else {
                // If we've already read the non-file diagnostics, do not modify the existing array.
                if (hasReadNonFileDiagnostics) {
                    hasReadNonFileDiagnostics = false;
                    nonFileDiagnostics = nonFileDiagnostics.slice();
                }
                diagnostics = nonFileDiagnostics;
            }
            __exports__insertSorted(diagnostics, diagnostic, compareDiagnostics);
        }
        function getGlobalDiagnostics() {
            hasReadNonFileDiagnostics = true;
            return nonFileDiagnostics;
        }
        function getDiagnostics(fileName) {
            if (fileName) {
                return fileDiagnostics.get(fileName) || [];
            }
            const fileDiags = __exports__flatMapToMutable(filesWithDiagnostics, f => fileDiagnostics.get(f));
            if (!nonFileDiagnostics.length) {
                return fileDiags;
            }
            fileDiags.unshift(...nonFileDiagnostics);
            return fileDiags;
        }
    }
    __exports__createDiagnosticCollection = createDiagnosticCollection;
    const templateSubstitutionRegExp = /\$\{/g;
    function escapeTemplateSubstitution(str) {
        return str.replace(templateSubstitutionRegExp, "\\${");
    }
    /** @internal */
    function hasInvalidEscape(template) {
        return template && !!(isNoSubstitutionTemplateLiteral(template)
            ? template.templateFlags
            : (template.head.templateFlags || __exports__some(template.templateSpans, span => !!span.literal.templateFlags)));
    }
    __exports__hasInvalidEscape = hasInvalidEscape;
    // This consists of the first 19 unprintable ASCII characters, canonical escapes, lineSeparator,
    // paragraphSeparator, and nextLine. The latter three are just desirable to suppress new lines in
    // the language service. These characters should be escaped when printing, and if any characters are added,
    // the map below must be updated. Note that this regexp *does not* include the 'delete' character.
    // There is no reason for this other than that JSON.stringify does not handle it either.
    const doubleQuoteEscapedCharsRegExp = /[\\\"\u0000-\u001f\t\v\f\b\r\n\u2028\u2029\u0085]/g;
    const singleQuoteEscapedCharsRegExp = /[\\\'\u0000-\u001f\t\v\f\b\r\n\u2028\u2029\u0085]/g;
    // Template strings should be preserved as much as possible
    const backtickQuoteEscapedCharsRegExp = /[\\`]/g;
    const escapedCharsMap = new __exports__Map(__exports__getEntries({
        "\t": "\\t",
        "\v": "\\v",
        "\f": "\\f",
        "\b": "\\b",
        "\r": "\\r",
        "\n": "\\n",
        "\\": "\\\\",
        "\"": "\\\"",
        "\'": "\\\'",
        "\`": "\\\`",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029",
        "\u0085": "\\u0085" // nextLine
    }));
    function encodeUtf16EscapeSequence(charCode) {
        const hexCharCode = charCode.toString(16).toUpperCase();
        const paddedHexCode = ("0000" + hexCharCode).slice(-4);
        return "\\u" + paddedHexCode;
    }
    function getReplacement(c, offset, input) {
        if (c.charCodeAt(0) === 0 /* nullCharacter */) {
            const lookAhead = input.charCodeAt(offset + c.length);
            if (lookAhead >= 48 /* _0 */ && lookAhead <= 57 /* _9 */) {
                // If the null character is followed by digits, print as a hex escape to prevent the result from parsing as an octal (which is forbidden in strict mode)
                return "\\x00";
            }
            // Otherwise, keep printing a literal \0 for the null character
            return "\\0";
        }
        return escapedCharsMap.get(c) || encodeUtf16EscapeSequence(c.charCodeAt(0));
    }
    /**
     * Based heavily on the abstract 'Quote'/'QuoteJSONString' operation from ECMA-262 (24.3.2.2),
     * but augmented for a few select characters (e.g. lineSeparator, paragraphSeparator, nextLine)
     * Note that this doesn't actually wrap the input in double quotes.
     */
    function escapeString(s, quoteChar) {
        const escapedCharsRegExp = quoteChar === 96 /* backtick */ ? backtickQuoteEscapedCharsRegExp :
            quoteChar === 39 /* singleQuote */ ? singleQuoteEscapedCharsRegExp :
                doubleQuoteEscapedCharsRegExp;
        return s.replace(escapedCharsRegExp, getReplacement);
    }
    __exports__escapeString = escapeString;
    const nonAsciiCharacters = /[^\u0000-\u007F]/g;
    function escapeNonAsciiString(s, quoteChar) {
        s = escapeString(s, quoteChar);
        // Replace non-ASCII characters with '\uNNNN' escapes if any exist.
        // Otherwise just return the original string.
        return nonAsciiCharacters.test(s) ?
            s.replace(nonAsciiCharacters, c => encodeUtf16EscapeSequence(c.charCodeAt(0))) :
            s;
    }
    __exports__escapeNonAsciiString = escapeNonAsciiString;
    // This consists of the first 19 unprintable ASCII characters, JSX canonical escapes, lineSeparator,
    // paragraphSeparator, and nextLine. The latter three are just desirable to suppress new lines in
    // the language service. These characters should be escaped when printing, and if any characters are added,
    // the map below must be updated.
    const jsxDoubleQuoteEscapedCharsRegExp = /[\"\u0000-\u001f\u2028\u2029\u0085]/g;
    const jsxSingleQuoteEscapedCharsRegExp = /[\'\u0000-\u001f\u2028\u2029\u0085]/g;
    const jsxEscapedCharsMap = new __exports__Map(__exports__getEntries({
        "\"": "&quot;",
        "\'": "&apos;"
    }));
    function encodeJsxCharacterEntity(charCode) {
        const hexCharCode = charCode.toString(16).toUpperCase();
        return "&#x" + hexCharCode + ";";
    }
    function getJsxAttributeStringReplacement(c) {
        if (c.charCodeAt(0) === 0 /* nullCharacter */) {
            return "&#0;";
        }
        return jsxEscapedCharsMap.get(c) || encodeJsxCharacterEntity(c.charCodeAt(0));
    }
    function escapeJsxAttributeString(s, quoteChar) {
        const escapedCharsRegExp = quoteChar === 39 /* singleQuote */ ? jsxSingleQuoteEscapedCharsRegExp :
            jsxDoubleQuoteEscapedCharsRegExp;
        return s.replace(escapedCharsRegExp, getJsxAttributeStringReplacement);
    }
    __exports__escapeJsxAttributeString = escapeJsxAttributeString;
    /**
     * Strip off existed surrounding single quotes, double quotes, or backticks from a given string
     *
     * @return non-quoted string
     */
    function stripQuotes(name) {
        const length = name.length;
        if (length >= 2 && name.charCodeAt(0) === name.charCodeAt(length - 1) && isQuoteOrBacktick(name.charCodeAt(0))) {
            return name.substring(1, length - 1);
        }
        return name;
    }
    __exports__stripQuotes = stripQuotes;
    function isQuoteOrBacktick(charCode) {
        return charCode === 39 /* singleQuote */ ||
            charCode === 34 /* doubleQuote */ ||
            charCode === 96 /* backtick */;
    }
    function isIntrinsicJsxName(name) {
        const ch = name.charCodeAt(0);
        return (ch >= 97 /* a */ && ch <= 122 /* z */) || __exports__stringContains(name, "-") || __exports__stringContains(name, ":");
    }
    __exports__isIntrinsicJsxName = isIntrinsicJsxName;
    const indentStrings = ["", "    "];
    function getIndentString(level) {
        // prepopulate cache
        const singleLevel = indentStrings[1];
        for (let current = indentStrings.length; current <= level; current++) {
            indentStrings.push(indentStrings[current - 1] + singleLevel);
        }
        return indentStrings[level];
    }
    __exports__getIndentString = getIndentString;
    function getIndentSize() {
        return indentStrings[1].length;
    }
    __exports__getIndentSize = getIndentSize;
    function createTextWriter(newLine) {
        let output;
        let indent;
        let lineStart;
        let lineCount;
        let linePos;
        let hasTrailingComment = false;
        function updateLineCountAndPosFor(s) {
            const lineStartsOfS = computeLineStarts(s);
            if (lineStartsOfS.length > 1) {
                lineCount = lineCount + lineStartsOfS.length - 1;
                linePos = output.length - s.length + __exports__last(lineStartsOfS);
                lineStart = (linePos - output.length) === 0;
            }
            else {
                lineStart = false;
            }
        }
        function writeText(s) {
            if (s && s.length) {
                if (lineStart) {
                    s = getIndentString(indent) + s;
                    lineStart = false;
                }
                output += s;
                updateLineCountAndPosFor(s);
            }
        }
        function write(s) {
            if (s)
                hasTrailingComment = false;
            writeText(s);
        }
        function writeComment(s) {
            if (s)
                hasTrailingComment = true;
            writeText(s);
        }
        function reset() {
            output = "";
            indent = 0;
            lineStart = true;
            lineCount = 0;
            linePos = 0;
            hasTrailingComment = false;
        }
        function rawWrite(s) {
            if (s !== undefined) {
                output += s;
                updateLineCountAndPosFor(s);
                hasTrailingComment = false;
            }
        }
        function writeLiteral(s) {
            if (s && s.length) {
                write(s);
            }
        }
        function writeLine(force) {
            if (!lineStart || force) {
                output += newLine;
                lineCount++;
                linePos = output.length;
                lineStart = true;
                hasTrailingComment = false;
            }
        }
        function getTextPosWithWriteLine() {
            return lineStart ? output.length : (output.length + newLine.length);
        }
        reset();
        return {
            write,
            rawWrite,
            writeLiteral,
            writeLine,
            increaseIndent: () => { indent++; },
            decreaseIndent: () => { indent--; },
            getIndent: () => indent,
            getTextPos: () => output.length,
            getLine: () => lineCount,
            getColumn: () => lineStart ? indent * getIndentSize() : output.length - linePos,
            getText: () => output,
            isAtStartOfLine: () => lineStart,
            hasTrailingComment: () => hasTrailingComment,
            hasTrailingWhitespace: () => !!output.length && isWhiteSpaceLike(output.charCodeAt(output.length - 1)),
            clear: reset,
            reportInaccessibleThisError: __exports__noop,
            reportPrivateInBaseOfClassExpression: __exports__noop,
            reportInaccessibleUniqueSymbolError: __exports__noop,
            trackSymbol: __exports__noop,
            writeKeyword: write,
            writeOperator: write,
            writeParameter: write,
            writeProperty: write,
            writePunctuation: write,
            writeSpace: write,
            writeStringLiteral: write,
            writeSymbol: (s, _) => write(s),
            writeTrailingSemicolon: write,
            writeComment,
            getTextPosWithWriteLine
        };
    }
    __exports__createTextWriter = createTextWriter;
    function getTrailingSemicolonDeferringWriter(writer) {
        let pendingTrailingSemicolon = false;
        function commitPendingTrailingSemicolon() {
            if (pendingTrailingSemicolon) {
                writer.writeTrailingSemicolon(";");
                pendingTrailingSemicolon = false;
            }
        }
        return {
            ...writer,
            writeTrailingSemicolon() {
                pendingTrailingSemicolon = true;
            },
            writeLiteral(s) {
                commitPendingTrailingSemicolon();
                writer.writeLiteral(s);
            },
            writeStringLiteral(s) {
                commitPendingTrailingSemicolon();
                writer.writeStringLiteral(s);
            },
            writeSymbol(s, sym) {
                commitPendingTrailingSemicolon();
                writer.writeSymbol(s, sym);
            },
            writePunctuation(s) {
                commitPendingTrailingSemicolon();
                writer.writePunctuation(s);
            },
            writeKeyword(s) {
                commitPendingTrailingSemicolon();
                writer.writeKeyword(s);
            },
            writeOperator(s) {
                commitPendingTrailingSemicolon();
                writer.writeOperator(s);
            },
            writeParameter(s) {
                commitPendingTrailingSemicolon();
                writer.writeParameter(s);
            },
            writeSpace(s) {
                commitPendingTrailingSemicolon();
                writer.writeSpace(s);
            },
            writeProperty(s) {
                commitPendingTrailingSemicolon();
                writer.writeProperty(s);
            },
            writeComment(s) {
                commitPendingTrailingSemicolon();
                writer.writeComment(s);
            },
            writeLine() {
                commitPendingTrailingSemicolon();
                writer.writeLine();
            },
            increaseIndent() {
                commitPendingTrailingSemicolon();
                writer.increaseIndent();
            },
            decreaseIndent() {
                commitPendingTrailingSemicolon();
                writer.decreaseIndent();
            },
        };
    }
    __exports__getTrailingSemicolonDeferringWriter = getTrailingSemicolonDeferringWriter;
    function hostUsesCaseSensitiveFileNames(host) {
        return host.useCaseSensitiveFileNames ? host.useCaseSensitiveFileNames() : false;
    }
    __exports__hostUsesCaseSensitiveFileNames = hostUsesCaseSensitiveFileNames;
    function hostGetCanonicalFileName(host) {
        return __exports__createGetCanonicalFileName(hostUsesCaseSensitiveFileNames(host));
    }
    __exports__hostGetCanonicalFileName = hostGetCanonicalFileName;
    function getResolvedExternalModuleName(host, file, referenceFile) {
        return file.moduleName || getExternalModuleNameFromPath(host, file.fileName, referenceFile && referenceFile.fileName);
    }
    __exports__getResolvedExternalModuleName = getResolvedExternalModuleName;
    function getCanonicalAbsolutePath(host, path) {
        return host.getCanonicalFileName(__exports__getNormalizedAbsolutePath(path, host.getCurrentDirectory()));
    }
    function getExternalModuleNameFromDeclaration(host, resolver, declaration) {
        const file = resolver.getExternalModuleFileFromDeclaration(declaration);
        if (!file || file.isDeclarationFile) {
            return undefined;
        }
        // If the declaration already uses a non-relative name, and is outside the common source directory, continue to use it
        const specifier = getExternalModuleName(declaration);
        if (specifier && isStringLiteralLike(specifier) && !__exports__pathIsRelative(specifier.text) &&
            getCanonicalAbsolutePath(host, file.path).indexOf(getCanonicalAbsolutePath(host, __exports__ensureTrailingDirectorySeparator(host.getCommonSourceDirectory()))) === -1) {
            return undefined;
        }
        return getResolvedExternalModuleName(host, file);
    }
    __exports__getExternalModuleNameFromDeclaration = getExternalModuleNameFromDeclaration;
    /**
     * Resolves a local path to a path which is absolute to the base of the emit
     */
    function getExternalModuleNameFromPath(host, fileName, referencePath) {
        const getCanonicalFileName = (f) => host.getCanonicalFileName(f);
        const dir = __exports__toPath(referencePath ? __exports__getDirectoryPath(referencePath) : host.getCommonSourceDirectory(), host.getCurrentDirectory(), getCanonicalFileName);
        const filePath = __exports__getNormalizedAbsolutePath(fileName, host.getCurrentDirectory());
        const relativePath = __exports__getRelativePathToDirectoryOrUrl(dir, filePath, dir, getCanonicalFileName, /*isAbsolutePathAnUrl*/ false);
        const extensionless = removeFileExtension(relativePath);
        return referencePath ? __exports__ensurePathIsNonModuleName(extensionless) : extensionless;
    }
    __exports__getExternalModuleNameFromPath = getExternalModuleNameFromPath;
    function getOwnEmitOutputFilePath(fileName, host, extension) {
        const compilerOptions = host.getCompilerOptions();
        let emitOutputFilePathWithoutExtension;
        if (compilerOptions.outDir) {
            emitOutputFilePathWithoutExtension = removeFileExtension(getSourceFilePathInNewDir(fileName, host, compilerOptions.outDir));
        }
        else {
            emitOutputFilePathWithoutExtension = removeFileExtension(fileName);
        }
        return emitOutputFilePathWithoutExtension + extension;
    }
    __exports__getOwnEmitOutputFilePath = getOwnEmitOutputFilePath;
    function getDeclarationEmitOutputFilePath(fileName, host) {
        return getDeclarationEmitOutputFilePathWorker(fileName, host.getCompilerOptions(), host.getCurrentDirectory(), host.getCommonSourceDirectory(), f => host.getCanonicalFileName(f));
    }
    __exports__getDeclarationEmitOutputFilePath = getDeclarationEmitOutputFilePath;
    function getDeclarationEmitOutputFilePathWorker(fileName, options, currentDirectory, commonSourceDirectory, getCanonicalFileName) {
        const outputDir = options.declarationDir || options.outDir; // Prefer declaration folder if specified
        const path = outputDir
            ? getSourceFilePathInNewDirWorker(fileName, outputDir, currentDirectory, commonSourceDirectory, getCanonicalFileName)
            : fileName;
        return removeFileExtension(path) + ".d.ts" /* Dts */;
    }
    __exports__getDeclarationEmitOutputFilePathWorker = getDeclarationEmitOutputFilePathWorker;
    function outFile(options) {
        return options.outFile || options.out;
    }
    __exports__outFile = outFile;
    /** Returns 'undefined' if and only if 'options.paths' is undefined. */
    function getPathsBasePath(options, host) {
        if (!options.paths)
            return undefined;
        return options.baseUrl ?? __exports__Debug.checkDefined(options.pathsBasePath || host.getCurrentDirectory?.(), "Encountered 'paths' without a 'baseUrl', config file, or host 'getCurrentDirectory'.");
    }
    __exports__getPathsBasePath = getPathsBasePath;
    /**
     * Gets the source files that are expected to have an emit output.
     *
     * Originally part of `forEachExpectedEmitFile`, this functionality was extracted to support
     * transformations.
     *
     * @param host An EmitHost.
     * @param targetSourceFile An optional target source file to emit.
     */
    function getSourceFilesToEmit(host, targetSourceFile, forceDtsEmit) {
        const options = host.getCompilerOptions();
        if (outFile(options)) {
            const moduleKind = getEmitModuleKind(options);
            const moduleEmitEnabled = options.emitDeclarationOnly || moduleKind === __exports__ModuleKind.AMD || moduleKind === __exports__ModuleKind.System;
            // Can emit only sources that are not declaration file and are either non module code or module with --module or --target es6 specified
            return __exports__filter(host.getSourceFiles(), sourceFile => (moduleEmitEnabled || !isExternalModule(sourceFile)) &&
                sourceFileMayBeEmitted(sourceFile, host, forceDtsEmit));
        }
        else {
            const sourceFiles = targetSourceFile === undefined ? host.getSourceFiles() : [targetSourceFile];
            return __exports__filter(sourceFiles, sourceFile => sourceFileMayBeEmitted(sourceFile, host, forceDtsEmit));
        }
    }
    __exports__getSourceFilesToEmit = getSourceFilesToEmit;
    /** Don't call this for `--outFile`, just for `--outDir` or plain emit. `--outFile` needs additional checks. */
    function sourceFileMayBeEmitted(sourceFile, host, forceDtsEmit) {
        const options = host.getCompilerOptions();
        return !(options.noEmitForJsFiles && isSourceFileJS(sourceFile)) &&
            !sourceFile.isDeclarationFile &&
            !host.isSourceFileFromExternalLibrary(sourceFile) &&
            !(isJsonSourceFile(sourceFile) && host.getResolvedProjectReferenceToRedirect(sourceFile.fileName)) &&
            (forceDtsEmit || !host.isSourceOfProjectReferenceRedirect(sourceFile.fileName));
    }
    __exports__sourceFileMayBeEmitted = sourceFileMayBeEmitted;
    function getSourceFilePathInNewDir(fileName, host, newDirPath) {
        return getSourceFilePathInNewDirWorker(fileName, newDirPath, host.getCurrentDirectory(), host.getCommonSourceDirectory(), f => host.getCanonicalFileName(f));
    }
    __exports__getSourceFilePathInNewDir = getSourceFilePathInNewDir;
    function getSourceFilePathInNewDirWorker(fileName, newDirPath, currentDirectory, commonSourceDirectory, getCanonicalFileName) {
        let sourceFilePath = __exports__getNormalizedAbsolutePath(fileName, currentDirectory);
        const isSourceFileInCommonSourceDirectory = getCanonicalFileName(sourceFilePath).indexOf(getCanonicalFileName(commonSourceDirectory)) === 0;
        sourceFilePath = isSourceFileInCommonSourceDirectory ? sourceFilePath.substring(commonSourceDirectory.length) : sourceFilePath;
        return __exports__combinePaths(newDirPath, sourceFilePath);
    }
    __exports__getSourceFilePathInNewDirWorker = getSourceFilePathInNewDirWorker;
    function writeFile(host, diagnostics, fileName, data, writeByteOrderMark, sourceFiles) {
        host.writeFile(fileName, data, writeByteOrderMark, hostErrorMessage => {
            diagnostics.add(createCompilerDiagnostic(__exports__Diagnostics.Could_not_write_file_0_Colon_1, fileName, hostErrorMessage));
        }, sourceFiles);
    }
    __exports__writeFile = writeFile;
    function ensureDirectoriesExist(directoryPath, createDirectory, directoryExists) {
        if (directoryPath.length > __exports__getRootLength(directoryPath) && !directoryExists(directoryPath)) {
            const parentDirectory = __exports__getDirectoryPath(directoryPath);
            ensureDirectoriesExist(parentDirectory, createDirectory, directoryExists);
            createDirectory(directoryPath);
        }
    }
    function writeFileEnsuringDirectories(path, data, writeByteOrderMark, writeFile, createDirectory, directoryExists) {
        // PERF: Checking for directory existence is expensive.  Instead, assume the directory exists
        // and fall back to creating it if the file write fails.
        try {
            writeFile(path, data, writeByteOrderMark);
        }
        catch {
            ensureDirectoriesExist(__exports__getDirectoryPath(__exports__normalizePath(path)), createDirectory, directoryExists);
            writeFile(path, data, writeByteOrderMark);
        }
    }
    __exports__writeFileEnsuringDirectories = writeFileEnsuringDirectories;
    function getLineOfLocalPosition(sourceFile, pos) {
        const lineStarts = getLineStarts(sourceFile);
        return computeLineOfPosition(lineStarts, pos);
    }
    __exports__getLineOfLocalPosition = getLineOfLocalPosition;
    function getLineOfLocalPositionFromLineMap(lineMap, pos) {
        return computeLineOfPosition(lineMap, pos);
    }
    __exports__getLineOfLocalPositionFromLineMap = getLineOfLocalPositionFromLineMap;
    function getFirstConstructorWithBody(node) {
        return __exports__find(node.members, (member) => isConstructorDeclaration(member) && nodeIsPresent(member.body));
    }
    __exports__getFirstConstructorWithBody = getFirstConstructorWithBody;
    function getSetAccessorValueParameter(accessor) {
        if (accessor && accessor.parameters.length > 0) {
            const hasThis = accessor.parameters.length === 2 && parameterIsThisKeyword(accessor.parameters[0]);
            return accessor.parameters[hasThis ? 1 : 0];
        }
    }
    __exports__getSetAccessorValueParameter = getSetAccessorValueParameter;
    /** Get the type annotation for the value parameter. */
    function getSetAccessorTypeAnnotationNode(accessor) {
        const parameter = getSetAccessorValueParameter(accessor);
        return parameter && parameter.type;
    }
    __exports__getSetAccessorTypeAnnotationNode = getSetAccessorTypeAnnotationNode;
    function getThisParameter(signature) {
        // callback tags do not currently support this parameters
        if (signature.parameters.length && !isJSDocSignature(signature)) {
            const thisParameter = signature.parameters[0];
            if (parameterIsThisKeyword(thisParameter)) {
                return thisParameter;
            }
        }
    }
    __exports__getThisParameter = getThisParameter;
    function parameterIsThisKeyword(parameter) {
        return isThisIdentifier(parameter.name);
    }
    __exports__parameterIsThisKeyword = parameterIsThisKeyword;
    function isThisIdentifier(node) {
        return !!node && node.kind === 78 /* Identifier */ && identifierIsThisKeyword(node);
    }
    __exports__isThisIdentifier = isThisIdentifier;
    function identifierIsThisKeyword(id) {
        return id.originalKeywordKind === 107 /* ThisKeyword */;
    }
    __exports__identifierIsThisKeyword = identifierIsThisKeyword;
    function getAllAccessorDeclarations(declarations, accessor) {
        // TODO: GH#18217
        let firstAccessor;
        let secondAccessor;
        let getAccessor;
        let setAccessor;
        if (hasDynamicName(accessor)) {
            firstAccessor = accessor;
            if (accessor.kind === 167 /* GetAccessor */) {
                getAccessor = accessor;
            }
            else if (accessor.kind === 168 /* SetAccessor */) {
                setAccessor = accessor;
            }
            else {
                __exports__Debug.fail("Accessor has wrong kind");
            }
        }
        else {
            __exports__forEach(declarations, member => {
                if (isAccessor(member)
                    && hasSyntacticModifier(member, 32 /* Static */) === hasSyntacticModifier(accessor, 32 /* Static */)) {
                    const memberName = getPropertyNameForPropertyNameNode(member.name);
                    const accessorName = getPropertyNameForPropertyNameNode(accessor.name);
                    if (memberName === accessorName) {
                        if (!firstAccessor) {
                            firstAccessor = member;
                        }
                        else if (!secondAccessor) {
                            secondAccessor = member;
                        }
                        if (member.kind === 167 /* GetAccessor */ && !getAccessor) {
                            getAccessor = member;
                        }
                        if (member.kind === 168 /* SetAccessor */ && !setAccessor) {
                            setAccessor = member;
                        }
                    }
                }
            });
        }
        return {
            firstAccessor,
            secondAccessor,
            getAccessor,
            setAccessor
        };
    }
    __exports__getAllAccessorDeclarations = getAllAccessorDeclarations;
    /**
     * Gets the effective type annotation of a variable, parameter, or property. If the node was
     * parsed in a JavaScript file, gets the type annotation from JSDoc.  Also gets the type of
     * functions only the JSDoc case.
     */
    function getEffectiveTypeAnnotationNode(node) {
        if (!isInJSFile(node) && isFunctionDeclaration(node))
            return undefined;
        const type = node.type;
        if (type || !isInJSFile(node))
            return type;
        return isJSDocPropertyLikeTag(node) ? node.typeExpression && node.typeExpression.type : getJSDocType(node);
    }
    __exports__getEffectiveTypeAnnotationNode = getEffectiveTypeAnnotationNode;
    function getTypeAnnotationNode(node) {
        return node.type;
    }
    __exports__getTypeAnnotationNode = getTypeAnnotationNode;
    /**
     * Gets the effective return type annotation of a signature. If the node was parsed in a
     * JavaScript file, gets the return type annotation from JSDoc.
     */
    function getEffectiveReturnTypeNode(node) {
        return isJSDocSignature(node) ?
            node.type && node.type.typeExpression && node.type.typeExpression.type :
            node.type || (isInJSFile(node) ? getJSDocReturnType(node) : undefined);
    }
    __exports__getEffectiveReturnTypeNode = getEffectiveReturnTypeNode;
    function getJSDocTypeParameterDeclarations(node) {
        return __exports__flatMap(getJSDocTags(node), tag => isNonTypeAliasTemplate(tag) ? tag.typeParameters : undefined);
    }
    __exports__getJSDocTypeParameterDeclarations = getJSDocTypeParameterDeclarations;
    /** template tags are only available when a typedef isn't already using them */
    function isNonTypeAliasTemplate(tag) {
        return isJSDocTemplateTag(tag) && !(tag.parent.kind === 311 /* JSDocComment */ && tag.parent.tags.some(isJSDocTypeAlias));
    }
    /**
     * Gets the effective type annotation of the value parameter of a set accessor. If the node
     * was parsed in a JavaScript file, gets the type annotation from JSDoc.
     */
    function getEffectiveSetAccessorTypeAnnotationNode(node) {
        const parameter = getSetAccessorValueParameter(node);
        return parameter && getEffectiveTypeAnnotationNode(parameter);
    }
    __exports__getEffectiveSetAccessorTypeAnnotationNode = getEffectiveSetAccessorTypeAnnotationNode;
    function emitNewLineBeforeLeadingComments(lineMap, writer, node, leadingComments) {
        emitNewLineBeforeLeadingCommentsOfPosition(lineMap, writer, node.pos, leadingComments);
    }
    __exports__emitNewLineBeforeLeadingComments = emitNewLineBeforeLeadingComments;
    function emitNewLineBeforeLeadingCommentsOfPosition(lineMap, writer, pos, leadingComments) {
        // If the leading comments start on different line than the start of node, write new line
        if (leadingComments && leadingComments.length && pos !== leadingComments[0].pos &&
            getLineOfLocalPositionFromLineMap(lineMap, pos) !== getLineOfLocalPositionFromLineMap(lineMap, leadingComments[0].pos)) {
            writer.writeLine();
        }
    }
    __exports__emitNewLineBeforeLeadingCommentsOfPosition = emitNewLineBeforeLeadingCommentsOfPosition;
    function emitNewLineBeforeLeadingCommentOfPosition(lineMap, writer, pos, commentPos) {
        // If the leading comments start on different line than the start of node, write new line
        if (pos !== commentPos &&
            getLineOfLocalPositionFromLineMap(lineMap, pos) !== getLineOfLocalPositionFromLineMap(lineMap, commentPos)) {
            writer.writeLine();
        }
    }
    __exports__emitNewLineBeforeLeadingCommentOfPosition = emitNewLineBeforeLeadingCommentOfPosition;
    function emitComments(text, lineMap, writer, comments, leadingSeparator, trailingSeparator, newLine, writeComment) {
        if (comments && comments.length > 0) {
            if (leadingSeparator) {
                writer.writeSpace(" ");
            }
            let emitInterveningSeparator = false;
            for (const comment of comments) {
                if (emitInterveningSeparator) {
                    writer.writeSpace(" ");
                    emitInterveningSeparator = false;
                }
                writeComment(text, lineMap, writer, comment.pos, comment.end, newLine);
                if (comment.hasTrailingNewLine) {
                    writer.writeLine();
                }
                else {
                    emitInterveningSeparator = true;
                }
            }
            if (emitInterveningSeparator && trailingSeparator) {
                writer.writeSpace(" ");
            }
        }
    }
    __exports__emitComments = emitComments;
    /**
     * Detached comment is a comment at the top of file or function body that is separated from
     * the next statement by space.
     */
    function emitDetachedComments(text, lineMap, writer, writeComment, node, newLine, removeComments) {
        let leadingComments;
        let currentDetachedCommentInfo;
        if (removeComments) {
            // removeComments is true, only reserve pinned comment at the top of file
            // For example:
            //      /*! Pinned Comment */
            //
            //      var x = 10;
            if (node.pos === 0) {
                leadingComments = __exports__filter(getLeadingCommentRanges(text, node.pos), isPinnedCommentLocal);
            }
        }
        else {
            // removeComments is false, just get detached as normal and bypass the process to filter comment
            leadingComments = getLeadingCommentRanges(text, node.pos);
        }
        if (leadingComments) {
            const detachedComments = [];
            let lastComment;
            for (const comment of leadingComments) {
                if (lastComment) {
                    const lastCommentLine = getLineOfLocalPositionFromLineMap(lineMap, lastComment.end);
                    const commentLine = getLineOfLocalPositionFromLineMap(lineMap, comment.pos);
                    if (commentLine >= lastCommentLine + 2) {
                        // There was a blank line between the last comment and this comment.  This
                        // comment is not part of the copyright comments.  Return what we have so
                        // far.
                        break;
                    }
                }
                detachedComments.push(comment);
                lastComment = comment;
            }
            if (detachedComments.length) {
                // All comments look like they could have been part of the copyright header.  Make
                // sure there is at least one blank line between it and the node.  If not, it's not
                // a copyright header.
                const lastCommentLine = getLineOfLocalPositionFromLineMap(lineMap, __exports__last(detachedComments).end);
                const nodeLine = getLineOfLocalPositionFromLineMap(lineMap, skipTrivia(text, node.pos));
                if (nodeLine >= lastCommentLine + 2) {
                    // Valid detachedComments
                    emitNewLineBeforeLeadingComments(lineMap, writer, node, leadingComments);
                    emitComments(text, lineMap, writer, detachedComments, /*leadingSeparator*/ false, /*trailingSeparator*/ true, newLine, writeComment);
                    currentDetachedCommentInfo = { nodePos: node.pos, detachedCommentEndPos: __exports__last(detachedComments).end };
                }
            }
        }
        return currentDetachedCommentInfo;
        function isPinnedCommentLocal(comment) {
            return isPinnedComment(text, comment.pos);
        }
    }
    __exports__emitDetachedComments = emitDetachedComments;
    function writeCommentRange(text, lineMap, writer, commentPos, commentEnd, newLine) {
        if (text.charCodeAt(commentPos + 1) === 42 /* asterisk */) {
            const firstCommentLineAndCharacter = computeLineAndCharacterOfPosition(lineMap, commentPos);
            const lineCount = lineMap.length;
            let firstCommentLineIndent;
            for (let pos = commentPos, currentLine = firstCommentLineAndCharacter.line; pos < commentEnd; currentLine++) {
                const nextLineStart = (currentLine + 1) === lineCount
                    ? text.length + 1
                    : lineMap[currentLine + 1];
                if (pos !== commentPos) {
                    // If we are not emitting first line, we need to write the spaces to adjust the alignment
                    if (firstCommentLineIndent === undefined) {
                        firstCommentLineIndent = calculateIndent(text, lineMap[firstCommentLineAndCharacter.line], commentPos);
                    }
                    // These are number of spaces writer is going to write at current indent
                    const currentWriterIndentSpacing = writer.getIndent() * getIndentSize();
                    // Number of spaces we want to be writing
                    // eg: Assume writer indent
                    // module m {
                    //         /* starts at character 9 this is line 1
                    //    * starts at character pos 4 line                        --1  = 8 - 8 + 3
                    //   More left indented comment */                            --2  = 8 - 8 + 2
                    //     class c { }
                    // }
                    // module m {
                    //     /* this is line 1 -- Assume current writer indent 8
                    //      * line                                                --3 = 8 - 4 + 5
                    //            More right indented comment */                  --4 = 8 - 4 + 11
                    //     class c { }
                    // }
                    const spacesToEmit = currentWriterIndentSpacing - firstCommentLineIndent + calculateIndent(text, pos, nextLineStart);
                    if (spacesToEmit > 0) {
                        let numberOfSingleSpacesToEmit = spacesToEmit % getIndentSize();
                        const indentSizeSpaceString = getIndentString((spacesToEmit - numberOfSingleSpacesToEmit) / getIndentSize());
                        // Write indent size string ( in eg 1: = "", 2: "" , 3: string with 8 spaces 4: string with 12 spaces
                        writer.rawWrite(indentSizeSpaceString);
                        // Emit the single spaces (in eg: 1: 3 spaces, 2: 2 spaces, 3: 1 space, 4: 3 spaces)
                        while (numberOfSingleSpacesToEmit) {
                            writer.rawWrite(" ");
                            numberOfSingleSpacesToEmit--;
                        }
                    }
                    else {
                        // No spaces to emit write empty string
                        writer.rawWrite("");
                    }
                }
                // Write the comment line text
                writeTrimmedCurrentLine(text, commentEnd, writer, newLine, pos, nextLineStart);
                pos = nextLineStart;
            }
        }
        else {
            // Single line comment of style //....
            writer.writeComment(text.substring(commentPos, commentEnd));
        }
    }
    __exports__writeCommentRange = writeCommentRange;
    function writeTrimmedCurrentLine(text, commentEnd, writer, newLine, pos, nextLineStart) {
        const end = Math.min(commentEnd, nextLineStart - 1);
        const currentLineText = text.substring(pos, end).replace(/^\s+|\s+$/g, "");
        if (currentLineText) {
            // trimmed forward and ending spaces text
            writer.writeComment(currentLineText);
            if (end !== commentEnd) {
                writer.writeLine();
            }
        }
        else {
            // Empty string - make sure we write empty line
            writer.rawWrite(newLine);
        }
    }
    function calculateIndent(text, pos, end) {
        let currentLineIndent = 0;
        for (; pos < end && isWhiteSpaceSingleLine(text.charCodeAt(pos)); pos++) {
            if (text.charCodeAt(pos) === 9 /* tab */) {
                // Tabs = TabSize = indent size and go to next tabStop
                currentLineIndent += getIndentSize() - (currentLineIndent % getIndentSize());
            }
            else {
                // Single space
                currentLineIndent++;
            }
        }
        return currentLineIndent;
    }
    function hasEffectiveModifiers(node) {
        return getEffectiveModifierFlags(node) !== 0 /* None */;
    }
    __exports__hasEffectiveModifiers = hasEffectiveModifiers;
    function hasSyntacticModifiers(node) {
        return getSyntacticModifierFlags(node) !== 0 /* None */;
    }
    __exports__hasSyntacticModifiers = hasSyntacticModifiers;
    function hasEffectiveModifier(node, flags) {
        return !!getSelectedEffectiveModifierFlags(node, flags);
    }
    __exports__hasEffectiveModifier = hasEffectiveModifier;
    function hasSyntacticModifier(node, flags) {
        return !!getSelectedSyntacticModifierFlags(node, flags);
    }
    __exports__hasSyntacticModifier = hasSyntacticModifier;
    function hasStaticModifier(node) {
        return hasSyntacticModifier(node, 32 /* Static */);
    }
    __exports__hasStaticModifier = hasStaticModifier;
    function hasEffectiveReadonlyModifier(node) {
        return hasEffectiveModifier(node, 64 /* Readonly */);
    }
    __exports__hasEffectiveReadonlyModifier = hasEffectiveReadonlyModifier;
    function getSelectedEffectiveModifierFlags(node, flags) {
        return getEffectiveModifierFlags(node) & flags;
    }
    __exports__getSelectedEffectiveModifierFlags = getSelectedEffectiveModifierFlags;
    function getSelectedSyntacticModifierFlags(node, flags) {
        return getSyntacticModifierFlags(node) & flags;
    }
    __exports__getSelectedSyntacticModifierFlags = getSelectedSyntacticModifierFlags;
    function getModifierFlagsWorker(node, includeJSDoc, alwaysIncludeJSDoc) {
        if (node.kind >= 0 /* FirstToken */ && node.kind <= 156 /* LastToken */) {
            return 0 /* None */;
        }
        if (!(node.modifierFlagsCache & 536870912 /* HasComputedFlags */)) {
            node.modifierFlagsCache = getSyntacticModifierFlagsNoCache(node) | 536870912 /* HasComputedFlags */;
        }
        if (includeJSDoc && !(node.modifierFlagsCache & 4096 /* HasComputedJSDocModifiers */) && (alwaysIncludeJSDoc || isInJSFile(node)) && node.parent) {
            node.modifierFlagsCache |= getJSDocModifierFlagsNoCache(node) | 4096 /* HasComputedJSDocModifiers */;
        }
        return node.modifierFlagsCache & ~(536870912 /* HasComputedFlags */ | 4096 /* HasComputedJSDocModifiers */);
    }
    /**
     * Gets the effective ModifierFlags for the provided node, including JSDoc modifiers. The modifiers will be cached on the node to improve performance.
     *
     * NOTE: This function may use `parent` pointers.
     */
    function getEffectiveModifierFlags(node) {
        return getModifierFlagsWorker(node, /*includeJSDoc*/ true);
    }
    __exports__getEffectiveModifierFlags = getEffectiveModifierFlags;
    function getEffectiveModifierFlagsAlwaysIncludeJSDoc(node) {
        return getModifierFlagsWorker(node, /*includeJSDOc*/ true, /*alwaysIncludeJSDOc*/ true);
    }
    __exports__getEffectiveModifierFlagsAlwaysIncludeJSDoc = getEffectiveModifierFlagsAlwaysIncludeJSDoc;
    /**
     * Gets the ModifierFlags for syntactic modifiers on the provided node. The modifiers will be cached on the node to improve performance.
     *
     * NOTE: This function does not use `parent` pointers and will not include modifiers from JSDoc.
     */
    function getSyntacticModifierFlags(node) {
        return getModifierFlagsWorker(node, /*includeJSDoc*/ false);
    }
    __exports__getSyntacticModifierFlags = getSyntacticModifierFlags;
    function getJSDocModifierFlagsNoCache(node) {
        let flags = 0 /* None */;
        if (!!node.parent && !isParameter(node)) {
            if (isInJSFile(node)) {
                if (getJSDocPublicTagNoCache(node))
                    flags |= 4 /* Public */;
                if (getJSDocPrivateTagNoCache(node))
                    flags |= 8 /* Private */;
                if (getJSDocProtectedTagNoCache(node))
                    flags |= 16 /* Protected */;
                if (getJSDocReadonlyTagNoCache(node))
                    flags |= 64 /* Readonly */;
            }
            if (getJSDocDeprecatedTagNoCache(node))
                flags |= 8192 /* Deprecated */;
        }
        return flags;
    }
    /**
     * Gets the effective ModifierFlags for the provided node, including JSDoc modifiers. The modifier flags cache on the node is ignored.
     *
     * NOTE: This function may use `parent` pointers.
     */
    function getEffectiveModifierFlagsNoCache(node) {
        return getSyntacticModifierFlagsNoCache(node) | getJSDocModifierFlagsNoCache(node);
    }
    __exports__getEffectiveModifierFlagsNoCache = getEffectiveModifierFlagsNoCache;
    /**
     * Gets the ModifierFlags for syntactic modifiers on the provided node. The modifier flags cache on the node is ignored.
     *
     * NOTE: This function does not use `parent` pointers and will not include modifiers from JSDoc.
     */
    function getSyntacticModifierFlagsNoCache(node) {
        let flags = modifiersToFlags(node.modifiers);
        if (node.flags & 4 /* NestedNamespace */ || (node.kind === 78 /* Identifier */ && node.isInJSDocNamespace)) {
            flags |= 1 /* Export */;
        }
        return flags;
    }
    __exports__getSyntacticModifierFlagsNoCache = getSyntacticModifierFlagsNoCache;
    function modifiersToFlags(modifiers) {
        let flags = 0 /* None */;
        if (modifiers) {
            for (const modifier of modifiers) {
                flags |= modifierToFlag(modifier.kind);
            }
        }
        return flags;
    }
    __exports__modifiersToFlags = modifiersToFlags;
    function modifierToFlag(token) {
        switch (token) {
            case 123 /* StaticKeyword */: return 32 /* Static */;
            case 122 /* PublicKeyword */: return 4 /* Public */;
            case 121 /* ProtectedKeyword */: return 16 /* Protected */;
            case 120 /* PrivateKeyword */: return 8 /* Private */;
            case 125 /* AbstractKeyword */: return 128 /* Abstract */;
            case 92 /* ExportKeyword */: return 1 /* Export */;
            case 133 /* DeclareKeyword */: return 2 /* Ambient */;
            case 84 /* ConstKeyword */: return 2048 /* Const */;
            case 87 /* DefaultKeyword */: return 512 /* Default */;
            case 129 /* AsyncKeyword */: return 256 /* Async */;
            case 142 /* ReadonlyKeyword */: return 64 /* Readonly */;
        }
        return 0 /* None */;
    }
    __exports__modifierToFlag = modifierToFlag;
    function isLogicalOperator(token) {
        return token === 56 /* BarBarToken */
            || token === 55 /* AmpersandAmpersandToken */
            || token === 53 /* ExclamationToken */;
    }
    __exports__isLogicalOperator = isLogicalOperator;
    function isLogicalOrCoalescingAssignmentOperator(token) {
        return token === 74 /* BarBarEqualsToken */
            || token === 75 /* AmpersandAmpersandEqualsToken */
            || token === 76 /* QuestionQuestionEqualsToken */;
    }
    __exports__isLogicalOrCoalescingAssignmentOperator = isLogicalOrCoalescingAssignmentOperator;
    function isLogicalOrCoalescingAssignmentExpression(expr) {
        return isLogicalOrCoalescingAssignmentOperator(expr.operatorToken.kind);
    }
    __exports__isLogicalOrCoalescingAssignmentExpression = isLogicalOrCoalescingAssignmentExpression;
    function isAssignmentOperator(token) {
        return token >= 62 /* FirstAssignment */ && token <= 77 /* LastAssignment */;
    }
    __exports__isAssignmentOperator = isAssignmentOperator;
    /** Get `C` given `N` if `N` is in the position `class C extends N` where `N` is an ExpressionWithTypeArguments. */
    function tryGetClassExtendingExpressionWithTypeArguments(node) {
        const cls = tryGetClassImplementingOrExtendingExpressionWithTypeArguments(node);
        return cls && !cls.isImplements ? cls.class : undefined;
    }
    __exports__tryGetClassExtendingExpressionWithTypeArguments = tryGetClassExtendingExpressionWithTypeArguments;
    function tryGetClassImplementingOrExtendingExpressionWithTypeArguments(node) {
        return isExpressionWithTypeArguments(node)
            && isHeritageClause(node.parent)
            && isClassLike(node.parent.parent)
            ? { class: node.parent.parent, isImplements: node.parent.token === 116 /* ImplementsKeyword */ }
            : undefined;
    }
    __exports__tryGetClassImplementingOrExtendingExpressionWithTypeArguments = tryGetClassImplementingOrExtendingExpressionWithTypeArguments;
    function isAssignmentExpression(node, excludeCompoundAssignment) {
        return isBinaryExpression(node)
            && (excludeCompoundAssignment
                ? node.operatorToken.kind === 62 /* EqualsToken */
                : isAssignmentOperator(node.operatorToken.kind))
            && isLeftHandSideExpression(node.left);
    }
    __exports__isAssignmentExpression = isAssignmentExpression;
    function isDestructuringAssignment(node) {
        if (isAssignmentExpression(node, /*excludeCompoundAssignment*/ true)) {
            const kind = node.left.kind;
            return kind === 200 /* ObjectLiteralExpression */
                || kind === 199 /* ArrayLiteralExpression */;
        }
        return false;
    }
    __exports__isDestructuringAssignment = isDestructuringAssignment;
    function isExpressionWithTypeArgumentsInClassExtendsClause(node) {
        return tryGetClassExtendingExpressionWithTypeArguments(node) !== undefined;
    }
    __exports__isExpressionWithTypeArgumentsInClassExtendsClause = isExpressionWithTypeArgumentsInClassExtendsClause;
    function isEntityNameExpression(node) {
        return node.kind === 78 /* Identifier */ || isPropertyAccessEntityNameExpression(node);
    }
    __exports__isEntityNameExpression = isEntityNameExpression;
    function getFirstIdentifier(node) {
        switch (node.kind) {
            case 78 /* Identifier */:
                return node;
            case 157 /* QualifiedName */:
                do {
                    node = node.left;
                } while (node.kind !== 78 /* Identifier */);
                return node;
            case 201 /* PropertyAccessExpression */:
                do {
                    node = node.expression;
                } while (node.kind !== 78 /* Identifier */);
                return node;
        }
    }
    __exports__getFirstIdentifier = getFirstIdentifier;
    function isDottedName(node) {
        return node.kind === 78 /* Identifier */ || node.kind === 107 /* ThisKeyword */ || node.kind === 105 /* SuperKeyword */ ||
            node.kind === 201 /* PropertyAccessExpression */ && isDottedName(node.expression) ||
            node.kind === 207 /* ParenthesizedExpression */ && isDottedName(node.expression);
    }
    __exports__isDottedName = isDottedName;
    function isPropertyAccessEntityNameExpression(node) {
        return isPropertyAccessExpression(node) && isIdentifier(node.name) && isEntityNameExpression(node.expression);
    }
    __exports__isPropertyAccessEntityNameExpression = isPropertyAccessEntityNameExpression;
    function tryGetPropertyAccessOrIdentifierToString(expr) {
        if (isPropertyAccessExpression(expr)) {
            const baseStr = tryGetPropertyAccessOrIdentifierToString(expr.expression);
            if (baseStr !== undefined) {
                return baseStr + "." + entityNameToString(expr.name);
            }
        }
        else if (isElementAccessExpression(expr)) {
            const baseStr = tryGetPropertyAccessOrIdentifierToString(expr.expression);
            if (baseStr !== undefined && isPropertyName(expr.argumentExpression)) {
                return baseStr + "." + getPropertyNameForPropertyNameNode(expr.argumentExpression);
            }
        }
        else if (isIdentifier(expr)) {
            return unescapeLeadingUnderscores(expr.escapedText);
        }
        return undefined;
    }
    __exports__tryGetPropertyAccessOrIdentifierToString = tryGetPropertyAccessOrIdentifierToString;
    function isPrototypeAccess(node) {
        return isBindableStaticAccessExpression(node) && getElementOrPropertyAccessName(node) === "prototype";
    }
    __exports__isPrototypeAccess = isPrototypeAccess;
    function isRightSideOfQualifiedNameOrPropertyAccess(node) {
        return (node.parent.kind === 157 /* QualifiedName */ && node.parent.right === node) ||
            (node.parent.kind === 201 /* PropertyAccessExpression */ && node.parent.name === node);
    }
    __exports__isRightSideOfQualifiedNameOrPropertyAccess = isRightSideOfQualifiedNameOrPropertyAccess;
    function isEmptyObjectLiteral(expression) {
        return expression.kind === 200 /* ObjectLiteralExpression */ &&
            expression.properties.length === 0;
    }
    __exports__isEmptyObjectLiteral = isEmptyObjectLiteral;
    function isEmptyArrayLiteral(expression) {
        return expression.kind === 199 /* ArrayLiteralExpression */ &&
            expression.elements.length === 0;
    }
    __exports__isEmptyArrayLiteral = isEmptyArrayLiteral;
    function getLocalSymbolForExportDefault(symbol) {
        if (!isExportDefaultSymbol(symbol))
            return undefined;
        for (const decl of symbol.declarations) {
            if (decl.localSymbol)
                return decl.localSymbol;
        }
        return undefined;
    }
    __exports__getLocalSymbolForExportDefault = getLocalSymbolForExportDefault;
    function isExportDefaultSymbol(symbol) {
        return symbol && __exports__length(symbol.declarations) > 0 && hasSyntacticModifier(symbol.declarations[0], 512 /* Default */);
    }
    /** Return ".ts", ".d.ts", or ".tsx", if that is the extension. */
    function tryExtractTSExtension(fileName) {
        return __exports__find(__exports__supportedTSExtensionsForExtractExtension, extension => __exports__fileExtensionIs(fileName, extension));
    }
    __exports__tryExtractTSExtension = tryExtractTSExtension;
    /**
     * Replace each instance of non-ascii characters by one, two, three, or four escape sequences
     * representing the UTF-8 encoding of the character, and return the expanded char code list.
     */
    function getExpandedCharCodes(input) {
        const output = [];
        const length = input.length;
        for (let i = 0; i < length; i++) {
            const charCode = input.charCodeAt(i);
            // handle utf8
            if (charCode < 0x80) {
                output.push(charCode);
            }
            else if (charCode < 0x800) {
                output.push((charCode >> 6) | 0B11000000);
                output.push((charCode & 0B00111111) | 0B10000000);
            }
            else if (charCode < 0x10000) {
                output.push((charCode >> 12) | 0B11100000);
                output.push(((charCode >> 6) & 0B00111111) | 0B10000000);
                output.push((charCode & 0B00111111) | 0B10000000);
            }
            else if (charCode < 0x20000) {
                output.push((charCode >> 18) | 0B11110000);
                output.push(((charCode >> 12) & 0B00111111) | 0B10000000);
                output.push(((charCode >> 6) & 0B00111111) | 0B10000000);
                output.push((charCode & 0B00111111) | 0B10000000);
            }
            else {
                __exports__Debug.assert(false, "Unexpected code point");
            }
        }
        return output;
    }
    const base64Digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    /**
     * Converts a string to a base-64 encoded ASCII string.
     */
    function convertToBase64(input) {
        let result = "";
        const charCodes = getExpandedCharCodes(input);
        let i = 0;
        const length = charCodes.length;
        let byte1, byte2, byte3, byte4;
        while (i < length) {
            // Convert every 6-bits in the input 3 character points
            // into a base64 digit
            byte1 = charCodes[i] >> 2;
            byte2 = (charCodes[i] & 0B00000011) << 4 | charCodes[i + 1] >> 4;
            byte3 = (charCodes[i + 1] & 0B00001111) << 2 | charCodes[i + 2] >> 6;
            byte4 = charCodes[i + 2] & 0B00111111;
            // We are out of characters in the input, set the extra
            // digits to 64 (padding character).
            if (i + 1 >= length) {
                byte3 = byte4 = 64;
            }
            else if (i + 2 >= length) {
                byte4 = 64;
            }
            // Write to the output
            result += base64Digits.charAt(byte1) + base64Digits.charAt(byte2) + base64Digits.charAt(byte3) + base64Digits.charAt(byte4);
            i += 3;
        }
        return result;
    }
    __exports__convertToBase64 = convertToBase64;
    function getStringFromExpandedCharCodes(codes) {
        let output = "";
        let i = 0;
        const length = codes.length;
        while (i < length) {
            const charCode = codes[i];
            if (charCode < 0x80) {
                output += String.fromCharCode(charCode);
                i++;
            }
            else if ((charCode & 0B11000000) === 0B11000000) {
                let value = charCode & 0B00111111;
                i++;
                let nextCode = codes[i];
                while ((nextCode & 0B11000000) === 0B10000000) {
                    value = (value << 6) | (nextCode & 0B00111111);
                    i++;
                    nextCode = codes[i];
                }
                // `value` may be greater than 10FFFF (the maximum unicode codepoint) - JS will just make this into an invalid character for us
                output += String.fromCharCode(value);
            }
            else {
                // We don't want to kill the process when decoding fails (due to a following char byte not
                // following a leading char), so we just print the (bad) value
                output += String.fromCharCode(charCode);
                i++;
            }
        }
        return output;
    }
    function base64encode(host, input) {
        if (host && host.base64encode) {
            return host.base64encode(input);
        }
        return convertToBase64(input);
    }
    __exports__base64encode = base64encode;
    function base64decode(host, input) {
        if (host && host.base64decode) {
            return host.base64decode(input);
        }
        const length = input.length;
        const expandedCharCodes = [];
        let i = 0;
        while (i < length) {
            // Stop decoding once padding characters are present
            if (input.charCodeAt(i) === base64Digits.charCodeAt(64)) {
                break;
            }
            // convert 4 input digits into three characters, ignoring padding characters at the end
            const ch1 = base64Digits.indexOf(input[i]);
            const ch2 = base64Digits.indexOf(input[i + 1]);
            const ch3 = base64Digits.indexOf(input[i + 2]);
            const ch4 = base64Digits.indexOf(input[i + 3]);
            const code1 = ((ch1 & 0B00111111) << 2) | ((ch2 >> 4) & 0B00000011);
            const code2 = ((ch2 & 0B00001111) << 4) | ((ch3 >> 2) & 0B00001111);
            const code3 = ((ch3 & 0B00000011) << 6) | (ch4 & 0B00111111);
            if (code2 === 0 && ch3 !== 0) { // code2 decoded to zero, but ch3 was padding - elide code2 and code3
                expandedCharCodes.push(code1);
            }
            else if (code3 === 0 && ch4 !== 0) { // code3 decoded to zero, but ch4 was padding, elide code3
                expandedCharCodes.push(code1, code2);
            }
            else {
                expandedCharCodes.push(code1, code2, code3);
            }
            i += 4;
        }
        return getStringFromExpandedCharCodes(expandedCharCodes);
    }
    __exports__base64decode = base64decode;
    function readJson(path, host) {
        try {
            const jsonText = host.readFile(path);
            if (!jsonText)
                return {};
            const result = parseConfigFileTextToJson(path, jsonText);
            if (result.error) {
                return {};
            }
            return result.config;
        }
        catch (e) {
            // gracefully handle if readFile fails or returns not JSON
            return {};
        }
    }
    __exports__readJson = readJson;
    function directoryProbablyExists(directoryName, host) {
        // if host does not support 'directoryExists' assume that directory will exist
        return !host.directoryExists || host.directoryExists(directoryName);
    }
    __exports__directoryProbablyExists = directoryProbablyExists;
    const carriageReturnLineFeed = "\r\n";
    const lineFeed = "\n";
    function getNewLineCharacter(options, getNewLine) {
        switch (options.newLine) {
            case 0 /* CarriageReturnLineFeed */:
                return carriageReturnLineFeed;
            case 1 /* LineFeed */:
                return lineFeed;
        }
        return getNewLine ? getNewLine() : __exports__sys ? __exports__sys.newLine : carriageReturnLineFeed;
    }
    __exports__getNewLineCharacter = getNewLineCharacter;
    /**
     * Creates a new TextRange from the provided pos and end.
     *
     * @param pos The start position.
     * @param end The end position.
     */
    function createRange(pos, end = pos) {
        __exports__Debug.assert(end >= pos || end === -1);
        return { pos, end };
    }
    __exports__createRange = createRange;
    /**
     * Creates a new TextRange from a provided range with a new end position.
     *
     * @param range A TextRange.
     * @param end The new end position.
     */
    function moveRangeEnd(range, end) {
        return createRange(range.pos, end);
    }
    __exports__moveRangeEnd = moveRangeEnd;
    /**
     * Creates a new TextRange from a provided range with a new start position.
     *
     * @param range A TextRange.
     * @param pos The new Start position.
     */
    function moveRangePos(range, pos) {
        return createRange(pos, range.end);
    }
    __exports__moveRangePos = moveRangePos;
    /**
     * Moves the start position of a range past any decorators.
     */
    function moveRangePastDecorators(node) {
        return node.decorators && node.decorators.length > 0
            ? moveRangePos(node, node.decorators.end)
            : node;
    }
    __exports__moveRangePastDecorators = moveRangePastDecorators;
    /**
     * Moves the start position of a range past any decorators or modifiers.
     */
    function moveRangePastModifiers(node) {
        return node.modifiers && node.modifiers.length > 0
            ? moveRangePos(node, node.modifiers.end)
            : moveRangePastDecorators(node);
    }
    __exports__moveRangePastModifiers = moveRangePastModifiers;
    /**
     * Determines whether a TextRange has the same start and end positions.
     *
     * @param range A TextRange.
     */
    function isCollapsedRange(range) {
        return range.pos === range.end;
    }
    __exports__isCollapsedRange = isCollapsedRange;
    /**
     * Creates a new TextRange for a token at the provides start position.
     *
     * @param pos The start position.
     * @param token The token.
     */
    function createTokenRange(pos, token) {
        return createRange(pos, pos + tokenToString(token).length);
    }
    __exports__createTokenRange = createTokenRange;
    function rangeIsOnSingleLine(range, sourceFile) {
        return rangeStartIsOnSameLineAsRangeEnd(range, range, sourceFile);
    }
    __exports__rangeIsOnSingleLine = rangeIsOnSingleLine;
    function rangeStartPositionsAreOnSameLine(range1, range2, sourceFile) {
        return positionsAreOnSameLine(getStartPositionOfRange(range1, sourceFile, /*includeComments*/ false), getStartPositionOfRange(range2, sourceFile, /*includeComments*/ false), sourceFile);
    }
    __exports__rangeStartPositionsAreOnSameLine = rangeStartPositionsAreOnSameLine;
    function rangeEndPositionsAreOnSameLine(range1, range2, sourceFile) {
        return positionsAreOnSameLine(range1.end, range2.end, sourceFile);
    }
    __exports__rangeEndPositionsAreOnSameLine = rangeEndPositionsAreOnSameLine;
    function rangeStartIsOnSameLineAsRangeEnd(range1, range2, sourceFile) {
        return positionsAreOnSameLine(getStartPositionOfRange(range1, sourceFile, /*includeComments*/ false), range2.end, sourceFile);
    }
    __exports__rangeStartIsOnSameLineAsRangeEnd = rangeStartIsOnSameLineAsRangeEnd;
    function rangeEndIsOnSameLineAsRangeStart(range1, range2, sourceFile) {
        return positionsAreOnSameLine(range1.end, getStartPositionOfRange(range2, sourceFile, /*includeComments*/ false), sourceFile);
    }
    __exports__rangeEndIsOnSameLineAsRangeStart = rangeEndIsOnSameLineAsRangeStart;
    function getLinesBetweenRangeEndAndRangeStart(range1, range2, sourceFile, includeSecondRangeComments) {
        const range2Start = getStartPositionOfRange(range2, sourceFile, includeSecondRangeComments);
        return getLinesBetweenPositions(sourceFile, range1.end, range2Start);
    }
    __exports__getLinesBetweenRangeEndAndRangeStart = getLinesBetweenRangeEndAndRangeStart;
    function getLinesBetweenRangeEndPositions(range1, range2, sourceFile) {
        return getLinesBetweenPositions(sourceFile, range1.end, range2.end);
    }
    __exports__getLinesBetweenRangeEndPositions = getLinesBetweenRangeEndPositions;
    function isNodeArrayMultiLine(list, sourceFile) {
        return !positionsAreOnSameLine(list.pos, list.end, sourceFile);
    }
    __exports__isNodeArrayMultiLine = isNodeArrayMultiLine;
    function positionsAreOnSameLine(pos1, pos2, sourceFile) {
        return getLinesBetweenPositions(sourceFile, pos1, pos2) === 0;
    }
    __exports__positionsAreOnSameLine = positionsAreOnSameLine;
    function getStartPositionOfRange(range, sourceFile, includeComments) {
        return positionIsSynthesized(range.pos) ? -1 : skipTrivia(sourceFile.text, range.pos, /*stopAfterLineBreak*/ false, includeComments);
    }
    __exports__getStartPositionOfRange = getStartPositionOfRange;
    function getLinesBetweenPositionAndPrecedingNonWhitespaceCharacter(pos, stopPos, sourceFile, includeComments) {
        const startPos = skipTrivia(sourceFile.text, pos, /*stopAfterLineBreak*/ false, includeComments);
        const prevPos = getPreviousNonWhitespacePosition(startPos, stopPos, sourceFile);
        return getLinesBetweenPositions(sourceFile, prevPos ?? stopPos, startPos);
    }
    __exports__getLinesBetweenPositionAndPrecedingNonWhitespaceCharacter = getLinesBetweenPositionAndPrecedingNonWhitespaceCharacter;
    function getLinesBetweenPositionAndNextNonWhitespaceCharacter(pos, stopPos, sourceFile, includeComments) {
        const nextPos = skipTrivia(sourceFile.text, pos, /*stopAfterLineBreak*/ false, includeComments);
        return getLinesBetweenPositions(sourceFile, pos, Math.min(stopPos, nextPos));
    }
    __exports__getLinesBetweenPositionAndNextNonWhitespaceCharacter = getLinesBetweenPositionAndNextNonWhitespaceCharacter;
    function getPreviousNonWhitespacePosition(pos, stopPos = 0, sourceFile) {
        while (pos-- > stopPos) {
            if (!isWhiteSpaceLike(sourceFile.text.charCodeAt(pos))) {
                return pos;
            }
        }
    }
    /**
     * Determines whether a name was originally the declaration name of an enum or namespace
     * declaration.
     */
    function isDeclarationNameOfEnumOrNamespace(node) {
        const parseNode = getParseTreeNode(node);
        if (parseNode) {
            switch (parseNode.parent.kind) {
                case 255 /* EnumDeclaration */:
                case 256 /* ModuleDeclaration */:
                    return parseNode === parseNode.parent.name;
            }
        }
        return false;
    }
    __exports__isDeclarationNameOfEnumOrNamespace = isDeclarationNameOfEnumOrNamespace;
    function getInitializedVariables(node) {
        return __exports__filter(node.declarations, isInitializedVariable);
    }
    __exports__getInitializedVariables = getInitializedVariables;
    function isInitializedVariable(node) {
        return node.initializer !== undefined;
    }
    function isWatchSet(options) {
        // Firefox has Object.prototype.watch
        return options.watch && options.hasOwnProperty("watch");
    }
    __exports__isWatchSet = isWatchSet;
    function closeFileWatcher(watcher) {
        watcher.close();
    }
    __exports__closeFileWatcher = closeFileWatcher;
    function getCheckFlags(symbol) {
        return symbol.flags & 33554432 /* Transient */ ? symbol.checkFlags : 0;
    }
    __exports__getCheckFlags = getCheckFlags;
    function getDeclarationModifierFlagsFromSymbol(s) {
        if (s.valueDeclaration) {
            const flags = getCombinedModifierFlags(s.valueDeclaration);
            return s.parent && s.parent.flags & 32 /* Class */ ? flags : flags & ~28 /* AccessibilityModifier */;
        }
        if (getCheckFlags(s) & 6 /* Synthetic */) {
            const checkFlags = s.checkFlags;
            const accessModifier = checkFlags & 1024 /* ContainsPrivate */ ? 8 /* Private */ :
                checkFlags & 256 /* ContainsPublic */ ? 4 /* Public */ :
                    16 /* Protected */;
            const staticModifier = checkFlags & 2048 /* ContainsStatic */ ? 32 /* Static */ : 0;
            return accessModifier | staticModifier;
        }
        if (s.flags & 4194304 /* Prototype */) {
            return 4 /* Public */ | 32 /* Static */;
        }
        return 0;
    }
    __exports__getDeclarationModifierFlagsFromSymbol = getDeclarationModifierFlagsFromSymbol;
    function skipAlias(symbol, checker) {
        return symbol.flags & 2097152 /* Alias */ ? checker.getAliasedSymbol(symbol) : symbol;
    }
    __exports__skipAlias = skipAlias;
    /** See comment on `declareModuleMember` in `binder.ts`. */
    function getCombinedLocalAndExportSymbolFlags(symbol) {
        return symbol.exportSymbol ? symbol.exportSymbol.flags | symbol.flags : symbol.flags;
    }
    __exports__getCombinedLocalAndExportSymbolFlags = getCombinedLocalAndExportSymbolFlags;
    function isWriteOnlyAccess(node) {
        return accessKind(node) === 1 /* Write */;
    }
    __exports__isWriteOnlyAccess = isWriteOnlyAccess;
    function isWriteAccess(node) {
        return accessKind(node) !== 0 /* Read */;
    }
    __exports__isWriteAccess = isWriteAccess;
    function accessKind(node) {
        const { parent } = node;
        if (!parent)
            return 0 /* Read */;
        switch (parent.kind) {
            case 207 /* ParenthesizedExpression */:
                return accessKind(parent);
            case 215 /* PostfixUnaryExpression */:
            case 214 /* PrefixUnaryExpression */:
                const { operator } = parent;
                return operator === 45 /* PlusPlusToken */ || operator === 46 /* MinusMinusToken */ ? writeOrReadWrite() : 0 /* Read */;
            case 216 /* BinaryExpression */:
                const { left, operatorToken } = parent;
                return left === node && isAssignmentOperator(operatorToken.kind) ?
                    operatorToken.kind === 62 /* EqualsToken */ ? 1 /* Write */ : writeOrReadWrite()
                    : 0 /* Read */;
            case 201 /* PropertyAccessExpression */:
                return parent.name !== node ? 0 /* Read */ : accessKind(parent);
            case 288 /* PropertyAssignment */: {
                const parentAccess = accessKind(parent.parent);
                // In `({ x: varname }) = { x: 1 }`, the left `x` is a read, the right `x` is a write.
                return node === parent.name ? reverseAccessKind(parentAccess) : parentAccess;
            }
            case 289 /* ShorthandPropertyAssignment */:
                // Assume it's the local variable being accessed, since we don't check public properties for --noUnusedLocals.
                return node === parent.objectAssignmentInitializer ? 0 /* Read */ : accessKind(parent.parent);
            case 199 /* ArrayLiteralExpression */:
                return accessKind(parent);
            default:
                return 0 /* Read */;
        }
        function writeOrReadWrite() {
            // If grandparent is not an ExpressionStatement, this is used as an expression in addition to having a side effect.
            return parent.parent && skipParenthesesUp(parent.parent).kind === 233 /* ExpressionStatement */ ? 1 /* Write */ : 2 /* ReadWrite */;
        }
    }
    function reverseAccessKind(a) {
        switch (a) {
            case 0 /* Read */:
                return 1 /* Write */;
            case 1 /* Write */:
                return 0 /* Read */;
            case 2 /* ReadWrite */:
                return 2 /* ReadWrite */;
            default:
                return __exports__Debug.assertNever(a);
        }
    }
    function compareDataObjects(dst, src) {
        if (!dst || !src || Object.keys(dst).length !== Object.keys(src).length) {
            return false;
        }
        for (const e in dst) {
            if (typeof dst[e] === "object") {
                if (!compareDataObjects(dst[e], src[e])) {
                    return false;
                }
            }
            else if (typeof dst[e] !== "function") {
                if (dst[e] !== src[e]) {
                    return false;
                }
            }
        }
        return true;
    }
    __exports__compareDataObjects = compareDataObjects;
    /**
     * clears already present map by calling onDeleteExistingValue callback before deleting that key/value
     */
    function clearMap(map, onDeleteValue) {
        // Remove all
        map.forEach(onDeleteValue);
        map.clear();
    }
    __exports__clearMap = clearMap;
    /**
     * Mutates the map with newMap such that keys in map will be same as newMap.
     */
    function mutateMapSkippingNewValues(map, newMap, options) {
        const { onDeleteValue, onExistingValue } = options;
        // Needs update
        map.forEach((existingValue, key) => {
            const valueInNewMap = newMap.get(key);
            // Not present any more in new map, remove it
            if (valueInNewMap === undefined) {
                map.delete(key);
                onDeleteValue(existingValue, key);
            }
            // If present notify about existing values
            else if (onExistingValue) {
                onExistingValue(existingValue, valueInNewMap, key);
            }
        });
    }
    __exports__mutateMapSkippingNewValues = mutateMapSkippingNewValues;
    /**
     * Mutates the map with newMap such that keys in map will be same as newMap.
     */
    function mutateMap(map, newMap, options) {
        // Needs update
        mutateMapSkippingNewValues(map, newMap, options);
        const { createNewValue } = options;
        // Add new values that are not already present
        newMap.forEach((valueInNewMap, key) => {
            if (!map.has(key)) {
                // New values
                map.set(key, createNewValue(key, valueInNewMap));
            }
        });
    }
    __exports__mutateMap = mutateMap;
    function isAbstractConstructorSymbol(symbol) {
        if (symbol.flags & 32 /* Class */) {
            const declaration = getClassLikeDeclarationOfSymbol(symbol);
            return !!declaration && hasSyntacticModifier(declaration, 128 /* Abstract */);
        }
        return false;
    }
    __exports__isAbstractConstructorSymbol = isAbstractConstructorSymbol;
    function getClassLikeDeclarationOfSymbol(symbol) {
        return __exports__find(symbol.declarations, isClassLike);
    }
    __exports__getClassLikeDeclarationOfSymbol = getClassLikeDeclarationOfSymbol;
    function getObjectFlags(type) {
        return type.flags & 3899393 /* ObjectFlagsType */ ? type.objectFlags : 0;
    }
    __exports__getObjectFlags = getObjectFlags;
    function typeHasCallOrConstructSignatures(type, checker) {
        return checker.getSignaturesOfType(type, 0 /* Call */).length !== 0 || checker.getSignaturesOfType(type, 1 /* Construct */).length !== 0;
    }
    __exports__typeHasCallOrConstructSignatures = typeHasCallOrConstructSignatures;
    function forSomeAncestorDirectory(directory, callback) {
        return !!__exports__forEachAncestorDirectory(directory, d => callback(d) ? true : undefined);
    }
    __exports__forSomeAncestorDirectory = forSomeAncestorDirectory;
    function isUMDExportSymbol(symbol) {
        return !!symbol && !!symbol.declarations && !!symbol.declarations[0] && isNamespaceExportDeclaration(symbol.declarations[0]);
    }
    __exports__isUMDExportSymbol = isUMDExportSymbol;
    function showModuleSpecifier({ moduleSpecifier }) {
        return isStringLiteral(moduleSpecifier) ? moduleSpecifier.text : getTextOfNode(moduleSpecifier);
    }
    __exports__showModuleSpecifier = showModuleSpecifier;
    function getLastChild(node) {
        let lastChild;
        forEachChild(node, child => {
            if (nodeIsPresent(child))
                lastChild = child;
        }, children => {
            // As an optimization, jump straight to the end of the list.
            for (let i = children.length - 1; i >= 0; i--) {
                if (nodeIsPresent(children[i])) {
                    lastChild = children[i];
                    break;
                }
            }
        });
        return lastChild;
    }
    __exports__getLastChild = getLastChild;
    function addToSeen(seen, key, value = true) {
        key = String(key);
        if (seen.has(key)) {
            return false;
        }
        seen.set(key, value);
        return true;
    }
    __exports__addToSeen = addToSeen;
    function isObjectTypeDeclaration(node) {
        return isClassLike(node) || isInterfaceDeclaration(node) || isTypeLiteralNode(node);
    }
    __exports__isObjectTypeDeclaration = isObjectTypeDeclaration;
    function isTypeNodeKind(kind) {
        return (kind >= 172 /* FirstTypeNode */ && kind <= 195 /* LastTypeNode */)
            || kind === 128 /* AnyKeyword */
            || kind === 152 /* UnknownKeyword */
            || kind === 144 /* NumberKeyword */
            || kind === 155 /* BigIntKeyword */
            || kind === 145 /* ObjectKeyword */
            || kind === 131 /* BooleanKeyword */
            || kind === 147 /* StringKeyword */
            || kind === 148 /* SymbolKeyword */
            || kind === 113 /* VoidKeyword */
            || kind === 150 /* UndefinedKeyword */
            || kind === 141 /* NeverKeyword */
            || kind === 223 /* ExpressionWithTypeArguments */
            || kind === 303 /* JSDocAllType */
            || kind === 304 /* JSDocUnknownType */
            || kind === 305 /* JSDocNullableType */
            || kind === 306 /* JSDocNonNullableType */
            || kind === 307 /* JSDocOptionalType */
            || kind === 308 /* JSDocFunctionType */
            || kind === 309 /* JSDocVariadicType */;
    }
    __exports__isTypeNodeKind = isTypeNodeKind;
    function isAccessExpression(node) {
        return node.kind === 201 /* PropertyAccessExpression */ || node.kind === 202 /* ElementAccessExpression */;
    }
    __exports__isAccessExpression = isAccessExpression;
    function getNameOfAccessExpression(node) {
        if (node.kind === 201 /* PropertyAccessExpression */) {
            return node.name;
        }
        __exports__Debug.assert(node.kind === 202 /* ElementAccessExpression */);
        return node.argumentExpression;
    }
    __exports__getNameOfAccessExpression = getNameOfAccessExpression;
    function isBundleFileTextLike(section) {
        switch (section.kind) {
            case "text" /* Text */:
            case "internal" /* Internal */:
                return true;
            default:
                return false;
        }
    }
    __exports__isBundleFileTextLike = isBundleFileTextLike;
    function isNamedImportsOrExports(node) {
        return node.kind === 264 /* NamedImports */ || node.kind === 268 /* NamedExports */;
    }
    __exports__isNamedImportsOrExports = isNamedImportsOrExports;
    function getLeftmostAccessExpression(expr) {
        while (isAccessExpression(expr)) {
            expr = expr.expression;
        }
        return expr;
    }
    __exports__getLeftmostAccessExpression = getLeftmostAccessExpression;
    function getLeftmostExpression(node, stopAtCallExpressions) {
        while (true) {
            switch (node.kind) {
                case 215 /* PostfixUnaryExpression */:
                    node = node.operand;
                    continue;
                case 216 /* BinaryExpression */:
                    node = node.left;
                    continue;
                case 217 /* ConditionalExpression */:
                    node = node.condition;
                    continue;
                case 205 /* TaggedTemplateExpression */:
                    node = node.tag;
                    continue;
                case 203 /* CallExpression */:
                    if (stopAtCallExpressions) {
                        return node;
                    }
                // falls through
                case 224 /* AsExpression */:
                case 202 /* ElementAccessExpression */:
                case 201 /* PropertyAccessExpression */:
                case 225 /* NonNullExpression */:
                case 336 /* PartiallyEmittedExpression */:
                    node = node.expression;
                    continue;
            }
            return node;
        }
    }
    __exports__getLeftmostExpression = getLeftmostExpression;
    function Symbol(flags, name) {
        this.flags = flags;
        this.escapedName = name;
        this.declarations = undefined;
        this.valueDeclaration = undefined;
        this.id = undefined;
        this.mergeId = undefined;
        this.parent = undefined;
    }
    function Type(checker, flags) {
        this.flags = flags;
        if (__exports__Debug.isDebugging || __exports__tracing) {
            this.checker = checker;
        }
    }
    function Signature(checker, flags) {
        this.flags = flags;
        if (__exports__Debug.isDebugging) {
            this.checker = checker;
        }
    }
    function Node(kind, pos, end) {
        this.pos = pos;
        this.end = end;
        this.kind = kind;
        this.id = 0;
        this.flags = 0 /* None */;
        this.modifierFlagsCache = 0 /* None */;
        this.transformFlags = 0 /* None */;
        this.parent = undefined;
        this.original = undefined;
    }
    function Token(kind, pos, end) {
        this.pos = pos;
        this.end = end;
        this.kind = kind;
        this.id = 0;
        this.flags = 0 /* None */;
        this.transformFlags = 0 /* None */;
        this.parent = undefined;
    }
    function Identifier(kind, pos, end) {
        this.pos = pos;
        this.end = end;
        this.kind = kind;
        this.id = 0;
        this.flags = 0 /* None */;
        this.transformFlags = 0 /* None */;
        this.parent = undefined;
        this.original = undefined;
        this.flowNode = undefined;
    }
    function SourceMapSource(fileName, text, skipTrivia) {
        this.fileName = fileName;
        this.text = text;
        this.skipTrivia = skipTrivia || (pos => pos);
    }
    // eslint-disable-next-line prefer-const
    __exports__objectAllocator = {
        getNodeConstructor: () => Node,
        getTokenConstructor: () => Token,
        getIdentifierConstructor: () => Identifier,
        getPrivateIdentifierConstructor: () => Node,
        getSourceFileConstructor: () => Node,
        getSymbolConstructor: () => Symbol,
        getTypeConstructor: () => Type,
        getSignatureConstructor: () => Signature,
        getSourceMapSourceConstructor: () => SourceMapSource,
    };
    function setObjectAllocator(alloc) {
        __exports__objectAllocator = alloc;
    }
    __exports__setObjectAllocator = setObjectAllocator;
    function formatStringFromArgs(text, args, baseIndex = 0) {
        return text.replace(/{(\d+)}/g, (_match, index) => "" + __exports__Debug.checkDefined(args[+index + baseIndex]));
    }
    __exports__formatStringFromArgs = formatStringFromArgs;
    /* @internal */
    function setLocalizedDiagnosticMessages(messages) {
        __exports__localizedDiagnosticMessages = messages;
    }
    __exports__setLocalizedDiagnosticMessages = setLocalizedDiagnosticMessages;
    function getLocaleSpecificMessage(message) {
        return __exports__localizedDiagnosticMessages && __exports__localizedDiagnosticMessages[message.key] || message.message;
    }
    __exports__getLocaleSpecificMessage = getLocaleSpecificMessage;
    function createDetachedDiagnostic(fileName, start, length, message) {
        assertDiagnosticLocation(/*file*/ undefined, start, length);
        let text = getLocaleSpecificMessage(message);
        if (arguments.length > 4) {
            text = formatStringFromArgs(text, arguments, 4);
        }
        return {
            file: undefined,
            start,
            length,
            messageText: text,
            category: message.category,
            code: message.code,
            reportsUnnecessary: message.reportsUnnecessary,
            fileName,
        };
    }
    __exports__createDetachedDiagnostic = createDetachedDiagnostic;
    function isDiagnosticWithDetachedLocation(diagnostic) {
        return diagnostic.file === undefined
            && diagnostic.start !== undefined
            && diagnostic.length !== undefined
            && typeof diagnostic.fileName === "string";
    }
    function attachFileToDiagnostic(diagnostic, file) {
        const fileName = file.fileName || "";
        const length = file.text.length;
        __exports__Debug.assertEqual(diagnostic.fileName, fileName);
        __exports__Debug.assertLessThanOrEqual(diagnostic.start, length);
        __exports__Debug.assertLessThanOrEqual(diagnostic.start + diagnostic.length, length);
        const diagnosticWithLocation = {
            file,
            start: diagnostic.start,
            length: diagnostic.length,
            messageText: diagnostic.messageText,
            category: diagnostic.category,
            code: diagnostic.code,
            reportsUnnecessary: diagnostic.reportsUnnecessary
        };
        if (diagnostic.relatedInformation) {
            diagnosticWithLocation.relatedInformation = [];
            for (const related of diagnostic.relatedInformation) {
                if (isDiagnosticWithDetachedLocation(related) && related.fileName === fileName) {
                    __exports__Debug.assertLessThanOrEqual(related.start, length);
                    __exports__Debug.assertLessThanOrEqual(related.start + related.length, length);
                    diagnosticWithLocation.relatedInformation.push(attachFileToDiagnostic(related, file));
                }
                else {
                    diagnosticWithLocation.relatedInformation.push(related);
                }
            }
        }
        return diagnosticWithLocation;
    }
    function attachFileToDiagnostics(diagnostics, file) {
        const diagnosticsWithLocation = [];
        for (const diagnostic of diagnostics) {
            diagnosticsWithLocation.push(attachFileToDiagnostic(diagnostic, file));
        }
        return diagnosticsWithLocation;
    }
    __exports__attachFileToDiagnostics = attachFileToDiagnostics;
    function createFileDiagnostic(file, start, length, message) {
        assertDiagnosticLocation(file, start, length);
        let text = getLocaleSpecificMessage(message);
        if (arguments.length > 4) {
            text = formatStringFromArgs(text, arguments, 4);
        }
        return {
            file,
            start,
            length,
            messageText: text,
            category: message.category,
            code: message.code,
            reportsUnnecessary: message.reportsUnnecessary,
            reportsDeprecated: message.reportsDeprecated
        };
    }
    __exports__createFileDiagnostic = createFileDiagnostic;
    function formatMessage(_dummy, message) {
        let text = getLocaleSpecificMessage(message);
        if (arguments.length > 2) {
            text = formatStringFromArgs(text, arguments, 2);
        }
        return text;
    }
    __exports__formatMessage = formatMessage;
    function createCompilerDiagnostic(message) {
        let text = getLocaleSpecificMessage(message);
        if (arguments.length > 1) {
            text = formatStringFromArgs(text, arguments, 1);
        }
        return {
            file: undefined,
            start: undefined,
            length: undefined,
            messageText: text,
            category: message.category,
            code: message.code,
            reportsUnnecessary: message.reportsUnnecessary,
            reportsDeprecated: message.reportsDeprecated
        };
    }
    __exports__createCompilerDiagnostic = createCompilerDiagnostic;
    function createCompilerDiagnosticFromMessageChain(chain, relatedInformation) {
        return {
            file: undefined,
            start: undefined,
            length: undefined,
            code: chain.code,
            category: chain.category,
            messageText: chain.next ? chain : chain.messageText,
            relatedInformation
        };
    }
    __exports__createCompilerDiagnosticFromMessageChain = createCompilerDiagnosticFromMessageChain;
    function chainDiagnosticMessages(details, message) {
        let text = getLocaleSpecificMessage(message);
        if (arguments.length > 2) {
            text = formatStringFromArgs(text, arguments, 2);
        }
        return {
            messageText: text,
            category: message.category,
            code: message.code,
            next: details === undefined || Array.isArray(details) ? details : [details]
        };
    }
    __exports__chainDiagnosticMessages = chainDiagnosticMessages;
    function concatenateDiagnosticMessageChains(headChain, tailChain) {
        let lastChain = headChain;
        while (lastChain.next) {
            lastChain = lastChain.next[0];
        }
        lastChain.next = [tailChain];
    }
    __exports__concatenateDiagnosticMessageChains = concatenateDiagnosticMessageChains;
    function getDiagnosticFilePath(diagnostic) {
        return diagnostic.file ? diagnostic.file.path : undefined;
    }
    function compareDiagnostics(d1, d2) {
        return compareDiagnosticsSkipRelatedInformation(d1, d2) ||
            compareRelatedInformation(d1, d2) ||
            0 /* EqualTo */;
    }
    __exports__compareDiagnostics = compareDiagnostics;
    function compareDiagnosticsSkipRelatedInformation(d1, d2) {
        return __exports__compareStringsCaseSensitive(getDiagnosticFilePath(d1), getDiagnosticFilePath(d2)) ||
            __exports__compareValues(d1.start, d2.start) ||
            __exports__compareValues(d1.length, d2.length) ||
            __exports__compareValues(d1.code, d2.code) ||
            compareMessageText(d1.messageText, d2.messageText) ||
            0 /* EqualTo */;
    }
    __exports__compareDiagnosticsSkipRelatedInformation = compareDiagnosticsSkipRelatedInformation;
    function compareRelatedInformation(d1, d2) {
        if (!d1.relatedInformation && !d2.relatedInformation) {
            return 0 /* EqualTo */;
        }
        if (d1.relatedInformation && d2.relatedInformation) {
            return __exports__compareValues(d1.relatedInformation.length, d2.relatedInformation.length) || __exports__forEach(d1.relatedInformation, (d1i, index) => {
                const d2i = d2.relatedInformation[index];
                return compareDiagnostics(d1i, d2i); // EqualTo is 0, so falsy, and will cause the next item to be compared
            }) || 0 /* EqualTo */;
        }
        return d1.relatedInformation ? -1 /* LessThan */ : 1 /* GreaterThan */;
    }
    function compareMessageText(t1, t2) {
        if (typeof t1 === "string" && typeof t2 === "string") {
            return __exports__compareStringsCaseSensitive(t1, t2);
        }
        else if (typeof t1 === "string") {
            return -1 /* LessThan */;
        }
        else if (typeof t2 === "string") {
            return 1 /* GreaterThan */;
        }
        let res = __exports__compareStringsCaseSensitive(t1.messageText, t2.messageText);
        if (res) {
            return res;
        }
        if (!t1.next && !t2.next) {
            return 0 /* EqualTo */;
        }
        if (!t1.next) {
            return -1 /* LessThan */;
        }
        if (!t2.next) {
            return 1 /* GreaterThan */;
        }
        const len = Math.min(t1.next.length, t2.next.length);
        for (let i = 0; i < len; i++) {
            res = compareMessageText(t1.next[i], t2.next[i]);
            if (res) {
                return res;
            }
        }
        if (t1.next.length < t2.next.length) {
            return -1 /* LessThan */;
        }
        else if (t1.next.length > t2.next.length) {
            return 1 /* GreaterThan */;
        }
        return 0 /* EqualTo */;
    }
    function getLanguageVariant(scriptKind) {
        // .tsx and .jsx files are treated as jsx language variant.
        return scriptKind === 4 /* TSX */ || scriptKind === 2 /* JSX */ || scriptKind === 1 /* JS */ || scriptKind === 6 /* JSON */ ? 1 /* JSX */ : 0 /* Standard */;
    }
    __exports__getLanguageVariant = getLanguageVariant;
    function getEmitScriptTarget(compilerOptions) {
        return compilerOptions.target || 0 /* ES3 */;
    }
    __exports__getEmitScriptTarget = getEmitScriptTarget;
    function getEmitModuleKind(compilerOptions) {
        return typeof compilerOptions.module === "number" ?
            compilerOptions.module :
            getEmitScriptTarget(compilerOptions) >= 2 /* ES2015 */ ? __exports__ModuleKind.ES2015 : __exports__ModuleKind.CommonJS;
    }
    __exports__getEmitModuleKind = getEmitModuleKind;
    function getEmitModuleResolutionKind(compilerOptions) {
        let moduleResolution = compilerOptions.moduleResolution;
        if (moduleResolution === undefined) {
            moduleResolution = getEmitModuleKind(compilerOptions) === __exports__ModuleKind.CommonJS ? __exports__ModuleResolutionKind.NodeJs : __exports__ModuleResolutionKind.Classic;
        }
        return moduleResolution;
    }
    __exports__getEmitModuleResolutionKind = getEmitModuleResolutionKind;
    function hasJsonModuleEmitEnabled(options) {
        switch (getEmitModuleKind(options)) {
            case __exports__ModuleKind.CommonJS:
            case __exports__ModuleKind.AMD:
            case __exports__ModuleKind.ES2015:
            case __exports__ModuleKind.ES2020:
            case __exports__ModuleKind.ESNext:
                return true;
            default:
                return false;
        }
    }
    __exports__hasJsonModuleEmitEnabled = hasJsonModuleEmitEnabled;
    function unreachableCodeIsError(options) {
        return options.allowUnreachableCode === false;
    }
    __exports__unreachableCodeIsError = unreachableCodeIsError;
    function unusedLabelIsError(options) {
        return options.allowUnusedLabels === false;
    }
    __exports__unusedLabelIsError = unusedLabelIsError;
    function getAreDeclarationMapsEnabled(options) {
        return !!(getEmitDeclarations(options) && options.declarationMap);
    }
    __exports__getAreDeclarationMapsEnabled = getAreDeclarationMapsEnabled;
    function getAllowSyntheticDefaultImports(compilerOptions) {
        const moduleKind = getEmitModuleKind(compilerOptions);
        return compilerOptions.allowSyntheticDefaultImports !== undefined
            ? compilerOptions.allowSyntheticDefaultImports
            : compilerOptions.esModuleInterop ||
                moduleKind === __exports__ModuleKind.System;
    }
    __exports__getAllowSyntheticDefaultImports = getAllowSyntheticDefaultImports;
    function getEmitDeclarations(compilerOptions) {
        return !!(compilerOptions.declaration || compilerOptions.composite);
    }
    __exports__getEmitDeclarations = getEmitDeclarations;
    function shouldPreserveConstEnums(compilerOptions) {
        return !!(compilerOptions.preserveConstEnums || compilerOptions.isolatedModules);
    }
    __exports__shouldPreserveConstEnums = shouldPreserveConstEnums;
    function isIncrementalCompilation(options) {
        return !!(options.incremental || options.composite);
    }
    __exports__isIncrementalCompilation = isIncrementalCompilation;
    function getStrictOptionValue(compilerOptions, flag) {
        return compilerOptions[flag] === undefined ? !!compilerOptions.strict : !!compilerOptions[flag];
    }
    __exports__getStrictOptionValue = getStrictOptionValue;
    function getAllowJSCompilerOption(compilerOptions) {
        return compilerOptions.allowJs === undefined ? !!compilerOptions.checkJs : compilerOptions.allowJs;
    }
    __exports__getAllowJSCompilerOption = getAllowJSCompilerOption;
    function compilerOptionsAffectSemanticDiagnostics(newOptions, oldOptions) {
        return oldOptions !== newOptions &&
            semanticDiagnosticsOptionDeclarations.some(option => !isJsonEqual(getCompilerOptionValue(oldOptions, option), getCompilerOptionValue(newOptions, option)));
    }
    __exports__compilerOptionsAffectSemanticDiagnostics = compilerOptionsAffectSemanticDiagnostics;
    function compilerOptionsAffectEmit(newOptions, oldOptions) {
        return oldOptions !== newOptions &&
            affectsEmitOptionDeclarations.some(option => !isJsonEqual(getCompilerOptionValue(oldOptions, option), getCompilerOptionValue(newOptions, option)));
    }
    __exports__compilerOptionsAffectEmit = compilerOptionsAffectEmit;
    function getCompilerOptionValue(options, option) {
        return option.strictFlag ? getStrictOptionValue(options, option.name) : options[option.name];
    }
    __exports__getCompilerOptionValue = getCompilerOptionValue;
    function getJSXTransformEnabled(options) {
        const jsx = options.jsx;
        return jsx === 2 /* React */ || jsx === 4 /* ReactJSX */ || jsx === 5 /* ReactJSXDev */;
    }
    __exports__getJSXTransformEnabled = getJSXTransformEnabled;
    function getJSXImplicitImportBase(compilerOptions, file) {
        const jsxImportSourcePragmas = file?.pragmas.get("jsximportsource");
        const jsxImportSourcePragma = __exports__isArray(jsxImportSourcePragmas) ? jsxImportSourcePragmas[0] : jsxImportSourcePragmas;
        return compilerOptions.jsx === 4 /* ReactJSX */ ||
            compilerOptions.jsx === 5 /* ReactJSXDev */ ||
            compilerOptions.jsxImportSource ||
            jsxImportSourcePragma ?
            jsxImportSourcePragma?.arguments.factory || compilerOptions.jsxImportSource || "react" :
            undefined;
    }
    __exports__getJSXImplicitImportBase = getJSXImplicitImportBase;
    function getJSXRuntimeImport(base, options) {
        return base ? `${base}/${options.jsx === 5 /* ReactJSXDev */ ? "jsx-dev-runtime" : "jsx-runtime"}` : undefined;
    }
    __exports__getJSXRuntimeImport = getJSXRuntimeImport;
    function hasZeroOrOneAsteriskCharacter(str) {
        let seenAsterisk = false;
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) === 42 /* asterisk */) {
                if (!seenAsterisk) {
                    seenAsterisk = true;
                }
                else {
                    // have already seen asterisk
                    return false;
                }
            }
        }
        return true;
    }
    __exports__hasZeroOrOneAsteriskCharacter = hasZeroOrOneAsteriskCharacter;
    function createSymlinkCache(cwd, getCanonicalFileName) {
        let symlinkedDirectories;
        let symlinkedDirectoriesByRealpath;
        let symlinkedFiles;
        return {
            getSymlinkedFiles: () => symlinkedFiles,
            getSymlinkedDirectories: () => symlinkedDirectories,
            getSymlinkedDirectoriesByRealpath: () => symlinkedDirectoriesByRealpath,
            setSymlinkedFile: (path, real) => (symlinkedFiles || (symlinkedFiles = new __exports__Map())).set(path, real),
            setSymlinkedDirectory: (symlink, real) => {
                // Large, interconnected dependency graphs in pnpm will have a huge number of symlinks
                // where both the realpath and the symlink path are inside node_modules/.pnpm. Since
                // this path is never a candidate for a module specifier, we can ignore it entirely.
                let symlinkPath = __exports__toPath(symlink, cwd, getCanonicalFileName);
                if (!containsIgnoredPath(symlinkPath)) {
                    symlinkPath = __exports__ensureTrailingDirectorySeparator(symlinkPath);
                    if (real !== false && !symlinkedDirectories?.has(symlinkPath)) {
                        (symlinkedDirectoriesByRealpath ||= __exports__createMultiMap()).add(__exports__ensureTrailingDirectorySeparator(real.realPath), symlink);
                    }
                    (symlinkedDirectories || (symlinkedDirectories = new __exports__Map())).set(symlinkPath, real);
                }
            }
        };
    }
    __exports__createSymlinkCache = createSymlinkCache;
    function discoverProbableSymlinks(files, getCanonicalFileName, cwd) {
        const cache = createSymlinkCache(cwd, getCanonicalFileName);
        const symlinks = __exports__flatten(__exports__mapDefined(files, sf => sf.resolvedModules && __exports__compact(__exports__arrayFrom(__exports__mapIterator(sf.resolvedModules.values(), res => res && res.originalPath && res.resolvedFileName !== res.originalPath ? [res.resolvedFileName, res.originalPath] : undefined)))));
        for (const [resolvedPath, originalPath] of symlinks) {
            const [commonResolved, commonOriginal] = guessDirectorySymlink(resolvedPath, originalPath, cwd, getCanonicalFileName) || __exports__emptyArray;
            if (commonResolved && commonOriginal) {
                cache.setSymlinkedDirectory(commonOriginal, { real: commonResolved, realPath: __exports__toPath(commonResolved, cwd, getCanonicalFileName) });
            }
        }
        return cache;
    }
    __exports__discoverProbableSymlinks = discoverProbableSymlinks;
    function guessDirectorySymlink(a, b, cwd, getCanonicalFileName) {
        const aParts = __exports__getPathComponents(__exports__getNormalizedAbsolutePath(a, cwd));
        const bParts = __exports__getPathComponents(__exports__getNormalizedAbsolutePath(b, cwd));
        let isDirectory = false;
        while (!isNodeModulesOrScopedPackageDirectory(aParts[aParts.length - 2], getCanonicalFileName) &&
            !isNodeModulesOrScopedPackageDirectory(bParts[bParts.length - 2], getCanonicalFileName) &&
            getCanonicalFileName(aParts[aParts.length - 1]) === getCanonicalFileName(bParts[bParts.length - 1])) {
            aParts.pop();
            bParts.pop();
            isDirectory = true;
        }
        return isDirectory ? [__exports__getPathFromPathComponents(aParts), __exports__getPathFromPathComponents(bParts)] : undefined;
    }
    // KLUDGE: Don't assume one 'node_modules' links to another. More likely a single directory inside the node_modules is the symlink.
    // ALso, don't assume that an `@foo` directory is linked. More likely the contents of that are linked.
    function isNodeModulesOrScopedPackageDirectory(s, getCanonicalFileName) {
        return getCanonicalFileName(s) === "node_modules" || __exports__startsWith(s, "@");
    }
    function stripLeadingDirectorySeparator(s) {
        return __exports__isAnyDirectorySeparator(s.charCodeAt(0)) ? s.slice(1) : undefined;
    }
    function tryRemoveDirectoryPrefix(path, dirPath, getCanonicalFileName) {
        const withoutPrefix = __exports__tryRemovePrefix(path, dirPath, getCanonicalFileName);
        return withoutPrefix === undefined ? undefined : stripLeadingDirectorySeparator(withoutPrefix);
    }
    __exports__tryRemoveDirectoryPrefix = tryRemoveDirectoryPrefix;
    // Reserved characters, forces escaping of any non-word (or digit), non-whitespace character.
    // It may be inefficient (we could just match (/[-[\]{}()*+?.,\\^$|#\s]/g), but this is future
    // proof.
    const reservedCharacterPattern = /[^\w\s\/]/g;
    function regExpEscape(text) {
        return text.replace(reservedCharacterPattern, escapeRegExpCharacter);
    }
    __exports__regExpEscape = regExpEscape;
    function escapeRegExpCharacter(match) {
        return "\\" + match;
    }
    const wildcardCharCodes = [42 /* asterisk */, 63 /* question */];
    __exports__commonPackageFolders = ["node_modules", "bower_components", "jspm_packages"];
    const implicitExcludePathRegexPattern = `(?!(${__exports__commonPackageFolders.join("|")})(/|$))`;
    const filesMatcher = {
        /**
         * Matches any single directory segment unless it is the last segment and a .min.js file
         * Breakdown:
         *  [^./]                   # matches everything up to the first . character (excluding directory separators)
         *  (\\.(?!min\\.js$))?     # matches . characters but not if they are part of the .min.js file extension
         */
        singleAsteriskRegexFragment: "([^./]|(\\.(?!min\\.js$))?)*",
        /**
         * Regex for the ** wildcard. Matches any number of subdirectories. When used for including
         * files or directories, does not match subdirectories that start with a . character
         */
        doubleAsteriskRegexFragment: `(/${implicitExcludePathRegexPattern}[^/.][^/]*)*?`,
        replaceWildcardCharacter: match => replaceWildcardCharacter(match, filesMatcher.singleAsteriskRegexFragment)
    };
    const directoriesMatcher = {
        singleAsteriskRegexFragment: "[^/]*",
        /**
         * Regex for the ** wildcard. Matches any number of subdirectories. When used for including
         * files or directories, does not match subdirectories that start with a . character
         */
        doubleAsteriskRegexFragment: `(/${implicitExcludePathRegexPattern}[^/.][^/]*)*?`,
        replaceWildcardCharacter: match => replaceWildcardCharacter(match, directoriesMatcher.singleAsteriskRegexFragment)
    };
    const excludeMatcher = {
        singleAsteriskRegexFragment: "[^/]*",
        doubleAsteriskRegexFragment: "(/.+?)?",
        replaceWildcardCharacter: match => replaceWildcardCharacter(match, excludeMatcher.singleAsteriskRegexFragment)
    };
    const wildcardMatchers = {
        files: filesMatcher,
        directories: directoriesMatcher,
        exclude: excludeMatcher
    };
    function getRegularExpressionForWildcard(specs, basePath, usage) {
        const patterns = getRegularExpressionsForWildcards(specs, basePath, usage);
        if (!patterns || !patterns.length) {
            return undefined;
        }
        const pattern = patterns.map(pattern => `(${pattern})`).join("|");
        // If excluding, match "foo/bar/baz...", but if including, only allow "foo".
        const terminator = usage === "exclude" ? "($|/)" : "$";
        return `^(${pattern})${terminator}`;
    }
    __exports__getRegularExpressionForWildcard = getRegularExpressionForWildcard;
    function getRegularExpressionsForWildcards(specs, basePath, usage) {
        if (specs === undefined || specs.length === 0) {
            return undefined;
        }
        return __exports__flatMap(specs, spec => spec && getSubPatternFromSpec(spec, basePath, usage, wildcardMatchers[usage]));
    }
    __exports__getRegularExpressionsForWildcards = getRegularExpressionsForWildcards;
    /**
     * An "includes" path "foo" is implicitly a glob "foo/** /*" (without the space) if its last component has no extension,
     * and does not contain any glob characters itself.
     */
    function isImplicitGlob(lastPathComponent) {
        return !/[.*?]/.test(lastPathComponent);
    }
    __exports__isImplicitGlob = isImplicitGlob;
    function getPatternFromSpec(spec, basePath, usage) {
        const pattern = spec && getSubPatternFromSpec(spec, basePath, usage, wildcardMatchers[usage]);
        return pattern && `^(${pattern})${usage === "exclude" ? "($|/)" : "$"}`;
    }
    __exports__getPatternFromSpec = getPatternFromSpec;
    function getSubPatternFromSpec(spec, basePath, usage, { singleAsteriskRegexFragment, doubleAsteriskRegexFragment, replaceWildcardCharacter }) {
        let subpattern = "";
        let hasWrittenComponent = false;
        const components = __exports__getNormalizedPathComponents(spec, basePath);
        const lastComponent = __exports__last(components);
        if (usage !== "exclude" && lastComponent === "**") {
            return undefined;
        }
        // getNormalizedPathComponents includes the separator for the root component.
        // We need to remove to create our regex correctly.
        components[0] = __exports__removeTrailingDirectorySeparator(components[0]);
        if (isImplicitGlob(lastComponent)) {
            components.push("**", "*");
        }
        let optionalCount = 0;
        for (let component of components) {
            if (component === "**") {
                subpattern += doubleAsteriskRegexFragment;
            }
            else {
                if (usage === "directories") {
                    subpattern += "(";
                    optionalCount++;
                }
                if (hasWrittenComponent) {
                    subpattern += __exports__directorySeparator;
                }
                if (usage !== "exclude") {
                    let componentPattern = "";
                    // The * and ? wildcards should not match directories or files that start with . if they
                    // appear first in a component. Dotted directories and files can be included explicitly
                    // like so: **/.*/.*
                    if (component.charCodeAt(0) === 42 /* asterisk */) {
                        componentPattern += "([^./]" + singleAsteriskRegexFragment + ")?";
                        component = component.substr(1);
                    }
                    else if (component.charCodeAt(0) === 63 /* question */) {
                        componentPattern += "[^./]";
                        component = component.substr(1);
                    }
                    componentPattern += component.replace(reservedCharacterPattern, replaceWildcardCharacter);
                    // Patterns should not include subfolders like node_modules unless they are
                    // explicitly included as part of the path.
                    //
                    // As an optimization, if the component pattern is the same as the component,
                    // then there definitely were no wildcard characters and we do not need to
                    // add the exclusion pattern.
                    if (componentPattern !== component) {
                        subpattern += implicitExcludePathRegexPattern;
                    }
                    subpattern += componentPattern;
                }
                else {
                    subpattern += component.replace(reservedCharacterPattern, replaceWildcardCharacter);
                }
            }
            hasWrittenComponent = true;
        }
        while (optionalCount > 0) {
            subpattern += ")?";
            optionalCount--;
        }
        return subpattern;
    }
    function replaceWildcardCharacter(match, singleAsteriskRegexFragment) {
        return match === "*" ? singleAsteriskRegexFragment : match === "?" ? "[^/]" : "\\" + match;
    }
    /** @param path directory of the tsconfig.json */
    function getFileMatcherPatterns(path, excludes, includes, useCaseSensitiveFileNames, currentDirectory) {
        path = __exports__normalizePath(path);
        currentDirectory = __exports__normalizePath(currentDirectory);
        const absolutePath = __exports__combinePaths(currentDirectory, path);
        return {
            includeFilePatterns: __exports__map(getRegularExpressionsForWildcards(includes, absolutePath, "files"), pattern => `^${pattern}$`),
            includeFilePattern: getRegularExpressionForWildcard(includes, absolutePath, "files"),
            includeDirectoryPattern: getRegularExpressionForWildcard(includes, absolutePath, "directories"),
            excludePattern: getRegularExpressionForWildcard(excludes, absolutePath, "exclude"),
            basePaths: getBasePaths(path, includes, useCaseSensitiveFileNames)
        };
    }
    __exports__getFileMatcherPatterns = getFileMatcherPatterns;
    function getRegexFromPattern(pattern, useCaseSensitiveFileNames) {
        return new RegExp(pattern, useCaseSensitiveFileNames ? "" : "i");
    }
    __exports__getRegexFromPattern = getRegexFromPattern;
    /** @param path directory of the tsconfig.json */
    function matchFiles(path, extensions, excludes, includes, useCaseSensitiveFileNames, currentDirectory, depth, getFileSystemEntries, realpath) {
        path = __exports__normalizePath(path);
        currentDirectory = __exports__normalizePath(currentDirectory);
        const patterns = getFileMatcherPatterns(path, excludes, includes, useCaseSensitiveFileNames, currentDirectory);
        const includeFileRegexes = patterns.includeFilePatterns && patterns.includeFilePatterns.map(pattern => getRegexFromPattern(pattern, useCaseSensitiveFileNames));
        const includeDirectoryRegex = patterns.includeDirectoryPattern && getRegexFromPattern(patterns.includeDirectoryPattern, useCaseSensitiveFileNames);
        const excludeRegex = patterns.excludePattern && getRegexFromPattern(patterns.excludePattern, useCaseSensitiveFileNames);
        // Associate an array of results with each include regex. This keeps results in order of the "include" order.
        // If there are no "includes", then just put everything in results[0].
        const results = includeFileRegexes ? includeFileRegexes.map(() => []) : [[]];
        const visited = new __exports__Map();
        const toCanonical = __exports__createGetCanonicalFileName(useCaseSensitiveFileNames);
        for (const basePath of patterns.basePaths) {
            visitDirectory(basePath, __exports__combinePaths(currentDirectory, basePath), depth);
        }
        return __exports__flatten(results);
        function visitDirectory(path, absolutePath, depth) {
            const canonicalPath = toCanonical(realpath(absolutePath));
            if (visited.has(canonicalPath))
                return;
            visited.set(canonicalPath, true);
            const { files, directories } = getFileSystemEntries(path);
            for (const current of __exports__sort(files, __exports__compareStringsCaseSensitive)) {
                const name = __exports__combinePaths(path, current);
                const absoluteName = __exports__combinePaths(absolutePath, current);
                if (extensions && !__exports__fileExtensionIsOneOf(name, extensions))
                    continue;
                if (excludeRegex && excludeRegex.test(absoluteName))
                    continue;
                if (!includeFileRegexes) {
                    results[0].push(name);
                }
                else {
                    const includeIndex = __exports__findIndex(includeFileRegexes, re => re.test(absoluteName));
                    if (includeIndex !== -1) {
                        results[includeIndex].push(name);
                    }
                }
            }
            if (depth !== undefined) {
                depth--;
                if (depth === 0) {
                    return;
                }
            }
            for (const current of __exports__sort(directories, __exports__compareStringsCaseSensitive)) {
                const name = __exports__combinePaths(path, current);
                const absoluteName = __exports__combinePaths(absolutePath, current);
                if ((!includeDirectoryRegex || includeDirectoryRegex.test(absoluteName)) &&
                    (!excludeRegex || !excludeRegex.test(absoluteName))) {
                    visitDirectory(name, absoluteName, depth);
                }
            }
        }
    }
    __exports__matchFiles = matchFiles;
    /**
     * Computes the unique non-wildcard base paths amongst the provided include patterns.
     */
    function getBasePaths(path, includes, useCaseSensitiveFileNames) {
        // Storage for our results in the form of literal paths (e.g. the paths as written by the user).
        const basePaths = [path];
        if (includes) {
            // Storage for literal base paths amongst the include patterns.
            const includeBasePaths = [];
            for (const include of includes) {
                // We also need to check the relative paths by converting them to absolute and normalizing
                // in case they escape the base path (e.g "..\somedirectory")
                const absolute = __exports__isRootedDiskPath(include) ? include : __exports__normalizePath(__exports__combinePaths(path, include));
                // Append the literal and canonical candidate base paths.
                includeBasePaths.push(getIncludeBasePath(absolute));
            }
            // Sort the offsets array using either the literal or canonical path representations.
            includeBasePaths.sort(__exports__getStringComparer(!useCaseSensitiveFileNames));
            // Iterate over each include base path and include unique base paths that are not a
            // subpath of an existing base path
            for (const includeBasePath of includeBasePaths) {
                if (__exports__every(basePaths, basePath => !__exports__containsPath(basePath, includeBasePath, path, !useCaseSensitiveFileNames))) {
                    basePaths.push(includeBasePath);
                }
            }
        }
        return basePaths;
    }
    function getIncludeBasePath(absolute) {
        const wildcardOffset = __exports__indexOfAnyCharCode(absolute, wildcardCharCodes);
        if (wildcardOffset < 0) {
            // No "*" or "?" in the path
            return !__exports__hasExtension(absolute)
                ? absolute
                : __exports__removeTrailingDirectorySeparator(__exports__getDirectoryPath(absolute));
        }
        return absolute.substring(0, absolute.lastIndexOf(__exports__directorySeparator, wildcardOffset));
    }
    function ensureScriptKind(fileName, scriptKind) {
        // Using scriptKind as a condition handles both:
        // - 'scriptKind' is unspecified and thus it is `undefined`
        // - 'scriptKind' is set and it is `Unknown` (0)
        // If the 'scriptKind' is 'undefined' or 'Unknown' then we attempt
        // to get the ScriptKind from the file name. If it cannot be resolved
        // from the file name then the default 'TS' script kind is returned.
        return scriptKind || getScriptKindFromFileName(fileName) || 3 /* TS */;
    }
    __exports__ensureScriptKind = ensureScriptKind;
    function getScriptKindFromFileName(fileName) {
        const ext = fileName.substr(fileName.lastIndexOf("."));
        switch (ext.toLowerCase()) {
            case ".js" /* Js */:
                return 1 /* JS */;
            case ".jsx" /* Jsx */:
                return 2 /* JSX */;
            case ".ts" /* Ts */:
                return 3 /* TS */;
            case ".tsx" /* Tsx */:
                return 4 /* TSX */;
            case ".json" /* Json */:
                return 6 /* JSON */;
            default:
                return 0 /* Unknown */;
        }
    }
    __exports__getScriptKindFromFileName = getScriptKindFromFileName;
    /**
     *  List of supported extensions in order of file resolution precedence.
     */
    __exports__supportedTSExtensions = [".ts" /* Ts */, ".tsx" /* Tsx */, ".d.ts" /* Dts */];
    __exports__supportedTSExtensionsWithJson = [".ts" /* Ts */, ".tsx" /* Tsx */, ".d.ts" /* Dts */, ".json" /* Json */];
    /** Must have ".d.ts" first because if ".ts" goes first, that will be detected as the extension instead of ".d.ts". */
    __exports__supportedTSExtensionsForExtractExtension = [".d.ts" /* Dts */, ".ts" /* Ts */, ".tsx" /* Tsx */];
    __exports__supportedJSExtensions = [".js" /* Js */, ".jsx" /* Jsx */];
    __exports__supportedJSAndJsonExtensions = [".js" /* Js */, ".jsx" /* Jsx */, ".json" /* Json */];
    const allSupportedExtensions = [...__exports__supportedTSExtensions, ...__exports__supportedJSExtensions];
    const allSupportedExtensionsWithJson = [...__exports__supportedTSExtensions, ...__exports__supportedJSExtensions, ".json" /* Json */];
    function getSupportedExtensions(options, extraFileExtensions) {
        const needJsExtensions = options && getAllowJSCompilerOption(options);
        if (!extraFileExtensions || extraFileExtensions.length === 0) {
            return needJsExtensions ? allSupportedExtensions : __exports__supportedTSExtensions;
        }
        const extensions = [
            ...needJsExtensions ? allSupportedExtensions : __exports__supportedTSExtensions,
            ...__exports__mapDefined(extraFileExtensions, x => x.scriptKind === 7 /* Deferred */ || needJsExtensions && isJSLike(x.scriptKind) ? x.extension : undefined)
        ];
        return __exports__deduplicate(extensions, __exports__equateStringsCaseSensitive, __exports__compareStringsCaseSensitive);
    }
    __exports__getSupportedExtensions = getSupportedExtensions;
    function getSuppoertedExtensionsWithJsonIfResolveJsonModule(options, supportedExtensions) {
        if (!options || !options.resolveJsonModule) {
            return supportedExtensions;
        }
        if (supportedExtensions === allSupportedExtensions) {
            return allSupportedExtensionsWithJson;
        }
        if (supportedExtensions === __exports__supportedTSExtensions) {
            return __exports__supportedTSExtensionsWithJson;
        }
        return [...supportedExtensions, ".json" /* Json */];
    }
    __exports__getSuppoertedExtensionsWithJsonIfResolveJsonModule = getSuppoertedExtensionsWithJsonIfResolveJsonModule;
    function isJSLike(scriptKind) {
        return scriptKind === 1 /* JS */ || scriptKind === 2 /* JSX */;
    }
    function hasJSFileExtension(fileName) {
        return __exports__some(__exports__supportedJSExtensions, extension => __exports__fileExtensionIs(fileName, extension));
    }
    __exports__hasJSFileExtension = hasJSFileExtension;
    function hasTSFileExtension(fileName) {
        return __exports__some(__exports__supportedTSExtensions, extension => __exports__fileExtensionIs(fileName, extension));
    }
    __exports__hasTSFileExtension = hasTSFileExtension;
    function isSupportedSourceFileName(fileName, compilerOptions, extraFileExtensions) {
        if (!fileName) {
            return false;
        }
        const supportedExtensions = getSupportedExtensions(compilerOptions, extraFileExtensions);
        for (const extension of getSuppoertedExtensionsWithJsonIfResolveJsonModule(compilerOptions, supportedExtensions)) {
            if (__exports__fileExtensionIs(fileName, extension)) {
                return true;
            }
        }
        return false;
    }
    __exports__isSupportedSourceFileName = isSupportedSourceFileName;
    function numberOfDirectorySeparators(str) {
        const match = str.match(/\//g);
        return match ? match.length : 0;
    }
    function compareNumberOfDirectorySeparators(path1, path2) {
        return __exports__compareValues(numberOfDirectorySeparators(path1), numberOfDirectorySeparators(path2));
    }
    __exports__compareNumberOfDirectorySeparators = compareNumberOfDirectorySeparators;
    function getExtensionPriority(path, supportedExtensions) {
        for (let i = supportedExtensions.length - 1; i >= 0; i--) {
            if (__exports__fileExtensionIs(path, supportedExtensions[i])) {
                return adjustExtensionPriority(i, supportedExtensions);
            }
        }
        // If its not in the list of supported extensions, this is likely a
        // TypeScript file with a non-ts extension
        return 0 /* Highest */;
    }
    __exports__getExtensionPriority = getExtensionPriority;
    /**
     * Adjusts an extension priority to be the highest priority within the same range.
     */
    function adjustExtensionPriority(extensionPriority, supportedExtensions) {
        if (extensionPriority < 2 /* DeclarationAndJavaScriptFiles */) {
            return 0 /* TypeScriptFiles */;
        }
        else if (extensionPriority < supportedExtensions.length) {
            return 2 /* DeclarationAndJavaScriptFiles */;
        }
        else {
            return supportedExtensions.length;
        }
    }
    __exports__adjustExtensionPriority = adjustExtensionPriority;
    /**
     * Gets the next lowest extension priority for a given priority.
     */
    function getNextLowestExtensionPriority(extensionPriority, supportedExtensions) {
        if (extensionPriority < 2 /* DeclarationAndJavaScriptFiles */) {
            return 2 /* DeclarationAndJavaScriptFiles */;
        }
        else {
            return supportedExtensions.length;
        }
    }
    __exports__getNextLowestExtensionPriority = getNextLowestExtensionPriority;
    const extensionsToRemove = [".d.ts" /* Dts */, ".ts" /* Ts */, ".js" /* Js */, ".tsx" /* Tsx */, ".jsx" /* Jsx */, ".json" /* Json */];
    function removeFileExtension(path) {
        for (const ext of extensionsToRemove) {
            const extensionless = tryRemoveExtension(path, ext);
            if (extensionless !== undefined) {
                return extensionless;
            }
        }
        return path;
    }
    __exports__removeFileExtension = removeFileExtension;
    function tryRemoveExtension(path, extension) {
        return __exports__fileExtensionIs(path, extension) ? removeExtension(path, extension) : undefined;
    }
    __exports__tryRemoveExtension = tryRemoveExtension;
    function removeExtension(path, extension) {
        return path.substring(0, path.length - extension.length);
    }
    __exports__removeExtension = removeExtension;
    function changeExtension(path, newExtension) {
        return __exports__changeAnyExtension(path, newExtension, extensionsToRemove, /*ignoreCase*/ false);
    }
    __exports__changeExtension = changeExtension;
    function tryParsePattern(pattern) {
        // This should be verified outside of here and a proper error thrown.
        __exports__Debug.assert(hasZeroOrOneAsteriskCharacter(pattern));
        const indexOfStar = pattern.indexOf("*");
        return indexOfStar === -1 ? undefined : {
            prefix: pattern.substr(0, indexOfStar),
            suffix: pattern.substr(indexOfStar + 1)
        };
    }
    __exports__tryParsePattern = tryParsePattern;
    function positionIsSynthesized(pos) {
        // This is a fast way of testing the following conditions:
        //  pos === undefined || pos === null || isNaN(pos) || pos < 0;
        return !(pos >= 0);
    }
    __exports__positionIsSynthesized = positionIsSynthesized;
    /** True if an extension is one of the supported TypeScript extensions. */
    function extensionIsTS(ext) {
        return ext === ".ts" /* Ts */ || ext === ".tsx" /* Tsx */ || ext === ".d.ts" /* Dts */;
    }
    __exports__extensionIsTS = extensionIsTS;
    function resolutionExtensionIsTSOrJson(ext) {
        return extensionIsTS(ext) || ext === ".json" /* Json */;
    }
    __exports__resolutionExtensionIsTSOrJson = resolutionExtensionIsTSOrJson;
    /**
     * Gets the extension from a path.
     * Path must have a valid extension.
     */
    function extensionFromPath(path) {
        const ext = tryGetExtensionFromPath(path);
        return ext !== undefined ? ext : __exports__Debug.fail(`File ${path} has unknown extension.`);
    }
    __exports__extensionFromPath = extensionFromPath;
    function isAnySupportedFileExtension(path) {
        return tryGetExtensionFromPath(path) !== undefined;
    }
    __exports__isAnySupportedFileExtension = isAnySupportedFileExtension;
    function tryGetExtensionFromPath(path) {
        return __exports__find(extensionsToRemove, e => __exports__fileExtensionIs(path, e));
    }
    __exports__tryGetExtensionFromPath = tryGetExtensionFromPath;
    function isCheckJsEnabledForFile(sourceFile, compilerOptions) {
        return sourceFile.checkJsDirective ? sourceFile.checkJsDirective.enabled : compilerOptions.checkJs;
    }
    __exports__isCheckJsEnabledForFile = isCheckJsEnabledForFile;
    __exports__emptyFileSystemEntries = {
        files: __exports__emptyArray,
        directories: __exports__emptyArray
    };
    /**
     * patternStrings contains both pattern strings (containing "*") and regular strings.
     * Return an exact match if possible, or a pattern match, or undefined.
     * (These are verified by verifyCompilerOptions to have 0 or 1 "*" characters.)
     */
    function matchPatternOrExact(patternStrings, candidate) {
        const patterns = [];
        for (const patternString of patternStrings) {
            if (!hasZeroOrOneAsteriskCharacter(patternString))
                continue;
            const pattern = tryParsePattern(patternString);
            if (pattern) {
                patterns.push(pattern);
            }
            else if (patternString === candidate) {
                // pattern was matched as is - no need to search further
                return patternString;
            }
        }
        return __exports__findBestPatternMatch(patterns, _ => _, candidate);
    }
    __exports__matchPatternOrExact = matchPatternOrExact;
    function sliceAfter(arr, value) {
        const index = arr.indexOf(value);
        __exports__Debug.assert(index !== -1);
        return arr.slice(index);
    }
    __exports__sliceAfter = sliceAfter;
    function addRelatedInfo(diagnostic, ...relatedInformation) {
        if (!relatedInformation.length) {
            return diagnostic;
        }
        if (!diagnostic.relatedInformation) {
            diagnostic.relatedInformation = [];
        }
        __exports__Debug.assert(diagnostic.relatedInformation !== __exports__emptyArray, "Diagnostic had empty array singleton for related info, but is still being constructed!");
        diagnostic.relatedInformation.push(...relatedInformation);
        return diagnostic;
    }
    __exports__addRelatedInfo = addRelatedInfo;
    function minAndMax(arr, getValue) {
        __exports__Debug.assert(arr.length !== 0);
        let min = getValue(arr[0]);
        let max = min;
        for (let i = 1; i < arr.length; i++) {
            const value = getValue(arr[i]);
            if (value < min) {
                min = value;
            }
            else if (value > max) {
                max = value;
            }
        }
        return { min, max };
    }
    __exports__minAndMax = minAndMax;
    function rangeOfNode(node) {
        return { pos: getTokenPosOfNode(node), end: node.end };
    }
    __exports__rangeOfNode = rangeOfNode;
    function rangeOfTypeParameters(sourceFile, typeParameters) {
        // Include the `<>`
        const pos = typeParameters.pos - 1;
        const end = skipTrivia(sourceFile.text, typeParameters.end) + 1;
        return { pos, end };
    }
    __exports__rangeOfTypeParameters = rangeOfTypeParameters;
    function skipTypeChecking(sourceFile, options, host) {
        // If skipLibCheck is enabled, skip reporting errors if file is a declaration file.
        // If skipDefaultLibCheck is enabled, skip reporting errors if file contains a
        // '/// <reference no-default-lib="true"/>' directive.
        return (options.skipLibCheck && sourceFile.isDeclarationFile ||
            options.skipDefaultLibCheck && sourceFile.hasNoDefaultLib) ||
            host.isSourceOfProjectReferenceRedirect(sourceFile.fileName);
    }
    __exports__skipTypeChecking = skipTypeChecking;
    function isJsonEqual(a, b) {
        // eslint-disable-next-line no-null/no-null
        return a === b || typeof a === "object" && a !== null && typeof b === "object" && b !== null && __exports__equalOwnProperties(a, b, isJsonEqual);
    }
    __exports__isJsonEqual = isJsonEqual;
    /**
     * Converts a bigint literal string, e.g. `0x1234n`,
     * to its decimal string representation, e.g. `4660`.
     */
    function parsePseudoBigInt(stringValue) {
        let log2Base;
        switch (stringValue.charCodeAt(1)) { // "x" in "0x123"
            case 98 /* b */:
            case 66 /* B */: // 0b or 0B
                log2Base = 1;
                break;
            case 111 /* o */:
            case 79 /* O */: // 0o or 0O
                log2Base = 3;
                break;
            case 120 /* x */:
            case 88 /* X */: // 0x or 0X
                log2Base = 4;
                break;
            default: // already in decimal; omit trailing "n"
                const nIndex = stringValue.length - 1;
                // Skip leading 0s
                let nonZeroStart = 0;
                while (stringValue.charCodeAt(nonZeroStart) === 48 /* _0 */) {
                    nonZeroStart++;
                }
                return stringValue.slice(nonZeroStart, nIndex) || "0";
        }
        // Omit leading "0b", "0o", or "0x", and trailing "n"
        const startIndex = 2, endIndex = stringValue.length - 1;
        const bitsNeeded = (endIndex - startIndex) * log2Base;
        // Stores the value specified by the string as a LE array of 16-bit integers
        // using Uint16 instead of Uint32 so combining steps can use bitwise operators
        const segments = new Uint16Array((bitsNeeded >>> 4) + (bitsNeeded & 15 ? 1 : 0));
        // Add the digits, one at a time
        for (let i = endIndex - 1, bitOffset = 0; i >= startIndex; i--, bitOffset += log2Base) {
            const segment = bitOffset >>> 4;
            const digitChar = stringValue.charCodeAt(i);
            // Find character range: 0-9 < A-F < a-f
            const digit = digitChar <= 57 /* _9 */
                ? digitChar - 48 /* _0 */
                : 10 + digitChar -
                    (digitChar <= 70 /* F */ ? 65 /* A */ : 97 /* a */);
            const shiftedDigit = digit << (bitOffset & 15);
            segments[segment] |= shiftedDigit;
            const residual = shiftedDigit >>> 16;
            if (residual)
                segments[segment + 1] |= residual; // overflows segment
        }
        // Repeatedly divide segments by 10 and add remainder to base10Value
        let base10Value = "";
        let firstNonzeroSegment = segments.length - 1;
        let segmentsRemaining = true;
        while (segmentsRemaining) {
            let mod10 = 0;
            segmentsRemaining = false;
            for (let segment = firstNonzeroSegment; segment >= 0; segment--) {
                const newSegment = mod10 << 16 | segments[segment];
                const segmentValue = (newSegment / 10) | 0;
                segments[segment] = segmentValue;
                mod10 = newSegment - segmentValue * 10;
                if (segmentValue && !segmentsRemaining) {
                    firstNonzeroSegment = segment;
                    segmentsRemaining = true;
                }
            }
            base10Value = mod10 + base10Value;
        }
        return base10Value;
    }
    __exports__parsePseudoBigInt = parsePseudoBigInt;
    function pseudoBigIntToString({ negative, base10Value }) {
        return (negative && base10Value !== "0" ? "-" : "") + base10Value;
    }
    __exports__pseudoBigIntToString = pseudoBigIntToString;
    function isValidTypeOnlyAliasUseSite(useSite) {
        return !!(useSite.flags & 8388608 /* Ambient */)
            || isPartOfTypeQuery(useSite)
            || isIdentifierInNonEmittingHeritageClause(useSite)
            || isPartOfPossiblyValidTypeOrAbstractComputedPropertyName(useSite)
            || !isExpressionNode(useSite);
    }
    __exports__isValidTypeOnlyAliasUseSite = isValidTypeOnlyAliasUseSite;
    function typeOnlyDeclarationIsExport(typeOnlyDeclaration) {
        return typeOnlyDeclaration.kind === 270 /* ExportSpecifier */;
    }
    __exports__typeOnlyDeclarationIsExport = typeOnlyDeclarationIsExport;
    function isPartOfPossiblyValidTypeOrAbstractComputedPropertyName(node) {
        while (node.kind === 78 /* Identifier */ || node.kind === 201 /* PropertyAccessExpression */) {
            node = node.parent;
        }
        if (node.kind !== 158 /* ComputedPropertyName */) {
            return false;
        }
        if (hasSyntacticModifier(node.parent, 128 /* Abstract */)) {
            return true;
        }
        const containerKind = node.parent.parent.kind;
        return containerKind === 253 /* InterfaceDeclaration */ || containerKind === 177 /* TypeLiteral */;
    }
    /** Returns true for an identifier in 1) an `implements` clause, and 2) an `extends` clause of an interface. */
    function isIdentifierInNonEmittingHeritageClause(node) {
        if (node.kind !== 78 /* Identifier */)
            return false;
        const heritageClause = findAncestor(node.parent, parent => {
            switch (parent.kind) {
                case 286 /* HeritageClause */:
                    return true;
                case 201 /* PropertyAccessExpression */:
                case 223 /* ExpressionWithTypeArguments */:
                    return false;
                default:
                    return "quit";
            }
        });
        return heritageClause?.token === 116 /* ImplementsKeyword */ || heritageClause?.parent.kind === 253 /* InterfaceDeclaration */;
    }
    function isIdentifierTypeReference(node) {
        return isTypeReferenceNode(node) && isIdentifier(node.typeName);
    }
    __exports__isIdentifierTypeReference = isIdentifierTypeReference;
    function arrayIsHomogeneous(array, comparer = __exports__equateValues) {
        if (array.length < 2)
            return true;
        const first = array[0];
        for (let i = 1, length = array.length; i < length; i++) {
            const target = array[i];
            if (!comparer(first, target))
                return false;
        }
        return true;
    }
    __exports__arrayIsHomogeneous = arrayIsHomogeneous;
    /**
     * Bypasses immutability and directly sets the `pos` property of a `TextRange` or `Node`.
     */
    /* @internal */
    function setTextRangePos(range, pos) {
        range.pos = pos;
        return range;
    }
    __exports__setTextRangePos = setTextRangePos;
    /**
     * Bypasses immutability and directly sets the `end` property of a `TextRange` or `Node`.
     */
    /* @internal */
    function setTextRangeEnd(range, end) {
        range.end = end;
        return range;
    }
    __exports__setTextRangeEnd = setTextRangeEnd;
    /**
     * Bypasses immutability and directly sets the `pos` and `end` properties of a `TextRange` or `Node`.
     */
    /* @internal */
    function setTextRangePosEnd(range, pos, end) {
        return setTextRangeEnd(setTextRangePos(range, pos), end);
    }
    __exports__setTextRangePosEnd = setTextRangePosEnd;
    /**
     * Bypasses immutability and directly sets the `pos` and `end` properties of a `TextRange` or `Node` from the
     * provided position and width.
     */
    /* @internal */
    function setTextRangePosWidth(range, pos, width) {
        return setTextRangePosEnd(range, pos, pos + width);
    }
    __exports__setTextRangePosWidth = setTextRangePosWidth;
    function setNodeFlags(node, newFlags) {
        if (node) {
            node.flags = newFlags;
        }
        return node;
    }
    __exports__setNodeFlags = setNodeFlags;
    function setParent(child, parent) {
        if (child && parent) {
            child.parent = parent;
        }
        return child;
    }
    __exports__setParent = setParent;
    function setEachParent(children, parent) {
        if (children) {
            for (const child of children) {
                setParent(child, parent);
            }
        }
        return children;
    }
    __exports__setEachParent = setEachParent;
    function setParentRecursive(rootNode, incremental) {
        if (!rootNode)
            return rootNode;
        forEachChildRecursively(rootNode, isJSDocNode(rootNode) ? bindParentToChildIgnoringJSDoc : bindParentToChild);
        return rootNode;
        function bindParentToChildIgnoringJSDoc(child, parent) {
            if (incremental && child.parent === parent) {
                return "skip";
            }
            setParent(child, parent);
        }
        function bindJSDoc(child) {
            if (hasJSDocNodes(child)) {
                for (const doc of child.jsDoc) {
                    bindParentToChildIgnoringJSDoc(doc, child);
                    forEachChildRecursively(doc, bindParentToChildIgnoringJSDoc);
                }
            }
        }
        function bindParentToChild(child, parent) {
            return bindParentToChildIgnoringJSDoc(child, parent) || bindJSDoc(child);
        }
    }
    __exports__setParentRecursive = setParentRecursive;
    function isPackedElement(node) {
        return !isOmittedExpression(node);
    }
    /**
     * Determines whether the provided node is an ArrayLiteralExpression that contains no missing elements.
     */
    function isPackedArrayLiteral(node) {
        return isArrayLiteralExpression(node) && __exports__every(node.elements, isPackedElement);
    }
    __exports__isPackedArrayLiteral = isPackedArrayLiteral;
    /**
     * Indicates whether the result of an `Expression` will be unused.
     *
     * NOTE: This requires a node with a valid `parent` pointer.
     */
    function expressionResultIsUnused(node) {
        __exports__Debug.assertIsDefined(node.parent);
        while (true) {
            const parent = node.parent;
            // walk up parenthesized expressions, but keep a pointer to the top-most parenthesized expression
            if (isParenthesizedExpression(parent)) {
                node = parent;
                continue;
            }
            // result is unused in an expression statement, `void` expression, or the initializer or incrementer of a `for` loop
            if (isExpressionStatement(parent) ||
                isVoidExpression(parent) ||
                isForStatement(parent) && (parent.initializer === node || parent.incrementor === node)) {
                return true;
            }
            if (isCommaListExpression(parent)) {
                // left side of comma is always unused
                if (node !== __exports__last(parent.elements))
                    return true;
                // right side of comma is unused if parent is unused
                node = parent;
                continue;
            }
            if (isBinaryExpression(parent) && parent.operatorToken.kind === 27 /* CommaToken */) {
                // left side of comma is always unused
                if (node === parent.left)
                    return true;
                // right side of comma is unused if parent is unused
                node = parent;
                continue;
            }
            return false;
        }
    }
    __exports__expressionResultIsUnused = expressionResultIsUnused;
    function containsIgnoredPath(path) {
        return __exports__some(__exports__ignoredPaths, p => __exports__stringContains(path, p));
    }
    __exports__containsIgnoredPath = containsIgnoredPath;
}
/* @internal */

{
    function createCachedDirectoryStructureHost(host, currentDirectory, useCaseSensitiveFileNames) {
        if (!host.getDirectories || !host.readDirectory) {
            return undefined;
        }
        const cachedReadDirectoryResult = new __exports__Map();
        const getCanonicalFileName = __exports__createGetCanonicalFileName(useCaseSensitiveFileNames);
        return {
            useCaseSensitiveFileNames,
            fileExists,
            readFile: (path, encoding) => host.readFile(path, encoding),
            directoryExists: host.directoryExists && directoryExists,
            getDirectories,
            readDirectory,
            createDirectory: host.createDirectory && createDirectory,
            writeFile: host.writeFile && writeFile,
            addOrDeleteFileOrDirectory,
            addOrDeleteFile,
            clearCache,
            realpath: host.realpath && realpath
        };
        function toPath(fileName) {
            return ts.toPath(fileName, currentDirectory, getCanonicalFileName);
        }
        function getCachedFileSystemEntries(rootDirPath) {
            return cachedReadDirectoryResult.get(__exports__ensureTrailingDirectorySeparator(rootDirPath));
        }
        function getCachedFileSystemEntriesForBaseDir(path) {
            return getCachedFileSystemEntries(__exports__getDirectoryPath(path));
        }
        function getBaseNameOfFileName(fileName) {
            return __exports__getBaseFileName(__exports__normalizePath(fileName));
        }
        function createCachedFileSystemEntries(rootDir, rootDirPath) {
            const resultFromHost = {
                files: __exports__map(host.readDirectory(rootDir, /*extensions*/ undefined, /*exclude*/ undefined, /*include*/ ["*.*"]), getBaseNameOfFileName) || [],
                directories: host.getDirectories(rootDir) || []
            };
            cachedReadDirectoryResult.set(__exports__ensureTrailingDirectorySeparator(rootDirPath), resultFromHost);
            return resultFromHost;
        }
        /**
         * If the readDirectory result was already cached, it returns that
         * Otherwise gets result from host and caches it.
         * The host request is done under try catch block to avoid caching incorrect result
         */
        function tryReadDirectory(rootDir, rootDirPath) {
            rootDirPath = __exports__ensureTrailingDirectorySeparator(rootDirPath);
            const cachedResult = getCachedFileSystemEntries(rootDirPath);
            if (cachedResult) {
                return cachedResult;
            }
            try {
                return createCachedFileSystemEntries(rootDir, rootDirPath);
            }
            catch (_e) {
                // If there is exception to read directories, dont cache the result and direct the calls to host
                __exports__Debug.assert(!cachedReadDirectoryResult.has(__exports__ensureTrailingDirectorySeparator(rootDirPath)));
                return undefined;
            }
        }
        function fileNameEqual(name1, name2) {
            return getCanonicalFileName(name1) === getCanonicalFileName(name2);
        }
        function hasEntry(entries, name) {
            return __exports__some(entries, file => fileNameEqual(file, name));
        }
        function updateFileSystemEntry(entries, baseName, isValid) {
            if (hasEntry(entries, baseName)) {
                if (!isValid) {
                    return __exports__filterMutate(entries, entry => !fileNameEqual(entry, baseName));
                }
            }
            else if (isValid) {
                return entries.push(baseName);
            }
        }
        function writeFile(fileName, data, writeByteOrderMark) {
            const path = toPath(fileName);
            const result = getCachedFileSystemEntriesForBaseDir(path);
            if (result) {
                updateFilesOfFileSystemEntry(result, getBaseNameOfFileName(fileName), /*fileExists*/ true);
            }
            return host.writeFile(fileName, data, writeByteOrderMark);
        }
        function fileExists(fileName) {
            const path = toPath(fileName);
            const result = getCachedFileSystemEntriesForBaseDir(path);
            return result && hasEntry(result.files, getBaseNameOfFileName(fileName)) ||
                host.fileExists(fileName);
        }
        function directoryExists(dirPath) {
            const path = toPath(dirPath);
            return cachedReadDirectoryResult.has(__exports__ensureTrailingDirectorySeparator(path)) || host.directoryExists(dirPath);
        }
        function createDirectory(dirPath) {
            const path = toPath(dirPath);
            const result = getCachedFileSystemEntriesForBaseDir(path);
            const baseFileName = getBaseNameOfFileName(dirPath);
            if (result) {
                updateFileSystemEntry(result.directories, baseFileName, /*isValid*/ true);
            }
            host.createDirectory(dirPath);
        }
        function getDirectories(rootDir) {
            const rootDirPath = toPath(rootDir);
            const result = tryReadDirectory(rootDir, rootDirPath);
            if (result) {
                return result.directories.slice();
            }
            return host.getDirectories(rootDir);
        }
        function readDirectory(rootDir, extensions, excludes, includes, depth) {
            const rootDirPath = toPath(rootDir);
            const result = tryReadDirectory(rootDir, rootDirPath);
            if (result) {
                return __exports__matchFiles(rootDir, extensions, excludes, includes, useCaseSensitiveFileNames, currentDirectory, depth, getFileSystemEntries, realpath);
            }
            return host.readDirectory(rootDir, extensions, excludes, includes, depth);
            function getFileSystemEntries(dir) {
                const path = toPath(dir);
                if (path === rootDirPath) {
                    return result;
                }
                return tryReadDirectory(dir, path) || __exports__emptyFileSystemEntries;
            }
        }
        function realpath(s) {
            return host.realpath ? host.realpath(s) : s;
        }
        function addOrDeleteFileOrDirectory(fileOrDirectory, fileOrDirectoryPath) {
            const existingResult = getCachedFileSystemEntries(fileOrDirectoryPath);
            if (existingResult) {
                // Just clear the cache for now
                // For now just clear the cache, since this could mean that multiple level entries might need to be re-evaluated
                clearCache();
                return undefined;
            }
            const parentResult = getCachedFileSystemEntriesForBaseDir(fileOrDirectoryPath);
            if (!parentResult) {
                return undefined;
            }
            // This was earlier a file (hence not in cached directory contents)
            // or we never cached the directory containing it
            if (!host.directoryExists) {
                // Since host doesnt support directory exists, clear the cache as otherwise it might not be same
                clearCache();
                return undefined;
            }
            const baseName = getBaseNameOfFileName(fileOrDirectory);
            const fsQueryResult = {
                fileExists: host.fileExists(fileOrDirectoryPath),
                directoryExists: host.directoryExists(fileOrDirectoryPath)
            };
            if (fsQueryResult.directoryExists || hasEntry(parentResult.directories, baseName)) {
                // Folder added or removed, clear the cache instead of updating the folder and its structure
                clearCache();
            }
            else {
                // No need to update the directory structure, just files
                updateFilesOfFileSystemEntry(parentResult, baseName, fsQueryResult.fileExists);
            }
            return fsQueryResult;
        }
        function addOrDeleteFile(fileName, filePath, eventKind) {
            if (eventKind === __exports__FileWatcherEventKind.Changed) {
                return;
            }
            const parentResult = getCachedFileSystemEntriesForBaseDir(filePath);
            if (parentResult) {
                updateFilesOfFileSystemEntry(parentResult, getBaseNameOfFileName(fileName), eventKind === __exports__FileWatcherEventKind.Created);
            }
        }
        function updateFilesOfFileSystemEntry(parentResult, baseName, fileExists) {
            updateFileSystemEntry(parentResult.files, baseName, fileExists);
        }
        function clearCache() {
            cachedReadDirectoryResult.clear();
        }
    }
    __exports__createCachedDirectoryStructureHost = createCachedDirectoryStructureHost;
    let ConfigFileProgramReloadLevel;
    (function (ConfigFileProgramReloadLevel) {
        ConfigFileProgramReloadLevel[ConfigFileProgramReloadLevel["None"] = 0] = "None";
        /** Update the file name list from the disk */
        ConfigFileProgramReloadLevel[ConfigFileProgramReloadLevel["Partial"] = 1] = "Partial";
        /** Reload completely by re-reading contents of config file from disk and updating program */
        ConfigFileProgramReloadLevel[ConfigFileProgramReloadLevel["Full"] = 2] = "Full";
    })(ConfigFileProgramReloadLevel = __exports__ConfigFileProgramReloadLevel || (__exports__ConfigFileProgramReloadLevel = {}));
    /**
     * Updates the map of shared extended config file watches with a new set of extended config files from a base config file of the project
     */
    function updateSharedExtendedConfigFileWatcher(projectPath, parsed, extendedConfigFilesMap, createExtendedConfigFileWatch, toPath) {
        const extendedConfigs = __exports__arrayToMap(parsed?.options.configFile?.extendedSourceFiles || __exports__emptyArray, toPath);
        // remove project from all unrelated watchers
        extendedConfigFilesMap.forEach((watcher, extendedConfigFilePath) => {
            if (!extendedConfigs.has(extendedConfigFilePath)) {
                watcher.projects.delete(projectPath);
                watcher.close();
            }
        });
        // Update the extended config files watcher
        extendedConfigs.forEach((extendedConfigFileName, extendedConfigFilePath) => {
            const existing = extendedConfigFilesMap.get(extendedConfigFilePath);
            if (existing) {
                existing.projects.add(projectPath);
            }
            else {
                // start watching previously unseen extended config
                extendedConfigFilesMap.set(extendedConfigFilePath, {
                    projects: new __exports__Set([projectPath]),
                    fileWatcher: createExtendedConfigFileWatch(extendedConfigFileName, extendedConfigFilePath),
                    close: () => {
                        const existing = extendedConfigFilesMap.get(extendedConfigFilePath);
                        if (!existing || existing.projects.size !== 0)
                            return;
                        existing.fileWatcher.close();
                        extendedConfigFilesMap.delete(extendedConfigFilePath);
                    },
                });
            }
        });
    }
    __exports__updateSharedExtendedConfigFileWatcher = updateSharedExtendedConfigFileWatcher;
    /**
     * Updates the existing missing file watches with the new set of missing files after new program is created
     */
    function updateMissingFilePathsWatch(program, missingFileWatches, createMissingFileWatch) {
        const missingFilePaths = program.getMissingFilePaths();
        // TODO(rbuckton): Should be a `Set` but that requires changing the below code that uses `mutateMap`
        const newMissingFilePathMap = __exports__arrayToMap(missingFilePaths, __exports__identity, __exports__returnTrue);
        // Update the missing file paths watcher
        __exports__mutateMap(missingFileWatches, newMissingFilePathMap, {
            // Watch the missing files
            createNewValue: createMissingFileWatch,
            // Files that are no longer missing (e.g. because they are no longer required)
            // should no longer be watched.
            onDeleteValue: __exports__closeFileWatcher
        });
    }
    __exports__updateMissingFilePathsWatch = updateMissingFilePathsWatch;
    /**
     * Updates the existing wild card directory watches with the new set of wild card directories from the config file
     * after new program is created because the config file was reloaded or program was created first time from the config file
     * Note that there is no need to call this function when the program is updated with additional files without reloading config files,
     * as wildcard directories wont change unless reloading config file
     */
    function updateWatchingWildcardDirectories(existingWatchedForWildcards, wildcardDirectories, watchDirectory) {
        __exports__mutateMap(existingWatchedForWildcards, wildcardDirectories, {
            // Create new watch and recursive info
            createNewValue: createWildcardDirectoryWatcher,
            // Close existing watch thats not needed any more
            onDeleteValue: closeFileWatcherOf,
            // Close existing watch that doesnt match in the flags
            onExistingValue: updateWildcardDirectoryWatcher
        });
        function createWildcardDirectoryWatcher(directory, flags) {
            // Create new watch and recursive info
            return {
                watcher: watchDirectory(directory, flags),
                flags
            };
        }
        function updateWildcardDirectoryWatcher(existingWatcher, flags, directory) {
            // Watcher needs to be updated if the recursive flags dont match
            if (existingWatcher.flags === flags) {
                return;
            }
            existingWatcher.watcher.close();
            existingWatchedForWildcards.set(directory, createWildcardDirectoryWatcher(directory, flags));
        }
    }
    __exports__updateWatchingWildcardDirectories = updateWatchingWildcardDirectories;
    /* @internal */
    function isIgnoredFileFromWildCardWatching({ watchedDirPath, fileOrDirectory, fileOrDirectoryPath, configFileName, options, program, extraFileExtensions, currentDirectory, useCaseSensitiveFileNames, writeLog, }) {
        const newPath = removeIgnoredPath(fileOrDirectoryPath);
        if (!newPath) {
            writeLog(`Project: ${configFileName} Detected ignored path: ${fileOrDirectory}`);
            return true;
        }
        fileOrDirectoryPath = newPath;
        if (fileOrDirectoryPath === watchedDirPath)
            return false;
        // If the the added or created file or directory is not supported file name, ignore the file
        // But when watched directory is added/removed, we need to reload the file list
        if (__exports__hasExtension(fileOrDirectoryPath) && !__exports__isSupportedSourceFileName(fileOrDirectory, options, extraFileExtensions)) {
            writeLog(`Project: ${configFileName} Detected file add/remove of non supported extension: ${fileOrDirectory}`);
            return true;
        }
        if (isExcludedFile(fileOrDirectory, options.configFile.configFileSpecs, __exports__getNormalizedAbsolutePath(__exports__getDirectoryPath(configFileName), currentDirectory), useCaseSensitiveFileNames, currentDirectory)) {
            writeLog(`Project: ${configFileName} Detected excluded file: ${fileOrDirectory}`);
            return true;
        }
        if (!program)
            return false;
        // We want to ignore emit file check if file is not going to be emitted next to source file
        // In that case we follow config file inclusion rules
        if (options.outFile || options.outDir)
            return false;
        // File if emitted next to input needs to be ignored
        if (__exports__fileExtensionIs(fileOrDirectoryPath, ".d.ts" /* Dts */)) {
            // If its declaration directory: its not ignored if not excluded by config
            if (options.declarationDir)
                return false;
        }
        else if (!__exports__fileExtensionIsOneOf(fileOrDirectoryPath, __exports__supportedJSExtensions)) {
            return false;
        }
        // just check if sourceFile with the name exists
        const filePathWithoutExtension = __exports__removeFileExtension(fileOrDirectoryPath);
        const realProgram = isBuilderProgram(program) ? program.getProgramOrUndefined() : program;
        if (hasSourceFile((filePathWithoutExtension + ".ts" /* Ts */)) ||
            hasSourceFile((filePathWithoutExtension + ".tsx" /* Tsx */))) {
            writeLog(`Project: ${configFileName} Detected output file: ${fileOrDirectory}`);
            return true;
        }
        return false;
        function hasSourceFile(file) {
            return realProgram ?
                !!realProgram.getSourceFileByPath(file) :
                program.getState().fileInfos.has(file);
        }
    }
    __exports__isIgnoredFileFromWildCardWatching = isIgnoredFileFromWildCardWatching;
    function isBuilderProgram(program) {
        return !!program.getState;
    }
    function isEmittedFileOfProgram(program, file) {
        if (!program) {
            return false;
        }
        return program.isEmittedFile(file);
    }
    __exports__isEmittedFileOfProgram = isEmittedFileOfProgram;
    let WatchLogLevel;
    (function (WatchLogLevel) {
        WatchLogLevel[WatchLogLevel["None"] = 0] = "None";
        WatchLogLevel[WatchLogLevel["TriggerOnly"] = 1] = "TriggerOnly";
        WatchLogLevel[WatchLogLevel["Verbose"] = 2] = "Verbose";
    })(WatchLogLevel = __exports__WatchLogLevel || (__exports__WatchLogLevel = {}));
    function getWatchFactory(host, watchLogLevel, log, getDetailWatchInfo) {
        __exports__setSysLog(watchLogLevel === WatchLogLevel.Verbose ? log : __exports__noop);
        const plainInvokeFactory = {
            watchFile: (file, callback, pollingInterval, options) => host.watchFile(file, callback, pollingInterval, options),
            watchDirectory: (directory, callback, flags, options) => host.watchDirectory(directory, callback, (flags & 1 /* Recursive */) !== 0, options),
        };
        const triggerInvokingFactory = watchLogLevel !== WatchLogLevel.None ?
            {
                watchFile: createTriggerLoggingAddWatch("watchFile"),
                watchDirectory: createTriggerLoggingAddWatch("watchDirectory")
            } :
            undefined;
        const factory = watchLogLevel === WatchLogLevel.Verbose ?
            {
                watchFile: createFileWatcherWithLogging,
                watchDirectory: createDirectoryWatcherWithLogging
            } :
            triggerInvokingFactory || plainInvokeFactory;
        const excludeWatcherFactory = watchLogLevel === WatchLogLevel.Verbose ?
            createExcludeWatcherWithLogging :
            returnNoopFileWatcher;
        return {
            watchFile: createExcludeHandlingAddWatch("watchFile"),
            watchDirectory: createExcludeHandlingAddWatch("watchDirectory")
        };
        function createExcludeHandlingAddWatch(key) {
            return (file, cb, flags, options, detailInfo1, detailInfo2) => !matchesExclude(file, key === "watchFile" ? options?.excludeFiles : options?.excludeDirectories, useCaseSensitiveFileNames(), host.getCurrentDirectory?.() || "") ?
                factory[key].call(/*thisArgs*/ undefined, file, cb, flags, options, detailInfo1, detailInfo2) :
                excludeWatcherFactory(file, flags, options, detailInfo1, detailInfo2);
        }
        function useCaseSensitiveFileNames() {
            return typeof host.useCaseSensitiveFileNames === "boolean" ?
                host.useCaseSensitiveFileNames :
                host.useCaseSensitiveFileNames();
        }
        function createExcludeWatcherWithLogging(file, flags, options, detailInfo1, detailInfo2) {
            log(`ExcludeWatcher:: Added:: ${getWatchInfo(file, flags, options, detailInfo1, detailInfo2, getDetailWatchInfo)}`);
            return {
                close: () => log(`ExcludeWatcher:: Close:: ${getWatchInfo(file, flags, options, detailInfo1, detailInfo2, getDetailWatchInfo)}`)
            };
        }
        function createFileWatcherWithLogging(file, cb, flags, options, detailInfo1, detailInfo2) {
            log(`FileWatcher:: Added:: ${getWatchInfo(file, flags, options, detailInfo1, detailInfo2, getDetailWatchInfo)}`);
            const watcher = triggerInvokingFactory.watchFile(file, cb, flags, options, detailInfo1, detailInfo2);
            return {
                close: () => {
                    log(`FileWatcher:: Close:: ${getWatchInfo(file, flags, options, detailInfo1, detailInfo2, getDetailWatchInfo)}`);
                    watcher.close();
                }
            };
        }
        function createDirectoryWatcherWithLogging(file, cb, flags, options, detailInfo1, detailInfo2) {
            const watchInfo = `DirectoryWatcher:: Added:: ${getWatchInfo(file, flags, options, detailInfo1, detailInfo2, getDetailWatchInfo)}`;
            log(watchInfo);
            const start = timestamp();
            const watcher = triggerInvokingFactory.watchDirectory(file, cb, flags, options, detailInfo1, detailInfo2);
            const elapsed = timestamp() - start;
            log(`Elapsed:: ${elapsed}ms ${watchInfo}`);
            return {
                close: () => {
                    const watchInfo = `DirectoryWatcher:: Close:: ${getWatchInfo(file, flags, options, detailInfo1, detailInfo2, getDetailWatchInfo)}`;
                    log(watchInfo);
                    const start = timestamp();
                    watcher.close();
                    const elapsed = timestamp() - start;
                    log(`Elapsed:: ${elapsed}ms ${watchInfo}`);
                }
            };
        }
        function createTriggerLoggingAddWatch(key) {
            return (file, cb, flags, options, detailInfo1, detailInfo2) => plainInvokeFactory[key].call(/*thisArgs*/ undefined, file, (...args) => {
                const triggerredInfo = `${key === "watchFile" ? "FileWatcher" : "DirectoryWatcher"}:: Triggered with ${args[0]} ${args[1] !== undefined ? args[1] : ""}:: ${getWatchInfo(file, flags, options, detailInfo1, detailInfo2, getDetailWatchInfo)}`;
                log(triggerredInfo);
                const start = timestamp();
                cb.call(/*thisArg*/ undefined, ...args);
                const elapsed = timestamp() - start;
                log(`Elapsed:: ${elapsed}ms ${triggerredInfo}`);
            }, flags, options, detailInfo1, detailInfo2);
        }
        function getWatchInfo(file, flags, options, detailInfo1, detailInfo2, getDetailWatchInfo) {
            return `WatchInfo: ${file} ${flags} ${JSON.stringify(options)} ${getDetailWatchInfo ? getDetailWatchInfo(detailInfo1, detailInfo2) : detailInfo2 === undefined ? detailInfo1 : `${detailInfo1} ${detailInfo2}`}`;
        }
    }
    __exports__getWatchFactory = getWatchFactory;
    function getFallbackOptions(options) {
        const fallbackPolling = options?.fallbackPolling;
        return {
            watchFile: fallbackPolling !== undefined ?
                fallbackPolling :
                __exports__WatchFileKind.PriorityPollingInterval
        };
    }
    __exports__getFallbackOptions = getFallbackOptions;
    function closeFileWatcherOf(objWithWatcher) {
        objWithWatcher.watcher.close();
    }
    __exports__closeFileWatcherOf = closeFileWatcherOf;
}

{
    /**
     * djb2 hashing algorithm
     * http://www.cse.yorku.ca/~oz/hash.html
     */
    /* @internal */
    function generateDjb2Hash(data) {
        let acc = 5381;
        for (let i = 0; i < data.length; i++) {
            acc = ((acc << 5) + acc) + data.charCodeAt(i);
        }
        return acc.toString();
    }
    __exports__generateDjb2Hash = generateDjb2Hash;
    /**
     * Set a high stack trace limit to provide more information in case of an error.
     * Called for command-line and server use cases.
     * Not called if TypeScript is used as a library.
     */
    /* @internal */
    function setStackTraceLimit() {
        if (Error.stackTraceLimit < 100) { // Also tests that we won't set the property if it doesn't exist.
            Error.stackTraceLimit = 100;
        }
    }
    __exports__setStackTraceLimit = setStackTraceLimit;
    let FileWatcherEventKind;
    (function (FileWatcherEventKind) {
        FileWatcherEventKind[FileWatcherEventKind["Created"] = 0] = "Created";
        FileWatcherEventKind[FileWatcherEventKind["Changed"] = 1] = "Changed";
        FileWatcherEventKind[FileWatcherEventKind["Deleted"] = 2] = "Deleted";
    })(FileWatcherEventKind = __exports__FileWatcherEventKind || (__exports__FileWatcherEventKind = {}));
    /* @internal */
    let PollingInterval;
    (function (PollingInterval) {
        PollingInterval[PollingInterval["High"] = 2000] = "High";
        PollingInterval[PollingInterval["Medium"] = 500] = "Medium";
        PollingInterval[PollingInterval["Low"] = 250] = "Low";
    })(PollingInterval = __exports__PollingInterval || (__exports__PollingInterval = {}));
    /* @internal */
    __exports__missingFileModifiedTime = new Date(0); // Any subsequent modification will occur after this time
    function createPollingIntervalBasedLevels(levels) {
        return {
            [PollingInterval.Low]: levels.Low,
            [PollingInterval.Medium]: levels.Medium,
            [PollingInterval.High]: levels.High
        };
    }
    const defaultChunkLevels = { Low: 32, Medium: 64, High: 256 };
    let pollingChunkSize = createPollingIntervalBasedLevels(defaultChunkLevels);
    /* @internal */
    __exports__unchangedPollThresholds = createPollingIntervalBasedLevels(defaultChunkLevels);
    /* @internal */
    function setCustomPollingValues(system) {
        if (!system.getEnvironmentVariable) {
            return;
        }
        const pollingIntervalChanged = setCustomLevels("TSC_WATCH_POLLINGINTERVAL", PollingInterval);
        pollingChunkSize = getCustomPollingBasedLevels("TSC_WATCH_POLLINGCHUNKSIZE", defaultChunkLevels) || pollingChunkSize;
        __exports__unchangedPollThresholds = getCustomPollingBasedLevels("TSC_WATCH_UNCHANGEDPOLLTHRESHOLDS", defaultChunkLevels) || __exports__unchangedPollThresholds;
        function getLevel(envVar, level) {
            return system.getEnvironmentVariable(`${envVar}_${level.toUpperCase()}`);
        }
        function getCustomLevels(baseVariable) {
            let customLevels;
            setCustomLevel("Low");
            setCustomLevel("Medium");
            setCustomLevel("High");
            return customLevels;
            function setCustomLevel(level) {
                const customLevel = getLevel(baseVariable, level);
                if (customLevel) {
                    (customLevels || (customLevels = {}))[level] = Number(customLevel);
                }
            }
        }
        function setCustomLevels(baseVariable, levels) {
            const customLevels = getCustomLevels(baseVariable);
            if (customLevels) {
                setLevel("Low");
                setLevel("Medium");
                setLevel("High");
                return true;
            }
            return false;
            function setLevel(level) {
                levels[level] = customLevels[level] || levels[level];
            }
        }
        function getCustomPollingBasedLevels(baseVariable, defaultLevels) {
            const customLevels = getCustomLevels(baseVariable);
            return (pollingIntervalChanged || customLevels) &&
                createPollingIntervalBasedLevels(customLevels ? { ...defaultLevels, ...customLevels } : defaultLevels);
        }
    }
    __exports__setCustomPollingValues = setCustomPollingValues;
    /* @internal */
    function createDynamicPriorityPollingWatchFile(host) {
        const watchedFiles = [];
        const changedFilesInLastPoll = [];
        const lowPollingIntervalQueue = createPollingIntervalQueue(PollingInterval.Low);
        const mediumPollingIntervalQueue = createPollingIntervalQueue(PollingInterval.Medium);
        const highPollingIntervalQueue = createPollingIntervalQueue(PollingInterval.High);
        return watchFile;
        function watchFile(fileName, callback, defaultPollingInterval) {
            const file = {
                fileName,
                callback,
                unchangedPolls: 0,
                mtime: getModifiedTime(fileName)
            };
            watchedFiles.push(file);
            addToPollingIntervalQueue(file, defaultPollingInterval);
            return {
                close: () => {
                    file.isClosed = true;
                    // Remove from watchedFiles
                    __exports__unorderedRemoveItem(watchedFiles, file);
                    // Do not update polling interval queue since that will happen as part of polling
                }
            };
        }
        function createPollingIntervalQueue(pollingInterval) {
            const queue = [];
            queue.pollingInterval = pollingInterval;
            queue.pollIndex = 0;
            queue.pollScheduled = false;
            return queue;
        }
        function pollPollingIntervalQueue(queue) {
            queue.pollIndex = pollQueue(queue, queue.pollingInterval, queue.pollIndex, pollingChunkSize[queue.pollingInterval]);
            // Set the next polling index and timeout
            if (queue.length) {
                scheduleNextPoll(queue.pollingInterval);
            }
            else {
                __exports__Debug.assert(queue.pollIndex === 0);
                queue.pollScheduled = false;
            }
        }
        function pollLowPollingIntervalQueue(queue) {
            // Always poll complete list of changedFilesInLastPoll
            pollQueue(changedFilesInLastPoll, PollingInterval.Low, /*pollIndex*/ 0, changedFilesInLastPoll.length);
            // Finally do the actual polling of the queue
            pollPollingIntervalQueue(queue);
            // Schedule poll if there are files in changedFilesInLastPoll but no files in the actual queue
            // as pollPollingIntervalQueue wont schedule for next poll
            if (!queue.pollScheduled && changedFilesInLastPoll.length) {
                scheduleNextPoll(PollingInterval.Low);
            }
        }
        function pollQueue(queue, pollingInterval, pollIndex, chunkSize) {
            // Max visit would be all elements of the queue
            let needsVisit = queue.length;
            let definedValueCopyToIndex = pollIndex;
            for (let polled = 0; polled < chunkSize && needsVisit > 0; nextPollIndex(), needsVisit--) {
                const watchedFile = queue[pollIndex];
                if (!watchedFile) {
                    continue;
                }
                else if (watchedFile.isClosed) {
                    queue[pollIndex] = undefined;
                    continue;
                }
                polled++;
                const fileChanged = onWatchedFileStat(watchedFile, getModifiedTime(watchedFile.fileName));
                if (watchedFile.isClosed) {
                    // Closed watcher as part of callback
                    queue[pollIndex] = undefined;
                }
                else if (fileChanged) {
                    watchedFile.unchangedPolls = 0;
                    // Changed files go to changedFilesInLastPoll queue
                    if (queue !== changedFilesInLastPoll) {
                        queue[pollIndex] = undefined;
                        addChangedFileToLowPollingIntervalQueue(watchedFile);
                    }
                }
                else if (watchedFile.unchangedPolls !== __exports__unchangedPollThresholds[pollingInterval]) {
                    watchedFile.unchangedPolls++;
                }
                else if (queue === changedFilesInLastPoll) {
                    // Restart unchangedPollCount for unchanged file and move to low polling interval queue
                    watchedFile.unchangedPolls = 1;
                    queue[pollIndex] = undefined;
                    addToPollingIntervalQueue(watchedFile, PollingInterval.Low);
                }
                else if (pollingInterval !== PollingInterval.High) {
                    watchedFile.unchangedPolls++;
                    queue[pollIndex] = undefined;
                    addToPollingIntervalQueue(watchedFile, pollingInterval === PollingInterval.Low ? PollingInterval.Medium : PollingInterval.High);
                }
                if (queue[pollIndex]) {
                    // Copy this file to the non hole location
                    if (definedValueCopyToIndex < pollIndex) {
                        queue[definedValueCopyToIndex] = watchedFile;
                        queue[pollIndex] = undefined;
                    }
                    definedValueCopyToIndex++;
                }
            }
            // Return next poll index
            return pollIndex;
            function nextPollIndex() {
                pollIndex++;
                if (pollIndex === queue.length) {
                    if (definedValueCopyToIndex < pollIndex) {
                        // There are holes from nextDefinedValueIndex to end of queue, change queue size
                        queue.length = definedValueCopyToIndex;
                    }
                    pollIndex = 0;
                    definedValueCopyToIndex = 0;
                }
            }
        }
        function pollingIntervalQueue(pollingInterval) {
            switch (pollingInterval) {
                case PollingInterval.Low:
                    return lowPollingIntervalQueue;
                case PollingInterval.Medium:
                    return mediumPollingIntervalQueue;
                case PollingInterval.High:
                    return highPollingIntervalQueue;
            }
        }
        function addToPollingIntervalQueue(file, pollingInterval) {
            pollingIntervalQueue(pollingInterval).push(file);
            scheduleNextPollIfNotAlreadyScheduled(pollingInterval);
        }
        function addChangedFileToLowPollingIntervalQueue(file) {
            changedFilesInLastPoll.push(file);
            scheduleNextPollIfNotAlreadyScheduled(PollingInterval.Low);
        }
        function scheduleNextPollIfNotAlreadyScheduled(pollingInterval) {
            if (!pollingIntervalQueue(pollingInterval).pollScheduled) {
                scheduleNextPoll(pollingInterval);
            }
        }
        function scheduleNextPoll(pollingInterval) {
            pollingIntervalQueue(pollingInterval).pollScheduled = host.setTimeout(pollingInterval === PollingInterval.Low ? pollLowPollingIntervalQueue : pollPollingIntervalQueue, pollingInterval, pollingIntervalQueue(pollingInterval));
        }
        function getModifiedTime(fileName) {
            return host.getModifiedTime(fileName) || __exports__missingFileModifiedTime;
        }
    }
    __exports__createDynamicPriorityPollingWatchFile = createDynamicPriorityPollingWatchFile;
    function createUseFsEventsOnParentDirectoryWatchFile(fsWatch, useCaseSensitiveFileNames) {
        // One file can have multiple watchers
        const fileWatcherCallbacks = __exports__createMultiMap();
        const dirWatchers = new __exports__Map();
        const toCanonicalName = __exports__createGetCanonicalFileName(useCaseSensitiveFileNames);
        return nonPollingWatchFile;
        function nonPollingWatchFile(fileName, callback, _pollingInterval, fallbackOptions) {
            const filePath = toCanonicalName(fileName);
            fileWatcherCallbacks.add(filePath, callback);
            const dirPath = __exports__getDirectoryPath(filePath) || ".";
            const watcher = dirWatchers.get(dirPath) ||
                createDirectoryWatcher(__exports__getDirectoryPath(fileName) || ".", dirPath, fallbackOptions);
            watcher.referenceCount++;
            return {
                close: () => {
                    if (watcher.referenceCount === 1) {
                        watcher.close();
                        dirWatchers.delete(dirPath);
                    }
                    else {
                        watcher.referenceCount--;
                    }
                    fileWatcherCallbacks.remove(filePath, callback);
                }
            };
        }
        function createDirectoryWatcher(dirName, dirPath, fallbackOptions) {
            const watcher = fsWatch(dirName, 1 /* Directory */, (_eventName, relativeFileName) => {
                // When files are deleted from disk, the triggered "rename" event would have a relativefileName of "undefined"
                if (!__exports__isString(relativeFileName)) {
                    return;
                }
                const fileName = __exports__getNormalizedAbsolutePath(relativeFileName, dirName);
                // Some applications save a working file via rename operations
                const callbacks = fileName && fileWatcherCallbacks.get(toCanonicalName(fileName));
                if (callbacks) {
                    for (const fileCallback of callbacks) {
                        fileCallback(fileName, FileWatcherEventKind.Changed);
                    }
                }
            }, 
            /*recursive*/ false, PollingInterval.Medium, fallbackOptions);
            watcher.referenceCount = 0;
            dirWatchers.set(dirPath, watcher);
            return watcher;
        }
    }
    /* @internal */
    function createSingleFileWatcherPerName(watchFile, useCaseSensitiveFileNames) {
        const cache = new __exports__Map();
        const callbacksCache = __exports__createMultiMap();
        const toCanonicalFileName = __exports__createGetCanonicalFileName(useCaseSensitiveFileNames);
        return (fileName, callback, pollingInterval, options) => {
            const path = toCanonicalFileName(fileName);
            const existing = cache.get(path);
            if (existing) {
                existing.refCount++;
            }
            else {
                cache.set(path, {
                    watcher: watchFile(fileName, (fileName, eventKind) => __exports__forEach(callbacksCache.get(path), cb => cb(fileName, eventKind)), pollingInterval, options),
                    refCount: 1
                });
            }
            callbacksCache.add(path, callback);
            return {
                close: () => {
                    const watcher = __exports__Debug.checkDefined(cache.get(path));
                    callbacksCache.remove(path, callback);
                    watcher.refCount--;
                    if (watcher.refCount)
                        return;
                    cache.delete(path);
                    __exports__closeFileWatcherOf(watcher);
                }
            };
        };
    }
    __exports__createSingleFileWatcherPerName = createSingleFileWatcherPerName;
    /**
     * Returns true if file status changed
     */
    /*@internal*/
    function onWatchedFileStat(watchedFile, modifiedTime) {
        const oldTime = watchedFile.mtime.getTime();
        const newTime = modifiedTime.getTime();
        if (oldTime !== newTime) {
            watchedFile.mtime = modifiedTime;
            watchedFile.callback(watchedFile.fileName, getFileWatcherEventKind(oldTime, newTime));
            return true;
        }
        return false;
    }
    __exports__onWatchedFileStat = onWatchedFileStat;
    /*@internal*/
    function getFileWatcherEventKind(oldTime, newTime) {
        return oldTime === 0
            ? FileWatcherEventKind.Created
            : newTime === 0
                ? FileWatcherEventKind.Deleted
                : FileWatcherEventKind.Changed;
    }
    __exports__getFileWatcherEventKind = getFileWatcherEventKind;
    /*@internal*/
    __exports__ignoredPaths = ["/node_modules/.", "/.git", "/.#"];
    /*@internal*/
    __exports__sysLog = __exports__noop; // eslint-disable-line prefer-const
    /*@internal*/
    function setSysLog(logger) {
        __exports__sysLog = logger;
    }
    __exports__setSysLog = setSysLog;
    /**
     * Watch the directory recursively using host provided method to watch child directories
     * that means if this is recursive watcher, watch the children directories as well
     * (eg on OS that dont support recursive watch using fs.watch use fs.watchFile)
     */
    /*@internal*/
    function createDirectoryWatcherSupportingRecursive({ watchDirectory, useCaseSensitiveFileNames, getCurrentDirectory, getAccessibleSortedChildDirectories, directoryExists, realpath, setTimeout, clearTimeout }) {
        const cache = new __exports__Map();
        const callbackCache = __exports__createMultiMap();
        const cacheToUpdateChildWatches = new __exports__Map();
        let timerToUpdateChildWatches;
        const filePathComparer = __exports__getStringComparer(!useCaseSensitiveFileNames);
        const toCanonicalFilePath = __exports__createGetCanonicalFileName(useCaseSensitiveFileNames);
        return (dirName, callback, recursive, options) => recursive ?
            createDirectoryWatcher(dirName, options, callback) :
            watchDirectory(dirName, callback, recursive, options);
        /**
         * Create the directory watcher for the dirPath.
         */
        function createDirectoryWatcher(dirName, options, callback) {
            const dirPath = toCanonicalFilePath(dirName);
            let directoryWatcher = cache.get(dirPath);
            if (directoryWatcher) {
                directoryWatcher.refCount++;
            }
            else {
                directoryWatcher = {
                    watcher: watchDirectory(dirName, fileName => {
                        if (isIgnoredPath(fileName, options))
                            return;
                        if (options?.synchronousWatchDirectory) {
                            // Call the actual callback
                            invokeCallbacks(dirPath, fileName);
                            // Iterate through existing children and update the watches if needed
                            updateChildWatches(dirName, dirPath, options);
                        }
                        else {
                            nonSyncUpdateChildWatches(dirName, dirPath, fileName, options);
                        }
                    }, /*recursive*/ false, options),
                    refCount: 1,
                    childWatches: __exports__emptyArray
                };
                cache.set(dirPath, directoryWatcher);
                updateChildWatches(dirName, dirPath, options);
            }
            const callbackToAdd = callback && { dirName, callback };
            if (callbackToAdd) {
                callbackCache.add(dirPath, callbackToAdd);
            }
            return {
                dirName,
                close: () => {
                    const directoryWatcher = __exports__Debug.checkDefined(cache.get(dirPath));
                    if (callbackToAdd)
                        callbackCache.remove(dirPath, callbackToAdd);
                    directoryWatcher.refCount--;
                    if (directoryWatcher.refCount)
                        return;
                    cache.delete(dirPath);
                    __exports__closeFileWatcherOf(directoryWatcher);
                    directoryWatcher.childWatches.forEach(__exports__closeFileWatcher);
                }
            };
        }
        function invokeCallbacks(dirPath, fileNameOrInvokeMap, fileNames) {
            let fileName;
            let invokeMap;
            if (__exports__isString(fileNameOrInvokeMap)) {
                fileName = fileNameOrInvokeMap;
            }
            else {
                invokeMap = fileNameOrInvokeMap;
            }
            // Call the actual callback
            callbackCache.forEach((callbacks, rootDirName) => {
                if (invokeMap && invokeMap.get(rootDirName) === true)
                    return;
                if (rootDirName === dirPath || (__exports__startsWith(dirPath, rootDirName) && dirPath[rootDirName.length] === __exports__directorySeparator)) {
                    if (invokeMap) {
                        if (fileNames) {
                            const existing = invokeMap.get(rootDirName);
                            if (existing) {
                                existing.push(...fileNames);
                            }
                            else {
                                invokeMap.set(rootDirName, fileNames.slice());
                            }
                        }
                        else {
                            invokeMap.set(rootDirName, true);
                        }
                    }
                    else {
                        callbacks.forEach(({ callback }) => callback(fileName));
                    }
                }
            });
        }
        function nonSyncUpdateChildWatches(dirName, dirPath, fileName, options) {
            // Iterate through existing children and update the watches if needed
            const parentWatcher = cache.get(dirPath);
            if (parentWatcher && directoryExists(dirName)) {
                // Schedule the update and postpone invoke for callbacks
                scheduleUpdateChildWatches(dirName, dirPath, fileName, options);
                return;
            }
            // Call the actual callbacks and remove child watches
            invokeCallbacks(dirPath, fileName);
            removeChildWatches(parentWatcher);
        }
        function scheduleUpdateChildWatches(dirName, dirPath, fileName, options) {
            const existing = cacheToUpdateChildWatches.get(dirPath);
            if (existing) {
                existing.fileNames.push(fileName);
            }
            else {
                cacheToUpdateChildWatches.set(dirPath, { dirName, options, fileNames: [fileName] });
            }
            if (timerToUpdateChildWatches) {
                clearTimeout(timerToUpdateChildWatches);
                timerToUpdateChildWatches = undefined;
            }
            timerToUpdateChildWatches = setTimeout(onTimerToUpdateChildWatches, 1000);
        }
        function onTimerToUpdateChildWatches() {
            timerToUpdateChildWatches = undefined;
            __exports__sysLog(`sysLog:: onTimerToUpdateChildWatches:: ${cacheToUpdateChildWatches.size}`);
            const start = timestamp();
            const invokeMap = new __exports__Map();
            while (!timerToUpdateChildWatches && cacheToUpdateChildWatches.size) {
                const result = cacheToUpdateChildWatches.entries().next();
                __exports__Debug.assert(!result.done);
                const { value: [dirPath, { dirName, options, fileNames }] } = result;
                cacheToUpdateChildWatches.delete(dirPath);
                // Because the child refresh is fresh, we would need to invalidate whole root directory being watched
                // to ensure that all the changes are reflected at this time
                const hasChanges = updateChildWatches(dirName, dirPath, options);
                invokeCallbacks(dirPath, invokeMap, hasChanges ? undefined : fileNames);
            }
            __exports__sysLog(`sysLog:: invokingWatchers:: Elapsed:: ${timestamp() - start}ms:: ${cacheToUpdateChildWatches.size}`);
            callbackCache.forEach((callbacks, rootDirName) => {
                const existing = invokeMap.get(rootDirName);
                if (existing) {
                    callbacks.forEach(({ callback, dirName }) => {
                        if (__exports__isArray(existing)) {
                            existing.forEach(callback);
                        }
                        else {
                            callback(dirName);
                        }
                    });
                }
            });
            const elapsed = timestamp() - start;
            __exports__sysLog(`sysLog:: Elapsed:: ${elapsed}ms:: onTimerToUpdateChildWatches:: ${cacheToUpdateChildWatches.size} ${timerToUpdateChildWatches}`);
        }
        function removeChildWatches(parentWatcher) {
            if (!parentWatcher)
                return;
            const existingChildWatches = parentWatcher.childWatches;
            parentWatcher.childWatches = __exports__emptyArray;
            for (const childWatcher of existingChildWatches) {
                childWatcher.close();
                removeChildWatches(cache.get(toCanonicalFilePath(childWatcher.dirName)));
            }
        }
        function updateChildWatches(parentDir, parentDirPath, options) {
            // Iterate through existing children and update the watches if needed
            const parentWatcher = cache.get(parentDirPath);
            if (!parentWatcher)
                return false;
            let newChildWatches;
            const hasChanges = __exports__enumerateInsertsAndDeletes(directoryExists(parentDir) ? __exports__mapDefined(getAccessibleSortedChildDirectories(parentDir), child => {
                const childFullName = __exports__getNormalizedAbsolutePath(child, parentDir);
                // Filter our the symbolic link directories since those arent included in recursive watch
                // which is same behaviour when recursive: true is passed to fs.watch
                return !isIgnoredPath(childFullName, options) && filePathComparer(childFullName, __exports__normalizePath(realpath(childFullName))) === 0 /* EqualTo */ ? childFullName : undefined;
            }) : __exports__emptyArray, parentWatcher.childWatches, (child, childWatcher) => filePathComparer(child, childWatcher.dirName), createAndAddChildDirectoryWatcher, __exports__closeFileWatcher, addChildDirectoryWatcher);
            parentWatcher.childWatches = newChildWatches || __exports__emptyArray;
            return hasChanges;
            /**
             * Create new childDirectoryWatcher and add it to the new ChildDirectoryWatcher list
             */
            function createAndAddChildDirectoryWatcher(childName) {
                const result = createDirectoryWatcher(childName, options);
                addChildDirectoryWatcher(result);
            }
            /**
             * Add child directory watcher to the new ChildDirectoryWatcher list
             */
            function addChildDirectoryWatcher(childWatcher) {
                (newChildWatches || (newChildWatches = [])).push(childWatcher);
            }
        }
        function isIgnoredPath(path, options) {
            return __exports__some(__exports__ignoredPaths, searchPath => isInPath(path, searchPath)) ||
                isIgnoredByWatchOptions(path, options, useCaseSensitiveFileNames, getCurrentDirectory);
        }
        function isInPath(path, searchPath) {
            if (__exports__stringContains(path, searchPath))
                return true;
            if (useCaseSensitiveFileNames)
                return false;
            return __exports__stringContains(toCanonicalFilePath(path), searchPath);
        }
    }
    __exports__createDirectoryWatcherSupportingRecursive = createDirectoryWatcherSupportingRecursive;
    /*@internal*/
    function createFileWatcherCallback(callback) {
        return (_fileName, eventKind) => callback(eventKind === FileWatcherEventKind.Changed ? "change" : "rename", "");
    }
    __exports__createFileWatcherCallback = createFileWatcherCallback;
    function createFsWatchCallbackForFileWatcherCallback(fileName, callback, fileExists) {
        return eventName => {
            if (eventName === "rename") {
                callback(fileName, fileExists(fileName) ? FileWatcherEventKind.Created : FileWatcherEventKind.Deleted);
            }
            else {
                // Change
                callback(fileName, FileWatcherEventKind.Changed);
            }
        };
    }
    function isIgnoredByWatchOptions(pathToCheck, options, useCaseSensitiveFileNames, getCurrentDirectory) {
        return (options?.excludeDirectories || options?.excludeFiles) && (matchesExclude(pathToCheck, options?.excludeFiles, useCaseSensitiveFileNames, getCurrentDirectory()) ||
            matchesExclude(pathToCheck, options?.excludeDirectories, useCaseSensitiveFileNames, getCurrentDirectory()));
    }
    function createFsWatchCallbackForDirectoryWatcherCallback(directoryName, callback, options, useCaseSensitiveFileNames, getCurrentDirectory) {
        return (eventName, relativeFileName) => {
            // In watchDirectory we only care about adding and removing files (when event name is
            // "rename"); changes made within files are handled by corresponding fileWatchers (when
            // event name is "change")
            if (eventName === "rename") {
                // When deleting a file, the passed baseFileName is null
                const fileName = !relativeFileName ? directoryName : __exports__normalizePath(__exports__combinePaths(directoryName, relativeFileName));
                if (!relativeFileName || !isIgnoredByWatchOptions(fileName, options, useCaseSensitiveFileNames, getCurrentDirectory)) {
                    callback(fileName);
                }
            }
        };
    }
    /*@internal*/
    function createSystemWatchFunctions({ pollingWatchFile, getModifiedTime, setTimeout, clearTimeout, fsWatch, fileExists, useCaseSensitiveFileNames, getCurrentDirectory, fsSupportsRecursiveFsWatch, directoryExists, getAccessibleSortedChildDirectories, realpath, tscWatchFile, useNonPollingWatchers, tscWatchDirectory, }) {
        let dynamicPollingWatchFile;
        let nonPollingWatchFile;
        let hostRecursiveDirectoryWatcher;
        return {
            watchFile,
            watchDirectory
        };
        function watchFile(fileName, callback, pollingInterval, options) {
            options = updateOptionsForWatchFile(options, useNonPollingWatchers);
            const watchFileKind = __exports__Debug.checkDefined(options.watchFile);
            switch (watchFileKind) {
                case __exports__WatchFileKind.FixedPollingInterval:
                    return pollingWatchFile(fileName, callback, PollingInterval.Low, /*options*/ undefined);
                case __exports__WatchFileKind.PriorityPollingInterval:
                    return pollingWatchFile(fileName, callback, pollingInterval, /*options*/ undefined);
                case __exports__WatchFileKind.DynamicPriorityPolling:
                    return ensureDynamicPollingWatchFile()(fileName, callback, pollingInterval, /*options*/ undefined);
                case __exports__WatchFileKind.UseFsEvents:
                    return fsWatch(fileName, 0 /* File */, createFsWatchCallbackForFileWatcherCallback(fileName, callback, fileExists), 
                    /*recursive*/ false, pollingInterval, __exports__getFallbackOptions(options));
                case __exports__WatchFileKind.UseFsEventsOnParentDirectory:
                    if (!nonPollingWatchFile) {
                        nonPollingWatchFile = createUseFsEventsOnParentDirectoryWatchFile(fsWatch, useCaseSensitiveFileNames);
                    }
                    return nonPollingWatchFile(fileName, callback, pollingInterval, __exports__getFallbackOptions(options));
                default:
                    __exports__Debug.assertNever(watchFileKind);
            }
        }
        function ensureDynamicPollingWatchFile() {
            return dynamicPollingWatchFile ||
                (dynamicPollingWatchFile = createDynamicPriorityPollingWatchFile({ getModifiedTime, setTimeout }));
        }
        function updateOptionsForWatchFile(options, useNonPollingWatchers) {
            if (options && options.watchFile !== undefined)
                return options;
            switch (tscWatchFile) {
                case "PriorityPollingInterval":
                    // Use polling interval based on priority when create watch using host.watchFile
                    return { watchFile: __exports__WatchFileKind.PriorityPollingInterval };
                case "DynamicPriorityPolling":
                    // Use polling interval but change the interval depending on file changes and their default polling interval
                    return { watchFile: __exports__WatchFileKind.DynamicPriorityPolling };
                case "UseFsEvents":
                    // Use notifications from FS to watch with falling back to fs.watchFile
                    return generateWatchFileOptions(__exports__WatchFileKind.UseFsEvents, __exports__PollingWatchKind.PriorityInterval, options);
                case "UseFsEventsWithFallbackDynamicPolling":
                    // Use notifications from FS to watch with falling back to dynamic watch file
                    return generateWatchFileOptions(__exports__WatchFileKind.UseFsEvents, __exports__PollingWatchKind.DynamicPriority, options);
                case "UseFsEventsOnParentDirectory":
                    useNonPollingWatchers = true;
                // fall through
                default:
                    return useNonPollingWatchers ?
                        // Use notifications from FS to watch with falling back to fs.watchFile
                        generateWatchFileOptions(__exports__WatchFileKind.UseFsEventsOnParentDirectory, __exports__PollingWatchKind.PriorityInterval, options) :
                        // Default to do not use fixed polling interval
                        { watchFile: __exports__WatchFileKind.FixedPollingInterval };
            }
        }
        function generateWatchFileOptions(watchFile, fallbackPolling, options) {
            const defaultFallbackPolling = options?.fallbackPolling;
            return {
                watchFile,
                fallbackPolling: defaultFallbackPolling === undefined ?
                    fallbackPolling :
                    defaultFallbackPolling
            };
        }
        function watchDirectory(directoryName, callback, recursive, options) {
            if (fsSupportsRecursiveFsWatch) {
                return fsWatch(directoryName, 1 /* Directory */, createFsWatchCallbackForDirectoryWatcherCallback(directoryName, callback, options, useCaseSensitiveFileNames, getCurrentDirectory), recursive, PollingInterval.Medium, __exports__getFallbackOptions(options));
            }
            if (!hostRecursiveDirectoryWatcher) {
                hostRecursiveDirectoryWatcher = createDirectoryWatcherSupportingRecursive({
                    useCaseSensitiveFileNames,
                    getCurrentDirectory,
                    directoryExists,
                    getAccessibleSortedChildDirectories,
                    watchDirectory: nonRecursiveWatchDirectory,
                    realpath,
                    setTimeout,
                    clearTimeout
                });
            }
            return hostRecursiveDirectoryWatcher(directoryName, callback, recursive, options);
        }
        function nonRecursiveWatchDirectory(directoryName, callback, recursive, options) {
            __exports__Debug.assert(!recursive);
            const watchDirectoryOptions = updateOptionsForWatchDirectory(options);
            const watchDirectoryKind = __exports__Debug.checkDefined(watchDirectoryOptions.watchDirectory);
            switch (watchDirectoryKind) {
                case __exports__WatchDirectoryKind.FixedPollingInterval:
                    return pollingWatchFile(directoryName, () => callback(directoryName), PollingInterval.Medium, 
                    /*options*/ undefined);
                case __exports__WatchDirectoryKind.DynamicPriorityPolling:
                    return ensureDynamicPollingWatchFile()(directoryName, () => callback(directoryName), PollingInterval.Medium, 
                    /*options*/ undefined);
                case __exports__WatchDirectoryKind.UseFsEvents:
                    return fsWatch(directoryName, 1 /* Directory */, createFsWatchCallbackForDirectoryWatcherCallback(directoryName, callback, options, useCaseSensitiveFileNames, getCurrentDirectory), recursive, PollingInterval.Medium, __exports__getFallbackOptions(watchDirectoryOptions));
                default:
                    __exports__Debug.assertNever(watchDirectoryKind);
            }
        }
        function updateOptionsForWatchDirectory(options) {
            if (options && options.watchDirectory !== undefined)
                return options;
            switch (tscWatchDirectory) {
                case "RecursiveDirectoryUsingFsWatchFile":
                    // Use polling interval based on priority when create watch using host.watchFile
                    return { watchDirectory: __exports__WatchDirectoryKind.FixedPollingInterval };
                case "RecursiveDirectoryUsingDynamicPriorityPolling":
                    // Use polling interval but change the interval depending on file changes and their default polling interval
                    return { watchDirectory: __exports__WatchDirectoryKind.DynamicPriorityPolling };
                default:
                    const defaultFallbackPolling = options?.fallbackPolling;
                    return {
                        watchDirectory: __exports__WatchDirectoryKind.UseFsEvents,
                        fallbackPolling: defaultFallbackPolling !== undefined ?
                            defaultFallbackPolling :
                            undefined
                    };
            }
        }
    }
    __exports__createSystemWatchFunctions = createSystemWatchFunctions;
    /**
     * patch writefile to create folder before writing the file
     */
    /*@internal*/
    function patchWriteFileEnsuringDirectory(sys) {
        // patch writefile to create folder before writing the file
        const originalWriteFile = sys.writeFile;
        sys.writeFile = (path, data, writeBom) => __exports__writeFileEnsuringDirectories(path, data, !!writeBom, (path, data, writeByteOrderMark) => originalWriteFile.call(sys, path, data, writeByteOrderMark), path => sys.createDirectory(path), path => sys.directoryExists(path));
    }
    __exports__patchWriteFileEnsuringDirectory = patchWriteFileEnsuringDirectory;
    function getNodeMajorVersion() {
        if (typeof process === "undefined") {
            return undefined;
        }
        const version = process.version;
        if (!version) {
            return undefined;
        }
        const dot = version.indexOf(".");
        if (dot === -1) {
            return undefined;
        }
        return parseInt(version.substring(1, dot));
    }
    __exports__getNodeMajorVersion = getNodeMajorVersion;
    // TODO: GH#18217 this is used as if it's certainly defined in many places.
    // eslint-disable-next-line prefer-const
    __exports__sys = (() => {
        // NodeJS detects "\uFEFF" at the start of the string and *replaces* it with the actual
        // byte order mark from the specified encoding. Using any other byte order mark does
        // not actually work.
        const byteOrderMarkIndicator = "\uFEFF";
        function getNodeSystem() {
            const nativePattern = /^native |^\([^)]+\)$|^(internal[\\/]|[a-zA-Z0-9_\s]+(\.js)?$)/;
            const _fs = require("fs");
            const _path = require("path");
            const _os = require("os");
            // crypto can be absent on reduced node installations
            let _crypto;
            try {
                _crypto = require("crypto");
            }
            catch {
                _crypto = undefined;
            }
            let activeSession;
            let profilePath = "./profile.cpuprofile";
            const realpathSync = _fs.realpathSync.native ?? _fs.realpathSync;
            const Buffer = require("buffer").Buffer;
            const nodeVersion = getNodeMajorVersion();
            const isNode4OrLater = nodeVersion >= 4;
            const isLinuxOrMacOs = process.platform === "linux" || process.platform === "darwin";
            const platform = _os.platform();
            const useCaseSensitiveFileNames = isFileSystemCaseSensitive();
            const fsSupportsRecursiveFsWatch = isNode4OrLater && (process.platform === "win32" || process.platform === "darwin");
            const getCurrentDirectory = __exports__memoize(() => process.cwd());
            const { watchFile, watchDirectory } = createSystemWatchFunctions({
                pollingWatchFile: createSingleFileWatcherPerName(fsWatchFileWorker, useCaseSensitiveFileNames),
                getModifiedTime,
                setTimeout,
                clearTimeout,
                fsWatch,
                useCaseSensitiveFileNames,
                getCurrentDirectory,
                fileExists,
                // Node 4.0 `fs.watch` function supports the "recursive" option on both OSX and Windows
                // (ref: https://github.com/nodejs/node/pull/2649 and https://github.com/Microsoft/TypeScript/issues/4643)
                fsSupportsRecursiveFsWatch,
                directoryExists,
                getAccessibleSortedChildDirectories: path => getAccessibleFileSystemEntries(path).directories,
                realpath,
                tscWatchFile: process.env.TSC_WATCHFILE,
                useNonPollingWatchers: process.env.TSC_NONPOLLING_WATCHER,
                tscWatchDirectory: process.env.TSC_WATCHDIRECTORY,
            });
            const nodeSystem = {
                args: process.argv.slice(2),
                newLine: _os.EOL,
                useCaseSensitiveFileNames,
                write(s) {
                    process.stdout.write(s);
                },
                writeOutputIsTTY() {
                    return process.stdout.isTTY;
                },
                readFile,
                writeFile,
                watchFile,
                watchDirectory,
                resolvePath: path => _path.resolve(path),
                fileExists,
                directoryExists,
                createDirectory(directoryName) {
                    if (!nodeSystem.directoryExists(directoryName)) {
                        // Wrapped in a try-catch to prevent crashing if we are in a race
                        // with another copy of ourselves to create the same directory
                        try {
                            _fs.mkdirSync(directoryName);
                        }
                        catch (e) {
                            if (e.code !== "EEXIST") {
                                // Failed for some other reason (access denied?); still throw
                                throw e;
                            }
                        }
                    }
                },
                getExecutingFilePath() {
                    return __filename;
                },
                getCurrentDirectory,
                getDirectories,
                getEnvironmentVariable(name) {
                    return process.env[name] || "";
                },
                readDirectory,
                getModifiedTime,
                setModifiedTime,
                deleteFile,
                createHash: _crypto ? createSHA256Hash : generateDjb2Hash,
                createSHA256Hash: _crypto ? createSHA256Hash : undefined,
                getMemoryUsage() {
                    if (global.gc) {
                        global.gc();
                    }
                    return process.memoryUsage().heapUsed;
                },
                getFileSize(path) {
                    try {
                        const stat = statSync(path);
                        if (stat?.isFile()) {
                            return stat.size;
                        }
                    }
                    catch { /*ignore*/ }
                    return 0;
                },
                exit(exitCode) {
                    disableCPUProfiler(() => process.exit(exitCode));
                },
                enableCPUProfiler,
                disableCPUProfiler,
                cpuProfilingEnabled: () => !!activeSession || __exports__contains(process.execArgv, "--cpu-prof") || __exports__contains(process.execArgv, "--prof"),
                realpath,
                debugMode: !!process.env.NODE_INSPECTOR_IPC || !!process.env.VSCODE_INSPECTOR_OPTIONS || __exports__some(process.execArgv, arg => /^--(inspect|debug)(-brk)?(=\d+)?$/i.test(arg)),
                tryEnableSourceMapsForHost() {
                    try {
                        require("source-map-support").install();
                    }
                    catch {
                        // Could not enable source maps.
                    }
                },
                setTimeout,
                clearTimeout,
                clearScreen: () => {
                    process.stdout.write("\x1Bc");
                },
                setBlocking: () => {
                    if (process.stdout && process.stdout._handle && process.stdout._handle.setBlocking) {
                        process.stdout._handle.setBlocking(true);
                    }
                },
                bufferFrom,
                base64decode: input => bufferFrom(input, "base64").toString("utf8"),
                base64encode: input => bufferFrom(input).toString("base64"),
                require: (baseDir, moduleName) => {
                    try {
                        const modulePath = resolveJSModule(moduleName, baseDir, nodeSystem);
                        return { module: require(modulePath), modulePath, error: undefined };
                    }
                    catch (error) {
                        return { module: undefined, modulePath: undefined, error };
                    }
                }
            };
            return nodeSystem;
            /**
             * `throwIfNoEntry` was added so recently that it's not in the node types.
             * This helper encapsulates the mitigating usage of `any`.
             * See https://github.com/nodejs/node/pull/33716
             */
            function statSync(path) {
                // throwIfNoEntry will be ignored by older versions of node
                return _fs.statSync(path, { throwIfNoEntry: false });
            }
            /**
             * Uses the builtin inspector APIs to capture a CPU profile
             * See https://nodejs.org/api/inspector.html#inspector_example_usage for details
             */
            function enableCPUProfiler(path, cb) {
                if (activeSession) {
                    cb();
                    return false;
                }
                const inspector = require("inspector");
                if (!inspector || !inspector.Session) {
                    cb();
                    return false;
                }
                const session = new inspector.Session();
                session.connect();
                session.post("Profiler.enable", () => {
                    session.post("Profiler.start", () => {
                        activeSession = session;
                        profilePath = path;
                        cb();
                    });
                });
                return true;
            }
            /**
             * Strips non-TS paths from the profile, so users with private projects shouldn't
             * need to worry about leaking paths by submitting a cpu profile to us
             */
            function cleanupPaths(profile) {
                let externalFileCounter = 0;
                const remappedPaths = new __exports__Map();
                const normalizedDir = __exports__normalizeSlashes(__dirname);
                // Windows rooted dir names need an extra `/` prepended to be valid file:/// urls
                const fileUrlRoot = `file://${__exports__getRootLength(normalizedDir) === 1 ? "" : "/"}${normalizedDir}`;
                for (const node of profile.nodes) {
                    if (node.callFrame.url) {
                        const url = __exports__normalizeSlashes(node.callFrame.url);
                        if (__exports__containsPath(fileUrlRoot, url, useCaseSensitiveFileNames)) {
                            node.callFrame.url = __exports__getRelativePathToDirectoryOrUrl(fileUrlRoot, url, fileUrlRoot, __exports__createGetCanonicalFileName(useCaseSensitiveFileNames), /*isAbsolutePathAnUrl*/ true);
                        }
                        else if (!nativePattern.test(url)) {
                            node.callFrame.url = (remappedPaths.has(url) ? remappedPaths : remappedPaths.set(url, `external${externalFileCounter}.js`)).get(url);
                            externalFileCounter++;
                        }
                    }
                }
                return profile;
            }
            function disableCPUProfiler(cb) {
                if (activeSession && activeSession !== "stopping") {
                    const s = activeSession;
                    activeSession.post("Profiler.stop", (err, { profile }) => {
                        if (!err) {
                            try {
                                if (statSync(profilePath)?.isDirectory()) {
                                    profilePath = _path.join(profilePath, `${(new Date()).toISOString().replace(/:/g, "-")}+P${process.pid}.cpuprofile`);
                                }
                            }
                            catch {
                                // do nothing and ignore fallible fs operation
                            }
                            try {
                                _fs.mkdirSync(_path.dirname(profilePath), { recursive: true });
                            }
                            catch {
                                // do nothing and ignore fallible fs operation
                            }
                            _fs.writeFileSync(profilePath, JSON.stringify(cleanupPaths(profile)));
                        }
                        activeSession = undefined;
                        s.disconnect();
                        cb();
                    });
                    activeSession = "stopping";
                    return true;
                }
                else {
                    cb();
                    return false;
                }
            }
            function bufferFrom(input, encoding) {
                // See https://github.com/Microsoft/TypeScript/issues/25652
                return Buffer.from && Buffer.from !== Int8Array.from
                    ? Buffer.from(input, encoding)
                    : new Buffer(input, encoding);
            }
            function isFileSystemCaseSensitive() {
                // win32\win64 are case insensitive platforms
                if (platform === "win32" || platform === "win64") {
                    return false;
                }
                // If this file exists under a different case, we must be case-insensitve.
                return !fileExists(swapCase(__filename));
            }
            /** Convert all lowercase chars to uppercase, and vice-versa */
            function swapCase(s) {
                return s.replace(/\w/g, (ch) => {
                    const up = ch.toUpperCase();
                    return ch === up ? ch.toLowerCase() : up;
                });
            }
            function fsWatchFileWorker(fileName, callback, pollingInterval) {
                _fs.watchFile(fileName, { persistent: true, interval: pollingInterval }, fileChanged);
                let eventKind;
                return {
                    close: () => _fs.unwatchFile(fileName, fileChanged)
                };
                function fileChanged(curr, prev) {
                    // previous event kind check is to ensure we recongnize the file as previously also missing when it is restored or renamed twice (that is it disappears and reappears)
                    // In such case, prevTime returned is same as prev time of event when file was deleted as per node documentation
                    const isPreviouslyDeleted = +prev.mtime === 0 || eventKind === FileWatcherEventKind.Deleted;
                    if (+curr.mtime === 0) {
                        if (isPreviouslyDeleted) {
                            // Already deleted file, no need to callback again
                            return;
                        }
                        eventKind = FileWatcherEventKind.Deleted;
                    }
                    else if (isPreviouslyDeleted) {
                        eventKind = FileWatcherEventKind.Created;
                    }
                    // If there is no change in modified time, ignore the event
                    else if (+curr.mtime === +prev.mtime) {
                        return;
                    }
                    else {
                        // File changed
                        eventKind = FileWatcherEventKind.Changed;
                    }
                    callback(fileName, eventKind);
                }
            }
            function fsWatch(fileOrDirectory, entryKind, callback, recursive, fallbackPollingInterval, fallbackOptions) {
                let options;
                let lastDirectoryPartWithDirectorySeparator;
                let lastDirectoryPart;
                if (isLinuxOrMacOs) {
                    lastDirectoryPartWithDirectorySeparator = fileOrDirectory.substr(fileOrDirectory.lastIndexOf(__exports__directorySeparator));
                    lastDirectoryPart = lastDirectoryPartWithDirectorySeparator.slice(__exports__directorySeparator.length);
                }
                /** Watcher for the file system entry depending on whether it is missing or present */
                let watcher = !fileSystemEntryExists(fileOrDirectory, entryKind) ?
                    watchMissingFileSystemEntry() :
                    watchPresentFileSystemEntry();
                return {
                    close: () => {
                        // Close the watcher (either existing file system entry watcher or missing file system entry watcher)
                        watcher.close();
                        watcher = undefined;
                    }
                };
                /**
                 * Invoke the callback with rename and update the watcher if not closed
                 * @param createWatcher
                 */
                function invokeCallbackAndUpdateWatcher(createWatcher) {
                    __exports__sysLog(`sysLog:: ${fileOrDirectory}:: Changing watcher to ${createWatcher === watchPresentFileSystemEntry ? "Present" : "Missing"}FileSystemEntryWatcher`);
                    // Call the callback for current directory
                    callback("rename", "");
                    // If watcher is not closed, update it
                    if (watcher) {
                        watcher.close();
                        watcher = createWatcher();
                    }
                }
                /**
                 * Watch the file or directory that is currently present
                 * and when the watched file or directory is deleted, switch to missing file system entry watcher
                 */
                function watchPresentFileSystemEntry() {
                    // Node 4.0 `fs.watch` function supports the "recursive" option on both OSX and Windows
                    // (ref: https://github.com/nodejs/node/pull/2649 and https://github.com/Microsoft/TypeScript/issues/4643)
                    if (options === undefined) {
                        if (fsSupportsRecursiveFsWatch) {
                            options = { persistent: true, recursive: !!recursive };
                        }
                        else {
                            options = { persistent: true };
                        }
                    }
                    try {
                        const presentWatcher = _fs.watch(fileOrDirectory, options, isLinuxOrMacOs ?
                            callbackChangingToMissingFileSystemEntry :
                            callback);
                        // Watch the missing file or directory or error
                        presentWatcher.on("error", () => invokeCallbackAndUpdateWatcher(watchMissingFileSystemEntry));
                        return presentWatcher;
                    }
                    catch (e) {
                        // Catch the exception and use polling instead
                        // Eg. on linux the number of watches are limited and one could easily exhaust watches and the exception ENOSPC is thrown when creating watcher at that point
                        // so instead of throwing error, use fs.watchFile
                        return watchPresentFileSystemEntryWithFsWatchFile();
                    }
                }
                function callbackChangingToMissingFileSystemEntry(event, relativeName) {
                    // because relativeName is not guaranteed to be correct we need to check on each rename with few combinations
                    // Eg on ubuntu while watching app/node_modules the relativeName is "node_modules" which is neither relative nor full path
                    return event === "rename" &&
                        (!relativeName ||
                            relativeName === lastDirectoryPart ||
                            (relativeName.lastIndexOf(lastDirectoryPartWithDirectorySeparator) !== -1 && relativeName.lastIndexOf(lastDirectoryPartWithDirectorySeparator) === relativeName.length - lastDirectoryPartWithDirectorySeparator.length)) &&
                        !fileSystemEntryExists(fileOrDirectory, entryKind) ?
                        invokeCallbackAndUpdateWatcher(watchMissingFileSystemEntry) :
                        callback(event, relativeName);
                }
                /**
                 * Watch the file or directory using fs.watchFile since fs.watch threw exception
                 * Eg. on linux the number of watches are limited and one could easily exhaust watches and the exception ENOSPC is thrown when creating watcher at that point
                 */
                function watchPresentFileSystemEntryWithFsWatchFile() {
                    __exports__sysLog(`sysLog:: ${fileOrDirectory}:: Changing to fsWatchFile`);
                    return watchFile(fileOrDirectory, createFileWatcherCallback(callback), fallbackPollingInterval, fallbackOptions);
                }
                /**
                 * Watch the file or directory that is missing
                 * and switch to existing file or directory when the missing filesystem entry is created
                 */
                function watchMissingFileSystemEntry() {
                    return watchFile(fileOrDirectory, (_fileName, eventKind) => {
                        if (eventKind === FileWatcherEventKind.Created && fileSystemEntryExists(fileOrDirectory, entryKind)) {
                            // Call the callback for current file or directory
                            // For now it could be callback for the inner directory creation,
                            // but just return current directory, better than current no-op
                            invokeCallbackAndUpdateWatcher(watchPresentFileSystemEntry);
                        }
                    }, fallbackPollingInterval, fallbackOptions);
                }
            }
            function readFileWorker(fileName, _encoding) {
                let buffer;
                try {
                    buffer = _fs.readFileSync(fileName);
                }
                catch (e) {
                    return undefined;
                }
                let len = buffer.length;
                if (len >= 2 && buffer[0] === 0xFE && buffer[1] === 0xFF) {
                    // Big endian UTF-16 byte order mark detected. Since big endian is not supported by node.js,
                    // flip all byte pairs and treat as little endian.
                    len &= ~1; // Round down to a multiple of 2
                    for (let i = 0; i < len; i += 2) {
                        const temp = buffer[i];
                        buffer[i] = buffer[i + 1];
                        buffer[i + 1] = temp;
                    }
                    return buffer.toString("utf16le", 2);
                }
                if (len >= 2 && buffer[0] === 0xFF && buffer[1] === 0xFE) {
                    // Little endian UTF-16 byte order mark detected
                    return buffer.toString("utf16le", 2);
                }
                if (len >= 3 && buffer[0] === 0xEF && buffer[1] === 0xBB && buffer[2] === 0xBF) {
                    // UTF-8 byte order mark detected
                    return buffer.toString("utf8", 3);
                }
                // Default is UTF-8 with no byte order mark
                return buffer.toString("utf8");
            }
            function readFile(fileName, _encoding) {
                __exports__perfLogger.logStartReadFile(fileName);
                const file = readFileWorker(fileName, _encoding);
                __exports__perfLogger.logStopReadFile();
                return file;
            }
            function writeFile(fileName, data, writeByteOrderMark) {
                __exports__perfLogger.logEvent("WriteFile: " + fileName);
                // If a BOM is required, emit one
                if (writeByteOrderMark) {
                    data = byteOrderMarkIndicator + data;
                }
                let fd;
                try {
                    fd = _fs.openSync(fileName, "w");
                    _fs.writeSync(fd, data, /*position*/ undefined, "utf8");
                }
                finally {
                    if (fd !== undefined) {
                        _fs.closeSync(fd);
                    }
                }
            }
            function getAccessibleFileSystemEntries(path) {
                __exports__perfLogger.logEvent("ReadDir: " + (path || "."));
                try {
                    const entries = _fs.readdirSync(path || ".", { withFileTypes: true });
                    const files = [];
                    const directories = [];
                    for (const dirent of entries) {
                        // withFileTypes is not supported before Node 10.10.
                        const entry = typeof dirent === "string" ? dirent : dirent.name;
                        // This is necessary because on some file system node fails to exclude
                        // "." and "..". See https://github.com/nodejs/node/issues/4002
                        if (entry === "." || entry === "..") {
                            continue;
                        }
                        let stat;
                        if (typeof dirent === "string" || dirent.isSymbolicLink()) {
                            const name = __exports__combinePaths(path, entry);
                            try {
                                stat = statSync(name);
                                if (!stat) {
                                    continue;
                                }
                            }
                            catch (e) {
                                continue;
                            }
                        }
                        else {
                            stat = dirent;
                        }
                        if (stat.isFile()) {
                            files.push(entry);
                        }
                        else if (stat.isDirectory()) {
                            directories.push(entry);
                        }
                    }
                    files.sort();
                    directories.sort();
                    return { files, directories };
                }
                catch (e) {
                    return __exports__emptyFileSystemEntries;
                }
            }
            function readDirectory(path, extensions, excludes, includes, depth) {
                return __exports__matchFiles(path, extensions, excludes, includes, useCaseSensitiveFileNames, process.cwd(), depth, getAccessibleFileSystemEntries, realpath);
            }
            function fileSystemEntryExists(path, entryKind) {
                // Since the error thrown by fs.statSync isn't used, we can avoid collecting a stack trace to improve
                // the CPU time performance.
                const originalStackTraceLimit = Error.stackTraceLimit;
                Error.stackTraceLimit = 0;
                try {
                    const stat = statSync(path);
                    if (!stat) {
                        return false;
                    }
                    switch (entryKind) {
                        case 0 /* File */: return stat.isFile();
                        case 1 /* Directory */: return stat.isDirectory();
                        default: return false;
                    }
                }
                catch (e) {
                    return false;
                }
                finally {
                    Error.stackTraceLimit = originalStackTraceLimit;
                }
            }
            function fileExists(path) {
                return fileSystemEntryExists(path, 0 /* File */);
            }
            function directoryExists(path) {
                return fileSystemEntryExists(path, 1 /* Directory */);
            }
            function getDirectories(path) {
                return getAccessibleFileSystemEntries(path).directories.slice();
            }
            function realpath(path) {
                try {
                    return realpathSync(path);
                }
                catch {
                    return path;
                }
            }
            function getModifiedTime(path) {
                try {
                    return statSync(path)?.mtime;
                }
                catch (e) {
                    return undefined;
                }
            }
            function setModifiedTime(path, time) {
                try {
                    _fs.utimesSync(path, time, time);
                }
                catch (e) {
                    return;
                }
            }
            function deleteFile(path) {
                try {
                    return _fs.unlinkSync(path);
                }
                catch (e) {
                    return;
                }
            }
            function createSHA256Hash(data) {
                const hash = _crypto.createHash("sha256");
                hash.update(data);
                return hash.digest("hex");
            }
        }
        let sys;
        if (typeof process !== "undefined" && process.nextTick && !process.browser && typeof require !== "undefined") {
            // process and process.nextTick checks if current environment is node-like
            // process.browser check excludes webpack and browserify
            sys = getNodeSystem();
        }
        if (sys) {
            // patch writefile to create folder before writing the file
            patchWriteFileEnsuringDirectory(sys);
        }
        return sys;
    })();
    if (__exports__sys && __exports__sys.getEnvironmentVariable) {
        setCustomPollingValues(__exports__sys);
        __exports__Debug.setAssertionLevel(/^development$/i.test(__exports__sys.getEnvironmentVariable("NODE_ENV"))
            ? 1 /* Normal */
            : 0 /* None */);
    }
    if (__exports__sys && __exports__sys.debugMode) {
        __exports__Debug.isDebugging = true;
    }
}
export {__exports__sys as sys};
