import React, { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { urlFor, client } from '../../lib/client'
import './HeroSlider.sass'

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
		<div className='hero-slider'>
			{banner.length && (
				<div className='hero-slider-item' key={ban.index}>
					<div className='hero-slider__text'>
						<p className='hero-slider__subtitle pacifico'>Скидка {ban.discount}%</p>
						<h2 className='hero-slider__title'>{ban.name}</h2>
						<button className='btn btn--buy'>Купить!</button>
					</div>
					<img src={urlFor(ban.imageurl)} alt={ban.name} />
				</div>
			)}
			<div className='hero-slider-btns'>
				<div onClick={() => handleClick(currentIndex === 0 ? banner.length - 1 : currentIndex - 1)}>
					<HiChevronLeft />
				</div>
				<div onClick={() => handleClick(currentIndex === banner.length - 1 ? 0 : currentIndex + 1)}>
					<HiChevronRight />
				</div>
			</div>
		</div>
	)
}

export default HeroSlider
