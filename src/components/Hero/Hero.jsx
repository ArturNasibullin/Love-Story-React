import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'

import { Advantages, About, Trand, Promo, Contacts } from '../../components'
import { urlFor, client } from '../../lib/client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './Hero.sass'

const Hero = () => {
	const [banner, setBanner] = useState([])

	useEffect(() => {
		const bannerQuery = '*[_type == "banner"]'

		client.fetch(bannerQuery).then((data) => setBanner(data))
	}, [])

	return (
		<main className='hero'>
			<div className='container'>
				<Swiper
					className='hero-slider'
					modules={[Navigation, Pagination, Autoplay]}
					slidesPerView={1}
					spaceBetween={20}
					grabCursor={true}
					loop={true}
					navigation={true}
					pagination={{ clickable: true }}
					autoplay={{
						delay: 3000,
						disableOnInteraction: true,
					}}>
					{banner?.map((banner) => (
						<SwiperSlide className='hero-slider-item' key={banner._id}>
							<div className='hero-slider__text'>
								<p className='hero-slider__subtitle pacifico'>Скидка {banner.discount}%</p>
								<h2 className='hero-slider__title'>{banner.name}</h2>
								<button className='btn btn--buy'>Купить!</button>
							</div>
							<img src={urlFor(banner.imageurl)} alt={banner.name} />
						</SwiperSlide>
					))}
				</Swiper>
				<Advantages />
				<About />
				<Trand />
				<Promo />
				<Contacts />
			</div>
		</main>
	)
}

export default Hero
