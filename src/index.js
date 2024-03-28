import React from 'react'
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root')

const root = ReactDOM.createRoot(el)

function App() {
  const messages =["Hello", "World!"]

  return <h1>{messages}</h1>
}

root.render(<App />)