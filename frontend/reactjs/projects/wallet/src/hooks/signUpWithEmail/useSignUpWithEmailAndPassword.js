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
      const user = userCredential.user;
      // You can do further actions here upon successful signup

      setIsLoading(false);
      return user;
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return { signUpWithEmailAndPassword, error, isLoading };
};

export default useSignUpWithEmailAndPassword;
