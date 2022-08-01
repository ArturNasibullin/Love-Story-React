import React, { useState, useEffect } from 'react'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { urlFor, client } from '../lib/client'

const HeroSlider = () => {
	const [banner, setBanner] = useState([])
	const [currentIndex, setCurrentIndex] = useState(0)

	const handleClick = (index) => {
		setCurrentIndex(index)
	}
	useEffect(() => {
		const bannerQuery = '*[_type == "banner"]'

		client.fetch(bannerQuery).then((data) => setBanner(data))
	}, [])
	const ban = banner[currentIndex]

	return (
		<div className='hero-slider-container'>
			<div className='hero-slider'>
				{banner.length && (
					<div className='hero-slider__item' key={ban.index}>
						<div className='hero-slider__text'>
							<p className='hero-slider__subtitle pacifico'>{ban.discount}%</p>
							<h2 className='hero-slider__title'>{ban.name}</h2>
							<img src={urlFor(ban.imageurl)} alt='heroSlide' />
							<button className='btn btn--hero'>Купить!</button>
							<div className='app__testimonial-btns app__flex'>
								<div
									className='app__flex'
									onClick={() => handleClick(currentIndex === 0 ? banner.length - 1 : currentIndex - 1)}>
									<HiChevronLeft />
								</div>
								<div
									className='app__flex'
									onClick={() => handleClick(currentIndex === banner.length - 1 ? 0 : currentIndex + 1)}>
									<HiChevronRight />
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default HeroSlider
