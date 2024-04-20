import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
import {useState} from "react";
import Header from "./components/Header.jsx";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Router>
        <Header open={navOpen} setOpen={setNavOpen} currentPage={window.location.pathname} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/formToYaml" element={<FormToYaml />} />
          <Route path="/cd/configure" element={<Configure />} />
          <Route path="/cd/dashboard" element={<CDDashboard />} />
          <Route path="/cd/repoList" element={<RepoList />} />
          <Route path="/monitoring/clusterList" element={<ClusterList />} />
          <Route path="/monitoring/dashboard" element={<MonitoringDashboard />} />
          <Route path="/monitoring/token" element={<Token />} />
        </Routes>
        <Nav open={navOpen}/>
      </Router>
    </>
  )
}

export default App;
