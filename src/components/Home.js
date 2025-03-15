import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our server-side rendered React application!</p>
      <Link to="/about">Go to About</Link>
    </div>
  );
};

export default Home;
