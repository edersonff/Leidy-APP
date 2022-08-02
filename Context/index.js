import axios from "axios";
import { store } from "../App";
import { packages } from "../styles/base";
import Context from './';
const baseURL = packages.api

export const api = axios.create({
  baseURL
});

export default (store) =>{
  return {
    setToken: (token) => {
      return store.dispatch({
        type: 'SET_TOKEN',
        token: token
      });
    },
    get: (state, param) => {
      return store.getState()[state][param];
    },
    apiAuth: () => {
      return axios.create({
        baseURL,
        headers: { Authorization: 'Bearer ' + store.getState()['auth']['token']}
      });
    }
  }
}
