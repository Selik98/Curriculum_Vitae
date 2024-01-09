import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
export default async function sendEmail(subject, body) {
  const collectionRef = collection(db, "email");
  const emailContent = {
    to: "mkiesel98@gmail.com",
    message: {
      subject: subject,
      text: body,
    },
  };
  return await addDoc(collectionRef, emailContent);
}
