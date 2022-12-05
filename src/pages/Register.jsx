import { Close } from "@mui/icons-material"
import { useState } from "react"
import { Link } from "react-router-dom"
import { validateEmail, validateName, validatePassword, validateUsername } from "../utils/global.helper"

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    name: {
      value: '',
      isError: false,
      errorText: ''
    },
    username: {
      value: '',
      isError: false,
      errorText: ''
    },
    email: {
      value: '',
      isError: false,
      errorText: ''
    },
    password: {
      value: '',
      isError: false,
      errorText: ''
    }
  })

  const handleRegisterInput = ({ type, value }) => {
    setRegisterForm({
      ...registerForm,
      [type]: {
        value: value,
        isError: false,
        errorText: ''
      }
    })
  }

  const handleRegisterSubmit = (event) => {
    event.preventDefault()

    let registerPayload = { ...registerForm }
    const isValidName = validateName(registerForm.name?.value || '');
    const isValidUsername = validateUsername(registerForm.username?.value || '');
    const isValidEmail = validateEmail(registerForm.email?.value || '');
    const isValidPassword = validatePassword(registerForm.password?.value || '');
  
    if (isValidName && isValidUsername && isValidEmail && isValidPassword) {
      console.log()
    } else {
      if(!isValidName) {
        registerPayload = {
          ...registerPayload,
          name: {
            ...registerPayload.name,
            isError: true,
            errorText: 'invalid name!'
          }
        }
      }
      if(!isValidUsername) {
        registerPayload = {
          ...registerPayload,
          username: {
            ...registerPayload.username,
            isError: true,
            errorText: 'invalid username!'
          }
        }
      }
      if(!isValidEmail) {
        registerPayload = {
          ...registerPayload,
          email: {
            ...registerPayload.email,
            isError: true,
            errorText: 'invalid email!'
          }
        }
      }
      if(!isValidPassword) {
        registerPayload = {
          ...registerPayload,
          password: {
            ...registerPayload.password,
            isError: true,
            errorText: 'password should have atleast 6 character!'
          }
        }
      }
      setRegisterForm(registerPayload)
    }
  }


  return (
    <div className="login relative">
      <div className="absolute flex items-center justify-between w-screen py-5 px-8">
        <Link to="/">
          <span className="font-bold text-4xl cursor-pointer  ms:text-2xl">
            Ekart
          </span>
        </Link>

        <Link to="/">
          <span className="font-bold text-4xl cursor-pointer  ms:text-2xl">
            <Close fontSize="100" />
          </span>
        </Link>
      </div>

      <div className="w-screen h-screen flex items-center justify-center">
        <div className="p-5 w-96 bg-white rounded-md ms:w-80">
          <h1 className="font-light text-2xl text-normal mb-5">Create Account</h1>
          <div className="flex flex-col">
            <div className="mb-5">
              <span className="font-medium text-[13px]">Name</span>
              <input
                className="text-[14px] py-0.5 px-1 w-full focus:outline-none border-solid border-2 outline-slate-400"
                placeholder="first and last name"
                value={registerForm.name.value}
                onChange={(e) => handleRegisterInput({ type: 'name', value: e.target.value})}
              />
              {
                registerForm.name.isError && (
                <span className="font-medium text-[12px] text-red-400">
                  {registerForm.name.errorText}
                </span>)
              }
            </div>
  
            <div className="mb-5">
              <span className="font-medium text-[13px]">Username</span>
              <input
                className="text-[14px] py-0.5 px-1 w-full focus:outline-none border-solid border-2 outline-slate-400"
                placeholder="username"
                value={registerForm.username.value}
                onChange={(e) => handleRegisterInput({ type: 'username', value: e.target.value})}
              />
              {
                registerForm.username.isError && (
                <span className="font-medium text-[12px] text-red-400">
                  {registerForm.username.errorText}
                </span>)
              }
            </div>

            <div className="mb-5">
              <span className="font-medium text-[13px]">Email</span>
              <input
                className="text-[14px] py-0.5 px-1 w-full focus:outline-none border-solid border-2 outline-slate-400"
                placeholder="enter email address"
                value={registerForm.email.value}
                onChange={(e) => handleRegisterInput({ type: 'email', value: e.target.value})}
              />
              {
                registerForm.email.isError && (
                <span className="font-medium text-[12px] text-red-400">
                  {registerForm.email.errorText}
                </span>)
              }
            </div>

            <div className="mb-5">
              <span className="font-medium text-[13px]">Password</span>
              <input
                className="text-[14px] py-0.5 px-1 w-full focus:outline-none border-solid border-2 outline-slate-400"
                placeholder="atleast 6 character"
                value={registerForm.password.value}
                onChange={(e) => handleRegisterInput({ type: 'password', value: e.target.value})}
              />
              {
                registerForm.password.isError && (
                <span className="font-medium text-[12px] text-red-400">
                  {registerForm.password.errorText}
                </span>)
              }
            </div>

            <button
              className="py-2 px-5 bg-teal-600 text-white mb-2.5"
              onClick={(event) => handleRegisterSubmit(event)}
            >
              CREATE
            </button>

            <span className=" text-[14px]">
              Already have an account ?
              <Link to="login" className="underline ml-1.5 text-blue-400">Login</Link>
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Register