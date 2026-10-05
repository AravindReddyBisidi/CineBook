// ==========================================
// CineBook
// Phase 2 - Movies + Search + Category
// ==========================================


// ================= MOVIE DATA =================

const movies = [

    {
        id: 1,
        title: "The Last Journey",
        genre: "Action",
        rating: 8.5,
        language: "English",
        price: 250,
        image:
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80"
    },


    {
        id: 2,
        title: "Love Forever",
        genre: "Romance",
        rating: 8.2,
        language: "English",
        price: 220,
        image:
            "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=500&q=80"
    },


    {
        id: 3,
        title: "Laugh Out Loud",
        genre: "Comedy",
        rating: 8.7,
        language: "English",
        price: 200,
        image:
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=80"
    },


    {
        id: 4,
        title: "Dark Night",
        genre: "Horror",
        rating: 8.4,
        language: "English",
        price: 230,
        image:
            "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=500&q=80"
    },


    {
        id: 5,
        title: "Warrior",
        genre: "Action",
        rating: 9.0,
        language: "English",
        price: 280,
        image:
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80"
    },


    {
        id: 6,
        title: "My Love Story",
        genre: "Romance",
        rating: 8.8,
        language: "English",
        price: 240,
        image:
            "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=500&q=80"
    }

];


// ================= GET ELEMENTS =================

const movieContainer =
    document.getElementById("movieContainer");


const searchInput =
    document.getElementById("searchInput");


const searchBtn =
    document.getElementById("searchBtn");


const noMovie =
    document.getElementById("noMovie");


const viewAll =
    document.getElementById("viewAll");


// ================= DISPLAY MOVIES =================

function displayMovies(movieList) {

    movieContainer.innerHTML = "";


    if (movieList.length === 0) {

        noMovie.style.display = "block";

        return;
    }


    noMovie.style.display = "none";


    movieList.forEach(function(movie) {

        const movieCard =
            document.createElement("div");


        movieCard.classList.add("movie-card");


        movieCard.innerHTML = `

            <img
                src="${movie.image}"
                alt="${movie.title}"
            >

            <div class="movie-info">

                <h3>
                    ${movie.title}
                </h3>

                <p>
                    ${movie.genre} • ${movie.language}
                </p>

                <div class="movie-bottom">

                    <span>
                        ⭐ ${movie.rating}
                    </span>

                    <button
                        class="book-btn"
                        data-id="${movie.id}">

                        Book Now

                    </button>

                </div>

            </div>

        `;


        movieContainer.appendChild(movieCard);

    });


    addBookEvents();

}


// ================= BOOK NOW =================

function addBookEvents() {

    const bookButtons =
        document.querySelectorAll(".book-btn");


    bookButtons.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const movieId =
                    Number(
                        button.getAttribute("data-id")
                    );


                // Open movie details page

                window.location.href =
                    "movie-details.html?id=" +
                    movieId;

            }
        );

    });

}


// ================= SEARCH =================

function searchMovies() {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    const filteredMovies =
        movies.filter(function(movie) {

            return movie.title
                .toLowerCase()
                .includes(searchText);

        });


    displayMovies(filteredMovies);

}


// Search button

searchBtn.addEventListener(
    "click",
    searchMovies
);


// Search while typing

searchInput.addEventListener(
    "input",
    searchMovies
);


// ================= VIEW ALL =================

viewAll.addEventListener(
    "click",
    function(event) {

        event.preventDefault();


        searchInput.value = "";


        displayMovies(movies);

    }
);


// ================= CATEGORY FILTER =================

const categoryCards =
    document.querySelectorAll(".category-card");


categoryCards.forEach(function(card) {

    card.addEventListener(
        "click",
        function() {

            const selectedCategory =
                card.getAttribute(
                    "data-category"
                );


            const filteredMovies =
                movies.filter(function(movie) {

                    return movie.genre ===
                        selectedCategory;

                });


            displayMovies(filteredMovies);


            document
                .getElementById("movies")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

});


// ================= INITIAL DISPLAY =================

displayMovies(movies);