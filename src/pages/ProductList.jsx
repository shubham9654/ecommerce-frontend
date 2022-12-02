import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from "../store/actions/product.action";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const ProductList = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const allProductFromStore  = useSelector(state => state?.products?.allProducts || []);

  // states init
  const [filters, setFilters] = useState({
    color: '',
    size: ''
  });
  // const [sort, setSort] = useState("newest");
  const [products, setProducts] = useState(allProductFromStore);


  useEffect(() => {
    dispatch(getAllProductsAction({ category }));
  }, []);

  useEffect(() => {
    setProducts(allProductFromStore);
  }, [allProductFromStore.length]);

  const handleFilter = ({ type, value }) => {
    let filterProduct = allProductFromStore;
    if (type === 'color') {
      setFilters({
        color: value,
        size: ''
      })
      filterProduct = filterProduct.filter(item => value === '' ? true : item.color === value)
    } else {
      setFilters({
        color: '',
        size: value
      })
      filterProduct = filterProduct.filter(item => value === '' ? true : item.size === value)
    }
    setProducts(filterProduct);
  };

  return (
    <div className="product_list_page">
      <Navbar />
      <Announcement />
      <h1 className="text-3xl font-bold m-5">Dresses</h1>
      <div className="flex items-center justify-between">

        <div className="m-5">
          <label className="text-xl font-semibold capitalize mr-2.5">filter products:</label>
          <select
            className="border border-gray-500 mr-2.5 p-1.5 focus:outline-none capitalize cursor-pointer"
            value={filters.color}
            onChange={(e) => handleFilter({ type: "color", value: e.target.value})}
          >
            <option value="" className="capitalize">Color</option>
            <option value="green" className="capitalize">green</option>
            <option value="gray" className="capitalize">gray</option>
            <option value="yellow" className="capitalize">yellow</option>
          </select>
          <select
            className="border border-gray-500 p-1.5 focus:outline-none cursor-pointer"
            value={filters.size}
            onChange={(e) => handleFilter({ type: "size", value: e.target.value})}
          >
            <option value="" className="capitalize">Size</option>
            {/* <option value="xxl" className="capitalize">Xxl</option>
            <option value="xl" className="capitalize">Xl</option>
            <option value="l" className="capitalize">L</option> */}
            <option value="M" className="capitalize">M</option>
          </select>
        </div>

        {/* <div className="m-5">
          <label className="text-xl font-semibold capitalize mr-2.5">Sort Products: </label>
          <select
            className="border border-gray-500 p-1.5 focus:outline-none capitalize cursor-pointer"
            value={sort}
            onChange={(e) => handleSort({ value: e.target.value})}
          >
            <option className="capitalize" value="newest">Newest</option>
            <option className="capitalize" value="asc">Price (asc)</option>
            <option className="capitalize" value="desc">Black (desc)</option>
          </select>
        </div> */}

      </div>
      <Products allProducts={products} />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ProductList;
