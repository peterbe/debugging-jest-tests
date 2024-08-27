import { describe, test, expect } from "@jest/globals";
import { flaky } from "../flaky";

describe("suite N", () => {
  test("test N", async () => {
    await flaky();
  });
});
