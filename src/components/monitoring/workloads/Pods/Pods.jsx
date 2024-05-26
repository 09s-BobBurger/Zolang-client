import React, { useState } from 'react';
import PodDetail from "./PodDetail.jsx";
import PodsList from "./PodsList.jsx";
import {useLocation} from "react-router-dom";

const Pods = () => {
    const initPodName = useLocation().state ? useLocation().state.name : null;
    const [selectedPod, setSelectedPod] = useState(initPodName);

    const initPod = () => {
        setSelectedPod(null);
    }

    return (
        <div className="overview-content">
            {selectedPod ? <PodDetail podName={selectedPod} initPod={initPod} /> : <PodsList setPod={setSelectedPod} />}
        </div>
    );
};

export default Pods;