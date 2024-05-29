import React, { useState } from 'react';
import PodDetail from "./PodDetail.jsx";
import PodsList from "./PodsList.jsx";
import {useLocation} from "react-router-dom";

const Pods = () => {
    const initPodName = useLocation().state ? useLocation().state.name : null;
    const initPodNamespace = useLocation().state ? useLocation().state.namespace : null;
    const [selectedPod, setSelectedPod] = useState([initPodName, initPodNamespace]);

    const initPod = () => {
        setSelectedPod(null);
    }

    return (
        <div className="overview-content">
            {selectedPod ? <PodDetail selectedPod={selectedPod} initPod={initPod} /> : <PodsList setPod={setSelectedPod} />}
        </div>
    );
};

export default Pods;