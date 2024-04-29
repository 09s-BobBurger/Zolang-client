import React, { useState, useEffect } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from "@mui/material/styles";

const AppBar = styled(MuiAppBar)({
    zIndex: '20',
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
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true); 
        }, 2000);
    }, []);

    const onClickLogo = () => {
        setOpen(!open);
    }

    if (isLoggedIn) {
        return (
            <AppBar>
                <img src="logo.svg" alt="navigation button" onClick={onClickLogo}/>
            </AppBar>
        );
    }

    return null;
};

export default Header;
