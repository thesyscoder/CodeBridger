import React, { useState } from "react";
import "./signup.style.scss";
import { Button, Input } from "../../components/atoms";
import { Google } from "@icon-park/react";
import { Link } from "react-router-dom";

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
  const handleSubmit = () => {
    // Handle form submission here
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="text-container">
          <h1 className="heading">Sign Up</h1>
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
          <Button title={"Create account"} onClickAction={handleSubmit} />
          {/* Sign up with Google button */}
          <Button
            title={"Sign Up with Google"}
            className="secondary"
            icon={<Google theme="outline" size="18" />}
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
