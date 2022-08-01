import React from 'react'
import { FaCar, FaDollarSign, FaLock } from 'react-icons/fa'

import './Advantages.sass'

const Advantages = () => {
	return (
		<>
			<section class='advantages'>
				<div class='container'>
					<div class='advantages-grid'>
						<div class='advantages-item'>
							<p class='advantages-item__icon'>
								<FaCar />
							</p>
							<div class='advantages-item__text'>
								<h3 class='advantages-item__title'>Быстрая доставка</h3>
								<p class='advantages-item__subtitle'>По всей России</p>
							</div>
						</div>
						<div class='advantages-item'>
							<p class='advantages-item__icon'>
								<FaDollarSign />
							</p>
							<div class='advantages-item__text'>
								<h3 class='advantages-item__title'>Возврат денег</h3>
								<p class='advantages-item__subtitle'>В течение 14 дней</p>
							</div>
						</div>
						<div class='advantages-item'>
							<p class='advantages-item__icon'>
								<FaLock />
							</p>
							<div class='advantages-item__text'>
								<h3 class='advantages-item__title'>Безопасные платежи</h3>
								<p class='advantages-item__subtitle'>На различных платформах</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Advantages
