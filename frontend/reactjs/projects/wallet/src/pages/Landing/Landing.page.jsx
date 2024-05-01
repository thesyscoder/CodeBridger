// Landing Page

import React, { useEffect } from "react";
import "./landing.style.scss";
import banner from "../../assets/wallet_banner.svg";
import { Button } from "../../components/atoms";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
const LandingPage = () => {
  const navigate = useNavigate();
  const notify = () => toast("Wow so easy !");
  const handleNavigate = () => {
    notify();
    navigate("/signup");
  };
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, loading]);

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
