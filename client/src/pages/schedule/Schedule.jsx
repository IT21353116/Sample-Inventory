import "./schedule.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import MyCalendar from "../../components/mycalendar/MyCalendar";

const Schedule = () => {
  return (
    <div className="schedule">
        <Sidebar />
        <div className="schedule-Container">
            <Navbar />
           <div className="calendar">
            <MyCalendar />
            </div> 
        </div>
    </div>
  )
}

export default Schedule