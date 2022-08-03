import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'

import { urlFor, client } from '../../lib/client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './Trand.sass'

const Trand = () => {
	const [trand, setTrand] = useState([])

	useEffect(() => {
		const trandQuery = `*[_type == "product"]`

		client.fetch(trandQuery).then((data) => setTrand(data))
	}, [])

	return (
		<section className='trand'>
			<div className='container'>
				<div className='section-header'>
					<h1 className='section-header__big'>Тренд</h1>
					<h2 className='section-header__title'>Популярное</h2>
					<div className='section-header__separator'></div>
				</div>
				<Swiper
					className='trand-slider'
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={40}
					slidesPerView={1}
					grabCursor={true}
					loop={true}
					breakpoints={{
						450: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						767: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						900: {
							slidesPerView: 3,
						},
						1200: {
							slidesPerView: 4,
						},
					}}
					autoplay={{
						delay: 3000,
						pauseOnMouseEnter: true,
					}}>
					{trand?.map((trand) => (
						<SwiperSlide className='trand-slider-item' key={trand._id}>
							<a href={trand.slug.current} className='trand-slider-item__link'>
								<img src={urlFor(trand.images[0])} alt='' className='trand-slider-item__img' />
								<div className='trand-slider-item__quickview'>
									<span className=''>Смотреть</span>
								</div>
							</a>

							<h2 className='trand-slider-item__title'>{trand.title}</h2>
							<span className='trand-slider-item__price'>{trand.price} р.</span>
							<button className='btn btn--add-to-cart trand-slider-item__btn'>Добавить в корзину</button>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Trand
