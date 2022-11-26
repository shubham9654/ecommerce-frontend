import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Navbar = () => {
  return (
    <div className="h-16 py-2.5 px-10 flex items-center justify-between">
      <div className="flex-[1]">
        <span className="font-bold text-3xl cursor-pointer">E.Com</span>
      </div>
      <div className="flex-[1] flex items-center justify-center ">
        <div className="border-solid border-2 p-1">
          <input
            type="text"
            placeholder="search"
            className=" select-none focus:outline-none outline-slate-400"
          />
          <Search className="text-slate-400" />
        </div>
      </div>
      <div className="flex-[1] flex items-center justify-end">
        <span className="mx-2.5 cursor-pointer text-sm">Register</span>
        <span className="mx-2.5 cursor-pointer text-sm">Sign In</span>
        <span className="mx-2.5 cursor-pointer cart">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </span>
      </div>
    </div>
  )
}

export default Navbar;
