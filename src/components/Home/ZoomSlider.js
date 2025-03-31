import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

import "./ZoomSlider.scss";

const slides = [				
	{
		id: 1,
		smallImage: "https://tympanus.net/Blueprints/ZoomSlider/images/iphone.png",
		previewImage: "https://tympanus.net/Blueprints/ZoomSlider/images/iphone-content-preview.png",
		title: <><span>The classNamey</span> iPhone 6</>,
		contentImage: "https://tympanus.net/Blueprints/ZoomSlider/images/iphone-content.png",
		content: <>
			<h2>The iPhone 6</h2>
						<h3>Incredible performance for powerful apps</h3>
						<p>Built on 64-bit desktop-className architecture, the new A8 chip delivers more power, even while driving a larger display. The M8 motion coprocessor efficiently gathers data from advanced sensors and a new barometer. And with increased battery life, iPhone 6 lets you do more, for longer than ever.</p>
						<p><a href="https://www.apple.com/iphone-6/technology/">Learn more about this technology &xrarr;</a></p>
		</>
	},				
	{
		id: 2,
		smallImage: "https://tympanus.net/Blueprints/ZoomSlider/images/ipad.png",
		previewImage: "https://tympanus.net/Blueprints/ZoomSlider/images/ipad-content-preview.png",
		title: <><span>The Fantastic</span> iPad Mini</>,
		contentImage: "https://tympanus.net/Blueprints/ZoomSlider/images/ipad-content.jpg",
		content: <><h2>The iPad Mini</h2>
		<h3>Desktop-className architecture without a desktop</h3>
		<p>Don’t let its size fool you. iPad mini 3 is powered by an A7 chip with 64-bit desktop-className architecture. A7 delivers amazing processing power without sacriﬁcing battery life. So you get incredible performance in a device you can take with you wherever you go.</p>
		<p><a href="https://www.apple.com/ipad-mini-3/performance/">Learn more about Performance &xrarr;</a></p>
		</>
	},					
	{
		id: 3,
		smallImage: "https://tympanus.net/Blueprints/ZoomSlider/images/macbook.png",
		previewImage: "https://tympanus.net/Blueprints/ZoomSlider/images/macbook-content-preview.jpg",
		title: <><span>The Amazing</span> MacBook</>,
		contentImage: "https://tympanus.net/Blueprints/ZoomSlider/images/macbook-content.jpg",
		content: <><h2>The MacBook</h2>
		<h3>It's the future of the notebook</h3>
		<p>With the new MacBook, we set out to do the impossible: engineer a full-size experience into the lightest and most compact Mac notebook ever. That meant reimagining every element to make it not only lighter and thinner but also better. The result is more than just a new notebook. It's the future of the notebook.</p>
		<p><a href="https://www.apple.com/macbook/design/">Learn more about the design &xrarr;</a></p>
		</>
	},
	{
		id: 4,
		smallImage: "https://tympanus.net/Blueprints/ZoomSlider/images/imac.png",
		previewImage: "https://tympanus.net/Blueprints/ZoomSlider/images/imac-content-preview.jpg",
		title: <><span>The Glorious</span> iMac</>,
		contentImage: "https://tympanus.net/Blueprints/ZoomSlider/images/imac-content.jpg",
		content: <><h2>The iMac</h2>
		<h3>Engineered to the very last detail</h3>
		<p>Every new Mac comes with Photos, iMovie, GarageBand, Pages, Numbers, and Keynote. So you can be creative with your photos, videos, music, documents, spreadsheets, and presentations right from the start. You also get great apps for email, surfing the web, sending texts, and making FaceTime calls — there’s even an app for finding new apps.</p>
		<p><a href="https://www.apple.com/imac/built-in-apps/">Learn more about the iMac's features &xrarr;</a></p>
		</>
	},
	{
		id: 5,
		smallImage: "https://tympanus.net/Blueprints/ZoomSlider/images/apple-watch.png",
		previewImage: "https://tympanus.net/Blueprints/ZoomSlider/images/apple-watch-content-preview.png",
		title: <><span>The Fabulous</span> Apple Watch</>,
		contentImage: "https://tympanus.net/Blueprints/ZoomSlider/images/apple-watch-content.png",
		content: <><h2>The Apple Watch</h2>
		<h3>Entirely new ways to stay in touch</h3>
		<p>Apple Watch makes all the ways you're used to communicating more convenient. And because it sits right on your wrist, it can add a physical dimension to alerts and notifications. For example, you’ll feel a gentle tap with each incoming message. Apple Watch also lets you connect with your favorite people in fun, spontaneous ways — like sending a tap, a sketch, or even your heartbeat. </p>
		<p><a href="https://www.apple.com/watch/new-ways-to-connect/">Learn more about new ways to connect &xrarr;</a></p>
		</>
	},
];

const ZoomSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
	const slideRefs = useRef([]);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

	useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable scrolling when content is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [isOpen]);

  const navigate = (direction) => {
    if (isOpen) return;

    if (direction === "right") {
      setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    } else {
      setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
    }
  };

  const openItem = () => {
    if (isOpen) return;
    setIsOpen(true);
  };

  const closeContent = () => {
    setIsOpen(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen) return;

      if (e.key === "ArrowRight") {
        navigate("right");
      } else if (e.key === "ArrowLeft") {
        navigate("left");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

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
      x: "100%",
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

	const getAnimationValues = () => {
		const zoomerArea = slideRefs.current[currentSlide].querySelector('.zoomer__area');
		const zoomerAreaSize = {
			width: zoomerArea.offsetWidth,
			height: zoomerArea.offsetHeight
		};
		const zoomerOffset = zoomerArea.getBoundingClientRect();
		let scaleVal = zoomerAreaSize.width / zoomerAreaSize.height < windowSize.width / windowSize.height ? windowSize.width / zoomerAreaSize.width : windowSize.height / zoomerAreaSize.height;
		scaleVal /= 3;

		return {
			transform: 'translate3d(100%, 100%, 0px) scale3d(100, 100, 1)',
			transition: {
				duration: 1,
			}
		};
	};

  return (
    <>
      <section className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={classNames("slide", {
              "slide--current": currentSlide === index && !isOpen,
            })}
						ref={(el) => (slideRefs.current[index] = el)}
            data-content={slide.id}
            style={{
              opacity: currentSlide === index ? 1 : 0,
              visibility: currentSlide === index ? "visible" : "hidden",
            }}
          >
            <motion.div className="slide__mover">
              <motion.div
                className={classNames("zoomer", "flex-center", {
                  "zoomer--active": isOpen && currentSlide === index,
                  "zoomer--notrans": isOpen && currentSlide === index,
                })}
                animate={
                  isOpen && currentSlide === index
                    ? getAnimationValues()
                    : {
											transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)"
                    }
                }
                transition={{
                  duration: 0.5,
                  ease: [0.7, 0, 0.3, 1], // cubic-bezier(0.7,0,0.3,1)
                }}
              >
                <img
                  className="zoomer__image"
                  src={slide.smallImage}
                  alt={slide.title}
                />
                <div className="preview">
                  <img
                    src={slide.previewImage}
                    alt={`${slide.title} preview`}
                  />
                  <div className="zoomer__area zoomer__area--size-2"></div>
                </div>
              </motion.div>
            </motion.div>
            <motion.h2
              className="slide__title"
              initial={{ opacity: 0, x: index === 0 ? -250 : 250 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                x:
                  currentSlide === index
                    ? 0
                    : index < currentSlide
                    ? -250
                    : 250,
              }}
              transition={{
                duration: 0.65,
                ease: [0.2, 1, 0.3, 1], // cubic-bezier(0.2,1,0.3,1)
              }}
            >
              {slide.title}
            </motion.h2>
          </div>
        ))}

        <nav className="slider__nav">
          <button
            className="button button--nav-prev"
            onClick={() => navigate("left")}
          >
            &lt;
            <span className="text-hidden">Previous product</span>
          </button>
          <button className="button button--zoom" onClick={openItem}>
            Lens
            <span className="text-hidden">View details</span>
          </button>
          <button
            className="button button--nav-next"
            onClick={() => navigate("right")}
          >
            &gt;
            <span className="text-hidden">Next product</span>
          </button>
        </nav>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            className={classNames("content", { "content--open": isOpen })}
            initial={{ left: "-100%" }}
            animate={{
							left: 0,
							transition: {
								left: {
									delay: 0.2,
								}
							}
						}}
            exit={{ left: "-100%" }}
            transition={{
							duration: 0.3,
						}}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                id={slide.id}
                className={classNames("content__item", {
                  "content__item--current": currentSlide === index,
                  "content__item--reset": isOpen && currentSlide === index,
                })}
                style={{
                  opacity: currentSlide === index ? 1 : 0,
                  pointerEvents: currentSlide === index ? "auto" : "none",
                }}
              >
                <motion.img
                  className="content__item-img rounded-right"
                  src={slide.contentImage}
                  alt={`${slide.title} Content`}
                  variants={imageVariants}
                  initial="hidden"
                  animate={currentSlide === index ? "visible" : "hidden"}
                  exit="exit"
                />

                <motion.div
                  className="content__item-inner"
                  variants={contentVariants}
                  initial="hidden"
                  animate={currentSlide === index ? "visible" : "hidden"}
                  exit="exit"
                >
                  {slide.content}
                </motion.div>
              </div>
            ))}
            <button className="button button--close" onClick={closeContent}>
              close
              <span className="text-hidden">Close content</span>
            </button>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default ZoomSlider;
