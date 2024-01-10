import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ProductsSlider(props) {
  const { products } = props;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide:6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="bestSeller">
      <div className="bestSellerTitle">{props.title}</div>
      <div className="bestSellerCards">
        <Carousel responsive={responsive}>
          {products.map((product, index) => (
            <div className="bestSellerCard" key={index}>
              <img src={product.image} alt="best seller items" />
              <div className="productTitle">{product.title}</div>
              <div className="productPrice">{product.price}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default ProductsSlider;
