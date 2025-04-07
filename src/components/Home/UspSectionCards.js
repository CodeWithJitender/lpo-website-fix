import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import uspIcon1 from "@/assets/icons/usp-icon-1.png";
import uspIcon2 from "@/assets/icons/usp-icon-2.png";
import uspIcon3 from "@/assets/icons/usp-icon-3.png";
import uspIcon4 from "@/assets/icons/usp-icon-4.png";

import * as styles from "./UspSectionCards.module.scss";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Card data
const cardData = [
  {
    id: 1,
    title: "Teams Trained By US Law Firms",
    text: "Trained by the Best. Built for the Rest.",
    imgSrc: uspIcon1,
    bgClass: "bg-1",
  },
  {
    id: 2,
    title: "Dedicated Sales Manager and CRM",
    text: "One Point of Contact. Zero Room for Errors.",
    imgSrc: uspIcon2,
    bgClass: "bg-2",
  },
  {
    id: 3,
    title: "Expertise in Managing Entire Case Lifecycle",
    text: "From First Filing to Final Verdict.",
    imgSrc: uspIcon3,
    bgClass: "bg-3",
  },
  {
    id: 4,
    title: "Technology and Data Security Driven",
    text: "Ironclad Security. Bulletproof Precision.",
    imgSrc: uspIcon4,
    bgClass: "bg-4",
  },
];

export default function App() {
  const wrapRef = useRef(null);
  const cardsRef = useRef([]);
  const lenisRef = useRef(null);

  // Initialize smooth scrolling with Lenis
  const initSmoothScrolling = () => {
    lenisRef.current = new Lenis({
      lerp: 0.2,
      smoothWheel: true,
    });

    lenisRef.current.on("scroll", () => ScrollTrigger.update());

    const scrollFn = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);
  };

  // Setup scroll animations
  const setupScrollAnimations = () => {
    const contentElements = cardsRef.current;
    const totalContentElements = contentElements.length;

    contentElements.forEach((el, position) => {
      const isLast = position === totalContentElements - 1;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "center center",
            end: "+=100%",
            scrub: true,
          },
        })
        .to(
          el,
          {
            ease: "none",
            scale: 0.6,
            opacity: 0,
            yPercent: isLast ? 125 : 0,
          },
          0
        );
    });
  };

  useEffect(() => {
		initSmoothScrolling();
    setupScrollAnimations();

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }

      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.uspSection} ref={wrapRef}>
      {cardData.map((card, index) => (
        <div
          key={card.id}
          className={`${styles.content} ${styles[card.bgClass]}`}
          ref={(el) => (cardsRef.current[index] = el)}
        >
          <img
            className={styles.img}
            src={card.imgSrc}
            alt={card.title}
          />
          <div className={styles.title}>
            {card.title}
          </div>
          <p className={styles.text}>{card.text}</p>
        </div>
      ))}
    </div>
  );
}
