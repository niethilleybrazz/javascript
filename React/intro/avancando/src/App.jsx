import './App.css'
import image from './assets/image-hat.jpg'
import Data from './components/Data'
import ListRender from './components/ListRender'
import CondicionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Container from './components/Container'
import { Children, useState } from 'react'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

// Renderizacao de listas com componente
const cars = [
  {id: 1, brand: "VW", color:"amarelo", km:"100"},
  {id: 2, brand: "BMW", color:"azul", km:"100"},
  {id: 3, brand: "Mercedes", color:"cinza", km:"100"}
]

function App() {
  // Funcao em prop
  function showMessage() {
    console.log("Clicou")
  } 

  // State Lift
  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
      <div className='App'>
        <h1>Avancando em React</h1>
        {/* Imagem em public */}
        <img src="/image.jpg" alt="Cachorro" />
        {/* Imagem em assets */}
        <img src={image} alt="" />
        {/* useState */}
        <Data />
        {/* Renderizador de lista */}
        <ListRender />
        {/* Renderizador condicional */}
        <CondicionalRender/>
        {/* Props */}
        <ShowUserName name="Niethilley"/>
        {/* Desestruturacao de Prps */}
        <CarDetails brand="BMW" km={2000} color="vermelho"/>
        {/* Reaproveitando componentes */}
        <CarDetails brand="Mercedes" km={3000} color={"azul"}/>
        {/* Renderizacao de lista com componentes */}
        {cars.map((car) => (
          <CarDetails 
            key={car.id} 
            brand={car.brand} 
            color={car.color} 
            km={car.km}/>
        ))}
        <Container>
          <p>Alguma coisa</p>
        </Container>
        {/* Funcao em prop */}
        <ExecuteFunction myFunction={showMessage}/>
        {/* State Lift */}
        <Message msg={message}/>
        <ChangeMessage handleMenssage={handleMessage}/>
      </div>
  )
} 

export default App
