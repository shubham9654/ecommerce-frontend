import axios from 'axios'
import { baseUrl } from './common.api'

export const getSingleProductService = async ({ productId }) => {
  const products = await axios.get(
    `${baseUrl}/products/${productId}`,
    {
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    }
  )
  return products;
};

export const getAllProductService = async ({ category }) => {
  const categoryParam = category ? `?category=${category}` : '';
  const products = await axios.get(
    `${baseUrl}/products${categoryParam}`,
    {
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    }
  )
  return products;
};
