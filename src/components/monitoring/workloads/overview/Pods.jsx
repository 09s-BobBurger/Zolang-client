import React, { useState, useEffect } from "react";
import "../../../../styles/MONITORING.css";
import axios from "axios";
import Label from "../../nodes/Label.jsx";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import Status from "../../../icon/Status.jsx";

function Pods(props) {
    const [pods, setPods] = useState([]);
    useEffect(() => {
        axios
            .get("#")
            .then((response) => {
                // setPods(response.data);
                setPods([
                    {
                        name: "nginx-ingress-microk8s-controller-4lp4l",
                        namespace: "ingress",
                        image: [
                            "registry.k8s.io/ingress-nginx/controller:v1.5.1",
                        ],
                        labels: {
                            "controller-revision-hash": "7466d5f4cb",
                            name: "nginx-ingress-microk8s",
                            "pod-template-generation": "10",
                        },
                        node: "instance-20230123-2111",
                        status: "Running",
                        restartCount: [14],
                        age: "17 day",
                        creationDateTime: "2024-04-26 오후 15:51:15",
                        cpu: "10",
                        memory: "1000",
                    },
                    {
                        name: "nginx-ingress-microk8s-controller-4n4rq",
                        namespace: "ingress",
                        image: [
                            "registry.k8s.io/ingress-nginx/controller:v1.5.1",
                        ],
                        labels: {
                            "controller-revision-hash": "7466d5f4cb",
                            name: "nginx-ingress-microk8s",
                            "pod-template-generation": "10",
                        },
                        node: "instance-20230502-0040",
                        status: "Running",
                        restartCount: [15],
                        age: "17 day",
                        creationDateTime: "2024-04-26 오후 15:53:49",
                        cpu: "10",
                        memory: "1000",
                    },
                    {
                        name: "jenkins-7c95566465-pv2lm",
                        namespace: "jenkins",
                        image: ["ghcr.io/konempty/jenkins-docker-image:latest"],
                        labels: {
                            app: "jenkins",
                            "pod-template-hash": "7c95566465",
                        },
                        node: "instance-20230426-2354",
                        status: "Running",
                        restartCount: [0],
                        age: "17 day",
                        creationDateTime: "2024-04-26 오후 15:52:25",
                        cpu: "10",
                        memory: "1000",
                    },
                    {
                        name: "calico-kube-controllers-56fd769446-2pjgx",
                        namespace: "kube-system",
                        image: ["docker.io/calico/kube-controllers:v3.23.5"],
                        labels: {
                            "k8s-app": "calico-kube-controllers",
                            "pod-template-hash": "56fd769446",
                        },
                        node: "instance-20230203-2114",
                        status: "Running",
                        restartCount: [0],
                        age: "17 day",
                        creationDateTime: "2024-04-26 오후 15:50:29",
                        cpu: "10",
                        memory: "1000",
                    },
                ]);
            })
            .catch((error) => {
                console.error("Error fetching node data:", error);
            });
    }, []);

    return (
        <div
            style={{
                padding: "15px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                justifyContent: "center",
                height: "auto",
                overflow: "auto",
            }}
        >
            <div
                style={{
                    color: "#ffffff",
                    padding: "10px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    paddingLeft: "15px",
                    justifyContent: "space-between",
                    display: "flex",
                }}
            >
                <span
                    style={{
                        paddingTop: "10px",
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    Pods
                </span>
            </div>
            <hr
                style={{
                    width: "98%",
                    border: 0,
                    height: "1px",
                    backgroundColor: "#474B59",
                    marginBottom: "15px",
                }}
            />

            <div className="moni-workloads-table">
                <TableContainer>
                    <Table
                        sx={{ minWidth: 650, color: "#ffffff" }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ minWidth: "200px" }}>
                                    Name
                                </TableCell>
                                <TableCell>Namespace</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Labels</TableCell>
                                <TableCell>Node</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Restart</TableCell>
                                <TableCell>CPU</TableCell>
                                <TableCell>Memory</TableCell>
                                <TableCell>Age</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pods.slice(0, 3).map((pod, index) => (
                                <TableRow key={index}>
                                    <TableCell>{pod.name}</TableCell>
                                    <TableCell>{pod.namespace}</TableCell>
                                    <TableCell>
                                        {pod.image.join(", ")}
                                    </TableCell>
                                    <TableCell>
                                        <div
                                            style={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: "5px",
                                            }}
                                        >
                                            {Object.keys(pod.labels).map(
                                                (key, index) => (
                                                    <Label
                                                        name={`${key}: ${pod.labels[key]}`}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </TableCell>
                                    <TableCell>{pod.node}</TableCell>
                                    <TableCell><Status status={pod.status} /></TableCell>
                                    <TableCell>{pod.restartCount}</TableCell>
                                    <TableCell>{pod.cpu}</TableCell>
                                    <TableCell>{pod.memory}</TableCell>
                                    <TableCell>{pod.age}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default Pods;
