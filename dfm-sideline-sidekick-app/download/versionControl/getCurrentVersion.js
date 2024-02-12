/* eslint-disable @typescript-eslint/no-unsafe-argument */
export const getCurrentVersion = async (versionUrl) => {
    const versionResponse = await fetch(versionUrl);
    return versionResponse.json();
}