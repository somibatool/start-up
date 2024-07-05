import React from 'react'
import './styling.css'
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const container = () => {
  return (
    <div>
        <div className="container">
         <div className="both-side">
         <div className="right">
                <h1>Stay in the loop </h1>
                <p>Join our newsletter to get top news before anyone else.</p>
            </div>
            <div className="left">
                <input type="text" placeholder='Your best Email'/>
                <button>Subscribe</button>
            </div>
         </div>
        </div>
        <div className="main-container">
            <div className="first">
                <p>Lorem ipsum is placeholder text commonly used <br /> in the graphic, print, and publishing industries for previewing  <br />layouts and visual mockups.</p>
            </div>
            <div className="second">
                <ul>
                    <li>products</li>
                    <li>Web Studio</li>
                    <li>DynamicBox Flex</li>
                    <li>Programming Forms</li>
                </ul>
            </div>
            <div className="Third">
                <ul>
                    <li>Resources</li>
                    <li>Nostrud exercitation</li>
                    <li>Visual mockups</li>
                    <li>Nostrud exercitation</li>
                    <li>Visual mockups</li>
                    <li>Nostrud exercitation</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Company</li>
                    <li>Consectetur adipiscing</li>
                    <li>Labore et dolore</li>
                    <li>Consectetur adipiscing</li>
                    <li>Labore et dolore</li>
                    <li>Consectetur adipiscing</li>
                </ul>
            </div>

        </div>
        <div className="footer">
            <div className='pp'>© Cruip.com. All rights reserved.</div>
            <div className='icons'>
                <i><FaGithub /></i>
                <i><FaFacebook /></i>
                <i><FaInstagramSquare /></i>
                <i><FaLinkedin /></i>

            </div>
        </div>
      
    </div>
  )
}

export default container
