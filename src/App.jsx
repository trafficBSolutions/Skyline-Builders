import { Routes, Route} from 'react-router-dom'
import {Home, Error, Estimate} from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path='/estimate' element={<Estimate/>}/>
      </Routes>
    </>
  )
}

export default App;
