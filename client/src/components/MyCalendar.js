import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import eventData from '../data/eventData'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const MyCalendar = props => (
    <Calendar className="chart-div"
      localizer={localizer}
      events={eventData}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
)

export default MyCalendar