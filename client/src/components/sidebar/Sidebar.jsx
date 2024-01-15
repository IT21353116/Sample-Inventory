import "./sidebar.scss";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import CategoryIcon from '@mui/icons-material/Category';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = async () => {
    await axios.post("/api/auth/logout");
    dispatch( { type: "LOGOUT" });

  }

  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>MAHIMA</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration: "none"}}>
               <li>
                <SpaceDashboardIcon className="icon"/>
                <span>Dashboard</span></li>
                </Link>
               <p  className="title">LIST</p>
               <Link to="/products" style={{textDecoration: "none"}}>
               <li>
                <CategoryIcon className="icon"/>
                <span>Products</span></li>
                </Link>
                <Link to="/schedule" style={{textDecoration: "none"}}>
                <li>
                <CalendarMonthOutlinedIcon className="icon"/>
                <span>Scheduler</span></li>
                </Link>
                <li>
                <InventoryIcon className="icon"/>
                <span>Suppliers</span></li>
                <li>
                <PeopleAltRoundedIcon className="icon"/>
                <span>Customers</span></li>
               <p  className="title">USER</p>
               <li>
                <CircleNotificationsRoundedIcon className="icon"/>
                <span>Notifications</span></li>
                <Link to="/profile" style={{textDecoration: "none"}}>
               <li>
                <AccountBoxRoundedIcon className="icon"/>
                <span>Profile</span></li>
                </Link>
               <li onClick={handleLogout}>
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