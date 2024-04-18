import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import {styled} from "@mui/material/styles";

const AppBar = styled(MuiAppBar) ({
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
})
const Header = ({ open, setOpen }) => {

    const onClickLogo = () => {
        setOpen(!open);
    }

    return (
        <AppBar>
            <img src="logo.svg" alt="navigation button" onClick={onClickLogo}/>
        </AppBar>
    );
};

export default Header;