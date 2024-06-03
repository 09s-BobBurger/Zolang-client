import React from 'react';
import TextField from "./TextField.jsx";

/*
Label과 TextField가 포함된 박스
*/
const InputBox = ({ name, setter, value }) => {
    const onChangeInput = (e) => {
        setter(e.target.value)
    }
    return (
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
            <p>{name}</p>
            <TextField onChange={onChangeInput} id="standard-basic" variant="standard" label={name} placeholder={name} value={value}/>
        </div>
    );
};

export default InputBox;