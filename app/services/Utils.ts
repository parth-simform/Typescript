import apisauce from 'apisauce';
import {getUrl} from '../utils/constant';
export const apiConfig = apisauce.create({
  baseURL: getUrl,
});
export async function getError(response: any) {
  if (response.problem === 'CLIENT_ERROR') {
    return 'url not found';
  }
  if (response?.problem === 'NETWORK_ERROR') {
    return 'Please check your internet connection';
  }
  if (['CONNECTION_ERROR', 'SERVER_ERROR'].includes(response?.problem)) {
    return 'Server is not available';
  }
  return 'Something went wrong';
}
