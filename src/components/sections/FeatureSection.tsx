import React from "react";
import OnlineBankingIcon from "./../../images/icon/icon-online.svg";
import SimpleBudgetingIcon from "./../../images/icon/icon-budgeting.svg";
import FastOnboardingIcon from "./../../images/icon/icon-onboarding.svg";
import OpenAPIIcon from "./../../images/icon/icon-api.svg";
const FeatureSection = () => {
  return (
    <div className="feature">
      <h3 className="feature-title">Why choose Easybank?</h3>
      <p className="feature-desc">
        We leverage Open Banking to turn your bank account into your financial
        hub.
      </p>
      <p>Control your finances like never before.</p>
      <div className="feature-list">
        <div className="row">

        <div className="col-lg-3 col-md-6">
          <div className="feature-list-item">
            <div className="feature-list-item--icon">
              <img src={OnlineBankingIcon} alt="Online Banking" />
            </div>
            <div className="feature-list-item--title">
              <h4>Online Banking</h4>
            </div>
            <div className="feature-list-item--desc">
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="feature-list-item">
            <div className="feature-list-item--icon">
              <img src={SimpleBudgetingIcon} alt="Simple Budgeting" />
            </div>
            <div className="feature-list-item--title">
              <h4>Simple Budgeting</h4>
            </div>
            <div className="feature-list-item--desc">
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="feature-list-item">
            <div className="feature-list-item--icon">
              <img src={FastOnboardingIcon} alt="Fast Onboarding" />
            </div>
            <div className="feature-list-item--title">
              <h4>Fast Onboarding</h4>
            </div>
            <div className="feature-list-item--desc">
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="feature-list-item">
            <div className="feature-list-item--icon">
              
              <img src={OpenAPIIcon} alt="Open API" />
            </div>
            <div className="feature-list-item--title">
              <h4>Open API</h4>
            </div>
            <div className="feature-list-item--desc">
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default FeatureSection;
