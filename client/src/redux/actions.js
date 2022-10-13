import { ADD_PRODUCT , GET_PRODUCTS } from "./types";
import axios from "axios";

export const addProduct = (productInfo) => {
	return {
		type: ADD_PRODUCT,
		payload: productInfo,
	}
};

export const getProducts = (products) => {
	return {
		type: GET_PRODUCTS,
		payload: products,
	};
};

export const saveProduct = (url, product) => {
	return (dispatch) => {
		axios.post(url, product).then(({ data }) => dispatch(addProduct(data)));
	};
};

export const getApiProducts = () => {
	return (dispatch) => {
		axios.get("http://localhost:4004/products").then(({ data }) => dispatch(getProducts(data)));
	};
};

export const deleteProduct = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:4004/products/${id}`).then(() => dispatch(getApiProducts()));

    }
}