import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("getAPIKey returns null if no authorization header is present", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("getAPIKey returns null if authorization header is not in the correct format", () => {
    const headers = { authorization: "NotApiKey key" };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("getAPIKey returns the API key if the authorization header is in the correct format", () => {
    const headers = { authorization: "ApiKey my-api-key" };
    expect(getAPIKey(headers)).toBe("my-api-key");
  });
});
