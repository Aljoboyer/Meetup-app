import React from 'react';
import CreateData from './Pages/DashBoard/CreateData/CreateData';
import ShowData from './Pages/DashBoard/ShowData/ShowData';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import DashboardHome from './Pages/DashBoard/DashboardHome/DashboardHome';
import './Styles/MainStyle.css'
import EditData from './Pages/DashBoard/ShowData/EditData';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardHome/>}>
                <Route path="/" element={<ShowData/>}/>
                <Route path="/CreateData" element={<CreateData/>}/>
                <Route path="/EditData/:id" element={<EditData/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
