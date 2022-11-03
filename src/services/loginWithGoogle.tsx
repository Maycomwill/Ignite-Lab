import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { Text } from "../components/Text";
import { db } from "./firebaseConfig";

export const loginWithGoogle = async () => {
  const docCollectionRef = collection(db, "users");
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      console.log(user);
      setDoc(doc(docCollectionRef, auth.currentUser?.uid), {
        name: user.displayName,
        lasName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        createdAt: serverTimestamp(),
        userId: auth.currentUser?.uid,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });

  return <Text>Login</Text>;
};
