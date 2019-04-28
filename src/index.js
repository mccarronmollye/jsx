//Import the React and ReactDOM Libraries
import React from 'react'
import ReactDOM from 'react-dom'

//Create a react component
const App = () => {

  const buttonText = { text: 'Click me!'}
  const style = {backgroundColor: 'blue', color: 'white'}
  const labelText = 'Enter Name:'

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text"/>
      <button style={style}>
        {buttonText.text}
      </button>
    </div>
  ) //referensing js variable not an object
}

// Rake the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
