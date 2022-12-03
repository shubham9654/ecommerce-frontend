import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from "../store/actions/product.action";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Homepage = () => {
  const myRef = useRef(null);
  const dispatch = useDispatch();
  const allProductFromStore  = useSelector(state => state?.products?.allProducts || []);

  useEffect(() => {
    dispatch(getAllProductsAction({ }));
  }, []);

  const executeScroll = () => myRef.current.scrollIntoView()    

  return (
    <>
      <Announcement />
      <Navbar />
      <Slider executeScroll={executeScroll} />
      <Categories />
      <Products refDiv={myRef} allProducts={allProductFromStore} />
      <Newsletter />
      <Footer />
    </>
  )
};

export default Homepage;
