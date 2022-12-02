import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from "../store/actions/product.action";
// import { popularProducts } from "../utils/data";
import Product from "./Product";

const Products = ({ category, filters, sort }) => {
  const dispatch = useDispatch();
  const allProductData  = useSelector(state => state.products.allProducts);

  useEffect(() => {
    dispatch(getAllProductsAction({ category }));
  }, [category]);

  return (
    <div className="products p-5 flex flex-wrap justify-between ms:p-2.5">
      {
        allProductData.length > 0 ? (allProductData.map((item) => (
          <Product
            key={`product_id_${item._id}`}
            item={item}
          />
        )))
        : null
      }
    </div>
  )
};

export default Products;
