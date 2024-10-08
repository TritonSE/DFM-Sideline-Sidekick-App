/* eslint-disable @typescript-eslint/no-floating-promises */
/**
 * Based on the TSE Fulcrum API client implementation by justinyaodu:
 * https://github.com/TritonSE/TSE-Fulcrum/blob/main/frontend/src/api.ts
 */

/**
 * A custom type defining which HTTP methods we will handle in this file
 */
type Method = "GET" | "POST" | "PUT";

/**
 * The first part of the backend API URL, which we will automatically prepend to
 * every request. This means in the rest of our code, we can write "/api/foo"
 * instead of "http://localhost:3001/api/foo".
 */
//const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3001";
// NOTE TO REVIEWERS: INSERT IP ADDRESS HERE
// YOU MUST BE ON THE SAME NETWORK AS TEST DEVICE AND HAVE BACKEND RUNNING (WITH .env SETUP and "Database Connected" message)
// const API_BASE_URL = "http://100.112.104.53:3001";
const API_BASE_URL = "https://sideline-sidekick-app.web.app";

/**
 * A wrapper around the built-in `fetch()` function that abstracts away some of
 * the low-level details so we can focus on the important parts of each request.
 * See https://developer.mozilla.org/en-US/docs/Web/API/fetch for information
 * about the Fetch API.
 *
 * @param method The HTTP method to use
 * @param url The URL to request
 * @param body The body of the request, or undefined if there is none
 * @param headers The headers of the request
 * @returns The Response object returned by `fetch()
 */
async function fetchRequest(
  method: Method,
  url: string,
  body: unknown,
  headers: Record<string, string>,
): Promise<Response> {
  const hasBody = body !== undefined;

  const newHeaders = { ...headers };
  if (hasBody) {
    newHeaders["Content-Type"] = "application/json";
    // newHeaders["Accept"] = "*/*";
    // newHeaders["Accept-Encoding"] = "gzip, deflate, br";
    // newHeaders["Connection"] = "keep-alive";
  }

  const response = await fetch(url, {
    method,
    headers: newHeaders,
    body: hasBody ? JSON.stringify(body) : undefined,
  });

  return response;
}

/**
 * Throws an error if the given response's status code indicates an error
 * occurred, else does nothing.
 *
 * @param response A response returned by `fetch()` or `fetchRequest()`
 * @throws An error if the response was not successful (200-299) or a redirect
 * (300-399)
 */
async function assertOk(response: Response): Promise<void> {
  if (response.ok) {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  let message = `${response.status} ${response.statusText}`;

  try {
    const text = await response.text();
    if (text) {
      message += ": " + text;
    }
  } catch (e) {
    // skip errors
  }

  throw new Error(message);
}

/**
 * Sends a GET request to the provided API URL.
 *
 * @param url The URL to request
 * @param headers The headers of the request (optional)
 * @returns The Response object returned by `fetch()`
 */
export async function get(url: string, headers: Record<string, string> = {}): Promise<Response> {
  // GET requests do not have a body
  const response = await fetchRequest("GET", API_BASE_URL + url, undefined, headers);
  assertOk(response);
  return response;
}

/**
 * Sends a POST request to the provided API URL.
 *
 * @param url The URL to request
 * @param body The body of the request, or undefined if there is none
 * @param headers The headers of the request (optional)
 * @returns The Response object returned by `fetch()`
 */
export async function post(
  url: string,
  body: unknown,
  headers: Record<string, string> = {},
): Promise<Response> {
  const response = await fetchRequest("POST", API_BASE_URL + url, body, headers);
  assertOk(response);
  return response;
}

/**
 * Sends a PUT request to the provided API URL.
 *
 * @param url The URL to request
 * @param body The body of the request, or undefined if there is none
 * @param headers The headers of the request (optional)
 * @returns The Response object returned by `fetch()`
 */
export async function put(
  url: string,
  body: unknown,
  headers: Record<string, string> = {},
): Promise<Response> {
  const response = await fetchRequest("PUT", API_BASE_URL + url, body, headers);
  assertOk(response);
  return response;
}

export type APIData<T> = { success: true; data: T };
export type APIError = { success: false; error: string };

export type APIResult<T> = APIData<T> | APIError;

/**
 * Helper function for API client functions to handle errors consistently.
 * Recommended usage is in a `catch` block--see `createTask` in `src/api/tasks`
 * for an example.
 *
 * @param error An error thrown by a lower-level API function
 * @returns An `APIError` object with a message from the given error
 */
export function handleAPIError(error: unknown): APIError {
  if (error instanceof Error) {
    return { success: false, error: error.message };
  } else if (typeof error === "string") {
    return { success: false, error };
  }
  return { success: false, error: `Unknown error: ${String(error)}` };
}
