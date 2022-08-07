import React from 'react'

import { HiTrash, HiOutlineHeart, HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'

import './Cart.sass'

const Cart = ({ cart }) => {
	const EmptyCart = () => <h2>У Вас нет товаров в корзине! Добавьте их сейчас!</h2>

	const CartCheckout = () => (
		<div className='cart-checkout'>
			<h2 className='cart-checkout__title'>Сумма заказа</h2>
			{/* <p className='cart-checkout__num'>{item.line_total.raw}</p> */}
			<button className='btn btn--cart-buy'>Перейти к оплате</button>
		</div>
	)

	const FilledCart = () => (
		<>
			<div className='cart-grid'>
				{cart.line_items.map((item) => (
					<>
						<div className='cart-item' key={item.id}>
							<img src={item.image.url} alt={item.name} className='cart-item__img' />
							<p className='cart-item__name text'> {item.name}</p>
							<div className='cart-item__quantity'>
								<p className='cart-item__quantity-text text'>Колличество:</p>
								<button type='button' className='btn btn--quantity  btn--quantity-cart'>
									<HiOutlineMinus />
								</button>
								<p className='cart-item__quantity-num'>{item.quantity} </p>
								<button type='button' className='btn btn--quantity btn--quantity-cart'>
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
								<button type='button'>
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
