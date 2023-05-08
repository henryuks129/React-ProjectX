import React from 'react'
import '../styles/ProjectX.css';
import picture from'../assets/illustration-hero.svg'
import music from '../assets/icon-music (1).svg'



const ProjectX = () => {
  return (
    <div className='er'>
    <div id='ant' className='mt-3'>
      <div style={{height: '100%'}} className='d-flex justify-content-center align-items-center'>
        <div style={{width: '20rem', height: '90%'}} className='ro'>
          <div> 
        <img src={picture} alt="" style={{width: '20rem', height: '11rem'}} className='dd'/>
        </div>
        <div className='text-center mt-4 we'>
          <h2>Order Summary</h2>
        </div>
        <div className='text-center pea mt-4'>
          <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        </div>
        <div className='red grid container mt-2'>
          <div className='rows align-items-center container'>
            <div className='icon '>
              <img src={music} alt="music-icon" />
            </div>
            <div className='text'>
                <h6>Annual Plan</h6>
              <p>$59.99/year</p>
            </div>
            <div className='blue text-end'>
              <a href="">change</a>
            </div>
          </div>
        </div>
        <div className='d-grid'>
        <button className='pink text-center mt-3'>Proceed to Payment</button>
        </div>
              <div className='text-center mt-2 cancel'>
                <p>Cancel Order</p>
              </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProjectX