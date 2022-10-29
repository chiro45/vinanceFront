import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Components/App/User/Home/Home"
import { Product } from "../Components/App/User/Product/Product"

import { Store } from "../Components/App/User/Store/Store"
import { Login } from "../Components/Auth/Login/Login"
import { Register } from "../Components/Auth/Register/Register"

export const AppRouter = () => {

  return (

    <BrowserRouter>

    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/homeuser" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="*" element={<Register/>}/>
    </Routes>
  
    
    </BrowserRouter>
  )
}
