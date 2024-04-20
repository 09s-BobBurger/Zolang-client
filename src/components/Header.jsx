import React, { useState, useEffect } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const AppBar = styled(MuiAppBar)({
    zIndex: '5',
    '&.MuiPaper-root': {
        backgroundColor: '#222634',
        padding: '20px 32px',
    },
    '& img': {
        width: '61px',
    },
    '& img:hover': {
        cursor: 'pointer'
    }
});

const Header = ({ open, setOpen }) => {
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true); 
        }, 2000);
    }, []);

    const onClickLogo = () => {
        setOpen(!open);
    }

    const isFormToYamlPage = location.pathname.includes('/formToYaml');
    if (isFormToYamlPage && isLoggedIn) {
        return (
            <AppBar>
                <img src="logo.svg" alt="navigation button" onClick={onClickLogo}/>
            </AppBar>
        );
    }

    return null;
};

export default Header;
