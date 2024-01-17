import "./navbar.scss";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DarkModeContext } from "../../context/darkModeContext";


const Navbar = () => {

    const {user} = useContext(AuthContext);
    const {dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
        <div className="wrapper">
          
            <div className="items">
                <div className="item">
                    <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({type: "TOGGLE"})}/>
                </div>
                <div className="item">
                    <LanguageOutlinedIcon className="icon" />
                    <span className="language">English</span>
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