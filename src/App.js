import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import UserLoggedIn from "./Utils/UserLoggedIn";
// import UserNotLoggedIn from "./Utils/UserNotLoggedIn";
import AdminLoggedIn from "./Utils/AdminLoggedIn";
import AdminNotLoggedIn from "./Utils/AdminNotLoggedIn";
import AdminHome from "./Components/AdminHome/AdminHome";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import Users from "./Components/Users/Users";
import Dashboard from "./Components/Dashboard/Dashboard";
import Tasks from "./Components/Tasks/Tasks";
import TimeSheet from "./Components/TimeSheet/TimeSheet";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route element={<NotLoggedIn />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<UserLogin />}>
            <Route element={<Home />} path="/home">
              <Route index element={<Navigate to="posts" />}></Route>

              <Route path="posts" index element={<Contents />} />
             
            </Route>
          </Route> */}
          <Route element={<AdminNotLoggedIn />}>
            <Route path="/admin-login" element={<AdminLogin />} />
          </Route>
          <Route element={<AdminLoggedIn />}>
            <Route element={<AdminHome />} path="/">
              <Route index element={<Navigate to="dashboard" />}></Route>

              <Route path="users" index element={<Users />} />
              <Route path="dashboard" index element={<Dashboard />} />
              <Route path="tasks" index element={<Tasks />} />
              <Route path="timesheet" index element={<TimeSheet />} />
            </Route>
          </Route>
        </Routes>

        {/* <Routes>  
                
        </Routes> */}
        {/* <Layout></Layout>  */}
      </BrowserRouter>
    </div>
  );
}

export default App;
