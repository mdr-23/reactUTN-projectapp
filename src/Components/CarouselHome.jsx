import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";

function CarouselHome() {
  return (
    <section>
    <Carousel fade style={{ width: "80%" }} className="mx-auto">
        <Carousel.Item>
        <Link to={`/productos/WfpxApeJwyq5KgxVjQ6Y`}>
          <img
            className="cardpro d-block w-100 img-thumbnail banner-home"
            src="https://stephenking.com/images/banner/fairytale.gif"
            alt="First slide"
        />
        </Link>
        <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <Link to={`/productos/FzxxWtrjVOtjTvlEZSKs`}>
        <img
            className="cardpro d-block w-100 img-thumbnail banner-home"
            src="https://www.dreadcentral.com/wp-content/uploads/2021/01/Billy-Summers-Banner.jpg"
            alt="First slide"
        />
        </Link>
        <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item> 
        <Link to={`/productos/jj6di3FzKFJmWUcRGr2H`}>      
        <img
            className="cardpro d-block w-100 img-thumbnail banner-home"
            src="https://the-bibliofile.com/wp-content/uploads/theoutsider2.jpg"
            alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
        </Link>
        </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default CarouselHome;