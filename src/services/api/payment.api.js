import axios from 'axios'
import { baseUrl, headers } from './common.api'

export const createPaymentService = async ({ cartItems, userId, token }) => {
  const products = await axios.post(
    `${baseUrl}/payments`,
    {
      cartItems,
      userId
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  )
  return products;
};
