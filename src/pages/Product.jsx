import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { addCartAction } from "../store/actions/cart.action";
import { getSingleProductAction } from "../store/actions/product.action";

const Product = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const navigate = useNavigate();
  const productData  = useSelector(state => state.products.selectedProduct);

  // const selected
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    dispatch(getSingleProductAction({ productId }));
  }, [productId]);


  const handleQuantity = ({ type }) => {
    if (type === 'inc') {
      setQuantity(quantity+1)
    } else {
      quantity > 1 && setQuantity(quantity-1)
    }
  };

  const handleAddToCart = () => {
    dispatch(addCartAction({
      product: productData,
      quantity
    }));
    navigate('/cart')
  }

  return (
    <div className="product_page">
      <Navbar />
      <Announcement />
      <div className="p-[50px] flex ms:p-0 ms:flex-col">

        <div className="flex-[1]">
          <img className="w-100 h-[70vh] ms:h-full" alt="product_image" src={productData.img} />
        </div>
    
        <div className="flex-[1] px-[50px] py-5 ms:px-5">

          <h1 className="text-4xl font-light">{productData.title}</h1>
          <p className="my-5">{productData.desc}</p>
          <span className="font-extralight text-3xl">{productData.price}</span>

          <div className="my-8 w-1/2 flex items-center justify-between ms:w-full">
            <div className="flex items-center">
              <label className="text-xl font-extralight capitalize mr-2.5">Color</label>
              <span className={`w-5 h-5 rounded-full bg-slate-400 mr-2 cursor-pointer`}></span>
              {/* <span className="w-5 h-5 rounded-full bg-gray-400 mr-2 cursor-pointer"></span>
              <span className="w-5 h-5 rounded-full bg-blue-400 mr-2 cursor-pointer"></span> */}
            </div>

            <div className="flex items-center">
              <label className="text-xl font-extralight capitalize mr-2.5">Size</label>
              <select className="border border-gray-500 focus:outline-none p-1.5 cursor-pointer uppercase">
                <option className="uppercase">{productData.size}</option>
                {/* <option className="uppercase">Xl</option>
                <option className="uppercase">L</option>
                <option className="uppercase">M</option> */}
              </select>
            </div>

          </div>

          <div className="flex items-center justify-between w-1/2 ms:w-full">
            <div className="flex items-center font-bold	">
              <Remove
                className="cursor-pointer"
                onClick={() => handleQuantity({ type: 'desc'})}
              />
              <span
                className="flex items-center justify-center w-[30px] h-[30px] rounded-lg border border-solid border-teal-500 mx-1.5"
              >
                {quantity}
              </span>
              <Add
                className="cursor-pointer"
                onClick={() => handleQuantity({ type: 'inc'})}
              />
            </div>
            <button
              className="p-2.5 border-2 border-solid border-teal-500 font-medium bg-white hover:bg-slate-100"
              onClick={() => handleAddToCart()}
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Product