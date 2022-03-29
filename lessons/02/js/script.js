// List of movies
let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]

window.onload = function () {
    displayMovie(movies);
    document.querySelector("#id-btn").addEventListener("click", idSorter);
    document.querySelector("#name-btn").addEventListener("click", nameSorter);
    document.querySelector("#rank-btn").addEventListener("click", rankSorter);
};

// Display the movie inside The HTML
function displayMovie(moviesList) {
    // Reset the table
    document.querySelector('#movie-list').innerHTML = '';
    // Header of the table
    let table = `<table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Rank</th>
      </tr>
    </thead>
    <tbody>`;
    // Creating Rows
    moviesList.forEach((item) => {
        table += `<tr>
        <th scope="col">${item.id}</th>
        <th scope="col">${item.title}</th>
        <th scope="col">${item.rank}</th>
      </tr>`;
    })
    // Closing the table
    table += `</tbody>
    </table>`;

    // Setting the inner HTML
    document.querySelector('#movie-list').innerHTML = table;
}

// Name Sorter
function nameSorter() {
    displayMovie(movies.sort(compareName).reverse());
}

// ID Sorter
function idSorter() {
    displayMovie(movies.sort(compareID).reverse());
}

// Rank Sorter
function rankSorter() {
    displayMovie(movies.sort(compareRank).reverse());
}

function compareID(a, b) {
    if (a.id > b.id) {
        return -1;
    } else if (a.id < b.id) {
        return 1;
    } else {
        return 0;
    }

}

function compareName(a, b) {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1;
    } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return 1;
    } else {
        return 0;
    }
}

function compareRank(a, b) {
    if (a.rank > b.rank) {
        return -1;
    } else if (a.id < b.id) {
        return 1;
    } else {
        return 0;
    }

}