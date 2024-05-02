import {Button as MuiButton} from '@mui/material';
import { styled } from '@mui/material/styles';

/*
Custom Button
*/
const Button = styled((props) => (
    <MuiButton
        variant="outlined"
        size="small"
        {...props}
    />
)) ({
    color:'#ffffff',
    borderWidth: '0px',
    margin: '5px',
    backgroundColor: "#474B59",
    fontSize: '0.7rem',
    padding: '1px',
    height: "25px"
})

export default Button;