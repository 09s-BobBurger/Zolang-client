import React, { useState, useEffect } from 'react';
import NodesList from "./NodesList";
import NodesDetailCard from "./NodeDetailCard";
import { customizedAxios as axios } from "../../../util/customizedAxios.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Nodes(props) {
    const [nodeData, setNodeData] = useState([]);
    const [selectedNode, setSelectedNode] = useState(null);
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const navigate = useNavigate();

    const loadData = async () => {
        try {
            const res = await axios.get(`/api/v1/cluster/${clusterId}/nodes`);
            const initialNodeData = res.data.data;

            // 각 노드에 대해 추가 데이터를 가져와서 병합
            const updatedNodeDataPromises = initialNodeData.map(async (node) => {
                try {
                    const usageRes = await axios.get(`/api/v1/cluster/${clusterId}/usage/${node.name}`);
                    if (usageRes.data.success) {
                        const updatedNode = { ...node, nodeUsage: usageRes.data.data[0] };
                        return updatedNode;
                    } else {
                        return node;
                    }
                } catch (error) {
                    console.error(`Error fetching usage data for node ${node.name}:`, error);
                    return node;
                }
            });

            const updatedNodeData = await Promise.all(updatedNodeDataPromises);
            setNodeData(updatedNodeData);
        } catch (error) {
            console.error("Error loading initial node data:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, [clusterId]);

    const initNode = () => {
        setSelectedNode(null);
    }

    return (
        <div className="overview-content">
            {!selectedNode && <NodesList nodeData={nodeData} setNode={setSelectedNode} />}
            {selectedNode && <NodesDetailCard nodeName={selectedNode}  initNode={initNode} />}
        </div>
    );
}

export default Nodes;
