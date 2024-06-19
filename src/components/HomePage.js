import React from 'react';

function HomePage() {
  return (
    <div className="centered-container">
      <section className="section1">
        <h1>Penrith - Pyrmont Walk</h1>
        <h2>15 hrs, 65 km, 2 days</h2>
        <h2>Penrith - Parramatta (day 1) + Parramatta - Pyrmont (day 2)</h2>
        
        <br></br>
        <p>
        <span className="start-point">Saturday, 07 September</span>
        <span className="finish-point">Sunday, 08 September 2024</span>
        </p>
      </section>
      <section className="section2">
        <div className="content-wrapper">
          <p>Embark on an invigorating journey of health and wellness with the Penrith to Pyrmont walk (Sydney,Australia), 
            a scenic adventure spanning 65 kilometers and taking approximately 15 hours to complete. Designed for the health-conscious and enthusiasts of outdoor exploration, 
            this exhilarating trek traverses major suburbs, picturesque parks, and iconic landmarks. Whether you're seeking to maintain peak fitness or simply revel in the 
            joy of walking, this trail promises an unforgettable experience. Also, this is <span class="highlight-text">YEAR 1 of the walk!!</span> So, lace up your shoes, breathe in the fresh air, 
            and <span class="highlight-text">be a part of history</span> as you embark on this remarkable journey from Penrith to Pyrmont.
          </p>
          
        </div>
        <p>The planned route map for the Penrith to Pyrmont Walk</p>
        <br></br>
        <p>
          <span className="start-point">START: Penrith Station </span>
          <span className="finish-point">FINISH: Pyrmont Bridge </span>
        </p>
        <img src="/penrith-pyrmont-walk-route-map.png" alt="Route Map" className="route-map"/>
      </section>
      <section className="section3">
      <div className="content-wrapper">
          <p>If you are interested to undertake this mega-walk, please submit your interest and we will contact you with confirmations and next steps.
          <span class="highlight-text"> You have to be over the age of 18 and medically fit to participate.</span>
          </p>
        </div>
        <a href="/contact">Register your interest!</a>
      </section>
    </div>
  );
}

export default HomePage;

