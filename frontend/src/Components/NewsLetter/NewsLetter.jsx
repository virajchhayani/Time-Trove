import React from 'react'
import './NewsLetter.css'
// import subscribe1 from "../Assets/subscribe1.png"

const NewsLetter = () => {
    return (
        <div className="newsletter">
            {/* <div className="newsletter-left">
                <img src={subscribe1} alt="" />
            </div> */}
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your Email Id" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter;

