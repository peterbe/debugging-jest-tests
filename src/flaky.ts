let hasErrored = false;
export async function flaky() {
  //   if (Math.random() < 0.005) {
  //     throw new Error("Flaky error");
  //   } else if (Math.random() > 0.05) {
  if (!hasErrored) {
    console.error("ERRORORORORO");
    hasErrored = true;
  }
  //   } else if (Math.random() > 0.5) {
  //     console.warn("WARNWARNWARN");
  //   }
}
