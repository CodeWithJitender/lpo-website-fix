import React from 'react';
import { Link } from 'react-router-dom';

import ZoomSlider from '../components/Home/ZoomSlider';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is a simple server-side rendered React application with SCSS support.</p>
      <p>The styling is powered by Sass, making it easy to create maintainable stylesheets.</p>
      <Link to="/">Go to Home</Link>
			<ZoomSlider />
    </div>
  );
};

export default About;
