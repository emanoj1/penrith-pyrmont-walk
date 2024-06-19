import React from 'react';

const AboutPage = () => {
  return (
    <div className="centered-container">
      <h2>About Penrith to Pyrmont Walk</h2>
      <p>This walk is organized by a group of walking enthusiasts who love exploring new trails and meeting new people. 
        We believe in the health benefits of walking and the joy of nature.</p>

      <h3>Frequently Asked Questions</h3>
      <Accordion
        question="What is the distance of the walk?"
        answer="The walk spans 65 kilometers from Penrith to Pyrmont."
      />
      <Accordion
        question="How long does it take to complete the walk?"
        answer="Approximately 15 hours, depending on individual pace but to make it easier we are splitting the walk over 2 days. On day 1, we finish at Parramatta Station, and day 2, we meet up at Parramatta Station to continue our walk to Pyrmont."
      />
      <Accordion
        question="Who can participate?"
        answer="The walk is suitable for individuals over the age of 18 who are medically fit."
      />
      {/* Add more Accordion components for additional FAQs */}

      {/* Additional content for About page */}
    </div>
  );
};

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-btn" onClick={toggleAccordion}>
        {question}
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      {isOpen && <p className="accordion-content">{answer}</p>}
    </div>
  );
};

export default AboutPage;


