import React from 'react';
import TextField from "./TextField.jsx";

const InputBox = ({ name, setter }) => {
    const onChangeInput = (e) => {
        setter(e.target.value)
    }
    return (
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
            <p>{name}</p>
            <TextField onChange={onChangeInput} id="standard-basic" variant="standard" placeholder={name}/>
        </div>
    );
};

export default InputBox;