import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../Components/Auth/Login/Login"
import { Register } from "../Components/Auth/Register/Register"

export const AppRouter = () => {

  return (

    <BrowserRouter>

    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Register/>}/>
    </Routes>
  
    
    </BrowserRouter>
  )
}
