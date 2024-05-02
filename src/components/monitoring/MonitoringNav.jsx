import React from 'react';
import '../../styles/MONITORING.css'
import {List, ListItemButton, ListItemText, Typography} from "@mui/material";

const MonitoringNav = ({items, currentMenu, setCurrentMenu}) => {

    return (
        <div className="monitoring-nav">
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {items.map((item, idx1) => {
                    if (item.innerMenu === undefined) {
                        return <ListItemButton key={idx1}
                            style={ currentMenu === item.name ? { background: '#222634'} : {background: 'transparent'}}
                            onClick={() => {
                                setCurrentMenu(item.name);
                            }}
                        ><Typography>{item.name}</Typography></ListItemButton>
                    }
                    else {
                        return <div className="inner-menu" key={idx1}>
                            <ListItemText><Typography>{item.name}</Typography></ListItemText>
                                {item.innerMenu.map((innerItem, idx2) =>
                                <ListItemButton key={idx2}
                                    style={ currentMenu === innerItem ? { background: '#222634'} : {background: 'transparent'}}
                                    onClick={() => {
                                        setCurrentMenu(innerItem);
                                    }}
                                ><Typography>{innerItem}</Typography></ListItemButton>)}
                        </div>;
                    }
                })}
            </List>
        </div>
    );
};

export default MonitoringNav;