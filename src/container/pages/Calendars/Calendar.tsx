import DateCalendars from "../../../components/CalendarsC/DateCalendars"
import SidBar from "../../../components/SidBar"
import Layouts from "../../../docs/layouts/Layouts"

function Calendar() {
  return (
    <Layouts>

      <SidBar />
      <main className="py-10 lg:pl-72    h-screen">
        <div className="px-4 sm:px-6 lg:px-8  ">
          <DateCalendars />
        </div>
      </main>
    </Layouts>
  )
}

export default Calendar