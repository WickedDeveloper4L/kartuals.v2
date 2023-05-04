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
      imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
      price: 220,
      id: 10,
    },
    {
      price: 280,
      imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
      name: "Adidas Yeezy",
      id: 11,
    },
    {
      price: 18,
      imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      name: "Blue Beanie",
      id: 2,
    },
    {
      imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
      price: 35,
      name: "Brown Cowboy",
      id: 3,
    },
    {
      id: 4,
      price: 25,
      imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
      name: "Grey Brim",
    },
    {
      id: 31,
      imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
      name: "Floral T-shirt",
      price: 20,
    },
    {
      price: 25,
      id: 32,
      imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
      name: "Black & White Longsleeve",
    },
    {
      imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
      name: "Pink T-shirt",
      price: 25,
      id: 33,
    },
    {
      name: "Jean Long Sleeve",
      id: 34,
      price: 40,
      imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
    },
    {
      name: "Striped Sweater",
      price: 45,
      id: 27,
      imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
    },
    {
      id: 28,
      name: "Yellow Track Suit",
      imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
      price: 135,
    },
    {
      name: "White Blouse",
      id: 29,
      imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
      price: 20,
    },
    {
      imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
      price: 90,
      id: 20,
      name: "Grey Jean Jacket",
    },
    {
      imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
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
