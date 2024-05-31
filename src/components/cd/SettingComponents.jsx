import React, { useState, useEffect } from "react";
import { customizedAxios as axios } from "../../util/customizedAxios.js";
import {
    Typography,
    TextField,
    Radio,
    FormControlLabel,
    Box,
    FormControl,
    InputLabel,
    Select,
    OutlinedInput,
    MenuItem,
} from "@mui/material";
import BuildSet from "./BuildSet.jsx";
import EnvSet from "./EnvSet.jsx";
import TriggerSet from "./TriggerSet.jsx";

function SettingComponents(props) {
    const [selectedRepository, setSelectedRepository] = useState("");
    const [selectedBranch, setSelectedBranch] = useState("");
    const [repositories, setRepositories] = useState([]);
    const [branches, setBranches] = useState([]);
    const [labels, setLabels] = useState([{ key: "", value: "" }]);
    const [language, setLanguage] = useState("");
    const [version, setVersion] = useState("");
    const [buildTool, setBuildTool] = useState("");
    const [selectTrigger, setSelectTrigger] = React.useState([]);

    const handleRepositoryChange = (event) => {
        setSelectedRepository(event.target.value);
    };

    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value);
    };

    const loadRepoData = async () => {
        try {
            let resRepo = await axios.get(`/api/v1/github`);
            setRepositories(resRepo.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (selectedRepository) {
            axios
                .get(`/api/v1/github/branches?repoName=${selectedRepository}`)
                .then((res) => {
                    setBranches(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [selectedRepository]);

    useEffect(() => {
        loadRepoData();
    }, []);

    return (
        <div style={{ color: "white", display: "flex", gap: "30px", flexWrap: "wrap", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                <Typography variant="h6" color="white">
                    Repository
                </Typography>
                <TextField
                    id="repo-description"
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue=""
                    InputLabelProps={{ style: { color: "#ffffff" } }}
                    InputProps={{ style: { color: "#ffffff"} }} 
                    style={{ borderColor: '#ffffff' }}
                />
            </div>
            <div className="git-setting">
                <FormControlLabel
                    control={<Radio checked={true} name="git" />}
                    label="Git"
                />
                <div
                    style={{
                        borderLeft: "solid",
                        borderLeftWidth: "thin",
                        paddingLeft: "20px",
                        marginLeft: "9px",
                    }}
                >
                    <div className="git-repo">
                        <Box>
                            <Typography variant="subtitle1" color="white">
                                Repository Select
                            </Typography>
                            <FormControl sx={{ m: 1, minWidth: 200, width: "30vw" }}>
                                <InputLabel
                                    id="repository-label"
                                    sx={{ color: "#ffffff" }}
                                >
                                    Repository
                                </InputLabel>
                                <Select
                                    labelId="repository-label"
                                    variant="standard"
                                    id="repository"
                                    sx={{ color: "#ffffff" }}
                                    value={selectedRepository}
                                    onChange={handleRepositoryChange}
                                    input={<OutlinedInput label="Repository" />}
                                >
                                    {repositories.map((repo) => (
                                        <MenuItem
                                            key={repo.name}
                                            value={repo.name}
                                        >
                                            {repo.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="git-branch">
                        <Box>
                            <Typography variant="subtitle1" color="white">
                                Branch Select
                            </Typography>
                            <FormControl sx={{ m: 1, minWidth: 200, width: "30vw" }}>
                                <InputLabel
                                    id="branch-label"
                                    sx={{ color: "#ffffff" }}
                                >
                                    Branch
                                </InputLabel>
                                <Select
                                    labelId="branch-label"
                                    sx={{ color: "#ffffff" }}
                                    id="branch"
                                    value={selectedBranch}
                                    onChange={handleBranchChange}
                                    input={<OutlinedInput label="Branch" />}
                                >
                                    {branches.map((branch) => (
                                        <MenuItem
                                            key={branch.name}
                                            value={branch.name}
                                        >
                                            {branch.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
            </div>
            <div className="build-set">
                <BuildSet
                    language={language}
                    setLanguage={setLanguage}
                    version={version}
                    setVersion={setVersion}
                    buildTool={buildTool}
                    setBuildTool={setBuildTool}
                />
            </div>
            <div>
                <TriggerSet
                    selectTrigger={selectTrigger}
                    setSelectTrigger={setSelectTrigger}
                />
            </div>
            <div className="env-check">
                <EnvSet labels={labels} setLabels={setLabels} />
            </div>
        </div>
    );
}

export default SettingComponents;
