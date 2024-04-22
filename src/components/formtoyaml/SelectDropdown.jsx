import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import MuiFormControl from "@mui/material/FormControl";
import {InputLabel} from "@mui/material";
import Select from "@mui/material/Select";
import {styled} from "@mui/material/styles";

const FormControl = styled(MuiFormControl) ({
    margin: '10px 0',
})

const SelectDropdown = ({name, value, setter, list}) => {
    const handleChange = (e) => {
        setter(e.target.value);
    };
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{name}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={name}
                onChange={handleChange}
            >
                {list.map((item, idx) =>
                    <MenuItem key={idx} value={item}>{item}</MenuItem>
                )}
            </Select>
        </FormControl>
    );
};

export default SelectDropdown;