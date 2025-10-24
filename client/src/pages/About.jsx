import React from 'react';

export default function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="about-title">About My Fitness Tracker</h1>
      <div className="about-content">
        <p>
          Hey there! I'm excited to tell you about this fitness tracker app I created. It's a simple but powerful tool to help you keep track of your workouts and see your progress over time.
        </p>
        <p>
          I built this app because I wanted an easy way to log my exercises and see how many calories I'm burning. Here's what you can do with it:
        </p>
        <ul className="about-list">
          <li>Log in securely to your own personal account</li>
          <li>Add your workouts quickly using a simple format</li>
          <li>See how many calories you've burned each day</li>
          <li>Check out cool charts that show your progress</li>
          <li>Look back at your past workouts anytime</li>
        </ul>
        <p>
          I used some neat tech stuff to make this app work smoothly. It's got a secure login system, and it stores all your workout data safely. The app can even figure out how many calories you've burned based on your exercises!
        </p>
        <p>
          I hope you find this app helpful in your fitness journey. Stay active and keep tracking those workouts!
        </p>
      </div>
    </div>
  )
}