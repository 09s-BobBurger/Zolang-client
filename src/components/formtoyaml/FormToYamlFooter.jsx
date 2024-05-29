import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/material/styles";
import MuiFormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MuiTextField from "@mui/material/TextField";
import loginUtil from "../../util/login.js";
import { customizedAxios as axios } from "../../util/customizedAxios.js";
import { useSelector } from "react-redux";

const FormControl = styled(MuiFormControl)({
    ".MuiInput-underline:before, .MuiInput-underline:after, .MuiInput-underline:hover::before":
        {
            borderColor: "white !important",
        },
    "& .MuiInputBase-root": {
        width: "30vw",
        height: "40px",
        color: "white",
    },
    "& .MuiInputLabel-root, & .MuiInputLabel-shrink": {
        color: "white !important",
        top: "4px",
    },
    "& .MuiSvgIcon-root": {
        color: "white",
    },
});

const TextField = styled(MuiTextField)({
    width: "calc(64vw)",
    margin: "8px",
    "& .MuiFormLabel-root, & .MuiFormLabel-shrink": {
        color: "white !important",
    },
    "& .MuiInput-underline:before, .MuiInput-underline:after, .MuiInput-underline:hover::before":
        {
            borderColor: "white !important",
        },
    "& .MuiInputBase-input": {
        color: "white",
    },
    "& input:-internal-autofill-selected": {
        appearance: "none !important",
    },
    "& .Mui-error": {
        color: "red !important",
    },
    "& .Mui-error.MuiInput-underline:before, & .Mui-error.MuiInput-underline:after, & .Mui-error.MuiInput-underline:hover::before":
        {
            borderColor: "red !important",
        },
    "& .MuiFormHelperText-root": {
        position: "absolute",
        bottom: "-18px",
    },
});

function FormToYamlFooter(props) {
    const yaml = useSelector((state) => state.yaml.yaml);

    const [isExpanded, setIsExpanded] = useState(false);

    const [repositories, setRepositories] = useState();
    const [branches, setBranches] = useState();

    const [repository, setRepository] = useState("");
    const [branch, setBranch] = useState("");
    const [commitMessage, setCommitMessage] = useState("");
    const [fileName, setFileName] = useState("");

    const [commitMessageError, setCommitMessageError] = useState(false);
    const [fileNameError, setFileNameError] = useState(false);
    const [userEmail, setUserEmail] = useState();
    const [userName, setUserName] = useState();

    const setting = () =>{
        axios.get('/api/v1/users',{
            headers: {
                Authorization: "Bearer " + loginUtil.getAccessToken(),
            },
        })
        .then((res) => {
            setUserEmail(res.data.data.email);
            setUserName(res.data.data.nickname);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        axios
            .get(
                `/api/v1/github/branches?repoName=${repository}`,
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
    }, [repository]);

    const onChangeRepository = (e) => {
        setRepository(e.target.value);
        setBranch(null);
    };

    const onChangeBranch = (e) => {
        setBranch(e.target.value);
    };

    const onChangeFileName = (e) => {
        setFileName(e.target.value);
        if (e.target.value === "") {
            setFileNameError(true);
        } else {
            setFileNameError(false);
        }
    };

    const onChangeCommitMessage = (e) => {
        setCommitMessage(e.target.value);
        if (e.target.value === "") {
            setCommitMessageError(true);
        } else {
            setCommitMessageError(false);
        }
    };

    const onClickPush = () => {
        setting();
        if (loginUtil.checkLogin()) {
            if (isExpanded) {
                if (
                    yaml &&
                    repository &&
                    branches &&
                    commitMessage &&
                    fileName
                ) {
                    axios
                        .put(
                            `/api/v1/github/commits?repoName=${repository}&branchName=${branch}`,
                            {
                                committer_name: userName,
                                committer_email: userEmail,
                                file_name: fileName.endsWith(".yaml")
                                    ? fileName
                                    : fileName + ".yaml",
                                content: yaml,
                            },
                            {
                                headers: {
                                    Authorization:
                                        "Bearer " + loginUtil.getAccessToken(),
                                    "Content-Type": "application/json",
                                    accept: "*/*",
                                },
                            }
                        )
                        .then((res) => {
                            if (res.data.data !== "true" && res.data.success != "true"){
                                props.setIsPushFailModalOpen(true);
                            } else {
                                setIsExpanded(false);
                                props.setIsPushSuccessModalOpen(true);
                            }
                        });
                }
            } else {
                console.log(loginUtil.getAccessToken());
                axios
                    .get(`/api/v1/github`, {
                        headers: {
                            Authorization:
                                "Bearer " + loginUtil.getAccessToken(),
                        },
                    })
                    .then((res) => {
                        setRepositories(res.data.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                setIsExpanded(true);
            }
        } else {
            props.setIsLoginModalOpen(true);
        }
    };

    const onClickCancel = () => {
        setIsExpanded(false);
    };

    return (
        <div
            className="FormToYamlFooter"
            style={{
                backgroundColor: "#222634",
                padding: "12px 20px",
                borderTop: "1px solid #000000",
                position: "fixed",
                bottom: 0,
                width: "100vw",
                zIndex: "5",
                height: isExpanded ? "310px" : "40px",
                transition: "height 0.5s ease-in-out",
            }}
        >
            <div
                className="push-form-container"
                style={{
                    display: isExpanded ? "flex" : "none",
                    alignItems: "center",
                    padding: "20px 30px",
                    gap: "40px",
                    color: "white",
                    overflowX: "scroll",
                    marginBottom: "10px",
                    width: "100%",
                }}
            >
                <img src="../githubIconWhite.svg" alt="github icon" />
                <div className="push-form-content">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", gap: "40px" }}>
                            <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 120 }}
                                fullWidth
                            >
                                <InputLabel id="demo-simple-select-label">
                                    Repository
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={repository}
                                    label="Repository"
                                    onChange={onChangeRepository}
                                >
                                    {repositories &&
                                        repositories.map((item, idx) => {
                                            return (
                                                <MenuItem
                                                    value={item.name}
                                                    key={idx}
                                                >
                                                    {item.name}
                                                </MenuItem>
                                            );
                                        })}
                                </Select>
                            </FormControl>
                            <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 120 }}
                                fullWidth
                            >
                                <InputLabel id="demo-simple-select-label">
                                    Branch
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={branch}
                                    label="branch"
                                    onChange={onChangeBranch}
                                >
                                    {branches &&
                                        branches.map((item, idx) => {
                                            return (
                                                <MenuItem
                                                    value={item.name}
                                                    key={idx}
                                                >
                                                    {item.name}
                                                </MenuItem>
                                            );
                                        })}
                                </Select>
                            </FormControl>
                        </div>
                        <TextField
                            error={commitMessageError}
                            id="standard-basic"
                            label="Commit Message"
                            variant="standard"
                            onChange={onChangeCommitMessage}
                            autoComplete="off"
                            helperText={
                                commitMessageError
                                    ? "commit message needed"
                                    : ""
                            }
                        />
                        <TextField
                            error={fileNameError}
                            id="standard-basic"
                            label="File Name"
                            variant="standard"
                            onChange={onChangeFileName}
                            autoComplete="off"
                            helperText={fileNameError ? "file name needed" : ""}
                        />
                    </div>
                </div>
            </div>
            <Button
                variant="outlined"
                style={{
                    color: "#7d7d7d",
                    borderColor: "#7d7d7d",
                    opacity: isExpanded ? 1 : 0,
                    pointerEvents: isExpanded ? "auto" : "none",
                    width: "100px",
                    overflow: "hidden",
                    background: "white",
                    padding: "5px 8px",
                    position: "absolute",
                    right: "180px",
                    bottom: "12px",
                    transition: "opacity 0.3s ease-in-out",
                }}
                onClick={onClickCancel}
            >
                CANCEL
            </Button>
            <Button
                style={{
                    width: "100px",
                    color: "#ffffff",
                    background: "#019CF6",
                    padding: "5px 8px",
                    position: "absolute",
                    right: "60px",
                    bottom: "12px",
                }}
                startIcon={<GitHubIcon />}
                onClick={onClickPush}
            >
                PUSH
            </Button>
        </div>
    );
}

export default FormToYamlFooter;
