import { APIResult, handleAPIError } from "./requests";

export type Admin = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  title: string;
  superUser: boolean;
};

// addadmin, delete admin by email, get all admins
export async function checkAdmin(email: string): Promise<boolean> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/admin/${email}`;

    const response = await fetch(url, {
      method: "GET",
    });
    const json = (await response.json()) as boolean;
    return json;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function addAdmin(admin: Admin): Promise<APIResult<Admin>> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/admin`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    });
    const json = (await response.json()) as Admin;
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function deleteAdminByEmail(email: string): Promise<APIResult<Admin>> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/admin/${email}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Admin cannot be deleted");
    }
    const json = (await response.json()) as Admin;
    return { success: true, data: json };
  } catch (error) {
    console.log(error);
    return handleAPIError(error);
  }
}

export async function getAllAdmins(): Promise<Admin[]> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/allAdmins`;
    const response = await fetch(url, {
      method: "GET",
    });
    const json = (await response.json()) as Admin[];

    return json;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function checkSuperAdmin(email: string): Promise<boolean> {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/isSuperAdmin/${email}`;

    const response = await fetch(url, {
      method: "GET",
    });
    const json = (await response.json()) as boolean;
    return json;
  } catch (error) {
    console.log(error);
    return false;
  }
}
