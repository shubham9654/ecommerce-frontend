import { popularProducts } from "../utils/data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="products p-5 flex flex-wrap justify-between ms:p-2.5">
      {
        popularProducts.map((item, index) => (
          <Product
            key={`product_${index}`}
            item={item}
          />
        ))
      }
    </div>
  )
};

export default Products;
