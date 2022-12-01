import axios from 'axios'
import { baseUrl } from './common.api'

export const getProductService = async () => {
  const products = await axios.get(
    `${baseUrl}/products`,
    // headers
  )
  return products;
};
