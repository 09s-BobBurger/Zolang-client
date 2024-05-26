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
        if (namespace === 'All') {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/deployments`)
                .then((res) => {
                    setDeployments(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/deployments/namespace?namespace=${namespace}`)
                .then(res => {
                    setDeployments(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace]);
    return <TableForm data={deployment} title="Deployments" />;

}

export default Deployment;