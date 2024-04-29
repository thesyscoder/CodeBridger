// Landing Page

import React from "react";
import "./landing.style.scss";
import banner from "../../assets/wallet_banner.svg";
import { Button } from "../../components/atoms";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/signup");
  };
  return (
    <div className="landing-container">
      <div className="text-container">
        <h1 className="heading">
          Take Charge of Your Finances,
          <br />
          <span>Sign Up for Wallet Today.</span>
        </h1>
        <p className="sub-heading">
          Wallet is the powerful expense tracker that empowers you.<br></br>
          Effortlessly track spending, categorize transactions, <br></br>and
          uncover hidden spending patterns. <br></br>Achieve your financial
          goals with <br></br>clear insights and budgeting tools.
        </p>
        <div className="buttons">
          <Button
            className="primary"
            title={"Get started "}
            onClickAction={handleNavigate}
          />
        </div>
      </div>
      <div className="banner-container">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};
export default React.memo(LandingPage);
