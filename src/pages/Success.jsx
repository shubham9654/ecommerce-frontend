import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateProductToCartAction } from "../store/actions/cart.action";

const Success = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(updateProductToCartAction({
      products: [],
      cartQuantity: 0,
      totalPrice: 0
    }));
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, []);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
    >
      
      <span>Successfull. Your order is being prepared...</span>
      <Link to="/">
        <button
          className="p-2.5 m-5"
        >
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Success;