import { Close } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUserAction } from "../store/actions/auth.action";
import { validatePassword, validateUsername } from "../utils/global.helper";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    username: {
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

  const handleLoginInput = ({ type, value }) => {
    setLoginForm({
      ...loginForm,
      [type]: {
        value: value,
        isError: false,
        errorText: ''
      }
    })
  }

  const loginApiCallback = ({ status }) => {
    if (status === 200) {
      navigate('/');
    } else {
      alert('invalid credentials!')
    }
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    let loginPayload = { ...loginForm}
    const isValidUsername = validateUsername(loginForm.username?.value || '');
    const isValidPassword = validatePassword(loginForm.password?.value || '');
    
    if (isValidUsername && isValidPassword) {
      dispatch(loginUserAction({
        username: loginPayload.username.value,
        password: loginPayload.password.value
      }, loginApiCallback))
    } else {
      if (!isValidUsername) {
        loginPayload = {
          ...loginPayload,
          username: {
            ...loginPayload.username,
            isError: true,
            errorText: 'invalid username!'
          }
        }
      }
      if (!isValidPassword) {
        loginPayload = {
          ...loginPayload,
          password: {
            ...loginPayload.password,
            isError: true,
            errorText: 'password should have atleast 6 character!'
          }
        }
      }
      setLoginForm(loginPayload)
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

      <div className="h-screen flex items-center justify-center">
        <div className="p-5 w-96 bg-white rounded-md ms:w-80">
          <h1 className="font-light text-2xl text-normal mb-5">Login</h1>
          <div className="flex flex-col">
            <div className="mb-5">
              <span className="font-medium text-[13px]">Username</span>
              <input
                className="text-[14px] py-0.5 px-1 w-full focus:outline-none border-solid border-2 outline-slate-400"
                placeholder="username"
                value={loginForm.username.value}
                onChange={(e) => handleLoginInput({ type: 'username', value: e.target.value})}
              />
              {
                loginForm.username.isError && (
                <span className="font-medium text-[12px] text-red-400">
                  {loginForm.username.errorText}
                </span>)
              }
            </div>

            <div className="mb-5">
              <span className="font-medium text-[13px]">Password</span>
              <input
                type="password"
                className="font-mono text-[14px] py-0.5 px-1 w-full focus:outline-none border-solid border-2 outline-slate-400"
                placeholder="enter password"
                value={loginForm.password.value}
                onChange={(e) => handleLoginInput({ type: 'password', value: e.target.value})}
              />
              {
                loginForm.password.isError && (
                <span className="font-medium text-[12px] text-red-400">
                  {loginForm.password.errorText}
                </span>)
              }
            </div>

            <button
              className="py-2 px-5 bg-teal-600 text-white mb-5"
              onClick={(event) => handleLoginSubmit(event)}
            >
                LOGIN
            </button>

            <span className=" text-[14px]">
              Don't remember password ?
              <Link to="login" className="underline ml-1.5 text-blue-400">Create new account</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;