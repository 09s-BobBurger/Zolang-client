import React from 'react';
import KeyboardArrowLeft from "../../../icon/KeyboardArrowLeft.jsx";
import MuiButton from "@mui/material/Button";

const DaemonSetDetail = ({ daemonSet, initDaemonSet }) => {
    return (
        <div
            style={{ width: '79vw' }}
        >
            <MuiButton
                style={{
                    width: 'fit-content',
                    background: 'transparent',
                    color: 'white',
                    border: 'none',
                    marginBottom: '10px',
                    padding: '10px 0',
                    fontSize: '1.1rem'
                }}
                onClick={() => {initDaemonSet()}}
            >
                <KeyboardArrowLeft />
                Return to List
            </MuiButton>
        </div>
    );
};

export default DaemonSetDetail;