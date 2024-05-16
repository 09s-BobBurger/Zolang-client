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
                    "metadata": {
                        "name": "grafana-657c7689bd-gqggn",
                        "namespace": "monitoring",
                        "creationDate": "2024 .04 .26 .",
                        "creationTime": "오후 02:11:40",
                        "age": "17 day",
                        "uid": "cc272971-122b-4665-92bb-a75dad0e611b",
                        "labels": {
                            "app": "grafana",
                            "pod-template-hash": "657c7689bd"
                        },
                        "annotations": {
                            "cni.projectcalico.org/containerID": "1d94c5f774cc1ca00089e855352bafc167d8656001b5f47a734188f00fd551c0",
                            "cni.projectcalico.org/podIP": "10.1.75.185/32",
                            "cni.projectcalico.org/podIPs": "10.1.75.185/32",
                            "kubectl.kubernetes.io/restartedAt": "2024-04-26T14:11:20Z"
                        }
                    },
                    "resource": {
                        "node": "instance-20230123-2111",
                        "status": "Running",
                        "ip": "10.1.75.185",
                        "priorityClass": null,
                        "restartCount": [
                            20
                        ],
                        "serviceAccount": "default",
                        "imagePullSecret": null
                    },
                    "conditions": [
                        {
                            "type": "PodReadyToStartContainers",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "17 day",
                            "reason": null,
                            "message": null
                        },
                        {
                            "type": "Initialized",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "17 day",
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
                            "lastTransitionTime": "17 day",
                            "reason": null,
                            "message": null
                        }
                    ],
                    "controlled": [
                        {
                            "name": "grafana-657c7689bd",
                            "kind": "ReplicaSet",
                            "replicas": 1,
                            "readyReplicas": 1,
                            "age": "17 day",
                            "labels": {
                                "app": "grafana",
                                "pod-template-hash": "657c7689bd"
                            },
                            "images": [
                                "grafana/grafana:latest"
                            ]
                        }
                    ],
                    "persistentVolumeClaims": [
                        {
                            "name": "grafana-pvc",
                            "label": "{}",
                            "status": "Bound",
                            "volume": "grafana-volume",
                            "capacity": "10 Gi",
                            "accessMode": "[ReadWriteOnce]",
                            "storageClass": "grafana",
                            "creationTime": "2 month"
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