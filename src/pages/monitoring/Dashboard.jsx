import React, { useState, useEffect } from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { customizedAxios as axios } from "../../util/customizedAxios.js";
import MonitoringNav from "../../components/monitoring/MonitoringNav.jsx";
import Overview from "../../components/monitoring/Overview.jsx";
import WorkloadsOverview from '../../components/monitoring/workloads/overview/Overview.jsx';
import Pods from '../../components/monitoring/workloads/Pods/Pods.jsx'
import Nodes from '../../components/monitoring/nodes/Nodes.jsx'
import Services from "../../components/monitoring/network/services/Services.jsx";
import {useSelector} from "react-redux";
import DaemonSets from "../../components/monitoring/workloads/daemonsets/DaemonSets.jsx";
import Deployments from "../../components/monitoring/workloads/deployment/Deployments.jsx";
import ReplicaSets from "../../components/monitoring/workloads/replicasets/ReplicaSets.jsx";
import StatefulSets from "../../components/monitoring/workloads/statefulsets/StatefulSets.jsx";
import Jobs from "../../components/monitoring/workloads/jobs/Jobs.jsx";
import CronJobs from "../../components/monitoring/workloads/cronjobs/CronJobs.jsx";

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const [namespaces, setNamespaces] = useState(["All"]);
    const [currentMenu, setCurrentMenu] = useState("");
    const pathName = location.pathname.replace("%20", " ");
    const category = [
        { name: "Cluster Overview" },
        { name: "Nodes" },
        { name : 'Workloads', subCategory: ['Overview', 'Pods', 'Deployments', 'DaemonSets', 'StatefulSets', 'ReplicaSets', 'Jobs', 'CronJobs']},
        { name: "Network", subCategory: ["Services"] },
    ];

    useEffect(() => {
        // 클러스터 아이디 없이 접근한 경우 clusterList로 보냄
        if (clusterId === -1) {
            navigate("/monitoring/clusterList")
        }
        // axios로 namespace들을 불러와 앞에 All을 삽입할 것
        axios
            .get(`/api/v1/namespace/${clusterId}`)
            .then((response) => {
                setNamespaces(["All", ...response.data.data.map(i => i.namespace)]);
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
            <MonitoringNav items={category} currentMenu={currentMenu} namespaces={namespaces} />
            <div className="monitoring-content">
                <p className="title" style={{ width: "max-content"}}>
                    {currentMenu.charAt(0).toUpperCase() + currentMenu.slice(1)}
                </p>
                <Routes>
                    <Route path="" element={<Overview data={clusterId}/>} />
                    <Route path="nodes" element={<Nodes />} />
                    <Route
                        path="workloads/overview"
                        element={<WorkloadsOverview />}
                    />
                    <Route path="workloads/pods" element={<Pods />} />
                    <Route path="workloads/deployments" element={<Deployments />} />
                    <Route path="workloads/daemonsets" element={<DaemonSets />} />
                    <Route path="workloads/replicasets" element={<ReplicaSets />} />
                    <Route path="workloads/statefulsets" element={<StatefulSets />} />
                    <Route path="workloads/jobs" element={<Jobs />} />
                    <Route path="workloads/cronjobs" element={<CronJobs />} />
                    <Route path="network/services" element={<Services />} />
                    {/* 페이지 작업할 때마다 Route 추가 */}
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;
