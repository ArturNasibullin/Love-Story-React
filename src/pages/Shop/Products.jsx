import React, { useState, useEffect } from 'react'

import { useQuery } from '@apollo/client'

import { GET_PRODUCTS } from '../../query/products'
import Loader from '../../components/Loader/Loader'

import { Product } from '../../components'
import './Products.sass'

const Products = () => {
	const { loading, data } = useQuery(GET_PRODUCTS)

	const [products, setProducts] = useState([])

	useEffect(() => {
		if (!loading) {
			setProducts(data.products?.edges || [])
		}
	}, [data, loading])

	if (loading) return <Loader />

	return (
		<section className='products'>
			<div className='container'>
				<div className='section-header'>
					<h1 className='section-header__big'>Товары</h1>
					<h2 className='section-header__title'>Наши товары</h2>
					<div className='section-header__separator'></div>
				</div>
				<div className='products-content'>
					{products?.length > 0 && products.map(({ node }) => <Product key={node.id} {...node} />)}
				</div>
			</div>
		</section>
	)
}

export default Products
