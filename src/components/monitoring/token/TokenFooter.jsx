import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import MuiTextField from '@mui/material/TextField';
import {styled} from "@mui/material/styles";
import {customizedAxios as axios} from "../../../util/customizedAxios.js";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import {setCluster} from "../../../redux/modules/cluster.js";

const TextField = styled(MuiTextField) ({
    width: '50vw',
    minWidth: '400px',
    margin: '8px',
    '& .MuiFormLabel-root, & .MuiFormLabel-shrink': {
        color: 'white !important',
    },
    '& .MuiInput-underline:before, .MuiInput-underline:after, .MuiInput-underline:hover::before': {
        borderColor: 'white !important',
    },
    '& .MuiInputBase-input' : {
        color: 'white'
    },
    '& input:-internal-autofill-selected': {
        appearance: 'none !important'
    },
    '& .Mui-error': {
        color: 'red !important'
    },
    '& .Mui-error.MuiInput-underline:before, & .Mui-error.MuiInput-underline:after, & .Mui-error.MuiInput-underline:hover::before': {
        borderColor: 'red !important',
    },
    '& .MuiFormHelperText-root': {
        position: 'absolute',
        bottom: '-18px'
    }

})

function TokenFooter(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clusterNameState = useSelector(state => state.token.clusterName);
    const clusterName = clusterNameState === "클러스터 이름을 입력해주세요." ? "" : clusterNameState;
    const [showInput, setShowInput] = useState(false);
    const [token, setToken] = useState("");
    const [domainUrl, setDomainUrl] = useState("");
    const [version, setVersion] = useState();

    const [tokenError, setTokenError] = useState(false);
    const [domainUrlError, setDomainUrlError] = useState(false);
    const [clusterNameError, setClusterNameError] = useState(false);

    const onClickOpenInput = () => {
        setShowInput(!showInput);
    }

    // version check func
    const onClickCheckVersion = () => {
        if (clusterName.length === 0 || token.length === 0 || domainUrl.length === 0) {
            if (clusterName.length === 0) {
                setClusterNameError(true);
            }
            if (token.length === 0) {
                setTokenError(true);
            }
            if (domainUrl.length === 0) {
                setDomainUrlError(true);
            }
        } else {
            axios
                .post("/api/v1/cluster/version",
                    {
                        "secret_token": token,
                        "domain_url": domainUrl,
                    }
                )
                .then(r => {
                    if (r.data.success) {
                        setVersion(r.data.data);
                    } else {
                    }
                })
        }
    }

    // enroll cluster func
    const onClickEnterToken = () => {
        if (clusterName.length === 0 || token.length === 0 || domainUrl.length === 0) {
            if (clusterName.length === 0) {
                setClusterNameError(true);
            }
            if (token.length === 0) {
                setTokenError(true);
            }
            if (domainUrl.length === 0) {
                setDomainUrlError(true);
            }
        } else {
            axios
                .post("/api/v1/cluster",
                    {
                        "cluster_name": clusterName,
                        "secret_token": token,
                        "domain_url": domainUrl,
                        "version": version,
                    },
                )
                .then(r => {
                    if (!r.data.success) {
                        props.setIsFailModalOpen(true);
                    } else {
                        dispatch(setCluster(r.data.data));
                        navigate('/monitoring/dashboard');
                    }
                })
        }
    }

    const onChangeToken = (e) => {
        setToken(e.target.value);
        setTokenError(false);
    }

    const onChangeDomainUrl = (e) => {
        setDomainUrl(e.target.value);
        setDomainUrlError(false);
    }

    useEffect(() => {
        if (clusterName.length > 0) {
            setClusterNameError(false);
        }
    }, [clusterName])

    return (
        <div className="TokenFooter"
                style={{
                    backgroundColor: "#222634",
                    padding: "12px 20px",
                    borderTop: "1px solid #000000",
                    position: "fixed",
                    bottom: 0,
                    width: "98vw",
                    zIndex: "5",
                    height: showInput ? '250px' :'40px',
                    transition: 'height 0.5s ease-in-out',
                }}
        >
            {showInput && <div className="token-form-container"
                  style={{
                      display: 'flex',
                      gap: '50px',
                      justifyContent: 'start',
                      alignItems: 'center',
                      height: '100%',
                  }}
            >
                <img style={{minWidth: "180px", marginLeft: '30px'}} src="../../../kubernetes.svg"
                     alt="kubernetes icon"/>
                <div
                    style={{display: 'flex', flexDirection: 'column'}}
                >
                    <Typography style={{ margin: '8px', color: clusterNameError ? 'red' : 'white'}}>
                        Cluster Name: {clusterName} {clusterNameError && "cluster name needed"}
                    </Typography>
                    <Typography style={{ margin: '8px', color: 'white' }}>
                        Version: {version}
                        {version &&
                            <Button
                                onClick={onClickCheckVersion}
                                sx={{
                                    width: 30,
                                    height: 30,
                                    minWidth: 30,
                                    minHeight: 30,
                                    padding: 0,
                                    margin: '10px',
                                    '&:hover': {
                                        outline: '1.5px solid #ffffff', // You can customize the color and width
                                        outlineOffset: '2px',
                                    },
                                }}
                            >
                                <img width="25px" src="../../../reload.svg" alt="reload version" />
                            </Button>
                        }
                    </Typography>
                    <TextField
                        error={tokenError}
                        id="standard-basic"
                        label="Token"
                        variant="standard"
                        onChange={onChangeToken}
                        autoComplete='off'
                        value={token}
                        helperText={tokenError ? "token needed" : ""}
                    />
                    <TextField
                        error={domainUrlError}
                        id="standard-basic"
                        label="Domain URL"
                        variant="standard"
                        onChange={onChangeDomainUrl}
                        autoComplete='off'
                        value={domainUrl}
                        helperText={domainUrlError ? "domain url needed" : ""}
                    />
                </div>
                <div style={{position: "absolute", right:"40px", bottom: '15px'}}>

                    {version ?
                        <Button onClick={onClickEnterToken} variant="contained" style={{
                            zIndex: "10",
                            width: "100px",
                            color: "#ffffff",
                            background: "#019CF6",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            fontSize: "14px",
                            marginRight: '20px'
                        }}>
                            Enter
                        </Button>
                    :
                        <Button onClick={onClickCheckVersion} variant="contained" style={{
                            zIndex: "10",
                            width: "160px",
                            color: "#ffffff",
                            background: "#019CF6",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            fontSize: "14px",
                            marginRight: '20px'
                        }}>
                            Check Version
                        </Button>
                    }
                    <Button onClick={onClickOpenInput} style={{ color: '#7d7d7d', borderColor: '#7d7d7d', width: "100px", overflow: 'hidden', background: 'white', padding: '5px 8px', transition: 'opacity 0.5s ease-in-out' }}>
                        Cancel
                    </Button>
                </div>
            </div>}
            {!showInput && <Button
                onClick={onClickOpenInput}
                style={{
                    zIndex: "10",
                    width: "180px",
                    color: "#ffffff",
                    background: "#019CF6",
                    position: "absolute",
                    right: "40px",
                    bottom: '15px',
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    fontSize: "14px"
                }}
            >
                Enter your Token
            </Button>}
        </div>
    );
}

export default TokenFooter;