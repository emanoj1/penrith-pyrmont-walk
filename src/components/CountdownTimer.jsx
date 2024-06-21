// A countdown timer until the event stats
// Courtesy: https://www.npmjs.com/package/react-countdown

import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = ({ targetDate }) => {
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>Hooray! The event has started!</span>;
    } else {
      // Render the countdown
      return (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>
            {days}d {hours}h {minutes}m {seconds}s
          </div>
          <div style={{ fontSize: '24px' }}>
            until the event starts!
          </div>
        </div>
      );
    }
  };

  return (
    <Countdown
      date={targetDate}
      renderer={renderer}
    />
  );
};

export default CountdownTimer;
