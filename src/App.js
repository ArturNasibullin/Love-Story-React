import { Navbar, HeroSlider, Advantages, About, Trand, Promo, Contacts } from './components'
import './styles/style.sass'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<main className='hero'>
				<div className='container'>
					<HeroSlider />
				</div>
			</main>
			<Advantages />
			<About />
			<Trand />
			<Promo />
			<Contacts />
		</div>
	)
}

export default App
