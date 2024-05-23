import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import loginUtil from "../../../../util/login.js";
import DeploymentsList from "./DeploymentsList.jsx";
import DeploymentDetail from "./DeploymentDetail.jsx";

const Deployments = () => {
    const [deployments, setDeployments] = useState([]);
    const [selectedDeployment, setSelectedDeployment] = useState(null);
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

    return (
        <div>
            {!selectedDeployment && <DeploymentsList deployments={deployments} setDeployment={setSelectedDeployment}/>}
            {selectedDeployment && <DeploymentDetail deployment={selectedDeployment} setDeployment={setSelectedDeployment}/>}
        </div>
    );
};

export default Deployments;