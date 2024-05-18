import React, { useState, useEffect } from "react";
import YamlDeployment from "./yamlDeployment";
import YamlPersistentVolume from "./yamlPersistentVolume";
import YamlSecret from "./yamlSecret";
import Accordion from "./Accordion.jsx";
import AccordionDetails from "./AccordionDetails.jsx";
import AccordionSummary from "./AccordionSummary.jsx";
import "../../styles/FORMTOYAML.css";
import YamlService from "./YamlService.jsx";
import YamlPv from "./YamlPV.jsx";
import YamlPvc from "./YamlPVC.jsx";
import Typography from "@mui/material/Typography";
import EditCopyButton from "./EditCopyButton.jsx";
import Edit from "../icon/Edit.jsx";
import ContentCopy from "../icon/ContentCopy.jsx";
import AddButton from "./AddButton.jsx";
import DeleteButton from "./DeleteButton.jsx";
import { CodeBlock, hybrid } from "react-code-blocks";
import "../../styles/FORMTOYAML.css";
import loginUtil from '../../util/login.js'
import yaml, {setYaml} from "../../redux/modules/yaml.js";
import {useDispatch, useSelector} from "react-redux";

function YamlResult(props) {
    const [data, setData] = useState([]);
    const [resourceComponents, setResourceComponents] = useState([]);
    const [editedData, setEditedData] = useState("");
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [addResourceType, setAddResourceType] = useState("");

    const HeightValue = loginUtil.checkLogin() ? "calc(100vh - 127px)" : "calc(100vh - 60px)";

    // 최종 yaml
    const yaml = useSelector((state) => state.yaml.yaml);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setYaml(data.map((item) => item.trim()).join("\n---\n")));
    }, [data]);

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

    const handleEdit = () => {
        setEditedData(data.join("\n---\n"));
        setShowEditPopup(true);
    };

    const handleCopy = () => {
        const copyText = data.map((item) => item.trim()).join("\n---\n");
        navigator.clipboard
            .writeText(copyText)
            .then(() => console.log("Copied to clipboard"))
            .catch((err) => console.error("Failed to copy:", err));
    };

    const handleEditPopupClose = () => {
        setShowEditPopup(false);
    };

    const handleEditDataChange = (event) => {
        setEditedData(event.target.value);
    };

    const handleEditDataSave = () => {
        setData(editedData.split("\n---\n"));
        setShowEditPopup(false);
    };

    const handleAddComponent = (resourceType) => {
        setResourceComponents([...resourceComponents, { type: resourceType }]);
        setData([...data, ""]);
    };

    const handleRemoveComponent = (index) => {
        const updatedComponents = [...resourceComponents];
        updatedComponents.splice(index, 1);
        setResourceComponents(updatedComponents);

        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
    };

    const renderResourceComponent = () => {
        return resourceComponents.map((resource, index) => {
            switch (resource.type) {
                case "service":
                    return (
                        <div key={index} style={{ position: "relative" }}>
                            <YamlService
                                onDataChange={(newData) =>
                                    handleDataChange(newData, index)
                                }
                            />
                            <DeleteButton
                                onClick={() => handleRemoveComponent(index)}
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    right: "0",
                                    zIndex: "5",
                                    paddingTop: "15px",
                                }}
                            >
                                Remove
                            </DeleteButton>
                        </div>
                    );
                case "deployment":
                    return (
                        <div key={index} style={{ position: "relative" }}>
                            <YamlDeployment
                                onDataChange={(newData) =>
                                    handleDataChange(newData, index)
                                }
                            />
                            <DeleteButton
                                onClick={() => handleRemoveComponent(index)}
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    right: "0",
                                    zIndex: "5",
                                    paddingTop: "15px",
                                }}
                            >
                                Remove
                            </DeleteButton>
                        </div>
                    );
                case "pv":
                    return (
                        <div key={index} style={{ position: "relative" }}>
                            <YamlPv
                                onDataChange={(newData) =>
                                    handleDataChange(newData, index)
                                }
                            />
                            <DeleteButton
                                onClick={() => handleRemoveComponent(index)}
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    right: "0",
                                    zIndex: "5",
                                    paddingTop: "15px",
                                }}
                            >
                                Remove
                            </DeleteButton>
                        </div>
                    );
                case "nfs_pv":
                    return (
                        <div key={index} style={{ position: "relative" }}>
                            <YamlPersistentVolume
                                onDataChange={(newData) =>
                                    handleDataChange(newData, index)
                                }
                            />
                            <DeleteButton
                                onClick={() => handleRemoveComponent(index)}
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    right: "0",
                                    zIndex: "5",
                                    paddingTop: "15px",
                                }}
                            >
                                Remove
                            </DeleteButton>
                        </div>
                    );
                case "pvc":
                    return (
                        <div key={index} style={{ position: "relative" }}>
                            <YamlPvc
                                onDataChange={(newData) =>
                                    handleDataChange(newData, index)
                                }
                            />
                            <DeleteButton
                                onClick={() => handleRemoveComponent(index)}
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    right: "0",
                                    zIndex: "5",
                                    paddingTop: "15px",
                                }}
                            >
                                Remove
                            </DeleteButton>
                        </div>
                    );
                case "secret":
                    return (
                        <div key={index} style={{ position: "relative" }}>
                            <YamlSecret
                                onDataChange={(newData) =>
                                    handleDataChange(newData, index)
                                }
                            />
                            <DeleteButton
                                onClick={() => handleRemoveComponent(index)}
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    right: "0",
                                    zIndex: "5",
                                    paddingTop: "15px",
                                }}
                            >
                                Remove
                            </DeleteButton>
                        </div>
                    );
                default:
                    return null;
            }
        });
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "flexStart",
                height: HeightValue,
                background: "#2E3240",
            }}
            className="yamlResult"
        >
            <div style={{ width: "50vw", flex: 6, overflowY: "auto" }}>
                <Accordion style={{ margin: "0" }} expanded>
                    <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography variant="h6">Resource Type</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{padding: 0, paddingLeft: "16px", paddingRight: "16px"}}>
                        <Typography variant="subtitle">
                            Select a resource type:
                        </Typography>
                        <div style={{ display: "flex" }}>
                            <div style={{ flex: 6 }}>
                                <select
                                    style={{
                                        height: "28px",
                                        padding: "2px",
                                        margin: "3px",
                                    }}
                                    value={addResourceType}
                                    onChange={(e) =>
                                        setAddResourceType(e.target.value)
                                    }
                                >
                                    <option value="">
                                        Select Resource Type
                                    </option>
                                    <option value="service">Service</option>
                                    <option value="deployment">
                                        Deployment
                                    </option>
                                    <option value="pv">PersistentVolume</option>
                                    <option value="nfs_pv">
                                        [NFS]PersistentVolume
                                    </option>
                                    <option value="pvc">
                                        PersistentVolumeClaim
                                    </option>
                                    <option value="secret">Secret</option>
                                </select>
                            </div>
                            <div style={{ flex: 6, textAlign: "right" }}>
                                <AddButton
                                    style={{ margin: "0" }}
                                    onClick={() => {
                                        if (addResourceType) {
                                            handleAddComponent(addResourceType);
                                            setAddResourceType("");
                                        }
                                    }}
                                >
                                    Add Resource
                                </AddButton>
                            </div>
                        </div>
                        <br/>
                        <Typography color="gray" >
                            Select whether to deploy a Service, Deployment, PV,
                            PVC or Secret
                        </Typography>
                        <br/>
                    </AccordionDetails>
                </Accordion>
                {renderResourceComponent()}
            </div>
            <div
                style={{
                    width: "50vw",
                    flex: 6,
                    overflowY: "auto",
                    position: "relative",
                    background: "#222634",
                    color: "#ffffff",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "20px",
                        zIndex: "5",
                    }}
                >
                    <EditCopyButton onClick={handleEdit}>
                        <Edit />
                        &nbsp;Edit
                    </EditCopyButton>
                    &nbsp;
                    <EditCopyButton onClick={handleCopy}>
                        <ContentCopy />
                        &nbsp;Copy
                    </EditCopyButton>
                </div>
                <CodeBlock
                    language="yaml"
                    text={yaml}
                    wrapLines={true}
                    showLineNumbers={false}
                    theme={hybrid}
                    codeBlock
                />
                {/* <pre className="code-block" style={{ fontSize: "18px", paddingLeft: "10px" }}>
                    {data.map((item) => item.trim()).join("\n---\n")}
                </pre> */}
            </div>
            {showEditPopup && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            width: "60%",
                            height: "60%",
                            overflowY: "auto",
                        }}
                    >
                        <textarea
                            style={{
                                width: "100%",
                                height: "80%",
                                fontSize: "16px",
                            }}
                            value={editedData}
                            onChange={handleEditDataChange}
                        />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginTop: "10px",
                            }}
                        >
                            <button
                                onClick={handleEditPopupClose}
                                style={{ marginRight: "10px" }}
                            >
                                Cancel
                            </button>
                            <button onClick={handleEditDataSave}>OK</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default YamlResult;
