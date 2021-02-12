import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./User.css";
const User = (props) => {
	const { name, salary, location, picture, email, phone } = props.user;
	const fullName = name.title + " " + name.first + " " + name.last;
	const address = location.city + ", " + location.country;
	const image = picture.large;
	return (
		<div className="user">
			<div>
				<img src={image} alt="" />
			</div>
			<div>
				<h4 className="user-name">Name: {fullName}</h4>
				<h4>Address: {address}</h4>
				<h4>Phone: {phone}</h4>
				<h4>Email: {email}</h4>
				<h4>Salary(yearly): ${salary}</h4>
				<button
					onClick={() => props.handleAddUser(props.user)}
					className="main-button"
				>
					<FontAwesomeIcon icon={faPlusCircle} />
				</button>
			</div>
		</div>
	);
};

export default User;
