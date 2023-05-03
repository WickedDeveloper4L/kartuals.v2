import React from "react";
import "./homepage.scss";
import HomeCarousel from "../../components/homepage-carousel/HomeCarousel";
import Featured from "../../components/featured/Featured";
import Banner from "../../components/banner/Banner";
import { IoMdMale } from "react-icons/io";
import { BiFemaleSign } from "react-icons/bi";
import { FaRedhat } from "react-icons/fa";
import { GiSleevelessJacket, GiConverseShoe } from "react-icons/gi";
const Homepage = () => {
  const bannerdata = [
    {
      title: "Men",
      icon: <IoMdMale className="banner_icon" />,
      link: "shop/mens",
    },
    {
      title: "Women",
      icon: <BiFemaleSign className="banner_icon" />,
      link: "shop/womens",
    },
    {
      title: "Jackets",
      icon: <GiSleevelessJacket className="banner_icon" />,
      link: "shop/jacket",
    },
    {
      title: "Sneakers",
      icon: <GiConverseShoe className="banner_icon" />,
      link: "shop/sneakers",
    },
    {
      title: "Hats",
      icon: <FaRedhat className="banner_icon" />,
      link: "shop/hats",
    },
  ];
  return (
    <div className="homepage">
      <HomeCarousel />
      <Featured title="Featured Products" slice={true} />

      {bannerdata.map(({ id, ...other }) => (
        <Banner key={id} {...other} />
      ))}
    </div>
  );
};

export default Homepage;
