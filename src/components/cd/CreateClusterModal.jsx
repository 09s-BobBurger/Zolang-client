import React, { useState } from 'react';
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import MuiBox from '@mui/material/Box';
import TextField from '../formtoyaml/TextField.jsx';
import { styled } from "@mui/material/styles";
import { customizedAxios as axios } from "../../util/customizedAxios.js";

const Box = styled(MuiBox)({
    boxSizing: 'border-box',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350px',
    backgroundColor: '#3f4751',
    color: "white",
    boxShadow: '24px',
    p: '4px',
    zIndex: '100',
    borderRadius: '8px',
    padding: '40px 40px 20px 40px',
    textAlign: "-webkit-center",
    "& span": {
        textAlign: 'center',
    }
});

const CreateClusterModal = ({ isOpen, setIsOpen, onClusterCreated }) => {
    const [clusterName, setClusterName] = useState('');

    const handleCreateCluster = () => {
        axios.post(`/api/v1/cluster/${clusterName}`)
            .then((res) => {
                onClusterCreated();
                setIsOpen(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const messageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        marginBottom: '5px'
    };

    const handleInputChange = (e) => {
        let newValue = e.target.value;
        const regex = /^[a-zA-Z0-9-_]*$/;  // Modified to allow underscores
        if (!regex.test(newValue)) {
            newValue = newValue.replace(/[^a-zA-Z0-9-_]/g, '');  // Modified to allow underscores
        }
        setClusterName(newValue);
    };

    return (
        <Modal open={isOpen}
            onClose={() => setIsOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box outline="none">
                <img src="/k8s.png" alt="k8s-logo" width={100} />
                <span style={messageStyle}>
                    클러스터를 생성하시겠습니까?</span>
                <span style={{ fontSize: "10px", color: "#c3c3c3" }}>
                    대소문자, 숫자, 그리고 하이픈(-)만 입력할 수 있습니다.</span>
                <TextField
                    label="Cluster name"
                    variant="standard"
                    value={clusterName}
                    onChange={handleInputChange} />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', margin: '20px 0' }}>
                    <Button
                        variant="contained"
                        style={{ width: '130px' }}
                        onClick={handleCreateCluster}
                    >Create</Button>
                    <Button
                        variant="outlined"
                        style={{ width: '90px' }}
                        onClick={() => { setIsOpen(false) }}
                    >Close</Button>
                </div>
            </Box>
        </Modal>
    );
};

export default CreateClusterModal;