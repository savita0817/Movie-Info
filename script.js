const apiKey = "fda6de29"; // Replace with your OMDb API Key

function searchMovie() {
    const movieName = document.getElementById("movieInput").value;
    if (!movieName) return alert("Please enter a movie name!");

    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the response for debugging

            if (data.Response === "False") {
                document.getElementById("movieDetails").innerHTML = "<p>Movie not found!</p>";
                return;
            }

            // Set background video/image based on the movie (for example using YouTube trailer or a random movie poster)
            setMovieBackground(data.Title);

            // Display movie details
            document.getElementById("movieDetails").innerHTML = `
                <h2>${data.Title} (${data.Year})</h2>
                <img src="${data.Poster !== "N/A" ? data.Poster : 'default-image.jpg'}" alt="Movie Poster">
                <p><strong>Genre:</strong> ${data.Genre}</p>
                <p><strong>Director:</strong> ${data.Director}</p>
                <p><strong>Actors:</strong> ${data.Actors}</p>
                <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
                <p><strong>Plot:</strong> ${data.Plot}</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("There was an error with the API request.");
        });
}

function setMovieBackground(movieName) {
    const backgroundContainer = document.getElementById("backgroundMedia");

    // Example: Fallback background image URL
    let backgroundImageURL = `https://via.placeholder.com/1920x1080.png?text=Background+Image+for+${movieName}`;

    // Remove any existing background before setting a new one
    backgroundContainer.innerHTML = '';

    // Create an image element for background
    const imgElement = document.createElement("img");
    imgElement.src = "background iamge";
    imgElement.alt = "Background Image";
    imgElement.classList.add("background-image");

    backgroundContainer.appendChild(imgElement);
}
