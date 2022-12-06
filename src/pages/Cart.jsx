import { Add, AddShoppingCartOutlined, NavigateBeforeOutlined, NavigateNextOutlined, Remove } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { setLoginUserAction } from "../store/actions/auth.action";
import { updateProductToCartAction } from "../store/actions/cart.action";
import { createPaymentAction } from "../store/actions/payment.action";
import { extractNum } from "../utils/global.helper";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartRedux = useSelector(state => state.cart);
  const userRedux = useSelector(state => state.user);

  const [cartUpdate, setCartUpdate] = useState(1);

  const paymentCallback = async () => {
    dispatch(setLoginUserAction({
      userDetails: {},
      accessToken: '',
      isLogin: false
    }))
    navigate('/login')
    alert('invalid token or token expire!')
  }

  const handleCheckout = () => {
    if (userRedux?.isLogin) {
      dispatch(createPaymentAction({
        cartItems: cartRedux.products,
        userId: userRedux.userDetails._id,
        token: userRedux.accessToken
      }, paymentCallback));
    } else {
      navigate('/login')
    }
  }

  const handleCartUpdate = ({ index, inc, desc}) => {
    let myCart = { ...cartRedux }
    if (inc || desc) {
      myCart.products[index].selectedQuantity = myCart.products[index].selectedQuantity + 1 * (inc ? 1 : -1)
      myCart.products[index].totalPrice = myCart.products[index].totalPrice + (extractNum(myCart.products[index].price)) * (inc ? 1 : -1)
      myCart = {
        ...myCart,
        totalPrice: myCart.totalPrice + (extractNum(myCart.products[index].price)) * (inc ? 1 : -1)
      }
    } else {
      myCart = {
        ...myCart,
        cartQuantity: myCart.cartQuantity - 1,
        totalPrice: myCart.totalPrice - extractNum(myCart.products[index].totalPrice)
      }
      myCart.products = myCart.products.filter((item,i) => i !== index)
    }
    dispatch(updateProductToCartAction(myCart));
    setCartUpdate(cartUpdate + 1)
  }

  return (
    <div className="cart_page">
      <Navbar />
      <Announcement />
      <div className="p-5">
        <h1 className="text-3xl font-light text-center">Your Cart</h1>
        {
          cartRedux?.products?.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-5 ms:hidden">
                <button
                  className="p-2.5 font-semibold border-2 border-slate-500 flex items-center"
                  onClick={() => navigate('/products')}
                >
                  <NavigateBeforeOutlined />
                  Continue Shopping
                </button>
                {/* <div className="">
                  <span className="underline mx-2.5 cursor-pointer">Shopping Bag(2)</span>
                  <span className="underline mx-2.5 cursor-pointer">Your whishlist(2)</span>
                </div> */}
                <button
                  className="p-2.5 font-semibold border-2 border-slate-500"
                  onClick={() => handleCheckout()}
                >
                  Checkout Shopping
                  <NavigateNextOutlined />
                </button>
              </div>

              <div className="flex ms:flex-col">
                <div className="flex-[3] ">
                  {
                    cartRedux.products.map((item, index) => (
                      <div key={index}>
                        {
                          index !== 0 && (
                            <div className="bg-slate-300 h-[1px]"></div>
                          )
                        }
                        <div className="flex justify-center ms:flex-col ms:mb-2.5">
                          <div className="w-2/3 flex ms:w-full">
                            <img className="w-[200px] h-[200px]" alt="product_detail_img" src={item.img} />
                            <div className="p-5 flex flex-col justify-around">
                              <span><b>Product: </b>{item.title}</span>
                              <span><b>Quantity: </b>{item?.selectedQuantity || 1}</span>
                              <span className="w-5 h-5 rounded-full bg-slate-400"></span>
                              <span><b>Size: </b> M</span>
                            </div>
                          </div>
                          <div className="w-1/3 flex flex-col items-center justify-center ms:w-full ms:flex-row ms:justify-between">
                            
                            {/* <DeleteOutlined style={{fontSize: 30}} /> */}
                            <div className="flex items-center ">
                              <Remove
                                className="cursor-pointer"
                                onClick = {(e) => item.selectedQuantity > 1 && handleCartUpdate({ index, desc: true })}
                              />
                                <span className="text-2xl mx-1.5">{item?.selectedQuantity || 1}</span>
                              <Add
                                className="cursor-pointer"
                                onClick = {(e) => handleCartUpdate({ index, inc: true })}
                              />
                            </div>
                            <span className="text-3xl font-extralight my-2.5 ms:m-0"> ${item.totalPrice}</span>
                            <span
                              className="cursor-pointer font-medium"
                              onClick = {(e) => handleCartUpdate({ index })}
                            >
                              Remove
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex-[1] border-[0.5px] rounded-[10px] p-5 h-[50vh]">
                  <h1 className="text-3xl font-light">Order Summary</h1>
                  <div className="my-7 flex items-center justify-between">
                    <span>Subtotal</span>
                    <span>$ {cartRedux.totalPrice}</span>
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
                    <span>$ {cartRedux.totalPrice}</span>
                  </div>
                  <button
                    className="p-2.5 border w-full bg-black text-white"
                    onClick={() => handleCheckout()}
                  >
                    Checkout Now
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-80 ms:h-64">
              <Link to="/products" className="w-full h-full flex flex-col items-center justify-center">
                <AddShoppingCartOutlined style={{ fontSize: 60 }} className="mb-1" />
                <span className="cursor-pointer">
                  Click to Add Products
                </span>
              </Link>
            </div>
          )}
      </div>
      {cartRedux?.products?.length === 0 ? (<div className="bg-slate-300 h-[1px]"></div>) : null}
      <Footer />
    </div>
  )
}

export default Cart;
