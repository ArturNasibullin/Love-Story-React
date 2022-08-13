import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar, Product } from './components'
import { Hero, Products, Cart } from './pages'

import './styles/style.sass'

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Hero />}></Route>
					<Route path='/cart' element={<Cart />}></Route>
					<Route path='/products' element={<Products />}></Route>
					<Route path='/product/:productSlug' element={<Product />}></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
