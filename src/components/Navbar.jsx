import { Link } from "react-router-dom";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Navbar = () => {
  return (
    <div
      className="h-16 py-2.5 px-10 flex items-center justify-between  ms:h-12 ms:px-1"
    >
      <div className="flex-[1]">
        <Link to="/">
          <span className="font-bold text-4xl cursor-pointer  ms:text-2xl">
            Ekart
          </span>
        </Link>
      </div>
      <div className="flex-[1] flex items-center justify-center ">
        <div className="border-solid border-2 p-1">
          <input
            type="text"
            placeholder="search"
            className="select-none focus:outline-none outline-slate-400  ms:w-[50px]"
          />
          <Search className="text-slate-400" />
        </div>
      </div>
      <div className="flex-[1] flex items-center justify-end  ms:justify-center ms:flex-[2]">
        <span className="mx-2.5 cursor-pointer text-sm  ms:text-xs ms:mx-[5px]">Register</span>
        <span className="mx-2.5 cursor-pointer text-sm ms:text-xs ms:mx-[5px]">Sign In</span>
        <span className="mx-2.5 cursor-pointer cart ms:text-xs ms:mx-[5px]">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </span>
      </div>
    </div>
  )
}

export default Navbar;
