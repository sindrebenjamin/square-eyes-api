const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");



const main = document.querySelector("main");





main.innerHTML = `Loading...`;

async function getDetails() {

    const response = await fetch(`https://sindre.codes/bingo/wp-json/wc/store/products/${id}`);
    const result = await response.json();

    console.log(result);
    createHtml(result);
}

getDetails()



function createHtml(movie) {

    main.innerHTML = `<div class="page-wrapper">
    <section style="background-image:  linear-gradient(to right,  rgba(255,0,0,0),  #11131F 50%), url(${movie.images[0].src});" class="movie-banner">
      <div class="x-button-wrapper">
        <a href="../pages/browse.html">
          <svg
            class="x-button"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="white" />
            <path
              d="M29 12.593L27.4696 11L18.8233 20L27.4696 29L29 27.407L21.8841 20L29 12.593Z"
              fill="#6563AE"
            />
            <path
              d="M11 12.593L12.5304 11L21.1767 20L12.5304 29L11 27.407L18.1159 20L11 12.593Z"
              fill="#6563AE"
            />
          </svg>
        </a>
      </div>
      <div class="plus-button-wrapper">
        <a href="#">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="13" fill="#D9D9D9" />
            <path
              d="M20.125 0C9.01133 0 0 9.01133 0 20.125C0 31.2387 9.01133 40.25 20.125 40.25C31.2387 40.25 40.25 31.2387 40.25 20.125C40.25 9.01133 31.2387 0 20.125 0ZM28.75 21.2031C28.75 21.4008 28.5883 21.5625 28.3906 21.5625H21.5625V28.3906C21.5625 28.5883 21.4008 28.75 21.2031 28.75H19.0469C18.8492 28.75 18.6875 28.5883 18.6875 28.3906V21.5625H11.8594C11.6617 21.5625 11.5 21.4008 11.5 21.2031V19.0469C11.5 18.8492 11.6617 18.6875 11.8594 18.6875H18.6875V11.8594C18.6875 11.6617 18.8492 11.5 19.0469 11.5H21.2031C21.4008 11.5 21.5625 11.6617 21.5625 11.8594V18.6875H28.3906C28.5883 18.6875 28.75 18.8492 28.75 19.0469V21.2031Z"
              fill="#6563AE"
            />
          </svg>
        </a>
      </div>
      <div class="banner-info-wrapper">
        <div class="banner-infobox-content">
          <div class="top-elements">
            <h1>${movie.name}</h1>
            <div class="movie-details-sa">
              <div class="movie-details-year-sa">${movie.attributes[0].terms[0].name}</div>
              <div class="movie-details-time-sa">${movie.attributes[1].terms[0].name}</div>
              <div class="movie-details-rating-sa">${movie.attributes[2].terms[0].name}</div>
            </div>
            <p class="description">
            ${movie.description}
            </p>
          </div>
          <div class="bottom-elements">
            <p class="price-desktop">
              ${movie.price_html}
            </p>
            <div class="buttons-wrapper">
              <a class="no-style-link" href="/pages/cart.html">
                <div class="add-to-cart-button button">Add to cart</div></a
              >
              <a href="#">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="13" fill="#D9D9D9" />
                  <path
                    d="M20.125 0C9.01133 0 0 9.01133 0 20.125C0 31.2387 9.01133 40.25 20.125 40.25C31.2387 40.25 40.25 31.2387 40.25 20.125C40.25 9.01133 31.2387 0 20.125 0ZM28.75 21.2031C28.75 21.4008 28.5883 21.5625 28.3906 21.5625H21.5625V28.3906C21.5625 28.5883 21.4008 28.75 21.2031 28.75H19.0469C18.8492 28.75 18.6875 28.5883 18.6875 28.3906V21.5625H11.8594C11.6617 21.5625 11.5 21.4008 11.5 21.2031V19.0469C11.5 18.8492 11.6617 18.6875 11.8594 18.6875H18.6875V11.8594C18.6875 11.6617 18.8492 11.5 19.0469 11.5H21.2031C21.4008 11.5 21.5625 11.6617 21.5625 11.8594V18.6875H28.3906C28.5883 18.6875 28.75 18.8492 28.75 19.0469V21.2031Z"
                    fill="#6563AE"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="main-content-wrapper">
      <div class="mobile-content">
        <h1>${movie.name}</h1>
        <div class="movie-details-sa">
          <div class="movie-details-year-sa">${movie.attributes[0].terms[0].name}</div>
          <div class="movie-details-time-sa">${movie.attributes[1].terms[0].name}</div>
          <div class="movie-details-rating-sa">${movie.attributes[2].terms[0].name}</div>
        </div>
        <a class="no-style-link" href="../pages/cart.html"
          ><div class="buy-button button">
            <p>${movie.price_html}</p>
          </div></a
        >
        <p class="description">
        ${movie.description}
        </p>
        <details class="details">
          <summary>
            <h2>Details</h2>
          </summary>
          <div class="details-content">
            <p><strong>Director:</strong> ${movie.attributes[3].terms[0].name}</p>
            <p><strong>Written by:</strong> ${movie.attributes[4].terms[0].name}</p>
            <p><strong>Produced by:</strong> ${movie.attributes[5].terms[0].name}</p>
            <p>
              <strong>Starring:</strong> ${movie.attributes[6].terms[0].name}
            </p>
            <p><strong>Genres:</strong> ${movie.attributes[7].terms[0].name}</p>
            
            <p><strong>Release date:</strong> ${movie.attributes[8].terms[0].name}</p>
          </div>
        </details>
        <details class="more-details">
          <summary><h2>More details</h2></summary>
          <div class="details-content">
          <p><strong>Cinematography:</strong> ${movie.attributes[9].terms[0].name}</p>
          <p><strong>Edited by:</strong> ${movie.attributes[10].terms[0].name}</p>
          <p><strong>Music by:</strong> ${movie.attributes[11].terms[0].name}</p>
          <p>
            <strong>Distributed by:</strong> ${movie.attributes[12].terms[0].name}
          </p>
          <p><strong>Country:</strong> ${movie.attributes[13].terms[0].name}</p>
          
          <p><strong>Language:</strong> ${movie.attributes[14].terms[0].name}</p>
          </div>
        </details>
      </div>
    
      <details open class="details-desktop">
        <summary>
          <h2>Details</h2>
        </summary>
        <div class="details-content flex-details">
          <div class="details-1">
          <p><strong>Director:</strong> ${movie.attributes[3].terms[0].name}</p>
          <p><strong>Written by:</strong> ${movie.attributes[4].terms[0].name}</p>
          <p><strong>Produced by:</strong> ${movie.attributes[5].terms[0].name}</p>
          </div>
          <div class="details-2">
          <p>
          <strong>Starring:</strong> ${movie.attributes[6].terms[0].name}
        </p>
        <p><strong>Genres:</strong> ${movie.attributes[7].terms[0].name}</p>
        
        <p><strong>Release date:</strong> ${movie.attributes[8].terms[0].name}</p>
          </div>
        </div>
      </details>
      <details open class="more-details-desktop">
        <summary><h2>More details</h2></summary>
        <div class="details-content flex-details">
          <div class="details-1">
          <p><strong>Cinematography:</strong> ${movie.attributes[9].terms[0].name}</p>
          <p><strong>Edited by:</strong> ${movie.attributes[10].terms[0].name}</p>
          <p><strong>Music by:</strong> ${movie.attributes[11].terms[0].name}</p>
          </div>
          <div class="details-2">
          <p>
          <strong>Distributed by:</strong> ${movie.attributes[12].terms[0].name}
        </p>
        <p><strong>Country:</strong> ${movie.attributes[13].terms[0].name}</p>
        
        <p><strong>Language:</strong> ${movie.attributes[14].terms[0].name}</p>
          </div>
        </div>
      </details>
    
      <h2 class="more-like-this">More like this</h2>
    </div>
    <section class="movie-recommendations">
      <div class="movie-tile first-movie" title="Cover of Aether Flux">
        <a href="#"
          ><span class="invisible-overlay-link">
            <a href="#"><div class="movie-image aether-flux"></div></a>
            <div class="overlay">
              <div class="overlay-content">
                <div class="movie-header">
                  <h2>Aether Flux</h2>
                  <div class="movie-details">
                    <div class="movie-details-year">2006</div>
                    <div class="movie-details-time">1h 48 min</div>
                    <div class="movie-details-rating">R</div>
                  </div>
                </div>
                <div class="movie-description">
                  When a Las Vegas performer-turned-snitch named Buddy
                  Israel decides to turn state's evidence and testify
                  against the mob, it seems...
                  <a href="#" class="more-info">More info</a>
                </div>
                <div class="movie-footer">
                  <div class="movie-price">
                    <p>$12.59</p>
                    <p class="price-striked">$19.99</p>
                  </div>
                  <a href="cart.html"><button>Add to Cart</button></a>
                </div>
              </div>
              <div class="overlay-bg"></div>
            </div> </span
        ></a>
      </div>
      <div class="movie-tile" title="Cover of Ant Man">
        <a href="#"
          ><span class="invisible-overlay-link">
            <a href="#"><div class="movie-image ant-man"></div></a>
            <div class="overlay">
              <div class="overlay-content">
                <div class="movie-header">
                  <h2>Ant Man</h2>
                  <div class="movie-details">
                    <div class="movie-details-year">2006</div>
                    <div class="movie-details-time">1h 48 min</div>
                    <div class="movie-details-rating">R</div>
                  </div>
                </div>
                <div class="movie-description">
                  When a Las Vegas performer-turned-snitch named Buddy
                  Israel decides to turn state's evidence and testify
                  against the mob, it seems...
                  <a href="#" class="more-info">More info</a>
                </div>
                <div class="movie-footer">
                  <div class="movie-price">
                    <p>$12.59</p>
                    <p class="price-striked">$19.99</p>
                  </div>
                  <a href="cart.html"><button>Add to Cart</button></a>
                </div>
              </div>
              <div class="overlay-bg"></div>
            </div> </span
        ></a>
      </div>
      <div class="movie-tile" title="Cover of Aquaman">
        <a href="#"
          ><span class="invisible-overlay-link">
            <a href="#"><div class="movie-image aquaman"></div></a>
            <div class="overlay">
              <div class="overlay-content">
                <div class="movie-header">
                  <h2>Aquaman</h2>
                  <div class="movie-details">
                    <div class="movie-details-year">2006</div>
                    <div class="movie-details-time">1h 48 min</div>
                    <div class="movie-details-rating">R</div>
                  </div>
                </div>
                <div class="movie-description">
                  When a Las Vegas performer-turned-snitch named Buddy
                  Israel decides to turn state's evidence and testify
                  against the mob, it seems...
                  <a href="#" class="more-info">More info</a>
                </div>
                <div class="movie-footer">
                  <div class="movie-price">
                    <p>$12.59</p>
                    <p class="price-striked">$19.99</p>
                  </div>
                  <a href="cart.html"><button>Add to Cart</button></a>
                </div>
              </div>
              <div class="overlay-bg"></div>
            </div> </span
        ></a>
      </div>
      <div class="movie-tile" title="Cover of Bad Boys">
        <a href="#"
          ><span class="invisible-overlay-link">
            <a href="#"><div class="movie-image bad-boys"></div></a>
            <div class="overlay">
              <div class="overlay-content">
                <div class="movie-header">
                  <h2>Bad Boys</h2>
                  <div class="movie-details">
                    <div class="movie-details-year">2006</div>
                    <div class="movie-details-time">1h 48 min</div>
                    <div class="movie-details-rating">R</div>
                  </div>
                </div>
                <div class="movie-description">
                  When a Las Vegas performer-turned-snitch named Buddy
                  Israel decides to turn state's evidence and testify
                  against the mob, it seems...
                  <a href="#" class="more-info">More info</a>
                </div>
                <div class="movie-footer">
                  <div class="movie-price">
                    <p>$12.59</p>
                    <p class="price-striked">$19.99</p>
                  </div>
                  <a href="cart.html"><button>Add to Cart</button></a>
                </div>
              </div>
              <div class="overlay-bg"></div>
            </div> </span
        ></a>
      </div>
      <div class="movie-tile" title="Cover of Brightburn">
        <a href="#"
          ><span class="invisible-overlay-link">
            <a href="#"><div class="movie-image brightburn"></div></a>
            <div class="overlay">
              <div class="overlay-content">
                <div class="movie-header">
                  <h2>Brightburn</h2>
                  <div class="movie-details">
                    <div class="movie-details-year">2006</div>
                    <div class="movie-details-time">1h 48 min</div>
                    <div class="movie-details-rating">R</div>
                  </div>
                </div>
                <div class="movie-description">
                  When a Las Vegas performer-turned-snitch named Buddy
                  Israel decides to turn state's evidence and testify
                  against the mob, it seems...
                  <a href="#" class="more-info">More info</a>
                </div>
                <div class="movie-footer">
                  <div class="movie-price">
                    <p>$12.59</p>
                    <p class="price-striked">$19.99</p>
                  </div>
                  <a href="cart.html"><button>Add to Cart</button></a>
                </div>
              </div>
              <div class="overlay-bg"></div>
            </div> </span
        ></a>
      </div>
    </section>
    </div>`

}