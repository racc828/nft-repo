import React from "react";

export default class CollectionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      artist_id: null,
      name: "",
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
    const { artist_id, name } = this.state;
    const { start, end } = this.props.eventTime;
    e.preventDefault();
    let collection = { artist_id, name, start, end };
    this.props.createCollection(collection);
  };

  render() {
    return (
      <div>
        <form id="add-collection" onSubmit={this.handleSubmit}>
          <h1>Add Collection</h1>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="name"
          />
          <input
            onChange={this.handleChange}
            name="artist_id"
            type="number"
            placeholder="Artist Id"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
