document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '73ce5b4d6872b4a093314bef3aa1daf3';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'; // Base URL para las imágenes

    document.getElementById('load-movies').addEventListener('click', () => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const movies = data.results;
                const moviesContainer = document.getElementById('movies-container');

                // Clear previous movies
                moviesContainer.innerHTML = '';

                movies.forEach(movie => {
                    const movieCard = `
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <div class="card">
                                <img src="${imageBaseUrl + movie.poster_path}" class="card-img-top" alt="${movie.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${movie.title}</h5>
                                    <p class="card-text"><strong>Fecha de estreno:</strong> ${movie.release_date}</p>
                                    <p class="card-text">${movie.overview}</p>
                                </div>
                            </div>
                        </div>
                    `;
                    moviesContainer.insertAdjacentHTML('beforeend', movieCard);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});
