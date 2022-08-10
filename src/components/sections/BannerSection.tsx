import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import BannerImage from "./../../images/banner-image.png";
import BannerImageBG from './../../images/icon/bg-intro-desktop.svg'

const BannerSection = () => {
  return (
    <div className="banner">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="banner-text">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            
            <Router>
            <Link to="/"><button className='btn btn-primary btn-lg'>Request Invite</button></Link>
            </Router>

          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="banner-image">
          <img className="banner-image--front" src={BannerImage} alt="banner" />
          <img className="banner-image--behind" src={BannerImageBG} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
