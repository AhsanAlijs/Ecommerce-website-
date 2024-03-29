import React, { useState } from 'react'
import image from '../../assets/logo/02.png'
import { Link } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../config/firebase/firebaseConfig';
const Navbar = () => {
    const [hide, setHide] = useState(false)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            // console.log(uid);
            setHide(true)
        } else {
            // User is signed out
            setHide(false)
            // ...
        }
    });
    function logOut() {
        signOut(auth).then(() => {
            console.log('log out hogaya');
        }).catch((error) => {
            console.log(error);
        });
    }

    const [arry, setArry] = useState(['ali', 'l', 'p', 'p'])

    return (
        <>
            <div className=" flex items-center justify-between bg-[#ebe9e9] mb-[20px]">
                <div className="">
                    <a className="btn btn-link text-xl"><img src={image} alt="Logo" className='w-[170px] ml-[180px] absolute' /></a>
                </div>
                <div className='max-w'>
                    {hide === true ? <ul className='flex items-center justify-center gap-[40px]'>
                        <li><Link to={'/'} className='text-lg text-[#000] font-bold'>All Products</Link></li>
                        <li><Link to={'/clothes'} className='text-lg text-[#000] font-bold'>Clothes</Link></li>
                        <li><Link to={'/electronics'} className='text-lg text-[#000] font-bold'>Electronics</Link></li>
                        <li><Link to={'/furniture'} className='text-lg text-[#000] font-bold'>Furniture</Link></li>
                        <li><Link to={'/miscellaneous'} className='text-lg text-[#000] font-bold'>Miscellaneous</Link></li>
                        <li><Link to={'/shoes'} className='text-lg text-[#000] font-bold'>Shoes</Link></li>
                    </ul> : <>
                    </>}
                </div>
                <div className="">
                    <div className="dropdown dropdown-end text-[#000]">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <Link to={'/cart'}><div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className=" w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className=" bg-[#000] text-[white] p-[2px] rounded-full indicator-item">{arry.length}</span>
                            </div></Link>

                        </div>

                    </div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>

                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#000] text-[#fff] rounded-box w-52">
                            {hide === false ?
                                <div>
                                    <li><Link to={'/register'}>Register</Link></li>
                                    <li><Link to={'/login'}>Login</Link></li>

                                </div>
                                : <>
                                    <li><a onClick={logOut}>Logout</a></li>
                                </>}
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar