
import Card from "../../components/cards/Card";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
        <Sidebar />
        <div className="list-Container">
            <Navbar />
            <div className="card-Container">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
        </div>
    </div>
  )
}

export default List