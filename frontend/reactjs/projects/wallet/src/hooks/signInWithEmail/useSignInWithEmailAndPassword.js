import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const useSignInWithEmailAndPassword = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loginWithEmailAndPassword = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setIsLoading(false);
      return userCredential.user;
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return { loginWithEmailAndPassword, error, isLoading };
};

export default useSignInWithEmailAndPassword;
