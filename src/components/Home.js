import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Home.module.scss';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our server-side rendered React application!</p>
      
      <div className={styles.homeFeatures}>
        <div className={styles.feature}>
          <h3>Server Side Rendering</h3>
          <p>Initial page load is rendered on the server for improved SEO and performance.</p>
        </div>
        
        <div className={styles.feature}>
          <h3>React Router</h3>
          <p>Client-side navigation with React Router for a smooth user experience.</p>
        </div>
        
        <div className={styles.feature}>
          <h3>SCSS Support</h3>
          <p>Style your components with Sass for more maintainable CSS.</p>
        </div>
        
        <div className={styles.feature}>
          <h3>CSS Modules</h3>
          <p>Scoped CSS with modules to avoid style conflicts between components.</p>
        </div>
      </div>
      
      <Link to="/about" className="button">Go to About</Link>
    </div>
  );
};

export default Home;
