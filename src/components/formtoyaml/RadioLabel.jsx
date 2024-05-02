import React from 'react';
import FormControlLabel from "@mui/material/FormControlLabel";
import {styled} from "@mui/material/styles";

const RadioLabel = styled(FormControlLabel) ({
    '& .MuiTypography-root': {
        fontSize: '14px',
    }
})

export default RadioLabel;