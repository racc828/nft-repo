import React from "react";
import CalendarContainer from "./CalendarContainer";
import ArtistForm from "./ArtistForm";
import "../css/modal.css";
import ArtistsAdapter from "../adapters/ArtistsAdapter";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      displayAddArtistForm: false,
      artists: [],
    };
  }

  componentDidMount() {
    ArtistsAdapter.getArtists().then((data) => {
      this.setState({
        artists: data,
      });
    });
  }

  createArtist = (artist) => {
    const { artists } = this.state;
    ArtistsAdapter.createArtist(artist).then((data) => {
      this.setState({
        artists: [...artists, data],
      });
    });
  };
  render() {
    const { currentUser } = this.props;
    const { displayAddArtistForm, artists } = this.state;
    return (
      <div>
        {displayAddArtistForm && (
          <ArtistForm
            createArtist={this.createArtist}
            currentUser={currentUser}
          />
        )}
        <CalendarContainer artists={artists} />
      </div>
    );
  }
}
