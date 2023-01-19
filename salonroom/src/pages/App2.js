import React from 'react'
import { Router, Route, Link } from 'react-router-dom'
import About from './About'
import HairStyles2 from './HairStyles2'

const App2 = () => {
  return (
    <>

    <div className='App2'>
      {/* <BrowserRouter> */}
        <Router>
          <div>

            <Link to="/">Ir a la nueva página</Link>
            <Link to="/HairStyles2">Ir a la nueva página</Link>

            <Route exact path="/" component={About} />
            <Route exact path="/Hairstyles2" component={HairStyles2} />
            </div>
        </Router>


       </div>
        </>

  )
}

export default App2