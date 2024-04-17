import React, { useState } from 'react';
import TextField from "./TextField.jsx";

/*
Storage 크기를 입력받는 박스
max는 Gi 기준
*/
const StorageInputBox = ({ name, setter, max }) => {
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState(null);
    const onChangeInput = (e) => {
        setter(e.target.value);
        let value = e.target.value;
        if (value.slice(-2) === "Mi" && Number(value.slice(0, -2)) > 1000 * max
        || value.slice(-2) === "Gi" && Number(value.slice(0, -2)) > 1 * max) {
            setError(true);
            setHelperText(`Storage cannot exceed ${max}Gi.`);
            return;
        }
        if (value.slice(-2) !== "Mi" && value.slice(-2) !== "Gi") {
            setError(true);
            setHelperText("Storage units(Mi, Gi) are required.")
            return;
        }
        setError(false);
        setHelperText(null);
    }
    return (
        <div style={{ position: "relative",display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
            <p>{name}</p>
            <div style={{ position: "absolute", right: "0", bottom: "-10px" }}> {/* 고정된 위치에 텍스트 표시 */}
                {helperText && <span style={{ color: error ? "red" : "inherit", fontSize: '10px' }}>{helperText}</span>}
            </div>
            <TextField error={error} onChange={onChangeInput} id="standard-basic" variant="standard" placeholder={name}/>
        </div>
    );
};

export default StorageInputBox;