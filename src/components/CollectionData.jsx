import React from "react";
import "../css/modal.css";

const CollectionData = ({ id, start, end, title, name, artistData }) => {
  return (
    <div className="collection-data">
      <h2>
        {artistData.name}: {artistData.occupation}
      </h2>
      {artistData.twitter_link && (
        <a href={artistData.twitter_link} target="_blank">
          Twitter {artistData.twitter_followers}
        </a>
      )}

      <br />

      {artistData.insta_link && (
        <a href={artistData.insta_link} target="_blank">
          Instagram {artistData.insta_followers}
        </a>
      )}

      <p>
        <strong>Collection:</strong> {name}
      </p>
    </div>
  );
};

export default CollectionData;
