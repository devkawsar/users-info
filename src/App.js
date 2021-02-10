import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Body from "./components/Header/Body/Body";

function App() {
	const [users, setUsers] = useState([]);
	console.log(users[0] && users[0].picture.medium);
	useEffect(() => {
		fetch("https://randomuser.me/api/?results=15")
			.then((res) => res.json())
			.then((data) => {
				setUsers(data.results);
			});
	}, []);
	return (
		<div className="App">
			<Header></Header>
			<Body users={users}></Body>
			<h1>Users Info: {users[0] && users.length}</h1>
			<img src={users[0] && users[0].picture.medium} alt="picture" />
			{/* {console.log(users[0].picture.medium)} */}
		</div>
	);
}

export default App;
