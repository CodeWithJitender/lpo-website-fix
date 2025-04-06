import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Grid2 as Grid } from "@mui/material";

import tableImage from "@/assets/images/tablet-bg.png";

import lensIcon from "@/assets/icons/lens-icon.png";
import arrowIcon from "@/assets/icons/arrow-right.png";

import Slide from './Slide';

import * as styles from "./Slideshow.module.scss";

import './Slideshow.scss';

const slidesData = [
  {
    img: "https://tympanus.net/Development/MotionRevealSlideshow/img/1.jpg",
    title: "Secretarial Services",
    number: "#01",
    previewImg: "https://tympanus.net/Development/MotionRevealSlideshow/img/project1.jpg",
    previewTitle: "Carmino Burano",
    previewContent: "You're not your job. You're not how much money you have in the bank. You're not the car you drive. You're not the contents of your wallet. You're not your f***ing khakis. You're the all-singing, all-dancing crap of the world. What do you want? Wanna go back to the s*** job, f***in' condo world, watching sitcoms? F*** you, I won't do it. Fifth rule: one fight at a time, fellas.",
		subTitle: "The Backbone of Legal Operations",
		description: "From case intakes to calendaring, we streamline your workflow so you can focus on winning."
  },
  {
    img: "https://tympanus.net/Development/MotionRevealSlideshow/img/1.jpg",
    title: "Carmino",
    number: "#02",
    previewImg: "https://tympanus.net/Development/MotionRevealSlideshow/img/project1.jpg",
    previewTitle: "Carmino Burano",
    previewContent: "You're not your job. You're not how much money you have in the bank. You're not the car you drive. You're not the contents of your wallet. You're not your f***ing khakis. You're the all-singing, all-dancing crap of the world. What do you want? Wanna go back to the s*** job, f***in' condo world, watching sitcoms? F*** you, I won't do it. Fifth rule: one fight at a time, fellas.",
		subTitle: "The Backbone of Legal Operations",
		description: "From case intakes to calendaring, we streamline your workflow so you can focus on winning."
  },
  {
    img: "https://tympanus.net/Development/MotionRevealSlideshow/img/1.jpg",
    title: "Carmino",
    number: "#03",
    previewImg: "https://tympanus.net/Development/MotionRevealSlideshow/img/project1.jpg",
    previewTitle: "Carmino Burano",
    previewContent: "You're not your job. You're not how much money you have in the bank. You're not the car you drive. You're not the contents of your wallet. You're not your f***ing khakis. You're the all-singing, all-dancing crap of the world. What do you want? Wanna go back to the s*** job, f***in' condo world, watching sitcoms? F*** you, I won't do it. Fifth rule: one fight at a time, fellas.",
		subTitle: "The Backbone of Legal Operations",
		description: "From case intakes to calendaring, we streamline your workflow so you can focus on winning."
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

  useEffect(() => {
    slideRefs.current[current]?.setCurrent(true);
  }, [current]);

  const toggleNavCtrls = (action) => {
    const isEnter = action === 'enter';
    gsap.to([prevCtrl.current, nextCtrl.current], {
      duration: 0.5,
      ease: 'expo.out',
      opacity: isEnter ? 0 : 1,
      onStart: () => {
        const pointer = isEnter ? 'none' : 'auto';
        prevCtrl.current.style.pointerEvents = pointer;
        nextCtrl.current.style.pointerEvents = pointer;
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

    Promise.all([
      slideRefs.current[current]?.hide(direction),
      slideRefs.current[nextPos]?.show(direction),
    ]).then(() => {
      slideRefs.current[current]?.setCurrent(false);
      setCurrent(nextPos);
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
				{/* <img src={tableImage} alt="" className={styles.tableImage} /> */}
				{slidesData.map((slide, i) => (
					<Slide
						key={i}
						ref={(el) => (slideRefs.current[i] = el)}
						data={slide}
						isCurrent={i === current}
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
