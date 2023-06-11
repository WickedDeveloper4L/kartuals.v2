import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./featured.scss";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.5,
    },
  },
};

const Featured = ({ slice, title }) => {
  const featuredProducts = [
    {
      name: "Adidas NMD",
      imageUrl: "https://i.ibb.co/FYt4XFB/adidas-nmd.webp",
      price: 220,
      id: 10,
    },
    {
      price: 280,
      imageUrl: "https://i.ibb.co/G7mMChZ/yeezy.jpg",
      name: "Adidas Yeezy",
      id: 11,
    },
    {
      price: 18,
      imageUrl: "https://i.ibb.co/ckQd0n0/blue-beanie.jpg",
      name: "Blue Beanie",
      id: 2,
    },
    {
      imageUrl: "https://i.ibb.co/0Mdv1Sv/brown-cowboy.webp",
      price: 35,
      name: "Brown Cowboy",
      id: 3,
    },
    {
      id: 4,
      price: 25,
      imageUrl: "https://i.ibb.co/sFGVWKX/grey-brimm.jpg",
      name: "Grey Brim",
    },
    {
      id: 31,
      imageUrl: "https://i.ibb.co/7k6tSgp/floralshirt.jpg",
      name: "Floral T-shirt",
      price: 20,
    },
    {
      price: 25,
      id: 32,
      imageUrl: "https://i.ibb.co/GxLyw0J/blackwhite.webp",
      name: "Black & White Longsleeve",
    },
    {
      imageUrl: "https://i.ibb.co/28RXvB1/pinkshirt.jpg",
      name: "Pink T-shirt",
      price: 25,
      id: 33,
    },
    {
      name: "Jean Long Sleeve",
      id: 34,
      price: 40,
      imageUrl: "https://i.ibb.co/QpCP28R/longsleeve.webp",
    },
    {
      name: "Blue Tanktop",
      price: 45,
      id: 27,
      imageUrl: "https://i.ibb.co/N1Rndr1/floral-blouse.jpg",
    },
    {
      id: 28,
      name: "Yellow Track Suit",
      imageUrl: "https://i.ibb.co/Rp1PBCy/tracksuitwomen.webp",
      price: 135,
    },
    {
      name: "White Blouse",
      id: 29,
      imageUrl: "https://i.ibb.co/8d3Nm1p/white-blouse.jpg",
      price: 20,
    },
    {
      imageUrl: "https://i.ibb.co/Lvsgd3B/greyjacket.jpg",
      price: 90,
      id: 20,
      name: "Grey Jean Jacket",
    },
    {
      imageUrl: "https://i.ibb.co/tc6wBcK/brownshearling.jpg",
      id: 21,
      price: 165,
      name: "Brown Shearling",
    },
  ];

  return (
    <div className="featured_con">
      <span className="featured_title">{title}</span>
      <motion.div
        className="featured_items"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {slice
          ? featuredProducts
              .slice(2, 10)
              .map((item) => <CollectionItem key={item.id} item={item} />)
          : featuredProducts.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
      </motion.div>
    </div>
  );
};

export default Featured;
