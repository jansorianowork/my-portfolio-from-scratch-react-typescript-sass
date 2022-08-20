import React from 'react'
import { footerDetails } from '../../../assets/constants'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <div className="row">
            <div className="col-lg-6 col-md-6">
            <div className="footer-brand">
          <a href="/">JANSORIANO</a>

          </div>
        {footerDetails.map((footerData) => (
        <img className = "footer-social-icons"
                src={footerData.imgSrc}
                alt="footer img"
              />))}
            </div>
            <div className="col-lg-6 col-md-6">
            <div className="footer-links">
              <div className="row">
                <div className="col-lg-6 col-md-6">
               <div  className="footer-links--items">
               <a className="" href="/">Home</a>
          <a className="" href="/">About</a>
          <a className="" href="/">Projects</a>
                </div>  

                </div>
                <div className="col-lg-6 col-md-6">  
                <div  className="footer-links--items">
                <a className="" href="/">Blog</a>
          <a className="" href="/">Contact</a>
          </div>
                </div>
              </div>
              </div>
</div>
          </div>



        </div>
        <div className="col-lg-4 col-md-4">
        <div className="me-auto">
          <button className='btn btn-primary btn-sm'>
            Download PDF CV
          </button>
        </div>
        <p className='copyright'>
        All rights reserved 2022
        </p>
        </div>
      </div>
    </div>
  )
}

export default Footer