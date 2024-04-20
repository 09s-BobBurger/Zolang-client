import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

const AppBar = styled(MuiAppBar)({
    position: "fixed",
    top: 'auto',
    bottom: 0,
    width: "100vw",
    height: "60px",
    zIndex: "5",
    "&.MuiPaper-root": {
        backgroundColor: "#222634",
        padding: "12px 20px",
        borderTop: "1px solid #000000", 
    },
});

const Footer = ({ children }) => {
    return (
        <AppBar>{children}</AppBar>
    );
};

export default Footer;
