import React, { useState, useEffect } from 'react'

import { urlFor, client } from '../../lib/client'

import './About.sass'

const About = () => {
	const [about, setAbout] = useState([])

	useEffect(() => {
		const aboutQuery = '*[_type == "about"]'

		client.fetch(aboutQuery).then((data) => setAbout(data))
	}, [])
	return (
		<>
			{console.log(about)}
			{about?.map((about, index) => (
				<section className='about' key={about._id}>
					<div className='container'>
						<div className='about-grid'>
							<img src={urlFor(about.imageurl)} alt='' className='about__img' />
							<div className='about-item'>
								<h2 className='section-header__title section-header__title--about about__title'>
									{about.title} <br />
									онлайн магазин
								</h2>
								<div className='about__text'>
									<div className='about-desc'>
										<p>{about.desc}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			))}
		</>
	)
}

export default About
