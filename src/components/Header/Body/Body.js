import React from "react";
import User from "../../User/User";
import "./Body.css";

const Body = (props) => {
	// console.log(props.users);
	const users = props.users;
	return (
		<div className="body-container">
			<div className="users-container">
				<h1>This is the Body: {users.length}</h1>

				{users.map((user) => (
					<User user={user}></User>
				))}
			</div>
			<div className="cart-container">
				<h1>This is the cart</h1>
			</div>
		</div>
	);
};

export default Body;
