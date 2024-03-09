export const getCurrentVersion = async (versionUrl: string) => {
  const versionResponse = await fetch(versionUrl);
  return versionResponse.json();
};
