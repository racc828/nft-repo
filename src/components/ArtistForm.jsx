import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class ArtistForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      occupation: "",
      insta_followers: null,
      insta_link: "",
      twitter_followers: null,
      twitter_link: "",
    };
  }

  handleChange = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    this.setState({
      [property]: value,
    });
  };

  //TODO update null values so that the form clears when submitted
  handleSubmit = (e) => {
    e.preventDefault();
    let { currentUser, createArtist } = this.props;
    let artist = this.state;
    artist.user_id = currentUser.id;
    debugger; // eslint-disable-line
    createArtist(artist);
    this.setState({
      name: "",
      occupation: "",
      insta_followers: null,
      insta_link: "",
      twitter_followers: null,
      twitter_link: "",
    });
  };

  render() {
    const {
      name,
      occupation,
      insta_followers,
      insta_link,
      twitter_followers,
      twitter_link,
    } = this.state;
    return (
      <div>
        <form id="add-collection" onSubmit={this.handleSubmit}>
          <h1>Add Collection</h1>
          <TextField
            onChange={this.handleChange}
            value={name}
            name="name"
            label="Name"
            required
          />
          <TextField
            onChange={this.handleChange}
            value={occupation}
            label="Occupation"
            name="occupation"
            required
          />
          <TextField
            onChange={this.handleChange}
            value={twitter_followers}
            name="twitter_followers"
            label="Twitter Followers"
            type="number"
          />
          <TextField
            onChange={this.handleChange}
            value={twitter_link}
            name="twitter_link"
            label="Twitter Link"
          />
          <TextField
            onChange={this.handleChange}
            value={insta_followers}
            name="insta_followers"
            label="Instagram Followers"
            type="number"
          />
          <TextField
            onChange={this.handleChange}
            value={insta_link}
            name="insta_link"
            label="Instagram Link"
          />
          <Button type="submit" variant="contained" color="secondary">
            Add
          </Button>
        </form>
      </div>
    );
  }
}
