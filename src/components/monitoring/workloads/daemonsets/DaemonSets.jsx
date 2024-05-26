import React, {useState} from 'react';
import DaemonSetsList from "./DaemonSetsList.jsx";
import DaemonSetDetail from "./DaemonSetDetail.jsx";
import {useLocation} from "react-router-dom";

const DaemonSets = () => {
    const initDaemonSetName = useLocation().state ? useLocation().state.name : null;
    const [daemonSetName, setDaemonSetName] = useState(initDaemonSetName);

    const initDaemonSet = () => {
        setDaemonSetName(null);
    }

    return (
        <div>
            {daemonSetName ? <DaemonSetDetail
                daemonSetName={daemonSetName}
                initDaemonSet={initDaemonSet}/>
            :
                <DaemonSetsList
                    setDaemonSetName={setDaemonSetName}
                />
            }
        </div>
    );
};

export default DaemonSets;