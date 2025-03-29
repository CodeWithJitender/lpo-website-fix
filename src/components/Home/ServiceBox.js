import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid2';
import { gsap } from "gsap";

import whiteArrow from "@/assets/icons/white-arrow.png";

import * as styles from "./ServiceBox.module.scss";

const ServiceBox = (props) => {
	const { id, title, description, contentBoxTitle, image } = props;

	const thumbRef = useRef(null);
	const thumbSVGRef = useRef(null);
  const SVGFilterRef = useRef(null);
  const SVGImageRef = useRef(null);
  const feTurbulenceRef = useRef(null);
  const feDisplacementMapRef = useRef(null);
	const countRef = useRef(null);
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const captionRef = useRef(null);
	const captionTitleRef = useRef(null);
	const captionLinkRef = useRef(null);
	const boxRef = useRef(null);

	// Animation timeline
  const tlRef = useRef(null);
  // Primitive values for filter
  const primitiveValuesRef = useRef({ scale: 0 });
  // Filter type
  const filterTypeRef = useRef("displacementMap");

	// Update filter values functions
  const updateFilterValues = () => {
    if (filterTypeRef.current === "turbulence") {
      updateTurbulenceBaseFrequency();
    } else {
      updateDisplacementMapScale();
    }
  };

  const updateTurbulenceBaseFrequency = (
    val = primitiveValuesRef.current.baseFrequency
  ) => {
    if (feTurbulenceRef.current) {
      feTurbulenceRef.current.setAttribute("baseFrequency", val);
    }
  };

  const updateDisplacementMapScale = (
    val = primitiveValuesRef.current.scale
  ) => {
    if (feDisplacementMapRef.current) {
      feDisplacementMapRef.current.setAttribute("scale", val);
    }
  };

  // Mouse event handlers
  const handleMouseEnter = () => {
    if (tlRef.current) {
      tlRef.current.restart();
    }
  };

  const handleMouseLeave = () => {
    if (tlRef.current) {
      tlRef.current.reverse();
    }
  };

  // Create animation timeline
  useEffect(() => {
    if (!thumbRef.current) return;

    // Set initial transform origin
    if (SVGImageRef.current) {
      gsap.set(SVGImageRef.current, { transformOrigin: "50% 50%" });
    }

    // Get filter type from data attribute
    if (SVGFilterRef.current && SVGFilterRef.current.dataset.type) {
      filterTypeRef.current = SVGFilterRef.current.dataset.type;
    }

    // Set primitive values based on filter type
    primitiveValuesRef.current =
      filterTypeRef.current === "turbulence"
        ? { baseFrequency: 0 }
        : { scale: 0 };

    // Create the timeline
    tlRef.current = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.7,
        ease: "power2",
      },
      onUpdate: updateFilterValues,
      onReverseComplete: () => {
        if (filterTypeRef.current === "turbulence") {
          primitiveValuesRef.current.baseFrequency = 0;
          updateFilterValues();
        }
      },
    });

    if (filterTypeRef.current === "turbulence") {
      tlRef.current.to(
        primitiveValuesRef.current,
        {
          startAt: { baseFrequency: 0.09 },
          baseFrequency: 0,
        },
        0
      );
    } else {
      tlRef.current.to(
        primitiveValuesRef.current,
        {
          startAt: { scale: 0 },
          scale: 150,
        },
        0
      );
    }

    tlRef.current
      .to(
        captionRef.current,
        {
          y: "0%",
        },
        0
      )
      .to(
        [captionTitleRef.current, captionLinkRef.current],
        {
          y: 0,
          startAt: { y: 100, opacity: 0 },
          opacity: 1,
          stagger: 0.1,
        },
        0
      )
      .to(
        [countRef.current, titleRef.current, descriptionRef.current],
        {
          duration: 0.1,
          x: (_, i) => (i % 2 === 0 ? "-5%" : "5%"),
          opacity: 0,
          stagger: 0.05,
        },
        0
      )
      .to(
        [countRef.current, titleRef.current, descriptionRef.current],
        {
          duration: 0.5,
          ease: "power3",
          startAt: { x: (_, i) => (i % 2 === 0 ? "15%" : "-15%") },
          x: "0%",
          opacity: 1,
          stagger: 0.08,
        },
        0.1
      );

    // Firefox check for additional animation
    if (
      typeof navigator !== "undefined" &&
      navigator.userAgent.indexOf("Firefox") === -1
    ) {
      tlRef.current.to(
        SVGImageRef.current,
        {
          scale: 1.2,
        },
        0
      );
    }

    // Add event listeners
    const thumbElement = boxRef.current;
    thumbElement.addEventListener("mouseenter", handleMouseEnter);
    thumbElement.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      if (thumbElement) {
        thumbElement.removeEventListener("mouseenter", handleMouseEnter);
        thumbElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, []); // Empty dependency array to run once on mount

  return (
		<Grid size={3} className={styles.container}>
			<div className={styles.box} ref={boxRef}>
				<div className={styles.count} ref={countRef}>{id}.</div>
				<div className={styles.heading} ref={titleRef}>{title}</div>
				<figure className={styles.image} ref={thumbRef}>
					<svg
						className="distort"
						viewBox="0 0 540 350"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						ref={thumbSVGRef}
					>
						<filter
							id="distortionFilter5"
							data-type="displacementMap"
							ref={SVGFilterRef}
						>
							<feTurbulence
								type="turbulence"
								baseFrequency="0.1"
								numOctaves="5"
								seed="2"
								result="noise"
								ref={feTurbulenceRef}
							/>
							<feDisplacementMap
								in="SourceGraphic"
								in2="noise"
								scale="0"
								xChannelSelector="R"
								yChannelSelector="B"
								filterUnits="userSpaceOnUse"
								ref={feDisplacementMapRef}
							/>
						</filter>
						<image
							filter="url(#distortionFilter5)"
							x="0"
							y="0"
							xlinkHref={image}
							ref={SVGImageRef}
							className={styles.serviceImage}
						/>
					</svg>
					<figcaption className={styles.overlay} ref={captionRef}>
						<div className={styles.quote} ref={captionTitleRef}>{contentBoxTitle}</div>
						<a href="#" className={styles.button} ref={captionLinkRef}>
							SEE HOW WE CAN HELP<br />
							<img src={whiteArrow} alt="" className={styles.arrow} />
						</a>
					</figcaption>
				</figure>
				<div className={styles.serviceText} ref={descriptionRef}>{description}</div>
			</div>
		</Grid>
  );
};

export default ServiceBox;
