import { Navbar, HeroSlider, Advantages, About } from './components'
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
		</div>
	)
}

export default App
