import React, { useState } from "react";
import "../../styles/MONITORING.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MuiAccordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import KeyboardArrowDown from "../icon/KeyboardArrowDown.jsx";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const Accordion = styled(MuiAccordion)({
    background: "transparent",
    margin: "0",
    color: "white",
    border: "none",
    boxShadow: "none",
    "& .MuiButtonBase-root": {
        margin: "0",
        padding: "8px 16px !important",
        boxSizing: "border-box",
        minHeight: "40px",
    },
    "& .MuiAccordionSummary-root": {
        minHeight: "40px",
    },
    "& .MuiAccordionSummary-content": {
        margin: "0",
    },
    "& .MuiCollapse-root": {
        marginLeft: "20px",
    },
    "& .MuiAccordionDetails-root": {
        padding: "0",
    },
});

const MonitoringNav = ({ items, currentMenu, namespace }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="monitoring-nav">
            <div className="menu-bar">
                <List
                    component="nav"
                    aria-label="namespace"
                    sx={{ padding: 0 }}
                >
                    <ListItemButton
                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        aria-label="Namespace"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClickListItem}
                    >
                        <ListItemText
                            primary={
                                namespace[selectedIndex]
                                    ? namespace[selectedIndex]
                                    : "Namespace"
                            }
                            secondary="Namespace"
                        />
                    </ListItemButton>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "lock-button",
                        role: "listbox",
                    }}
                    sx={{ padding: 0 }}
                >
                    {namespace.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) =>
                                handleMenuItemClick(event, index)
                            }
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
            <List component="nav" aria-labelledby="nested-list-subheader">
                {items.map((item, idx1) => {
                    if (item.subCategory === undefined) {
                        return (
                            <ListItemButton
                                key={idx1}
                                style={currentMenu === item.name.toLowerCase() ? { background: "#222634" }: { background: "transparent" }}
                                onClick={() => {
                                    if (item.name === "Cluster Overview")
                                        navigate("/monitoring/dashboard");
                                    else navigate(`${item.name.toLowerCase()}`);
                                }}
                            >
                                <Typography>{item.name}</Typography>
                            </ListItemButton>
                        );
                    } else {
                        return (
                            <div className="inner-menu" key={idx1}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<KeyboardArrowDown />}
                                    >
                                        <Typography>{item.name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {item.subCategory.map(
                                            (innerItem, idx2) => (
                                                <ListItemButton
                                                    key={idx2}
                                                    style={ currentMenu === innerItem.toLowerCase()? {background:"#222634",}: {background:"transparent",}}
                                                    onClick={() => {
                                                        navigate(
                                                            `${item.name.toLowerCase()}/${innerItem.toLowerCase()}`
                                                        );
                                                    }}
                                                >
                                                    <Typography>
                                                        {innerItem}
                                                    </Typography>
                                                </ListItemButton>
                                            )
                                        )}
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        );
                    }
                })}
            </List>
        </div>
    );
};

export default MonitoringNav;
