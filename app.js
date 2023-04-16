// Movie data stored as an array of objects
const movies = [
	{
		title: "The Shawshank Redemption",
		genre: "Drama",
		rating: 9.3,
		releaseYear: 1994,
	},
	{
		title: "The Godfather",
		genre: "Crime",
		rating: 9.2,
		releaseYear: 1972,
	},
	
	// more movies here
];

// Function to filter movies based on user preferences
function getRecommendations(genre, rating, releaseYear) {
	const filteredMovies = movies.filter((movie) => {
		return (
			movie.genre === genre &&
			movie.rating >= rating &&
			movie.releaseYear >= releaseYear
		);
	});
	return filteredMovies;
}

// DOM manipulation to display movie recommendations
function displayRecommendations(recommendations) {
	// Get DOM element to display recommendations
	const recommendationContainer = document.querySelector("#recommendations");

	// Clear previous recommendations from the container
	recommendationContainer.innerHTML = "";

	// Loop through recommendations and create HTML elements to display them
	recommendations.forEach((recommendation) => {
		const movieElement = document.createElement("div");
		movieElement.innerHTML = `
		<h2>${recommendation.title}</h2>
		<p>Genre: ${recommendation.genre}</p>
		<p>Rating: ${recommendation.rating}</p>
		<p>Release Year: ${recommendation.releaseYear}</p>
	  `;
		recommendationContainer.appendChild(movieElement);
	});
}

// Event listener to capture user input and trigger recommendation logic
const form = document.querySelector("#recommendation-form");
form.addEventListener("submit", (event) => {
	event.preventDefault();

	const genre = document.querySelector("#genre-input").value;
	const rating = document.querySelector("#rating-input").value;
	const releaseYear = document.querySelector("#year-input").value;

	const recommendations = getRecommendations(genre, rating, releaseYear);
	displayRecommendations(recommendations);
});
