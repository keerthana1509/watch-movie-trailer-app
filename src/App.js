import { useState, useEffect } from "react";
import axios from "axios";

import * as Constants from "./constants/Constants";
import MovieCard from "./components/MovieCard";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchMovies();
	}, []);

	const fetchMovies = async () => {
		const {
			data: { results },
		} = await axios.get(`${Constants.MOVIE_API_URL}/discover/movie`, {
			params: {
				api_key: process.env.REACT_APP_MOVIE_API_KEY,
			},
		});

		setMovies(results);
	};

	const renderMovies = () => (
		movies.map(movie => (
			<MovieCard
				key={movie.id}
				movie={movie}
			/>
		))
	);

	return (
		<div className="App">
			<h1>Hello Users !!</h1>
			<div className="container">{renderMovies()}</div>
		</div>
	);
}

export default App;