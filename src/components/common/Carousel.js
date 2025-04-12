import React, { useState, useEffect } from "react";
import { config } from "react-spring";

const Carousel = (props) => {
	const {
		cards,
		offset,
		showArrows,
		offsetFn
	} = props;

	const table = cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [_showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [slides] = useState(table);
	const [CarouselComponent, setCarouselComponent] = useState(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		// Set isClient to true when component mounts in browser
		setIsClient(true);

		// Only import the carousel client-side
		import('react-spring-3d-carousel').then((mod) => {
			setCarouselComponent(() => mod.default);
		});
	}, []);

	useEffect(() => {
    setOffsetRadius(offset);
    setShowArrows(showArrows);
  }, [offset, showArrows]);

	if (isClient && CarouselComponent) {
		return (
			<CarouselComponent
				slides={slides}
				goToSlide={goToSlide}
				offsetRadius={offsetRadius}
				showNavigation={_showArrows}
				animationConfig={config.gentle}
				offsetFn={offsetFn}
			/>
		)
	}

	return null;
};

export default Carousel;
