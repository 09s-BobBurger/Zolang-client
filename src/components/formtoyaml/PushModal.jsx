import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import MuiBox from '@mui/material/Box';
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import SelectDropdown from "./SelectDropdown.jsx";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

const Box = styled(MuiBox) ({
    boxSizing: 'border-box',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    backgroundColor: 'white',
    boxShadow: '24px',
    p: '4px',
    zIndex: '100',
    borderRadius: '8px',
    padding: '40px 40px 20px 40px',
    "& span": {
        textAlign: 'center',

    }
});

const PushModal = ({isOpen, setIsOpen}) => {
    const [repository, setRepository] = useState("");
    const [branch, setBranch] = useState("");
    const [commitMessage, setCommitMessage] = useState("");

    const Repositories = [
        "repo1", "repo2", "repo3"
    ]
    const Branches = [
        "origin", "b1", "b2", "b3"
    ]

    const onChangeCommitMessage = (e) => {
        setCommitMessage(e.target.value);
    }

    const messageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        marginBottom: '10px'
    }

    return (
        <Modal open={isOpen}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description">
            <Box outline="none">
                <span style={messageStyle}>
                    Push 설정을 선택해 주세요</span>
                <SelectDropdown
                    name="Repository"
                    value={repository}
                    setter={setRepository}
                    list={Repositories}
                />
                <SelectDropdown
                    name="Branch"
                    value={branch}
                    setter={setBranch}
                    list={Branches}
                />
                <TextField
                    fullWidth
                    id="outlined-multiline-flexible"
                    label="Commit Message"
                    multiline
                    maxRows={4}
                    onChange={onChangeCommitMessage}
                    style={{margin: '10px 0'}}
                />
                <div style={{display: 'flex', justifyContent: 'flex-end', gap: '20px', margin: '20px 0'}}>
                    <Button
                        variant="contained"
                        style={{width: '90px'}}
                    >Push</Button>
                    <Button
                        variant="outlined"
                        style={{width: '90px'}}
                        onClick={() => {setIsOpen(false)}}
                    >cancel</Button>
                </div>
            </Box>
        </Modal>
    );
};

export default PushModal;