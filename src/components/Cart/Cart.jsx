import React from 'react'

import { HiTrash, HiOutlineHeart, HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import './Cart.sass'

const Cart = ({ cart, handleUpdateQty, handleRemoveFromCart, handleEmptyCart }) => {
	const EmptyCart = () => (
		<h2>
			У Вас нет товаров в корзине.{' '}
			<Link to='/' className='text'>
				Добавьте их сейчас!
			</Link>
		</h2>
	)

	const CartCheckout = (cart) => (
		<div className='cart-checkout'>
			<h2 className='cart-checkout__title'>Сумма заказа</h2>
			{/* <p className='cart-checkout__num'>{cart.subtotal.raw}</p> */}
			<button className='btn btn--cart-buy'>Перейти к оплате</button>
		</div>
	)

	const FilledCart = () => (
		<>
			<div className='cart-grid'>
				{cart?.line_items.map((item) => (
					<>
						<div className='cart-item' key={item.id}>
							<img src={item.image.url} alt={item.name} className='cart-item__img' />
							<p className='cart-item__name text'> {item.name}</p>
							<div className='cart-item__quantity'>
								<p className='cart-item__quantity-text text'>Колличество:</p>
								<button
									type='button'
									className='btn btn--quantity  btn--quantity-cart'
									onClick={() => handleUpdateQty(item.id, item.quantity - 1)}>
									<HiOutlineMinus />
								</button>
								<p className='cart-item__quantity-num'>{item.quantity} </p>
								<button
									type='button'
									className='btn btn--quantity btn--quantity-cart'
									onClick={() => handleUpdateQty(item.id, item.quantity + 1)}>
									<HiOutlinePlus />
								</button>
							</div>
							<div className='cart-item__price'>
								<p className='cart-item__price-text text'>Цена</p>
								<p className='cart-item__price-num text'>₽ {item.price.raw}</p>
							</div>
							<div className='cart-item__buttons'>
								<button type='button' className=''>
									<HiOutlineHeart />
								</button>
								<button type='button' onClick={() => handleRemoveFromCart(item.id)}>
									<HiTrash />
								</button>
							</div>
						</div>
					</>
				))}
			</div>
		</>
	)

	if (!cart.line_items) return 'Loading...'

	return (
		<section className='cart'>
			<div className='container'>{cart.line_items.lenght ? <EmptyCart /> : <FilledCart />}</div>
		</section>
	)
}

export default Cart
