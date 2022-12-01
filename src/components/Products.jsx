import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from "../store/actions/product.action";
import { popularProducts } from "../utils/data";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  const productData  = useSelector(state => state.products)

  console.log(productData)


  useEffect(() => {
    dispatch(getProductsAction())
  }, []);

  return (
    <div className="products p-5 flex flex-wrap justify-between ms:p-2.5">
      {
        productData.length > 0 ? (popularProducts.map((item) => (
          <Product
            key={`product_id_${item.id}`}
            img={item.img}
          />
        )))
        : null
      }
    </div>
  )
};

export default Products;
