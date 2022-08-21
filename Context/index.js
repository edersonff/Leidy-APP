import axios from "axios";
import { packages } from "../styles/base";
const baseURL = packages.api
export const api = axios.create({
  baseURL
});

export default (store) =>{
  return {
    set: (action, value = null) => {
      return store.dispatch({
        type: action,
        value
      });
    },
    get: (state, param) => {
      return param ? store.getState()[state][param] : store.getState()[state];
    },
    apiAuth: () => {
      return axios.create({
        baseURL,
        headers: { Authorization: 'Bearer ' + store.getState()['auth']['token']}
      });
    }
  }
}
