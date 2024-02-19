import { type APIResult, get, handleAPIError, post, put } from "./requests";

export type Principle = {
  _id: string;
  content?: object;
  overview: string;
  title: string;
  
  
};

export async function getPrinciple(id: string): Promise<APIResult<Principle>> {
  try {
    const response = await get(`/api/principles/${id}`);
    const json = (await response.json()) as Principle;
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function getAllPrinciples(): Promise<APIResult<Principle[]>> {
  try {
    const response = await get(`/api/principles/`);
    const json = (await response.json()) as Principle[];
    // const parsedJson = json.map((element) => (element));
    return { success: true, data: json };
    // your code here
  } catch (error) {
    return handleAPIError(error);
  }
}