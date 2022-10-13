import { AddPostFormBox, Button, Input} from "./styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveProduct } from "../../redux/actions";
import { v4 } from "uuid"



function ProductForm () {

    const [name, setName] = useState("");
	const [imgUrl, setImgUrl] = useState("");
    const [count, setCount] = useState("");
    const [weight, setWeight] = useState("");
    const [comment, setComment] = useState("");

    const dispatch = useDispatch();
    const id = v4();

    const handleSubmit = (e) => {
		e.preventDefault();

		const product = {
			id,
			name,
			imgUrl,
            count,
            weight,
            comment
		};

        dispatch(saveProduct("http://localhost:4004/products", product));

        setName("");
		setImgUrl("");
        setCount("");
        setWeight("");
        setComment("");
    }

    return (
    
        <AddPostFormBox>
            <Input placeholder="Product name" type="text" onChange={(e) => setName(e.target.value)}></Input>
            <Input placeholder="URL-image" type="text" onChange={(e) => setImgUrl(e.target.value)}></Input>
            <Input placeholder="Count" type="text" onChange={(e) => setCount(e.target.value)}></Input>
            <Input placeholder="Weight" type="text" onChange={(e) => setWeight(e.target.value)}></Input>
            <Input placeholder="Comment" type="text" onChange={(e) => setComment(e.target.value)}></Input>
            <Button 
                onClick={handleSubmit}
                disabled={ !name.length || !imgUrl.length || !count.length || !weight.length || !comment.length ? "disabled" : null }>
                    ADD</Button>
        </AddPostFormBox>
       
    )
}


export default ProductForm;