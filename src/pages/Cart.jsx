import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { pngAssets } from "../assets/asset";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
  const cartFromState = useSelector(state => state.cart);

  return (
    <div className="cart_page">
      <Navbar />
      <Announcement />
      <div className="p-5">
        <h1 className="text-3xl font-light text-center">Your Cart</h1>

        <div className="flex items-center justify-between mb-5 ms:hidden">
          <button className="p-2.5 font-semibold border-2 border-slate-500">Continue Shopping</button>
          {/* <div className="">
            <span className="underline mx-2.5 cursor-pointer">Shopping Bag(2)</span>
            <span className="underline mx-2.5 cursor-pointer">Your whishlist(2)</span>
          </div> */}
          <button className="p-2.5 font-semibold border-2 border-slate-500">Checkout Shopping</button>
        </div>

        <div className="flex ms:flex-col">
          {
            cartFromState?.products?.length > 0 ? (
              <>
                <div className="flex-[3] ">
                  {
                    cartFromState.products.map((item, index) => (
                      <div key={index}>
                        {
                          index !== 0 && (
                            <div className="bg-slate-300 h-[1px]"></div>
                          )
                        }
                        <div className="flex justify-center ms:flex-col ms:mb-2.5">
                          <div className="flex-2 flex">
                            <img className="w-[200px] h-[200px]" alt="product_detail_img" src={item.img} />
                            <div className="p-5 flex flex-col justify-around">
                              <span><b>Product: </b>{item.title}</span>
                              <span><b>Id: </b>{item._id}</span>
                              <span className="w-5 h-5 rounded-full bg-slate-400"></span>
                              <span><b>Size: </b> M</span>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-center justify-center ms:flex-row ms:justify-between">
                            <div className="flex items-center">
                              {/* <Remove />
                              <span className="text-2xl m-1.5">2</span>
                              <Add /> */}
                            </div>
                            <span className="text-3xl font-extralight"> $22 </span>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>

                <div className="flex-[1] border-[0.5px] rounded-[10px] p-5 h-[50vh]">
                  <h1 className="text-3xl font-light">Order Summary</h1>
                  <div className="my-7 flex items-center justify-between">
                    <span>Subtotal</span>
                    <span>$ {cartFromState.totalPrice}</span>
                  </div>
                  <div className="my-7 flex items-center justify-between">
                    <span>Estimated Shipping</span>
                    <span>$ 5</span>
                  </div>
                  <div className="my-7 flex items-center justify-between">
                    <span>Shipping Discount</span>
                    <span>-$ 5</span>
                  </div>
                  <div className="my-7 flex items-center justify-between text-2xl font-medium">
                    <span>Total</span>
                    <span>$ {cartFromState.totalPrice}</span>
                  </div>
                  <button className="p-2.5 border w-full bg-black text-white">Checkout Now</button>
                </div>
              </>
            ) : (
            <div className="w-full h-72 flex flex-col items-center justify-center ms:h-64">
              <span className="mb-1">
                Cart is Empty!
              </span>
              <Link to="/products">
                <span className="cursor-pointer text-blue-300">
                  Click to Add Products
                </span>
              </Link>
            </div>)}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart;
