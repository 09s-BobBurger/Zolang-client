import React from 'react';
import {styled} from "@mui/material/styles";
import Close from "../icon/Close.jsx";
import {IconButton} from "@mui/material";
const StyledDeleteButton = styled(IconButton) ({
    '&:focus, &:focus-visible': {
        outline: 'none',
        border: 'none'
    }
})
const DeleteButton = (props) => {
    return (
        <StyledDeleteButton aria-label="delete" {...props}><Close /></StyledDeleteButton>
    )
};
export default DeleteButton;