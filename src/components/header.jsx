import React from 'react'
import logo from '../Assets/download.jfif'
import './styling.css'

const header = () => {
  return (
    <div>
      <div className="header-section">
     
     <div className="all">
      <img src={logo} alt="logo" />
    
     <div className='btns'>
     <button>sign in</button>
     <button>sign up</button>
     </div>
     </div>
      </div>
    </div>
  )
}

export default header
