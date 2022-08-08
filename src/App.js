import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar, Hero, Products, Cart } from './components'

import { commerce } from './lib/commerce'
import './styles/style.sass'

function App() {
	const [products, setProducts] = useState([])
	const [cart, setCart] = useState({})

	const fetchProducts = async () => {
		const response = await commerce.products.list()

		setProducts((response && response.data) || [])
	}

	const fetchCart = async () => {
		const response = await commerce.cart.retrieve()
		setCart(response)
	}

	const handleAddToCart = async (productId, quantity) => {
		const response = await commerce.cart.add(productId, quantity)

		setCart(response.cart)
	}

	const handleUpdateQty = async (productId, quantity) => {
		const response = await commerce.cart.update(productId, { quantity })

		setCart(response.cart)
	}

	const handleRemoveFromCart = async (productId) => {
		const response = await commerce.cart.remove(productId)

		setCart(response.cart)
	}

	const handleEmptyCart = async () => {
		const response = await commerce.cart.empty()

		setCart(response.cart)
	}

	useEffect(() => {
		fetchProducts()
		fetchCart()
	}, [])

	console.log(cart)

	return (
		<Router>
			<div className='App'>
				<Navbar totalItems={cart.total_items} />
				<Routes>
					<Route path='/' element={<Hero />}></Route>
					<Route
						path='/cart'
						element={
							<Cart
								cart={cart}
								handleUpdateQty={handleUpdateQty}
								handleRemoveFromCart={handleRemoveFromCart}
								handleEmptyCart={handleEmptyCart}
							/>
						}></Route>
					<Route path='/products' element={<Products products={products} onAddToCart={handleAddToCart} />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
