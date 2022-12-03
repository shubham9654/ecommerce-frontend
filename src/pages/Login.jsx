import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
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
          <form className="flex flex-col">
            <span className="font-medium text-[13px]">Username</span>
            <input
              className="text-[14px] mb-5 py-0.5 px-1 w-full focus:outline-none border-solid border-2 outline-slate-400"
              placeholder="username"
            />
            <span className="font-medium text-[13px]">Password</span>
            <input
              className="text-[14px] mb-5 py-0.5 px-1 w-full focus:outline-none border-solid border-2 outline-slate-400"
              placeholder="enter password"
            />
            <button className="py-2 px-5 bg-teal-600 text-white mb-2.5">LOGIN</button>
            <span className="text-sm">Don't remember password ?</span>
            <span className="text-sm">Create new account</span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;