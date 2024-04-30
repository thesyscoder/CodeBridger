// React custom hook for sigh up with email
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
const useSignUpWithEmailAndPassword = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signUpWithEmailAndPassword = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setIsLoading(false);
      return userCredential.user;
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return { signUpWithEmailAndPassword, error, isLoading };
};

export default useSignUpWithEmailAndPassword;
