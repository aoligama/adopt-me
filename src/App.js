import React from 'react'
import ReactDOM from 'react-dom'
import Pet from './Pet'

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { id: 'my-brand' }, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Mike', animal: 'Dog', breed: 'Maltes' }),
    React.createElement(Pet, { name: 'Misty', animal: 'Cat', breed: 'MultiColor' }),
    React.createElement(Pet, { name: 'Scar', animal: 'Cat', breed: 'Angora' }),
  ])
}

ReactDOM.render(React.createElement(App, {}, null), document.getElementById('root'))
