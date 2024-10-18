import { useState } from 'react'
import './App.css'
import Products from './components/products/products'
import Rendering from './condisonalRendaring/Rendaring'
import EventHandle from './eventsHandle/eventHandle'


function App() {
  const people = {
    name: 'imran',
    phone: '017855444'
  }

  const [data, setData] = useState()


  function person(info) {
    setData(info)
  }

  return (
    <>
      <h1>Fist Conceptual Section React</h1>
      <Products people={people}></Products>
      <EventHandle></EventHandle>
      <Rendering dataReceive={person}></Rendering>
      <h2 style={{ border: '1px solid green', borderRadius: '5px', padding: '10px' }}>Child to Parent data: {data}</h2>
    </>
  )
}

export default App
