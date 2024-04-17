import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

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
            <Accordion style={{ margin: "0" }} expanded>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography variant="h5">metadata</Typography>
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
            <Accordion style={{ margin: "0" }}>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography variant="h5">data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        label="Username"
                        variant="standard"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
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
