import React from 'react'
import './Contacts.sass'

const Contacts = () => {
	return (
		<section class='contacts'>
			<div class='container'>
				<div class='section-header'>
					<h1 className='section-header__big'>Контакты</h1>
					<h2 class='section-header__title'>Свяжитесь с нами</h2>
					<div class='section-header__separator'></div>
				</div>
				<div class='contacts-grid'>
					<div class='contacts-item'>
						<h4 class='contacts__subtitle form'>Мы будем рады Вам помочь</h4>
						<form class='contacts-form form' action='mail.php' method='POST'>
							<div class='form__wrap'>
								<input
									class='form__input contacts__input'
									required
									type='text'
									name='user_name'
									id='user_name'
									placeholder='Ваше имя'
								/>
								<input
									class='form__input contacts__input'
									required
									type='email'
									name='user_email'
									id='user_email'
									placeholder='Ваш email'
								/>
								<textarea
									class='form__input contacts__input'
									rows='4'
									name='user_message'
									id='user_message'
									placeholder='Ваше сообщение'></textarea>
								<input type='submit' class='btn btn--form btn--contacts' value='Оправить сообщение' />
							</div>
						</form>
					</div>
					<div class='contacts-item'>
						<h4 class='contacts__subtitle'>Выберете удобный способ связи</h4>
						<div class='contacts-text'>
							<p class='contacts-text__address'>Hemlock Bat, Brooklyn, NY 11214, USA</p>
							<p class='contacts-text__phone'>+321 836 924 208</p>
							<p class='contacts-text__email'>Rosi_lingerie@shop.com</p>
							<p class='contacts-text__schedule'>Monday to Friday: 9am to 8pm Saturday: 10am to 5pm</p>
							<div class='contacts-text__socilals'>
								<a href='#' class='footer-socials__item'>
									<i class='icon-instagram'></i>
								</a>
								<a href='#' class='footer-socials__item'>
									{' '}
									<i class='icon-whatsapp'></i>
								</a>
								<a href='#' class='footer-socials__item'>
									<i class='icon-telegram'></i>
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
