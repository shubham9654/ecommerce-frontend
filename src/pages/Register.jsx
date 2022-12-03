import { Close } from "@mui/icons-material"
import { Link } from "react-router-dom"

const Register = () => {
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
          <form className="flex flex-col">
            <span className="font-medium text-[13px]">Name</span>
            <input
              className="text-[14px] mb-5 py-0.5 px-1 w-full focus:outline-none border-solid border-2 outline-slate-400"
              placeholder="first and last name"
            />
            <span className="font-medium text-[13px]">Username</span>
            <input
              className="text-[14px] mb-5 py-0.5 px-1 w-full focus:outline-none border-solid border-2 outline-slate-400"
              placeholder="username"
            />
            <span className="font-medium text-[13px]">Email</span>
            <input
              className="text-[14px] mb-5 py-0.5 px-1 w-full focus:outline-none border-solid border-2 outline-slate-400"
              placeholder="enter email address"
            />
            <span className="font-medium text-[13px]">Password</span>
            <input
              className="text-[14px] mb-5 py-0.5 px-1 w-full focus:outline-none border-solid border-2 outline-slate-400"
              placeholder="atleast 6 character"
            />
            <span className="font-medium text-[13px]">Confirm Password</span>
            <input
              className="text-[14px] py-0.5 px-1 w-full focus:outline-none border-solid border-2 outline-slate-400"
              placeholder="enter confirm password"
            />
            <span className="my-5 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quam excepturi consequatur accusantium fuga maxime.
            </span>
            <button className="py-2 px-5 bg-teal-600 text-white">CREATE</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register