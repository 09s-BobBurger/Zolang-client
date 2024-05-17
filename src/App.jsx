import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Main from "./pages/Main.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import FormToYaml from "./pages/FormToYaml.jsx";
import Configure from "./pages/cd/Configure.jsx";
import CDDashboard from "./pages/cd/Dashboard.jsx";
import RepoList from "./pages/cd/RepoList.jsx";
import ClusterList from "./pages/monitoring/ClusterList.jsx";
import MonitoringDashboard from "./pages/monitoring/Dashboard.jsx";
import Token from "./pages/monitoring/Token.jsx";
import Nav from "./components/Nav.jsx";
import React, {useState, useEffect} from 'react';
import Header from "./components/Header.jsx";
import loginUtil from './util/login.js';
import { Provider } from "react-redux";
import store from "./redux/config/configStore.js";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    // cookie 유효성 검사 -> 후에 수정
    if (loginUtil.checkLogin()) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [])

  return (
    <Provider store={store}>
      <Router>
        {isLogin && <Header toggleDrawer={toggleDrawer} currentPage={window.location.pathname}/>}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={isLogin ? <Dashboard /> : <Navigate to={"/"} /> } />
          <Route path="/formToYaml" element={<FormToYaml />} />
          <Route path="/cd/configure" element={isLogin ? <Configure /> : <Navigate to={"/"} />} />
          <Route path="/cd/dashboard" element={isLogin ? <CDDashboard /> : <Navigate to={"/"} />} />
          <Route path="/cd/repoList" element={isLogin ? <RepoList /> : <Navigate to={"/"} />} />
          <Route path="/monitoring/clusterList" element={isLogin ? <ClusterList /> : <Navigate to={"/"} />} />
          <Route path="/monitoring/dashboard/*" element={isLogin ? <MonitoringDashboard /> : <Navigate to={"/"} />} />
          <Route path="/monitoring/token" element={isLogin ? <Token /> : <Navigate to={"/"} />} />
        </Routes>
        <Nav open={open} toggleDrawer={toggleDrawer}/>
      </Router>
    </Provider>
  )
}

export default App;
