import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Home from '../../screens/home/Home'
import Clothes from '../../screens/clothes/Clothes'
import Electronics from '../../screens/electronics/Electronics'
import Furniture from '../../screens/furniture/Furniture'
import Miscellaneous from '../../screens/miscellaneous/Miscellaneous'
import Shoes from '../../screens/shoes/Shoes'
const Routers = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/clothes' element={<Clothes />} />
                <Route path='/electronics' element={<Electronics />} />
                <Route path='/furniture' element={<Furniture />} />
                <Route path='/miscellaneous' element={<Miscellaneous />} />
                <Route path='/shoes' element={<Shoes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers