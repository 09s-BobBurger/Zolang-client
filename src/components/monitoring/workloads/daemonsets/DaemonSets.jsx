import React, {useState} from 'react';
import DaemonSetsList from "./DaemonSetsList.jsx";
import DaemonSetDetail from "./DaemonSetDetail.jsx";
import {useLocation} from "react-router-dom";

const DaemonSets = () => {
    const initDaemonSetName = useLocation().state ? useLocation().state.name : null;
    const initDaemonSetNamespace = useLocation().state ? useLocation().state.namespace: null;
    const [selectedDaemon, setSelectedDaemon] = useState([initDaemonSetName, initDaemonSetNamespace]);

    const initDaemonSet = () => {
        setSelectedDaemon(null);
    }

    return (
        <div>
            {selectedDaemon ? <DaemonSetDetail
                    selectedDaemon={selectedDaemon}
                initDaemonSet={initDaemonSet}/>
            :
                <DaemonSetsList
                    setSelectedDaemon={setSelectedDaemon}
                />
            }
        </div>
    );
};

export default DaemonSets;