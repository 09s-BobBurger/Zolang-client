import KeyboardArrowDown from "../icon/KeyboardArrowDown.jsx";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from '@mui/material/styles';

/*
Custom AccordionSummary
*/
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<KeyboardArrowDown sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    // '& .MuiAccordionSummary-content': {
    //     marginLeft: theme.spacing(1),
    // },
    fontSize: '800',
    fontWeight: 'bold',
}));

export default AccordionSummary;