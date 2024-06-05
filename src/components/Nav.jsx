import React, {useState, useEffect} from 'react';
import MuiDrawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import {styled} from "@mui/material/styles";
import Logout from "./icon/Logout.jsx";
import { useLocation, useNavigate } from 'react-router-dom';
import loginUtil from '../util/login.js';
import { customizedAxios as axios } from "../util/customizedAxios.js";
import CreateIcon from '@mui/icons-material/Create';
import MuiIconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import TextField from "./formtoyaml/TextField.jsx";

const Drawer = styled(MuiDrawer)({
    zIndex: '15',
    '& .MuiPaper-root': {
        boxSizing: 'border-box',
        width: '300px',
        backgroundColor: '#222634',
        padding: '92px 16px 20px 16px',
    },
})

const AccountContainer = styled(`div`) ({
    display: 'flex',
    flexDirection:"column",
    color: 'white',
    padding: '8px 4px 16px 4px',
    borderBottom: "1.5px solid #606472",
    alignItems: "center",
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
    '& .info-box': {
        display: 'flex',
        color: 'white',
        padding: '8px 4px 16px 4px',
        alignItems: "center",
        width:"100%"
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

const IconButton = styled(MuiIconButton) ({
    width: "35px",
    height: "35px",
    backgroundColor: 'white',
    border: 0,
    color: '#960000',
    borderRadius: "10px",
    "&:hover": {
        backgroundColor: '#dfdfdf',
        border: 0,
        color: '#960000',
    }
})
const Nav = ({open, toggleDrawer}) => {
    const [menuIdx, setMenuIdx] = useState();
    const [userEmail, setUserEmail] = useState("Email");
    const [userName, setUserName] = useState("User");
    const [userImage, setUserImage]= useState();
    const location = useLocation().pathname === "/" ?
        useLocation().pathname : useLocation().pathname.toString().split("/")[1];
    const navigate = useNavigate();
    const [isEmailInputOpen, setIsEmailInputOpen] = useState(false);
    const [emailInput, setEmailInput] = useState("");

    useEffect(() => {
        if (location === "dashboard") setMenuIdx(0);
        else if (location === "FormToYaml") setMenuIdx(1);
        else if (location === "cd") setMenuIdx(2);
        else if (location === "monitoring") setMenuIdx(3);
    }, [location])

    const loadUserData = () => {
        axios.get('/api/v1/users')
            .then((res) => {
                setUserEmail(res.data.data.email);
                setUserName(res.data.data.nickname);
                setUserImage(res.data.data.profileImage);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const onClickEmailSave = () => {
        axios.patch(`/api/v1/users/email?email=${emailInput}`)
            .then(() => {
                loadUserData();
            })
    }

    useEffect(() => {
        if (isEmailInputOpen === false) {
            setEmailInput("");
        }
    }, [isEmailInputOpen])

    useEffect(()=>{
        loadUserData();
    }, []);

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
        toggleDrawer()();
    }

    const addGitInstall = () => {
        window.location.href = 'https://github.com/apps/zolang-app/installations/new';
    }

    return (
        <Drawer open={open} onClose={toggleDrawer()}>
            <AccountContainer>
                <img style={{ background: "transparent", marginBottom: '10px', width: "30px", height: "30px"}} src='../githubIconWhite.svg' alt="github image"/>
                <div className='info-box'>
                    <img src={userImage? userImage: "https://ko.vitejs.dev/logo.svg"} alt="이미지"/>
                    <div style={nameContainerStyle}>
                        <span className="name-label">{userName}</span>
                        <span className="name-content">{userEmail}</span>
                    </div>
                </div>
                <div style={{marginLeft: "auto"}}>
                    <Button className='git-button' style={{color: "pink"}} onClick={addGitInstall}>Add Git install</Button>
                </div>
                {
                    !userEmail &&
                    <div
                        style={{
                            background: 'rgba(255, 0, 0, 0.3)',
                            borderRadius: "10px",
                            padding: "15px",
                            width: "100%",
                            boxSizing: "border-box",
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px"
                                }}
                            >
                                <img
                                    src="../alarm-svgrepo-com.svg" alt="email warning image"
                                    style={{
                                        background: "transparent",
                                        width: "25px",
                                        height: "25px"
                                    }}
                                />
                                <span
                                    style={{
                                        fontSize: "0.9rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >Please set your Email.</span>
                            </div>
                            {
                                !isEmailInputOpen &&
                                <IconButton
                                    onClick={() => {setIsEmailInputOpen(true)}}
                                >
                                    <CreateIcon />
                                </IconButton>
                            }
                        </div>
                        {
                            isEmailInputOpen &&
                            <div>
                                <TextField
                                    id="standard-basic"
                                    label="Email"
                                    variant="outlined"
                                    value={emailInput}
                                    size="small"
                                    sx={{
                                        width: "100%",
                                        height: "30px",
                                        marginBottom: "20px"
                                    }}
                                    onChange={(e) => {setEmailInput(e.target.value)}}
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "end",
                                        gap: "5px"
                                    }}
                                >
                                    <IconButton
                                        onClick={onClickEmailSave}
                                    >
                                        <CheckIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => {setIsEmailInputOpen(false)}}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </div>
                            </div>
                        }
                    </div>
                }
            </AccountContainer>
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
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