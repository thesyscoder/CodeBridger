import React, { useState } from "react";
import "./signup.style.scss";
import { Button, Input } from "../../components/atoms";
import { Google, Mail } from "grommet-icons";
import { Link } from "react-router-dom";
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
  const handleSignWithEmail = () => {
    console.log(inputValues);
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
            inputValue={inputValues.name}
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
            icon={<Mail color="white"></Mail>}
            title={"Sign Up with email"}
            className="primary"
            onClickAction={handleSignWithEmail}
          />

          <Button
            icon={<Google color="plain"></Google>}
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
