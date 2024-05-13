import React from 'react';
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
                        "name": "nginx-ingress-microk8s-controller-4n4rq",
                        "namespace": "ingress",
                        "conditions": [
                            "PodReadyToStartContainers",
                            "Initialized",
                            "Ready",
                            "ContainersReady",
                            "PodScheduled"
                        ],
                        "creationTime": "2024.04.26",
                        "age": "13d",
                        "uid": "f7971391-2a65-4b5b-9b77-62983090a475",
                        "labels": {
                            "controller-revision-hash": "7466d5f4cb",
                            "name": "nginx-ingress-microk8s",
                            "pod-template-generation": "10"
                        },
                        "annotations": {
                            "cni.projectcalico.org/containerID": "f757933b0663b3c79e71e2fb9d79124c65f07db8a4149368dd0259119373eccd",
                            "cni.projectcalico.org/podIP": "10.1.49.135/32",
                            "cni.projectcalico.org/podIPs": "10.1.49.135/32"
                        }
                    },
                    "cpu": null,
                    "memory": null,
                    "resource": {
                        "node": "instance-20230502-0040",
                        "status": "Running",
                        "ip": "10.1.49.135",
                        "priorityClass": null,
                        "restartCount": [
                            12
                        ],
                        "serviceAccount": "nginx-ingress-microk8s-serviceaccount",
                        "imagePullSecret": null
                    },
                    "conditions": [
                        {
                            "type": "PodReadyToStartContainers",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "13d",
                            "reason": "reasonTest reasonTest reasonTest",
                            "message": "messageTest messageTest messageTest"
                        },
                        {
                            "type": "Initialized",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "13d",
                            "reason": null,
                            "message": null
                        },
                        {
                            "type": "Ready",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "-18m",
                            "reason": null,
                            "message": null
                        },
                        {
                            "type": "ContainersReady",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "-18m",
                            "reason": null,
                            "message": null
                        },
                        {
                            "type": "PodScheduled",
                            "status": "True",
                            "lastProbeTime": null,
                            "lastTransitionTime": "13d",
                            "reason": null,
                            "message": null
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
                                    <TableCell align="center">
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