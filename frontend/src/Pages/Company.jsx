import React from "react";
import threepic from '../Components/Assets/Group 91.png'
import "./CSS/Company.css"

const Company = () => {
    return(
        <div className="company-container">
            <div className="details">
            <div class="company-info">
                <h1 class="h1">Company Information</h1>
                <p><span>Company Name:</span> TimeTrove</p>
                <p><span>Owner Name:</span> Jeet Sabhadiya</p>
                <p><span>Address:</span> RKU, Rajkot, India</p>
                <p><span>Location:</span> Rajkot, India</p>
                <p><span>Email:</span> timetrove@gmail.com</p>
             </div>
            </div>
                <div className="threepic">
                    <img src={threepic} alt="" />
                </div>

        </div>
    )
}

export default Company