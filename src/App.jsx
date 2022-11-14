import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navd from "./components/Navd"
import Bag from "./pages/Bag"
import Home from "./pages/Home"
import "../src/App.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { calculatetotal } from "./features/bag/bag"

function App() {
  const {totalcart}=useSelector((store)=>store.bag)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(calculatetotal());
  },[totalcart])

  return (
  <BrowserRouter>
  <Navd/>
  <Routes>
    <Route path="/" element={<Home/>} exact/>
    <Route path="/bag" element={<Bag/>} exact/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
