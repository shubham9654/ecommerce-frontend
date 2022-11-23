import { svgAssets } from "../assets/asset";

const Navbar = () => {
  return (
    <div className="h-16 ">
      <div className="py-2.5 flex items-center justify-between">
        <div className="flex-[1] flex items-center">
          <img className="w-40" alt="logo" src={svgAssets.logo} />
          <div className="categories ">

          </div>
        </div>
        <div className="flex-[1] flex justify-end">
          <input
            type="text"
            placeholder="search"
            className="border-solid	border-2 p-1"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar;