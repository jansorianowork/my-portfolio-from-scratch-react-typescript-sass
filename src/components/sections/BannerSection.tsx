import React from 'react'
import {bannerImage} from './../../images/bannerImage.png'
const BannerSection = () => {
  return (
    <div className='banner-container'>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <h1>
  Next generation digital banking
          </h1>
          <p>
          Take your financial life online. Your Easybank account will be a one-stop-shop 
for spending, saving, budgeting, investing, and much more.
          </p>
          <a>Request Invite</a>
        </div>
        <div className="col-lg-6 col-md-6">
          <img src={bannerImage} alt="banner" />
        </div>
      </div>
    </div>
  )
}

export default BannerSection