function myFunction() {
    var x = document.getElementById("nav-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  // Search

  movieArray = [];

  const search = document.querySelector(".search-placeholder");
  
  search.oninput = function () {
    
    const filterValue = search.value.trim().toLowerCase();
    const filteredMovies = movieArray.filter(function(movie){

      if(movie.name.toLowerCase().includes(filterValue)) {
        console.log("test")
        return true;
      }

    })

    // console.log(filteredMovies);
    
    printMovies(filteredMovies);
  }


  // Fetch

  const movieContainer = document.querySelector(".movie-container");
  
  async function fetchMovies() {

    const response = await fetch("https://sindre.codes/bingo/wp-json/wc/store/products");
    const result = await response.json();
    printMovies(result);
    movieArray = result;

  }


  fetchMovies();



  function printMovies(movie) {

    for(i = 0; i < movie.length; i++) {
     

      movieContainer.innerHTML += `<div class="movie-tile" title="Cover of ${movie[i].name}">
      <a href="../pages/product.html?id=${movie[i].id}"
        ><span class="invisible-overlay-link">
          <a href="../pages/product.html?id=${movie[i].id}"
            ><div style="background-image: url(${movie[i].images[0].src})" class="movie-image"></div
          ></a>
          <div class="overlay">
            <div class="overlay-content">
              <div class="movie-header">
                <h2>${movie[i].name}</h2>
                <div class="movie-details">
                  <div class="movie-details-year">${movie[i].attributes[0].terms[0].name}</div>
                  <div class="movie-details-time">${movie[i].attributes[1].terms[0].name}</div>
                  <div class="movie-details-rating">${movie[i].attributes[2].terms[0].name}</div>
                </div>
              </div>
              <div class="movie-description">
                ${movie[i].short_description}
              </div>
              <div class="movie-footer">
                <div class="movie-price">
                  <p>${movie[i].price_html}</p>
                </div>
                <a href="../pages/cart.html"
                  ><button>Add to Cart</button></a
                >
              </div>
            </div>
            <div class="overlay-bg"></div>
          </div> </span
      ></a>
    </div>`
    }

  }