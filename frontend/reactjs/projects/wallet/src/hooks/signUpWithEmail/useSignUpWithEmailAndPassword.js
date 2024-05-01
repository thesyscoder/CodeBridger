import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, doc, firestoreDB, setDoc } from "../../firebase/firebase.config";
import { getDoc } from "firebase/firestore";

const useSignUpWithEmailAndPassword = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signUpWithEmailAndPassword = async (email, password, fullName) => {
    setIsLoading(true);
    setError(null);

    try {
      // Create user in firebase auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setIsLoading(false);

      const userId = userCredential.user.uid;
      const userRef = doc(firestoreDB, "Users", userCredential.user.uid);
      const userData = await getDoc(userRef);
      if (!userData.exists()) {
        await setDoc(doc(firestoreDB, "Users", userId), {
          name: userCredential.user.displayName
            ? userCredential.user.displayName
            : fullName,
          email: userCredential.user.email,
          photoURL: userCredential.user.photoURL
            ? userCredential.user.photoURL
            : "",
          createdAt: userCredential.user.metadata.creationTime,
        });
      }
      return userCredential.user;
    } catch (error) {
      setIsLoading(false);
      const errorMessage = error.message || "An error occurred";
      setError(errorMessage);
      // Throw error to handle in the component or log it
      throw new Error(errorMessage);
    }
  };

  return { signUpWithEmailAndPassword, error, isLoading };
};

export default useSignUpWithEmailAndPassword;
