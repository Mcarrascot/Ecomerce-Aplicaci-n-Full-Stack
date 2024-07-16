import { useEffect, useReducer } from 'react'

import axiosClient from "../../config/axios"

import ProductContext from "./ProductContext"
import ProductReducer from "./ProductReducer"
import { GET_PRODUCTS } from './ProductTypes'


const LOCAL_STORAGE_KEY = 'products';
const itemsInLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
const storage = itemsInLocalStorage
  ? JSON.parse(itemsInLocalStorage)
  : [];

const ProductState = (props) => {
    const initialState = {
        products: storage,
    }

    const [globalState, dispatch] = useReducer(ProductReducer, initialState)

    const getProducts = async () => {
        const { data: { allProducts: products } } = await axiosClient.get("/products")
        dispatch({
            type: GET_PRODUCTS,
            payload: products
        })
    }

    useEffect(() => {
        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify(globalState.products)
        );
    }, [globalState.products]);

    return (
        <ProductContext.Provider
            value={{
                products: globalState.products,
                getProducts
            }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}


export default ProductState