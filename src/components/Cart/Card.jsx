import React from 'react'

import { HiTrash, HiOutlineHeart, HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'

import images from '../../assets/images'

import './Card.sass'

const Cart = () => {
	return (
		<section className='cart'>
			<div className='container'>
				<div className='cart-grid'>
					<div className='cart-items'>
						<div className='cart-item'>
							<img src={images.cart} alt='' className='cart-item__img' />
							<p className='cart-item__name text'> Martina Marini</p>
							<div className='cart-item__quantity'>
								<p className='text'>Колличество:</p>
								<button type='button' className='btn btn--quantity  btn--quantity-cart'>
									<HiOutlineMinus />
								</button>
								<input type='text' name='quantity' className='cart-item__input' value='1' />
								<button type='button' className='btn btn--quantity btn--quantity-cart'>
									<HiOutlinePlus />
								</button>
							</div>
							<div className='cart-item__price'>
								<p className='cart-item__price-text text'>Цена</p>
								<p className='cart-item__price-number text'>₽2500</p>
							</div>
							<div className='cart-item__buttons'>
								<HiOutlineHeart />
								<HiTrash />
							</div>
						</div>
					</div>
					<div className='cart-checkout'>
						<h2 className='cart-checkout__title'>Сумма заказа</h2>
						<p className='cart-checkout__num'>10000р.</p>
						<button className='btn btn--cart-buy'>Перейти к оплате</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Cart
