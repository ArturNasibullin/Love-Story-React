import React, { useState, useEffect } from 'react'

import { Navbar, HeroSlider, Advantages, About, Trand, Promo, Contacts, Products, Cart } from './components'

import { commerce } from './lib/commerce'
import './styles/style.sass'

function App() {
	const [products, setProducts] = useState([])
	const [cart, setCart] = useState({})

	const fetchProducts = async () => {
		const { data } = await commerce.products.list()
		setProducts(data)
	}

	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve())
	}

	const handleAddToCart = async (productId, quantity) => {
		const item = await commerce.cart.add(productId, quantity)

		setCart(item)
	}

	useEffect(() => {
		fetchProducts()
		fetchCart()
	}, [])

	console.log(cart)

	return (
		<div className='App'>
			<Navbar totalItems={cart.total_items} />
			<main className='hero'>
				<div className='container'>
					<HeroSlider />
				</div>
			</main>
			<Cart />
			<Advantages />
			<Products products={products} onAddToCart={handleAddToCart} />
			<About />
			<Trand />
			<Promo />
			<Contacts />
		</div>
	)
}

export default App
