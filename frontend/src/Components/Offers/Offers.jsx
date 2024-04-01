import React from 'react'
import '../Offers/Offers.css'
import offers1 from "../Assets/offers1.png";

const Offers = () => {
    return (
        <div className="offers ov-h">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>Only On Best Seller Productsa</p>
                <button >Check Now</button>
            </div>
            <div className="offers-right">
                <img src={offers1} alt="" />
            </div>
        </div>
    )
}

export default Offers;