import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

export default class CollectionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      selectedArtists: [],
      autoCompleteValue: "",
      autoCompleteInputValue: "",
    };
  }

  handleChange = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    this.setState({
      [property]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { selectedArtists, name } = this.state;
    const { start, end } = this.props.eventTime;
    const artist_ids = selectedArtists.map((artist) => artist.id);
    let collection = {
      artist_ids,
      name,
      start,
      end,
    };
    if (selectedArtists.length === 0) {
      alert("choose a value from the dropdown");
    } else {
      this.props.createCollection(collection);
    }
  };

  renderInput = (params) => {
    return <TextField {...params} variant="outlined" />;
  };

  setInputValue = (event, newInputValue) => {
    debugger; // eslint-disable-line
    this.setState({
      autoCompleteInputValue: newInputValue,
    });
  };

  setValue = (event, newValue) => {
    const { selectedArtists } = this.state;
    const selectError = selectedArtists.some((artist) => {
      return artist.id === newValue.id;
    });
    if (selectError) {
      alert("you already chose this artist");
    } else {
      this.setState({
        selectedArtists: [...selectedArtists, newValue],
        autoCompleteInputValue: "",
      });
    }
  };

  render() {
    const {
      selectedArtists,
      autoCompleteValue,
      autoCompleteInputValue,
    } = this.state;
    const { artists } = this.props;

    const artistsName = artists.map((artist) => {
      return { title: artist.name, id: artist.id };
    });
    return (
      <div>
        <form id="add-collection" onSubmit={this.handleSubmit}>
          <h1>Add Collection</h1>
          <div className="text-field-container">
            <TextField
              onChange={this.handleChange}
              name="name"
              label="Name"
              required
            />
          </div>
          <div className="text-field-container">
            <Autocomplete
              id="combo-box-demo"
              value={autoCompleteValue}
              options={artistsName}
              onChange={this.setValue}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              inputValue={autoCompleteInputValue}
              onInputChange={this.setInputValue}
              renderInput={this.renderInput}
            />
          </div>
          <Button type="submit" className="button-primary">
            Add
          </Button>
          {selectedArtists.map((artist) => {
            return <div>{artist.title}</div>;
          })}
        </form>
      </div>
    );
  }
}
