import React from 'react';
import Modal from "@mui/material/Modal";

const Loading = ({ isOpen }) => {
    return (
        <Modal open={isOpen}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description">
            <img
                src="../../../loading.svg"
                alt="loading icon"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    background: "transparent",
                }}
            />
        </Modal>
    );
};

export default Loading;