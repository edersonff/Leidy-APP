import { StyleSheet } from "react-native";
import { store } from "../App";
import axios from 'axios';

export const colors = {
    primary: '#68AAFF',
    second: '#B2EBFF',
    third: '#CC71CE',
    bg: '#fff',
}
export const logo = require('../img/Logo-teste.png');

export const packages = require('../package.json');

export const token = () => { return store.getState().auth.value }
export const storeRedux = () => { return store }

export const api = axios.create({
  baseURL: packages.api
});

