import React, {useState} from 'react';
import Footer from '../../Footer';
import Button from '@mui/material/Button';
import MuiTextField from '@mui/material/TextField';
import {styled} from "@mui/material/styles";
import loginUtil from "../../../util/login.js";
import axios from 'axios';

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
    const [showInput, setShowInput] = useState(false);
    const [token, setToken] = useState("");
    const [domainUrl, setDomainUrl] = useState("");

    const [tokenError, setTokenError] = useState(false);
    const [domainUrlError, setDomainUrlError] = useState(false);
    const onClickOpenInput = () => {
        setShowInput(!showInput);
    }

    const onClickEnterToken = () => {
        if (token.length === 0 || domainUrl.length === 0) {
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
                        data: {
                            "token": token,
                            "domainUrl": domainUrl
                        },
                        headers: {
                            "Authorization": "BearerToken " + loginUtil.getAccessToken(),
                        },
                    }
                )
                .then(r => {
                    if (!r.data.success) {
                        props.setIsFailModalOpen(true);
                    } else {
                        setShowInput(false);
                        props.setIsSuccessModalOpen(true);
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
                    height: showInput ? '200px' :'40px',
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
                    <TextField
                        error={tokenError}
                        id="standard-basic"
                        label="Token"
                        variant="standard"
                        onChange={onChangeToken}
                        autoComplete='off'
                        helperText={tokenError ? "token needed" : ""}
                    />
                    <TextField
                        error={domainUrlError}
                        id="standard-basic"
                        label="Domain URL"
                        variant="standard"
                        onChange={onChangeDomainUrl}
                        autoComplete='off'
                        helperText={domainUrlError ? "domain url needed" : ""}
                    />
                </div>
                <div style={{position: "absolute", right:"40px", bottom: '15px'}}>
                    <Button onClick={onClickEnterToken} variant="contained" style={{ zIndex: "10", width: "100px", color: "#ffffff", background: "#019CF6", paddingTop: "5px", paddingBottom: "5px", fontSize: "14px", marginRight: '20px' }}>
                        Enter
                    </Button>
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