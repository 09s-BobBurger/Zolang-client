import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import YamlDeployment from "./YamlDeployment";
import YamlPersistentVolume from "./YamlPersistentVolume";
import YamlSecret from "./YamlSecret";

function YamlResult(props) {
    const [data, setData] = useState([]);
    const [resourceComponents, setResourceComponents] = useState([]);

    const handleAddResource = (resourceType) => {
        setResourceComponents([...resourceComponents, { type: resourceType }]);
    };

    const handleResourceChange = (event, index) => {
        const updatedComponents = [...resourceComponents];
        updatedComponents[index].type = event.target.value;
        setResourceComponents(updatedComponents);
    };

    const handleDataChange = (newData, index) => {
        const updatedData = [...data];
        updatedData[index] = newData;
        setData(updatedData);
    };

    const renderResourceComponent = () => {
        return resourceComponents.map((resource, index) => {
            switch (resource.type) {
                case "deployment":
                    return <YamlDeployment key={index} onDataChange={(newData) => handleDataChange(newData, index)} />;
                case "persistentVolume":
                    return <YamlPersistentVolume key={index} onDataChange={(newData) => handleDataChange(newData, index)} />;
                case "secret":
                    return <YamlSecret key={index} onDataChange={(newData) => handleDataChange(newData, index)} />;
                default:
                    return null;
            }
        });
    };

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "50vw", flex: 6 }}>
                <Accordion style={{ margin: "0" }} expanded>
                    <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography variant="h5">Resource Type</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6">Select a resource type:</Typography>
                        <select value="" onChange={(e) => handleAddResource(e.target.value)}>
                            <option value="">Select Resource Type</option>
                            <option value="deployment">Deployment</option>
                            <option value="persistentVolume">Persistent Volume</option>
                            <option value="secret">Secret</option>
                        </select>
                        <Typography color="gray">Select whether to deploy a Service, Deployment, PV, PVC or Secret</Typography>
                    </AccordionDetails>
                </Accordion>
                {renderResourceComponent()}
            </div>
            <div style={{ width: "50vw", flex: 6, padding: "10px" }}>
                <pre>{data.join("\n---\n")}</pre>
            </div>
        </div>
    );
}

export default YamlResult;
