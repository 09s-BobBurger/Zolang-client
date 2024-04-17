import MuiAccordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';

/*
Custom Accordion
*/
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    width: '100%',
    backgroundColor: '#2E3240',
    color: 'white',
    // border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: '1px solid #ABAFBD',
    },
    '&::before': {
        display: 'none',
    },
}));

export default Accordion;