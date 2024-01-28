import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

const ProtectedRoutes = ({ component }) => {

    const navigate = useNavigate()
    const [isUser, setIsUser] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login')
                return
            }
            setIsUser(true)
        })
    }, [])

    return (
        isUser ?
            component : <>
                <div className='flex items-center justify-center h-[90.5vmin]'>
                    <h1><span className="loading loading-infinity loading-lg text-[#426ea1]"></span></h1>
                </div></>
    )
}

export default ProtectedRoutes