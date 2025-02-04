import { Routes, Route} from 'react-router-dom'
import {Home, Error, Estimate, Contact, About} from './pages'
import axios from 'axios';
axios.defaults.baseURL = 'https://skyline-builders-server.onrender.com'
axios.defaults.withCredentials = true
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path='/estimate' element={<Estimate/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/about-us' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App;
