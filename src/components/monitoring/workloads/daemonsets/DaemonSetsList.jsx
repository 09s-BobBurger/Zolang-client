import React from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import loginUtil from "../../../../util/login.js";
import {useSelector} from "react-redux";
import UsageLineChart from "../../UsageLineChart.jsx";
import Label from "../../nodes/Label.jsx";
import Status from "../../../icon/Status.jsx";
import MiniUsageChart from "../../MiniUsageChart.jsx";
import ControllerTable from "../ControllerTable.jsx";

const listData = [
    {
        "name": "nginx-ingress-microk8s-controller",
        "namespace": "ingress",
        "images": [
            "registry.k8s.io/ingress-nginx/controller:v1.5.1"
        ],
        "labels": {
            "microk8s-application": "nginx-ingress-microk8s"
        },
        "replicas": 2,
        "readyReplicas": 2,
        "creationDateTime": "2023. 05. 03. 오전 08:35:01",
        "age": "1 year"
    },
    {
        "name": "calico-node",
        "namespace": "kube-system",
        "images": [
            "docker.io/calico/node:v3.23.5"
        ],
        "labels": {
            "k8s-app": "calico-node"
        },
        "replicas": 4,
        "readyReplicas": 4,
        "creationDateTime": "2023. 05. 01. 오후 14:09:48",
        "age": "1 year"
    }
]
const DaemonSetsList = ({daemonSets, setDaemonSet}) => {
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const onClickRow = (name) => {
        setDaemonSet(name);
        // axios
        //     .get(
        //         `/api/v1/cluster/${clusterId}/workload/pods/${podName}`,
        //         {
        //             headers: {
        //                 "Authorization": "Bearer " + loginUtil.getAccessToken(),
        //             }
        //         }
        //     )
        //     .then((res) => {
        //         setPod(res.data.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    }
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
                width: '79vw'
            }}
        >
            {/* Usage Charts */}
            {/*<div*/}
            {/*    style={{*/}
            {/*        display: "flex",*/}
            {/*        gap: "20px",*/}
            {/*        width: '100%'*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <UsageLineChart*/}
            {/*        title="CPU Usage"*/}
            {/*        data={podsData.totalUsage.map(i => i.cpuUsage)}*/}
            {/*        time={podsData.totalUsage.map(i => i.time)}*/}
            {/*        color="#f8fc00"*/}
            {/*        yAxis="CPU(cores)"*/}
            {/*    />*/}
            {/*    <UsageLineChart*/}
            {/*        title="Memory Usage"*/}
            {/*        data={podsData.totalUsage.map(i => i.memoryUsage/(10 ** 6))}*/}
            {/*        time={podsData.totalUsage.map(i => i.time)}*/}
            {/*        color="#00bbff"*/}
            {/*        yAxis="Memory(bytes)"*/}
            {/*        yFormat={(value) => value.toFixed(1).toString() + "Mi"}*/}
            {/*    />*/}
            {/*</div>*/}
            {/* DaemonSet List */}
            <ControllerTable data={listData} onClickRow={onClickRow} />
        </div>
    );
};

export default DaemonSetsList;