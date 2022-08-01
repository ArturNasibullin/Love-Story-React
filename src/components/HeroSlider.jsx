import React, { useState, useEffect } from 'react'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const HeroSlider = ({ heroSlider }) => {
	// const [banner, setBanner] = useState([])

	// useEffect(() => {
	// 	const bannerQuery = '*[_type == "banner"]'

	// 	client.fetch(bannerQuery).then((data) => setBanner(data))
	// }, [])

	return (
		<div className='hero-slider-container'>
			{heroSlider?.map((heroSlide, index) => (
				<div className='hero-slider'>
					<div className='hero-slider__item'>
						<div className='hero-slider__text'>
							<p className='hero-slider__subtitle pacifico'>Скидка 40%</p>
							<h2 className='hero-slider__title'>{heroSlide.name}</h2>
							<button className='btn btn--hero'>Купить!</button>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default HeroSlider
