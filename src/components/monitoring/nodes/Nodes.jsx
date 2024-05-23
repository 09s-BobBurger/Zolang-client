import React, { useState, useEffect } from 'react';
import NodesList from "./NodesList";
import NodesDetailCard from "./NodeDetailCard";
import {customizedAxios as axios} from "../../../util/customizedAxios.js";

function Nodes(props) {
    const [nodeData, setNodeData] = useState([]);
    const [selectedNode, setSelectedNode] = useState(null);

    useEffect(() => {
        setNodeData([
            {
                allocatable: {
                    "allocatable-memory": "7926968Ki",
                    "allocatable-cpu": "10",
                    "allocatable-pods": "110",
                },
                KubeletVersion: "v1.29.1",
                created: "2024-03-20T14:26:36Z",
                ready: "True",
                name: "docker-desktop",
                capacity: {
                    "capacity-memory": "8029368Ki",
                    "capacity-pods": "110",
                    "capacity-cpu": "10",
                },
            },
            {
                allocatable: {
                    "allocatable-memory": "4096000Ki",
                    "allocatable-cpu": "2",
                    "allocatable-pods": "110",
                },
                KubeletVersion: "v1.29.1",
                created: "2024-05-01T12:00:00Z",
                ready: "True",
                name: "minikube",
                capacity: {
                    "capacity-memory": "4096000Ki",
                    "capacity-pods": "110",
                    "capacity-cpu": "2",
                },
            },
        ]);
        axios
            .get("#")
            .then((response) => {
                // setNodeData(response.data.data);      
            })
            .catch((error) => {
                console.error("Error fetching node data:", error);
            });
    }, []);
    return (
        <div className="overview-content">
            {!selectedNode && <NodesList namespace={"test"} nodeData={nodeData} setNode={setSelectedNode}/>}
            {selectedNode && <NodesDetailCard node={selectedNode} setNode={setSelectedNode} />}
        </div>
    );
}

export default Nodes;