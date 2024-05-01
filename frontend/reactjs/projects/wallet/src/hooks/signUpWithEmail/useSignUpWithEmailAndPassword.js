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
      setIsLoading(false);
      const errorMessage = error.message || "An error occurred";
      setError(errorMessage);
      // Throw error to handle in the component or log it
      console.error("Sign Up Error:", error);
      throw new Error(errorMessage);
    }
  };

  return { signUpWithEmailAndPassword, error, isLoading };
};

export default useSignUpWithEmailAndPassword;
