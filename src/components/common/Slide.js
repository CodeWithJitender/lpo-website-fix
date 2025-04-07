import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { Grid2 as Grid } from "@mui/material";

import * as styles from "./Slide.module.scss";

const Slide = forwardRef(({
	data,
	isCurrent,
	onNavigate,
	onClose,
}, ref) => {
  const el = useRef(null);
  const imgWrap = useRef(null);
  const title = useRef(null);
	const heading = useRef(null);
	const imgReveal = useRef(null);
  const preview = {
    imgWrap: useRef(null),
    imgReveal: useRef(null),
    title: useRef(null),
    content: useRef(null),
		heading: useRef(null),
		close: useRef(null),
  };

  const config = {
    animation: {
      duration: 0.3,
      ease: 'expo.out',
    },
  };

  useEffect(() => {
    if (isCurrent) {
      el.current.classList.add(styles.slideCurrent);
    } else {
      el.current.classList.remove(styles.slideCurrent);
    }
  }, [isCurrent]);

  const toggle = (action, direction) => {
    return new Promise(resolve => {
      const delay = action === 'hide' ? 0 : config.animation.duration / 2;

      let revealerOpts = {
        delay,
        ease: config.animation.ease,
        onComplete: resolve,
      };

      let commonOpts = {
        delay,
        ease: config.animation.ease,
        opacity: action === 'hide' ? 0 : 1,
      };

      let imgOpts = { ...commonOpts };
      let titleOpts = { ...commonOpts };
      let numberOpts = { ...commonOpts };

      if (direction === 'left' || direction === 'right') {
        revealerOpts = {
          ...revealerOpts,
          startAt:
            action === 'hide'
              ? { x: direction === 'left' ? '-100%' : '100%', y: '0%' }
              : { x: '0%', y: '0%' },
          x: action === 'hide' ? '0%' : direction === 'left' ? '100%' : '-100%',
        };
        imgOpts = {
          ...imgOpts,
          startAt:
            action === 'show'
              ? { opacity: 0, x: direction === 'left' ? '-20%' : '20%' }
              : {},
          x: action === 'hide' ? (direction === 'left' ? '20%' : '-20%') : '0%',
        };
        titleOpts = {
          ...titleOpts,
          startAt:
            action === 'show'
              ? {
                  opacity: 1,
                  scale: 0.2,
                  x: direction === 'left' ? '-200%' : '200%',
                }
              : {},
          x: action === 'hide' ? (direction === 'left' ? '200%' : '-200%') : '0%',
          scale: action === 'hide' ? 1 : 1,
        };
        numberOpts = {
          ...numberOpts,
          startAt:
            action === 'show'
              ? { opacity: 1, x: direction === 'left' ? '-50%' : '50%' }
              : {},
          x: action === 'hide' ? (direction === 'left' ? '50%' : '-50%') : '0%',
        };
      } else {
        revealerOpts = {
          ...revealerOpts,
          startAt:
            action === 'hide'
              ? { x: '0%', y: direction === 'down' ? '-100%' : '110%' }
              : { x: '0%', y: '0%' },
          y: action === 'hide' ? '0%' : direction === 'down' ? '110%' : '-100%',
        };
        imgOpts = {
          ...imgOpts,
          startAt:
            action === 'show'
              ? { opacity: 1, y: direction === 'down' ? '-10%' : '10%' }
              : {},
          y: action === 'hide' ? (direction === 'down' ? '10%' : '-10%') : '0%',
        };
        titleOpts = {
          ...titleOpts,
          startAt:
            action === 'show'
              ? { opacity: 1, y: direction === 'down' ? '-100%' : '100%' }
              : {},
          y: action === 'hide' ? (direction === 'down' ? '100%' : '-100%') : '0%',
        };
      }

      // Animations
			gsap.to(imgReveal.current, {
        duration: config.animation.duration,
        ...revealerOpts,
      });
      gsap.to(imgWrap.current, {
        duration: config.animation.duration,
        ...imgOpts,
      });
			gsap.to(heading.current, {
        duration: config.animation.duration * 1.5,
        ...titleOpts,
      });
      gsap.to(title.current, {
        duration: config.animation.duration * 1.5,
        ...titleOpts,
      });
    });
  };

  const togglePreview = (action) => {
    return new Promise(resolve => {
      gsap.to(preview.imgReveal.current, {
        delay: 0,
        ease: config.animation.ease,
        startAt:
          action === 'hide'
            ? { x: '0%', y: '-100%' }
            : { x: '0%', y: '0%' },
        y: action === 'hide' ? '0%' : '-100%',
        duration: config.animation.duration,
				onComplete: resolve,
      });

      gsap.to(preview.imgWrap.current, {
        delay: 0,
        ease: config.animation.ease,
        startAt: action === 'hide' ? {} : { opacity: 0, y: '20%' },
        y: action === 'hide' ? '20%' : '0%',
        opacity: action === 'hide' ? 0 : 1,
        duration: config.animation.duration,
      });

      gsap.to([preview.close.current, preview.heading.current, preview.title.current, preview.content.current], {
        delay: 0,
        ease: config.animation.ease,
        startAt: action === 'hide' ? {} : { opacity: 0, y: '200%' },
        y: action === 'hide' ? '200%' : '0%',
        opacity: action === 'hide' ? 0 : 1,
        duration: config.animation.duration,
      });
    });
  };

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    hide: (dir) => toggle('hide', dir),
    show: (dir) => toggle('show', dir),
    hidePreview: () => togglePreview('hide'),
    showPreview: () => togglePreview('show'),
    setCurrent: (state) => {
      el.current.classList[state ? 'add' : 'remove'](styles.slideCurrent);
    },
  }));

  return (
    <div className={`slide ${isCurrent ? styles.slideCurrent : ''}`} ref={el}>
      <div className={styles.slideImgWrap}>
				<img src={data.img} alt="" className={styles.currentSlideImg} ref={imgWrap} />
				<div className={styles.itemHeading} ref={heading}>
					{data.title}
				</div>
				<div ref={imgReveal} />
      </div>

			<Grid container size={12} className={styles.carouselItem} ref={title}>
				<Grid size={12} className={styles.itemsubHeading}>
					{data.subTitle}
				</Grid>
				<Grid size={12}>
					<div className={styles.itemDescription}>
						{data.description}
					</div>
				</Grid>
			</Grid>

			<div className="preview" ref={preview.container}>
        <div className="preview__img-wrap" ref={preview.imgWrap}>
          <div
            className="preview__img"
            ref={preview.img}
          ></div>
        </div>
				<div className={styles.previewHeading} ref={preview.heading}>
					{data.title}
				</div>
        <h3 className={styles.previewTitle} ref={preview.title}>
          {data.previewTitle}
        </h3>
        <div className={styles.previewContent} ref={preview.content}>
          {data.previewContent}
        </div>
				<div
					className={styles.previewClose}
					ref={preview.close}
					onClick={() => onClose("exit")}
				>
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 64 80"><g><path d="M17.586,46.414C17.977,46.805,18.488,47,19,47s1.023-0.195,1.414-0.586L32,34.828l11.586,11.586   C43.977,46.805,44.488,47,45,47s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L34.828,32l11.586-11.586   c0.781-0.781,0.781-2.047,0-2.828c-0.781-0.781-2.047-0.781-2.828,0L32,29.172L20.414,17.586c-0.781-0.781-2.047-0.781-2.828,0   c-0.781,0.781-0.781,2.047,0,2.828L29.172,32L17.586,43.586C16.805,44.367,16.805,45.633,17.586,46.414z"/><path d="M32,64c8.547,0,16.583-3.329,22.626-9.373C60.671,48.583,64,40.547,64,32s-3.329-16.583-9.374-22.626   C48.583,3.329,40.547,0,32,0S15.417,3.329,9.374,9.373C3.329,15.417,0,23.453,0,32s3.329,16.583,9.374,22.626   C15.417,60.671,23.453,64,32,64z M12.202,12.202C17.49,6.913,24.521,4,32,4s14.51,2.913,19.798,8.202C57.087,17.49,60,24.521,60,32   s-2.913,14.51-8.202,19.798C46.51,57.087,39.479,60,32,60s-14.51-2.913-19.798-8.202C6.913,46.51,4,39.479,4,32   S6.913,17.49,12.202,12.202z"/></g></svg>
					<div className={styles.closeText}>Close</div>
				</div>
      </div>
    </div>
  );
});

export default Slide;
