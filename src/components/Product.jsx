import React from 'react'

const Product = () => {
	return (
		<div>
			<div className='asd'>
				{trend.images?.map((image) => (
					<img src={urlFor(image).url()} alt={image._key} className='trand-slider-item__img' />
				))}
			</div>
		</div>
	)
}

export default Product
