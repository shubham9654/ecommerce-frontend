import axios from 'axios'
import { baseUrl, headers } from './common.api'

export const createPaymentService = async ({ cartItems, userId }) => {
  const products = await axios.post(
    `${baseUrl}/payments`,
    {
      cartItems,
      userId
    },
    headers
  )
  return products;
};
