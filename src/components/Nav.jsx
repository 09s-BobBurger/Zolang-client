import React, {useState, useEffect} from 'react';
import MuiDrawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import {styled} from "@mui/material/styles";
import Logout from "./icon/Logout.jsx";
import { useLocation, useNavigate } from 'react-router-dom';
import loginUtil from '../util/login.js';

const Drawer = styled(MuiDrawer)({
    zIndex: '15',
    '& .MuiPaper-root': {
        boxSizing: 'border-box',
        width: '300px',
        backgroundColor: '#222634',
        padding: '112px 16px 20px 16px',
    },
})

const AccountContainer = styled(`div`) ({
    display: 'flex',
    color: 'white',
    padding: '8px 4px 16px 4px',
    borderBottom: "1.5px solid #606472",
    '& img': {
        width: '64px',
        height: '64px',
        borderRadius: '4px',
        backgroundColor: 'white'
    },
    '& span': {
        fontSize: '16px',
        height: '28px'
    },
    '& .name-label': {
        fontWeight: '600'
    },
    '& .name-content': {

    }
})

const MenuContainer = styled(`div`) ({
    color: '#ABAFBD',
    marginTop: '20px',
    '& ul': {
        listStyleType: 'none',
        margin: '0',
        padding: '0',
    },
    '& li': {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        height: '60px',
        justifyContent: 'center',
        padding: '16px',
        fontWeight: '600',
        borderRadius: '8px'
    },
    '& li:hover': {
        cursor: 'pointer',
    }
});

const LogoutButton = styled(Button) ({
    '&.MuiButton-root': {
        boxSizing: 'border-box',
        border: '2px solid #606472',
        borderRadius: '8px',
        color: '#ABAFBD',
        textTransform: 'none',
        padding: '10px 94px',
        fontWeight: '700',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    '& svg': {
        width: '24px',
        height: '24px',
    }
})

const nameContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '12px 0 0 10px',
}

const menus = [
    "Dashboard", "Form To Yaml", "CI/CD", "Monitoring"
]
const Nav = ({open}) => {
    const [menuIdx, setMenuIdx] = useState();
    const location = useLocation().pathname === "/" ?
        useLocation().pathname : useLocation().pathname.toString().split("/")[1];
    const navigate = useNavigate();

    useEffect(() => {
        if (location === "dashboard") setMenuIdx(0);
        else if (location === "FormToYaml") setMenuIdx(1);
        else if (location === "cd") setMenuIdx(2);
        else if (location === "monitoring") setMenuIdx(3);
    }, [location])

    const onClickMenu = (idx) => {
        if (idx === 0) {
            navigate("/dashboard");
        } else if (idx === 1) {
            navigate("/FormToYaml");
        } else if (idx === 2) {
            navigate("/cd/repoList");
        } else if (idx === 3) {
            navigate("/monitoring/clusterList");
        }
    }

    return (
        <Drawer open={open}>
            <AccountContainer>
                <img src="https://ko.vitejs.dev/logo.svg" alt="test용 이미지"/>
                <div style={nameContainerStyle}>
                    <span className="name-label">name</span>
                    <span className="name-content">emoee</span>
                </div>
            </AccountContainer>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <MenuContainer>
                    <ul>
                        {menus.map((menu, idx) =>
                            <li key={idx} style={ menuIdx === idx ? {backgroundColor: "#2E3240", color: "white"} : {}}
                            onClick={() => onClickMenu(idx)}>
                                {menu}
                            </li> )}
                    </ul>
                </MenuContainer>
                <LogoutButton
                    variant="outlined"
                    onClick={() => {loginUtil.logout()}}
                ><Logout />Logout</LogoutButton>
            </div>
        </Drawer>
    );
};

export default Nav;