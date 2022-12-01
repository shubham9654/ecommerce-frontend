import axios from 'axios'
import { baseUrl, headers } from './common.api'

export const getProducts = async () => {
  const products = await axios.get(
    `${baseUrl}/products`,
    // headers
  )
  return products;
};
