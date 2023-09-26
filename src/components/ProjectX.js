import React, {useState} from 'react'
import '../styles/ProjectX.css';
import picture from'../assets/illustration-hero.svg'
import music from '../assets/icon-music (1).svg'




const ProjectX = () => {
  // let plan = 'Annual Plan'
  // let price = '$59.99/year'
  // let newPrice = '$' + (59.99 / 2) +'/monthly'
  // console.log(newPrice);
  const [change, setChange] = useState({
    plan: 'Annual Plan',
    price: '$59.99/year',
  })
  function changes(){
    if(change.plan === 'Annual Plan' && change.price === '$59.99/year'){
      setChange({plan: 'Monthly Plan', price: '$' + Math.ceil(59.99/12) + '/month'})
    }else{
      setChange({plan: 'Annual Plan',
      price: '$59.99/year'})
    }
  }
  // function cancel(){
    
  // }
  return (
    <div className='er w-100'>
    <div id='ant' className=''>
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
        <div className='red grid container mt-4'>
          <div className='rows align-items-center container'>
            <div className='icon '>
              <img src={music} alt="music-icon" />
            </div>
            <div className='text'>
                <h6> {change.plan} </h6>
              <p> {change.price} </p>
            </div>
            <div className='blue text-end'>
              <a href="#" onClick={changes}>change</a>
            </div>
          </div>
        </div>
        <div className='d-grid'>
        <button className='pink text-center mt-4'>Proceed to Payment</button>
        </div>
              <div className='text-center mt-4 cancel'>
                <p onClick={()=>setChange([])}>{change.length === 0 ? 'refresh': 'cancel'}</p>
              </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProjectX