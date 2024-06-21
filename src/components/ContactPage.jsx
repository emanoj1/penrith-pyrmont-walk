import React from 'react';
import '../styles/ContactPage.css'

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-image">
        <img src="/penrith-pyrmont-walk-couple-walk-logo.png" alt="Couple walking drawing" className="image" />
      </div>
      <div className="page">
        <h1>Contact </h1>
        <h4>Should you wish to write to us, please send an email to:</h4>
        <br></br>
        <p>
          hello@penrithpyrmontwalk.com.au 
        </p>
        <p>
        Thanks in advance and I look forward to walking with you!
        </p>

      </div>
    </div>
  );
};


export default Contact;