import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MonitoringNav from "../../components/monitoring/MonitoringNav.jsx";
import Overview from "../../components/monitoring/Overview.jsx";
import Nodes from "../../components/monitoring/nodes/Nodes.jsx";
import WorkloadsOverview from "../../components/monitoring/workloads/overview/Overview.jsx";
import Pods from "../../components/monitoring/workloads/Pods/Pods.jsx";

const Dashboard = () => {
    const location = useLocation();
    const [subCategories, setSubCategories] = useState([]);
    const [currentMenu, setCurrentMenu] = useState("");
    const clusterName = location.state?.data;
    const pathName = location.pathname.replace("%20", " ");

    const category = [
        { name: "Overview" },
        { name: "Nodes" },
        { name : 'Workloads', subCategory: ['Overview', 'Pods', 'Deployments', 'DaemonSets', 'StatefulSets', 'ReplicaSets', 'Jobs', 'CronJobs']},
        { name: "Network", subCategory: ["Services", "Ingresses"] },
    ];

    useEffect(() => {
        axios
            .get("your-api-endpoint-for-sub-categories")
            .then((response) => {
                // setSubCategories(response.data);
                setSubCategories(["Docker", "test-k8s", "nginx"])
            })
            .catch((error) => {
                console.error("Error fetching sub categories:", error);
            });
    }, []);

    useEffect(() => {
        const currentMenu =
            pathName === "/monitoring/dashboard" ? "overview" : pathName.split("/").pop();
        setCurrentMenu(currentMenu);
    }, [pathName]);

    return (
        <div
            className="dashboard-page"
            style={{
                position: "fixed",
                top: "68px",
                height: "calc(100% - 68px)",
                overflow: "auto",
            }}
        >
            <MonitoringNav items={category} currentMenu={currentMenu} namespace={subCategories} />
            <div className="monitoring-content">
                <p className="title">
                    {currentMenu.charAt(0).toUpperCase() + currentMenu.slice(1)}
                </p>
                <Routes>
                    <Route path="" element={<Overview />} />
                    <Route path="nodes" element={<Nodes />} />
                    <Route
                        path="workloads/overview"
                        element={<WorkloadsOverview />}
                    />
                    <Route path="workloads/pods" element={<Pods />} />
                    {/* 페이지 작업할 때마다 Route 추가 */}
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
