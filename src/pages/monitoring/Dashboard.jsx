import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import MonitoringNav from "../../components/monitoring/MonitoringNav.jsx";
import Overview from "../../components/monitoring/Overview.jsx";

const Dashboard = () => {
    const location = useLocation();
    const clusterName = location.state?.data.item;

    const [currentMenu, setCurrentMenu] = useState('Overview');

    const navItems = [
        {name : 'Overview'},
        {name : 'Nodes'},
        {name : 'Workloads', innerMenu: ['Pods', 'Deployments', 'DaemonSets']}
    ]

    return (
        <div className='dashboard-page'>
            <MonitoringNav items={navItems} currentMenu={currentMenu} setCurrentMenu={setCurrentMenu}/>
            <div className='monitoring-content'>
                <p className="title">{currentMenu}</p>
                {currentMenu === 'Overview' &&
                    <Overview />
                }
            </div>
        </div>
    );
};

export default Dashboard;