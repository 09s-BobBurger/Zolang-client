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
import FormControlLabel from "@mui/material/FormControlLabel";
import "../../styles/FORMTOYAML.css";
import StorageInputBox from "./StorageInputBox.jsx";

const YamlPvc = ({ onDataChange }) => {
    const [metadataName, setMetadataName] = useState("");
    const [labels, setLabels] = useState([]);
    const [storage, setStorage] = useState("");
    const [accessModes, setAccessModes] = useState("ReadWriteOnce");

    const yaml = `
    apiVersion: v1
    kind: PersistentVolumeClaim 
    metadata:
        name: ${metadataName}
      labels:
    ${labels
        .filter((i) => i.name !== "" && i.value !== "")
        .map((i) => "    " + i.name + ": " + i.value)
        .join("\n")}
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
                    <Typography variant="h6">PersistentVolumeClaim</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="detail-container">
                        <InputBox name="name" setter={setMetadataName} />
                        <p>labels</p>
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
                                        <DeleteButton
                                            onClick={() =>
                                                onClickDeleteLabel(index)
                                            }
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <AddButton onClick={onClickAddLabel}>
                            Add Labels
                        </AddButton>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="h6">Spec</Typography>
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
                                <FormControlLabel
                                    value="ReadWriteOnce"
                                    control={<Radio />}
                                    label="ReadWriteOnce"
                                />
                                <FormControlLabel
                                    value="ReadOnlyMany"
                                    control={<Radio />}
                                    label="ReadOnlyMany"
                                />
                                <FormControlLabel
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
