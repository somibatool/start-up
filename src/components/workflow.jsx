import React from 'react'

import { MdOutlineStarHalf } from "react-icons/md";
import { PiNewspaperClipping } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { FaHeadSideVirus } from "react-icons/fa6";
import { HiHandThumbUp } from "react-icons/hi2";
import { FaCommentDots } from "react-icons/fa";


const workflow = () => {
  return (
    <div>
       
    <h1 className='flow-head'>The majority our customers <br /> do not understand their workflows.</h1>
    <p className='flow-para'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br /> mollit anim id est laborum.</p>

 <div className="all-cards">

 <div className="card">
  <MdOutlineStarHalf  className='heart-icon'/>
  <h1>Instant Features</h1>
  <p>Duis aute irure dolor <br /> in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat.</p>
  </div>
  <div className="card">
  <PiNewspaperClipping  className='heart-icon'/> 
  <h1>Instant Features</h1>
  <p>Duis aute irure dolor <br /> in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat.</p>
  </div>
  <div className="card">
  <CiGlobe  className='heart-icon'/>
  <h1>Instant Features</h1>
  <p>Duis aute irure dolor <br /> in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat.</p>
  </div>
 </div>


 <div className="all-cards">

 <div className="card">
  <FaHeadSideVirus  className='heart-icon'/> 
  <h1>Instant Features</h1>
  <p>Duis aute irure dolor <br /> in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat.</p>
  </div>
  <div className="card">
  <HiHandThumbUp className='heart-icon'/>
  <h1>Instant Features</h1>
  <p>Duis aute irure dolor <br /> in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat.</p>
  </div>
  <div className="card">
  <FaCommentDots  className='heart-icon'/>
  <h1>Instant Features</h1>
  <p>Duis aute irure dolor <br /> in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat.</p>
  </div>
 </div>
      
    </div>
  )
}

export default workflow
