import React from 'react'
import image from '../../assets/logo/02.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className=" flex items-center justify-between bg-[#ebe9e9] mb-[20px]">

                <div className="">
                    <a className="btn btn-link text-xl"><img src={image} alt="Logo" className='w-[170px] ml-[180px] absolute' /></a>

                </div>
                <div>
                    <ul className='flex items-center justify-center gap-[40px]'>
                        <li><Link to={'/'} className='text-lg text-[#000] font-bold'>Home</Link></li>
                        <li><Link to={'/clothes'} className='text-lg text-[#000] font-bold'>Clothes</Link></li>
                        <li><Link to={'/electronics'} className='text-lg text-[#000] font-bold'>Electronics</Link></li>
                        <li><Link to={'/furniture'} className='text-lg text-[#000] font-bold'>Furniture</Link></li>
                        <li><Link to={'/miscellaneous'} className='text-lg text-[#000] font-bold'>Miscellaneous</Link></li>
                        <li><Link to={'/shoes'} className='text-lg text-[#000] font-bold'>Shoes</Link></li>
                    </ul>
                </div>
                <div className="">
                    <div className="dropdown dropdown-end text-[#000]">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">0</span>
                            </div>

                        </div>

                    </div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>

                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#000] text-[#fff] rounded-box w-52">
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar