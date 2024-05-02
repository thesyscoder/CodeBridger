import React from "react";
import "./landing.style.scss";
import wallet_illustration from "../../assets/Finance.svg";
import { Button } from "../../components/atoms";
import { useNavigation } from "../../hooks";

const LandingPage = () => {
  const navigateTo = useNavigation();

  const handleNavigation = (path) => {
    navigateTo(path);
  };

  return (
    <div className="landing-page-main-container">
      <div className="text-content-container">
        <h2>Wallet</h2>
        <h1>Where Every Expense Finds Purpose!</h1>
        <p>
          Track every expense effortlessly, budget with ease, and achieve your
          financial goals confidently. Join thousands who've found financial
          freedom with Wallet."
        </p>
        <div className="button-container">
          <Button
            className="primary"
            title="Sign Up"
            disabled={false}
            onClickAction={() => handleNavigation("/signup")}
          />
          <Button />
          <Button
            className="secondary"
            title="Sign In"
            disabled={false}
            onClickAction={() => handleNavigation("/signin")}
          />
          <Button />
        </div>
      </div>
      <div className="banner-illustration-container">
        <img src={wallet_illustration} alt="wallet" />
      </div>
    </div>
  );
};

export default LandingPage;
