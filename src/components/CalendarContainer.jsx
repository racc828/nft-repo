import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import CollectionsAdapter from "../adapters/CollectionsAdapter";
import CollectionForm from "./Collection/CollectionForm";
import CollectionData from "./Collection/CollectionData";
import cloneDeep from "lodash/cloneDeep";
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
      const newData = data.map((collection) => {
        let newcoll = cloneDeep(collection);
        newcoll.title = collection.name;
        newcoll.end = new Date(newcoll.end);
        newcoll.start = new Date(newcoll.start);
        return newcoll;
      });

      this.setState({
        events: newData,
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
      data.title = data.name;
      data.start = new Date(data.start);
      data.end = new Date(data.end);
      this.setState({
        events: [...events, data],
        modalOpen: false,
        isCollectionForm: false,
      });
    });
  };

  eventStyleGetter = (event) => {
    const isDrawing =
      event &&
      event.droptypes &&
      event.droptypes.some((droptype) => {
        return droptype.dtype === "drawing";
      });

    var style = {
      backgroundColor: isDrawing ? "rgb(20, 182, 200)" : "#2F329F",
      color: "white",
      borderColor: isDrawing ? "rgb(97, 225, 239)" : "white",
      borderRadius: "0",
      padding: "5px",
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
