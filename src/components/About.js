import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a simple server-side rendered React application with SCSS support.</p>
      <p>The styling is powered by Sass, making it easy to create maintainable stylesheets.</p>
      <Link to="/" className="button">Go to Home</Link>
    </div>
  );
};

export default About;
