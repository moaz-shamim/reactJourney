import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  const userName = "moaz"
  return (
    <div>
      <h1>{userName}</h1>
      <h2>Custom App|Chai aur code</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt at eos quibusdam nemo asperiores, sapiente est in quis quas tenetur labore error dolorum perspiciatis delectus.</p>
    </div>
  )
}



// const ReactElement = {
//   type: 'a',
//   properties: {
//       href : 'https://google.com',
//       target : '_blank' 
//   },
//   children: 'Click me to visit google'    
// }


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  { href : "https://google.com" },
  'Click me to visit Google via object'
)

const ReactElement = React.createElement(
  'img',
  {
    src: 'https://source.unsplash.com/user/wsanter',
    alt: 'Disc of image',
  }
)



ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <App />
  // <MyApp />

  //  MyApp()

  reactElement
  //  ReactElement
  // <ReactElement/>
  // anotherElement
  // <anotherElement/>


)


/*
What is React.createElement()?
React.createElement() is a method provided by React that allows you to create React elements programmatically using JavaScript.

React.createElement() is a method used to create React elements in your code. It takes the type of element, optional properties (props), and optional children as arguments, and returns a React element that represents the desired UI element. This method is essential for building React applications and composing UI components in a declarative manner.
*/