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
    Button,
    FormHelperText,
} from "@mui/material";
import BuildSet from "./BuildSet.jsx";
import EnvSet from "./EnvSet.jsx";
import TriggerSet from "./TriggerSet.jsx";
import { useNavigate } from 'react-router-dom';
import "../../styles/CD.css";
import DockerFile from "./DockerFile.jsx";

const SettingComponents = (props) => {
    const [selectedRepository, setSelectedRepository] = useState("");
    const [selectedBranch, setSelectedBranch] = useState("");
    const [repositories, setRepositories] = useState([]);
    const [branches, setBranches] = useState([]);
    const [labels, setLabels] = useState([{ key: "", value: "" }]);
    const [language, setLanguage] = useState("");
    const [version, setVersion] = useState("");
    const [buildTool, setBuildTool] = useState("AUTO");
    const navigate = useNavigate();
    const [selectTrigger, setSelectTrigger] = useState([]);
    const [errors, setErrors] = useState({
        repository: false,
        branch: false,
        language: false,
        version: false,
        buildTool: false,
    });
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleRepositoryChange = (event) => {
        setSelectedRepository(event.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, repository: false }));
    };

    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, branch: false }));
    };

    const validateFields = () => {
        const newErrors = {
            repository: !selectedRepository,
            branch: !selectedBranch,
            language: !language,
            version: language !== "Python" && !version,
        };
        setErrors(newErrors);
        return !Object.values(newErrors).some((error) => error);
    };

    const loadRepoData = async () => {
        try {
            const resRepo = await axios.get(`/api/v1/github`);
            setRepositories(resRepo.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const createRepoBuild = () => {
        if (validateFields()) {
            const data = {
                repo_name: selectedRepository,
                branch: selectedBranch,
                language: language
            };

            if (version) {
                data.version = version;
            }
            if (buildTool) {
                data.build_tool = buildTool;
            }
            if (labels.length > 0 && labels[0].key !== "" && labels[0].value !== "") {
                data.envVars = labels;
            }
            if (selectTrigger.length > 0) {
                data.trigger = selectTrigger;
            }

            axios.post("/api/v1/cicd", data)
                .catch((err) => {
                    console.log(err);
                });
            navigate('/cd/repoList');
        }
    };

    useEffect(() => {
        if (selectedRepository) {
            axios.get(`/api/v1/github/branches?repoName=${selectedRepository}`)
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

    useEffect(() => {
        const areFieldsValid = validateFields();
        setIsButtonDisabled(!areFieldsValid);
    }, [selectedRepository, selectedBranch, language, version, buildTool]);

    return (
        <div className="setting-components-container">
            <div className="repository-description">
                <Typography variant="h6" style={{ color: "white" }}>
                    Build Repository{selectedRepository && <span style={{ color: "#ff8282" }}> : {selectedRepository}</span>}
                </Typography>
                <TextField
                    id="repo-description"
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue=""
                    InputLabelProps={{ style: { color: "#ffffff" } }}
                    InputProps={{ style: { color: "#ffffff" } }}
                    sx={{ borderColor: '#ffffff' }}
                />
            </div>
            <div className="git-setting">
                <FormControlLabel control={<Radio checked={true} name="git" />} label="Git" />
                <div className="git-setting-content">
                    <Box className="git-repo">
                        <Typography variant="subtitle1" color="white">Repository Select</Typography>
                        <FormControl required error={errors.repository} sx={{ m: 1, minWidth: 200, width: "30vw" }}>
                            <InputLabel id="repository-label" sx={{ color: "#ffffff" }}>Repository</InputLabel>
                            <Select
                                labelId="repository-label"
                                variant="standard"
                                id="repository"
                                sx={{ color: "#ffffff" }}
                                value={selectedRepository}
                                onChange={handleRepositoryChange}
                                input={<OutlinedInput label="Repository" />}
                            >
                                {repositories? repositories.map((repo) => (
                                    <MenuItem key={repo.name} value={repo.name}>{repo.name}</MenuItem>
                                )): null}
                            </Select>
                            {errors.repository && (
                                <FormHelperText sx={{ color: "#ffffff" }}>
                                    Repository is required
                                </FormHelperText>
                            )}
                        </FormControl>
                    </Box>
                    <Box className="git-branch">
                        <Typography variant="subtitle1" color="white">Branch Select</Typography>
                        <FormControl required error={errors.branch} sx={{ m: 1, minWidth: 200, width: "30vw" }}>
                            <InputLabel id="branch-label" sx={{ color: "#ffffff" }}>Branch</InputLabel>
                            <Select
                                labelId="branch-label"
                                sx={{ color: "#ffffff" }}
                                id="branch"
                                value={selectedBranch}
                                onChange={handleBranchChange}
                                input={<OutlinedInput label="Branch" />}
                            >
                                {branches? branches.map((branch) => (
                                    <MenuItem key={branch.name} value={branch.name}>{branch.name}</MenuItem>
                                )) :null}
                            </Select>
                            {errors.branch && (
                                <FormHelperText sx={{ color: "#ffffff" }}>
                                    Branch is required
                                </FormHelperText>
                            )}
                        </FormControl>
                    </Box>
                </div>
            </div>
            <BuildSet
                language={language}
                setLanguage={setLanguage}
                version={version}
                setVersion={setVersion}
                buildTool={buildTool}
                setBuildTool={setBuildTool}
                error={errors}
            />
            <TriggerSet selectTrigger={selectTrigger} setSelectTrigger={setSelectTrigger} />
            <EnvSet labels={labels} setLabels={setLabels} />
            <DockerFile />
            <div style={{width: "fit-content", marginLeft: "auto"}}>
                <Button 
                    variant="contained" 
                    onClick={createRepoBuild}
                    disabled={isButtonDisabled}
                >
                    Create Build
                </Button>
            </div>
        </div>
    );
};

export default SettingComponents;
