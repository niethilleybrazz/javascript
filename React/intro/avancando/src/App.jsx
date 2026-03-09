import './App.css'
import image from './assets/image-hat.jpg'
import Data from './components/Data'

function App() {
  return (
      <div className='App'>
        <h1>Avancando em React</h1>
        {/* Imagem em public */}
        <img src="/image.jpg" alt="Cachorro" />
        {/* Imagem em assets */}
        <img src={image} alt="" />
        {/* useState */}
        <Data/>
      </div>
  )
}

export default App
