import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ZoomSlider.scss';

// ============ ICONS ============
const ZoomIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="11" y1="8" x2="11" y2="14"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ZoomSlider = ({ 
  slides = [
    {
      id: 1,
      smallImage: "https://tympanus.net/Blueprints/ZoomSlider/images/iphone.png",
      previewImage: "https://tympanus.net/Blueprints/ZoomSlider/images/iphone-content-preview.png",
      title: "iPhone 6",
      titlePrefix: "The Classy",
      contentImage: "https://tympanus.net/Blueprints/ZoomSlider/images/iphone-content.png",
      contentId: "content-1",
      contentTitle: "The iPhone 6",
      contentSubtitle: "Incredible performance for powerful apps",
      contentText: "Built on 64-bit desktop-class architecture, the new A8 chip delivers more power, even while driving a larger display. The M8 motion coprocessor efficiently gathers data from advanced sensors and a new barometer. And with increased battery life, iPhone 6 lets you do more, for longer than ever.",
      contentLink: "https://www.apple.com/iphone-6/technology/",
      contentLinkText: "new ways to connect",
      zoomAreaSize: 2
    },
    {
      id: 2,
      smallImage: "https://tympanus.net/Blueprints/ZoomSlider/images/ipad.png",
      previewImage: "https://tympanus.net/Blueprints/ZoomSlider/images/ipad-content-preview.png",
      title: "iPad Mini",
      titlePrefix: "The Fantastic",
      contentImage: "https://tympanus.net/Blueprints/ZoomSlider/images/ipad-content.jpg",
      contentId: "content-2",
      contentTitle: "The iPad Mini",
      contentSubtitle: "Desktop-class architecture without a desktop",
      contentText: "Don't let its size fool you. iPad mini 3 is powered by an A7 chip with 64-bit desktop-class architecture. A7 delivers amazing processing power without sacriﬁcing battery life. So you get incredible performance in a device you can take with you wherever you go.",
      contentLink: "https://www.apple.com/ipad-mini-3/performance/",
      contentLinkText: "Performance",
      zoomAreaSize: 4
    },
    {
      id: 3,
      smallImage: "https://tympanus.net/Blueprints/ZoomSlider/images/macbook.png",
      previewImage: "https://tympanus.net/Blueprints/ZoomSlider/images/macbook-content-preview.jpg",
      title: "MacBook",
      titlePrefix: "The Amazing",
      contentImage: "https://tympanus.net/Blueprints/ZoomSlider/images/macbook-content.jpg",
      contentId: "content-3",
      contentTitle: "The MacBook",
      contentSubtitle: "It's the future of the notebook",
      contentText: "With the new MacBook, we set out to do the impossible: engineer a full-size experience into the lightest and most compact Mac notebook ever. That meant reimagining every element to make it not only lighter and thinner but also better. The result is more than just a new notebook. It's the future of the notebook.",
      contentLink: "https://www.apple.com/macbook/design/",
      contentLinkText: "the design",
      zoomAreaSize: 3
    },
    {
      id: 4,
      smallImage: "https://tympanus.net/Blueprints/ZoomSlider/images/imac.png",
      previewImage: "https://tympanus.net/Blueprints/ZoomSlider/images/imac-content-preview.jpg",
      title: "iMac",
      titlePrefix: "The Glorious",
      contentImage: "https://tympanus.net/Blueprints/ZoomSlider/images/imac-content.jpg",
      contentId: "content-4",
      contentTitle: "The iMac",
      contentSubtitle: "Engineered to the very last detail",
      contentText: "Every new Mac comes with Photos, iMovie, GarageBand, Pages, Numbers, and Keynote. So you can be creative with your photos, videos, music, documents, spreadsheets, and presentations right from the start. You also get great apps for email, surfing the web, sending texts, and making FaceTime calls — there's even an app for finding new apps.",
      contentLink: "https://www.apple.com/imac/built-in-apps/",
      contentLinkText: "the iMac's features",
      zoomAreaSize: 5
    },
    {
      id: 5,
      smallImage: "https://tympanus.net/Blueprints/ZoomSlider/images/apple-watch.png",
      previewImage: "https://tympanus.net/Blueprints/ZoomSlider/images/apple-watch-content-preview.png",
      title: "Apple Watch",
      titlePrefix: "The Fabulous",
      contentImage: "https://tympanus.net/Blueprints/ZoomSlider/images/apple-watch-content.png",
      contentId: "content-5",
      contentTitle: "The Apple Watch",
      contentSubtitle: "Entirely new ways to stay in touch",
      contentText: "Apple Watch makes all the ways you're used to communicating more convenient. And because it sits right on your wrist, it can add a physical dimension to alerts and notifications. For example, you'll feel a gentle tap with each incoming message. Apple Watch also lets you connect with your favorite people in fun, spontaneous ways — like sending a tap, a sketch, or even your heartbeat.",
      contentLink: "https://www.apple.com/watch/new-ways-to-connect/",
      contentLinkText: "new ways to connect",
      zoomAreaSize: 1,
      rounded: true
    }
  ]
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRefs = useRef([]);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle body scroll lock when content is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
  }, [isOpen]);

  const navigate = (direction) => {
    if (isOpen || isAnimating) return;

    setIsAnimating(true);
    
    const nextSlideIndex = direction === "right" 
      ? (currentSlide < slides.length - 1 ? currentSlide + 1 : 0)
      : (currentSlide > 0 ? currentSlide - 1 : slides.length - 1);
    
    // Get current slide elements for animation
    const currentSlideEl = slideRefs.current[currentSlide];
    const currentMoverEl = currentSlideEl?.querySelector('.slide__mover');
    const currentTitleEl = currentSlideEl?.querySelector('.slide__title');
    
    // Prepare next slide elements
    const nextSlideEl = slideRefs.current[nextSlideIndex];
    const nextMoverEl = nextSlideEl?.querySelector('.slide__mover');
    const nextTitleEl = nextSlideEl?.querySelector('.slide__title');
    
    // Set initial position for next slide elements
    if (nextMoverEl && nextTitleEl) {
      if (direction === "right") {
        nextMoverEl.style.transform = 'translateX(10%) rotate(5deg)';
        nextMoverEl.style.opacity = '0';
        nextTitleEl.style.transform = 'translateX(250px)';
        nextTitleEl.style.opacity = '0';
      } else {
        nextMoverEl.style.transform = 'translateX(-10%) rotate(-5deg)';
        nextMoverEl.style.opacity = '0';
        nextTitleEl.style.transform = 'translateX(-250px)';
        nextTitleEl.style.opacity = '0';
      }
      
      // Force reflow to ensure initial state is applied before transitioning
      nextMoverEl.offsetHeight;
      nextTitleEl.offsetHeight;
    }
    
    // Animate current slide out
    if (currentMoverEl && currentTitleEl) {
      if (direction === "right") {
        currentMoverEl.style.transform = 'translateX(-10%) rotate(-5deg)';
        currentMoverEl.style.opacity = '0';
        currentTitleEl.style.transform = 'translateX(-250px)';
        currentTitleEl.style.opacity = '0';
      } else {
        currentMoverEl.style.transform = 'translateX(10%) rotate(5deg)';
        currentMoverEl.style.opacity = '0';
        currentTitleEl.style.transform = 'translateX(250px)';
        currentTitleEl.style.opacity = '0';
      }
    }
    
    // Update slide index to show next slide
    setTimeout(() => {
      setCurrentSlide(nextSlideIndex);
      
      // Animate next slide in after small delay
      setTimeout(() => {
        if (nextMoverEl && nextTitleEl) {
          nextMoverEl.style.transition = 'transform 0.6s cubic-bezier(0.2,1,0.3,1), opacity 0.6s cubic-bezier(0.2,1,0.3,1)';
          nextTitleEl.style.transition = 'transform 0.6s cubic-bezier(0.2,1,0.3,1), opacity 0.6s cubic-bezier(0.2,1,0.3,1)';
          
          nextMoverEl.style.transform = 'translateX(0) rotate(0)';
          nextMoverEl.style.opacity = '1';
          nextTitleEl.style.transform = 'translateX(0)';
          nextTitleEl.style.opacity = '1';
          
          // Reset animation state after slide transition is complete
          setTimeout(() => {
            setIsAnimating(false);
          }, 600);
        } else {
          setIsAnimating(false);
        }
      }, 50);
    }, 300);
  };

  const handleZoom = () => {
    if (isOpen || isAnimating) return;
    
    setIsAnimating(true); // Set animating state to prevent additional clicks
    
    const zoomerElement = slideRefs.current[currentSlide]?.querySelector('.zoomer');
    const zoomerAreaElement = slideRefs.current[currentSlide]?.querySelector('.zoomer__area');
    const previewImg = slideRefs.current[currentSlide]?.querySelector('.preview img');
    const zoomerImg = slideRefs.current[currentSlide]?.querySelector('.zoomer__image');
    
    if (!zoomerElement || !zoomerAreaElement) return;
    
    // Calculate zoom values exactly like the original demo
    const zoomerAreaSize = {
      width: zoomerAreaElement.offsetWidth,
      height: zoomerAreaElement.offsetHeight
    };
    
    const zoomerOffset = zoomerAreaElement.getBoundingClientRect();
    
    // Calculate scale value using the same logic as the original demo
    // This ensures the zoomed area covers the screen properly
    const scaleVal = zoomerAreaSize.width / zoomerAreaSize.height < windowSize.width / windowSize.height 
      ? windowSize.width / zoomerAreaSize.width 
      : windowSize.height / zoomerAreaSize.height;
    
    // Add active class to trigger CSS animations
    zoomerElement.classList.add('zoomer--active');
    
    // Gradually fade out the zoomer image
    if (zoomerImg) {
      zoomerImg.style.opacity = '0';
    }
    
    // Apply transform with calculated values using Number() to ensure precision
    // This exactly matches the transform calculation in the original demo
    const translateX = Number(windowSize.width / 2 - (zoomerOffset.left + zoomerAreaSize.width / 2));
    const translateY = Number(windowSize.height / 2 - (zoomerOffset.top + zoomerAreaSize.height / 2));
    
    // Apply precise transform to zoom element
    zoomerElement.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale3d(${scaleVal}, ${scaleVal}, 1)`;
    
    // Force reflow to ensure the transform is applied immediately
    zoomerElement.offsetHeight;
    
    // After initial animation completes
    setTimeout(() => {
      // Apply notrans class to prevent animation during content open
      zoomerElement.classList.add('zoomer--notrans');
      
      // Move the preview image
      if (previewImg) {
        previewImg.style.transform = 'translateX(100%)';
      }
      
      // Open content
      setIsOpen(true);
      setIsAnimating(false);
    }, 500);
  };

  const closeContent = () => {
    setIsAnimating(true);
    setIsOpen(false);
    
    // After content closes, reset zoom transform
    setTimeout(() => {
      const zoomerElement = slideRefs.current[currentSlide]?.querySelector('.zoomer');
      const previewImg = slideRefs.current[currentSlide]?.querySelector('.preview img');
      const zoomerImg = slideRefs.current[currentSlide]?.querySelector('.zoomer__image');
      
      if (zoomerElement) {
        // Remove notrans class to allow for animation when closing
        zoomerElement.classList.remove('zoomer--notrans');
        
        // Reset transform to original position with animation
        zoomerElement.style.transform = 'translate3d(0px, 0px, 0) scale3d(1, 1, 1)';
        
        // Reset preview image position if it exists
        if (previewImg) {
          previewImg.style.transform = '';
        }
        
        // Show the zoomer image again
        if (zoomerImg) {
          zoomerImg.style.opacity = '1';
        }
        
        // After animation completes
        setTimeout(() => {
          zoomerElement.classList.remove('zoomer--active');
          setIsAnimating(false);
        }, 500);
      } else {
        setIsAnimating(false);
      }
    }, 300);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen || isAnimating) return;

      if (e.key === "ArrowRight") {
        navigate("right");
      } else if (e.key === "ArrowLeft") {
        navigate("left");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isAnimating]);

  // Animation variants for image and content
  const imageVariants = {
    hidden: { x: "-120%" },
    visible: {
      x: "-10px",
      transition: {
        duration: 1,
        ease: [0.2, 1, 0.3, 1], // cubic-bezier(0.2,1,0.3,1)
      },
    },
    exit: {
      x: "-120%", // Exiting to the left (same as hidden state) to match original demo
      transition: {
        duration: 0.4,
        ease: [0.7, 1, 0.8, 1], // cubic-bezier(0.7,1,0.8,1)
      },
    },
  };

  const contentVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.7,
        ease: [0.2, 1, 0.3, 1], // cubic-bezier(0.2,1,0.3,1)
      },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.7, 1, 0.8, 1], // cubic-bezier(0.7,1,0.8,1)
      },
    },
  };

  return (
    <>
      <section className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'slide--current' : ''}`}
            ref={(el) => (slideRefs.current[index] = el)}
            data-content={slide.contentId}
            style={{
              opacity: index === currentSlide ? 1 : 0,
              visibility: index === currentSlide ? "visible" : "hidden",
            }}
          >
            <motion.div className="slide__mover">
              <div
                className={`zoomer flex-center ${isOpen && index === currentSlide ? 'zoomer--active' : ''} ${isOpen && index === currentSlide ? 'zoomer--notrans' : ''}`}
              >
                <img
                  className="zoomer__image"
                  src={slide.smallImage}
                  alt={slide.title}
                />
                <div className={`preview ${slide.rounded ? 'rounded' : ''}`}>
                  <img
                    src={slide.previewImage}
                    alt={`${slide.title} preview`}
                  />
                  <div className={`zoomer__area zoomer__area--size-${slide.zoomAreaSize}`}></div>
                </div>
              </div>
            </motion.div>
            <motion.h2
              className="slide__title"
              initial={{ opacity: 0, x: index === 0 ? -250 : 250 }}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                x: index === currentSlide ? 0 : index < currentSlide ? -250 : 250,
              }}
              transition={{
                duration: 0.65,
                ease: [0.2, 1, 0.3, 1], // cubic-bezier(0.2,1,0.3,1)
              }}
            >
              <span>{slide.titlePrefix}</span> {slide.title}
            </motion.h2>
          </div>
        ))}

        <nav className="slider__nav">
          <button
            className="button button--nav-prev"
            onClick={() => navigate("left")}
            disabled={isOpen || isAnimating}
          >
            <i className="icon icon--arrow-left">
              <ArrowLeftIcon />
            </i>
            <span className="text-hidden">Previous product</span>
          </button>
          <button
            className="button button--zoom"
            onClick={handleZoom}
            disabled={isOpen || isAnimating}
          >
            <i className="icon icon--zoom">
              <ZoomIcon />
            </i>
            <span className="text-hidden">View details</span>
          </button>
          <button
            className="button button--nav-next"
            onClick={() => navigate("right")}
            disabled={isOpen || isAnimating}
          >
            <i className="icon icon--arrow-right">
              <ArrowRightIcon />
            </i>
            <span className="text-hidden">Next product</span>
          </button>
        </nav>
      </section>

      <AnimatePresence>
        {isOpen && (
          <section
            className={`content ${isOpen ? 'content--open' : ''}`}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                id={slide.contentId}
                className={`content__item ${index === currentSlide ? 'content__item--current' : ''} ${index === currentSlide ? 'content__item--reset' : ''}`}
              >
                <motion.img
                  className="content__item-img rounded-right"
                  src={slide.contentImage}
                  alt={`${slide.title} Content`}
                  variants={imageVariants}
                  initial="hidden"
                  animate={index === currentSlide ? "visible" : "hidden"}
                  exit="exit"
                />

                <motion.div
                  className="content__item-inner"
                  variants={contentVariants}
                  initial="hidden"
                  animate={index === currentSlide ? "visible" : "hidden"}
                  exit="exit"
                >
                  <h2>{slide.contentTitle}</h2>
                  <h3>{slide.contentSubtitle}</h3>
                  <p>{slide.contentText}</p>
                  <p>
                    <a 
                      href={slide.contentLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zoom-link hover:text-white transition-colors"
                    >
                      Learn more about {slide.contentLinkText} &rarr;
                    </a>
                  </p>
                </motion.div>
              </div>
            ))}
            <button className="button button--close" onClick={closeContent}>
              <i className="icon icon--circle-cross">
                <CloseIcon />
              </i>
              <span className="text-hidden">Close content</span>
            </button>
          </section>
        )}
      </AnimatePresence>
    </>
  );
};

export default ZoomSlider;
