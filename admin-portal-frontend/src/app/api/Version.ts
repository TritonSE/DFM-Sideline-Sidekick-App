export const updateVersion = async (): Promise<void> => {
  try {
    if (!process.env.API_URL) {
      throw new Error("API URL is not defined");
    }

    const url = `${process.env.API_URL}/version`;

    await fetch(url, {
      method: "PUT",
    });
  } catch (error) {
    console.log("Error updating version", error);
  }
};
