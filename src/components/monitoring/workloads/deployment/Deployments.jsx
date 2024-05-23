import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import loginUtil from "../../../../util/login.js";
import DeploymentsList from "./DeploymentsList.jsx";
import DeploymentDetail from "./DeploymentDetail.jsx";
import {useLocation} from "react-router-dom";

const Deployments = () => {
    const initDeploymentName = useLocation().state ? useLocation().state.name : null;
    const [deployments, setDeployments] = useState([]);
    const [deploymentName, setDeploymentName] = useState(initDeploymentName);
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

    const initDeployment = () => {
        setDeploymentName(null);
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace]);

    return (
        <div>
            {!deploymentName && <DeploymentsList deployments={deployments} setDeploymentName={setDeploymentName}/>}
            {deploymentName && <DeploymentDetail deploymentName={deploymentName} initDeployment={initDeployment}/>}
        </div>
    );
};

export default Deployments;