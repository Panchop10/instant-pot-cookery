import { useRef } from "react";

import SliderCard from "./SliderCard";

import classes from "./HorizontalSlider.module.css";

function HorizontalSlider(props) {
  // horizontal carousel
  const lastRecipesCarousel = useRef(null);

  const scroll = (direction) => {
    let far = (lastRecipesCarousel.current.offsetWidth / 2) * direction;
    let pos = lastRecipesCarousel.current.scrollLeft + far;

    lastRecipesCarousel.current.scrollTo({
      top: 0,
      left: pos,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.prev} onClick={scroll.bind(null, -1)}>
          &#10094;
        </div>

        <div ref={lastRecipesCarousel} className={classes.main}>
          {props.data.map((item, idx) => (
            <SliderCard key={idx} data={item} />
          ))}
        </div>

        <div className={classes.next} onClick={scroll.bind(null, 1)}>
          &#10095;
        </div>
      </div>
    </div>
  );
}

export default HorizontalSlider;
