import React, { useState, useEffect } from "react";
import "../../../../styles/MONITORING.css";
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import TableForm from "./TableForm";
import {useSelector} from "react-redux";

function Deployment(props) {
    const [deployment, setDeployments] = useState([]);
    const clusterId = useSelector(state => state.cluster.clusterId);
    const namespace = useSelector(state => state.namespace.namespace);

    const loadData = () => {
        const url = namespace === 'All' 
            ? `/api/v1/cluster/${clusterId}/workload/deployments` 
            : `/api/v1/cluster/${clusterId}/workload/deployments/namespace?namespace=${namespace}`;
        
        axios.get(url)
            .then((res) => {
                setDeployments(res.data.data.controllers || []);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace]);
    return (
        deployment?.length > 0 ?
        <TableForm data={deployment} title="Deployments" /> : null
    );

}

export default Deployment;