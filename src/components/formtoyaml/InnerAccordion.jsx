import MuiAccordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';

/*
Accordion 내부에서 보여줄 Accordion
*/
const InnerAccordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    width: '100%',
    margin: '0',
    backgroundColor: '#2E3240',
    color: 'white',
    '&::before': {
        display: 'none',
    },
}));

export default InnerAccordion;