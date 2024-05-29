import React, {useState} from 'react';
import DeploymentsList from "./DeploymentsList.jsx";
import DeploymentDetail from "./DeploymentDetail.jsx";
import {useLocation} from "react-router-dom";

const Deployments = () => {
    const initDeploymentName = useLocation().state ? useLocation().state.name : null;
    const initDeploymentNamespace = useLocation().state ? useLocation().state.namespace: null;
    const [selectedDeployment, setSelectedDeployment] = useState(initDeploymentName && initDeploymentNamespace ? [initDeploymentName, initDeploymentNamespace] : null);

    const initDeployment = () => {
        setSelectedDeployment(null);
    }

    return (
        <div>
            {selectedDeployment ?
                <DeploymentDetail selectedDeployment={selectedDeployment} initDeployment={initDeployment}/>
                : <DeploymentsList setSelectedDeployment={setSelectedDeployment}/>}
        </div>
    );
};

export default Deployments;