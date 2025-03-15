import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a simple server-side rendered React application.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default About;
