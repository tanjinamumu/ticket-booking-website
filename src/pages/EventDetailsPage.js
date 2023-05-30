import React, { useState } from "react";
import EventComponent from "./EventComponent";
import EventDetailsComponent from "./EventDetailsComponent";

const App = () => {
    const [eventDetails, setEventDetails] = useState(null);
  
    const handleEventSubmit = (details) => {
      setEventDetails(details);
    };
  
    return (
      <div>
        {!eventDetails ? (
          <EventComponent onEventSubmit={handleEventSubmit} />
        ) : (
          <EventDetailsComponent eventDetails={eventDetails} />
        )}
      </div>
    );
  };
  

export default App;
