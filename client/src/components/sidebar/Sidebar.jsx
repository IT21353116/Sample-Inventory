import "./sidebar.scss";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import CategoryIcon from '@mui/icons-material/Category';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import BadgeIcon from '@mui/icons-material/Badge';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>MAHIMA</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
               <li>
                <SpaceDashboardIcon className="icon"/>
                <span>Dashboard</span></li>
               <p  className="title">LIST</p>
               <li>
                <CategoryIcon className="icon"/>
                <span>Products</span></li>
                <li>
                <CalendarMonthOutlinedIcon className="icon"/>
                <span>Scheduler</span></li>
                <li>
                <PeopleAltRoundedIcon className="icon"/>
                <span>Customers</span></li>
               <li>
               <BadgeIcon className="icon"/>
                <span>Employees</span></li>
               <p  className="title">USER</p>
               <li>
                <CircleNotificationsRoundedIcon className="icon"/>
                <span>Notifications</span></li>
               <li>
                <AccountBoxRoundedIcon className="icon"/>
                <span>Profile</span></li>
               <li>
                <LogoutRoundedIcon className="icon"/>
                <span>Logout</span></li>
            </ul>
        </div>
        <div className="bottom">
           <div className="colorOptions"></div>
           <div className="colorOptions"></div>
        </div>
    </div>
  )
}

export default Sidebar