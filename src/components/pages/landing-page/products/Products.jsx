import React from "react";
// import makeup from "../../../../assets/icons/make-up.png";
import "./products.css";

import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const placeholder = "http://via.placeholder.com/640x360";

class Products extends React.Component {
  render() {
    return (
      <div className="product-section pb-5 mb-5">
        <h1 className="m-5 p-5">Shop Our Products</h1>
        <div className="items  px-5 mx-5">
          <Carousel
            plugins={[
              "infinite",
              "arrows",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 2000,
                },
              },
            ]}
            className="px-3"
          >
            <img src={placeholder} alt="placeholder" />
            <img src={placeholder} alt="placeholder" />
            <img src={placeholder} alt="placeholder" />
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Products;
