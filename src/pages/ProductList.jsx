import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const ProductList = () => {
  return (
    <div className="product_list_page">
      <Navbar />
      <Announcement />
      <h1 className="text-3xl font-bold m-5">Dresses</h1>
      <div className="flex items-center justify-between">
        <div className="m-5">
          <label className="text-xl font-semibold capitalize mr-2.5">filter products:</label>
          <select className="border border-gray-500 mr-2.5 focus:outline-none capitalize">
            <option className="capitalize">Color</option>
            <option className="capitalize">white</option>
            <option className="capitalize">black</option>
            <option className="capitalize">red</option>
          </select>
          <select className="border border-gray-500 focus:outline-none">
            <option className="capitalize">Size</option>
            <option className="capitalize">Xxl</option>
            <option className="capitalize">Xl</option>
            <option className="capitalize">L</option>
            <option className="capitalize">M</option>
          </select>
        </div>
        <div className="m-5">
          <label className="text-xl font-semibold capitalize mr-2.5">Sort Products: </label>
          <select className="border border-gray-500 focus:outline-none capitalize">
            <option className="capitalize">Newest</option>
            <option className="capitalize">Price (asc)</option>
            <option className="capitalize">Black (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ProductList;
