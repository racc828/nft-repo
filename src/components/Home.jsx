import React from "react";
import CalendarContainer from "./CalendarContainer";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      stuff: "",
    };
  }

  render() {
    return (
      <div>
        <CalendarContainer />
      </div>
    );
  }
}
