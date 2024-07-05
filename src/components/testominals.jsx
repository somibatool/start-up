import React from 'react'
import './styling.css'
import man from '../Assets/man.webp'
import women from '../Assets/women.webp'

const testominals = () => {
  return (
    <div>
      <hr />
     <div className='world-main'>
     <h1>Don't take our word for it</h1>
     <p>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus <br /> nulla at volutpat diam ut venenatis tellus—in ornare.</p>
     </div>

    <div className="card-container">
     <div className="card">
       <img src={man} alt="img" />
        <div className="text">This is some text in the card. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ipsum rerum magni beatae cupiditate accusamus adipisci earum libero officia sed?</div>
        <div className="name">Random Name 1 <span class="label">UX Board</span></div>
     </div>
    <div class="card">
    <img src={man} alt="img" />
        <div className="text">This is some text in the card. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At eum tempora, non cum eaque magnam placeat iste nisi quo perspiciatis commodi consequatur.</div>
        <div className="name">Random Name 2 <span class="label">UX Board</span></div>
    </div>
    <div className="card">
    <img src={women} alt="img" />
        <div className="text">This is some text in the card. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, et inventore. Ea ipsum dicta pariatur, nemo in tempora, nihil dolor sunt fugit esse minima quisquam perspiciatis sed? Velit, optio incidunt?</div>
        <div className="name">Random Name 3 <span class="label">UX Board</span></div>
    </div>
</div>
    </div>
  )
}

export default testominals
