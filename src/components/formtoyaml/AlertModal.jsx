import React from 'react';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import MuiBox from "@mui/material/Box";
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

const messageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    marginBottom: '10px'
}

const AlertModal = ({ isOpen, setIsOpen, message, icon }) => {
    return (
        <Modal open={isOpen}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description">
            <Box outline="none" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '20px'}}>
                {icon && <img src={icon} alt={message} style={{ width: '150px',}}/>}
                <span style={messageStyle}>
                    {message}
                </span>
                <Button
                    variant="outlined"
                    style={{color: '#7d7d7d', borderColor: '#7d7d7d', width: '90px'}}
                    onClick={() => {setIsOpen(false)}}
                >Close</Button>
            </Box>
        </Modal>
    );
};

export default AlertModal;