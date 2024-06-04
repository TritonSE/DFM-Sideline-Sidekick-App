import { get, handleAPIError, post, put } from "./requests";

import type { APIResult } from "./requests";

// export type Emergency = {
//   _id: string;
//   title: string;
//   overview?: {
//     Importance?: string;
//     "Mechanism of Injury"?: string[];
//     Diagnosis?: string[];
//     "Physical Exam"?: string[];
//   };
//   treatment?: {
//     "Acute Management"?: string[];
//     Dispo?: string[];
//     Considerations?: {
//       Header?: string;
//       Content?: string[];
//     };
//   };
//   content?: object;
// };

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
    const response = await post("/api/emergencies", emergency);
    const json = (await response.json()) as Emergency;
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function getEmergency(id: string): Promise<APIResult<Emergency>> {
  try {
    const response = await get(`/api/emergencies/${id}`);
    const json = (await response.json()) as Emergency;
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function getAllEmergencies(): Promise<APIResult<Emergency[]>> {
  try {
    const response = await get(`/api/emergencies/`);
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
    // your code here
    const response = await put(`/api/emergencies/${emergency._id}`, emergency);
    const json = (await response.json()) as Emergency;
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}
