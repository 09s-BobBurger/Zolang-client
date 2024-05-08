import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import MonitoringNav from "../../components/monitoring/MonitoringNav.jsx";
import Overview from "../../components/monitoring/Overview.jsx";
import Nodes from '../../components/monitoring/nodes/Nodes.jsx';

const Dashboard = () => {
    const location = useLocation();
    const clusterName = location.state?.data;

    const [currentMenu, setCurrentMenu] = useState('Overview');

    const category = [
        {name : 'Overview'},
        {name : 'Nodes'},
        {name : 'Workloads', subCategory: ['Pods', 'Deployments', 'DaemonSets', 'StatefulSets', 'ReplicaSets', 'Jobs', 'CronJobs']},
        {name : 'Network', subCategory: ['Services', 'Endpoints', 'Ingresses', 'Network Policies']},
        {name : 'Storage', subCategory: ['Persistent Volume Claims', 'Persistent Volumes', 'Storage Classes']},
    ]

    return (
        <div className='dashboard-page' style={{position: "fixed", top: "68px", height: "calc(100vh-67px)", overflow: "auto"}}>
            <MonitoringNav items={category} currentMenu={currentMenu} setCurrentMenu={setCurrentMenu}/>
            <div className='monitoring-content'>
                <p className="title">{currentMenu}</p>
                {currentMenu === 'Overview' &&
                    <Overview />
                }
                {currentMenu === 'Nodes' &&
                    <Nodes />
                }
            </div>
        </div>
    );
};

export default Dashboard;