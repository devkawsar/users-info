import React from "react";
import logo from "../../images/flower-1283602.jpg";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<img src={logo} alt="" />
			<nav>
				<a href="/shop">Shop</a>
				<a href="/review">Order Review</a>
				<a href="/manager">Manager</a>
			</nav>
		</div>
	);
};

export default Header;
