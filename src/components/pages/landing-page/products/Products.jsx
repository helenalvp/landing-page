import React from "react";
import makeup from "../../../../assets/icons/make-up.png";

class Products extends React.Component {
  render() {
    return (
      <div className="product-section pb-5 mb-5">
        <h1>Shop Our Products</h1>
        <div className="items">
          <div
            id="carouselExampleControls"
            className="carousel slide carousel-dark"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={makeup}
                  className="icon"
                  alt="Beauty product goes here"
                />
                <img
                  src={makeup}
                  className="icon"
                  alt="Beauty product goes here"
                />
                <img
                  src={makeup}
                  className="icon"
                  alt="Beauty product goes here"
                />
              </div>
              <div class="carousel-item">
                <img
                  src={makeup}
                  className="icon"
                  alt="Beauty product goes here"
                />
                <img
                  src={makeup}
                  className="icon"
                  alt="Beauty product goes here"
                />
              </div>
              <div class="carousel-item">
                <img
                  src={makeup}
                  className="icon"
                  alt="Beauty product goes here"
                />
                <img
                  src={makeup}
                  className="icon"
                  alt="Beauty product goes here"
                />
                <img
                  src={makeup}
                  className="icon"
                  alt="Beauty product goes here"
                />
                <img
                  src={makeup}
                  className="icon"
                  alt="Beauty product goes here"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        Needs alot more work
      </div>
    );
  }
}

export default Products;
