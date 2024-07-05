import React from 'react'
import './styling.css'
import { FaCheck } from "react-icons/fa";
import screenshot from '../Assets/screen.png'

const product = () => {
  return (
    <div>
    <hr />
   <div className='new-butn'>
    <button> Reach goals that matter</button>
   </div>
   <h1 className='pro-head'>One product, unlimited solutions</h1>
   <p className='pro-para'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  <br/> mollit laborum — semper quis lectus nulla.</p>



   <div className='main'>
  <div>
  <span >More speed. Less spend</span>
    <h2>Keep projects on schedule</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 <div className="all-check">
 <div className='check'>
    <div className="one-check"><FaCheck/></div>
    <div className="one-check"><FaCheck/></div>
    <div className="one-check" ><FaCheck/></div>
  </div> 
  <div className='your-para'>
   <p className='ppp' >Duis aute irure dolor in reprehenderit</p> 
   <p className='pp'>Duis aute irure dolor in reprehenderit</p> 
   <p  className='pp'>Duis aute irure dolor in reprehenderit</p>
  </div>
 </div>
  </div>
  <div className='screenshot'>
    <img src={screenshot} alt="" />
   </div>
 
   </div>




   <div className='main'>



   <div className='screenshot'>
    <img src={screenshot} alt="" />
   </div>
  <div>
  <span >More speed. Less spend</span>
    <h2>Keep projects on schedule</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 <div className="all-check">
 <div className='check'>
    <div className="one-check"><FaCheck/></div>
    <div className="one-check"><FaCheck/></div>
    <div className="one-check" ><FaCheck/></div>
  </div> 
  <div className='your-para'>
   <p className='ppp' >Duis aute irure dolor in reprehenderit</p> 
   <p className='pp'>Duis aute irure dolor in reprehenderit</p> 
   <p  className='pp'>Duis aute irure dolor in reprehenderit</p>
  </div>
 </div>
  </div>
 
 
   </div>

   <div className='main'>
  <div>
  <span >More speed. Less spend</span>
    <h2>Keep projects on schedule</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
 <div className="all-check">
 <div className='check'>
    <div className="one-check"><FaCheck/></div>
    <div className="one-check"><FaCheck/></div>
    <div className="one-check" ><FaCheck/></div>
  </div> 
  <div className='your-para'>
   <p className='ppp' >Duis aute irure dolor in reprehenderit</p> 
   <p className='pp'>Duis aute irure dolor in reprehenderit</p> 
   <p  className='pp'>Duis aute irure dolor in reprehenderit</p>
  </div>
 </div>
  </div>
  <div className='screenshot'>
    <img src={screenshot} alt="" />
   </div>
 
   </div>
   
  

  </div>
   
  )
}

export default product
