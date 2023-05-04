import React from "react";
import "./homepage.scss";
import HomeCarousel from "../../components/homepage-carousel/HomeCarousel";
import Featured from "../../components/featured/Featured";
import Banner from "../../components/banner/Banner";
import { IoMdMale } from "react-icons/io";
import { BiFemaleSign } from "react-icons/bi";
import { FaRedhat } from "react-icons/fa";
import { GiSleevelessJacket, GiConverseShoe } from "react-icons/gi";
import Services from "../../components/services/Services";
const Homepage = () => {
  const bannerdata = [
    {
      title: "Men",
      icon: <IoMdMale className="banner_icon" />,
      link: "shop/mens",
      id: 1,
    },
    {
      title: "Women",
      icon: <BiFemaleSign className="banner_icon" />,
      link: "shop/womens",
      id: 2,
    },
    {
      title: "Jackets",
      icon: <GiSleevelessJacket className="banner_icon" />,
      link: "shop/jacket",
      id: 3,
    },
    {
      title: "Sneakers",
      icon: <GiConverseShoe className="banner_icon" />,
      link: "shop/sneakers",
      id: 4,
    },
    {
      title: "Hats",
      icon: <FaRedhat className="banner_icon" />,
      link: "shop/hats",
      id: 5,
    },
  ];
  return (
    <div className="homepage">
      <HomeCarousel />
      <Featured title="Featured Products" slice={true} />
      <div className="banners">
        {bannerdata.map(({ id, ...other }) => (
          <Banner key={id} {...other} />
        ))}
      </div>
      <Services />
    </div>
  );
};

export default Homepage;
