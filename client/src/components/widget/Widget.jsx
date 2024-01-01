import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import { yellow } from "@mui/material/colors";

const Widget = ({ type }) => {

  //temporary
  const amount = 100;
  const diff = 20;

  let data;

  switch (type) {
        case "earnings":
            data = {
                title : "EARNINGS",
                isMoney: true,
                link : "see all earnings",
                icon:  <MovingOutlinedIcon className="icon" style={{backgroundColor: "rgba(38,230,0,0.4)", color: "#00B300" }}/>,
            };
            break;
         case "products":
            data = {
                title : "PRODUCTS",
                isMoney: false,
                link : "see all products",
                icon:  <CategoryOutlinedIcon className="icon" style={{backgroundColor: "rgba(255,25,25,0.4)", color: "#B30000" }}/>,
            };
            break;
         case "customers":
            data = {
                title : "CUSTOMERS",
                isMoney: false,
                link : "see all customers",
                icon:  <PeopleAltOutlinedIcon className="icon" style={{backgroundColor: "rgba(255,255,102,0.7)", color: "#E6E600" }}/>,
            };
            break;
         case "store-value":
             data = {
                title : "TOTAL STORE VALUE",
                isMoney: true,
                link : "see account status",
                icon:  <PaidOutlinedIcon className="icon" style={{backgroundColor: "rgba(51,51,255,0.4)", color: "#0000CC" }}/>,
            };
            break;
        default: break;
  }



  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "LKR"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                {diff} %
            </div>
           {data.icon}
        </div>
    </div>
  )
}

export default Widget