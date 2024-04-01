import React from 'react';
import "./CSS/Offices.css"

const Offices = () => {
    return(
        <div class="container">
    <div class="office-info">
        <div class="office-details">
            <h2>Office Name</h2>
            <p><span>Location:</span> RKU, Rajkot, India</p>
            <p><span>Phone:</span> +91 98765 43210</p>
            <p><span>Email:</span> ttsupport@tt.com</p>
        </div>
        
        <div class="online-contact">
            <h2>Online Contact Information</h2>
            <div class="contact-label">
                <div class="label">Website:</div>
                <div class="value"><a href="https://www.timetrove.com">www.timetrove.com</a></div>
            </div>
            <div class="contact-label">
                <div class="label">Contact Form:</div>
                <div class="value"><a href="https://www.timetrove.com/contact">www.timetrove.com/contact</a></div>
            </div>
        </div>
    </div>
        <div class="map">
        <iframe src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118175.81073297966!2d70.83794006912014!3d22.240303200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b4a660019ee9%3A0x3d6254f36ed0e794!2sRK%20University%20Main%20Campus!5e0!3m2!1sen!2sin!4v1711948160000!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" title='iframe' referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>    
</div>
    )
}

export default Offices