import React from "react";
import CalendarContainer from "./CalendarContainer";
import ArtistForm from "./Artist/ArtistForm";
import ArtistsAdapter from "../adapters/ArtistsAdapter";
import PlusIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
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

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  render() {
    const { currentUser } = this.props;
    const { showForm, artists } = this.state;
    return (
      <div className="container">
        <IconButton aria-label="add droptype" onClick={this.toggleForm}>
          <PlusIcon />
        </IconButton>
        {showForm && (
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
