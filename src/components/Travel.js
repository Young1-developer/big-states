import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function Travel(props) {
  return (
    <div className='travel-container'>
        
<div className="img-container">
<img className='travel-img'
       src={`../assets/images/ ${props.imgCover}`} 
        alt="This is highway pics" />

</div>
     
      <div className='travel-stats'>
       <span><FaLocationDot  className='map-icon'/> </span>
       <span className='stateName'>{props.state}</span>
      <span className='link'><a href={props.url}>view the location on the map</a></span> 

       <h1>{props.title}</h1>
       <span><h4>{props.date.startDate} - {props.date.endDate}</h4></span>
       <p className='text-description'>{props.description}</p>
      </div>
    </div>
  )
}

export default Travel 
