import { Image, ProductBox, ProductName, Info, Comments, Block, Button } from "./styles";
import { deleteProduct } from "../../redux/actions";
import { useDispatch } from "react-redux";


function ProductCard ({productInfo}) {

    const dispatch = useDispatch();

    const {
        name,
        imgUrl,
        count,
        weight,
        comment
    } = productInfo;


    return (
        <ProductBox>
            
            <Image src={imgUrl}></Image>
            
            <Block>
                <ProductName>{name}</ProductName>
                <Info>Width: 200</Info>
                <Info>Height: 200</Info>
                <Info>Weight: {weight}</Info>
                <Info>Count: {count}</Info>
                <Comments>Comments: {comment}</Comments>
                <Button onClick={() => dispatch(deleteProduct(productInfo._id))}>DELETE</Button>
            </Block>
        </ProductBox>
    )
}

export default ProductCard;