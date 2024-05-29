import React, {useEffect, useState} from 'react';
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import {useSelector} from "react-redux";
import ControllerDetail from "../ControllerDetail.jsx";
import useDidMountEffect from "../../../../hooks/useDidMountEffect.js";

const StatefulSetDetail = ({ statefulSetName, initStatefulSet }) => {
    const clusterId = useSelector(state => state.cluster.clusterId);
    const namespace = useSelector(state => state.namespace.namespace);
    const [statefulSet, setStatefulSet] = useState();

    useEffect(() => {
        axios
            .get(`/api/v1/cluster/${clusterId}/workload/statefuls/${statefulSetName}?namespace=${namespace}`)
            .then((res) => {
                setStatefulSet(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    useDidMountEffect(() => {
        initStatefulSet();
    }, [namespace]);

    return (
        <ControllerDetail detail={statefulSet} goToList={initStatefulSet}/>
    );
};

export default StatefulSetDetail;