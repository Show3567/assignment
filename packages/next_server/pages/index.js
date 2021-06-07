import React, { useContext, createContext } from 'react';
import { StoreData } from '../redux/actions';
import Productlist from './components/index';
import { Provider } from 'react-redux'
import configureStore from '../redux/store';
import { getServerSideProps } from '../service/api';


export default function Home() {


  console.log("init", configureStore())
  console.log("productlist");
  getServerSideProps();
  // const dispatch = useDispatch();
  // dispatch(StoreData());
  return (
    <Provider store={configureStore()}>
      <React.Fragment>
      <Productlist />
      <h1>hello world!</h1>
    </React.Fragment></Provider>

  )
}
