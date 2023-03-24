import React, { useState } from 'react'
import './Card.css';

const Card = (props) => {
    console.log(props.arr);
    console.log(props.name);
  
    const [pokename,setpokename] = useState([]);
  

    
  return (
    <div className='card1'>
        {(props.arr).map((item,index)=>{
            return (
                <div className='imag-div'>
                <img className='img' src={item}></img>
              
                <h2 className='h2'>{props.name[index]}</h2>
           

              
                </div>
            
              
                
                 
               
           )
        })}

        

    </div>
  )
}

export default Card