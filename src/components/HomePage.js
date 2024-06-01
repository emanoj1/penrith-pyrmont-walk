import React from 'react';

function HomePage() {
  return (
    <div className="centered-container">
      <section className="section1">
        <h1>15 hrs! 65 km!</h1>
        <h2>Saturday, 31 August 2024</h2>
        <br></br>
        <p>Year 1 - Launch walk!</p>
        <br></br>
        <p>Start Time: 5:00 AM</p>
        <p>Finish Time: 8:00 PM</p>
      </section>
      <section className="section2">
        <div className="content-wrapper">
          <p>Embark on an invigorating journey of health and wellness with the Penrith to Pyrmont walk, 
            a scenic adventure spanning 65 kilometers and taking approximately 15 hours to complete. Designed for the health-conscious and enthusiasts of outdoor exploration, 
            this exhilarating trek traverses major suburbs, picturesque parks, and iconic landmarks. Whether you're seeking to maintain peak fitness or simply revel in the 
            joy of walking, this trail promises an unforgettable experience. Lace up your shoes, breathe in the fresh air, and discover the transformative power of nature as 
            you embark on this remarkable journey from Penrith to Pyrmont.
          </p>
        </div>
        <img src="/penrith-pyrmont-walk-route-map.png" alt="Route Map" />
        <p>The planned route map for the Penrith to Pyrmont Walk</p>
        <br></br>
        <p>
          <span className="start-point">START: Penrith Station </span>
          <span className="finish-point">FINISH: Pyrmont Bridge </span>
        </p>
      </section>
      <section className="section3">
        <a href="/contact">Sign up for the walk</a>
      </section>
    </div>
  );
}

export default HomePage;

