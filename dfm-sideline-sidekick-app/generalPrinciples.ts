import { get, handleAPIError, post, put } from "./requests";

import type { APIResult } from "./requests";

// export type GeneralPrinciple = {
//   _id: string;
//   title: string;
//   overview?: {
//     Importance?: string;
//     "Mechanism of Injury"?: string[];
//     Diagnosis?: string[];
//     "Physical Exam"?: string[];
//   };
//   content?: object;
// };

export type GeneralPrinciple = {
  _id?: string;
  title?: string;
  overview?: object;
  content?: object;
};

/**
 * The expected inputs when we want to create a new Task object. In the MVP, we only
 * need to provide the title and optionally the description, but in the course of
 * this tutorial you'll likely want to add more fields here.
 */
export type CreateGeneralPrincipleRequest = {
  title: string;
  overview?: object;
  content?: object;
};

/**
 * The expected inputs when we want to update an existing Task object. Similar to
 * `CreateTaskRequest`.
 */
export type UpdateGeneralPrincipleRequest = {
  _id: string;
  title: string;
  overview?: object;
  content?: object;
};

/**
 * The implementations of these API client functions are provided as part of the
 * MVP. You can use them as a guide for writing the other client functions.
 */
export async function createGeneralPrinciple(
  generalPrinciple: CreateGeneralPrincipleRequest,
): Promise<APIResult<GeneralPrinciple>> {
  try {
    const response = await post("/api/generalPrinciples", generalPrinciple);
    const json = (await response.json()) as GeneralPrinciple;
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function getGeneralPrinciple(id: string): Promise<APIResult<GeneralPrinciple>> {
  try {
    const response = await get(`/api/generalPrinciples/${id}`);
    const json = (await response.json()) as GeneralPrinciple;
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function getAllGeneralPrinciples(): Promise<APIResult<GeneralPrinciple[]>> {
  try {
    const response = await get(`/api/generalPrinciples/`);
    const json = (await response.json()) as GeneralPrinciple[];
    // const parsedJson = json.map((element) => (element));
    return { success: true, data: json };
    // your code here
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function updateGeneralPrinciple(
  generalPrinciple: UpdateGeneralPrincipleRequest,
): Promise<APIResult<GeneralPrinciple>> {
  try {
    // your code here
    const response = await put(`/api/generalPrinciples/${generalPrinciple._id}`, generalPrinciple);
    const json = (await response.json()) as GeneralPrinciple;
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}
