import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { HiMenu, HiX, HiShoppingCart } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.sass'
import images from '../../assets/images'

const Navbar = ({ totalItems }) => {
	const [toggle, setToggle] = useState(false)

	return (
		<nav className='navbar'>
			<div className='container'>
				<div className='navbar-grid'>
					<div className='navbar-logo logo'>
						<img src={images.logo} alt='logo' />
					</div>
					<ul className='navbar-links'>
						<Link to='/' className='navbar-links__item'>
							Главная
						</Link>
						<Link to='/about' className='navbar-links__item'>
							О нас
						</Link>
						<Link to='/blog' className='navbar-links__item'>
							Блог
						</Link>
						<Link to='/products' className='navbar-links__item'>
							Магазин
						</Link>
						<Link to='/contacts' className='navbar-links__item'>
							Контакты
						</Link>
					</ul>
					<div className='navbar-cart'>
						<Link to='cart'>
							<HiShoppingCart />
							<span>корзина</span>
						</Link>
						<span className='navbar-cart_badge'>{totalItems}</span>
					</div>
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
