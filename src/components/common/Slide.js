import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { Grid2 as Grid } from "@mui/material";

import * as styles from "./Slide.module.scss";

const Slide = forwardRef(({ data, isCurrent }, ref) => {
  const el = useRef(null);
  const imgWrap = useRef(null);
  const imgReveal = useRef(null);
  const title = useRef(null);
  const preview = {
    imgWrap: useRef(null),
    imgReveal: useRef(null),
    title: useRef(null),
    content: useRef(null),
  };

  const config = {
    animation: {
      duration: 0.6,
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
      gsap.to(title.current, {
        duration: config.animation.duration * 1.5,
        ...titleOpts,
      });
    });
  };

  const togglePreview = (action) => {
    return new Promise(resolve => {
      gsap.to(preview.imgReveal.current, {
        delay: action === 'hide' ? 0 : config.animation.duration / 2,
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
        delay: action === 'hide' ? 0 : config.animation.duration / 2,
        ease: config.animation.ease,
        startAt: action === 'hide' ? {} : { opacity: 0, y: '20%' },
        y: action === 'hide' ? '20%' : '0%',
        opacity: action === 'hide' ? 0 : 1,
        duration: config.animation.duration,
      });

      gsap.to([preview.title.current, preview.content.current], {
        delay: action === 'hide' ? 0 : config.animation.duration / 2,
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
      <div className="preview" ref={preview.container}>
        <div className="preview__img-wrap" ref={preview.imgWrap}>
          <div
            className="preview__img"
            ref={preview.img}
            style={{ backgroundImage: `url(${data.previewImg})` }}
          ></div>
          <div className="preview__img-reveal" ref={preview.reveal}></div>
        </div>
        <h3 className="preview__title" ref={preview.title}>
          {data.previewTitle}
        </h3>
        <div className="preview__content" ref={preview.content}>
          <p>{data.previewContent}</p>
        </div>
      </div>

      <div className={styles.slideImgWrap}>
				<div className={styles.currentSlideImg} ref={imgWrap}>
					<div
						className="slide__img"
						ref={imgWrap}
						style={{ backgroundImage: `url(${data.img})` }}
					/>
					<div className="slide__img-reveal" ref={imgReveal} />
				</div>
      </div>

			<Grid container size={12} className={styles.carouselItem} ref={title}>
				<Grid size={12} className={styles.itemsubHeading}>
					{data.subTitle}
				</Grid>
				<Grid size={12} className={styles.itemHeading}>
					{data.title}
				</Grid>
				<Grid size={12}>
					<div className={styles.itemDescription}>
						{data.description}
					</div>
				</Grid>
			</Grid>
    </div>
  );
});

export default Slide;
