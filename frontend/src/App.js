import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Employeeform from "./page/Employeeform";
import Dashboard from "./page/Dashboard";
import AdminLogin from "./page/AdminLogin";
import Employeelist from "./page/Employeelist";
function App() {
  return (
   <>
    <BrowserRouter>

    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/adminlogin" element={<AdminLogin/>}></Route>
            <Route path="/employeeform" element={<Employeeform/>}></Route>
              <Route path="/employeelist" element={<Employeelist />} />
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
