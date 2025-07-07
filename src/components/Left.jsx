import React from 'react';
import './Left.css';

const Left = () => {
  return (
    <div
      className="left-panel"
      style={{ backgroundImage: "url('/images/jj.jpg')" }}
    >
      <div className="left-content">
        <div className="logo">CAMPUS <span className="core">CORE</span></div>

        <h2 className="welcome-title">Welcome to Your Academic Journey</h2>

        <p className="description">
          Manage your courses, track your schedule, and stay organized
          throughout your academic term with our comprehensive
          management platform.
        </p>

        <div className="features">
          <div className="feature">
            <img src="/images/learning.png" alt="Course" />
            <div>Course<br />Management</div>
          </div>
          <div className="feature">
            <img src="/images/schedule-button.png" alt="Schedule" />
            <div>Schedule<br />Tracking</div>
          </div>
          <div className="feature">
            <img src="/images/progress.png" alt="Progress" />
            <div>Progress<br />Analytics</div>
          </div>
        </div>

        <div className="testimonial">
          <p>
            As a professor, I appreciate how simple it is to communicate schedule
            changes to my students. The platform is intuitive and saves me hours
            each week.
          </p>
          <span>Dr. Michael T., Engineering Faculty</span>
        </div>
      </div>
    </div>
  );
};

export default Left;
