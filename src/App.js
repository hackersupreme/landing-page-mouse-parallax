import React from 'react';
import { useSpring, animated } from 'react-spring';
import SkylineForeground from './skylineforeground.svg';
import SkylineBackground from './skylinebackground.svg';
import { ScaleForeGround, ScaleBackground, MoveFast, skewBoxShadow, backgroundGradient } from './animations.js';

const calcCenter = (x, y) => [x - window.innerWidth / 2, y];

const App = () => {

	const [ props, set ] = useSpring(() => ({xy: [0,0]}));

	return (

		<header className="header__container" onMouseMove={e => set({xy: calcCenter(e.clientX, e.clientY)})}>

			<nav className="header__nav">
				<a href="http://hackersupreme.com" className="header__nav-item">
						Main Website
				</a>
				<animated.h2 className="header__title"
				style={{ transform: props.xy.interpolate(MoveFast) }} >
					Hacker Supreme
				</animated.h2>
				<a href="http://photos.hackersupreme.com" className="header__nav-item">
						Photography
				</a>
			</nav>

			<div className="header__title-container">

				<animated.h1 className="header__subtitle">
					I'm a <strong>front end developer</strong> looking for a job anywhere in the world.
				</animated.h1>	

			</div>

			<animated.button className="header__button"
				style={{ boxShadow: props.xy.interpolate(skewBoxShadow) }}>
					Github
			</animated.button>	

			<animated.div className="header__gradient"
			style={{ background: props.xy.interpolate(backgroundGradient)}}>

			</animated.div>

			<div className="skyline__container">

				<animated.img 
				className="skyline__image"
				src={SkylineBackground}
				style={{ transform: props.xy.interpolate(ScaleBackground)}}
				/>


				<animated.img 
				className="skyline__image"
				src={SkylineForeground}
				style={{ transform: props.xy.interpolate(ScaleForeGround)}}
				/>

			</div>

		</header>

	)
}

export default App;