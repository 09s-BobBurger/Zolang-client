import React, { useState, useEffect } from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MonitoringNav from "../../components/monitoring/MonitoringNav.jsx";
import Overview from "../../components/monitoring/Overview.jsx";
import WorkloadsOverview from '../../components/monitoring/workloads/overview/Overview.jsx';
import Pods from '../../components/monitoring/workloads/Pods/Pods.jsx'
import Nodes from '../../components/monitoring/nodes/Nodes.jsx'
import Services from "../../components/monitoring/network/services/Services.jsx";
import {useDispatch, useSelector} from "react-redux";
import {initCluster} from "../../redux/modules/cluster.js";
import {initNamespace} from "../../redux/modules/namespace.js";
import Deployments from "../../components/monitoring/workloads/deployment/Deployments.jsx";

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const dispatch = useDispatch();
    const [subCategories, setSubCategories] = useState([]);
    const [currentMenu, setCurrentMenu] = useState("");
    const pathName = location.pathname.replace("%20", " ");
    const category = [
        { name: "Cluster Overview" },
        { name: "Nodes" },
        { name : 'Workloads', subCategory: ['Overview', 'Pods', 'Deployments', 'DaemonSets', 'StatefulSets', 'ReplicaSets', 'Jobs', 'CronJobs']},
        { name: "Network", subCategory: ["Services", "Ingresses"] },
    ];

    useEffect(() => {
        // 클러스터 아이디 없이 접근한 경우 clusterList로 보냄
        if (clusterId === -1) {
            navigate("/monitoring/clusterList")
        }

        // axios로 namespace들을 불러와 앞에 All을 삽입할 것
        axios
            .get("your-api-endpoint-for-sub-categories")
            .then((response) => {
                // setSubCategories(response.data);
                setSubCategories(["All", "Docker", "test-k8s", "nginx"])
            })
            .catch((error) => {
                console.error("Error fetching sub categories:", error);
            });
    }, []);

    useEffect(() => {
        const currentMenu =
            pathName === "/monitoring/dashboard" ? "cluster overview" : pathName.split("/").pop();
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
                    <Route path="workloads/deployments" element={<Deployments />} />
                    <Route path="network/services" element={<Services />} />
                    {/* 페이지 작업할 때마다 Route 추가 */}
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
