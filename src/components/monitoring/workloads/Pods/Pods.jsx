import React, { useState, useEffect } from 'react';
import PodDetail from "./PodDetail.jsx";
import PodsList from "./PodsList.jsx";
import {useSelector} from "react-redux";
import {customizedAxios as axios} from "../../../../util/customizedAxios.js";
import loginUtil from "../../../../util/login.js";
import {useLocation} from "react-router-dom";

const Pods = () => {
    const initPodName = useLocation().state ? useLocation().state.name : null;
    const [podsData, setPodsData] = useState({totalUsage: [], pods: []});
    const [selectedPod, setSelectedPod] = useState(initPodName);
    const clusterId = useSelector((state) => state.cluster.clusterId);
    const namespace = useSelector((state) => state.namespace.namespace);

    const loadData = () => {
        if (namespace === "All") {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/pods`,
                    {
                        headers: {
                            "Authorization": "Bearer " + loginUtil.getAccessToken(),
                        }
                    }
                )
                .then((res) => {
                    setPodsData(res.data.data);
                }).catch((err) => {
                console.log(err)
            })
        } else {
            axios
                .get(`/api/v1/cluster/${clusterId}/workload/pods/namespace?namespace=${namespace}`,
                    {
                        headers: {
                            "Authorization": "Bearer " + loginUtil.getAccessToken(),
                        }
                    }
                )
                .then((res) => {
                    setPodsData(res.data.data);
                }).catch((err) => {
                console.log(err)
            })
        }
    }

    const initPod = () => {
        setSelectedPod(null);
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        loadData();
    }, [namespace]);

    return (
        <div className="overview-content">
            {!selectedPod && <PodsList podsData={podsData} setPod={setSelectedPod} />}
            {selectedPod && <PodDetail podName={selectedPod} initPod={initPod} />}
        </div>
    );
};

export default Pods;