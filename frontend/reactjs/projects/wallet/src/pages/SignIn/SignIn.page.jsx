import React, { useState } from "react";
import "./signin.style.scss";
import { Button, Input } from "../../components/atoms";
import { Link, useNavigate } from "react-router-dom";
import useSignInWithEmailAndPassword from "../../hooks/signInWithEmail/useSignInWithEmailAndPassword";
import { toast } from "react-toastify";
const SignInPage = () => {
  // State to manage input values
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const { loginWithEmailAndPassword, error, isLoading } =
    useSignInWithEmailAndPassword();

  const navigate = useNavigate();
  /**
   * Handle input change event
   * @param {Object} event - Input change event object
   */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async () => {
    // Handle form submission here
    const { email, password } = inputValues;
    if (email !== "" && password !== "") {
      try {
        const user = await loginWithEmailAndPassword(email, password);
        if (user) {
          toast.success("Logged In");
          navigate("/home");
        }
      } catch (error) {
        toast.error(error.message); // Display error message from Firebase
      }
    } else {
      toast.error("Required email and password");
      toast.error(error);
    }
    setInputValues({
      email: "",
      password: "",
    });
  };
  return (
    <div className="signin-container">
      <div className="signin-form-container">
        <div className="text-container">
          <h2 className="heading">
            Sign In on <span>Wallet.</span>
          </h2>
          <p className="sub-heading">Join the Wallet for Your Finances.</p>
        </div>
        {/* Input fields */}

        <Input
          type={"email"}
          placeholder={"Enter your email"}
          inputValue={inputValues.email}
          onChangeAction={handleInputChange}
          name="email"
        />
        <Input
          type={"password"}
          placeholder={"Enter your password"}
          inputValue={inputValues.password}
          onChangeAction={handleInputChange}
          name="password"
        />
        <div className="button-container">
          {/* Submit button */}
          <Button
            title={"Log In"}
            onClickAction={handleSubmit}
            disabled={isLoading}
          />
          {/* Link to sign in page */}
          <p className="sub-heading">
            Create an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
