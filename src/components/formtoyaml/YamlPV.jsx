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
import FormControlLabel from "@mui/material/FormControlLabel";
import StorageInputBox from "./StorageInputBox.jsx";
import '../../styles/FORMTOYAML.css';

const YamlPv = ({ onDataChange }) => {
    const [metadataName, setMetadataName] = useState("");
    const [labels, setLabels] = useState([]);
    const [storageClassName, setStorageClassName] = useState("");
    const [storage, setStorage] = useState("");
    const [accessModes, setAccessModes] = useState("ReadWriteOnce");
    const [path, setPath] = useState("");

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
        console.log(yaml);
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
                    <Typography variant="h6">PersistentVolume</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="detail-container">
                        <InputBox name="name" setter={setMetadataName}/>
                        <p>labels</p>
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
                                        } id="standard-basic" variant="standard" label="name" placeholder="name"/>
                                        <TextField onChange={
                                            (e) => {
                                                setLabels(labels.map((item, idx) =>
                                                    idx === index ? {...item, 'value': e.target.value} : item
                                                ));
                                            }
                                        }
                                                   id="standard-basic" variant="standard" label="value" placeholder="value"/>
                                        <DeleteButton onClick={() => onClickDeleteLabel(index)}/>
                                    </div>
                                )
                            })}
                        </div>
                        <AddButton onClick={onClickAddLabel} >Add Labels</AddButton>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h6">Spec</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="detail-container">
                        <InputBox name="storageClassName" setter={setStorageClassName}/>
                        <p>capacity</p>
                        <div className="detail-container">
                            <StorageInputBox name="storage" setter={setStorage} max={1}/>
                        </div>
                        <p>accessModes</p>
                        <FormControl onChange={(e) => setAccessModes(e.target.value)}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={accessModes}
                                name="radio-buttons-group">
                                <FormControlLabel value="ReadWriteOnce" control={<Radio />} label="ReadWriteOnce" />
                                <FormControlLabel value="ReadOnlyMany" control={<Radio />} label="ReadOnlyMany" />
                                <FormControlLabel value="ReadWriteMany" control={<Radio />} label="ReadWriteMany" />
                            </RadioGroup>
                        </FormControl>
                        <p>hostPath</p>
                        <div className="detail-container">
                            <InputBox name="path" setter={setPath}/>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default YamlPv;