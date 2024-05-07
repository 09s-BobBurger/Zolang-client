import React from 'react';
import '../../styles/MONITORING.css'
import {List, ListItemButton, ListItemText, Typography} from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {styled} from "@mui/material/styles";
import KeyboardArrowDown from "../icon/KeyboardArrowDown.jsx";

const Accordion = styled(MuiAccordion) ({
    background: "transparent",
    margin: '0',
    color: 'white',
    border: 'none',
    boxShadow: 'none',
    '& .MuiButtonBase-root' : {
        margin: '0',
        padding: '8px 16px !important',
        boxSizing: 'border-box',
        minHeight: '40px',
    },
    '& .MuiAccordionSummary-root': {
        minHeight: '40px',
    },
    '& .MuiAccordionSummary-content': {
        margin: '0',
    },
    '& .MuiCollapse-root': {
        marginLeft: '20px',
    },
    '& .MuiAccordionDetails-root': {
        padding: '0',
    }

})

const MonitoringNav = ({items, currentMenu, setCurrentMenu}) => {

    return (
        <div className="monitoring-nav">
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {items.map((item, idx1) => {
                    if (item.subCategory === undefined) {
                        return <ListItemButton key={idx1}
                            style={ currentMenu === item.name ? { background: '#222634'} : {background: 'transparent'}}
                            onClick={() => {
                                setCurrentMenu(item.name);
                            }}
                        ><Typography>{item.name}</Typography></ListItemButton>
                    }
                    else {
                        return <div className="inner-menu" key={idx1}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<KeyboardArrowDown />}
                                ><Typography>{item.name}</Typography></AccordionSummary>
                                <AccordionDetails>
                                {item.subCategory.map((innerItem, idx2) =>
                                <ListItemButton key={idx2}
                                    style={ currentMenu === innerItem ? { background: '#222634'} : {background: 'transparent'}}
                                    onClick={() => {
                                        setCurrentMenu(innerItem);
                                    }}
                                ><Typography>{innerItem}</Typography></ListItemButton>)}
                                </AccordionDetails>
                            </Accordion>
                        </div>;
                    }
                })}
            </List>
        </div>
    );
};

export default MonitoringNav;