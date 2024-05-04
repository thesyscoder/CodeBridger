import React, { useState } from "react";
import "./signup.style.scss";
import { Button, Input } from "../../components/atoms";
import { Google } from "grommet-icons";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const SignUpPage = () => {
  const [inputValues, setInputValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // handle submit for signInWithEmail button
  const handleSignWithEmail = (event) => {
    const { fullName, email, password, confirmPassword } = inputValues;
    if (!fullName || !email || !password || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Invalid email address.");
    }
    if (password.length < 8) {
      toast.error("Password should be at least 8 character long.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Ensure that the password and confirm password fields match");
      return;
    }
    // success action
    toast.success("Account created.");
    setInputValues({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="signup-main-container">
      <div className="text-container">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/000000/wallet--v1.png"
          alt="wallet--v1"
        />
        <h1 className="heading">Hey,Hello 👋🏻</h1>
        <p className="sub-heading">
          Enter the information to create wallet account
        </p>
        <div className="">
          <Input
            type="text"
            placeholder={"Full name"}
            name="fullName"
            onChangeAction={handleInputChange}
            inputValue={inputValues.fullName}
          />
          <Input
            type="email"
            placeholder={"Email"}
            name="email"
            onChangeAction={handleInputChange}
            inputValue={inputValues.email}
          />
          <Input
            type="password"
            placeholder={"Password"}
            name="password"
            onChangeAction={handleInputChange}
            inputValue={inputValues.password}
          />
          <Input
            type="password"
            placeholder={"Confirm password"}
            name="confirmPassword"
            onChangeAction={handleInputChange}
            inputValue={inputValues.confirmPassword}
          />
          <Button
            title={"Sign Up with email"}
            className="primary"
            onClickAction={handleSignWithEmail}
          />

          <Button
            icon={<Google color="plain" size="18px"></Google>}
            title={"Sign Up with Google "}
            className="secondary"
            onClickAction={() => {}}
          />
          <p className="sub-heading">
            Already have an account? <Link to="/signin">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
