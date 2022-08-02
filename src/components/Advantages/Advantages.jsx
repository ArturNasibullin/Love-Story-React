import React from 'react'
import { FaCar, FaDollarSign, FaLock } from 'react-icons/fa'

import './Advantages.sass'

const Advantages = () => {
	return (
		<>
			<section className='advantages'>
				<div className='container'>
					<div className='advantages-grid'>
						<div className='advantages-item'>
							<p className='advantages-item__icon'>
								<FaCar />
							</p>
							<div className='advantages-item__text'>
								<h3 className='advantages-item__title'>Быстрая доставка</h3>
								<p className='advantages-item__subtitle'>По всей России</p>
							</div>
						</div>
						<div className='advantages-item'>
							<p className='advantages-item__icon'>
								<FaDollarSign />
							</p>
							<div className='advantages-item__text'>
								<h3 className='advantages-item__title'>Возврат денег</h3>
								<p className='advantages-item__subtitle'>В течение 14 дней</p>
							</div>
						</div>
						<div className='advantages-item'>
							<p className='advantages-item__icon'>
								<FaLock />
							</p>
							<div className='advantages-item__text'>
								<h3 className='advantages-item__title'>Безопасные платежи</h3>
								<p className='advantages-item__subtitle'>На различных платформах</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Advantages
