import React from 'react';
import Footer from '../Footer';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

function FormToYamlFooter(props) {
    return (
        <Footer className="FormToYamlFooter">
            <Button style={{ zIndex: "10", width: "100px", color: "#ffffff", background: "#019CF6", position: "absolute", right:"20px",paddingTop: "5px", paddingBottom: "5px" }} startIcon={<GitHubIcon />}>PUSH</Button>
        </Footer>
    );
}

export default FormToYamlFooter;
