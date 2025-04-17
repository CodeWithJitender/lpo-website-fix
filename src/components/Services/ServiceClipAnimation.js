import React, { useEffect, useRef, useState } from 'react';

import * as styles from "./ServiceClipAnimation.module.scss";

export default function ServiceClipAnimation() {
  const contentRef = useRef(null);
  const clipPathRefs = useRef([]);
  const posterRefs = useRef([]);
  const posterInnerRefs = useRef([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true when component mounts in browser
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Dynamic import of GSAP to handle SSR case
    const setupGSAP = async () => {
      try {
        // Dynamic imports for GSAP to handle SSR
        const gsapModule = await import('gsap');
        const gsap = gsapModule.default || gsapModule;
        
        const scrollTriggerModule = await import('gsap/ScrollTrigger');
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        
        // Register the ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Animation setup
        const clipPath = clipPathRefs.current;
        const poster = posterRefs.current;
        const posterInner = posterInnerRefs.current;

        // Create animations for each clipPath element
        clipPath.forEach((clipPathEl, pos) => {
          gsap.timeline({
            scrollTrigger: {
              trigger: poster[pos],
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              id: `st-${pos}`
            }
          })
          .fromTo(clipPathEl, {
            xPercent: pos === 0 ? 40 : -80
          }, {
            ease: 'none',
            xPercent: pos === 0 ? -40 : 20
          }, 0)
          .fromTo(posterInner[pos], {
            xPercent: pos === 0 ? -5 : 5,
            yPercent: pos === 0 ? -5 : 5
          }, {
            xPercent: pos === 0 ? 5 : -5,
            yPercent: pos === 0 ? 5 : -5
          }, 0);
        });
      } catch (error) {
        console.error("Failed to load GSAP:", error);
      }
    };

    setupGSAP();

    // Cleanup function
    return () => {
      // Clean up ScrollTrigger instances
      import('gsap/ScrollTrigger')
        .then(({ ScrollTrigger }) => {
          clipPathRefs.current.forEach((_, pos) => {
            if (ScrollTrigger.getById(`st-${pos}`)) {
              ScrollTrigger.getById(`st-${pos}`).kill();
            }
          });
        })
        .catch(err => console.error("Error cleaning up ScrollTrigger:", err));
    };
  }, [isClient]); // Only run when isClient changes to true

  // Add refs to arrays for later use
  const addToClipPathRefs = (el) => {
    if (el && !clipPathRefs.current.includes(el)) {
      clipPathRefs.current.push(el);
    }
  };

  const addToPosterRefs = (el) => {
    if (el && !posterRefs.current.includes(el)) {
      posterRefs.current.push(el);
    }
  };

  const addToPosterInnerRefs = (el) => {
    if (el && !posterInnerRefs.current.includes(el)) {
      posterInnerRefs.current.push(el);
    }
  };

  return (
    <div className={styles.content} ref={contentRef}>
      <svg className={styles.clipElement}>
        <clipPath id="clip" ref={addToClipPathRefs}>
          <text x="0ch" y="0.80em" className={styles.textPath}>X</text>
          <text x="1ch" y="0.80em" className={styles.textPath}>o</text>
          <text x="2ch" y="0.80em" className={styles.textPath}>X</text>
          <text x="3ch" y="0.80em" className={styles.textPath}>o</text>
          <text x="4ch" y="0.80em" className={styles.textPath}>X</text>
          <text x="5ch" y="0.80em" className={styles.textPath}>o</text>
					<text x="0ch" y="1.65em" className={styles.textPath}>o</text>
          <text x="1ch" y="1.65em" className={styles.textPath}>X</text>
          <text x="2ch" y="1.65em" className={styles.textPath}>o</text>
          <text x="3ch" y="1.65em" className={styles.textPath}>X</text>
          <text x="4ch" y="1.65em" className={styles.textPath}>o</text>
          <text x="5ch" y="1.65em" className={styles.textPath}>X</text>
					<text x="0ch" y="2.50em" className={styles.textPath}>X</text>
          <text x="1ch" y="2.50em" className={styles.textPath}>o</text>
          <text x="2ch" y="2.50em" className={styles.textPath}>X</text>
          <text x="3ch" y="2.50em" className={styles.textPath}>o</text>
          <text x="4ch" y="2.50em" className={styles.textPath}>X</text>
          <text x="5ch" y="2.50em" className={styles.textPath}>o</text>
					<text x="0ch" y="3.35em" className={styles.textPath}>X</text>
          <text x="1ch" y="3.35em" className={styles.textPath}>o</text>
          <text x="2ch" y="3.35em" className={styles.textPath}>X</text>
          <text x="3ch" y="3.35em" className={styles.textPath}>o</text>
          <text x="4ch" y="3.35em" className={styles.textPath}>X</text>
          <text x="5ch" y="3.35em" className={styles.textPath}>o</text>
					<text x="0ch" y="4.20em" className={styles.textPath}>X</text>
          <text x="1ch" y="4.20em" className={styles.textPath}>o</text>
          <text x="2ch" y="4.20em" className={styles.textPath}>X</text>
          <text x="3ch" y="4.20em" className={styles.textPath}>o</text>
          <text x="4ch" y="4.20em" className={styles.textPath}>X</text>
          <text x="5ch" y="4.20em" className={styles.textPath}>o</text>
					<text x="0ch" y="5.05em" className={styles.textPath}>X</text>
          <text x="1ch" y="5.05em" className={styles.textPath}>o</text>
          <text x="2ch" y="5.05em" className={styles.textPath}>X</text>
          <text x="3ch" y="5.05em" className={styles.textPath}>o</text>
          <text x="4ch" y="5.05em" className={styles.textPath}>X</text>
          <text x="5ch" y="5.05em" className={styles.textPath}>o</text>
					<text x="0ch" y="5.90em" className={styles.textPath}>X</text>
          <text x="1ch" y="5.90em" className={styles.textPath}>o</text>
          <text x="2ch" y="5.90em" className={styles.textPath}>X</text>
          <text x="3ch" y="5.90em" className={styles.textPath}>o</text>
          <text x="4ch" y="5.90em" className={styles.textPath}>X</text>
          <text x="5ch" y="5.90em" className={styles.textPath}>o</text>
        </clipPath>
      </svg>
      <div 
        className={styles.poster}
        ref={addToPosterRefs}
        style={{
          clipPath: 'url(#clip)',
        }}>
        <div 
          className={styles.posterInner} 
          ref={addToPosterInnerRefs}
        >
        </div>
      </div>
    </div>
  );
}
