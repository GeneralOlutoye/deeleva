import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import './footer.css'

export const Footer = () => {
    return (

        <footer className='footer'>
            <div className="footer-wrapper">
                <div className='footer-top'>
                    <div className="footer-img">
                        <a href="http://deleeva.ng"><img className="deleeva_logo" src='/images/deleeva.png' alt='deleeva logo' /></a>
                    </div>
                    <div className='footer-social'>
                        <a className='footer-social-icon' href="/"> <BsFacebook /> </a>
                        <a className='footer-social-icon' href="/"> <BsLinkedin /> </a>
                        <a className='footer-social-icon' href="/"> <BsInstagram /> </a>
                        <a className='footer-social-icon' href="/"> <AiFillTwitterCircle /> </a>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className="footer-bottom-wrapper">
                        <div className='footer-legal-nav'>
                            <Link className='footer-legal-link' to='/terms-of-service'>Terms of Service</Link>
                            <a className='footer-legal-link' href="/">Cookie Policy</a>
                            <a className='footer-legal-link' href="/">FAQ</a>
                            <a className='footer-legal-link' href="/">Support</a>
                            <a className='footer-legal-link' href="/">Careers</a>
                        </div>
                        <div className='copyright-wrapper'>
                            <div className='dark-footer-small-text' > Copyright © <span>2022</span> Deeleva. All rights reserved. </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
