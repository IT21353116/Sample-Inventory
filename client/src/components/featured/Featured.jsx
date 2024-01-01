import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className='featured'>
            <div className="top">
                <div className="title">Total Revenue</div>
                <MoreVertIcon />
            </div>
        <div className="bottom">
            <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">LKR 420</p>
        </div>
    </div>
  )
}

export default Featured