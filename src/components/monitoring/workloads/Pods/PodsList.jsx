import React, {useState} from 'react';
import Label from "../../nodes/Label.jsx";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import Status from "../../../icon/Status.jsx";

const PodsList = ({ pods, setPod }) => {

    const onClickRow = () => {
        setPod(
            {
                "success": true,
                "data": {
                    "metrics": [
                        {
                            "time": "4:04",
                            "cpuUsage": 0.001,
                            "memoryUsage": 63574016
                        },
                        {
                            "time": "4:05",
                            "cpuUsage": 0.002,
                            "memoryUsage": 63574016
                        },
                        {
                            "time": "4:06",
                            "cpuUsage": 0.001,
                            "memoryUsage": 63578112
                        },
                        {
                            "time": "4:07",
                            "cpuUsage": 0.001,
                            "memoryUsage": 63574016
                        },
                        {
                            "time": "4:08",
                            "cpuUsage": 0.001,
                            "memoryUsage": 63574016
                        },
                        {
                            "time": "4:09",
                            "cpuUsage": 0.002,
                            "memoryUsage": 63574016
                        },
                        {
                            "time": "4:10",
                            "cpuUsage": 0.001,
                            "memoryUsage": 63574016
                        },
                        {
                            "time": "4:11",
                            "cpuUsage": 0.001,
                            "memoryUsage": 63574016
                        },
                        {
                            "time": "4:12",
                            "cpuUsage": 0.001,
                            "memoryUsage": 63574016
                        },
                        {
                            "time": "4:13",
                            "cpuUsage": 0.002,
                            "memoryUsage": 63627264
                        },
                        {
                            "time": "4:14",
                            "cpuUsage": 0.002,
                            "memoryUsage": 53465088
                        },
                        {
                            "time": "4:15",
                            "cpuUsage": 0.002,
                            "memoryUsage": 53465088
                        },
                        {
                            "time": "4:16",
                            "cpuUsage": 0.001,
                            "memoryUsage": 53465088
                        }
                    ],
                    "metadata": {
                        "name": "grafana-657c7689bd-hxq6d",
                        "namespace": "monitoring",
                        "creationDate": "2024 .05 .16 .",
                        "creationTime": "오전 06:51:25",
                        "age": "2 day",
                        "uid": "0c570196-634b-4e6c-9c89-f32a6561967d",
                        "labels": {
                            "app": "grafana",
                            "pod-template-hash": "657c7689bd"
                        },
                        "annotations": {
                            "cni.projectcalico.org/containerID": "a579475697e82d2563a58712021f61dca7197b27b2288ade25e6d6f654bfd803",
                            "cni.projectcalico.org/podIP": "10.1.75.186/32",
                            "cni.projectcalico.org/podIPs": "10.1.75.186/32",
                            "kubectl.kubernetes.io/restartedAt": "2024-04-26T14:11:20Z"
                        }
                    },
                    "resource": {
                        "node": "instance-20230123-2111",
                        "status": "Running",
                        "ip": "10.1.75.186",
                        "priorityClass": null,
                        "restartCount": 3,
                        "serviceAccount": "default",
                        "imagePullSecret": null
                    },
                    "conditions": [
                        {
                            "type": "PodReadyToStartContainers",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2 day",
                            "reason": null,
                            "message": null
                        },
                        {
                            "type": "Initialized",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2 day",
                            "reason": null,
                            "message": null
                        },
                        {
                            "type": "Ready",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "1 day",
                            "reason": null,
                            "message": null
                        },
                        {
                            "type": "ContainersReady",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "1 day",
                            "reason": null,
                            "message": null
                        },
                        {
                            "type": "PodScheduled",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "2 day",
                            "reason": null,
                            "message": null
                        }
                    ],
                    "controlled": {
                        "name": "grafana-657c7689bd",
                        "kind": "ReplicaSet",
                        "replicas": 1,
                        "readyReplicas": 1,
                        "age": "22 day",
                        "labels": {
                            "app": "grafana",
                            "pod-template-hash": "657c7689bd"
                        },
                        "images": [
                            "grafana/grafana:latest"
                        ]
                    },
                    "persistentVolumeClaims": [
                        {
                            "name": "grafana-pvc",
                            "namespace": "monitoring",
                            "label": "{}",
                            "status": "Bound",
                            "volume": "grafana-volume",
                            "capacity": "10 Gi",
                            "accessMode": [
                                "ReadWriteOnce"
                            ],
                            "storageClass": "grafana",
                            "age": "2 month",
                            "creationDateTime": "2024. 02. 25. 오후 13:45:53"
                        }
                    ]
                },
                "error": null
            }.data
        )
    }
    return (
        <div
            style={{
                padding: "15px",
                outline: "1px solid #ABAFBD",
                borderRadius: "10px",
                background: "#2E3240",
                justifyContent: "center",
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
                            List
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

            <div className="moni-dashboard-nodes" style={{width: '78vw'}}>
                <TableContainer>
                    <Table
                        sx={{minWidth: 650, color: "#ffffff"}}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell align="center">
                                    Namespace
                                </TableCell>
                                <TableCell align="center">
                                    Image
                                </TableCell>
                                <TableCell align="left">
                                    Labels
                                </TableCell>
                                <TableCell align="center">
                                    Node
                                </TableCell>
                                <TableCell align="center">
                                    Status
                                </TableCell>
                                <TableCell align="center">
                                    Restart Counts
                                </TableCell>
                                <TableCell align="center">
                                    Age
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pods.map((pod) => (
                                <TableRow
                                    key={pod.name}
                                    onClick={() =>
                                        onClickRow()
                                    }
                                    sx={{
                                        "&:last-child td, &:last-child th":
                                            {
                                                border: 0,
                                            },
                                    }}
                                >
                                    <TableCell
                                        component="th"
                                        scope="row"
                                    >
                                        {pod.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {pod.namespace}
                                    </TableCell>
                                    <TableCell align="center">
                                        {pod.image}
                                    </TableCell>
                                    <TableCell align="center">
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                            {Object.keys(pod.labels).slice(0, 3).map((key) => {
                                                return <Label name={key + ":" + pod.labels[key]}/>
                                            })}
                                            {Object.keys(pod.labels).length > 3 && <Label name="..." />}
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        {pod.node}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Status status={pod.status} />
                                    </TableCell>
                                    <TableCell align="center">
                                        {pod.restartCount}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        onMouseEnter={(e) => {
                                            console.log(e);
                                        }}
                                    >
                                        {pod.age}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default PodsList;