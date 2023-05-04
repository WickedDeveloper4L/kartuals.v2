import React from "react";
import "./preview-collection.scss";
import CollectionItem from "../collection-item/CollectionItem";
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
const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <motion.div
        className="preview"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </motion.div>
    </div>
  );
};

export default PreviewCollection;
