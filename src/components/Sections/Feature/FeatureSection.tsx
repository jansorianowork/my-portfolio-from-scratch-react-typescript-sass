import React from "react";

import { featuresDetails } from "./../../../assets/constants";

const FeatureSection = () => {
  return (
    <>
      {" "}
      <div className="feature">
        <h3 className="feature-title">Why choose Easybank?</h3>
        <p className="feature-desc">
          We leverage Open Banking to turn your bank account into your financial
          hub.
        </p>
        <p>Control your finances like never before.</p>
        <div className="feature-list">
          <div className="row">
            {featuresDetails.map((featureData) => (
              <div key={featureData.id} className="col-lg-3 col-md-6">
                <div className="feature-list-item">
                  <div className="feature-list-item--icon">
                    <img src={featureData.imgSrc} alt="Online Banking" />
                  </div>
                  <div className="feature-list-item--title">
                    <h4> {featureData.title}</h4>
                  </div>
                  <div className="feature-list-item--desc">
                    <p>{featureData.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default FeatureSection;
