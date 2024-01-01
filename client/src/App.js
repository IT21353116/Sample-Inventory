import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Table from "./pages/table/Table";
import Schedule from "./pages/schedule/Schedule";
import List from "./pages/list/List";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="customers" element={<Table/>} />
            <Route path="products" element={<List/>}/>
            <Route path="schedule" element={<Schedule/>}/>
            <Route path="employees" element={<Table/>} />
          </Route>
      </Routes> 
     </BrowserRouter>
    </div>
  );
}
/*you can use nested routes in a Route element */

export default App;
