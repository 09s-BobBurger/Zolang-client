import React from "react";
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
import {setNamespace} from "../../redux/modules/namespace.js";
import {useDispatch, useSelector} from "react-redux";

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

const MonitoringNav = ({ items, currentMenu, namespaces }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const currentNamespace = useSelector((state) => state.namespace.namespace);
    const dispatch = useDispatch();

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (option) => {
        setAnchorEl(null);
        dispatch(setNamespace(option));
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
                                currentNamespace
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
                    {namespaces.map((option) => (
                        <MenuItem
                            key={option}
                            selected={option === currentNamespace}
                            onClick={() =>
                                handleMenuItemClick(option)
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
