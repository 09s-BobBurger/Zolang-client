import {Button as MuiButton} from '@mui/material';
import { styled } from '@mui/material/styles';

/*
Custom Button
*/
const Button = styled((props) => (
    <MuiButton
        variant="outlined"
        {...props}
    />
)) ({
    color:'#019CF6',
    borderWidth: '2px',
    margin: '20px 0',
})

export default Button;