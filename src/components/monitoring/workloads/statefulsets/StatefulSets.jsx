import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import StatefulSetsList from "./StatefulSetsList.jsx";
import StatefulSetDetail from "./StatefulSetDetail.jsx";

const StatefulSets = () => {
    const initStatefulSetName = useLocation().state ? useLocation().state.name : null;
    const initStatefulSetNamespace = useLocation().state ? useLocation().state.namespace : null;
    const [selectedStateful, setSelectedStateful] = useState(initStatefulSetName && initStatefulSetNamespace ? [initStatefulSetName, initStatefulSetNamespace] : null);

    const initStatefulSet = () => {
        setSelectedStateful(null);
    }

    return (
        <div>
            {selectedStateful ?
                <StatefulSetDetail selectedStateful={selectedStateful} initStatefulSet={initStatefulSet} />
                :
                <StatefulSetsList setSelectedStateful={setSelectedStateful} />
            }
        </div>
    );
};

export default StatefulSets;