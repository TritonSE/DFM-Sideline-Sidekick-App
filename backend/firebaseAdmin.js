import fs from "fs";

import dotenv from "dotenv";
import admin from "firebase-admin";

dotenv.config();
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const serviceAccount = JSON.parse(fs.readFileSync(process.env.JSON_PATH, "utf8"));

admin.initializeApp({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
