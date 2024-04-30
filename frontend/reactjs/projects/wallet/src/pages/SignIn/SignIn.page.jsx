import React, { useState } from "react";
import "./signin.style.scss";
import { Button, Input } from "../../components/atoms";
import { Google } from "@icon-park/react";
const SignInPage = () => {
  // State to manage input values
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
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
    setInputValues({
      fullName: "",
      email: "",
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
          <Button title={"Log In"} onClickAction={handleSubmit} />
          {/* Sign in with Google button */}
          <Button
            title={"Sign In with Google"}
            className="secondary"
            icon={<Google theme="outline" size="18" />}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
