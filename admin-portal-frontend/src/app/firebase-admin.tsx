
import admin from 'firebase-admin';

const serviceAccount = require('./dfm-sideline-sidekick-app-firebase-adminsdk-mqgtq-32d66e30cf.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const auth = admin.auth();
export const firestore = admin.firestore();
