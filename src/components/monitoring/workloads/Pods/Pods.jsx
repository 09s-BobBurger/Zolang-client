import React, { useState, useEffect } from 'react';
import PodDetail from "./PodDetail.jsx";
import PodsList from "./PodsList.jsx";

const Pods = () => {
    const [podsData, setPodsData] = useState({totalUsage: [], pods: []});
    const [selectedPod, setSelectedPod] = useState(null);

    useEffect(() => {
        setPodsData({
            success: true,
            data: {
                totalUsage: [
                    { time: "3:58", cpuUsage: 0.592, memoryUsage: 2044420096 },
                    { time: "3:59", cpuUsage: 0.586, memoryUsage: 1844912128 },
                    { time: "4:00", cpuUsage: 0.726, memoryUsage: 2045956096 },
                    { time: "4:01", cpuUsage: 0.558, memoryUsage: 2053005312 },
                    { time: "4:02", cpuUsage: 0.523, memoryUsage: 1850400768 },
                    { time: "4:03", cpuUsage: 0.532, memoryUsage: 2035978240 },
                    { time: "4:04", cpuUsage: 0.687, memoryUsage: 2144362496 },
                    { time: "4:05", cpuUsage: 0.595, memoryUsage: 2039218176 },
                    { time: "4:06", cpuUsage: 0.717, memoryUsage: 2032902144 },
                    { time: "4:07", cpuUsage: 0.62, memoryUsage: 2042241024 },
                    { time: "4:08", cpuUsage: 0.618, memoryUsage: 2033393664 },
                    { time: "4:09", cpuUsage: 0.532, memoryUsage: 2038845440 },
                    { time: "4:10", cpuUsage: 0.665, memoryUsage: 2063880192 }
                ],
                pods: [
                    {
                        name: "nginx-ingress-microk8s-controller-4n4rq",
                        namespace: "ingress",
                        images: ["registry.k8s.io/ingress-nginx/controller:v1.5.1"],
                        labels: {
                            "controller-revision-hash": "7466d5f4cb",
                            name: "nginx-ingress-microk8s",
                            "pod-template-generation": "10"
                        },
                        node: "instance-20230502-0040",
                        status: "Running",
                        restartCount: [21],
                        usage: {
                            time: "4:11",
                            cpuUsage: 0.002,
                            memoryUsage: 86224896
                        },
                        metrics: [
                            { time: "3:58", cpuUsage: 0.002, memoryUsage: 82481152 },
                            { time: "3:59", cpuUsage: 0.002, memoryUsage: 82137088 },
                            { time: "4:00", cpuUsage: 0.001, memoryUsage: 82149376 },
                            { time: "4:01", cpuUsage: 0.002, memoryUsage: 86355968 },
                            { time: "4:02", cpuUsage: 0.003, memoryUsage: 86466560 },
                            { time: "4:03", cpuUsage: 0.003, memoryUsage: 86458368 },
                            { time: "4:04", cpuUsage: 0.003, memoryUsage: 86507520 },
                            { time: "4:05", cpuUsage: 0.002, memoryUsage: 86614016 },
                            { time: "4:06", cpuUsage: 0.001, memoryUsage: 84226048 },
                            { time: "4:07", cpuUsage: 0.002, memoryUsage: 86355968 },
                            { time: "4:08", cpuUsage: 0.001, memoryUsage: 84217856 },
                            { time: "4:09", cpuUsage: 0.002, memoryUsage: 86224896 },
                            { time: "4:10", cpuUsage: 0.002, memoryUsage: 84217856 }
                        ],
                        age: "22 day",
                        creationDateTime: "2024. 04. 26. 오후 15:53:49"
                    }
                ]
            },
            error: null
        }.data)
    }, []);

    return (
        <div className="overview-content">
            {!selectedPod && <PodsList podsData={podsData} setPod={setSelectedPod} />}
            {selectedPod && <PodDetail pod={selectedPod} setPod={setSelectedPod} />}
        </div>
    );
};

export default Pods;