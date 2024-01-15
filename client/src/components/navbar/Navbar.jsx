import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {

    const {user} = useContext(AuthContext);

  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
            <input type="search" placeholder="Search..."/>
            <SearchOutlinedIcon className="icon"/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className="icon" />
                    English
                </div>
                <div className="item">
                    <NotificationsOutlinedIcon className="icon"/>
                    <span className="bell">1</span>
                </div>
                {user && <div className="item">
                   <img src={user.imageUrl} alt="User DP" 
                   className="avatar"
                   />
                </div>}
            </div>



            
        </div>



    </div>
  )
}

export default Navbar