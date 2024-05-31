import React, { useState, useEffect } from "react";
import { customizedAxios as axios } from "../../util/customizedAxios.js";
import { Typography, TextField, Radio, FormControlLabel, Checkbox, Box, FormControl, InputLabel, Select, OutlinedInput, MenuItem } from "@mui/material";
import AddButton from '../formtoyaml/AddButton.jsx'
import DeleteButton from "../formtoyaml/DeleteButton.jsx";

function SettingComponents(props) {
    const [selectedRepository, setSelectedRepository] = useState("");
    const [selectedBranch, setSelectedBranch] = useState("");
    const [repositories, setRepositories] = useState([]);
    const [branches, setBranches] = useState([]);
    const [labels, setLabels] = useState([{ name: "", value: "" }]);

    const handleRepositoryChange = (event) => {
        setSelectedRepository(event.target.value);
    };

    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value);
    };

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
        <div>
            <div>
                <Typography variant="h6" color="white">
                    Repository
                </Typography>
                <TextField
                    id="repo-description"
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue=""
                />
            </div>
            <div className="git-setting">
                <FormControlLabel
                    control={<Radio checked={true} name="git" />}
                    label="Git"
                />
                <div className="git-repo">
                    <Box>
                        <Typography variant="subtitle1" color="white">
                            Repository Select
                        </Typography>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="repository-label">
                                Repository
                            </InputLabel>
                            <Select
                                labelId="repository-label"
                                id="repository"
                                value={selectedRepository}
                                onChange={handleRepositoryChange}
                                input={<OutlinedInput label="Repository" />}
                            >
                                {repositories.map((repo) => (
                                    <MenuItem key={repo.name} value={repo.name}>
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
                            Branched to build
                        </Typography>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="branch-label">Branch</InputLabel>
                            <Select
                                labelId="branch-label"
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
                <div className="env-check">
                    <FormControlLabel required control={<Checkbox />} label="이 필드에는 환경 변수가 있습니다." />
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ flex: 1 }}>
                            <Typography variant="subtitle1">Labels</Typography>
                        </div>
                        <div style={{ flex: 1, textAlign: "right" }}>
                            <AddButton onClick={handleAddLabel}>
                                Add Label
                            </AddButton>
                        </div>
                    </div>
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
                            <DeleteButton
                                onClick={() => handleDeleteLabel(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SettingComponents;
