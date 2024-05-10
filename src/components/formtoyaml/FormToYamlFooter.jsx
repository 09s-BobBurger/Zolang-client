import React, {useState} from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import {styled} from "@mui/material/styles";
import MuiFormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MuiTextField from "@mui/material/TextField";

const FormControl = styled(MuiFormControl) ({
    '.MuiInput-underline:before, .MuiInput-underline:after, .MuiInput-underline:hover::before': {
        borderColor: 'white !important',
    },
    '& .MuiInputBase-root': {
        width: '300px',
        height: '40px',
        color: 'white',
    },
    '& .MuiInputLabel-root, & .MuiInputLabel-shrink': {
        color: 'white !important',
        top: '4px'
    },
    '& .MuiSvgIcon-root': {
        color: 'white',
    }
})

const TextField = styled(MuiTextField) ({
    margin: '8px',
    '& .MuiFormLabel-root, & .MuiFormLabel-shrink': {
        color: 'white !important',
    },
    '& .MuiInput-underline:before, .MuiInput-underline:after, .MuiInput-underline:hover::before': {
        borderColor: 'white !important',
    },
    '& .MuiInputBase-input' : {
        color: 'white'
    },
    '& input:-internal-autofill-selected': {
        appearance: 'none !important'
    }

})

const Repositories = [
    "repo1", "repo2", "repo3"
]
const Branches = [
    "origin", "b1", "b2", "b3"
]

function FormToYamlFooter(props) {
    // const onClickPush = () => {
    //     if (loginUtil.checkLogin()) {
    //         props.setIsPushModalOpen(true);
    //     } else {
    //         props.setIsLoginModalOpen(true);
    //     }
    // }

    const [isExpanded, setIsExpanded] = useState(false);

    const [repositories, setRepositories] = useState(Repositories);
    const [branches, setBranches] = useState(Branches);

    const [repository, setRepository] = useState("");
    const [branch, setBranch] = useState("");
    const [commitMessage, setCommitMessage] = useState("");
    const [fileName, setFileName] = useState("");

    const onChangeFileName = (e) => {
        setFileName(e.target.value);
    }

    const onChangeCommitMessage = (e) => {
        setCommitMessage(e.target.value);
    }

    const onClickPush = () => {
        if (isExpanded) {
            // push logic
            setIsExpanded(false);
        } else {
            setIsExpanded(true);
        }
    };

    const onClickCancel = () => {
        setIsExpanded(false);
    }

    return (
        <div className="FormToYamlFooter"
                style={{
                    backgroundColor: "#222634",
                    padding: "12px 20px",
                    borderTop: "1px solid #000000",
                    position: "fixed",
                    bottom: 0,
                    width: "100vw",
                    zIndex: "5",
                    height: isExpanded ? '310px' :'40px',
                    transition: 'height 0.5s ease-in-out'
                }}
        >
            <div className="push-form-container" style={{ display: isExpanded ? 'flex' : 'none', alignItems: 'center', padding: "20px", gap: '40px', color: 'white', overflowX: 'scroll', marginBottom: '10px'}}>
                <img src='../githubIconWhite.svg' alt='github icon' />
                <div className="push-form-content">
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <div style={{ display: 'flex', gap: '30px' }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
                            <InputLabel id="demo-simple-select-label">Repository</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={repository}
                                label="Repository"
                                onChange={(e) => {setRepository(e.target.value)}}
                            >
                                {repositories.map((item, idx) => {
                                    return <MenuItem value={item} key={idx}>{item}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} fullWidth>
                            <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={branch}
                                label="branch"
                                onChange={(e) => {setBranch(e.target.value)}}
                            >
                                {branches.map((item, idx) => {
                                    return <MenuItem value={item} key={idx}>{item}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        </div>
                        <TextField id="standard-basic" label="Commit Message" variant="standard" onChange={onChangeCommitMessage} autoComplete='off' />
                        <TextField id="standard-basic" label="File Name" variant="standard" onChange={onChangeCommitMessage} autoComplete='off' />
                    </div>
                </div>
            </div>
            <Button
                variant="outlined"
                style={{ opacity: isExpanded ? 1 : 0, pointerEvents: isExpanded ? 'auto' : 'none', width: "100px", overflow: 'hidden', background: 'white', padding: '5px 8px', position: "absolute", right:"180px", bottom: '12px', transition: 'opacity 0.3s ease-in-out' }}
                onClick={onClickCancel}
            >
                CANCEL
            </Button>
            <Button
                style={{ width: "100px", color: "#ffffff", background: "#019CF6", padding: '5px 8px', position: "absolute", right:"60px", bottom: '12px' }} startIcon={<GitHubIcon />}
                onClick={onClickPush}
            >PUSH
            </Button>

        </div>
    );
}

export default FormToYamlFooter;
