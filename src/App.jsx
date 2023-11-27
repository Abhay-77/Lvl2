import './App.css'
import Feed from './Pages/Feed'
import Navbar from './component/navbar'
// import Add from './Pages/Addconfession'
import Confession from './component/confessionCard'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Addconfession from './Pages/Addconfession'
function App() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Feed />}/>
          <Route path="/add" element={<Addconfession />}/>
        </Routes> 
          {/* <Confession /> */}
      </BrowserRouter>

    </>
  )
}

export default App

