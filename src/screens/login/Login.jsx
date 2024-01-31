import React, { useRef, useState } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase/firebaseConfig';

const Login = () => {


    const navigate = useNavigate()

    const [chack, setChack] = useState(false)

    const email = useRef()
    const password = useRef()


    const login = (e) => {
        e.preventDefault();

        chack === true
            ? signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                })
            : console.log('loading..');
    };



    const handleToggle = (e) => {
        setChack(e.target.checked)
        console.log(chack);
    };



    function navigates() {
        navigate('/register')
    }

    return (
        <>
            <div className='flex items-center justify-center h-[91vmin]'>
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Sign In
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to Login.
                    </Typography>
                    <form onSubmit={login} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@gmail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                inputRef={email} required />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Password
                            </Typography>
                            <Input
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                inputRef={password} required />
                        </div>
                        <Checkbox
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <a
                                        href="#"
                                        className="font-medium transition-colors hover:text-gray-900"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                            onChange={handleToggle} />
                        <Button type='submit' className="mt-6" fullWidth>
                            sign In
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <a onClick={navigates} className="font-medium text-gray-900 cursor-pointer">
                                Sign Up
                            </a>
                        </Typography>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default Login