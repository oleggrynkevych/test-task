import { NavLink } from "react-router-dom";
import { NavItems, Item } from "./styles";


const Nav = () => {
	return (
		<NavItems>
			<Item><NavLink to="/products">Products</NavLink></Item>
			<Item><NavLink to="/addproduct">Add Product</NavLink></Item>
		</NavItems>
		
	)
}

export default Nav;