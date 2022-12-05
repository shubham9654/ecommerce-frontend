import axios from 'axios'
import { baseUrl } from './common.api'

export const createUserService = async (payload) => {
  const user = await axios.post(
    `${baseUrl}/auth/register`,
    payload
  )
  return user;
};
