import { Add, Remove } from "@mui/icons-material"
import { pngAssets } from "../assets/asset"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Product = () => {
  return (
    <div className="product_page">
      <Navbar />
      <Announcement />
      <div className="p-[50px] flex ms:p-0 ms:flex-col">

        <div className="flex-[1]">
          <img className="w-100 h-[70vh] ms:h-full" alt="product_image" src={pngAssets.products.product6} />
        </div>
    
        <div className="flex-[1] px-[50px] py-5 ms:px-5">

          <h1 className="text-4xl font-light">Title</h1>
          <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse harum delectus praesentium laborum, aspernatur, molestiae et sit accusantium tempore unde ipsum omnis eos veritatis reiciendis dolores? Natus, explicabo ratione!</p>
          <span className="font-extralight text-3xl">$20.22</span>

          <div className="my-8 w-1/2 flex items-center justify-between ms:w-full">
            <div className="flex items-center">
              <label className="text-xl font-extralight capitalize mr-2.5">Color</label>
              <span className="w-5 h-5 rounded-full bg-green-300 mr-2 cursor-pointer"></span>
              <span className="w-5 h-5 rounded-full bg-gray-400 mr-2 cursor-pointer"></span>
              <span className="w-5 h-5 rounded-full bg-blue-400 mr-2 cursor-pointer"></span>
            </div>

            <div className="flex items-center">
              <label className="text-xl font-extralight capitalize mr-2.5">Size</label>
              <select className="border border-gray-500 focus:outline-none p-1.5 cursor-pointer uppercase">
                <option className="uppercase">Xxl</option>
                <option className="uppercase">Xl</option>
                <option className="uppercase">L</option>
                <option className="uppercase">M</option>
              </select>
            </div>

          </div>

          <div className="flex items-center justify-between w-1/2 ms:w-full">
            <div className="flex items-center font-bold	">
              <Remove className="cursor-pointer"/>
              <span
                className="flex items-center justify-center w-[30px] h-[30px] rounded-lg border border-solid border-teal-500 mx-1.5"
              >
                1
              </span>
              <Add className="cursor-pointer"/>
            </div>
            <button className="p-2.5 border-2 border-solid border-teal-500 font-medium bg-white hover:bg-slate-100">
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