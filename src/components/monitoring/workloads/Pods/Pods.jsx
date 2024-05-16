import React, { useState, useEffect } from 'react';
import PodDetail from "./PodDetail.jsx";
import PodsList from "./PodsList.jsx";

const Pods = () => {
    const [podsData, setPodsData] = useState([]);
    const [selectedPod, setSelectedPod] = useState(null);

    useEffect(() => {
        setPodsData(
        {
                "success": true,
                "data": [
                    {
                        "name": "nginx-ingress-microk8s-controller-4lp4l",
                        "namespace": "ingress",
                        "image": [
                            "registry.k8s.io/ingress-nginx/controller:v1.5.1"
                        ],
                        "labels": {
                            "controller-revision-hash": "7466d5f4cb",
                            "name": "nginx-ingress-microk8s",
                            "pod-template-generation": "10"
                        },
                        "node": "instance-20230123-2111",
                        "status": "Running",
                        "restartCount": [
                            14
                        ],
                        "age": "17 day",
                        "creationDateTime": "2024-04-26 오후 15:51:15"
                    },
                    {
                        "name": "nginx-ingress-microk8s-controller-4n4rq",
                        "namespace": "ingress",
                        "image": [
                            "registry.k8s.io/ingress-nginx/controller:v1.5.1"
                        ],
                        "labels": {
                            "controller-revision-hash": "7466d5f4cb",
                            "name": "nginx-ingress-microk8s",
                            "pod-template-generation": "10"
                        },
                        "node": "instance-20230502-0040",
                        "status": "Running",
                        "restartCount": [
                            15
                        ],
                        "age": "17 day",
                        "creationDateTime": "2024-04-26 오후 15:53:49"
                    },
                    {
                        "name": "jenkins-7c95566465-pv2lm",
                        "namespace": "jenkins",
                        "image": [
                            "ghcr.io/konempty/jenkins-docker-image:latest"
                        ],
                        "labels": {
                            "app": "jenkins",
                            "pod-template-hash": "7c95566465"
                        },
                        "node": "instance-20230426-2354",
                        "status": "Running",
                        "restartCount": [
                            0
                        ],
                        "age": "17 day",
                        "creationDateTime": "2024-04-26 오후 15:52:25"
                    },
                    {
                        "name": "calico-kube-controllers-56fd769446-2pjgx",
                        "namespace": "kube-system",
                        "image": [
                            "docker.io/calico/kube-controllers:v3.23.5"
                        ],
                        "labels": {
                            "k8s-app": "calico-kube-controllers",
                            "pod-template-hash": "56fd769446"
                        },
                        "node": "instance-20230203-2114",
                        "status": "Running",
                        "restartCount": [
                            0
                        ],
                        "age": "17 day",
                        "creationDateTime": "2024-04-26 오후 15:50:29"
                    }
                ],
                "error": null
            }.data
        )
    }, []);

    return (
        <div className="overview-content">
            {!selectedPod && <PodsList pods={podsData} setPod={setSelectedPod} />}
            {selectedPod && <PodDetail pod={selectedPod} />}

        </div>
    );
};

export default Pods;