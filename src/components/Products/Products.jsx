import React from 'react'

import Product from './Product/Product'
import './Products.sass'

const Products = ({ products, onAddToCart }) => {
	return (
		<section className='products'>
			<div className='container'>
				<div className='section-header'>
					<h1 className='section-header__big'>Товары</h1>
					<h2 className='section-header__title'>Наши товары</h2>
					<div className='section-header__separator'></div>
				</div>
				<div className='products-content'>
					{products.map((product) => (
						<div className='product-card' key={product.id}>
							<Product product={product} onAddToCart={onAddToCart} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Products
