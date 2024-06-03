import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(trigger, selectTrigger, theme) {
    return {
        fontWeight:
            selectTrigger.indexOf(trigger) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
        color: selectTrigger.indexOf(trigger) === -1 ? "black" : "#3c6cc7", // 폰트 색상 변경
    };
}

const triggers = ["push", "pull_request"];

function TriggerSet({ selectTrigger, setSelectTrigger }) {
    const theme = useTheme();

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectTrigger(typeof value === "string" ? value.split(",") : value);
    };

    return (
        <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
            <Typography variant="subtitle1" style={{ marginRight: "20px" }}>
                Trigger
            </Typography>
            <>
                <FormControl sx={{ m: 1, minWidth: 200, width: "30vw" }}>
                    <InputLabel id="trigger-label" sx={{ color: "white" }}>
                        Trigger
                    </InputLabel>
                    <Select
                        labelId="trigger-label"
                        sx={{ color: "white", borderColor: "#ffffff" }}
                        id="trigger"
                        multiple
                        value={selectTrigger}
                        onChange={handleChange}
                        input={
                            <OutlinedInput
                                id="select-trigger"
                                label="Trigger"
                                sx={{ color: "white" }}
                            />
                        }
                        renderValue={(selected) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 0.5,
                                    color: "white",
                                }}
                            >
                                {selected.map((value) => (
                                    <Chip
                                        key={value}
                                        label={value}
                                        sx={{
                                            color: "white",
                                            backgroundColor: "#0a5992c7",
                                        }}
                                    />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {triggers.map((trigger) => (
                            <MenuItem
                                key={trigger}
                                value={trigger}
                                style={getStyles(trigger, selectTrigger, theme)}
                            >
                                {trigger}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </>
        </div>
    );
}

export default TriggerSet;
