import { updateVersion } from "./Version";
import { APIResult, handleAPIError } from "./requests";

export type GeneralPrinciple = {
  _id: string;
  title: string;
  subtitle: string;
  content: object;
};

export type NewGeneralPrinciple = {
  title: string;
  subtitle: string;
  content: object;
};

export async function getGeneralPrinciple(title: string): Promise<GeneralPrinciple> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/generalPrinciples/${title}`;

    const response = await fetch(url, {
      method: "GET",
    });
    const json = (await response.json()) as GeneralPrinciple;
    return json;
  } catch (error) {
    console.log(error);
    return {
      _id: "0", // A default or dummy ID
      title: "Unknown Emergency",
      subtitle: "No details available",
      content: { "": "No details available" },
      // Add any other properties of the Emergency type here
    };
  }
}

export async function createGeneralPrinciple(
  principle: NewGeneralPrinciple,
): Promise<APIResult<GeneralPrinciple>> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/generalPrinciples`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(principle),
    });
    const json = (await response.json()) as GeneralPrinciple;
    await updateVersion();
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function updateGeneralPrinciple(
  principle: GeneralPrinciple,
): Promise<APIResult<GeneralPrinciple>> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/generalPrinciples/${principle._id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(principle),
    });
    const json = (await response.json()) as GeneralPrinciple;
    await updateVersion();
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function deleteGeneralPrinciple(title: string): Promise<APIResult<GeneralPrinciple>> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/generalPrinciples/${title}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    const json = (await response.json()) as GeneralPrinciple;
    await updateVersion();
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}
