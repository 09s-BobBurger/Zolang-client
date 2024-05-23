import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import loginUtil from "../../../../util/login.js";
import DeploymentsList from "./DeploymentsList.jsx";
import DeploymentDetail from "./DeploymentDetail.jsx";

const Deployments = () => {
    const [deployments, setDeployments] = useState([]);
    const [selectedDeployment, setSelectedDeployment] = useState(true);
    const clusterId = useSelector(state => state.cluster.clusterId);

    useEffect(() => {
        axios
            .get(`/api/v1/cluster/${clusterId}/deployment`,
                {
                    headers: {
                        "Authorization": "Bearer " + loginUtil.getAccessToken(),
                    }
                })
            .then((res) => {
                setDeployments(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            {!selectedDeployment && <DeploymentsList deployments={deployments} setDeployment={setSelectedDeployment}/>}
            {selectedDeployment && <DeploymentDetail deployment={selectedDeployment} setDeployment={setSelectedDeployment}/>}
        </div>
    );
};

export default Deployments;