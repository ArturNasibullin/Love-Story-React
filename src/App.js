import { Navbar, HeroSlider, Advantages, About, Trand, Promo } from './components'
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
		</div>
	)
}

export default App
