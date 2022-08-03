import { Navbar, HeroSlider, Advantages, About, Trand } from './components'
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
		</div>
	)
}

export default App
