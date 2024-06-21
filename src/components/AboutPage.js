import React from 'react';
import '../styles/AboutPage.css'
import '../styles/App.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content-wrapper">
        <h1>Welcome!</h1>
        <p>We hope you can join us for this walking event! It's one of a kind and hopefully more people will join in the future!</p>
        <br></br>
        <h2>Frequently Asked Questions</h2>
        <div className="faq">

          <h4>What is the Penrith to Pyrmont Walk?</h4>
          <p>This marathon walk is a personal project of Manoj Kumar, who has spent considerable time in both Penrith and Pyrmont.
            He used to walk often between Pyrmont & Chatswood, Pyrmont & Summer Hill, and wondered if a walk between Penrith & Pyrmont would be an exciting one!
            The concept was born in the head sometime in early 2024, and the planning commenced in June 2024. 
            More about Manoj later in this page!
          </p>

          <h4>What is the distance of the walk?</h4>
          <p>The walk spans 65 kilometers from Penrith to Pyrmont.</p>

          <h4>How long does it take to complete the walk?</h4>
          <p>The entire walk takes approximately 15 hours, depending on individual's pace.</p>

          <h4>What is the plan to complete the walk?</h4>
          <p>The original idea was to complete the walk in a day but then after considerable thought, it was decided to split it over 2 days. 
            So, the first part of the walk will be on Saturday when we cover Penrith to Parramatta. This will take approximately 8 hours to walk.
            Then, we meet up next day at Parramatta, when we continue the walk from Parramatta to Pyrmont, which will take approximately 5 hours to walk.
            We will need to slot in time for breaks, lunch and photos too! It is a long day for sure!
            </p>

          <h4>Who can participate?</h4>
          <p>The walk is suitable for individuals over the age of 18 who are medically fit.</p>

          {/* Add more FAQs as needed */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;


