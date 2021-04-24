import React from "react";
// import { TwitterIcon, InstagramIcon } from "@material-ui/icons";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Tooltip from "@material-ui/core/Tooltip";

const ArtistData = ({
  name,
  occupation,
  insta_link,
  insta_followers,
  twitter_link,
  twitter_followers,
}) => {
  return (
    <div className="collection-data">
      <h2>
        {name}: {occupation}
      </h2>
      {insta_link && (
        <Tooltip title={insta_followers} aria-label="insta_followers">
          <a href={insta_link} target="_blank" rel="noreferrer">
            <InstagramIcon className="social-icons" />
          </a>
        </Tooltip>
      )}
      {twitter_link && (
        <Tooltip title={twitter_followers} aria-label="twitter_followers">
          <a href={twitter_link} target="_blank" rel="noreferrer">
            <TwitterIcon className="social-icons" />
          </a>
        </Tooltip>
      )}
    </div>
  );
};

export default ArtistData;
