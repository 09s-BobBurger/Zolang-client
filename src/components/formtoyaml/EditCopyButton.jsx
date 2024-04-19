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
    color:'#797D8B',
    borderColor: '#797D8B',
    borderWidth: '2px',
    margin: '20px 0',
})

export default Button;