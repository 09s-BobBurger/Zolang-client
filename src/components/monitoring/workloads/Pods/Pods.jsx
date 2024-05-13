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
                            11
                        ],
                        "age": "13d"
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
                            12
                        ],
                        "age": "13d"
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
                        "age": "13d"
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
                        "age": "13d"
                    },
                    {
                        "name": "calico-node-6752t",
                        "namespace": "kube-system",
                        "image": [
                            "docker.io/calico/node:v3.23.5"
                        ],
                        "labels": {
                            "controller-revision-hash": "776859db77",
                            "k8s-app": "calico-node",
                            "pod-template-generation": "25"
                        },
                        "node": "instance-20230426-2354",
                        "status": "Running",
                        "restartCount": [
                            0
                        ],
                        "age": "9d"
                    },
                    {
                        "name": "calico-node-mlsvm",
                        "namespace": "kube-system",
                        "image": [
                            "docker.io/calico/node:v3.23.5"
                        ],
                        "labels": {
                            "controller-revision-hash": "776859db77",
                            "k8s-app": "calico-node",
                            "pod-template-generation": "25"
                        },
                        "node": "instance-20230502-0040",
                        "status": "Running",
                        "restartCount": [
                            0
                        ],
                        "age": "13d"
                    },
                    {
                        "name": "calico-node-xmjcx",
                        "namespace": "kube-system",
                        "image": [
                            "docker.io/calico/node:v3.23.5"
                        ],
                        "labels": {
                            "controller-revision-hash": "776859db77",
                            "k8s-app": "calico-node",
                            "pod-template-generation": "25"
                        },
                        "node": "instance-20230203-2114",
                        "status": "Running",
                        "restartCount": [
                            0
                        ],
                        "age": "9d"
                    },
                    {
                        "name": "calico-node-zkbfk",
                        "namespace": "kube-system",
                        "image": [
                            "docker.io/calico/node:v3.23.5"
                        ],
                        "labels": {
                            "controller-revision-hash": "776859db77",
                            "k8s-app": "calico-node",
                            "pod-template-generation": "25"
                        },
                        "node": "instance-20230123-2111",
                        "status": "Running",
                        "restartCount": [
                            0
                        ],
                        "age": "13d"
                    },
                    {
                        "name": "coredns-6f5f9b5d74-5z85f",
                        "namespace": "kube-system",
                        "image": [
                            "coredns/coredns:1.9.3"
                        ],
                        "labels": {
                            "k8s-app": "kube-dns",
                            "pod-template-hash": "6f5f9b5d74"
                        },
                        "node": "instance-20230502-0040",
                        "status": "Running",
                        "restartCount": [
                            5
                        ],
                        "age": "13d"
                    },
                    {
                        "name": "dashboard-metrics-scraper-7bc864c59-8mww9",
                        "namespace": "kube-system",
                        "image": [
                            "kubernetesui/metrics-scraper:v1.0.8"
                        ],
                        "labels": {
                            "k8s-app": "dashboard-metrics-scraper",
                            "pod-template-hash": "7bc864c59"
                        },
                        "node": "instance-20230123-2111",
                        "status": "Running",
                        "restartCount": [
                            0
                        ],
                        "age": "13d"
                    },
                    {
                        "name": "kubernetes-dashboard-bc88b5c98-djqrw",
                        "namespace": "kube-system",
                        "image": [
                            "kubernetesui/dashboard:v2.7.0"
                        ],
                        "labels": {
                            "k8s-app": "kubernetes-dashboard",
                            "pod-template-hash": "bc88b5c98"
                        },
                        "node": "instance-20230123-2111",
                        "status": "Running",
                        "restartCount": [
                            2
                        ],
                        "age": "13d"
                    },
                    {
                        "name": "metrics-server-6d8dc95f86-s52rm",
                        "namespace": "kube-system",
                        "image": [
                            "registry.k8s.io/metrics-server/metrics-server:v0.5.2"
                        ],
                        "labels": {
                            "k8s-app": "metrics-server",
                            "pod-template-hash": "6d8dc95f86"
                        },
                        "node": "instance-20230203-2114",
                        "status": "Running",
                        "restartCount": [
                            0
                        ],
                        "age": "13d"
                    },
                    {
                        "name": "grafana-657c7689bd-gqggn",
                        "namespace": "monitoring",
                        "image": [
                            "grafana/grafana:latest"
                        ],
                        "labels": {
                            "app": "grafana",
                            "pod-template-hash": "657c7689bd"
                        },
                        "node": "instance-20230123-2111",
                        "status": "Running",
                        "restartCount": [
                            17
                        ],
                        "age": "13d"
                    },
                    {
                        "name": "prometheus-server-0",
                        "namespace": "monitoring",
                        "image": [
                            "prom/prometheus:latest"
                        ],
                        "labels": {
                            "app": "prometheus",
                            "apps.kubernetes.io/pod-index": "0",
                            "controller-revision-hash": "prometheus-server-566fc6784b",
                            "statefulset.kubernetes.io/pod-name": "prometheus-server-0"
                        },
                        "node": "instance-20230502-0040",
                        "status": "Running",
                        "restartCount": [
                            0
                        ],
                        "age": "22d"
                    },
                    {
                        "name": "odya-api-66457b49ff-bktpv",
                        "namespace": "sandbox",
                        "image": [
                            "ghcr.io/weit-1st/odya:sandbox"
                        ],
                        "labels": {
                            "app": "odya-api",
                            "pod-template-hash": "66457b49ff"
                        },
                        "node": "instance-20230426-2354",
                        "status": "Running",
                        "restartCount": [
                            0
                        ],
                        "age": "13d"
                    },
                    {
                        "name": "odya-api-66457b49ff-jksmq",
                        "namespace": "sandbox",
                        "image": [
                            "ghcr.io/weit-1st/odya:sandbox"
                        ],
                        "labels": {
                            "app": "odya-api",
                            "pod-template-hash": "66457b49ff"
                        },
                        "node": "instance-20230203-2114",
                        "status": "Running",
                        "restartCount": [
                            0
                        ],
                        "age": "13d"
                    },
                    {
                        "name": "odya-api-7cf78bbd8f-ltxld",
                        "namespace": "stable",
                        "image": [
                            "ghcr.io/weit-1st/odya:stable"
                        ],
                        "labels": {
                            "app": "odya-api",
                            "pod-template-hash": "7cf78bbd8f"
                        },
                        "node": "instance-20230426-2354",
                        "status": "Running",
                        "restartCount": [
                            0
                        ],
                        "age": "13d"
                    },
                    {
                        "name": "odya-api-7cf78bbd8f-wpsv4",
                        "namespace": "stable",
                        "image": [
                            "ghcr.io/weit-1st/odya:stable"
                        ],
                        "labels": {
                            "app": "odya-api",
                            "pod-template-hash": "7cf78bbd8f"
                        },
                        "node": "instance-20230203-2114",
                        "status": "Running",
                        "restartCount": [
                            0
                        ],
                        "age": "13d"
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