import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Grid2 as Grid } from "@mui/material";

import slideImg1 from "@/assets/images/slide-1.png";
import slideImg2 from "@/assets/images/slide-2.png";
import slideImg3 from "@/assets/images/slide-3.png";

import lensIcon from "@/assets/icons/lens-icon.png";
import arrowIcon from "@/assets/icons/arrow-right.png";

import Slide from './Slide';

import * as styles from "./Slideshow.module.scss";

import './Slideshow.scss';

const slidesData = [
  {
    img: slideImg1,
    title: "Secretarial",
    number: "#01",
    previewTitle: "Smart tools. Smoother workflows.",
    previewContent: "Our team is trained in legal workflow platforms and admin precision, ensuring every document, schedule, and task is handled with speed, security, and zero oversight. We bring US law firm standards to your back office.",
    subTitle: "Secretarial Services",
    description: "From legal workflow tools to administrative management, we ensure smooth operations and uninterrupted productivity."
  },
  {
    img: slideImg2,
    title: "Paralegal",
    number: "#02",
    previewTitle: "The muscle behind your motion.",
    previewContent: "With deep domain expertise across multiple practice areas, our paralegals are skilled in drafting, discovery, medical summaries, and research—powered by top tools like LexisNexis, Westlaw, and AI. Built for performance. Backed by process.",
    subTitle: "Paralegal Services",
    description: "We cover it all—litigation prep, compliance, drafting, and research—flawlessly executed."
  },
  {
    img: slideImg3,
    title: "Legal",
    number: "#03",
    previewTitle: "Sharp minds. Solid outcomes.",
    previewContent: "Our legal pros bring real-world litigation support from the US and Canada, specializing in drafting, immigration, contracts, and compliance. With full-cycle support and confidentiality at the core, we're the team behind your winning case.",
    subTitle: "Legal Services",
    description: "Comprehensive support across litigation, contracts, immigration, and employment law."
  },
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const prevCtrl = useRef();
  const nextCtrl = useRef();
  const previewCtrl = useRef();
  const slideRefs = useRef([]);

  // Initialize slides
  useEffect(() => {
    // Set initial states for non-active slides
    slidesData.forEach((_, i) => {
      if (i !== current && slideRefs.current[i]) {
        // Make sure non-current slides are properly hidden
        gsap.set(slideRefs.current[i].el, { autoAlpha: 0 });
      }
    });
    
    // Make the current slide visible
    if (slideRefs.current[current]) {
      slideRefs.current[current].setCurrent(true);
      gsap.set(slideRefs.current[current].el, { autoAlpha: 1 });
    }
  }, []);

  useEffect(() => {
    if (slideRefs.current[current]) {
      slideRefs.current[current].setCurrent(true);
    }
  }, [current]);

  const toggleNavCtrls = (action) => {
    const isEnter = action === 'enter';
    
    // Kill any running animations first
    gsap.killTweensOf([previewCtrl.current, prevCtrl.current, nextCtrl.current]);
    
    gsap.to([previewCtrl.current, prevCtrl.current, nextCtrl.current], {
      duration: 0.5,
      ease: 'expo.out',
      opacity: isEnter ? 0 : 1,
      onStart: () => {
        const pointer = isEnter ? 'none' : 'auto';
        prevCtrl.current.style.pointerEvents = pointer;
        nextCtrl.current.style.pointerEvents = pointer;
        previewCtrl.current.style.pointerEvents = pointer;
      },
    });
  };

  const navigate = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const nextPos =
      direction === 'right'
        ? (current + 1) % slidesData.length
        : (current - 1 + slidesData.length) % slidesData.length;

    // Prepare the next slide before animation starts
    if (slideRefs.current[nextPos]) {
      // Make sure next slide is ready for animation
      gsap.set(slideRefs.current[nextPos].el, { autoAlpha: 1 });
    }

    Promise.all([
      slideRefs.current[current]?.hide(direction),
      slideRefs.current[nextPos]?.show(direction),
    ]).then(() => {
      // First update state
      slideRefs.current[current]?.setCurrent(false);
      
      // Then change current slide
      setCurrent(nextPos);
      
      // Animation is complete
      setIsAnimating(false);
    });
  };

  const togglePreview = (action) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const slide = slideRefs.current[current];

    const anims =
      action === 'enter'
        ? [slide?.hide('up'), slide?.showPreview()]
        : [slide?.show('down'), slide?.hidePreview()];

    toggleNavCtrls(action);

    Promise.all(anims).then(() => {
      setIsAnimating(false);
      setIsPreviewOpen(action === 'enter');
    });
  };

  return (
    <>
      <Grid size={12} className={styles.slideshow}>
        {slidesData.map((slide, i) => (
          <Slide
            key={i}
            ref={(el) => (slideRefs.current[i] = el)}
            data={slide}
            isCurrent={i === current}
            onNavigate={navigate}
            onClose={togglePreview}
          />
        ))}
      </Grid>
      <Grid size={12} display="flex" justifyContent="center" alignItems="center">
        <img
          src={arrowIcon}
          ref={prevCtrl}
          className={styles.leftArrowIcon}
          alt=""
          onClick={() => navigate('left')}
        />
        <img
          ref={previewCtrl}
          src={lensIcon}
          className={styles.lensIcon}
          alt=""
          onClick={() => togglePreview(isPreviewOpen ? 'exit' : 'enter')}
        />
        <img
          ref={nextCtrl}
          src={arrowIcon}
          className={styles.rightArrowIcon}
          alt=""
          onClick={() => navigate('right')}
        />
      </Grid>
    </>
  );
};

export default Slideshow;
