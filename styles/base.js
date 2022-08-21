import axios from 'axios';
// import { store } from '../Context/context';

export const colors = {
    primary: '#68AAFF',
    second: '#B2EBFF',
    third: '#CC71CE',
    bg: '#fff',
}
export const logo = require('../img/Logo-teste.png');
export const packages = require('../package.json');

// export const token = () => { return store.getState().auth.value }

// const counter = useSelector(state => state.auth);
// const isLogged = useSelector(state => state.loading);
// export const dispatch = useDispatch();

// store.dispatch({
//   type: 'SET_TOKEN',
//   token: 'Use Redux'
// })

// console.log(auth, token, dispatch);

export const api = axios.create({
  baseURL: packages.api
});

export const headToken = {
  headers: {
    'Authorization': 'Bearer ' + 123
  }
}

