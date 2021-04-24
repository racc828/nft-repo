import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import DroptypesAdapter from "../../adapters/DroptypesAdapter";

export default class DroptypeForm extends React.Component {
  constructor() {
    super();
    this.state = {
      link: "",
      dtype: "",
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
    const { id, closeForm } = this.props;
    let droptype = this.state;
    droptype.collection_id = id;
    DroptypesAdapter.createDroptype(droptype);
    closeForm();
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <form id="droptype-login" onSubmit={this.handleSubmit}>
          <h1>Add Droptype</h1>

          <FormControl component="fieldset">
            <FormLabel component="legend">Type</FormLabel>
            <RadioGroup
              aria-label="dtype"
              name="dtype"
              value={inputValue}
              onChange={this.handleChange}
            >
              <FormControlLabel value="open" control={<Radio />} label="Open" />
              <FormControlLabel
                value="drawing"
                control={<Radio />}
                label="Drawing"
              />
              <FormControlLabel
                value="auction"
                control={<Radio />}
                label="Auction"
              />
              <FormControlLabel value="pack" control={<Radio />} label="Pack" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            onChange={this.handleChange}
            label="Link"
            name="link"
            required
          />
          <Button type="submit" variant="contained" color="secondary">
            Add
          </Button>
        </form>
      </div>
    );
  }
}
