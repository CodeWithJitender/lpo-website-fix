import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom hook for client-side only code
function useClientSideOnly(callback, deps = []) {
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  useEffect(() => {
    if (!hasMounted) return;
    return callback();
  }, [hasMounted, ...deps]);
}

const TextHighlightEffect = ({ text }) => {
  const contentRef = useRef(null);
  const highlightedRef = useRef(null);
  
  useClientSideOnly(() => {
    let cleanup = () => {};
    
    const setupEffect = async () => {
      try {        
        const SplittingModule = await import('splitting');
        const Splitting = SplittingModule.default;
        
        if (!highlightedRef.current) return;
        
        // Set up Splitting
        highlightedRef.current.dataset.splitting = '';
        Splitting();
        
        const highlightedElement = highlightedRef.current;
        const highlightedChars = highlightedElement.querySelectorAll('.char');
        const highlightedWords = highlightedElement.querySelectorAll('.word');
        
        // Initial setup
        gsap.set(highlightedElement, { perspective: 500 });
        gsap.set(highlightedWords, { transformStyle: 'preserve-3d' });
        
        // Define animations
        const animateChars = () => {
          gsap.timeline({
            defaults: {
              duration: 0.8,
              ease: 'power2'
            }
          }).fromTo(
            highlightedChars, 
            {
              opacity: 0,
              z: 300,
              rotationX: -45
            },
            {
              stagger: 0.04,
              opacity: 1,
              z: 0,
              rotationX: 0
            }
          );
        };
        
        const resetChars = () => {
          gsap.killTweensOf(highlightedChars);
          gsap.set(highlightedChars, {
            opacity: 1,
            z: 0,
            rotationX: 0
          });
        };
        
        // Create scroll trigger
        const trigger = ScrollTrigger.create({
          trigger: highlightedElement,
          start: 'top bottom',
          onEnter: animateChars,
          onEnterBack: animateChars,
          onLeave: resetChars,
          onLeaveBack: resetChars
        });
        
        cleanup = () => {
          trigger.kill();
          gsap.killTweensOf(highlightedChars);
        };
      } catch (error) {
        console.error('Error setting up animation:', error);
      }
    };
    
    setupEffect();
    
    return cleanup;
  }, []);

  return (
		<span ref={contentRef}>
			<mark className="hx hx-1" ref={highlightedRef}>{text}</mark>
		</span>
  );
};

export default TextHighlightEffect;
