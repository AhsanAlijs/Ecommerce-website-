import React, { useRef, useState } from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../config/firebase/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

const Register = () => {


  const navigate = useNavigate()

  const [chack, setChack] = useState(false)

  function navigates() {
    navigate('/login')
  }

  const names = useRef()
  const email = useRef()
  const password = useRef()

  const registerUser = (event) => {
    event.preventDefault()
    {


      chack === true
        ? (
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then(async (userCredential) => {
              const user = userCredential.user;
              try {
                const docRef = await addDoc(collection(db, "users"), {
                  name: names.current.value,
                  email: email.current.value,
                  uid: user.uid
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
              console.log(user.uid);
              navigate('/login')
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
            })
        )
        : console.log("Loading...");
    }
  }
  const handleToggle = (e) => {
    setChack(e.target.checked)
    console.log(chack);
  };

  return (
    <div className='flex items-center justify-center mt-[100px] pb-[100px]'>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form onSubmit={registerUser} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="example_name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              inputRef={names} />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              inputRef={email} />
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
              inputRef={password} />
          </div>
          <Checkbox
            onChange={handleToggle}
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
          />
          <Button className="mt-6" fullWidth type='submit'>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center cursor-pointer font-normal">
            Already have an account?{" "}
            <a onClick={navigates} className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  )
}

export default Register