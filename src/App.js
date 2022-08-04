import React, { useState, useEffect } from 'react'

import { Navbar, HeroSlider, Advantages, About, Trand, Promo } from './components'
import { commerce } from './lib/commerce'
import './styles/style.sass'

function App() {
	const [products, setProducts] = useState([])

	const fetchProducts = async () => {
		const { data } = await commerce.products.list()
		setProducts(data)
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	console.log(products)

	return (
		<div className='App'>
			<Navbar />
			<main className='hero'>
				<div className='container'>
					<HeroSlider />
				</div>
			</main>
			<Advantages />
			<About />
			<Trand />
			<Promo />
		</div>
	)
}

export default App
