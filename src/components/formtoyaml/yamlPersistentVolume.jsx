import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "./Accordion.jsx";
import AccordionDetails from "./AccordionDetails.jsx";
import AccordionSummary from "./AccordionSummary.jsx";
import TextField from "./TextField.jsx";
import "../../styles/FORMTOYAML.css";
import StorageInputBox from "./StorageInputBox.jsx";

function YamlPersistentVolume({ onDataChange }) {
    const initialYaml = `apiVersion: v1
kind: PersistentVolume 
metadata:
  name: mypv
spec:
  capacity: 
    storage: 1Gi(max)
  accessModes:
    - ReadWriteMany
  persistentVolumeReclaimPolicy: Delete
  nfs:
    path: /cloudpv
    server: 211.183.3.199`;

    const [volumeName, setVolumeName] = useState("mypv");
    const [storage, setStorage] = useState("1Gi");
    const [accessMode, setAccessMode] = useState("ReadWriteMany");
    const [server, setServer] = useState("211.183.3.199");
    const [path, setPath] = useState("/cloudpv");
    const [reclaimPolicy, setReclaimPolicy] = useState("Delete");
    const [yamlText, setYamlText] = useState(initialYaml);

    const accessModeOptions = [
        "ReadWriteOnce",
        "ReadOnlyMany",
        "ReadWriteMany",
    ];
    const reclaimPolicyOptions = ["Retain", "Delete", "Recycle", "Restore"];

    useEffect(() => {
        updateYamlText();
    }, [volumeName, storage, accessMode, server, path, reclaimPolicy]);

    function generateYaml() {
        return `apiVersion: v1
kind: PersistentVolume 
metadata:
  name: ${volumeName}
spec:
  capacity: 
    storage: ${storage}
  accessModes:
    - ${accessMode}
  persistentVolumeReclaimPolicy: ${reclaimPolicy}
  nfs:
    path: ${path}
    server: ${server}`;
    }

    function updateYamlText() {
        const newYamlText = generateYaml();
        setYamlText(newYamlText);
        onDataChange(newYamlText); // 상위 컴포넌트로 텍스트 전달
    }

    return (
        <div>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="subtitle">PersistentVolume</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        variant="standard"
                        label="Volume Name"
                        value={volumeName}
                        onChange={(e) => setVolumeName(e.target.value)}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="subtitle">Spec</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>capacity</Typography>
                    <Typography color="gray" sx={{marginBottom: "10px", marginTop: "10px"}}>
                        The storage capacity of the PV.
                    </Typography>
                    <div className="detail-container">
                        <StorageInputBox name="storage" setter={setStorage} max={1} value={storage}/>
                    </div>
                    <div style={{ height: "10px" }}></div>
                    <Typography variant="subtitle1">Access Modes</Typography>
                    <Select
                        label="Access Mode"
                        variant="standard"
                        value={accessMode}
                        sx={{ color: "#ffffff", fontSize: "14px" }}
                        onChange={(e) => setAccessMode(e.target.value)}
                    >
                        {accessModeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                    <div style={{ height: "10px" }}></div>
                    <Typography color="gray">
                        NFS can support multiple read/write clients, but a
                        specific NFS PV might be exported on the server as
                        read-only.
                    </Typography>
                    <br />
                    <Typography variant="subtitle1">ReclaimPolicy</Typography>
                    <Select
                        label="Reclaim Policy"
                        variant="standard"
                        value={reclaimPolicy}
                        sx={{ color: "#ffffff", fontSize: "14px" }}
                        onChange={(e) => setReclaimPolicy(e.target.value)}
                    >
                        {reclaimPolicyOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                    <div style={{ height: "10px" }}></div>
                    <Typography color="gray">
                        When a user is done with their volume, they can delete
                        the PVC objects from the API that allows reclamation of
                        the resource.
                    </Typography>
                    <br />
                    <TextField
                        label="NFS Path"
                        variant="standard"
                        value={path}
                        onChange={(e) => setPath(e.target.value)}
                    />
                    <div style={{ height: "10px" }}></div>
                    <TextField
                        label="NFS Server"
                        variant="standard"
                        value={server}
                        onChange={(e) => setServer(e.target.value)}
                    />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default YamlPersistentVolume;
