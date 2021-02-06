import { useEffect, useState } from "react";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://randomuser.me/api/?results=15")
			.then((res) => res.json())
			.then((data) => {
				setUsers(data.results);
			});
	}, []);
	return (
		<div className="App">
			<h1>Users Info: {users.length}</h1>
			{console.log(users[0])}
		</div>
	);
}

export default App;
