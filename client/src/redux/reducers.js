import { ADD_PRODUCT , GET_PRODUCTS } from "./types"; 

const initialState = {
    productInfo: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {...state, productInfo: [action.payload, ...state.productInfo]}
        }
        case GET_PRODUCTS: {
			return { ...state, productInfo: action.payload };
		}
        default: {
            return state;
        }
    }
};

export const productSelector = (state) => state.productReducer.productInfo;

export default productReducer;