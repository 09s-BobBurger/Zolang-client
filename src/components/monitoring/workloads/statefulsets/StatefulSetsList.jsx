import React from 'react';
import ControllerTable from "../ControllerTable.jsx";

const StatefulSetsList = ({ statefulSets , setStatefulSetName }) => {
    const onClickRow = (name) => {
        setStatefulSetName(name);
    }
    return (
        <div>
            <ControllerTable data={statefulSets} onClickRow={onClickRow} />
        </div>
    );
};

export default StatefulSetsList;