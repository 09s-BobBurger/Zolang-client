import React, { useState, useEffect } from "react";
import "../../../../styles/MONITORING.css";
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import TableForm from "./TableForm";
import {useSelector} from "react-redux";

function Deployment(props) {
    const [deployment, setDeployments] = useState([]);
    const clusterId = useSelector(state => state.cluster.clusterId);
    const namespace = useSelector(state => state.namespace.namespace);

    const loadData = async () => {
        try {
            let res;
            if (namespace === "All") {
                res = await axios.get(`/api/v1/cluster/${clusterId}/workload/deployments` );
            } else {
                res = await axios.get(`/api/v1/cluster/${clusterId}/workload/deployments/namespace?namespace=${namespace}`);
            }
            setDeployments(res.data.data.controllers);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace]);
    
    return (
        deployment? 
        <TableForm data={deployment} title="Deployments" /> : null
    );

}

export default Deployment;