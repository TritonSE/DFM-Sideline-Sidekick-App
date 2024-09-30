import { updateVersion } from "./Version";
import { get, handleAPIError } from "./requests";

import type { APIResult } from "./requests";

export type Emergency = {
  _id: string;
  title: string;
  subtitle: string;
  overview?: object;
  treatment?: object;
  content?: object;
};

/**
 * The expected inputs when we want to create a new Task object. In the MVP, we only
 * need to provide the title and optionally the description, but in the course of
 * this tutorial you'll likely want to add more fields here.
 */
export type CreateEmergencyRequest = {
  title: string;
  subtitle: string;
  overview?: object;
  treatment?: object;
  content?: object;
};

/**
 * The expected inputs when we want to update an existing Task object. Similar to
 * `CreateTaskRequest`.
 */
export type UpdateEmergencyRequest = {
  _id: string;
  title: string;
  subtitle: string;
  overview?: object;
  treatment?: object;
  content?: object;
};

/**
 * The implementations of these API client functions are provided as part of the
 * MVP. You can use them as a guide for writing the other client functions.
 */
export async function createEmergency(
  emergency: CreateEmergencyRequest,
): Promise<APIResult<Emergency>> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/emergencies`;
    console.log(emergency);
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emergency),
    });
    const json = (await response.json()) as Emergency;
    await updateVersion();
    return { success: true, data: json };
  } catch (error) {
    console.log(error);
    return handleAPIError(error);
  }
}

export async function getEmergency(title: string): Promise<Emergency> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/emergencies/${title}`;

    const response = await fetch(url, {
      method: "GET",
    });
    const json = (await response.json()) as Emergency;
    return json;
  } catch (error) {
    console.log(error);
    return {
      _id: "0", // A default or dummy ID
      title: "Unknown Emergency",
      subtitle: "No details available",
      // Add any other properties of the Emergency type here
    };
  }
}

export async function getAllEmergencies(): Promise<APIResult<Emergency[]>> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/emergencies`;
    const response = await get(url);
    const json = (await response.json()) as Emergency[];
    // const parsedJson = json.map((element) => (element));
    return { success: true, data: json };
    // your code here
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function updateEmergency(
  emergency: UpdateEmergencyRequest,
): Promise<APIResult<Emergency>> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/emergencies/${emergency._id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emergency),
    });
    const json = (await response.json()) as Emergency;
    await updateVersion();
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}
