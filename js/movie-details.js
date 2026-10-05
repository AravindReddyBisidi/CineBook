// ==========================================
// CineBook
// Phase 3 - Movie Details + Booking Selection
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


// ================= GET MOVIE ID =================

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const movieId =
    Number(
        urlParams.get("id")
    );


// ================= FIND MOVIE =================

const selectedMovie =
    movies.find(function(movie) {

        return movie.id === movieId;

    });


// ================= CHECK MOVIE =================

if (!selectedMovie) {

    alert("Movie not found.");

    window.location.href = "index.html";

}


// ================= DISPLAY MOVIE =================

if (selectedMovie) {

    document.getElementById(
        "movieImage"
    ).src =
        selectedMovie.image;


    document.getElementById(
        "movieImage"
    ).alt =
        selectedMovie.title;


    document.getElementById(
        "movieTitle"
    ).textContent =
        selectedMovie.title;


    document.getElementById(
        "movieGenre"
    ).textContent =
        "Genre: " +
        selectedMovie.genre;


    document.getElementById(
        "movieLanguage"
    ).textContent =
        "Language: " +
        selectedMovie.language;


    document.getElementById(
        "movieRating"
    ).textContent =
        "⭐ Rating: " +
        selectedMovie.rating;


    document.getElementById(
        "moviePrice"
    ).textContent =
        "Ticket Price: ₹" +
        selectedMovie.price;


    document.getElementById(
        "summaryMovie"
    ).textContent =
        selectedMovie.title;

}


// ================= VARIABLES =================

let selectedTheatre = "";

let selectedDate = "";

let selectedTime = "";


// ================= THEATRE =================

const theatreCards =
    document.querySelectorAll(
        ".theatre-card"
    );


theatreCards.forEach(function(card) {

    card.addEventListener(
        "click",
        function() {

            theatreCards.forEach(
                function(item) {

                    item.classList.remove(
                        "selected"
                    );

                }
            );


            card.classList.add(
                "selected"
            );


            selectedTheatre =
                card.getAttribute(
                    "data-theatre"
                );


            document.getElementById(
                "summaryTheatre"
            ).textContent =
                selectedTheatre;

        }
    );

});


// ================= DATE =================

const dateButtons =
    document.querySelectorAll(
        ".date-btn"
    );


dateButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            dateButtons.forEach(
                function(item) {

                    item.classList.remove(
                        "selected"
                    );

                }
            );


            button.classList.add(
                "selected"
            );


            selectedDate =
                button.getAttribute(
                    "data-date"
                );


            document.getElementById(
                "summaryDate"
            ).textContent =
                selectedDate;

        }
    );

});


// ================= SHOWTIME =================

const timeButtons =
    document.querySelectorAll(
        ".time-btn"
    );


timeButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            timeButtons.forEach(
                function(item) {

                    item.classList.remove(
                        "selected"
                    );

                }
            );


            button.classList.add(
                "selected"
            );


            selectedTime =
                button.getAttribute(
                    "data-time"
                );


            document.getElementById(
                "summaryTime"
            ).textContent =
                selectedTime;

        }
    );

});


// ================= CONTINUE =================

const continueBtn =
    document.getElementById(
        "continueBtn"
    );


continueBtn.addEventListener(
    "click",
    function() {

        if (selectedTheatre === "") {

            alert(
                "Please select a theatre."
            );

            return;
        }


        if (selectedDate === "") {

            alert(
                "Please select a date."
            );

            return;
        }


        if (selectedTime === "") {

            alert(
                "Please select a showtime."
            );

            return;
        }


        // Create booking object

        const bookingData = {

            movieId:
                selectedMovie.id,

            movieName:
                selectedMovie.title,

            theatre:
                selectedTheatre,

            date:
                selectedDate,

            time:
                selectedTime,

            price:
                selectedMovie.price

        };


        // Save to localStorage

        localStorage.setItem(
            "cineBookBooking",
            JSON.stringify(
                bookingData
            )
        );


        alert(
            "Selection completed!\n\n" +

            "Movie: " +
            selectedMovie.title +

            "\nTheatre: " +
            selectedTheatre +

            "\nDate: " +
            selectedDate +

            "\nTime: " +
            selectedTime
        );


        // Phase 4 will be connected here

    }
);