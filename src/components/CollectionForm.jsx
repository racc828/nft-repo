import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

export default class CollectionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      artist_id: null,
      name: "",
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
    const { autoCompleteValue, name } = this.state;
    const { start, end } = this.props.eventTime;
    let collection = {
      artist_id: autoCompleteValue.id,
      name,
      start,
      end,
    };
    if (autoCompleteValue === "") {
      alert("choose a value from the dropdown");
    } else {
      this.props.createCollection(collection);
    }
  };

  renderInput = (params) => {
    return <TextField {...params} variant="outlined" />;
  };

  setInputValue = (event, newInputValue) => {
    this.setState({
      autoCompleteInputValue: newInputValue,
    });
  };

  setValue = (event, newValue) => {
    this.setState({
      autoCompleteValue: newValue,
    });
  };

  render() {
    const { autoCompleteValue, autoCompleteInputValue } = this.state;
    const { artists } = this.props;

    const artistsName = artists.map((artist) => {
      return { title: artist.name, id: artist.id };
    });
    return (
      <div>
        <form id="add-collection" onSubmit={this.handleSubmit}>
          <h1>Add Collection</h1>
          <TextField
            onChange={this.handleChange}
            name="name"
            label="Name"
            required
          />
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
          <Button type="submit" variant="contained" color="secondary">
            Add
          </Button>
        </form>
      </div>
    );
  }
}
