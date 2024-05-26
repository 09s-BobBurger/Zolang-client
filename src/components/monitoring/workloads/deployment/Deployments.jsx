import React, {useState} from 'react';
import DeploymentsList from "./DeploymentsList.jsx";
import DeploymentDetail from "./DeploymentDetail.jsx";
import {useLocation} from "react-router-dom";

const Deployments = () => {
    const initDeploymentName = useLocation().state ? useLocation().state.name : null;
    const [deploymentName, setDeploymentName] = useState(initDeploymentName);

    const initDeployment = () => {
        setDeploymentName(null);
    }

    return (
        <div>
            {deploymentName ?
                <DeploymentDetail deploymentName={deploymentName} initDeployment={initDeployment}/>
                : <DeploymentsList setDeploymentName={setDeploymentName}/>}
        </div>
    );
};

export default Deployments;