import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar, Hero, Products, Cart } from './components'

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

		setCart(item.cart)
	}

	const handleUpdateCartQty = async (lineItemId, quantity) => {
		const response = await commerce.cart.update(lineItemId, { quantity })

		setCart(response.cart)
	}

	const handleRemoveFromCart = async (lineItemId) => {
		const response = await commerce.cart.remove(lineItemId)

		setCart(response.cart)
	}

	const handleEmptyCart = async () => {
		const response = await commerce.cart.empty()

		setCart(response.cart)
	}

	const refreshCart = async () => {
		const newCart = await commerce.cart.refresh()

		setCart(newCart)
	}

	useEffect(() => {
		fetchProducts()
		fetchCart()
	}, [])

	console.log(products)

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
								handleUpdateQty={handleUpdateCartQty}
								handleRemoveFromCart={handleRemoveFromCart}
								handleEmptyCart={handleEmptyCart}
							/>
						}></Route>
					<Route
						path='/products'
						element={<Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
