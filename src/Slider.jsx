import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';

function Slider({slide, className}) {
   const {image, name, title, quote} = slide

   return(
      <article 
      className={className}
    >
      <img src={image} alt="" className="person-img"/>
      <h4>{name}</h4>
      <div className="title">{title}</div>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
   )
}

export default Slider