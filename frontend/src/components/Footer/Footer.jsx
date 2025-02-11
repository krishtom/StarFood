import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/'); 
  }
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='footer-logo' src={assets.logo} alt="" />
            <p>We’re passionate about bringing delicious meals straight to your door. Whether you're craving comfort food or exploring new cuisines, we’ve got you covered.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li onClick={navigateHome}><Link to='/'>Home</Link></li>
                <li >About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9939159941</li>
                <li>contact@starfood.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © StarFood.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
