import axios from 'axios'
import { baseUrl, headers } from './common.api'

export const createUserService = async (payload) => {
  const user = await axios.post(
    `${baseUrl}/auth/register`,
    payload,
    headers
  )
  return user;
};

export const loginUserService = async (payload) => {
  const user = await axios.post(
    `${baseUrl}/auth/login`,
    payload,
    headers
  )
  return user;
};
