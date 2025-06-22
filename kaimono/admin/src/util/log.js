export class ConsoleLogger extends console {
  logInformation(message) {
    console.info(message);
  }

  logError(message) {
    console.error(message);
  }

  logWarning(message) {
    console.warn(message);
  }

  logDebug(message) {
    console.debug(message);
  }

  log(message) {
    console.log(message);
  }
}
