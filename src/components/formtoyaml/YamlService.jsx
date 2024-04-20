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
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import DeleteButton from "./DeleteButton.jsx";
import InputBox from "./InputBox.jsx";
import '../../styles/FORMTOYAML.css';

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

    const yaml = `
apiVersion: v1
kind: service
metadata:
  name: ${metadataName}
  labels:
${labels.filter(i => i.name !== "" && i.value !== "").map(i => "    " + i.name + ": " + i.value).join("\n")}
spec:
  type: ${type}
  selector:
${matchLabels.filter(i => i.name !== "" && i.value !== "").map(i => "    " + i.name + ": " + i.value).join("\n")}
  ports:
    -
      name: ${portName}
      port: ${port}
      targetPort: ${targetPort} ${nodePort !== null ? "\n      nodePort: " + nodePort : ""}
      protocol: ${protocol}
    `
    useEffect(() => {
        console.log(yaml);
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
                    <Typography variant="h6">Service</Typography>
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
                                        <FormControlLabel value="ClusterIP" control={<Radio />} label="ClusterIP" />
                                        <FormControlLabel value="NodePort" control={<Radio />} label="NodePort" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </AccordionDetails>
                    </InnerAccordion>
                    <InnerAccordion>
                        <AccordionSummary>
                        <Typography variant="subtitle1">Selector</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="detail-container">
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
                                                                idx === index ? {...item, 'name': e.target.value} : item
                                                            ));
                                                        }
                                                    }
                                                    id="standard-basic" variant="standard" label="value" placeholder="name"/>
                                                <DeleteButton onClick={() => onClickDeleteMatchLabel(index)}/>
                                            </div>
                                        )
                                    })}
                                </div>
                                <AddButton onClick={onClickAddMatchLabel}>Add Labels</AddButton>
                            </div>
                        </AccordionDetails>
                    </InnerAccordion>
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
                                        <FormControlLabel value="SCTP" control={<Radio />} label="SCTP" />
                                        <FormControlLabel value="TCP" control={<Radio />} label="TCP" />
                                        <FormControlLabel value="UDP" control={<Radio />} label="UDP" />
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