namespace __exports__ {
    export const Diagnostics: any = {};
    export const tracing = false;
    export const perfLogger = {
        logEvent(message: string) {},
        logStartReadFile() {},
        logStopReadFile() {}
    }
    export const Debug = {
        assert(...args: any[]) {},
        fail(...args: any[]) {},
        getFunctionName(...args: any[]) {},
        isDebugging() {return false},
        assertIsDefined(...args: any[]) {},
        assertEqual(...args: any[]) {},
        assertLessThanOrEqual(...args: any[]) {},
        assertGreaterThanOrEqual(...args: any[]) {},
        checkDefined<V>(v: V | null | undefined) { return v as V },
        setAssertionLevel(...args: any[]) {},
        assertNever(...args: any[]) {},
        failBadSyntaxKind(...args: any[]) {},
    }
}