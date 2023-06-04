import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminMenu from './Components/AdminMenu';
import UserMenu from './Components/UserMenu';
import Error from './Components/Error';
import { MenuContext } from './Components/MenuContext';
import { useState } from 'react';
import Login from './Components/Login';
import Schedule from './Components/Schedule';




function App() {
  const [menuData, setMenuData] = useState([]);

  return (
    <>
    <MenuContext.Provider value={{ menuData, setMenuData }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} >
              <Route path="/adminmenu" element={<AdminMenu />} />
              <Route path="/usermenu" element={<UserMenu />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Router>
      </div>
  </MenuContext.Provider>
    </>
  );
}

export default App;
