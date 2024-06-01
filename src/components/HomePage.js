import React from 'react';

function HomePage() {
  return (
    <div className="centered-container">
      <section className="section1">
        <h1>Penrith to Pyrmont Walk</h1>
        <h2>15 hrs! 65 km!</h2>
        <p>Date: 25th June 2024</p>
        <p>Start Time: 5:00 AM</p>
        <p>Finish Time: 8:00 PM</p>
      </section>
      <section className="section2">
        <p>Come and enjoy a wonderful day walk from Penrith to Pyrmont. This walk will take you through some of the most beautiful landscapes in the region.</p>
        <img src="/route-map.jpg" alt="Route Map" />
        <p>Start Location: Penrith</p>
        <p>End Location: Pyrmont</p>
      </section>
      <section className="section3">
        <a href="/contact">Sign up for the walk</a>
      </section>
    </div>
  );
}

export default HomePage;

