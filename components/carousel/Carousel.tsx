/* eslint-disable @next/next/no-img-element */
import styles from './carousel.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 } from 'uuid';
import Card from '../card/Card';

function Carousel({
  arr = [],
  className = '',
  imgClickHandler = undefined,
  slidesToShow = 4,
  dots = true,
  slidesToScroll = 1,
  responsive = {} ,
}) {
//   const { breakpoint1 } = responsive;
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    dots: dots,
    fade: false,
    touchMove: true,
    useCSS: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
    //   {
    //     breakpoint: breakpoint1.breakpoint,
    //     settings: {
    //       slidesToShow: breakpoint1.slidesToShow,
    //       slidesToScroll: breakpoint1.slidesToScroll,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    ],
  };
  return (
    <Slider {...settings} className={styles["carousel"]}>
      {arr.map((item) => {
        return (
 
            <Card
              title = {item?.title}
            cardPrice={item?.price}
            tags ={item?.tags}
            imageUrl = {item?.imageUrl} 
            key={v4()}
            />
  
        );
      })}
    </Slider>
  );
}

export default Carousel;