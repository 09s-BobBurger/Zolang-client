import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import MuiBox from '@mui/material/Box';
import {styled} from "@mui/material/styles";

const Box = styled(MuiBox) ({
    boxSizing: 'border-box',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350px',
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

const LoginModal = ({isOpen, setIsOpen}) => {
    const navigate = useNavigate();

    const messageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        marginBottom: '10px'
    }

    const onClickLogin = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/github';
    }

    return (
        <Modal open={isOpen}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description">
            <Box outline="none">
                <span style={messageStyle}>
                    로그인이 필요한 서비스 입니다.</span>
                <div style={{display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0'}}>
                    {/*<Button*/}
                    {/*    variant="contained"*/}
                    {/*    style={{width: '90px'}}*/}
                    {/*    onClick={onClickLogin}*/}
                    {/*>Login</Button>*/}
                    <Button
                        variant="outlined"
                        style={{width: '90px'}}
                        onClick={() => {setIsOpen(false)}}
                    >close</Button>
                </div>
            </Box>
        </Modal>
    );
};

export default LoginModal;