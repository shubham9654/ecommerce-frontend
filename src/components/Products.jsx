
// import { popularProducts } from "../utils/data";
import { useRef } from "react";
import Product from "./Product";

const Products = ({ refDiv, allProducts }) => {

  return (
    <div ref={refDiv}  className="products p-5 flex flex-wrap justify-between ms:p-2.5">
      {
        allProducts.length > 0 ? (allProducts.map((item) => (
          <Product
            key={`product_id_${item._id}`}
            item={item}
          />
        )))
        // : (
        //   <div className="text-2xl font-semibold p-10 flex items-center justify-center w-full">
        //     No products Found!
        //   </div>
        // )
        : null
      }
    </div>
  )
};

export default Products;
