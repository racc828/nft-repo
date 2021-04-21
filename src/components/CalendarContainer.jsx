import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import CollectionsAdapter from "../adapters/CollectionsAdapter";
import CollectionForm from "./CollectionForm";
import CollectionData from "./CollectionData";
import { Modal } from "@material-ui/core";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar);

export default class CalendarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventTime: {},
      modalOpen: false,
      collectionData: {},
    };
  }

  componentDidMount() {
    CollectionsAdapter.getCollections().then((data) => {
      this.setState({
        events: data,
      });
    });
  }

  openCollectionForm = (e) => {
    const eventTime = { start: e.start, end: e.end };
    this.setState({
      modalOpen: true,
      isCollectionForm: true,
      eventTime,
    });
  };

  openCollectionData = (e) => {
    this.setState({
      modalOpen: true,
      collectionData: e,
      isCollectionForm: false,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      isCollectionForm: false,
    });
  };

  createCollection = (collection) => {
    const { events } = this.state;
    CollectionsAdapter.createCollection(collection).then((data) => {
      this.setState({
        events: [...events, data],
        modalOpen: false,
        isCollectionForm: false,
      });
    });
  };

  eventStyleGetter = (event) => {
    const isDrawing = event.droptypes.some((droptype) => {
      return droptype.dtype === "drawing";
    });

    var style = {
      backgroundColor: isDrawing ? "#FFC0CB" : "#2F329F",
      color: isDrawing ? "black" : "white",
    };
    return {
      style: style,
    };
  };

  render() {
    const {
      modalOpen,
      events,
      isCollectionForm,
      eventTime,
      collectionData,
    } = this.state;

    const { artists } = this.props;

    const body = isCollectionForm ? (
      <div className="modal-body">
        <CollectionForm
          artists={artists}
          eventTime={eventTime}
          createCollection={this.createCollection}
        />
      </div>
    ) : (
      <div className="modal-body">
        <CollectionData {...collectionData} />
      </div>
    );

    return (
      <div>
        <Modal open={modalOpen} onClose={this.closeModal} className="modal">
          {body}
        </Modal>
        <DnDCalendar
          selectable
          onSelectSlot={this.openCollectionForm}
          onSelectEvent={this.openCollectionData}
          defaultDate={moment().toDate()}
          defaultView="month"
          events={events}
          localizer={localizer}
          style={{ height: "100vh" }}
          eventPropGetter={this.eventStyleGetter}
        />
      </div>
    );
  }
}
