import React from 'react';
import Footer from '../../Footer';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

function TokenFooter(props) {
    return (
        <Footer className="FormToYamlFooter">
            <Button style={{ zIndex: "10", width: "180px", color: "#ffffff", background: "#019CF6", position: "absolute", right:"20px",paddingTop: "5px", paddingBottom: "5px", fontSize: "14px" }}>Enter your Token</Button>
        </Footer>
    );
}

export default TokenFooter;