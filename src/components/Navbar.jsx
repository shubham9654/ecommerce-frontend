import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { svgAssets } from "../assets/asset";

const Navbar = () => {
  const cartQuantity = useSelector(state => state.cart.cartQuantity);
  const userRedux = useSelector(state => state.user);

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
      <div className="flex-[1] flex items-center justify-end ms:flex-[2] ms:justify-end ">
        {
          userRedux.isLogin ? (
            <>
              <span className="mx-2.5 cursor-pointer cart ms:text-xs ms:mx-[5px]">
                <Link to="/cart">
                  <Badge badgeContent={cartQuantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </Link>
              </span>
              <img className="w-9	h-9 mx-2" alt="profile_avatar" src={svgAssets.avatar}></img>
            </>
          ) : (
            <>
              <span className="mx-2.5 cursor-pointer text-sm  ms:text-xs ms:mx-[5px]">
                <Link to="/register">
                  Register
                </Link>
              </span>
              <span className="mx-2.5 cursor-pointer text-sm ms:text-xs ms:mx-[5px]">
                <Link to="/login">
                  Sign In
                </Link>
              </span>
              <span className="mx-2.5 cursor-pointer cart ms:text-xs ms:mx-[5px]">
                <Link to="/cart">
                  <Badge badgeContent={cartQuantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </Link>
              </span>
            </>
          )}
      </div>
    </div>
  )
}

export default Navbar;
