import React, { useState } from "react";
import fakeData from "../../fakeData/data.json";
import "./Body.css";
import Cart from "./Cart/Cart";
import User from "./User/User";
const Body = () => {
	const data = fakeData.results;

	const [users, setUsers] = useState(data);
	const [cart, setCart] = useState([]);

	const handleAddUser = (user) => {
		const newCart = [...cart, user];
		setCart(newCart);
	};
	return (
		<div className="body-container">
			<div className="user-container">
				{users.map((user) => (
					<User handleAddUser={handleAddUser} user={user}></User>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Body;
