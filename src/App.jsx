import './App.css'
import Reac from "./assets/react.svg"


export default function App() {
  return (
    <header className='barra-de-navegacion'>
        <ul>
          <li>notas</li>
          <li>horario</li>
          <li>bloc</li>
          <li>fotos</li>
        </ul>
        <img src={Reac} alt=""/>
                
    </header>

  )
}


