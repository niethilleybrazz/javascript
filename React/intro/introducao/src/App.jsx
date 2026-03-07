import './App.css'

// Firt component imporattion 
import FirstComponent from './components/FirstComponent'

// Template expression importation
import TemplateExpression from './components/TemplateExpression'

//Events importation
import Events from './components/Events'

//Render Function 
import RenderFunction from './components/RenderFunction'

function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <FirstComponent/>  
      <TemplateExpression/>
      <Events/>
      <RenderFunction/>
    </div>
  )
}

export default App
