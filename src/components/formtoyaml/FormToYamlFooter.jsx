import React from 'react';
import Footer from '../Footer';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import loginUtil from '../../util/login.js';

function FormToYamlFooter(props) {
    const onClickPush = () => {
        if (loginUtil.checkLogin()) {
            props.setIsPushModalOpen(true);
        } else {
            props.setIsLoginModalOpen(true);
        }
    }
    return (
        <Footer className="FormToYamlFooter">
            <Button
                style={{ zIndex: "10", width: "100px", color: "#ffffff", background: "#019CF6", position: "absolute", right:"20px",paddingTop: "5px", paddingBottom: "5px" }} startIcon={<GitHubIcon />}
                onClick={onClickPush}
            >PUSH</Button>
        </Footer>
    );
}

export default FormToYamlFooter;
