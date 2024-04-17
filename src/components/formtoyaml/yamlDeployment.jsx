import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function YamlDeployment({ onDataChange }) {
    const initialYaml = `apiVersion: apps/v1
kind: Deployment
  metadata: 
    name: octopus-deployment
    labels:
      app: web
spec: 
  selector: 
    matchLabels: 
      app: web
    replicas: 3
    template:
      metadata: 
        labels: 
         app: web
          octopusexport: OctopusExport             
      spec: 
        containers: 
          name: nginx
          image: nginx
          ports: 
            containerPort: 80`;

    const [deploymentName, setDeploymentName] = useState("octopus-deployment");
    const [labels, setLabels] = useState([{ name: "app", value: "web" }]);
    const [replicas, setReplicas] = useState(3);
    const [containers, setContainers] = useState([
        { name: "nginx", image: "nginx", containerPort: 80 },
    ]);
    const [yamlText, setYamlText] = useState(initialYaml);

    useEffect(() => {
        updateYamlText();
    }, [deploymentName, labels, replicas, containers]);

    function generateYaml() {
        return `apiVersion: apps/v1
    kind: Deployment
    metadata: 
      name: ${deploymentName}
      labels:
        ${labels.map(label => `${label.name}: ${label.value}`).join('\n        ')}
    spec: 
      selector: 
        matchLabels: 
          ${labels.map(label => `${label.name}: ${label.value}`).join('\n          ')}
      replicas: ${replicas}
      template:
        metadata: 
          labels: 
            ${labels.map(label => `${label.name}: ${label.value}`).join('\n            ')}
        spec: 
          containers: 
            ${containers.map(container => `- name: ${container.name}
              image: ${container.image}
              ports: 
                - containerPort: ${container.containerPort}`).join('\n            ')}
    `;
    }    

    function updateYamlText() {
        const newYamlText = generateYaml();
        setYamlText(newYamlText);
        onDataChange(newYamlText); // 상위 컴포넌트로 텍스트 전달
    }

    const handleAddLabel = () => {
        setLabels([...labels, { name: "", value: "" }]);
    };

    const handleDeleteLabel = (index) => {
        const updatedLabels = [...labels];
        updatedLabels.splice(index, 1);
        setLabels(updatedLabels);
    };

    const handleLabelChange = (index, field, value) => {
        const updatedLabels = [...labels];
        updatedLabels[index][field] = value;
        setLabels(updatedLabels);
    };

    const handleAddContainer = () => {
        setContainers([
            ...containers,
            { name: "", image: "", containerPort: "" },
        ]);
    };

    const handleDeleteContainer = (index) => {
        const updatedContainers = [...containers];
        updatedContainers.splice(index, 1);
        setContainers(updatedContainers);
    };

    const handleContainerChange = (index, field, value) => {
        const updatedContainers = [...containers];
        updatedContainers[index][field] = value;
        setContainers(updatedContainers);
    };

    return (
        <div style={{ width: "40vw" }}>
            <Accordion style={{margin:"0"}} expanded>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography variant="h5">metadata</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <TextField
                            variant="standard"
                            label="deploymentName"
                            value={deploymentName}
                            onChange={(e) => setDeploymentName(e.target.value)}
                        />
                    </div>
                    <br />
                    <div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ flex: 6 }}>
                                <Typography variant="h6">Labels</Typography>
                            </div>
                            <div style={{ flex: 6, textAlign: "right" }}>
                                <Button
                                    onClick={handleAddLabel}
                                    variant="outlined"
                                >
                                    Add Label
                                </Button>
                            </div>
                        </div>
                        <Typography color="gray">
                            Add labels to be applied to the deployment resource,
                            pods managed by the deployment resource, the service
                            and the ingress.
                        </Typography>
                        <br />
                        {labels.map((label, index) => (
                            <div key={index} style={{ display: "flex", alignItems: "center" }}>
                                <TextField
                                    id={`labelName${index}`}
                                    label="name"
                                    variant="standard"
                                    value={label.name}
                                    onChange={(e) =>
                                        handleLabelChange(
                                            index,
                                            "name",
                                            e.target.value
                                        )
                                    }
                                />
                                <TextField
                                    id={`labelValue${index}`}
                                    label="value"
                                    variant="standard"
                                    value={label.value}
                                    onChange={(e) =>
                                        handleLabelChange(
                                            index,
                                            "value",
                                            e.target.value
                                        )
                                    }
                                />
                                <Button
                                    onClick={() => handleDeleteLabel(index)}
                                    color="error"
                                >
                                    <DeleteIcon />
                                </Button>
                            </div>
                        ))}
                        <br />
                    </div>
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
                        label="Replicas"
                        variant="standard"
                        value={replicas}
                        onChange={(e) => setReplicas(parseInt(e.target.value))}
                    />
                    <br />
                    <br />
                    <Typography color="gray">
                        The number of pod replicas to create from this
                        deployment.
                    </Typography>
                    <br />
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ flex: 6 }}>
                            <Typography variant="h6">containers</Typography>
                        </div>
                        <div style={{ flex: 6, textAlign: "right" }}>
                            <Button
                                onClick={handleAddContainer}
                                variant="outlined"
                            >
                                Add Container
                            </Button>
                        </div>
                    </div>
                    <Typography color="gray">
                        Add containers that make up the pod managed by this
                        deployment
                    </Typography>
                    <br />
                    {containers.map((container, index) => (
                        <div key={index} style={{ display: "flex", alignItems: "center" }}>
                            <TextField
                                id={`containerName${index}`}
                                label="name"
                                variant="standard"
                                value={container.name}
                                onChange={(e) =>
                                    handleContainerChange(
                                        index,
                                        "name",
                                        e.target.value
                                    )
                                }
                            />
                            <TextField
                                id={`imageName${index}`}
                                label="image"
                                variant="standard"
                                value={container.image}
                                onChange={(e) =>
                                    handleContainerChange(
                                        index,
                                        "image",
                                        e.target.value
                                    )
                                }
                            />
                            <TextField
                                id={`containerPort${index}`}
                                label="containerPort"
                                variant="standard"
                                value={container.containerPort}
                                onChange={(e) =>
                                    handleContainerChange(
                                        index,
                                        "containerPort",
                                        e.target.value
                                    )
                                }
                            />
                            <Button
                                onClick={() => handleDeleteContainer(index)}
                                color="error"
                            >
                                <DeleteIcon />
                            </Button>
                        </div>
                    ))}
                    <br />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default YamlDeployment;
