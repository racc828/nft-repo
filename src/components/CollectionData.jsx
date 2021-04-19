import React from "react";
import "../css/modal.css";

const CollectionData = ({ collectionData }) => {
  return <div className="collection-data">{collectionData.title}</div>;
};

export default CollectionData;
