import React from "react";
import { useSelector } from "react-redux/es/exports";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/CollectionItem";
import "./collection.scss";
import { useParams } from "react-router-dom";
import Featured from "../../components/featured/Featured";
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
const CollectionPage = () => {
  const { collectionId } = useParams();

  const collection = useSelector(selectCollection(collectionId));

  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <motion.div
        className="items"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </motion.div>
      <Featured title="Trending fashion" slice={true} />
    </div>
  );
};
export default CollectionPage;
