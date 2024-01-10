import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Table from "./pages/table/Table";
import Schedule from "./pages/schedule/Schedule";
import List from "./pages/list/List";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Profile from "./pages/profile/Profile";

function App() {

  const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(!user) {
       return <Navigate to="/login" />
    }

    return children;
  };

  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
          <Route path="/">
            <Route path="login" element={<Login/>}/>
            <Route index element={<ProtectedRoute>
              <Home/>
              </ProtectedRoute>
              }/>
            <Route path="customers" element={<ProtectedRoute>
              <Table/>
              </ProtectedRoute>
              } />
            <Route path="products" element={<ProtectedRoute><List/></ProtectedRoute>}/>
            <Route path="schedule" element={<ProtectedRoute><Schedule/></ProtectedRoute>}/>
            <Route path="employees" element={<ProtectedRoute><Table/></ProtectedRoute>} />
            <Route path="profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
          </Route>
      </Routes> 
     </BrowserRouter>
    </div>
  );
}
/*you can use nested routes in a Route element */

export default App;
