import { useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import useIntersectionObserver from "../../hooks/useIntersectionObserver";
// import { setState } from "../../store/store";
import Items from "./Items";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Slider() {
  // const elementRef = useRef<HTMLDivElement>(null);
  // const isOnScreen = useIntersectionObserver(elementRef);

  // useEffect(() => {
  //   console.log("Slider", { isOnScreen });
  //   setState({ home: isOnScreen });
  // }, [isOnScreen]);

  return (
    <div
      className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 md:pt-24 min-h-screen"
      // ref={elementRef}
    >
      <Carousel
        containerClass="h-full"
        itemClass="h-full"
        sliderClass="h-full"
        pauseOnHover={true}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={7500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        swipeable={true}
        draggable={false}
        showDots={true}
        infinite={true}
      >
        {Items.map((Item, index) => (
          <Item key={index} />
        ))}
      </Carousel>
    </div>
  );
}
