/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import styles from "./carousel.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 } from "uuid";
import Card from "../card/Card";
import { useRef } from "react";
import ArrowLeft from "../icons/ArrowLef";
import ArrowRight from "../icons/ArrowRight";
import {products} from './products'

function Carousel({
  arr ,
  className = "",
  imgClickHandler = undefined,
  slidesToShow = 4,
  dots = true,
  slidesToScroll = 1,
}:any) {
  const ref: any = useRef(null);

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
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  const prevHandler = () => {
    console.log(arr);
    ref.current.slickPrev();
  };
  const nextHandler = () => {
    ref.current.slickNext();
  };
  return (
    <div className={styles["carousel-wrapper"]}>
      <Slider ref={ref} {...settings} className={styles["carousel"]}>
        {arr.map((item: any) => {
          return (
   
              <Card
                title={item?.title}
                cardPrice={item?.price}
                tags={item?.tags}
                imageUrl={item?.imageUrl}
                key={v4()}
              />

          );
        })}
      </Slider>
      <span onClick={prevHandler} className={styles["prev"]}>
        <ArrowLeft />
      </span>
      <span onClick={nextHandler} className={styles["next"]}>
        <ArrowRight />
      </span>
    </div>
  );
}

export default Carousel;
