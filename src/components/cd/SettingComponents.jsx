import React, { useState } from "react";
import { Typography, TextField, Radio, FormControlLabel } from "@mui/material";

function SettingComponents(props) {
    const [selectedRepository, setSelectedRepository] = useState("");
    const [selectedBranch, setSelectedBranch] = useState("");
    const [repositories, setRepositories] = useState([]);
    const [branches, setBranches] = useState([]);

    const handleRepositoryChange = (event) => {
        setSelectedRepository(event.target.value);
    };

    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value);
    };

    const loadRepoData = async () => {
        try {
            let resRepo, resBranch;
            resRepo = await axios.get(`/api/v1/github`);
            setRepositories(resRepo.data.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        axios
            .get(
                `/api/v1/github/branches?repoName=${selectedRepository}`,
                {
                    headers: {
                        Authorization: "Bearer " + loginUtil.getAccessToken(),
                    },
                }
            )
            .then((res) => {
                setBranches(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
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
                                multiple
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
                    {repositories}
                    <Box>
                        <Typography variant="subtitle1" color="white">
                            Branched to build
                        </Typography>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="branch-label">Branch</InputLabel>
                            <Select
                                labelId="branch-label"
                                id="branch"
                                multiple
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
    );
}

export default SettingComponents;
