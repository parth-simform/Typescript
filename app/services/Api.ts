import {apiConfig} from './Utils';

const getapi = (endpoint: string) => {
  return apiConfig.get(endpoint).then((response: any) => response);
};
export default getapi;
