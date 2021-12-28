import ReactDOM from 'react-dom'
import Pet from './Pet'

const App = () => {
  return(
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Mike" animal="Dog" breed="Maltes" />
      <Pet name="Pandora" animal="Cat" breed="Angora" />
      <Pet name="Scar" animal="Cat" breed="Maltes" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))