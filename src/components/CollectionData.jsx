import React from "react";
import "../css/modal.css";
import ArtistData from "./ArtistData";
import DroptypeForm from "./DroptypeForm";
import PlusIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";

export default class CollectionData extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
    };
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  render() {
    const { showForm } = this.state;
    const { id, name, artists, droptypes } = this.props;

    // prettier-ignore
    console.log(`%cdroptypes`, 'background: #FF1493; color: #fff; padding: 3px;', droptypes); // eslint-disable-line

    return (
      <div className="collection-data">
        {artists.map((artist) => {
          return <ArtistData {...artist} />;
        })}
        <p>
          <strong>Collection:</strong> {name}
        </p>
        <h3>
          Droptypes
          <IconButton
            color="secondary"
            aria-label="add droptype"
            onClick={this.toggleForm}
          >
            <PlusIcon />
          </IconButton>
        </h3>

        {droptypes &&
          droptypes.map((droptype) => {
            return (
              <div>
                <a href={droptype.link} target="_blank" rel="noreferrer">
                  {droptype.dtype}
                </a>
              </div>
            );
          })}
        {showForm && <DroptypeForm closeForm={this.toggleForm} id={id} />}
      </div>
    );
  }
}
