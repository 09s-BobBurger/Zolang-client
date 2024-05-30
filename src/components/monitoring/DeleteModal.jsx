import React from 'react';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import MuiBox from '@mui/material/Box';
import {styled} from "@mui/material/styles";
import { customizedAxios as axios } from "../../util/customizedAxios.js";

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

const DeleteModal = ({type, isOpen, setIsOpen, id, loadData}) => {

    const messageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        marginBottom: '10px'
    }

    const handleDelete = (id)=> {
        const url = type === 'cluster' 
            ? `/api/v1/cluster/${id}`
            : type === 'repo'
            ? `/api/v1/cicd/${id}`
            : '';
            
        axios.delete(url)
        .then((res) => {
            setIsOpen(false)
            loadData();
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <Modal open={isOpen}
        onClose={() => setIsOpen(false)}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description">
            <Box outline="none">
                <span style={messageStyle}>
                    삭제하시겠습니까?</span>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', margin: '20px 0'}}>
                <Button
                        variant="contained"
                        style={{ width: '130px' }}
                        onClick={() => handleDelete(id)}
                    >Delete</Button>
                    <Button
                        variant="outlined"
                        style={{width: '90px'}}
                        onClick={() => {setIsOpen(false)}}
                    >Close</Button>
                </div>
            </Box>
        </Modal>
    );
};

export default DeleteModal;