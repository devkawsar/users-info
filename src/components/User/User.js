import React from "react";
import "./User.css";

const User = (props) => {
	// console.log(props.user.name);
	const { name, picture } = props.user;
	console.log(props.user);
	const salary = [
		2333,
		5345,
		3534,
		3453,
		5345,
		5345,
		3445,
		5345,
		7435,
		4534,
		3543,
		3253,
		4353,
		4535,
	];

	{
		salary.map((indivSalary) => indivSalary);
	}

	return (
		<div className="user">
			<div>
				<img className="user-img" src={picture.large} alt="" />
			</div>
			<div className="user-data">
				<h6>Name: {name.title + " " + name.first + " " + name.last}</h6>
				<h6>Job: developer</h6>
				{<h6>Salary: {indivSalary}</h6>}
				<button>Add User</button>
			</div>
		</div>
	);
};

export default User;
