import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Home from '../../screens/home/Home'
import Clothes from '../../screens/clothes/Clothes'
import Electronics from '../../screens/electronics/Electronics'
import Furniture from '../../screens/furniture/Furniture'
import Miscellaneous from '../../screens/miscellaneous/Miscellaneous'
import Shoes from '../../screens/shoes/Shoes'
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes'
import Register from '../../screens/register/Register'
import Login from '../../screens/login/Login'
import Cart from '../../screens/cart/cart'
const Routers = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ProtectedRoutes component={<Home />} />} />
                <Route path='/clothes' element={<ProtectedRoutes component={<Clothes />} />} />
                <Route path='/electronics' element={<ProtectedRoutes component={<Electronics />} />} />
                <Route path='/furniture' element={<ProtectedRoutes component={<Furniture />} />} />
                <Route path='/miscellaneous' element={<ProtectedRoutes component={<Miscellaneous />} />} />
                <Route path='/shoes' element={<ProtectedRoutes component={<Shoes />} />} />
                <Route path='/cart' element={<ProtectedRoutes component={<Cart />} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers