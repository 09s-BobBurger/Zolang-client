import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'left',
}));

export default AccordionDetails;
