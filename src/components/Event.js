import { useState } from 'react'

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }

  return (
    <li className='event'>
      <h2>{event.summary}</h2>
      <h3>{event.created}</h3>
      <h3>{event.location}</h3>
      <button id="show-details" onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div id="details">
          Details
        </div>
      )}
    </li>
  );
}

export default Event;