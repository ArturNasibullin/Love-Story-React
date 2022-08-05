import React from 'react'
import './Contacts.sass'

const Contacts = () => {
	return (
		<section className='contacts'>
			<div className='container'>
				<div className='section-header'>
					<h1 className='section-header__big'>Контакты</h1>
					<h2 className='section-header__title'>Свяжитесь с нами</h2>
					<div className='section-header__separator'></div>
				</div>
				<div className='contacts-grid'>
					<div className='contacts-item'>
						<h4 className='contacts__subtitle form'>Мы будем рады Вам помочь</h4>
						<form className='contacts-form form' action='mail.php' method='POST'>
							<div className='form__wrap'>
								<input
									className='form__input contacts__input'
									required
									type='text'
									name='user_name'
									id='user_name'
									placeholder='Ваше имя'
								/>
								<input
									className='form__input contacts__input'
									required
									type='email'
									name='user_email'
									id='user_email'
									placeholder='Ваш email'
								/>
								<textarea
									className='form__input contacts__input'
									rows='4'
									name='user_message'
									id='user_message'
									placeholder='Ваше сообщение'></textarea>
								<input type='submit' className='btn btn--form btn--contacts' value='Оправить сообщение' />
							</div>
						</form>
					</div>
					<div className='contacts-item'>
						<h4 className='contacts__subtitle'>Выберете удобный способ связи</h4>
						<div className='contacts-text'>
							<p className='contacts-text__address'>Hemlock Bat, Brooklyn, NY 11214, USA</p>
							<p className='contacts-text__phone'>+321 836 924 208</p>
							<p className='contacts-text__email'>Rosi_lingerie@shop.com</p>
							<p className='contacts-text__schedule'>Monday to Friday: 9am to 8pm Saturday: 10am to 5pm</p>
							<div className='contacts-text__socilals'>
								<a href='#' className='footer-socials__item'>
									<i className='icon-instagram'></i>
								</a>
								<a href='#' className='footer-socials__item'>
									{' '}
									<i className='icon-whatsapp'></i>
								</a>
								<a href='#' className='footer-socials__item'>
									<i className='icon-telegram'></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contacts
