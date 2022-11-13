import { BrowserRouter,  Route, Routes } from "react-router-dom"
import { ViewProduct } from "../Components/App/UI/ViewProduct/ViewProduct"
import { Home } from "../Components/App/User/Home/Home"


import { Store } from "../Components/App/User/Store/Store"
import { StoreAccesories } from "../Components/App/User/Store/StoreAccesories"
import { Login } from "../Components/Auth/Login/Login"
import { Register } from "../Components/Auth/Register/Register"

import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
export const AppRouter = () => {


  return (

    <BrowserRouter>

      <Routes>
        <Route path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />
        <Route path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>} />
        <Route path="/homeuser"
          element={
              <Home />
            } />
            <Route path="/*"
          element={
              <Home />
            } />
        <Route path="/product"
          element={
            <PrivateRoute>
              <ViewProduct />
            </PrivateRoute>} />
        <Route path="/store"
          element={
            <PrivateRoute>
              <Store />
            </PrivateRoute>}
        />
        <Route path="/storeaccesories"
          element={
            <PrivateRoute>
              <StoreAccesories />
            </PrivateRoute>}
        />
      </Routes>


    </BrowserRouter>
  )

}
