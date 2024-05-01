import React, { useState } from "react";
import "./signup.style.scss";
import { Button, Input } from "../../components/atoms";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSignUpWithEmailAndPassword from "../../hooks/signUpWithEmail/useSignUpWithEmailAndPassword";

/**
 * Sign Up Page component
 * @returns {JSX.Element} Sign Up Page JSX
 */
const SignUpPage = () => {
  // State to manage input values
  const [inputValues, setInputValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { signUpWithEmailAndPassword, isLoading } =
    useSignUpWithEmailAndPassword();
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
    const { fullName, email, password, confirmPassword } = inputValues;

    if (!fullName || !email || !password || !confirmPassword) {
      toast.warning("All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      toast.warning("Passwords do not match!");
      return;
    }

    try {
      // call the SignUpWithEmailAndPassword function
      const user = await signUpWithEmailAndPassword(email, password, fullName);
      if (user) {
        toast.success("User created successfully!");
        navigate("/home");
        setInputValues({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      toast.error(error.message); // Display error message from Firebase
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="text-container">
          <h2 className="heading">
            Sign Up on <span>Wallet.</span>
          </h2>
          <p className="sub-heading">Join the Wallet for Your Finances.</p>
        </div>
        {/* Input fields */}
        <Input
          type={"text"}
          placeholder={"Enter your name"}
          inputValue={inputValues.fullName}
          onChangeAction={handleInputChange}
          name="fullName"
        />
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
        <Input
          type={"password"}
          placeholder={"Confirm your password"}
          inputValue={inputValues.confirmPassword}
          onChangeAction={handleInputChange}
          name="confirmPassword"
        />
        <div className="button-container">
          {/* Submit button */}
          <Button
            title={isLoading ? "Loading" : "Create an account"}
            onClickAction={handleSubmit}
          />
          {/* Link to sign in page */}
          <p className="sub-heading">
            Already have an account? <Link to="/signin">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
