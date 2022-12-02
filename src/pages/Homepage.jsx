import { useEffect } from "react";
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
  const dispatch = useDispatch();
  const allProductFromStore  = useSelector(state => state?.products?.allProducts || []);

  useEffect(() => {
    dispatch(getAllProductsAction({ }));
  }, []);

  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products allProducts={allProductFromStore} />
      <Newsletter />
      <Footer />
    </>
  )
};

export default Homepage;
