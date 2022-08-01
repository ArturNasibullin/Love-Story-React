import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.sass'
import images from '../../assets/images'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)

	return (
		<nav className='navbar'>
			<div className='container'>
				<div className='navbar-grid'>
					<div className='navbar-logo logo'>
						<img src={images.logo} alt='logo' />
					</div>
					<ul className='navbar-links'>
						{['Главная', 'О нас', 'Блог', 'Магазин', 'Контакты'].map((item) => (
							<li className='navbar-links__item' key={`link-${item}`}>
								<a href={`#${item}`}>{item}</a>
							</li>
						))}
					</ul>
					<div className='navbar-menu'>
						<HiMenu
							onClick={() => {
								setToggle(true)
							}}
						/>
						{toggle && (
							<motion.div whileInView={{ x: [100, 0] }} transition={{ duration: 0.8, ease: 'easeOut' }}>
								<HiX onClick={() => setToggle(false)} />
								<ul>
									{['Главная', 'О нас', 'Блог', 'Магазин', 'Контакты'].map((item) => (
										<li key={item}>
											<a href={`#${item}`} onClick={() => setToggle(false)}>
												{item}
											</a>
										</li>
									))}
								</ul>
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
