import React, { useState, useEffect } from 'react';
import {Typography} from "@mui/material";
import AddButton from './AddButton.jsx'
import Accordion from './Accordion.jsx';
import AccordionDetails from './AccordionDetails.jsx'
import AccordionSummary from "./AccordionSummary.jsx";
import InnerAccordion from "./InnerAccordion.jsx";
import TextField from './TextField.jsx';
import Radio from './Radio.jsx';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import DeleteButton from "./DeleteButton.jsx";
import InputBox from "./InputBox.jsx";
import '../../styles/FORMTOYAML.css';
import RadioLabel from "./RadioLabel.jsx";

const YamlService = ({ onDataChange }) => {
    const [metadataName, setMetadataName] = useState("");
    const [labels, setLabels] = useState([]);
    const [matchLabels, setMatchLabels] = useState([]);
    const [type, setType] = useState("ClusterIP");
    const [portName, setPortName] = useState("");
    const [port, setPort] = useState("");
    const [targetPort, setTargetPort] = useState("");
    const [nodePort, setNodePort] = useState(null);
    const [protocol, setProtocol] = useState("TCP");

    const yaml = `apiVersion: v1
kind: service
metadata:
  name: ${metadataName}
  labels:${labels.filter(i => i.name !== "" && i.value !== "").map(i => "\n    " + i.name + ": " + i.value).join("")}
spec:
  type: ${type}
  selector:${matchLabels.filter(i => i.name !== "" && i.value !== "").map(i => "\n    " + i.name + ": " + i.value).join("")}
  ports:
    - name: ${portName}
      port: ${port}
      targetPort: ${targetPort} ${nodePort !== null ? "\n      nodePort: " + nodePort : ""}
      protocol: ${protocol}
    `
    useEffect(() => {
        onDataChange(yaml);
    }, [yaml])

    useEffect(() => {
        if (type !== "NodePort") {
            setNodePort(null)
        }
    }, [type]);

    const onClickAddLabel = () => {
        setLabels([...labels, {"name": "", "value": ""}]);
    }
    const onClickDeleteLabel = (index) => {
        setLabels(labels.filter((_, idx) => idx !== index));
    }
    const onClickAddMatchLabel = () => {
        setMatchLabels([...matchLabels, {"name": "", "value": ""}]);
    }
    const onClickDeleteMatchLabel = (index) => {
        setMatchLabels(matchLabels.filter((_, idx) => idx !== index));
    }

    return (
        <div>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="subtitle">Service</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="detail-container">
                        <InputBox name="name" setter={setMetadataName}/>
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
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="subtitle" >Spec</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <InnerAccordion>
                        <AccordionSummary>
                        <Typography variant="subtitle1">Type</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="detail-container">
                                <FormControl onChange={(e) => setType(e.target.value)}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue={type}
                                        name="radio-buttons-group"
                                    >
                                        <RadioLabel value="ClusterIP" control={<Radio />} label="ClusterIP" />
                                        <RadioLabel value="NodePort" control={<Radio />} label="NodePort" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </AccordionDetails>
                    </InnerAccordion>
                    <div className='detail-container'>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ flex: 6 }}>
                                <Typography variant="subtitle1">Selector</Typography>
                            </div>
                            <div style={{ flex: 6, textAlign: "right" }}>
                                <AddButton
                                    onClick={onClickAddMatchLabel}
                                >
                                    Add Label
                                </AddButton>
                            </div>
                        </div>
                        <div className="labels">
                            {matchLabels.map((label, index) => {
                                return (
                                    <div key={index} style={{ display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
                                        <TextField
                                            onChange={
                                                (e) => {
                                                    setMatchLabels(matchLabels.map((item, idx) =>
                                                        idx === index ? {...item, 'name': e.target.value} : item
                                                    ));
                                                }
                                            }
                                            id="standard-basic" variant="standard" label="name" placeholder="name"/>
                                        <TextField
                                            onChange={
                                                (e) => {
                                                    setMatchLabels(matchLabels.map((item, idx) =>
                                                        idx === index ? {...item, 'value': e.target.value} : item
                                                    ));
                                                }
                                            }
                                            id="standard-basic" variant="standard" label="value" placeholder="value"/>
                                        <DeleteButton onClick={() => onClickDeleteMatchLabel(index)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <InnerAccordion>
                        <AccordionSummary>
                        <Typography variant="subtitle1">Ports</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="detail-container">
                                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                    <TextField onChange={(e) => {setPortName(e.target.value);}} id="standard-basic" variant="standard" placeholder="name"/>
                                    <TextField onChange={(e) => {setPort(e.target.value);}} id="standard-basic" variant="standard" placeholder="port"/>
                                    <TextField onChange={(e) => {setTargetPort(e.target.value);}} id="standard-basic" variant="standard" placeholder="targetPort"/>
                                </div>
                                {type === "NodePort" && <InputBox name="nodePort" setter={setNodePort}/>}
                                <p>protocol</p>
                                <FormControl onChange={(e) => setProtocol(e.target.value)}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue={protocol}
                                        name="radio-buttons-group"
                                    >
                                        <RadioLabel value="SCTP" control={<Radio />} label="SCTP" />
                                        <RadioLabel value="TCP" control={<Radio />} label="TCP" />
                                        <RadioLabel value="UDP" control={<Radio />} label="UDP" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </AccordionDetails>
                    </InnerAccordion>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default YamlService;