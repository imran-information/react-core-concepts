import { useState } from 'react'
import './App.css'
import Products from './components/products/products'
import EventHandle from './eventsHandle/eventHandle'


function App() {
  const people = {
    name: 'imran',
    phone: '017855444'
  }

  const [state, setState] = useState(0)

  // function person(info) {
  //   console.log(info);
  // }

  return (
    <>
      <h1>Fist Conceptual Section React</h1>
      <Products people={people}></Products>
      <EventHandle></EventHandle>
    </>
  )
}

export default App
