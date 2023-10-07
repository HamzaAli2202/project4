import React from "react";

export const Mon = ({title,city,url})=>{
    const handleTitle =()=>{
        alert (`Thanks for Visiting ${title}`)       
    }
    const handleCity = ()=>{
        alert(`Welcome to ${city}`)
    }
    return(
        <div className="sub">
            <h3 onClick={handleTitle}>{title}</h3>
            <h5 onClick={handleCity}>{city}</h5>
            <img src={`images/${url}.jpg`} alt="" />
            </div>
    )
}