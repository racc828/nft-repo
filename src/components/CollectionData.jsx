import React from "react";
import "../css/modal.css";

const CollectionData = ({ id, start, end, title, name, artistData }) => {
  return (
    <div className="collection-data">
      <h2>
        {artistData.name}: {artistData.occupation}
      </h2>
      <p>
        <strong>Collection:</strong> {name}
      </p>
    </div>
  );
};

export default CollectionData;
