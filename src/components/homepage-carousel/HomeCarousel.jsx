import "./homecarousel.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import MenuItem from "../menu item/MenuItem";

const HomeCarousel = () => {
  const sections = [
    {
      title: "Seasonal men's clothings",
      subtitle: "Class, touch, maturity, what else can you ask for a man?",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
    {
      title: "Super cute women's wears",
      subtitle:
        "Elegance isn't solely defined by what you wear but by how you wear them.",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "hats",
      subtitle: "Classic, Retro, Seasonal, we've got you covered No CAP.",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      subtitle: "Custom jackets, trimmed to show your class.",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers & slides",
      subtitle: "Slip in our sneakers, this is not a toosie slide.",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
  ];
  return (
    <div className="carousel_container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[A11y, Autoplay]}
        className="swiper"
        autoplay={{ delay: 10000, disableOnInteraction: true }}
      >
        {sections.map(({ id, ...otherSectionprops }) => (
          <SwiperSlide key={id} className="swiper_slide">
            <MenuItem key={id} {...otherSectionprops} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
