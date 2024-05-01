import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Accordion from './Accordion.jsx';
import AccordionDetails from './AccordionDetails.jsx'
import AccordionSummary from "./AccordionSummary.jsx";
import TextField from './TextField.jsx';
import '../../styles/FORMTOYAML.css';


function YamlSecret({ onDataChange }) {
    const initialYaml = `apiVersion: v1
kind: Secret
metadata:
  name: db-auth
type: Opaque
data:
  username: root
  password: password`;

    const [secretName, setSecretName] = useState("db-auth");
    const [username, setUsername] = useState("root");
    const [password, setPassword] = useState("password");
    const [yamlText, setYamlText] = useState(initialYaml);

    useEffect(() => {
        updateYamlText();
    }, [secretName, username, password]);

    function generateYaml() {
        return `apiVersion: v1
kind: Secret
metadata:
  name: ${secretName}
type: Opaque
data:
  username: ${username}
  password: ${password}`;
    }

    function updateYamlText() {
        const newYamlText = generateYaml();
        setYamlText(newYamlText);
        onDataChange(newYamlText); // 상위 컴포넌트로 텍스트 전달
    }

    return (
        <div>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="subtitle">Secret</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        variant="standard"
                        label="Secret Name"
                        value={secretName}
                        onChange={(e) => setSecretName(e.target.value)}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <Typography variant="subtitle">Data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        label="Username"
                        variant="standard"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div style={{ height: "10px" }}></div>
                    <TextField
                        label="Password"
                        variant="standard"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default YamlSecret;
