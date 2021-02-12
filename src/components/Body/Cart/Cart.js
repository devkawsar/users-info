import React from "react";

const Cart = (props) => {
	const cart = props.cart;
	// console.log(cart);
	// const total = cart.reduce((total, user) => total + user.salary, 0);
	// console.log(total);

	let total = 0;
	for (let i = 0; i < cart.length; i++) {
		const user = cart[i];
		total += user.salary;
	}
	return (
		<div>
			<h1>Cart here</h1>
			<p>Person Added: {cart.length}</p>
			<h4>Total Salary: {total}</h4>
		</div>
	);
};

export default Cart;
