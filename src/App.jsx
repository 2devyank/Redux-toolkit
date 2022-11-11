import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navd from "./components/Navd"
import Bag from "./pages/Bag"
import Home from "./pages/Home"
import "../src/App.css"

function App() {
  

  return (
  <BrowserRouter>
  <Navd/>
  <Routes>
    <Route path="/" element={<Home/>} exact/>
    <Route path="/Bag" element={<Bag/>} exact/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
