import React from 'react'
import Routing from "./Routing/Routing"
import Loader from "./Common/Loader"

const App = () => {
  return (
    <div>
      <Loader />
      <Routing/>
    </div>
  )
}

export default App