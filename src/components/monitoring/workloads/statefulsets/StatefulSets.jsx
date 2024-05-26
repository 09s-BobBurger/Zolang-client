import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import StatefulSetsList from "./StatefulSetsList.jsx";
import StatefulSetDetail from "./StatefulSetDetail.jsx";

const StatefulSets = () => {
    const initStatefulSetName = useLocation().state ? useLocation().state.name : null;
    const [statefulSetName, setStatefulSetName] = useState(initStatefulSetName);

    const initStatefulSet = () => {
        setStatefulSetName(null);
    }

    return (
        <div>
            {statefulSetName ?
                <StatefulSetDetail statefulSetName={statefulSetName} initStatefulSet={initStatefulSet} />
                :
                <StatefulSetsList setStatefulSetName={setStatefulSetName} />
            }
        </div>
    );
};

export default StatefulSets;