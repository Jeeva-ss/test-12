import { useEffect, useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FlowCard from "./components/FlowCard";

function App() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	// data fetch
	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos"
			);
			const data = await response.json();
			console.log(data);
			setUsers(data);
			setLoading(false);
		}
		setTimeout(() => fetchData(), 1000);
	}, []);

	return (
		<Router>
			<Routes>
				<Route
					path="*"
					element={
						<div className="min-h-screen flex flex-col justify-center items-center">
							<h1 className="text-2xl font-bold">404 - Page not found...</h1>
							<p className="text-blue-800 font-bold">
								<Link to="/">Back to home</Link>
							</p>
						</div>
					}
				/>
				{/* Layout */}
				<Route
					path="/"
					element={
						<>
							<div className="flex h-screen bg-gray-100">
								{/* Sidebar */}
								<div className="hidden md:flex flex-col w-56 lg:w-64 bg-gray-800">
									<div className="flex items-center   h-16 bg-gray-900">
										<img
											src="/src/assets/Nav Brand.png"
											alt="Cummo"
											className="w-2/4 h-2/4 px-4"
										/>
									</div>
									<div className="flex flex-col flex-1 overflow-y-auto">
										<nav className="flex-1 px-2 py-4 bg-gray-800">
											<Link
												to="/"
												className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6 mr-2"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M4 6h16M4 12h16M4 18h16"
													/>
												</svg>
												Dashboard
											</Link>
											<Link
												to="/post"
												className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													className="size-6 mr-2"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M12 4.5v15m7.5-7.5h-15"
													/>
												</svg>
												Post
											</Link>
										</nav>
									</div>
								</div>
								{/* Dashboard */}
								<div className="flex flex-col flex-1 overflow-y-auto">
									<div className="flex items-center justify-end h-16 bg-gray-800 p-4 ">
										<div className="flex gap-x-2 items-center">
											<button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													className="size-6"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
													/>
												</svg>
											</button>
											<img
												src="https://img-c.udemycdn.com/user/200_H/7799204_2091_5.jpg"
												alt="jonas"
												className="size-8 rounded-full cursor-pointer"
											/>
										</div>
									</div>
									<div className="p-4 bg-gray-900">
										<h1 className="text-2xl font-bold text-white">Posts</h1>
										{loading ? (
											<div className="h-screen">
												<p className="text-white">Loading...</p>
											</div>
										) : (
											<ProfileCard users={users} />
										)}
									</div>
								</div>
							</div>
						</>
					}
				></Route>
				{/* Post */}
				<Route
					path="/post"
					element={
						<>
							<div className="flex h-screen bg-gray-100">
								{/* Sidebar */}
								<div className="hidden md:flex flex-col md:w-56 lg:w-64 bg-gray-800">
									<div className="flex items-center   h-16 bg-gray-900">
										<img
											src="/src/assets/Nav Brand.png"
											alt="Cummo"
											className="w-2/4 h-2/4 px-4"
										/>
									</div>
									<div className="flex flex-col flex-1 overflow-y-auto">
										<nav className="flex-1 px-2 py-4 bg-gray-800">
											<Link
												to="/"
												className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6 mr-2"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M4 6h16M4 12h16M4 18h16"
													/>
												</svg>
												Dashboard
											</Link>
											<Link
												to="/post"
												className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													className="size-6 mr-2"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M12 4.5v15m7.5-7.5h-15"
													/>
												</svg>
												Post
											</Link>
										</nav>
									</div>
								</div>
								{/* Dashboard */}
								<div className="flex flex-col flex-1 overflow-y-auto">
									<div className="flex items-center justify-end h-16  bg-gray-800  p-4 ">
										<div className="flex gap-x-2 items-center">
											<button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													className="size-6"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
													/>
												</svg>
											</button>
											<img
												src="https://img-c.udemycdn.com/user/200_H/7799204_2091_5.jpg"
												alt="jonas"
												className="size-8 rounded-full cursor-pointer"
											/>
										</div>
									</div>
									<div className="p-4 bg-gray-900 h-full">
										<h1 className="text-2xl font-bold text-white mb-4">
											Dashboard
										</h1>
										{/* Component to be showed */}
										<FlowCard />
									</div>
								</div>
							</div>
						</>
					}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
