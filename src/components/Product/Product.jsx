import React from 'react'
import './Product.sass'

const Product = ({ id, name, thumbnail, pricing, slug }) => {
	// console.log(thumbnail)
	const lowestPrice = pricing?.priceRange?.start?.gross.amount ?? 0
	const highestPrice = pricing?.priceRange?.stop?.gross.amount ?? 0
	return (
		<div className='product-card' key={id}>
			<div className='product-img'>
				<img src={thumbnail?.url} alt={name} />
				<div className='product-img__border-one'></div>
				<div className='product-img__border-two'></div>
				<a href={`products/${slug}`} className='product-img__quickview'>
					<span className=''>Смотреть</span>
				</a>
			</div>
			<h2 className='product-name'>{name}</h2>
			{/* <p className='product-old_price'>₽ {pricing.priceRange.stop.gross.amount}</p> */}
			<p className='product-new_price'>
				₽ {lowestPrice === highestPrice ? highestPrice : `${lowestPrice} - ${highestPrice}`}
			</p>
			{/* <p className='product-description text' dangerouslySetInnerHTML={{ __html: product.description }}></p> */}

			<button className='btn btn--add-to-cart product-btn'>Добавить в корзину</button>
		</div>
	)
}

export default Product
