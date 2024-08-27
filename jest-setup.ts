import failOnConsole from "jest-fail-on-console";

jest.retryTimes(4, { logErrorsBeforeRetry: true });

const isMemexPackage = false;

const failOnAllConsoleMessages = process.env.CI === "true";

failOnConsole({
  shouldFailOnWarn: !isMemexPackage,
  shouldFailOnError: !isMemexPackage,

  shouldFailOnDebug: failOnAllConsoleMessages,
  shouldFailOnInfo: failOnAllConsoleMessages,
  shouldFailOnLog: failOnAllConsoleMessages,

  silenceMessage(message, methodName) {
    console.log({ message, methodName });

    // silence messages related to JSDOM not implementing navigation
    if (
      methodName === "error" &&
      message.startsWith(
        "Error: Not implemented: navigation (except hash changes)"
      )
    ) {
      return true;
    }
    return false;
  },
});
