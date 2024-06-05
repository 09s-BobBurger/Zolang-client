import React, {useEffect, useState} from 'react';
import AccordionSummary from "./AccordionSummary.jsx";
import AccordionDetails from "./AccordionDetails.jsx";
import InputBox from "./InputBox.jsx";
import TextField from "./TextField.jsx";
import DeleteButton from "./DeleteButton.jsx";
import AddButton from "./AddButton.jsx";
import Accordion from "./Accordion.jsx";
import {Typography} from "@mui/material";
import Radio from "./Radio.jsx";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import RadioLabel from "./RadioLabel.jsx";
import StorageInputBox from "./StorageInputBox.jsx";
import '../../styles/FORMTOYAML.css';

const YamlPv = ({ onDataChange }) => {
    const [metadataName, setMetadataName] = useState("zolang");
    const [labels, setLabels] = useState([{name: "app", value: "web"}]);
    const [storageClassName, setStorageClassName] = useState("zolang-storage");
    const [storage, setStorage] = useState("1Gi");
    const [accessModes, setAccessModes] = useState("ReadWriteOnce");
    const [path, setPath] = useState("/path/on/host");

    const yaml = `apiVersion: v1
kind: PersistentVolume
metadata:
  name: ${metadataName}
  labels:${labels.filter(i => i.name !== "" && i.value !== "").map(i => "\n    " + i.name + ": " + i.value).join("")}
spec:
  storageClassName: ${storageClassName}
  capacity:
    storage: ${storage}
  accessModes:
    - ${accessModes}
  hostPath:
    path: ${path}
`

    useEffect(() => {
        onDataChange(yaml);
    }, [yaml])

    const onClickAddLabel = () => {
        setLabels([...labels, {"name": "", "value":""}]);
    }
    const onClickDeleteLabel = (index) => {
        setLabels(labels.filter((_, idx) => idx !== index));
    }

    return (
        <div>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="subtitle">PersistentVolume</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="detail-container">
                        <InputBox name="name" setter={setMetadataName} value={metadataName}/>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ flex: 6 }}>
                                <Typography variant="subtitle1">Labels</Typography>
                            </div>
                            <div style={{ flex: 6, textAlign: "right" }}>
                                <AddButton
                                    onClick={onClickAddLabel}
                                >
                                    Add Label
                                </AddButton>
                            </div>
                        </div>
                        <Typography color="gray" sx={{marginBottom: "10px"}}>
                            Key-value pairs that are attached to the PV object to categorize and organize them.
                        </Typography>
                        <div className="labels">
                            {labels.map((label, index) => {
                                return (
                                    <div key={index} style={{ display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
                                        <TextField onChange={
                                            (e) => {
                                                setLabels(labels.map((item, idx) =>
                                                    idx === index ? {...item, 'name': e.target.value} : item
                                                ));
                                            }
                                        } id="standard-basic" variant="standard" label="name" placeholder="name" value={label.name}/>
                                        <TextField onChange={
                                            (e) => {
                                                setLabels(labels.map((item, idx) =>
                                                    idx === index ? {...item, 'value': e.target.value} : item
                                                ));
                                            }
                                        }
                                                   id="standard-basic" variant="standard" label="value" placeholder="value" value={label.value}/>
                                        <DeleteButton onClick={() => onClickDeleteLabel(index)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="subtitle">Spec</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="detail-container">
                        <InputBox name="storageClassName" setter={setStorageClassName} value={storageClassName}/>
                        <Typography>capacity</Typography>
                        <Typography color="gray" sx={{marginBottom: "10px", marginTop: "10px"}}>
                            The storage capacity of the PV.
                        </Typography>
                        <div className="detail-container">
                            <StorageInputBox name="storage" setter={setStorage} max={1} value={storage}/>
                        </div>
                        <Typography>accessModes</Typography>
                        <Typography color="gray" sx={{marginBottom: "10px", marginTop: "10px"}}>
                            The mode in which the volume can be accessed.
                        </Typography>
                        <FormControl onChange={(e) => setAccessModes(e.target.value)}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={accessModes}
                                name="radio-buttons-group"
                            >
                                <RadioLabel  value="ReadWriteOnce" control={<Radio />} label="ReadWriteOnce" />
                                <RadioLabel value="ReadOnlyMany" control={<Radio />} label="ReadOnlyMany" />
                                <RadioLabel value="ReadWriteMany" control={<Radio />} label="ReadWriteMany" />
                            </RadioGroup>
                        </FormControl>
                        <Typography>hostPath</Typography>
                        <Typography color="gray" sx={{marginBottom: "10px", marginTop: "10px"}}>
                            A directory on the host node's filesystem to use as the storage for the PV.
                        </Typography>
                        <div className="detail-container">
                            <InputBox name="path" setter={setPath} value={path}/>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default YamlPv;