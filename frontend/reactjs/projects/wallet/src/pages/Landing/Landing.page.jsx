// Landing Page

import React from "react";
import "./landing.style.scss";
import banner from "../../assets/wallet_banner.svg";
import { Button } from "../../components/atoms";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LandingPage = () => {
  const navigate = useNavigate();
  const notify = () => toast("Wow so easy !");
  const handleNavigate = () => {
    notify();
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
          Wallet is the powerful expense tracker that empowers you. Effortlessly
          track spending, categorize transactions, <br></br>and uncover hidden
          spending patterns.
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
        <img src={banner} alt="" className="banner" />
      </div>
    </div>
  );
};
export default React.memo(LandingPage);
