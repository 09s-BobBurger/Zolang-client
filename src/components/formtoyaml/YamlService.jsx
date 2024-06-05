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
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const YamlService = ({ onDataChange }) => {
    const [metadataName, setMetadataName] = useState("zolang");
    const [labels, setLabels] = useState([{name: "app", value: "web"}]);
    const [matchLabels, setMatchLabels] = useState([{name: "app", value: "web"}]);
    const [type, setType] = useState("ClusterIP");
    const [ports, setPorts] = useState([{'portName': 'http', 'port': '80', 'targetPort': '9376', 'protocol' : 'TCP'}])
    const [nodePort, setNodePort] = useState(null);
    const protocolOptions = ["SCTP", "TCP", "UDP"]

    const yaml = `apiVersion: v1
kind: service
metadata:
  name: ${metadataName}
  labels:${labels.filter(i => i.name !== "" && i.value !== "").map(i => "\n    " + i.name + ": " + i.value).join("")}
spec:
  type: ${type}
  selector:${matchLabels.filter(i => i.name !== "" && i.value !== "").map(i => "\n    " + i.name + ": " + i.value).join("")}
  ports:${ports
        .filter(i => i.port !== "" && i.targetPort !== "")
        .map(i => 
            `\n    - name: ${i.portName}
       protocol: ${i.protocol}
       port: ${i.port}
       targetPort: ${i.targetPort} ${nodePort !== null ? "\n      nodePort: " + nodePort : ""}
            `
        )}
    
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
    const onClickAddPort = () => {
        setPorts([...ports, {"portName": "", "port": "", "targetPort": "", "protocol": "TCP"}])
    }
    const onClickDeleteMatchLabel = (index) => {
        setMatchLabels(matchLabels.filter((_, idx) => idx !== index));
    }
    const onClickDeletePort = (index) => {
        setPorts(ports.filter((_, idx) => idx !== index));
    }

    return (
        <div>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="subtitle">Service</Typography>
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
                            A set of key-value pairs that are used to identify and categorize the Service. Labels are optional but can be used by other resources to locate and interact with this Service.
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
                    <Typography variant="subtitle" >Spec</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <InnerAccordion>
                        <AccordionSummary>
                        <Typography variant="subtitle1">Type</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="gray" sx={{marginBottom: "10px"}}>
                                This field specifies the type of Service. ClusterIP exposes the Service on an internal IP in the cluster. NodePort exposes the Service on each Node's IP at a static port.
                            </Typography>
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
                        <Typography color="gray" sx={{marginBottom: "10px"}}>
                            Selector specifies a set of labels that the Service uses to select the Pods to route traffic to.
                        </Typography>
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
                                            id="standard-basic" variant="standard" label="name" placeholder="name" value={label.name}/>
                                        <TextField
                                            onChange={
                                                (e) => {
                                                    setMatchLabels(matchLabels.map((item, idx) =>
                                                        idx === index ? {...item, 'value': e.target.value} : item
                                                    ));
                                                }
                                            }
                                            id="standard-basic" variant="standard" label="value" placeholder="value" value={label.value}/>
                                        <DeleteButton onClick={() => onClickDeleteMatchLabel(index)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='detail-container'>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ flex: 6 }}>
                                <Typography variant="subtitle1">Ports</Typography>
                            </div>
                            <div style={{ flex: 6, textAlign: "right" }}>
                                <AddButton
                                    onClick={onClickAddPort}
                                >
                                    Add Port
                                </AddButton>
                            </div>
                        </div>
                        <Typography color="gray" sx={{marginBottom: "10px"}}>
                            Ports defines the ports that the Service will expose and the corresponding ports on the selected Pods.
                        </Typography>
                        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                            {ports.map((portItem, index) => {
                                return (
                                    <div key={index}
                                         style={{
                                             display: 'flex',
                                             justifyContent: "space-between",
                                             paddingBottom: "20px",
                                             borderBottom: '1px solid #535769',
                                        }}
                                    >
                                        <div style={{ display: 'flex', flexDirection: "column", gap:"15px"}}>
                                            <TextField
                                                onChange={
                                                    (e) => {
                                                        setPorts(ports.map((item, idx) =>
                                                            idx === index ? {...item, 'portName': e.target.value} : item
                                                        ));
                                                    }
                                                }
                                                id="standard-basic" variant="standard" label="Port Name" value={portItem.portName}/>
                                            <TextField
                                                onChange={
                                                    (e) => {
                                                        setPorts(ports.map((item, idx) =>
                                                            idx === index ? {...item, 'port': e.target.value} : item
                                                        ));
                                                    }
                                                }
                                                id="standard-basic" variant="standard" label="Port" value={portItem.port}/>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: "column", gap:"15px"}}>
                                            <div
                                                style={{ height: '48px'}}
                                            >
                                                <InputLabel
                                                    id="demo-simple-select-standard-label"
                                                    sx={{
                                                        fontSize: "0.8rem",
                                                        color: "white"
                                                    }}
                                                >Protocol</InputLabel>
                                                <Select
                                                    label="Protocol"
                                                    variant="standard"
                                                    value={portItem.protocol}
                                                    sx={{
                                                        color: "#ffffff",
                                                        fontSize: "16px",
                                                        width: "166px",
                                                        ':before, :after': { borderBottomColor: 'white' },
                                                        ':hover:not(.Mui-disabled):before': { borderBottomColor: 'white' },
                                                        '& .MuiSvgIcon-root': {
                                                            color: 'white',
                                                        },
                                                    }}
                                                    onChange={
                                                        (e) => {
                                                            setPorts(ports.map((item, idx) =>
                                                                idx === index ? {...item, 'protocol': e.target.value} : item
                                                            ));
                                                        }
                                                    }
                                                >
                                                    {protocolOptions.map((option, index) => (
                                                        <MenuItem key={index} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </div>
                                            <TextField
                                                onChange={
                                                    (e) => {
                                                        setPorts(ports.map((item, idx) =>
                                                            idx === index ? {...item, 'targetPort': e.target.value} : item
                                                        ));
                                                    }
                                                }
                                                id="standard-basic" variant="standard" label="Target Port" value={portItem.targetPort}/>
                                        </div>
                                        <DeleteButton onClick={() => onClickDeletePort(index)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default YamlService;