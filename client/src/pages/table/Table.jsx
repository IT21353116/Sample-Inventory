import "./table.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Table = () => {
  return (
    <div className="table">
    <Sidebar />
    <div className="table-Container">
        <Navbar />
        table
    </div>
</div>
  )
}

export default Table