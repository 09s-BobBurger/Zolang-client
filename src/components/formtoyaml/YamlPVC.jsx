import React, { useState, useEffect } from "react";
import AccordionSummary from "./AccordionSummary.jsx";
import AccordionDetails from "./AccordionDetails.jsx";
import InputBox from "./InputBox.jsx";
import TextField from "./TextField.jsx";
import DeleteButton from "./DeleteButton.jsx";
import AddButton from "./AddButton.jsx";
import Accordion from "./Accordion.jsx";
import Radio from "./Radio.jsx";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import RadioLabel from "./RadioLabel.jsx";
import "../../styles/FORMTOYAML.css";
import StorageInputBox from "./StorageInputBox.jsx";

const YamlPvc = ({ onDataChange }) => {
    const [metadataName, setMetadataName] = useState("");
    const [labels, setLabels] = useState([]);
    const [storage, setStorage] = useState("");
    const [accessModes, setAccessModes] = useState("ReadWriteOnce");

    const yaml = `apiVersion: v1
kind: PersistentVolumeClaim 
metadata:
  name: ${metadataName}
  labels:${labels
    .filter((i) => i.name !== "" && i.value !== "")
    .map((i) => "\n    " + i.name + ": " + i.value)
    .join("")}
spec:
  resources: 
    requests:
      storage: ${storage}
  accessModes:
    - ${accessModes}
    `;

    useEffect(() => {
        console.log(yaml);
        onDataChange(yaml);
    }, [yaml]);

    const onClickAddLabel = () => {
        setLabels([...labels, { name: "", value: "" }]);
    };
    const onClickDeleteLabel = (index) => {
        setLabels(labels.filter((_, idx) => idx !== index));
    };

    return (
        <div>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="subtitle">PersistentVolumeClaim</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="detail-container">
                        <InputBox name="name" setter={setMetadataName} />
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
                        <div className="labels">
                            {labels.map((label, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <TextField
                                            onChange={(e) => {
                                                setLabels(
                                                    labels.map((item, idx) =>
                                                        idx === index
                                                            ? {
                                                                  ...item,
                                                                  name: e.target
                                                                      .value,
                                                              }
                                                            : item
                                                    )
                                                );
                                            }}
                                            id="standard-basic"
                                            variant="standard"
                                            label="name"
                                            placeholder="name"
                                        />
                                        <TextField
                                            onChange={(e) => {
                                                setLabels(
                                                    labels.map((item, idx) =>
                                                        idx === index
                                                            ? {
                                                                  ...item,
                                                                  value: e
                                                                      .target
                                                                      .value,
                                                              }
                                                            : item
                                                    )
                                                );
                                            }}
                                            id="standard-basic"
                                            variant="standard"
                                            label="value"
                                            placeholder="value"
                                        />
                                    </div>
                                );
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
                        <StorageInputBox
                            name="storage"
                            setter={setStorage}
                            max={0.5}
                        />
                        <Typography variant="subtitle1">
                            Access Modes
                        </Typography>
                        <FormControl
                            onChange={(e) => setAccessModes(e.target.value)}
                        >
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="ReadWriteOnce"
                                name="radio-buttons-group"
                            >
                                <RadioLabel
                                    value="ReadWriteOnce"
                                    control={<Radio />}
                                    label="ReadWriteOnce"
                                />
                                <RadioLabel
                                    value="ReadOnlyMany"
                                    control={<Radio />}
                                    label="ReadOnlyMany"
                                />
                                <RadioLabel
                                    value="ReadWriteMany"
                                    control={<Radio />}
                                    label="ReadWriteMany"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default YamlPvc;
