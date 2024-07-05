import React from 'react'
import './styling.css'
import Video from '../Assets/Video.mp4'


const landingpage = () => {
  return (
    <div>
      <h1 className='heading'>Landing template for startups</h1>
      <p className='para'>Our landing page template works on all devices, so you only have to set it up once, <br/> and get beautiful results forever.</p>
      <div className='new-btn'>
        <button>Start Free Trails</button>
        <button>Learn More</button>
      
      </div>
      <video controls height="500" src={Video}></video>
      
    </div>
  )
}

export default landingpage
