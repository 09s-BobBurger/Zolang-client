import React from 'react';
import { Route, Routes } from "react-router-dom";
import {useLocation} from "react-router-dom";
import MonitoringNav from "../../components/monitoring/MonitoringNav.jsx";
import Overview from "../../components/monitoring/Overview.jsx";
import Nodes from "../../components/monitoring/Nodes.jsx";

const Dashboard = () => {
    const location = useLocation();
    const clusterName = location.state?.data;
    const pathName = location.pathname.replace("%20", " ");
    const currentMenu = pathName === '/monitoring/dashboard' ? 'overview' : pathName.split("/").pop();

    const category = [
        {name : 'Overview'},
        {name : 'Nodes'},
        {name : 'Workloads', subCategory: ['Pods', 'Deployments', 'DaemonSets', 'StatefulSets', 'ReplicaSets', 'Jobs', 'CronJobs']},
        {name : 'Network', subCategory: ['Services', 'Endpoints', 'Ingresses', 'Network Policies']},
        {name : 'Storage', subCategory: ['Persistent Volume Claims', 'Persistent Volumes', 'Storage Classes']},
    ]

    return (
        <div className='dashboard-page' style={{position: "fixed", top: "68px", height: "calc(100vh-67px)", overflow: "auto"}}>
            <MonitoringNav items={category} currentMenu={currentMenu} />
            <div className='monitoring-content'>
                <p className="title">{currentMenu.charAt(0).toUpperCase() + currentMenu.slice(1)}</p>
                <Routes>
                    <Route path="" element={<Overview />} />
                    <Route path="nodes" element={<Nodes />} />
                    {/* Node 컴포넌트는 후에 Node 폴더 내 Node로 바꿀 것 */}
                    {/* 페이지 작업할 때마다 Route 추가 */}
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;