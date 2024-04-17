import React, { useState,  useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";

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

    const accessModeOptions = ["ReadWriteOnce", "ReadOnlyMany", "ReadWriteMany"];
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
        <div style={{ width: "40vw" }}>
            <Accordion style={{margin:"0"}}  expanded>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography variant="h5">metadata</Typography>
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
            <Accordion style={{margin:"0"}}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography variant="h5">spec</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        label="Capacity"
                        variant="standard"
                        value={storage}
                        onChange={(e) => setStorage(e.target.value)}
                    />
                    <br/><br/>
                    <Typography variant="h6">Access Modes</Typography>
                    <Select
                        label="Access Mode"
                        variant="standard"
                        value={accessMode}
                        onChange={(e) => setAccessMode(e.target.value)}
                    >
                        {accessModeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                    <Typography color="gray">NFS can support multiple read/write clients, but a specific NFS PV might be exported on the server as read-only.</Typography>
                    <br/><br/>
                    <Typography variant="h6">ReclaimPolicy</Typography>
                    <Select
                        label="Reclaim Policy"
                        variant="standard"
                        value={reclaimPolicy}
                        onChange={(e) => setReclaimPolicy(e.target.value)}
                    >
                        {reclaimPolicyOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                    <Typography color="gray">When a user is done with their volume, they can delete the PVC objects from the API that allows reclamation of the resource.</Typography>
                    <br/><br/>
                    <TextField
                        label="NFS Path"
                        variant="standard"
                        value={path}
                        onChange={(e) => setPath(e.target.value)}
                    />
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
