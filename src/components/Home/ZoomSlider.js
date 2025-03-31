import React, { useState, useRef, useEffect } from "react";
import dynamics from "dynamics.js";
import cx from "classnames";

import "./ZoomSlider.scss";

const sliderItems = [				
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
	const sliderEl = useRef(null);
	const contentEl = useRef(null);
	const slideRefs = useRef([]);
	const contentRefs = useRef([]);

	const bodyScale = 3;
	const transEndEventName = "transitionend";

	let current = 0;

	const [currentItem, setCurrentItem] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [windowDimensions, setWindowDimensions] = useState({
		width: 0,
		height: 0
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight
			});
		}
	}, []);

	const onEndTransition = ( el, callback ) => {
		const onEndCallbackFn = (ev) => {
			if( ev.target != this ) return;
			if( callback && typeof callback === 'function' ) { callback.call(this); }
		};
		el.addEventListener(transEndEventName, onEndCallbackFn );
	};

	const applyTransforms = (el, nobodyscale) => {
		// zoomer area and scale value
		var zoomerArea = el.querySelector('.zoomer__area'), 
			zoomerAreaSize = {width: zoomerArea.offsetWidth, height: zoomerArea.offsetHeight},
			zoomerOffset = zoomerArea.getBoundingClientRect(),
			scaleVal = zoomerAreaSize.width/zoomerAreaSize.height < windowDimensions.width / windowDimensions.height ? windowDimensions.width / zoomerAreaSize.width : windowDimensions.height / zoomerAreaSize.height;

		if( bodyScale && !nobodyscale ) {
			scaleVal /= bodyScale; 
		}

		// apply transform
		el.style.WebkitTransform = 'translate3d(' + Number(windowDimensions.width/2 - (zoomerOffset.left+zoomerAreaSize.width/2)) + 'px,' + Number(windowDimensions.height/2 - (zoomerOffset.top+zoomerAreaSize.height/2)) + 'px,0) scale3d(' + scaleVal + ',' + scaleVal + ',1)';
		el.style.transform = 'translate3d(' + Number(windowDimensions.width/2 - (zoomerOffset.left+zoomerAreaSize.width/2)) + 'px,' + Number(windowDimensions.height/2 - (zoomerOffset.top+zoomerAreaSize.height/2)) + 'px,0) scale3d(' + scaleVal + ',' + scaleVal + ',1)';
	};

	const noscroll = () => {
		contentEl.current.scrollTop = contentEl.current.scrollTop;
		contentEl.current.scrollLeft = contentEl.current.scrollLeft;
	}

	const openItem = (item) => {
		if( isOpen ) return;
		const bodyEl = document.body;

		// the element that will be transformed
		var zoomer = item.querySelector('.zoomer');
		// slide screen preview
		// disallow scroll
		contentEl.current.addEventListener('scroll', noscroll);
		// apply transforms
		applyTransforms(zoomer);
		// also scale the body so it looks the camera moves to the item.
		if (bodyScale) {
			dynamics.animate(
				bodyEl, {
					scale: bodyScale
				}, {
					type: dynamics.easeInOut,
					duration: 500
				}
			);
		}
		// after the transition is finished:
		onEndTransition(zoomer, function() {
			// reset body transform
			if (bodyScale) {
				dynamics.stop(bodyEl);
				dynamics.css(bodyEl, { scale: 1 });
				
				// fix for safari (allowing fixed children to keep position)
				bodyEl.style.WebkitTransform = 'none';
				bodyEl.style.transform = 'none';
			}
			// no scrolling
			classie.add(bodyEl, 'noscroll');
			classie.add(contentEl, 'content--open');
			var contentItem = document.getElementById(item.getAttribute('data-content'))
			classie.add(contentItem, 'content__item--current');
			classie.add(contentItem, 'content__item--reset');


			// reset zoomer transform - back to its original position/transform without a transition
			classie.add(zoomer, 'zoomer--notrans');
			zoomer.style.WebkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
			zoomer.style.transform = 'translate3d(0,0,0) scale3d(1,1,1)';
		});
		setIsOpen(true);
	};

	const navigate = (dir) => {
		const itemsTotal = sliderItems.length;
		const itemCurrent = slideRefs.current[currentItem];
		const currentEl = itemCurrent.querySelector('.slide__mover');
		const currentTitleEl = itemCurrent.querySelector('.slide__title');

		let current = 0;
		// update new current value
		if (dir === 'right' ) {
			current = current < itemsTotal-1 ? current + 1 : 0;
		} else {
			current = current > 0 ? current - 1 : itemsTotal-1;
		}

		const itemNext = slideRefs.current[current];
		const nextEl = itemNext.querySelector('.slide__mover');
		const nextTitleEl = itemNext.querySelector('.slide__title');
		console.log("itemCurrent: ", itemCurrent);
		
		// animate the current element out
		dynamics.animate(currentEl, {
			opacity: 0,
			translateX: dir === 'right' ? -1 * currentEl.offsetWidth / 2 : currentEl.offsetWidth / 2,
			rotateZ: dir === 'right' ? -10 : 10
		}, {
			type: dynamics.spring,
			duration: 2000,
			friction: 600,
			complete: (itemCurrent) => {
				console.log("itemCurrent: ", itemCurrent);
				dynamics.css(itemCurrent, { opacity: 0, visibility: 'hidden' });
			}
		});

		// animate the current title out
		dynamics.animate(currentTitleEl, {
			translateX: dir === 'right' ? -250 : 250,
			opacity: 0
		}, {
			type: dynamics.bezier,
			points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
			duration: 450
		});

		// set the right properties for the next element to come in
		dynamics.css(itemNext, {
			opacity: 1,
			visibility: 'visible'
		});
		dynamics.css(nextEl, {
			opacity: 0,
			translateX: dir === 'right' ? nextEl.offsetWidth / 2 : -1 * nextEl.offsetWidth / 2,
			rotateZ: dir === 'right' ? 10 : -10
		});

		// animate the next element in
		dynamics.animate(nextEl, {
			opacity: 1,
			translateX: 0
		}, {
			type: dynamics.spring,
			duration: 2000,
			friction: 600,
		});

		// set the right properties for the next title to come in
		dynamics.css(nextTitleEl, {
			translateX: dir === 'right' ? 250 : -250,
			opacity: 0
		});
		// animate the next title in
		dynamics.animate(nextTitleEl, {
			translateX: 0,
			opacity: 1
		}, {
			type: dynamics.bezier,
			points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
			duration: 650
		});
		setCurrentItem((current) => {
			if (dir === 'right') {
				return current < itemsTotal - 1 ? current + 1 : 0;
			} else {
				return current > 0 ? current - 1 : itemsTotal - 1;
			}
		});
	};

	const closeContent = () => {
		var contentItem = contentEl.current.querySelector('.content__item--current'),
			zoomer = items[current].querySelector('.zoomer');

		classie.remove(contentEl, 'content--open');
		classie.remove(contentItem, 'content__item--current');
		classie.remove(bodyEl, 'noscroll');
				
		if( bodyScale ) {
			// reset fix for safari (allowing fixed children to keep position)
			bodyEl.style.WebkitTransform = '';
			bodyEl.style.transform = '';
		}

		/* fix for safari flickering */
		var nobodyscale = true;
		applyTransforms(zoomer, nobodyscale);
		/* fix for safari flickering */

		// wait for the inner content to finish the transition
		onEndTransition(contentItem, function(ev) {
			classie.remove(this, 'content__item--reset');
			
			// reset scrolling permission
			lockScroll = false;
			scrollContainer.removeEventListener('scroll', noscroll);

			/* fix for safari flickering */
			zoomer.style.WebkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
			zoomer.style.transform = 'translate3d(0,0,0) scale3d(1,1,1)';
			/* fix for safari flickering */
			
			// scale up - behind the scenes - the item again (without transition)
			applyTransforms(zoomer);
			
			// animate/scale down the item
			setTimeout(function() {	
				classie.remove(zoomer, 'zoomer--notrans');
				classie.remove(zoomer, 'zoomer--active');
				zoomer.style.WebkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';
				zoomer.style.transform = 'translate3d(0,0,0) scale3d(1,1,1)';
			}, 25);

			if( bodyScale ) {
				dynamics.css(bodyEl, { scale: bodyScale });
				dynamics.animate(bodyEl, { scale: 1 }, {
					type: dynamics.easeInOut,
					duration: 500
				});
			}

			isOpen = false;
		});
	};

	const initEvents = () => {
		const zoomCtrl = sliderEl?.current?.querySelector('.button--zoom');
		// open items
		zoomCtrl.addEventListener('click', function() {
			// const itemsTotal = sliderItems.length;
			const itemCurrent = slideRefs.current[currentItem];
			openItem(itemCurrent);
		});

		// close content
		const closeContentCtrl = contentEl.current.querySelector('button.button--close')
		closeContentCtrl.addEventListener('click', closeContent);
	};

	useEffect(() => {
		initEvents();
	});

  return (
		<div className="container" ref={contentEl}>
			<section className="slider" ref={sliderEl}>
				{sliderItems.map((slider, index) => (
					<div
						className={cx("slide", {
							"slide--current": index === currentItem
						})}
						data-content={`content-${slider.id}`}
						ref={(el) => (slideRefs.current[index] = el)}
						key={slider.id}
					>
						<div className="slide__mover">
							<div
								className={
									cx("zoomer flex-center",
										{
											"zoomer--active": isOpen && index === currentItem,
										}
									)
									
								}
							>
								<img className="zoomer__image" src={slider.smallImage} alt="iPhone" />
								<div className="preview">
									<img src={slider.previewImage} alt="iPhone app preview" />
									<div className="zoomer__area zoomer__area--size-2"></div>
								</div>
							</div>
						</div>
						<h2 className="slide__title">{slider.title}</h2>
					</div>
				))}
				<nav className="slider__nav">
					<button className="button button--nav-prev" onClick={() => navigate('left')}>
						<i className="icon icon--arrow-left"></i><span className="text-hidden">Previous product</span>
					</button>
					<button className="button button--zoom"><i className="icon icon--zoom"></i><span className="text-hidden">View details</span></button>
					<button className="button button--nav-next"  onClick={() => navigate('right')}>
						<i className="icon icon--arrow-right"></i><span className="text-hidden">Next product</span>
					</button>
				</nav>
			</section>
			<section className="content">
				{sliderItems.map((slider, index) => (
					<div
						className="content__item"
						id={`content-${slider.id}`}
						ref={(el) => (contentRefs.current[index] = el)}
						key={slider.id}
					>
						<img className="content__item-img rounded-right" src={slider.contentImage} alt="Apple Watch Content" />
						<div className="content__item-inner">
							{slider.content}
						</div>
					</div>
				))}
				<button className="button button--close"><i className="icon icon--circle-cross"></i><span className="text-hidden">Close content</span></button>
			</section>
		</div>
	);
};

export default ZoomSlider;
