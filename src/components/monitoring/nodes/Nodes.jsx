import React, { useState, useEffect } from 'react';
import NodesList from "./NodesList";
import NodesDetailCard from "./NodeDetailCard";
import {customizedAxios as axios} from "../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function Nodes(props) {
    const [nodeData, setNodeData] = useState([]);
    const [selectedNode, setSelectedNode] = useState(null);
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const navigate = useNavigate();

    const loadData = () => {
        axios.get(`/api/v1/cluster/${clusterId}/nodes`,)
            .then((res) => {
                setNodeData(res.data.data);
            }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        loadData();
    }, []);
    
    return (
        <div className="overview-content">
            {!selectedNode && <NodesList nodeData={nodeData} setNode={setSelectedNode}/>}
            {selectedNode && <NodesDetailCard node={selectedNode} setNode={setSelectedNode} />}
        </div>
    );
}

export default Nodes;