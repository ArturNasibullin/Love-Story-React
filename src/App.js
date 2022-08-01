import { HeroSlider, Navbar } from './components'
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
		</div>
	)
}

export default App
