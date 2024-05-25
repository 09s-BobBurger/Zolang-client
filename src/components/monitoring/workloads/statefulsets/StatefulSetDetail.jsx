import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import ControllerDetail from "../ControllerDetail.jsx";

const StatefulSetDetail = ({ statefulSetName, initStatefulSet }) => {
    const clusterId = useSelector(state => state.cluster.clusterId);
    const [statefulSet, setStatefulSet] = useState();

    useEffect(() => {
        axios
            .get(`/api/v1/cluster/${clusterId}/workload/statefuls/${statefulSetName}`)
            .then((res) => {
                setStatefulSet(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    return (
        <ControllerDetail detail={statefulSet} goToList={initStatefulSet}/>
    );
};

export default StatefulSetDetail;