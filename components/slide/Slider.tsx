import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

  return (
      <Carousel
        containerClass="min-h-[177px] lg:h-[533px] sm:h-[177px] md:h-[350px] relative mt-4"
        itemClass="min-h-[177px] lg:h-[533px] sm:h-[177px] md:h-[350px]"
        sliderClass="min-h-[177px] lg:h-[533px] sm:h-[177px] md:h-[350px]"
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
  );
}
