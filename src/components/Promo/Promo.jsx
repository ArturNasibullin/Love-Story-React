import React, { useState, useEffect } from 'react'

import { client } from '../../lib/client'

import images from '../../assets/images'
import './Promo.sass'

const Promo = () => {
	const [promo, setPromo] = useState([])

	useEffect(() => {
		const promoQuery = '*[_type == "promo"]'

		client.fetch(promoQuery).then((data) => setPromo(data))
	}, [])
	return (
		<section className='promo' style={{ backgroundImage: `url(${images.promo})` }}>
			<div className='promo__wrap'>
				<div className='container'>
					<div className='promo-row'>
						<div className='promo-text text'>
							<p className='promo-text__title'>{promo[0]?.heading}</p>
							<p className='promo-text__subtitle'>{promo[0]?.tagline}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Promo
