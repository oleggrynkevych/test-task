import ProductCard from "../ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { productSelector } from "../../redux/reducers";
import { getApiProducts } from "../../redux/actions";
import { useEffect } from "react";



function ProductList () {
    const dispatch = useDispatch();
    const productInfo = useSelector(productSelector);

    useEffect(() => {
		dispatch(getApiProducts());
	}, []);
    
    return (
        <div>
            {productInfo.map((product, index) => <ProductCard productInfo={product} key={index} /> )}        
        </div>
    )
}

export default ProductList;