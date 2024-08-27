import { describe, test, expect } from "@jest/globals";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
describe("suite 1", () => {
  test("test 1", async () => {
    await sleep(1000);
    expect(1).toBe(1);
  });
  test("test 2", async () => {
    await sleep(200);
    expect(1).toBe(1);
  });
  test("test 3", async () => {
    await sleep(1000);
    expect(1).toBe(1);
  });
  test("test 4", async () => {
    await sleep(200);
    expect(1).toBe(1);
  });
  test("test 5", async () => {
    await sleep(1000);
    expect(1).toBe(1);
  });
  test("test 6", async () => {
    await sleep(200);
    expect(1).toBe(1);
  });
  test("test 7", async () => {
    await sleep(1000);
    expect(1).toBe(1);
  });
  test("test 8", async () => {
    await sleep(200);
    expect(1).toBe(1);
  });
});
