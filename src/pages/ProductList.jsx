import { useState } from "react";
import { useParams } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const ProductList = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = ({ type, value }) => {
    setFilters({
      ...filters,
      [type]: value
    })
  };

  const handleSort = ({ value }) => {
    setSort("newest")
  };

  return (
    <div className="product_list_page">
      <Navbar />
      <Announcement />
      <h1 className="text-3xl font-bold m-5 ">Dresses</h1>
      <div className="flex items-center justify-between">

        <div className="m-5">
          <label className="text-xl font-semibold capitalize mr-2.5">filter products:</label>
          <select
            className="border border-gray-500 mr-2.5 focus:outline-none capitalize cursor-pointer"
            onChange={(e) => handleFilter({ type: "color", value: e.target.value})}
          >
            <option className="capitalize" disabled>Color</option>
            <option className="capitalize">white</option>
            <option className="capitalize">black</option>
            <option className="capitalize">red</option>
          </select>
          <select
            className="border border-gray-500 focus:outline-none cursor-pointer"
            onChange={(e) => handleFilter({ type: "size", value: e.target.value})}
          >
            <option className="capitalize" disabled>Size</option>
            <option className="capitalize">Xxl</option>
            <option className="capitalize">Xl</option>
            <option className="capitalize">L</option>
            <option className="capitalize">M</option>
          </select>
        </div>

        <div className="m-5">
          <label className="text-xl font-semibold capitalize mr-2.5">Sort Products: </label>
          <select
            className="border border-gray-500 focus:outline-none capitalize"
            onChange={(e) => handleSort({ value: e.target.value})}
          >
            <option className="capitalize" value="newest">Newest</option>
            <option className="capitalize" value="asc">Price (asc)</option>
            <option className="capitalize" value="desc">Black (desc)</option>
          </select>
        </div>

      </div>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ProductList;
