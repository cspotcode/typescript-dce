var __exports__closeFileWatcher,
  __exports__closeFileWatcherOf,
  __exports__combinePaths,
  __exports__compareStringsCaseSensitive,
  __exports__ConfigFileProgramReloadLevel,
  __exports__contains,
  __exports__containsPath,
  __exports__createGetCanonicalFileName,
  __exports__createMultiMap,
  __exports__Debug,
  __exports__DiagnosticCategory,
  __exports__emptyArray,
  __exports__emptyFileSystemEntries,
  __exports__endsWith,
  __exports__enumerateInsertsAndDeletes,
  __exports__equateStringsCaseInsensitive,
  __exports__equateStringsCaseSensitive,
  __exports__every,
  __exports__ExitStatus,
  __exports__fileExtensionIs,
  __exports__fileExtensionIsOneOf,
  __exports__FileIncludeKind,
  __exports__FileWatcherEventKind,
  __exports__find,
  __exports__findIndex,
  __exports__flatMap,
  __exports__flatten,
  __exports__forEach,
  __exports__getDirectoryPath,
  __exports__getEntries,
  __exports__getFallbackOptions,
  __exports__getNormalizedAbsolutePath,
  __exports__getNormalizedPathComponents,
  __exports__getRelativePathToDirectoryOrUrl,
  __exports__getRootLength,
  __exports__getStringComparer,
  __exports__hasExtension,
  __exports__ignoredPaths,
  __exports__indexOfAnyCharCode,
  __exports__isArray,
  __exports__isRootedDiskPath,
  __exports__isString,
  __exports__last,
  __exports__lastOrUndefined,
  __exports__map,
  __exports__Map,
  __exports__mapDefined,
  __exports__matchFiles,
  __exports__memoize,
  __exports__missingFileModifiedTime,
  __exports__ModuleKind,
  __exports__ModuleResolutionKind,
  __exports__NativeCollections,
  __exports__noop,
  __exports__normalizePath,
  __exports__normalizeSlashes,
  __exports__perfLogger,
  __exports__PollingInterval,
  __exports__PollingWatchKind,
  __exports__removeTrailingDirectorySeparator,
  __exports__Set,
  __exports__ShimCollections,
  __exports__some,
  __exports__sort,
  __exports__startsWith,
  __exports__stringContains,
  __exports__sys,
  __exports__sysLog,
  __exports__TypeReferenceSerializationKind,
  __exports__unchangedPollThresholds,
  __exports__unorderedRemoveItem,
  __exports__WatchDirectoryKind,
  __exports__WatchFileKind,
  __exports__WatchLogLevel,
  __exports__writeFileEnsuringDirectories;
(__exports__perfLogger = {
  logEvent(message) {},
  logStartReadFile() {},
  logStopReadFile() {},
}),
  (__exports__Debug = {
    assert(...args) {},
    fail(...args) {},
    getFunctionName(...args) {},
    isDebugging: () => !1,
    assertIsDefined(...args) {},
    assertEqual(...args) {},
    assertLessThanOrEqual(...args) {},
    assertGreaterThanOrEqual(...args) {},
    checkDefined: (v) => v,
    setAssertionLevel(...args) {},
    assertNever(...args) {},
    failBadSyntaxKind(...args) {},
  });
{
  let FileIncludeKind,
    ExitStatus,
    TypeReferenceSerializationKind,
    DiagnosticCategory,
    ModuleResolutionKind,
    WatchFileKind,
    WatchDirectoryKind,
    PollingWatchKind,
    ModuleKind;
  (function (FileIncludeKind) {
    (FileIncludeKind[(FileIncludeKind.RootFile = 0)] = "RootFile"),
      (FileIncludeKind[(FileIncludeKind.SourceFromProjectReference = 1)] =
        "SourceFromProjectReference"),
      (FileIncludeKind[(FileIncludeKind.OutputFromProjectReference = 2)] =
        "OutputFromProjectReference"),
      (FileIncludeKind[(FileIncludeKind.Import = 3)] = "Import"),
      (FileIncludeKind[(FileIncludeKind.ReferenceFile = 4)] = "ReferenceFile"),
      (FileIncludeKind[(FileIncludeKind.TypeReferenceDirective = 5)] =
        "TypeReferenceDirective"),
      (FileIncludeKind[(FileIncludeKind.LibFile = 6)] = "LibFile"),
      (FileIncludeKind[(FileIncludeKind.LibReferenceDirective = 7)] =
        "LibReferenceDirective"),
      (FileIncludeKind[(FileIncludeKind.AutomaticTypeDirectiveFile = 8)] =
        "AutomaticTypeDirectiveFile");
  })(
    (FileIncludeKind =
      __exports__FileIncludeKind || (__exports__FileIncludeKind = {}))
  ),
    (function (ExitStatus) {
      (ExitStatus[(ExitStatus.Success = 0)] = "Success"),
        (ExitStatus[(ExitStatus.DiagnosticsPresent_OutputsSkipped = 1)] =
          "DiagnosticsPresent_OutputsSkipped"),
        (ExitStatus[(ExitStatus.DiagnosticsPresent_OutputsGenerated = 2)] =
          "DiagnosticsPresent_OutputsGenerated"),
        (ExitStatus[(ExitStatus.InvalidProject_OutputsSkipped = 3)] =
          "InvalidProject_OutputsSkipped"),
        (ExitStatus[(ExitStatus.ProjectReferenceCycle_OutputsSkipped = 4)] =
          "ProjectReferenceCycle_OutputsSkipped"),
        (ExitStatus[(ExitStatus.ProjectReferenceCycle_OutputsSkupped = 4)] =
          "ProjectReferenceCycle_OutputsSkupped");
    })((ExitStatus = __exports__ExitStatus || (__exports__ExitStatus = {}))),
    (function (TypeReferenceSerializationKind) {
      (TypeReferenceSerializationKind[
        (TypeReferenceSerializationKind.Unknown = 0)
      ] = "Unknown"),
        (TypeReferenceSerializationKind[
          (TypeReferenceSerializationKind.TypeWithConstructSignatureAndValue = 1)
        ] = "TypeWithConstructSignatureAndValue"),
        (TypeReferenceSerializationKind[
          (TypeReferenceSerializationKind.VoidNullableOrNeverType = 2)
        ] = "VoidNullableOrNeverType"),
        (TypeReferenceSerializationKind[
          (TypeReferenceSerializationKind.NumberLikeType = 3)
        ] = "NumberLikeType"),
        (TypeReferenceSerializationKind[
          (TypeReferenceSerializationKind.BigIntLikeType = 4)
        ] = "BigIntLikeType"),
        (TypeReferenceSerializationKind[
          (TypeReferenceSerializationKind.StringLikeType = 5)
        ] = "StringLikeType"),
        (TypeReferenceSerializationKind[
          (TypeReferenceSerializationKind.BooleanType = 6)
        ] = "BooleanType"),
        (TypeReferenceSerializationKind[
          (TypeReferenceSerializationKind.ArrayLikeType = 7)
        ] = "ArrayLikeType"),
        (TypeReferenceSerializationKind[
          (TypeReferenceSerializationKind.ESSymbolType = 8)
        ] = "ESSymbolType"),
        (TypeReferenceSerializationKind[
          (TypeReferenceSerializationKind.Promise = 9)
        ] = "Promise"),
        (TypeReferenceSerializationKind[
          (TypeReferenceSerializationKind.TypeWithCallSignature = 10)
        ] = "TypeWithCallSignature"),
        (TypeReferenceSerializationKind[
          (TypeReferenceSerializationKind.ObjectType = 11)
        ] = "ObjectType");
    })(
      (TypeReferenceSerializationKind =
        __exports__TypeReferenceSerializationKind ||
        (__exports__TypeReferenceSerializationKind = {}))
    ),
    (function (DiagnosticCategory) {
      (DiagnosticCategory[(DiagnosticCategory.Warning = 0)] = "Warning"),
        (DiagnosticCategory[(DiagnosticCategory.Error = 1)] = "Error"),
        (DiagnosticCategory[(DiagnosticCategory.Suggestion = 2)] =
          "Suggestion"),
        (DiagnosticCategory[(DiagnosticCategory.Message = 3)] = "Message");
    })(
      (DiagnosticCategory =
        __exports__DiagnosticCategory || (__exports__DiagnosticCategory = {}))
    ),
    (function (ModuleResolutionKind) {
      (ModuleResolutionKind[(ModuleResolutionKind.Classic = 1)] = "Classic"),
        (ModuleResolutionKind[(ModuleResolutionKind.NodeJs = 2)] = "NodeJs");
    })(
      (ModuleResolutionKind =
        __exports__ModuleResolutionKind ||
        (__exports__ModuleResolutionKind = {}))
    ),
    (function (WatchFileKind) {
      (WatchFileKind[(WatchFileKind.FixedPollingInterval = 0)] =
        "FixedPollingInterval"),
        (WatchFileKind[(WatchFileKind.PriorityPollingInterval = 1)] =
          "PriorityPollingInterval"),
        (WatchFileKind[(WatchFileKind.DynamicPriorityPolling = 2)] =
          "DynamicPriorityPolling"),
        (WatchFileKind[(WatchFileKind.UseFsEvents = 3)] = "UseFsEvents"),
        (WatchFileKind[(WatchFileKind.UseFsEventsOnParentDirectory = 4)] =
          "UseFsEventsOnParentDirectory");
    })(
      (WatchFileKind =
        __exports__WatchFileKind || (__exports__WatchFileKind = {}))
    ),
    (function (WatchDirectoryKind) {
      (WatchDirectoryKind[(WatchDirectoryKind.UseFsEvents = 0)] =
        "UseFsEvents"),
        (WatchDirectoryKind[(WatchDirectoryKind.FixedPollingInterval = 1)] =
          "FixedPollingInterval"),
        (WatchDirectoryKind[(WatchDirectoryKind.DynamicPriorityPolling = 2)] =
          "DynamicPriorityPolling");
    })(
      (WatchDirectoryKind =
        __exports__WatchDirectoryKind || (__exports__WatchDirectoryKind = {}))
    ),
    (function (PollingWatchKind) {
      (PollingWatchKind[(PollingWatchKind.FixedInterval = 0)] =
        "FixedInterval"),
        (PollingWatchKind[(PollingWatchKind.PriorityInterval = 1)] =
          "PriorityInterval"),
        (PollingWatchKind[(PollingWatchKind.DynamicPriority = 2)] =
          "DynamicPriority");
    })(
      (PollingWatchKind =
        __exports__PollingWatchKind || (__exports__PollingWatchKind = {}))
    ),
    (function (ModuleKind) {
      (ModuleKind[(ModuleKind.None = 0)] = "None"),
        (ModuleKind[(ModuleKind.CommonJS = 1)] = "CommonJS"),
        (ModuleKind[(ModuleKind.AMD = 2)] = "AMD"),
        (ModuleKind[(ModuleKind.UMD = 3)] = "UMD"),
        (ModuleKind[(ModuleKind.System = 4)] = "System"),
        (ModuleKind[(ModuleKind.ES2015 = 5)] = "ES2015"),
        (ModuleKind[(ModuleKind.ES2020 = 6)] = "ES2020"),
        (ModuleKind[(ModuleKind.ESNext = 99)] = "ESNext");
    })((ModuleKind = __exports__ModuleKind || (__exports__ModuleKind = {})));
}
{
  let NativeCollections;
  !(function (NativeCollections) {
    (NativeCollections.tryGetNativeMap = function () {
      return "undefined" != typeof Map &&
        "entries" in Map.prototype &&
        1 === new Map([[0, 0]]).size
        ? Map
        : void 0;
    }),
      (NativeCollections.tryGetNativeSet = function () {
        return "undefined" != typeof Set &&
          "entries" in Set.prototype &&
          1 === new Set([0]).size
          ? Set
          : void 0;
      });
  })(
    (NativeCollections =
      __exports__NativeCollections || (__exports__NativeCollections = {}))
  );
}
{
  function getCollectionImplementation(name, nativeFactory, shimFactory) {
    const constructor =
      __exports__NativeCollections[nativeFactory]() ??
      __exports__ShimCollections?.[shimFactory](getIterator);
    if (constructor) return constructor;
    throw Error(
      `TypeScript requires an environment that provides a compatible native ${name} implementation.`
    );
  }
  function getIterator(iterable) {
    if (iterable) {
      if (isArray(iterable))
        return (function (array) {
          let i = 0;
          return {
            next: () =>
              i === array.length
                ? { value: void 0, done: !0 }
                : (i++, { value: array[i - 1], done: !1 }),
          };
        })(iterable);
      if (iterable instanceof __exports__Map) return iterable.entries();
      if (iterable instanceof __exports__Set) return iterable.values();
      throw Error("Iteration not supported.");
    }
  }
  function contains(array, value, equalityComparer = equateValues) {
    if (array) for (const v of array) if (equalityComparer(v, value)) return !0;
    return !1;
  }
  function toOffset(array, offset) {
    return offset < 0 ? array.length + offset : offset;
  }
  function addRange(to, from, start, end) {
    if (void 0 === from || 0 === from.length) return to;
    if (void 0 === to) return from.slice(start, end);
    (start = void 0 === start ? 0 : toOffset(from, start)),
      (end = void 0 === end ? from.length : toOffset(from, end));
    for (let i = start; i < end && i < from.length; i++)
      void 0 !== from[i] && to.push(from[i]);
    return to;
  }
  (__exports__Map = getCollectionImplementation(
    "Map",
    "tryGetNativeMap",
    "createMapShim"
  )),
    (__exports__Set = getCollectionImplementation(
      "Set",
      "tryGetNativeSet",
      "createSetShim"
    )),
    (__exports__emptyArray = []),
    new __exports__Map(),
    new __exports__Set(),
    (__exports__forEach = function (array, callback) {
      if (array)
        for (let i = 0; i < array.length; i++) {
          const result = callback(array[i], i);
          if (result) return result;
        }
    }),
    (__exports__every = function (array, callback) {
      if (array)
        for (let i = 0; i < array.length; i++)
          if (!callback(array[i], i)) return !1;
      return !0;
    }),
    (__exports__find = function (array, predicate) {
      for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (predicate(value, i)) return value;
      }
    }),
    (__exports__findIndex = function (array, predicate, startIndex) {
      for (let i = startIndex || 0; i < array.length; i++)
        if (predicate(array[i], i)) return i;
      return -1;
    }),
    (__exports__contains = contains),
    (__exports__indexOfAnyCharCode = function (text, charCodes, start) {
      for (let i = start || 0; i < text.length; i++)
        if (contains(charCodes, text.charCodeAt(i))) return i;
      return -1;
    }),
    (__exports__map = function (array, f) {
      let result;
      if (array) {
        result = [];
        for (let i = 0; i < array.length; i++) result.push(f(array[i], i));
      }
      return result;
    }),
    (__exports__flatten = function (array) {
      const result = [];
      for (const v of array)
        v && (isArray(v) ? addRange(result, v) : result.push(v));
      return result;
    }),
    (__exports__flatMap = function (array, mapfn) {
      let result;
      if (array)
        for (let i = 0; i < array.length; i++) {
          const v = mapfn(array[i], i);
          v &&
            (result = isArray(v)
              ? addRange(result, v)
              : ((to = result),
                void 0 === (value = v)
                  ? to
                  : void 0 === to
                  ? [value]
                  : (to.push(value), to)));
        }
      var to, value;
      return result || __exports__emptyArray;
    }),
    (__exports__mapDefined = function (array, mapFn) {
      const result = [];
      if (array)
        for (let i = 0; i < array.length; i++) {
          const mapped = mapFn(array[i], i);
          void 0 !== mapped && result.push(mapped);
        }
      return result;
    }),
    (__exports__some = function (array, predicate) {
      if (array) {
        if (!predicate) return array.length > 0;
        for (const v of array) if (predicate(v)) return !0;
      }
      return !1;
    }),
    (__exports__sort = function (array, comparer) {
      return 0 === array.length ? array : array.slice().sort(comparer);
    }),
    (__exports__lastOrUndefined = function (array) {
      return 0 === array.length ? void 0 : array[array.length - 1];
    }),
    (__exports__last = function (array) {
      return (
        __exports__Debug.assert(0 !== array.length), array[array.length - 1]
      );
    });
  const hasOwnProperty = Object.prototype.hasOwnProperty,
    _entries =
      Object.entries ||
      ((obj) => {
        const keys = (function (map) {
            const keys = [];
            for (const key in map)
              hasOwnProperty.call(map, key) && keys.push(key);
            return keys;
          })(obj),
          result = Array(keys.length);
        for (let i = 0; i < keys.length; i++)
          result[i] = [keys[i], obj[keys[i]]];
        return result;
      });
  function multiMapAdd(key, value) {
    let values = this.get(key);
    return (
      values ? values.push(value) : this.set(key, (values = [value])), values
    );
  }
  function multiMapRemove(key, value) {
    const values = this.get(key);
    values &&
      (unorderedRemoveItem(values, value), values.length || this.delete(key));
  }
  function isArray(value) {
    return Array.isArray ? Array.isArray(value) : value instanceof Array;
  }
  function noop(_) {}
  function identity(x) {
    return x;
  }
  function toLowerCase(x) {
    return x.toLowerCase();
  }
  (__exports__getEntries = function (obj) {
    return obj ? _entries(obj) : [];
  }),
    (__exports__createMultiMap = function () {
      const map = new __exports__Map();
      return (map.add = multiMapAdd), (map.remove = multiMapRemove), map;
    }),
    (__exports__isArray = isArray),
    (__exports__isString = function (text) {
      return "string" == typeof text;
    }),
    (__exports__noop = noop);
  const fileNameLowerCaseRegExp = /[^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+/g;
  function toFileNameLowerCase(x) {
    return fileNameLowerCaseRegExp.test(x)
      ? x.replace(fileNameLowerCaseRegExp, toLowerCase)
      : x;
  }
  function equateValues(a, b) {
    return a === b;
  }
  function compareStringsCaseInsensitive(a, b) {
    return a === b
      ? 0
      : void 0 === a
      ? -1
      : void 0 === b
      ? 1
      : (a = a.toUpperCase()) < (b = b.toUpperCase())
      ? -1
      : a > b
      ? 1
      : 0;
  }
  function compareStringsCaseSensitive(a, b) {
    return (function (a, b) {
      return a === b
        ? 0
        : void 0 === a
        ? -1
        : void 0 === b
        ? 1
        : a < b
        ? -1
        : 1;
    })(a, b);
  }
  function unorderedRemoveItemAt(array, index) {
    (array[index] = array[array.length - 1]), array.pop();
  }
  function unorderedRemoveItem(array, item) {
    return (function (array, predicate) {
      for (let i = 0; i < array.length; i++)
        if (array[i] === item) return unorderedRemoveItemAt(array, i), !0;
      return !1;
    })(array);
  }
  (__exports__memoize = function (callback) {
    let value;
    return () => (
      callback && ((value = callback()), (callback = void 0)), value
    );
  }),
    (__exports__equateStringsCaseInsensitive = function (a, b) {
      return (
        a === b ||
        (void 0 !== a && void 0 !== b && a.toUpperCase() === b.toUpperCase())
      );
    }),
    (__exports__equateStringsCaseSensitive = function (a, b) {
      return equateValues(a, b);
    }),
    (__exports__compareStringsCaseSensitive = compareStringsCaseSensitive),
    (__exports__getStringComparer = function (ignoreCase) {
      return ignoreCase
        ? compareStringsCaseInsensitive
        : compareStringsCaseSensitive;
    }),
    (() => {
      let defaultComparer, enUSComparer;
      const stringComparerFactory =
        "object" == typeof Intl && "function" == typeof Intl.Collator
          ? function (locale) {
              const comparer = new Intl.Collator(locale, {
                usage: "sort",
                sensitivity: "variant",
              }).compare;
              return (a, b) => compareWithCallback(a, b, comparer);
            }
          : "function" == typeof String.prototype.localeCompare &&
            "function" == typeof String.prototype.toLocaleUpperCase &&
            "a".localeCompare("B") < 0
          ? function (locale) {
              return void 0 !== locale
                ? createFallbackStringComparer()
                : (a, b) => compareWithCallback(a, b, compareStrings);
              function compareStrings(a, b) {
                return a.localeCompare(b);
              }
            }
          : createFallbackStringComparer;
      return function (locale) {
        return void 0 === locale
          ? defaultComparer || (defaultComparer = stringComparerFactory(locale))
          : "en-US" === locale
          ? enUSComparer || (enUSComparer = stringComparerFactory(locale))
          : stringComparerFactory(locale);
      };
      function compareWithCallback(a, b, comparer) {
        if (a === b) return 0;
        if (void 0 === a) return -1;
        if (void 0 === b) return 1;
        const value = comparer(a, b);
        return value < 0 ? -1 : value > 0 ? 1 : 0;
      }
      function createFallbackStringComparer() {
        return (a, b) => compareWithCallback(a, b, compareDictionaryOrder);
        function compareDictionaryOrder(a, b) {
          return (
            compareStrings(a.toUpperCase(), b.toUpperCase()) ||
            compareStrings(a, b)
          );
        }
        function compareStrings(a, b) {
          return a < b ? -1 : a > b ? 1 : 0;
        }
      }
    })(),
    (__exports__endsWith = function (str, suffix) {
      const expectedPos = str.length - suffix.length;
      return (
        expectedPos >= 0 && str.indexOf(suffix, expectedPos) === expectedPos
      );
    }),
    (__exports__stringContains = function (str, substring) {
      return -1 !== str.indexOf(substring);
    }),
    (__exports__unorderedRemoveItem = unorderedRemoveItem),
    (__exports__createGetCanonicalFileName = function (
      useCaseSensitiveFileNames
    ) {
      return useCaseSensitiveFileNames ? identity : toFileNameLowerCase;
    }),
    (__exports__startsWith = function (str, prefix) {
      return 0 === str.lastIndexOf(prefix, 0);
    }),
    (__exports__enumerateInsertsAndDeletes = function (
      newItems,
      oldItems,
      comparer,
      inserted,
      deleted,
      unchanged
    ) {
      unchanged = unchanged || noop;
      let newIndex = 0,
        oldIndex = 0;
      const newLen = newItems.length,
        oldLen = oldItems.length;
      let hasChanges = !1;
      for (; newIndex < newLen && oldIndex < oldLen; ) {
        const newItem = newItems[newIndex],
          oldItem = oldItems[oldIndex],
          compareResult = comparer(newItem, oldItem);
        -1 === compareResult
          ? (inserted(newItem), newIndex++, (hasChanges = !0))
          : 1 === compareResult
          ? (deleted(oldItem), oldIndex++, (hasChanges = !0))
          : (unchanged(oldItem, newItem), newIndex++, oldIndex++);
      }
      for (; newIndex < newLen; )
        inserted(newItems[newIndex++]), (hasChanges = !0);
      for (; oldIndex < oldLen; )
        deleted(oldItems[oldIndex++]), (hasChanges = !0);
      return hasChanges;
    });
}
{
  function createMapData() {
    const sentinel = {};
    return (
      (sentinel.prev = sentinel), { head: sentinel, tail: sentinel, size: 0 }
    );
  }
  function sameValueZero(x, y) {
    return x === y || (x != x && y != y);
  }
  function getPrev(entry) {
    const prev = entry.prev;
    if (!prev || prev === entry) throw Error("Illegal state");
    return prev;
  }
  function getNext(entry) {
    for (; entry; ) {
      const skipNext = !entry.prev;
      if (((entry = entry.next), !skipNext)) return entry;
    }
  }
  function getEntry(data, key) {
    for (let entry = data.tail; entry !== data.head; entry = getPrev(entry))
      if (sameValueZero(entry.key, key)) return entry;
  }
  function addOrUpdateEntry(data, key, value) {
    const existing = getEntry(data, key);
    if (existing) return void (existing.value = value);
    const entry = (function (key, value) {
      return { key: key, value: value, next: void 0, prev: void 0 };
    })(key, value);
    return (
      (entry.prev = data.tail),
      (data.tail.next = entry),
      (data.tail = entry),
      data.size++,
      entry
    );
  }
  function deleteEntry(data, key) {
    for (let entry = data.tail; entry !== data.head; entry = getPrev(entry)) {
      if (void 0 === entry.prev) throw Error("Illegal state");
      if (sameValueZero(entry.key, key)) {
        if (entry.next) entry.next.prev = entry.prev;
        else {
          if (data.tail !== entry) throw Error("Illegal state");
          data.tail = entry.prev;
        }
        return (
          (entry.prev.next = entry.next),
          (entry.next = entry.prev),
          (entry.prev = void 0),
          data.size--,
          entry
        );
      }
    }
  }
  function clearEntries(data) {
    let node = data.tail;
    for (; node !== data.head; ) {
      const prev = getPrev(node);
      (node.next = data.head), (node.prev = void 0), (node = prev);
    }
    (data.head.next = void 0), (data.tail = data.head), (data.size = 0);
  }
  function forEachEntry(data, action) {
    let entry = data.head;
    for (; entry; )
      (entry = getNext(entry)), entry && action(entry.value, entry.key);
  }
  function forEachIteration(iterator, action) {
    if (iterator)
      for (let step = iterator.next(); !step.done; step = iterator.next())
        action(step.value);
  }
  function createIteratorData(data, selector) {
    return { current: data.head, selector: selector };
  }
  function iteratorNext(data) {
    return (
      (data.current = getNext(data.current)),
      data.current
        ? {
            value: data.selector(data.current.key, data.current.value),
            done: !1,
          }
        : { value: void 0, done: !0 }
    );
  }
  let ShimCollections;
  !(function (ShimCollections) {
    (ShimCollections.createMapShim = function (getIterator) {
      class MapIterator {
        constructor(data, selector) {
          this._data = createIteratorData(data, selector);
        }
        next() {
          return iteratorNext(this._data);
        }
      }
      return class {
        constructor(iterable) {
          (this._mapData = createMapData()),
            forEachIteration(getIterator(iterable), ([key, value]) =>
              this.set(key, value)
            );
        }
        get size() {
          return this._mapData.size;
        }
        get(key) {
          return getEntry(this._mapData, key)?.value;
        }
        set(key, value) {
          return addOrUpdateEntry(this._mapData, key, value), this;
        }
        has(key) {
          return !!getEntry(this._mapData, key);
        }
        delete(key) {
          return !!deleteEntry(this._mapData, key);
        }
        clear() {
          clearEntries(this._mapData);
        }
        keys() {
          return new MapIterator(this._mapData, (key, _value) => key);
        }
        values() {
          return new MapIterator(this._mapData, (_key, value) => value);
        }
        entries() {
          return new MapIterator(this._mapData, (key, value) => [key, value]);
        }
        forEach(action) {
          forEachEntry(this._mapData, action);
        }
      };
    }),
      (ShimCollections.createSetShim = function (getIterator) {
        class SetIterator {
          constructor(data, selector) {
            this._data = createIteratorData(data, selector);
          }
          next() {
            return iteratorNext(this._data);
          }
        }
        return class {
          constructor(iterable) {
            (this._mapData = createMapData()),
              forEachIteration(getIterator(iterable), (value) =>
                this.add(value)
              );
          }
          get size() {
            return this._mapData.size;
          }
          add(value) {
            return addOrUpdateEntry(this._mapData, value, value), this;
          }
          has(value) {
            return !!getEntry(this._mapData, value);
          }
          delete(value) {
            return !!deleteEntry(this._mapData, value);
          }
          clear() {
            clearEntries(this._mapData);
          }
          keys() {
            return new SetIterator(this._mapData, (key, _value) => key);
          }
          values() {
            return new SetIterator(this._mapData, (_key, value) => value);
          }
          entries() {
            return new SetIterator(this._mapData, (key, value) => [key, value]);
          }
          forEach(action) {
            forEachEntry(this._mapData, action);
          }
        };
      });
  })(
    (ShimCollections =
      __exports__ShimCollections || (__exports__ShimCollections = {}))
  );
}
{
  const urlSchemeSeparator = "://",
    backslashRegExp = /\\/g;
  function isRootedDiskPath(path) {
    return getEncodedRootLength(path) > 0;
  }
  function fileExtensionIs(path, extension) {
    return (
      path.length > extension.length && __exports__endsWith(path, extension)
    );
  }
  function hasTrailingDirectorySeparator(path) {
    return (
      path.length > 0 &&
      (47 === (charCode = path.charCodeAt(path.length - 1)) || 92 === charCode)
    );
    var charCode;
  }
  function isVolumeCharacter(charCode) {
    return (
      (charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)
    );
  }
  function getEncodedRootLength(path) {
    if (!path) return 0;
    const ch0 = path.charCodeAt(0);
    if (47 === ch0 || 92 === ch0) {
      if (path.charCodeAt(1) !== ch0) return 1;
      const p1 = path.indexOf(47 === ch0 ? "/" : "\\", 2);
      return p1 < 0 ? path.length : p1 + 1;
    }
    if (isVolumeCharacter(ch0) && 58 === path.charCodeAt(1)) {
      const ch2 = path.charCodeAt(2);
      if (47 === ch2 || 92 === ch2) return 3;
      if (2 === path.length) return 2;
    }
    const schemeEnd = path.indexOf(urlSchemeSeparator);
    if (-1 !== schemeEnd) {
      const authorityStart = schemeEnd + urlSchemeSeparator.length,
        authorityEnd = path.indexOf("/", authorityStart);
      if (-1 !== authorityEnd) {
        const scheme = path.slice(0, schemeEnd),
          authority = path.slice(authorityStart, authorityEnd);
        if (
          "file" === scheme &&
          ("" === authority || "localhost" === authority) &&
          isVolumeCharacter(path.charCodeAt(authorityEnd + 1))
        ) {
          const volumeSeparatorEnd = (function (url, start) {
            const ch0 = url.charCodeAt(start);
            if (58 === ch0) return start + 1;
            if (37 === ch0 && 51 === url.charCodeAt(start + 1)) {
              const ch2 = url.charCodeAt(start + 2);
              if (97 === ch2 || 65 === ch2) return start + 3;
            }
            return -1;
          })(path, authorityEnd + 2);
          if (-1 !== volumeSeparatorEnd) {
            if (47 === path.charCodeAt(volumeSeparatorEnd))
              return ~(volumeSeparatorEnd + 1);
            if (volumeSeparatorEnd === path.length) return ~volumeSeparatorEnd;
          }
        }
        return ~(authorityEnd + 1);
      }
      return ~path.length;
    }
    return 0;
  }
  function getRootLength(path) {
    const rootLength = getEncodedRootLength(path);
    return rootLength < 0 ? ~rootLength : rootLength;
  }
  function getBaseFileName(path, extensions, ignoreCase) {
    if (getRootLength((path = normalizeSlashes(path))) === path.length)
      return "";
    const name = (path = removeTrailingDirectorySeparator(path)).slice(
        Math.max(getRootLength(path), path.lastIndexOf("/") + 1)
      ),
      extension =
        void 0 !== extensions && void 0 !== ignoreCase
          ? (function (path, extensions, ignoreCase) {
              if (extensions)
                return (function (path, extensions, stringEqualityComparer) {
                  if ("string" == typeof extensions)
                    return tryGetExtensionFromPath(path) || "";
                  for (const extension of extensions) {
                    const result = tryGetExtensionFromPath(path);
                    if (result) return result;
                  }
                  return "";
                })(removeTrailingDirectorySeparator(path), extensions);
              const baseFileName = getBaseFileName(path),
                extensionIndex = baseFileName.lastIndexOf(".");
              return extensionIndex >= 0
                ? baseFileName.substring(extensionIndex)
                : "";
            })(name, extensions)
          : void 0;
    return extension ? name.slice(0, name.length - extension.length) : name;
  }
  function tryGetExtensionFromPath(path, extension, stringEqualityComparer) {
    if (
      (__exports__startsWith(extension, ".") || (extension = "." + extension),
      path.length >= extension.length &&
        46 === path.charCodeAt(path.length - extension.length))
    ) {
      const pathExtension = path.slice(path.length - extension.length);
      if (stringEqualityComparer(pathExtension, extension))
        return pathExtension;
    }
  }
  function getPathComponents(path, currentDirectory = "") {
    return (function (path, rootLength) {
      const root = path.substring(0, rootLength),
        rest = path.substring(rootLength).split("/");
      return (
        rest.length && !__exports__lastOrUndefined(rest) && rest.pop(),
        [root, ...rest]
      );
    })((path = combinePaths(currentDirectory, path)), getRootLength(path));
  }
  function getPathFromPathComponents(pathComponents) {
    return 0 === pathComponents.length
      ? ""
      : (pathComponents[0] &&
          ensureTrailingDirectorySeparator(pathComponents[0])) +
          pathComponents.slice(1).join("/");
  }
  function normalizeSlashes(path) {
    return path.replace(backslashRegExp, "/");
  }
  function reducePathComponents(components) {
    if (!__exports__some(components)) return [];
    const reduced = [components[0]];
    for (let i = 1; i < components.length; i++) {
      const component = components[i];
      if (component && "." !== component) {
        if (".." === component)
          if (reduced.length > 1) {
            if (".." !== reduced[reduced.length - 1]) {
              reduced.pop();
              continue;
            }
          } else if (reduced[0]) continue;
        reduced.push(component);
      }
    }
    return reduced;
  }
  function combinePaths(path, ...paths) {
    path && (path = normalizeSlashes(path));
    for (let relativePath of paths)
      relativePath &&
        ((relativePath = normalizeSlashes(relativePath)),
        (path =
          path && 0 === getRootLength(relativePath)
            ? ensureTrailingDirectorySeparator(path) + relativePath
            : relativePath));
    return path;
  }
  function resolvePath(path, ...paths) {
    return normalizePath(
      __exports__some(paths)
        ? combinePaths(path, ...paths)
        : normalizeSlashes(path)
    );
  }
  function getNormalizedPathComponents(path, currentDirectory) {
    return reducePathComponents(getPathComponents(path, currentDirectory));
  }
  function normalizePath(path) {
    const normalized = getPathFromPathComponents(
      reducePathComponents(getPathComponents((path = normalizeSlashes(path))))
    );
    return normalized && hasTrailingDirectorySeparator(path)
      ? ensureTrailingDirectorySeparator(normalized)
      : normalized;
  }
  function removeTrailingDirectorySeparator(path) {
    return hasTrailingDirectorySeparator(path)
      ? path.substr(0, path.length - 1)
      : path;
  }
  function ensureTrailingDirectorySeparator(path) {
    return hasTrailingDirectorySeparator(path) ? path : path + "/";
  }
  (__exports__isRootedDiskPath = isRootedDiskPath),
    (__exports__hasExtension = function (fileName) {
      return __exports__stringContains(getBaseFileName(fileName), ".");
    }),
    (__exports__fileExtensionIs = fileExtensionIs),
    (__exports__fileExtensionIsOneOf = function (path, extensions) {
      for (const extension of extensions)
        if (fileExtensionIs(path, extension)) return !0;
      return !1;
    }),
    (__exports__getRootLength = getRootLength),
    (__exports__getDirectoryPath = function (path) {
      const rootLength = getRootLength((path = normalizeSlashes(path)));
      return rootLength === path.length
        ? path
        : (path = removeTrailingDirectorySeparator(path)).slice(
            0,
            Math.max(rootLength, path.lastIndexOf("/"))
          );
    }),
    (__exports__normalizeSlashes = normalizeSlashes),
    (__exports__combinePaths = combinePaths),
    (__exports__getNormalizedPathComponents = getNormalizedPathComponents),
    (__exports__getNormalizedAbsolutePath = function (
      fileName,
      currentDirectory
    ) {
      return getPathFromPathComponents(
        getNormalizedPathComponents(fileName, currentDirectory)
      );
    }),
    (__exports__normalizePath = normalizePath),
    (__exports__removeTrailingDirectorySeparator = removeTrailingDirectorySeparator),
    (__exports__containsPath = function (
      parent,
      child,
      currentDirectory,
      ignoreCase
    ) {
      if (
        ("string" == typeof currentDirectory
          ? ((parent = combinePaths(currentDirectory, parent)),
            (child = combinePaths(currentDirectory, child)))
          : "boolean" == typeof currentDirectory &&
            (ignoreCase = currentDirectory),
        void 0 === parent || void 0 === child)
      )
        return !1;
      if (parent === child) return !0;
      const parentComponents = reducePathComponents(getPathComponents(parent)),
        childComponents = reducePathComponents(getPathComponents(child));
      if (childComponents.length < parentComponents.length) return !1;
      const componentEqualityComparer = ignoreCase
        ? __exports__equateStringsCaseInsensitive
        : __exports__equateStringsCaseSensitive;
      for (let i = 0; i < parentComponents.length; i++)
        if (
          !(0 === i
            ? __exports__equateStringsCaseInsensitive
            : componentEqualityComparer)(
            parentComponents[i],
            childComponents[i]
          )
        )
          return !1;
      return !0;
    }),
    (__exports__getRelativePathToDirectoryOrUrl = function (
      directoryPathOrUrl,
      relativeOrAbsolutePath,
      currentDirectory,
      getCanonicalFileName,
      isAbsolutePathAnUrl
    ) {
      const pathComponents = (function (
          from,
          to,
          stringEqualityComparer,
          getCanonicalFileName
        ) {
          const fromComponents = reducePathComponents(getPathComponents(from)),
            toComponents = reducePathComponents(getPathComponents(to));
          let start;
          for (
            start = 0;
            start < fromComponents.length && start < toComponents.length;
            start++
          ) {
            const fromComponent = getCanonicalFileName(fromComponents[start]),
              toComponent = getCanonicalFileName(toComponents[start]);
            if (
              !(0 === start
                ? __exports__equateStringsCaseInsensitive
                : stringEqualityComparer)(fromComponent, toComponent)
            )
              break;
          }
          if (0 === start) return toComponents;
          const components = toComponents.slice(start),
            relative = [];
          for (; start < fromComponents.length; start++) relative.push("..");
          return ["", ...relative, ...components];
        })(
          resolvePath(currentDirectory, directoryPathOrUrl),
          resolvePath(currentDirectory, relativeOrAbsolutePath),
          __exports__equateStringsCaseSensitive,
          getCanonicalFileName
        ),
        firstComponent = pathComponents[0];
      if (isAbsolutePathAnUrl && isRootedDiskPath(firstComponent)) {
        const prefix =
          "/" === firstComponent.charAt(0) ? "file://" : "file:///";
        pathComponents[0] = prefix + firstComponent;
      }
      return getPathFromPathComponents(pathComponents);
    });
}
{
  function forEachEntry(map, callback) {
    const iterator = map.entries();
    for (
      let iterResult = iterator.next();
      !iterResult.done;
      iterResult = iterator.next()
    ) {
      const [key, value] = iterResult.value,
        result = callback(value, key);
      if (result) return result;
    }
  }
  function ensureDirectoriesExist(
    directoryPath,
    createDirectory,
    directoryExists
  ) {
    directoryPath.length > __exports__getRootLength(directoryPath) &&
      !directoryExists(directoryPath) &&
      (ensureDirectoriesExist(
        __exports__getDirectoryPath(directoryPath),
        createDirectory,
        directoryExists
      ),
      createDirectory(directoryPath));
  }
  new __exports__Map(
    __exports__getEntries({
      "\t": "\\t",
      "\v": "\\v",
      "\f": "\\f",
      "\b": "\\b",
      "\r": "\\r",
      "\n": "\\n",
      "\\": "\\\\",
      '"': '\\"',
      "'": "\\'",
      "`": "\\`",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
      "": "\\u0085",
    })
  ),
    new __exports__Map(__exports__getEntries({ '"': "&quot;", "'": "&apos;" })),
    (__exports__writeFileEnsuringDirectories = function (
      path,
      data,
      writeByteOrderMark,
      writeFile,
      createDirectory,
      directoryExists
    ) {
      try {
        writeFile(path, data, writeByteOrderMark);
      } catch {
        ensureDirectoriesExist(
          __exports__getDirectoryPath(__exports__normalizePath(path)),
          createDirectory,
          directoryExists
        ),
          writeFile(path, data, writeByteOrderMark);
      }
    }),
    (__exports__closeFileWatcher = function (watcher) {
      watcher.close();
    });
  const reservedCharacterPattern = /[^\w\s\/]/g,
    wildcardCharCodes = [42, 63],
    implicitExcludePathRegexPattern =
      "(?!(node_modules|bower_components|jspm_packages)(/|$))",
    filesMatcher = {
      singleAsteriskRegexFragment: "([^./]|(\\.(?!min\\.js$))?)*",
      doubleAsteriskRegexFragment: `(/${implicitExcludePathRegexPattern}[^/.][^/]*)*?`,
      replaceWildcardCharacter: (match) =>
        replaceWildcardCharacter(
          match,
          filesMatcher.singleAsteriskRegexFragment
        ),
    },
    directoriesMatcher = {
      singleAsteriskRegexFragment: "[^/]*",
      doubleAsteriskRegexFragment: `(/${implicitExcludePathRegexPattern}[^/.][^/]*)*?`,
      replaceWildcardCharacter: (match) =>
        replaceWildcardCharacter(
          match,
          directoriesMatcher.singleAsteriskRegexFragment
        ),
    },
    excludeMatcher = {
      singleAsteriskRegexFragment: "[^/]*",
      doubleAsteriskRegexFragment: "(/.+?)?",
      replaceWildcardCharacter: (match) =>
        replaceWildcardCharacter(
          match,
          excludeMatcher.singleAsteriskRegexFragment
        ),
    },
    wildcardMatchers = {
      files: filesMatcher,
      directories: directoriesMatcher,
      exclude: excludeMatcher,
    };
  function getRegularExpressionForWildcard(specs, basePath, usage) {
    const patterns = getRegularExpressionsForWildcards(specs, basePath, usage);
    if (patterns && patterns.length)
      return `^(${patterns.map((pattern) => `(${pattern})`).join("|")})${
        "exclude" === usage ? "($|/)" : "$"
      }`;
  }
  function getRegularExpressionsForWildcards(specs, basePath, usage) {
    if (void 0 !== specs && 0 !== specs.length)
      return __exports__flatMap(
        specs,
        (spec) =>
          spec &&
          (function (
            spec,
            basePath,
            usage,
            {
              singleAsteriskRegexFragment: singleAsteriskRegexFragment,
              doubleAsteriskRegexFragment: doubleAsteriskRegexFragment,
              replaceWildcardCharacter: replaceWildcardCharacter,
            }
          ) {
            let subpattern = "",
              hasWrittenComponent = !1;
            const components = __exports__getNormalizedPathComponents(
                spec,
                basePath
              ),
              lastComponent = __exports__last(components);
            if ("exclude" !== usage && "**" === lastComponent) return;
            (components[0] = __exports__removeTrailingDirectorySeparator(
              components[0]
            )),
              !/[.*?]/.test(lastComponent) && components.push("**", "*");
            let optionalCount = 0;
            for (let component of components) {
              if ("**" === component) subpattern += doubleAsteriskRegexFragment;
              else if (
                ("directories" === usage &&
                  ((subpattern += "("), optionalCount++),
                hasWrittenComponent && (subpattern += "/"),
                "exclude" !== usage)
              ) {
                let componentPattern = "";
                42 === component.charCodeAt(0)
                  ? ((componentPattern +=
                      "([^./]" + singleAsteriskRegexFragment + ")?"),
                    (component = component.substr(1)))
                  : 63 === component.charCodeAt(0) &&
                    ((componentPattern += "[^./]"),
                    (component = component.substr(1))),
                  (componentPattern += component.replace(
                    reservedCharacterPattern,
                    replaceWildcardCharacter
                  )),
                  componentPattern !== component &&
                    (subpattern += implicitExcludePathRegexPattern),
                  (subpattern += componentPattern);
              } else
                subpattern += component.replace(
                  reservedCharacterPattern,
                  replaceWildcardCharacter
                );
              hasWrittenComponent = !0;
            }
            for (; optionalCount > 0; ) (subpattern += ")?"), optionalCount--;
            return subpattern;
          })(spec, basePath, usage, wildcardMatchers[usage])
      );
  }
  function replaceWildcardCharacter(match, singleAsteriskRegexFragment) {
    return "*" === match
      ? singleAsteriskRegexFragment
      : "?" === match
      ? "[^/]"
      : "\\" + match;
  }
  function getRegexFromPattern(pattern, useCaseSensitiveFileNames) {
    return RegExp(pattern, useCaseSensitiveFileNames ? "" : "i");
  }
  function getBasePaths(path, includes, useCaseSensitiveFileNames) {
    const basePaths = [path];
    if (includes) {
      const includeBasePaths = [];
      for (const include of includes) {
        const absolute = __exports__isRootedDiskPath(include)
          ? include
          : __exports__normalizePath(__exports__combinePaths(path, include));
        includeBasePaths.push(getIncludeBasePath(absolute));
      }
      includeBasePaths.sort(
        __exports__getStringComparer(!useCaseSensitiveFileNames)
      );
      for (const includeBasePath of includeBasePaths)
        __exports__every(
          basePaths,
          (basePath) =>
            !__exports__containsPath(
              basePath,
              includeBasePath,
              path,
              !useCaseSensitiveFileNames
            )
        ) && basePaths.push(includeBasePath);
    }
    return basePaths;
  }
  function getIncludeBasePath(absolute) {
    const wildcardOffset = __exports__indexOfAnyCharCode(
      absolute,
      wildcardCharCodes
    );
    return wildcardOffset < 0
      ? __exports__hasExtension(absolute)
        ? __exports__removeTrailingDirectorySeparator(
            __exports__getDirectoryPath(absolute)
          )
        : absolute
      : absolute.substring(0, absolute.lastIndexOf("/", wildcardOffset));
  }
  __exports__matchFiles = function (
    path,
    extensions,
    excludes,
    includes,
    useCaseSensitiveFileNames,
    currentDirectory,
    depth,
    getFileSystemEntries,
    realpath
  ) {
    (path = __exports__normalizePath(path)),
      (currentDirectory = __exports__normalizePath(currentDirectory));
    const patterns = (function (
        path,
        excludes,
        includes,
        useCaseSensitiveFileNames,
        currentDirectory
      ) {
        (path = __exports__normalizePath(path)),
          (currentDirectory = __exports__normalizePath(currentDirectory));
        const absolutePath = __exports__combinePaths(currentDirectory, path);
        return {
          includeFilePatterns: __exports__map(
            getRegularExpressionsForWildcards(includes, absolutePath, "files"),
            (pattern) => `^${pattern}$`
          ),
          includeFilePattern: getRegularExpressionForWildcard(
            includes,
            absolutePath,
            "files"
          ),
          includeDirectoryPattern: getRegularExpressionForWildcard(
            includes,
            absolutePath,
            "directories"
          ),
          excludePattern: getRegularExpressionForWildcard(
            excludes,
            absolutePath,
            "exclude"
          ),
          basePaths: getBasePaths(path, includes, useCaseSensitiveFileNames),
        };
      })(path, excludes, includes, useCaseSensitiveFileNames, currentDirectory),
      includeFileRegexes =
        patterns.includeFilePatterns &&
        patterns.includeFilePatterns.map((pattern) =>
          getRegexFromPattern(pattern, useCaseSensitiveFileNames)
        ),
      includeDirectoryRegex =
        patterns.includeDirectoryPattern &&
        getRegexFromPattern(
          patterns.includeDirectoryPattern,
          useCaseSensitiveFileNames
        ),
      excludeRegex =
        patterns.excludePattern &&
        getRegexFromPattern(patterns.excludePattern, useCaseSensitiveFileNames),
      results = includeFileRegexes ? includeFileRegexes.map(() => []) : [[]],
      visited = new __exports__Map(),
      toCanonical = __exports__createGetCanonicalFileName(
        useCaseSensitiveFileNames
      );
    for (const basePath of patterns.basePaths)
      visitDirectory(
        basePath,
        __exports__combinePaths(currentDirectory, basePath),
        depth
      );
    return __exports__flatten(results);
    function visitDirectory(path, absolutePath, depth) {
      const canonicalPath = toCanonical(realpath(absolutePath));
      if (visited.has(canonicalPath)) return;
      visited.set(canonicalPath, !0);
      const { files: files, directories: directories } = getFileSystemEntries(
        path
      );
      for (const current of __exports__sort(
        files,
        __exports__compareStringsCaseSensitive
      )) {
        const name = __exports__combinePaths(path, current),
          absoluteName = __exports__combinePaths(absolutePath, current);
        if (
          (!extensions || __exports__fileExtensionIsOneOf(name, extensions)) &&
          (!excludeRegex || !excludeRegex.test(absoluteName))
        )
          if (includeFileRegexes) {
            const includeIndex = __exports__findIndex(
              includeFileRegexes,
              (re) => re.test(absoluteName)
            );
            -1 !== includeIndex && results[includeIndex].push(name);
          } else results[0].push(name);
      }
      if (void 0 === depth || 0 != --depth)
        for (const current of __exports__sort(
          directories,
          __exports__compareStringsCaseSensitive
        )) {
          const name = __exports__combinePaths(path, current),
            absoluteName = __exports__combinePaths(absolutePath, current);
          (includeDirectoryRegex &&
            !includeDirectoryRegex.test(absoluteName)) ||
            (excludeRegex && excludeRegex.test(absoluteName)) ||
            visitDirectory(name, absoluteName, depth);
        }
    }
  };
  const extensionsToRemove = [".d.ts", ".ts", ".js", ".tsx", ".jsx", ".json"];
  function tryGetExtensionFromPath(path) {
    return __exports__find(extensionsToRemove, (e) =>
      __exports__fileExtensionIs(path, e)
    );
  }
  __exports__emptyFileSystemEntries = {
    files: __exports__emptyArray,
    directories: __exports__emptyArray,
  };
}
{
  let ConfigFileProgramReloadLevel, WatchLogLevel;
  (function (ConfigFileProgramReloadLevel) {
    (ConfigFileProgramReloadLevel[(ConfigFileProgramReloadLevel.None = 0)] =
      "None"),
      (ConfigFileProgramReloadLevel[
        (ConfigFileProgramReloadLevel.Partial = 1)
      ] = "Partial"),
      (ConfigFileProgramReloadLevel[(ConfigFileProgramReloadLevel.Full = 2)] =
        "Full");
  })(
    (ConfigFileProgramReloadLevel =
      __exports__ConfigFileProgramReloadLevel ||
      (__exports__ConfigFileProgramReloadLevel = {}))
  ),
    (function (WatchLogLevel) {
      (WatchLogLevel[(WatchLogLevel.None = 0)] = "None"),
        (WatchLogLevel[(WatchLogLevel.TriggerOnly = 1)] = "TriggerOnly"),
        (WatchLogLevel[(WatchLogLevel.Verbose = 2)] = "Verbose");
    })(
      (WatchLogLevel =
        __exports__WatchLogLevel || (__exports__WatchLogLevel = {}))
    ),
    (__exports__getFallbackOptions = function (options) {
      const fallbackPolling = options?.fallbackPolling;
      return {
        watchFile:
          void 0 !== fallbackPolling
            ? fallbackPolling
            : __exports__WatchFileKind.PriorityPollingInterval,
      };
    }),
    (__exports__closeFileWatcherOf = function (objWithWatcher) {
      objWithWatcher.watcher.close();
    });
}
{
  function generateDjb2Hash(data) {
    let acc = 5381;
    for (let i = 0; i < data.length; i++)
      acc = (acc << 5) + acc + data.charCodeAt(i);
    return "" + acc;
  }
  let FileWatcherEventKind, PollingInterval;
  function createPollingIntervalBasedLevels(levels) {
    return {
      [PollingInterval.Low]: levels.Low,
      [PollingInterval.Medium]: levels.Medium,
      [PollingInterval.High]: levels.High,
    };
  }
  (function (FileWatcherEventKind) {
    (FileWatcherEventKind[(FileWatcherEventKind.Created = 0)] = "Created"),
      (FileWatcherEventKind[(FileWatcherEventKind.Changed = 1)] = "Changed"),
      (FileWatcherEventKind[(FileWatcherEventKind.Deleted = 2)] = "Deleted");
  })(
    (FileWatcherEventKind =
      __exports__FileWatcherEventKind || (__exports__FileWatcherEventKind = {}))
  ),
    (function (PollingInterval) {
      (PollingInterval[(PollingInterval.High = 2e3)] = "High"),
        (PollingInterval[(PollingInterval.Medium = 500)] = "Medium"),
        (PollingInterval[(PollingInterval.Low = 250)] = "Low");
    })(
      (PollingInterval =
        __exports__PollingInterval || (__exports__PollingInterval = {}))
    ),
    (__exports__missingFileModifiedTime = new Date(0));
  const defaultChunkLevels = { Low: 32, Medium: 64, High: 256 };
  let pollingChunkSize = createPollingIntervalBasedLevels(defaultChunkLevels);
  function createSingleFileWatcherPerName(
    watchFile,
    useCaseSensitiveFileNames
  ) {
    const cache = new __exports__Map(),
      callbacksCache = __exports__createMultiMap(),
      toCanonicalFileName = __exports__createGetCanonicalFileName(
        useCaseSensitiveFileNames
      );
    return (fileName, callback, pollingInterval, options) => {
      const path = toCanonicalFileName(fileName),
        existing = cache.get(path);
      return (
        existing
          ? existing.refCount++
          : cache.set(path, {
              watcher: watchFile(
                fileName,
                (fileName, eventKind) =>
                  __exports__forEach(callbacksCache.get(path), (cb) =>
                    cb(fileName, eventKind)
                  ),
                pollingInterval,
                options
              ),
              refCount: 1,
            }),
        callbacksCache.add(path, callback),
        {
          close: () => {
            const watcher = __exports__Debug.checkDefined(cache.get(path));
            callbacksCache.remove(path, callback),
              watcher.refCount--,
              watcher.refCount ||
                (cache.delete(path), __exports__closeFileWatcherOf(watcher));
          },
        }
      );
    };
  }
  function onWatchedFileStat(watchedFile, modifiedTime) {
    const oldTime = watchedFile.mtime.getTime(),
      newTime = modifiedTime.getTime();
    return (
      oldTime !== newTime &&
      ((watchedFile.mtime = modifiedTime),
      watchedFile.callback(
        watchedFile.fileName,
        (function (oldTime, newTime) {
          return 0 === oldTime
            ? FileWatcherEventKind.Created
            : 0 === newTime
            ? FileWatcherEventKind.Deleted
            : FileWatcherEventKind.Changed;
        })(oldTime, newTime)
      ),
      !0)
    );
  }
  function createDirectoryWatcherSupportingRecursive({
    watchDirectory: watchDirectory,
    useCaseSensitiveFileNames: useCaseSensitiveFileNames,
    getCurrentDirectory: getCurrentDirectory,
    getAccessibleSortedChildDirectories: getAccessibleSortedChildDirectories,
    directoryExists: directoryExists,
    realpath: realpath,
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
  }) {
    const cache = new __exports__Map(),
      callbackCache = __exports__createMultiMap(),
      cacheToUpdateChildWatches = new __exports__Map();
    let timerToUpdateChildWatches;
    const filePathComparer = __exports__getStringComparer(
        !useCaseSensitiveFileNames
      ),
      toCanonicalFilePath = __exports__createGetCanonicalFileName(
        useCaseSensitiveFileNames
      );
    return (dirName, callback, recursive, options) =>
      recursive
        ? createDirectoryWatcher(dirName, options, callback)
        : watchDirectory(dirName, callback, recursive, options);
    function createDirectoryWatcher(dirName, options, callback) {
      const dirPath = toCanonicalFilePath(dirName);
      let directoryWatcher = cache.get(dirPath);
      directoryWatcher
        ? directoryWatcher.refCount++
        : ((directoryWatcher = {
            watcher: watchDirectory(
              dirName,
              (fileName) => {
                isIgnoredPath(fileName, options) ||
                  (options?.synchronousWatchDirectory
                    ? (invokeCallbacks(dirPath, fileName),
                      updateChildWatches(dirName, dirPath, options))
                    : (function (dirName, dirPath, fileName, options) {
                        const parentWatcher = cache.get(dirPath);
                        parentWatcher && directoryExists(dirName)
                          ? (function (dirName, dirPath, fileName, options) {
                              const existing = cacheToUpdateChildWatches.get(
                                dirPath
                              );
                              existing
                                ? existing.fileNames.push(fileName)
                                : cacheToUpdateChildWatches.set(dirPath, {
                                    dirName: dirName,
                                    options: options,
                                    fileNames: [fileName],
                                  }),
                                timerToUpdateChildWatches &&
                                  (clearTimeout(timerToUpdateChildWatches),
                                  (timerToUpdateChildWatches = void 0)),
                                (timerToUpdateChildWatches = setTimeout(
                                  onTimerToUpdateChildWatches,
                                  1e3
                                ));
                            })(dirName, dirPath, fileName, options)
                          : (invokeCallbacks(dirPath, fileName),
                            removeChildWatches(parentWatcher));
                      })(dirName, dirPath, fileName, options));
              },
              !1,
              options
            ),
            refCount: 1,
            childWatches: __exports__emptyArray,
          }),
          cache.set(dirPath, directoryWatcher),
          updateChildWatches(dirName, dirPath, options));
      const callbackToAdd = callback && {
        dirName: dirName,
        callback: callback,
      };
      return (
        callbackToAdd && callbackCache.add(dirPath, callbackToAdd),
        {
          dirName: dirName,
          close: () => {
            const directoryWatcher = __exports__Debug.checkDefined(
              cache.get(dirPath)
            );
            callbackToAdd && callbackCache.remove(dirPath, callbackToAdd),
              directoryWatcher.refCount--,
              directoryWatcher.refCount ||
                (cache.delete(dirPath),
                __exports__closeFileWatcherOf(directoryWatcher),
                directoryWatcher.childWatches.forEach(
                  __exports__closeFileWatcher
                ));
          },
        }
      );
    }
    function invokeCallbacks(dirPath, fileNameOrInvokeMap, fileNames) {
      let fileName, invokeMap;
      __exports__isString(fileNameOrInvokeMap)
        ? (fileName = fileNameOrInvokeMap)
        : (invokeMap = fileNameOrInvokeMap),
        callbackCache.forEach((callbacks, rootDirName) => {
          if (
            (!invokeMap || !0 !== invokeMap.get(rootDirName)) &&
            (rootDirName === dirPath ||
              (__exports__startsWith(dirPath, rootDirName) &&
                "/" === dirPath[rootDirName.length]))
          )
            if (invokeMap)
              if (fileNames) {
                const existing = invokeMap.get(rootDirName);
                existing
                  ? existing.push(...fileNames)
                  : invokeMap.set(rootDirName, fileNames.slice());
              } else invokeMap.set(rootDirName, !0);
            else
              callbacks.forEach(({ callback: callback }) => callback(fileName));
        });
    }
    function onTimerToUpdateChildWatches() {
      (timerToUpdateChildWatches = void 0),
        __exports__sysLog(
          "sysLog:: onTimerToUpdateChildWatches:: " +
            cacheToUpdateChildWatches.size
        );
      const start = timestamp(),
        invokeMap = new __exports__Map();
      for (; !timerToUpdateChildWatches && cacheToUpdateChildWatches.size; ) {
        const result = cacheToUpdateChildWatches.entries().next();
        __exports__Debug.assert(!result.done);
        const {
          value: [
            dirPath,
            { dirName: dirName, options: options, fileNames: fileNames },
          ],
        } = result;
        cacheToUpdateChildWatches.delete(dirPath);
        const hasChanges = updateChildWatches(dirName, dirPath, options);
        invokeCallbacks(dirPath, invokeMap, hasChanges ? void 0 : fileNames);
      }
      __exports__sysLog(
        `sysLog:: invokingWatchers:: Elapsed:: ${timestamp() - start}ms:: ${
          cacheToUpdateChildWatches.size
        }`
      ),
        callbackCache.forEach((callbacks, rootDirName) => {
          const existing = invokeMap.get(rootDirName);
          existing &&
            callbacks.forEach(({ callback: callback, dirName: dirName }) => {
              __exports__isArray(existing)
                ? existing.forEach(callback)
                : callback(dirName);
            });
        });
      const elapsed = timestamp() - start;
      __exports__sysLog(
        `sysLog:: Elapsed:: ${elapsed}ms:: onTimerToUpdateChildWatches:: ${cacheToUpdateChildWatches.size} ${timerToUpdateChildWatches}`
      );
    }
    function removeChildWatches(parentWatcher) {
      if (!parentWatcher) return;
      const existingChildWatches = parentWatcher.childWatches;
      parentWatcher.childWatches = __exports__emptyArray;
      for (const childWatcher of existingChildWatches)
        childWatcher.close(),
          removeChildWatches(
            cache.get(toCanonicalFilePath(childWatcher.dirName))
          );
    }
    function updateChildWatches(parentDir, parentDirPath, options) {
      const parentWatcher = cache.get(parentDirPath);
      if (!parentWatcher) return !1;
      let newChildWatches;
      const hasChanges = __exports__enumerateInsertsAndDeletes(
        directoryExists(parentDir)
          ? __exports__mapDefined(
              getAccessibleSortedChildDirectories(parentDir),
              (child) => {
                const childFullName = __exports__getNormalizedAbsolutePath(
                  child,
                  parentDir
                );
                return isIgnoredPath(childFullName, options) ||
                  0 !==
                    filePathComparer(
                      childFullName,
                      __exports__normalizePath(realpath(childFullName))
                    )
                  ? void 0
                  : childFullName;
              }
            )
          : __exports__emptyArray,
        parentWatcher.childWatches,
        (child, childWatcher) => filePathComparer(child, childWatcher.dirName),
        function (childName) {
          addChildDirectoryWatcher(createDirectoryWatcher(childName, options));
        },
        __exports__closeFileWatcher,
        addChildDirectoryWatcher
      );
      return (
        (parentWatcher.childWatches = newChildWatches || __exports__emptyArray),
        hasChanges
      );
      function addChildDirectoryWatcher(childWatcher) {
        (newChildWatches || (newChildWatches = [])).push(childWatcher);
      }
    }
    function isIgnoredPath(path, options) {
      return (
        __exports__some(__exports__ignoredPaths, (searchPath) =>
          (function (path, searchPath) {
            return (
              !!__exports__stringContains(path, searchPath) ||
              (!useCaseSensitiveFileNames &&
                __exports__stringContains(
                  toCanonicalFilePath(path),
                  searchPath
                ))
            );
          })(path, searchPath)
        ) ||
        isIgnoredByWatchOptions(
          path,
          options,
          useCaseSensitiveFileNames,
          getCurrentDirectory
        )
      );
    }
  }
  function isIgnoredByWatchOptions(
    pathToCheck,
    options,
    useCaseSensitiveFileNames,
    getCurrentDirectory
  ) {
    return (
      (options?.excludeDirectories || options?.excludeFiles) &&
      (matchesExclude(
        pathToCheck,
        options?.excludeFiles,
        useCaseSensitiveFileNames,
        getCurrentDirectory()
      ) ||
        matchesExclude(
          pathToCheck,
          options?.excludeDirectories,
          useCaseSensitiveFileNames,
          getCurrentDirectory()
        ))
    );
  }
  function createFsWatchCallbackForDirectoryWatcherCallback(
    directoryName,
    callback,
    options,
    useCaseSensitiveFileNames,
    getCurrentDirectory
  ) {
    return (eventName, relativeFileName) => {
      if ("rename" === eventName) {
        const fileName = relativeFileName
          ? __exports__normalizePath(
              __exports__combinePaths(directoryName, relativeFileName)
            )
          : directoryName;
        (relativeFileName &&
          isIgnoredByWatchOptions(
            fileName,
            options,
            useCaseSensitiveFileNames,
            getCurrentDirectory
          )) ||
          callback(fileName);
      }
    };
  }
  (__exports__unchangedPollThresholds = createPollingIntervalBasedLevels(
    defaultChunkLevels
  )),
    (__exports__ignoredPaths = ["/node_modules/.", "/.git", "/.#"]),
    (__exports__sysLog = __exports__noop),
    (__exports__sys = (() => {
      let sys;
      return (
        "undefined" != typeof process &&
          process.nextTick &&
          !process.browser &&
          "undefined" != typeof require &&
          (sys = (function () {
            const nativePattern = /^native |^\([^)]+\)$|^(internal[\\/]|[a-zA-Z0-9_\s]+(\.js)?$)/,
              _fs = require("fs"),
              _path = require("path"),
              _os = require("os");
            let _crypto, activeSession;
            try {
              _crypto = require("crypto");
            } catch {
              _crypto = void 0;
            }
            let profilePath = "./profile.cpuprofile";
            const realpathSync = _fs.realpathSync.native ?? _fs.realpathSync,
              Buffer = require("buffer").Buffer,
              isNode4OrLater =
                (function () {
                  if ("undefined" == typeof process) return;
                  const version = process.version;
                  if (!version) return;
                  const dot = version.indexOf(".");
                  return -1 !== dot
                    ? parseInt(version.substring(1, dot))
                    : void 0;
                })() >= 4,
              isLinuxOrMacOs =
                "linux" === process.platform || "darwin" === process.platform,
              platform = _os.platform(),
              useCaseSensitiveFileNames =
                "win32" !== platform &&
                "win64" !== platform &&
                !fileExists(
                  ((s = __filename),
                  s.replace(/\w/g, (ch) => {
                    const up = ch.toUpperCase();
                    return ch === up ? ch.toLowerCase() : up;
                  }))
                ),
              fsSupportsRecursiveFsWatch =
                isNode4OrLater &&
                ("win32" === process.platform || "darwin" === process.platform),
              getCurrentDirectory = __exports__memoize(() => process.cwd()),
              {
                watchFile: watchFile,
                watchDirectory: watchDirectory,
              } = (function ({
                pollingWatchFile: pollingWatchFile,
                getModifiedTime: getModifiedTime,
                setTimeout: setTimeout,
                clearTimeout: clearTimeout,
                fsWatch: fsWatch,
                fileExists: fileExists,
                useCaseSensitiveFileNames: useCaseSensitiveFileNames,
                getCurrentDirectory: getCurrentDirectory,
                fsSupportsRecursiveFsWatch: fsSupportsRecursiveFsWatch,
                directoryExists: directoryExists,
                getAccessibleSortedChildDirectories: getAccessibleSortedChildDirectories,
                realpath: realpath,
                tscWatchFile: tscWatchFile,
                useNonPollingWatchers: useNonPollingWatchers,
                tscWatchDirectory: tscWatchDirectory,
              }) {
                let dynamicPollingWatchFile,
                  nonPollingWatchFile,
                  hostRecursiveDirectoryWatcher;
                return {
                  watchFile: function (
                    fileName,
                    callback,
                    pollingInterval,
                    options
                  ) {
                    options = (function (options, useNonPollingWatchers) {
                      if (options && void 0 !== options.watchFile)
                        return options;
                      switch (tscWatchFile) {
                        case "PriorityPollingInterval":
                          return {
                            watchFile:
                              __exports__WatchFileKind.PriorityPollingInterval,
                          };
                        case "DynamicPriorityPolling":
                          return {
                            watchFile:
                              __exports__WatchFileKind.DynamicPriorityPolling,
                          };
                        case "UseFsEvents":
                          return generateWatchFileOptions(
                            __exports__WatchFileKind.UseFsEvents,
                            __exports__PollingWatchKind.PriorityInterval,
                            options
                          );
                        case "UseFsEventsWithFallbackDynamicPolling":
                          return generateWatchFileOptions(
                            __exports__WatchFileKind.UseFsEvents,
                            __exports__PollingWatchKind.DynamicPriority,
                            options
                          );
                        case "UseFsEventsOnParentDirectory":
                          useNonPollingWatchers = !0;
                        default:
                          return useNonPollingWatchers
                            ? generateWatchFileOptions(
                                __exports__WatchFileKind.UseFsEventsOnParentDirectory,
                                __exports__PollingWatchKind.PriorityInterval,
                                options
                              )
                            : {
                                watchFile:
                                  __exports__WatchFileKind.FixedPollingInterval,
                              };
                      }
                    })(options, useNonPollingWatchers);
                    const watchFileKind = __exports__Debug.checkDefined(
                      options.watchFile
                    );
                    switch (watchFileKind) {
                      case __exports__WatchFileKind.FixedPollingInterval:
                        return pollingWatchFile(
                          fileName,
                          callback,
                          PollingInterval.Low,
                          void 0
                        );
                      case __exports__WatchFileKind.PriorityPollingInterval:
                        return pollingWatchFile(
                          fileName,
                          callback,
                          pollingInterval,
                          void 0
                        );
                      case __exports__WatchFileKind.DynamicPriorityPolling:
                        return ensureDynamicPollingWatchFile()(
                          fileName,
                          callback,
                          pollingInterval,
                          void 0
                        );
                      case __exports__WatchFileKind.UseFsEvents:
                        return fsWatch(
                          fileName,
                          0,
                          (function (fileName, callback, fileExists) {
                            return (eventName) => {
                              callback(
                                fileName,
                                "rename" === eventName
                                  ? fileExists(fileName)
                                    ? FileWatcherEventKind.Created
                                    : FileWatcherEventKind.Deleted
                                  : FileWatcherEventKind.Changed
                              );
                            };
                          })(fileName, callback, fileExists),
                          !1,
                          pollingInterval,
                          __exports__getFallbackOptions(options)
                        );
                      case __exports__WatchFileKind.UseFsEventsOnParentDirectory:
                        return (
                          nonPollingWatchFile ||
                            (nonPollingWatchFile = (function (
                              fsWatch,
                              useCaseSensitiveFileNames
                            ) {
                              const fileWatcherCallbacks = __exports__createMultiMap(),
                                dirWatchers = new __exports__Map(),
                                toCanonicalName = __exports__createGetCanonicalFileName(
                                  useCaseSensitiveFileNames
                                );
                              return function (
                                fileName,
                                callback,
                                _pollingInterval,
                                fallbackOptions
                              ) {
                                const filePath = toCanonicalName(fileName);
                                fileWatcherCallbacks.add(filePath, callback);
                                const dirPath =
                                    __exports__getDirectoryPath(filePath) ||
                                    ".",
                                  watcher =
                                    dirWatchers.get(dirPath) ||
                                    (function (
                                      dirName,
                                      dirPath,
                                      fallbackOptions
                                    ) {
                                      const watcher = fsWatch(
                                        dirName,
                                        1,
                                        (_eventName, relativeFileName) => {
                                          if (
                                            !__exports__isString(
                                              relativeFileName
                                            )
                                          )
                                            return;
                                          const fileName = __exports__getNormalizedAbsolutePath(
                                              relativeFileName,
                                              dirName
                                            ),
                                            callbacks =
                                              fileName &&
                                              fileWatcherCallbacks.get(
                                                toCanonicalName(fileName)
                                              );
                                          if (callbacks)
                                            for (const fileCallback of callbacks)
                                              fileCallback(
                                                fileName,
                                                FileWatcherEventKind.Changed
                                              );
                                        },
                                        !1,
                                        PollingInterval.Medium,
                                        fallbackOptions
                                      );
                                      return (
                                        (watcher.referenceCount = 0),
                                        dirWatchers.set(dirPath, watcher),
                                        watcher
                                      );
                                    })(
                                      __exports__getDirectoryPath(fileName) ||
                                        ".",
                                      dirPath,
                                      fallbackOptions
                                    );
                                return (
                                  watcher.referenceCount++,
                                  {
                                    close: () => {
                                      1 === watcher.referenceCount
                                        ? (watcher.close(),
                                          dirWatchers.delete(dirPath))
                                        : watcher.referenceCount--,
                                        fileWatcherCallbacks.remove(
                                          filePath,
                                          callback
                                        );
                                    },
                                  }
                                );
                              };
                            })(fsWatch, useCaseSensitiveFileNames)),
                          nonPollingWatchFile(
                            fileName,
                            callback,
                            pollingInterval,
                            __exports__getFallbackOptions(options)
                          )
                        );
                      default:
                        __exports__Debug.assertNever(watchFileKind);
                    }
                  },
                  watchDirectory: function (
                    directoryName,
                    callback,
                    recursive,
                    options
                  ) {
                    return fsSupportsRecursiveFsWatch
                      ? fsWatch(
                          directoryName,
                          1,
                          createFsWatchCallbackForDirectoryWatcherCallback(
                            directoryName,
                            callback,
                            options,
                            useCaseSensitiveFileNames,
                            getCurrentDirectory
                          ),
                          recursive,
                          PollingInterval.Medium,
                          __exports__getFallbackOptions(options)
                        )
                      : (hostRecursiveDirectoryWatcher ||
                          (hostRecursiveDirectoryWatcher = createDirectoryWatcherSupportingRecursive(
                            {
                              useCaseSensitiveFileNames: useCaseSensitiveFileNames,
                              getCurrentDirectory: getCurrentDirectory,
                              directoryExists: directoryExists,
                              getAccessibleSortedChildDirectories: getAccessibleSortedChildDirectories,
                              watchDirectory: nonRecursiveWatchDirectory,
                              realpath: realpath,
                              setTimeout: setTimeout,
                              clearTimeout: clearTimeout,
                            }
                          )),
                        hostRecursiveDirectoryWatcher(
                          directoryName,
                          callback,
                          recursive,
                          options
                        ));
                  },
                };
                function ensureDynamicPollingWatchFile() {
                  return (
                    dynamicPollingWatchFile ||
                    (dynamicPollingWatchFile = (function (host) {
                      const watchedFiles = [],
                        changedFilesInLastPoll = [],
                        lowPollingIntervalQueue = createPollingIntervalQueue(
                          PollingInterval.Low
                        ),
                        mediumPollingIntervalQueue = createPollingIntervalQueue(
                          PollingInterval.Medium
                        ),
                        highPollingIntervalQueue = createPollingIntervalQueue(
                          PollingInterval.High
                        );
                      return function (
                        fileName,
                        callback,
                        defaultPollingInterval
                      ) {
                        const file = {
                          fileName: fileName,
                          callback: callback,
                          unchangedPolls: 0,
                          mtime: getModifiedTime(fileName),
                        };
                        return (
                          watchedFiles.push(file),
                          addToPollingIntervalQueue(
                            file,
                            defaultPollingInterval
                          ),
                          {
                            close: () => {
                              (file.isClosed = !0),
                                __exports__unorderedRemoveItem(
                                  watchedFiles,
                                  file
                                );
                            },
                          }
                        );
                      };
                      function createPollingIntervalQueue(pollingInterval) {
                        const queue = [];
                        return (
                          (queue.pollingInterval = pollingInterval),
                          (queue.pollIndex = 0),
                          (queue.pollScheduled = !1),
                          queue
                        );
                      }
                      function pollPollingIntervalQueue(queue) {
                        (queue.pollIndex = pollQueue(
                          queue,
                          queue.pollingInterval,
                          queue.pollIndex,
                          pollingChunkSize[queue.pollingInterval]
                        )),
                          queue.length
                            ? scheduleNextPoll(queue.pollingInterval)
                            : (__exports__Debug.assert(0 === queue.pollIndex),
                              (queue.pollScheduled = !1));
                      }
                      function pollLowPollingIntervalQueue(queue) {
                        pollQueue(
                          changedFilesInLastPoll,
                          PollingInterval.Low,
                          0,
                          changedFilesInLastPoll.length
                        ),
                          pollPollingIntervalQueue(queue),
                          !queue.pollScheduled &&
                            changedFilesInLastPoll.length &&
                            scheduleNextPoll(PollingInterval.Low);
                      }
                      function pollQueue(
                        queue,
                        pollingInterval,
                        pollIndex,
                        chunkSize
                      ) {
                        let needsVisit = queue.length,
                          definedValueCopyToIndex = pollIndex;
                        for (
                          let polled = 0;
                          polled < chunkSize && needsVisit > 0;
                          ++pollIndex === queue.length &&
                            (definedValueCopyToIndex < pollIndex &&
                              (queue.length = definedValueCopyToIndex),
                            (pollIndex = 0),
                            (definedValueCopyToIndex = 0)),
                            needsVisit--
                        ) {
                          const watchedFile = queue[pollIndex];
                          if (!watchedFile) continue;
                          if (watchedFile.isClosed) {
                            queue[pollIndex] = void 0;
                            continue;
                          }
                          polled++;
                          const fileChanged = onWatchedFileStat(
                            watchedFile,
                            getModifiedTime(watchedFile.fileName)
                          );
                          watchedFile.isClosed
                            ? (queue[pollIndex] = void 0)
                            : fileChanged
                            ? ((watchedFile.unchangedPolls = 0),
                              queue !== changedFilesInLastPoll &&
                                ((queue[pollIndex] = void 0),
                                changedFilesInLastPoll.push(watchedFile),
                                scheduleNextPollIfNotAlreadyScheduled(
                                  PollingInterval.Low
                                )))
                            : watchedFile.unchangedPolls !==
                              __exports__unchangedPollThresholds[
                                pollingInterval
                              ]
                            ? watchedFile.unchangedPolls++
                            : queue === changedFilesInLastPoll
                            ? ((watchedFile.unchangedPolls = 1),
                              (queue[pollIndex] = void 0),
                              addToPollingIntervalQueue(
                                watchedFile,
                                PollingInterval.Low
                              ))
                            : pollingInterval !== PollingInterval.High &&
                              (watchedFile.unchangedPolls++,
                              (queue[pollIndex] = void 0),
                              addToPollingIntervalQueue(
                                watchedFile,
                                pollingInterval === PollingInterval.Low
                                  ? PollingInterval.Medium
                                  : PollingInterval.High
                              )),
                            queue[pollIndex] &&
                              (definedValueCopyToIndex < pollIndex &&
                                ((queue[definedValueCopyToIndex] = watchedFile),
                                (queue[pollIndex] = void 0)),
                              definedValueCopyToIndex++);
                        }
                        return pollIndex;
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
                      function addToPollingIntervalQueue(
                        file,
                        pollingInterval
                      ) {
                        pollingIntervalQueue(pollingInterval).push(file),
                          scheduleNextPollIfNotAlreadyScheduled(
                            pollingInterval
                          );
                      }
                      function scheduleNextPollIfNotAlreadyScheduled(
                        pollingInterval
                      ) {
                        pollingIntervalQueue(pollingInterval).pollScheduled ||
                          scheduleNextPoll(pollingInterval);
                      }
                      function scheduleNextPoll(pollingInterval) {
                        pollingIntervalQueue(
                          pollingInterval
                        ).pollScheduled = host.setTimeout(
                          pollingInterval === PollingInterval.Low
                            ? pollLowPollingIntervalQueue
                            : pollPollingIntervalQueue,
                          pollingInterval,
                          pollingIntervalQueue(pollingInterval)
                        );
                      }
                      function getModifiedTime(fileName) {
                        return (
                          host.getModifiedTime(fileName) ||
                          __exports__missingFileModifiedTime
                        );
                      }
                    })({
                      getModifiedTime: getModifiedTime,
                      setTimeout: setTimeout,
                    }))
                  );
                }
                function generateWatchFileOptions(
                  watchFile,
                  fallbackPolling,
                  options
                ) {
                  const defaultFallbackPolling = options?.fallbackPolling;
                  return {
                    watchFile: watchFile,
                    fallbackPolling:
                      void 0 === defaultFallbackPolling
                        ? fallbackPolling
                        : defaultFallbackPolling,
                  };
                }
                function nonRecursiveWatchDirectory(
                  directoryName,
                  callback,
                  recursive,
                  options
                ) {
                  __exports__Debug.assert(!recursive);
                  const watchDirectoryOptions = (function (options) {
                      if (options && void 0 !== options.watchDirectory)
                        return options;
                      switch (tscWatchDirectory) {
                        case "RecursiveDirectoryUsingFsWatchFile":
                          return {
                            watchDirectory:
                              __exports__WatchDirectoryKind.FixedPollingInterval,
                          };
                        case "RecursiveDirectoryUsingDynamicPriorityPolling":
                          return {
                            watchDirectory:
                              __exports__WatchDirectoryKind.DynamicPriorityPolling,
                          };
                        default:
                          const defaultFallbackPolling =
                            options?.fallbackPolling;
                          return {
                            watchDirectory:
                              __exports__WatchDirectoryKind.UseFsEvents,
                            fallbackPolling:
                              void 0 !== defaultFallbackPolling
                                ? defaultFallbackPolling
                                : void 0,
                          };
                      }
                    })(options),
                    watchDirectoryKind = __exports__Debug.checkDefined(
                      watchDirectoryOptions.watchDirectory
                    );
                  switch (watchDirectoryKind) {
                    case __exports__WatchDirectoryKind.FixedPollingInterval:
                      return pollingWatchFile(
                        directoryName,
                        () => callback(directoryName),
                        PollingInterval.Medium,
                        void 0
                      );
                    case __exports__WatchDirectoryKind.DynamicPriorityPolling:
                      return ensureDynamicPollingWatchFile()(
                        directoryName,
                        () => callback(directoryName),
                        PollingInterval.Medium,
                        void 0
                      );
                    case __exports__WatchDirectoryKind.UseFsEvents:
                      return fsWatch(
                        directoryName,
                        1,
                        createFsWatchCallbackForDirectoryWatcherCallback(
                          directoryName,
                          callback,
                          options,
                          useCaseSensitiveFileNames,
                          getCurrentDirectory
                        ),
                        recursive,
                        PollingInterval.Medium,
                        __exports__getFallbackOptions(watchDirectoryOptions)
                      );
                    default:
                      __exports__Debug.assertNever(watchDirectoryKind);
                  }
                }
              })({
                pollingWatchFile: createSingleFileWatcherPerName(function (
                  fileName,
                  callback,
                  pollingInterval
                ) {
                  let eventKind;
                  return (
                    _fs.watchFile(
                      fileName,
                      { persistent: !0, interval: pollingInterval },
                      fileChanged
                    ),
                    { close: () => _fs.unwatchFile(fileName, fileChanged) }
                  );
                  function fileChanged(curr, prev) {
                    const isPreviouslyDeleted =
                      0 == +prev.mtime ||
                      eventKind === FileWatcherEventKind.Deleted;
                    if (0 == +curr.mtime) {
                      if (isPreviouslyDeleted) return;
                      eventKind = FileWatcherEventKind.Deleted;
                    } else if (isPreviouslyDeleted)
                      eventKind = FileWatcherEventKind.Created;
                    else {
                      if (+curr.mtime == +prev.mtime) return;
                      eventKind = FileWatcherEventKind.Changed;
                    }
                    callback(fileName, eventKind);
                  }
                },
                useCaseSensitiveFileNames),
                getModifiedTime: getModifiedTime,
                setTimeout: setTimeout,
                clearTimeout: clearTimeout,
                fsWatch: function (
                  fileOrDirectory,
                  entryKind,
                  callback,
                  recursive,
                  fallbackPollingInterval,
                  fallbackOptions
                ) {
                  let options,
                    lastDirectoryPartWithDirectorySeparator,
                    lastDirectoryPart;
                  isLinuxOrMacOs &&
                    ((lastDirectoryPartWithDirectorySeparator = fileOrDirectory.substr(
                      fileOrDirectory.lastIndexOf("/")
                    )),
                    (lastDirectoryPart = lastDirectoryPartWithDirectorySeparator.slice(
                      1
                    )));
                  let watcher = fileSystemEntryExists(
                    fileOrDirectory,
                    entryKind
                  )
                    ? watchPresentFileSystemEntry()
                    : watchMissingFileSystemEntry();
                  return {
                    close: () => {
                      watcher.close(), (watcher = void 0);
                    },
                  };
                  function invokeCallbackAndUpdateWatcher(createWatcher) {
                    __exports__sysLog(
                      `sysLog:: ${fileOrDirectory}:: Changing watcher to ${
                        createWatcher === watchPresentFileSystemEntry
                          ? "Present"
                          : "Missing"
                      }FileSystemEntryWatcher`
                    ),
                      callback("rename", ""),
                      watcher && (watcher.close(), (watcher = createWatcher()));
                  }
                  function watchPresentFileSystemEntry() {
                    void 0 === options &&
                      (options = fsSupportsRecursiveFsWatch
                        ? { persistent: !0, recursive: !!recursive }
                        : { persistent: !0 });
                    try {
                      const presentWatcher = _fs.watch(
                        fileOrDirectory,
                        options,
                        isLinuxOrMacOs
                          ? callbackChangingToMissingFileSystemEntry
                          : callback
                      );
                      return (
                        presentWatcher.on("error", () =>
                          invokeCallbackAndUpdateWatcher(
                            watchMissingFileSystemEntry
                          )
                        ),
                        presentWatcher
                      );
                    } catch (e) {
                      return (
                        __exports__sysLog(
                          `sysLog:: ${fileOrDirectory}:: Changing to fsWatchFile`
                        ),
                        watchFile(
                          fileOrDirectory,
                          (function (callback) {
                            return (_fileName, eventKind) =>
                              callback(
                                eventKind === FileWatcherEventKind.Changed
                                  ? "change"
                                  : "rename",
                                ""
                              );
                          })(callback),
                          fallbackPollingInterval,
                          fallbackOptions
                        )
                      );
                    }
                  }
                  function callbackChangingToMissingFileSystemEntry(
                    event,
                    relativeName
                  ) {
                    return "rename" !== event ||
                      (relativeName &&
                        relativeName !== lastDirectoryPart &&
                        (-1 ===
                          relativeName.lastIndexOf(
                            lastDirectoryPartWithDirectorySeparator
                          ) ||
                          relativeName.lastIndexOf(
                            lastDirectoryPartWithDirectorySeparator
                          ) !==
                            relativeName.length -
                              lastDirectoryPartWithDirectorySeparator.length)) ||
                      fileSystemEntryExists(fileOrDirectory, entryKind)
                      ? callback(event, relativeName)
                      : invokeCallbackAndUpdateWatcher(
                          watchMissingFileSystemEntry
                        );
                  }
                  function watchMissingFileSystemEntry() {
                    return watchFile(
                      fileOrDirectory,
                      (_fileName, eventKind) => {
                        eventKind === FileWatcherEventKind.Created &&
                          fileSystemEntryExists(fileOrDirectory, entryKind) &&
                          invokeCallbackAndUpdateWatcher(
                            watchPresentFileSystemEntry
                          );
                      },
                      fallbackPollingInterval,
                      fallbackOptions
                    );
                  }
                },
                useCaseSensitiveFileNames: useCaseSensitiveFileNames,
                getCurrentDirectory: getCurrentDirectory,
                fileExists: fileExists,
                fsSupportsRecursiveFsWatch: fsSupportsRecursiveFsWatch,
                directoryExists: directoryExists,
                getAccessibleSortedChildDirectories: (path) =>
                  getAccessibleFileSystemEntries(path).directories,
                realpath: realpath,
                tscWatchFile: process.env.TSC_WATCHFILE,
                useNonPollingWatchers: process.env.TSC_NONPOLLING_WATCHER,
                tscWatchDirectory: process.env.TSC_WATCHDIRECTORY,
              }),
              nodeSystem = {
                args: process.argv.slice(2),
                newLine: _os.EOL,
                useCaseSensitiveFileNames: useCaseSensitiveFileNames,
                write(s) {
                  process.stdout.write(s);
                },
                writeOutputIsTTY: () => process.stdout.isTTY,
                readFile: function (fileName, _encoding) {
                  __exports__perfLogger.logStartReadFile(fileName);
                  const file = (function (fileName, _encoding) {
                    let buffer;
                    try {
                      buffer = _fs.readFileSync(fileName);
                    } catch (e) {
                      return;
                    }
                    let len = buffer.length;
                    if (len >= 2 && 254 === buffer[0] && 255 === buffer[1]) {
                      len &= -2;
                      for (let i = 0; i < len; i += 2) {
                        const temp = buffer[i];
                        (buffer[i] = buffer[i + 1]), (buffer[i + 1] = temp);
                      }
                      return buffer.toString("utf16le", 2);
                    }
                    return len >= 2 && 255 === buffer[0] && 254 === buffer[1]
                      ? buffer.toString("utf16le", 2)
                      : len >= 3 &&
                        239 === buffer[0] &&
                        187 === buffer[1] &&
                        191 === buffer[2]
                      ? buffer.toString("utf8", 3)
                      : buffer.toString("utf8");
                  })(fileName);
                  return __exports__perfLogger.logStopReadFile(), file;
                },
                writeFile: function (fileName, data, writeByteOrderMark) {
                  let fd;
                  __exports__perfLogger.logEvent("WriteFile: " + fileName),
                    writeByteOrderMark && (data = "\ufeff" + data);
                  try {
                    (fd = _fs.openSync(fileName, "w")),
                      _fs.writeSync(fd, data, void 0, "utf8");
                  } finally {
                    void 0 !== fd && _fs.closeSync(fd);
                  }
                },
                watchFile: watchFile,
                watchDirectory: watchDirectory,
                resolvePath: (path) => _path.resolve(path),
                fileExists: fileExists,
                directoryExists: directoryExists,
                createDirectory(directoryName) {
                  if (!nodeSystem.directoryExists(directoryName))
                    try {
                      _fs.mkdirSync(directoryName);
                    } catch (e) {
                      if ("EEXIST" !== e.code) throw e;
                    }
                },
                getExecutingFilePath: () => __filename,
                getCurrentDirectory: getCurrentDirectory,
                getDirectories: function (path) {
                  return getAccessibleFileSystemEntries(
                    path
                  ).directories.slice();
                },
                getEnvironmentVariable: (name) => process.env[name] || "",
                readDirectory: function (
                  path,
                  extensions,
                  excludes,
                  includes,
                  depth
                ) {
                  return __exports__matchFiles(
                    path,
                    extensions,
                    excludes,
                    includes,
                    useCaseSensitiveFileNames,
                    process.cwd(),
                    depth,
                    getAccessibleFileSystemEntries,
                    realpath
                  );
                },
                getModifiedTime: getModifiedTime,
                setModifiedTime: function (path, time) {
                  try {
                    _fs.utimesSync(path, time, time);
                  } catch (e) {
                    return;
                  }
                },
                deleteFile: function (path) {
                  try {
                    return _fs.unlinkSync(path);
                  } catch (e) {
                    return;
                  }
                },
                createHash: _crypto ? createSHA256Hash : generateDjb2Hash,
                createSHA256Hash: _crypto ? createSHA256Hash : void 0,
                getMemoryUsage: () => (
                  global.gc && global.gc(), process.memoryUsage().heapUsed
                ),
                getFileSize(path) {
                  try {
                    const stat = statSync(path);
                    if (stat?.isFile()) return stat.size;
                  } catch {}
                  return 0;
                },
                exit(exitCode) {
                  disableCPUProfiler(() => process.exit(exitCode));
                },
                enableCPUProfiler: function (path, cb) {
                  if (activeSession) return cb(), !1;
                  const inspector = require("inspector");
                  if (!inspector || !inspector.Session) return cb(), !1;
                  const session = new inspector.Session();
                  return (
                    session.connect(),
                    session.post("Profiler.enable", () => {
                      session.post("Profiler.start", () => {
                        (activeSession = session), (profilePath = path), cb();
                      });
                    }),
                    !0
                  );
                },
                disableCPUProfiler: disableCPUProfiler,
                cpuProfilingEnabled: () =>
                  !!activeSession ||
                  __exports__contains(process.execArgv, "--cpu-prof") ||
                  __exports__contains(process.execArgv, "--prof"),
                realpath: realpath,
                debugMode:
                  !!process.env.NODE_INSPECTOR_IPC ||
                  !!process.env.VSCODE_INSPECTOR_OPTIONS ||
                  __exports__some(process.execArgv, (arg) =>
                    /^--(inspect|debug)(-brk)?(=\d+)?$/i.test(arg)
                  ),
                tryEnableSourceMapsForHost() {
                  try {
                    require("source-map-support").install();
                  } catch {}
                },
                setTimeout: setTimeout,
                clearTimeout: clearTimeout,
                clearScreen: () => {
                  process.stdout.write("c");
                },
                setBlocking: () => {
                  process.stdout &&
                    process.stdout._handle &&
                    process.stdout._handle.setBlocking &&
                    process.stdout._handle.setBlocking(!0);
                },
                bufferFrom: bufferFrom,
                base64decode: (input) =>
                  bufferFrom(input, "base64").toString("utf8"),
                base64encode: (input) => bufferFrom(input).toString("base64"),
                require: (baseDir, moduleName) => {
                  try {
                    const modulePath = resolveJSModule(
                      moduleName,
                      baseDir,
                      nodeSystem
                    );
                    return {
                      module: require(modulePath),
                      modulePath: modulePath,
                      error: void 0,
                    };
                  } catch (error) {
                    return { module: void 0, modulePath: void 0, error: error };
                  }
                },
              };
            var s;
            return nodeSystem;
            function statSync(path) {
              return _fs.statSync(path, { throwIfNoEntry: !1 });
            }
            function disableCPUProfiler(cb) {
              if (activeSession && "stopping" !== activeSession) {
                const s = activeSession;
                return (
                  activeSession.post(
                    "Profiler.stop",
                    (err, { profile: profile }) => {
                      if (!err) {
                        try {
                          statSync(profilePath)?.isDirectory() &&
                            (profilePath = _path.join(
                              profilePath,
                              `${new Date()
                                .toISOString()
                                .replace(/:/g, "-")}+P${process.pid}.cpuprofile`
                            ));
                        } catch {}
                        try {
                          _fs.mkdirSync(_path.dirname(profilePath), {
                            recursive: !0,
                          });
                        } catch {}
                        _fs.writeFileSync(
                          profilePath,
                          JSON.stringify(
                            (function (profile) {
                              let externalFileCounter = 0;
                              const remappedPaths = new __exports__Map(),
                                normalizedDir = __exports__normalizeSlashes(
                                  __dirname
                                ),
                                fileUrlRoot = `file://${
                                  1 === __exports__getRootLength(normalizedDir)
                                    ? ""
                                    : "/"
                                }${normalizedDir}`;
                              for (const node of profile.nodes)
                                if (node.callFrame.url) {
                                  const url = __exports__normalizeSlashes(
                                    node.callFrame.url
                                  );
                                  __exports__containsPath(
                                    fileUrlRoot,
                                    url,
                                    useCaseSensitiveFileNames
                                  )
                                    ? (node.callFrame.url = __exports__getRelativePathToDirectoryOrUrl(
                                        fileUrlRoot,
                                        url,
                                        fileUrlRoot,
                                        __exports__createGetCanonicalFileName(
                                          useCaseSensitiveFileNames
                                        ),
                                        !0
                                      ))
                                    : nativePattern.test(url) ||
                                      ((node.callFrame.url = (remappedPaths.has(
                                        url
                                      )
                                        ? remappedPaths
                                        : remappedPaths.set(
                                            url,
                                            `external${externalFileCounter}.js`
                                          )
                                      ).get(url)),
                                      externalFileCounter++);
                                }
                              return profile;
                            })(profile)
                          )
                        );
                      }
                      (activeSession = void 0), s.disconnect(), cb();
                    }
                  ),
                  (activeSession = "stopping"),
                  !0
                );
              }
              return cb(), !1;
            }
            function bufferFrom(input, encoding) {
              return Buffer.from && Buffer.from !== Int8Array.from
                ? Buffer.from(input, encoding)
                : new Buffer(input, encoding);
            }
            function getAccessibleFileSystemEntries(path) {
              __exports__perfLogger.logEvent("ReadDir: " + (path || "."));
              try {
                const entries = _fs.readdirSync(path || ".", {
                    withFileTypes: !0,
                  }),
                  files = [],
                  directories = [];
                for (const dirent of entries) {
                  const entry =
                    "string" == typeof dirent ? dirent : dirent.name;
                  if ("." === entry || ".." === entry) continue;
                  let stat;
                  if ("string" == typeof dirent || dirent.isSymbolicLink()) {
                    const name = __exports__combinePaths(path, entry);
                    try {
                      if (((stat = statSync(name)), !stat)) continue;
                    } catch (e) {
                      continue;
                    }
                  } else stat = dirent;
                  stat.isFile()
                    ? files.push(entry)
                    : stat.isDirectory() && directories.push(entry);
                }
                return (
                  files.sort(),
                  directories.sort(),
                  { files: files, directories: directories }
                );
              } catch (e) {
                return __exports__emptyFileSystemEntries;
              }
            }
            function fileSystemEntryExists(path, entryKind) {
              const originalStackTraceLimit = Error.stackTraceLimit;
              Error.stackTraceLimit = 0;
              try {
                const stat = statSync(path);
                if (!stat) return !1;
                switch (entryKind) {
                  case 0:
                    return stat.isFile();
                  case 1:
                    return stat.isDirectory();
                  default:
                    return !1;
                }
              } catch (e) {
                return !1;
              } finally {
                Error.stackTraceLimit = originalStackTraceLimit;
              }
            }
            function fileExists(path) {
              return fileSystemEntryExists(path, 0);
            }
            function directoryExists(path) {
              return fileSystemEntryExists(path, 1);
            }
            function realpath(path) {
              try {
                return realpathSync(path);
              } catch {
                return path;
              }
            }
            function getModifiedTime(path) {
              try {
                return statSync(path)?.mtime;
              } catch (e) {
                return;
              }
            }
            function createSHA256Hash(data) {
              const hash = _crypto.createHash("sha256");
              return hash.update(data), hash.digest("hex");
            }
          })()),
        sys &&
          (function (sys) {
            const originalWriteFile = sys.writeFile;
            sys.writeFile = (path, data, writeBom) =>
              __exports__writeFileEnsuringDirectories(
                path,
                data,
                !!writeBom,
                (path, data, writeByteOrderMark) =>
                  originalWriteFile.call(sys, path, data, writeByteOrderMark),
                (path) => sys.createDirectory(path),
                (path) => sys.directoryExists(path)
              );
          })(sys),
        sys
      );
    })()) &&
      __exports__sys.getEnvironmentVariable &&
      ((function (system) {
        if (!system.getEnvironmentVariable) return;
        const pollingIntervalChanged = (function (baseVariable, levels) {
          const customLevels = getCustomLevels("TSC_WATCH_POLLINGINTERVAL");
          return (
            !!customLevels &&
            (setLevel("Low"), setLevel("Medium"), setLevel("High"), !0)
          );
          function setLevel(level) {
            levels[level] = customLevels[level] || levels[level];
          }
        })(0, PollingInterval);
        function getCustomLevels(baseVariable) {
          let customLevels;
          return (
            setCustomLevel("Low"),
            setCustomLevel("Medium"),
            setCustomLevel("High"),
            customLevels
          );
          function setCustomLevel(level) {
            const customLevel = (function (envVar, level) {
              return system.getEnvironmentVariable(
                `${envVar}_${level.toUpperCase()}`
              );
            })(baseVariable, level);
            customLevel &&
              ((customLevels || (customLevels = {}))[level] = Number(
                customLevel
              ));
          }
        }
        function getCustomPollingBasedLevels(baseVariable, defaultLevels) {
          const customLevels = getCustomLevels(baseVariable);
          return (
            (pollingIntervalChanged || customLevels) &&
            createPollingIntervalBasedLevels(
              customLevels
                ? { ...defaultLevels, ...customLevels }
                : defaultLevels
            )
          );
        }
        (pollingChunkSize =
          getCustomPollingBasedLevels(
            "TSC_WATCH_POLLINGCHUNKSIZE",
            defaultChunkLevels
          ) || pollingChunkSize),
          (__exports__unchangedPollThresholds =
            getCustomPollingBasedLevels(
              "TSC_WATCH_UNCHANGEDPOLLTHRESHOLDS",
              defaultChunkLevels
            ) || __exports__unchangedPollThresholds);
      })(__exports__sys),
      __exports__Debug.setAssertionLevel(
        /^development$/i.test(__exports__sys.getEnvironmentVariable("NODE_ENV"))
          ? 1
          : 0
      )),
    __exports__sys &&
      __exports__sys.debugMode &&
      (__exports__Debug.isDebugging = !0);
}
export { __exports__sys as sys };
