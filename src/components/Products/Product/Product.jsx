import React from 'react'
import './Product.sass'

const Product = ({ product }) => {
	console.log(product)
	return (
		<>
			<div className='product-img'>
				<img src={product.image.url} alt={product.name} />
				<div className='product-img__border-one'></div>
				<div className='product-img__border-two'></div>
				<div className='product-img__quickview'>
					<span className=''>Смотреть</span>
				</div>
			</div>
			<h2 className='product-name'>{product.name}</h2>
			<p className='product-old_price'>₽ {product.price.raw}</p>
			<p className='product-new_price'>₽ {product.price.raw}</p>
			{/* <p className='product-description text' dangerouslySetInnerHTML={{ __html: product.description }}></p> */}

			<button className='btn btn--add-to-cart product-btn'>Добавить в корзину</button>
		</>
	)
}

export default Product
