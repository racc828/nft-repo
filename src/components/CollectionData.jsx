import React from "react";
import "../css/modal.css";
import DroptypeForm from "./DroptypeForm";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

export default class CollectionData extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
    };
  }

  closeForm = () => {
    this.setState({ showForm: false });
  };

  render() {
    const { showForm } = this.state;
    const { id, name, artistData, droptypes } = this.props;

    return (
      <div className="collection-data">
        <h2>
          {artistData.name}: {artistData.occupation}
        </h2>
        {artistData.insta_link && (
          <Tooltip
            title={artistData.insta_followers}
            aria-label="insta_followers"
          >
            <a href={artistData.insta_link} target="_blank">
              <InstagramIcon className="social-icons" />
            </a>
          </Tooltip>
        )}

        {artistData.twitter_link && (
          <Tooltip
            title={artistData.twitter_followers}
            aria-label="twitter_followers"
          >
            <a href={artistData.twitter_link} target="_blank">
              <TwitterIcon className="social-icons" />
            </a>
          </Tooltip>
        )}

        <p>
          <strong>Collection:</strong> {name}
        </p>

        <h3>Droptypes</h3>
        {droptypes &&
          droptypes.map((droptype) => {
            return (
              <div>
                <a href={droptype.link} target="_blank">
                  {droptype.dtype}
                </a>
              </div>
            );
          })}

        {showForm && <DroptypeForm closeForm={this.closeForm} id={id} />}
      </div>
    );
  }
}
