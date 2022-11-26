import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

const Product = ({ item }) => {
  return (
    <div className="flex-[1] m-[5px] h-[350px] flex flex-col items-center justify-center bg-[#f5fbfd] relative" style={{ minWidth: "280px" }}>
      <div className="w-[200px] h-[200px] rounded-full bg-white absolute"></div>
      <img className="h-3/4 z-10" alt="product_img" src={item.img} />
      <div
        className="info w-full h-full top-0 left-0 flex items-center justify-center absolute bg-[rgba(0,0,0,0.2)] z-20 opacity-0 hover:opacity-100 cursor-pointer"
        style={{ transition: "all 0.5s ease"}}
      >
        <span
          className="h-10 w-10 rounded-full bg-white flex items-center justify-center m-2.5 hover:bg-[#e9f5f5] hover:scale-[1.1]"
          style={{ transition: "all 0.5s ease"}}
        >
          <ShoppingCartOutlined  />
        </span>
        <span
          className="h-10 w-10 rounded-full bg-white flex items-center justify-center m-2.5 hover:bg-[#e9f5f5] hover:scale-[1.1]"
          style={{ transition: "all 0.5s ease"}}
        >
          <SearchOutlined />
        </span>
        <span
          className="h-10 w-10 rounded-full bg-white flex items-center justify-center m-2.5 hover:bg-[#e9f5f5] hover:scale-[1.1]"
          style={{ transition: "all 0.5s ease"}}
        >
          <FavoriteBorderOutlined  />
        </span>


      </div>
    </div>
  )
};

export default Product;
