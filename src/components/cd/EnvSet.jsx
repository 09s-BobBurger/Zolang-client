import React, { useState } from "react";
import {
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import AddButton from "../formtoyaml/AddButton.jsx";
import DeleteButton from "../formtoyaml/DeleteButton.jsx";

function EnvSet({ labels, setLabels }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleAddLabel = () => {
        setLabels([...labels, { key: "", value: "" }]);
    };

    const handleDeleteLabel = (index) => {
        const updatedLabels = [...labels];
        updatedLabels.splice(index, 1);
        setLabels(updatedLabels);
    };

    const handleLabelChange = (index, field, value) => {
        const updatedLabels = [...labels];
        updatedLabels[index][field] = value;
        setLabels(updatedLabels);
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        if (!event.target.checked) {
            setLabels([]);
        }
    };

    return (
        <>
            <FormControlLabel
                sx={{ color: "#ffffff" }}
                control={
                    <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        sx={{ color: "#ffffff" }}
                    />
                }
                label="이 필드에는 환경 변수가 있습니다."
            />
            {isChecked && (
                <div style={{
                    borderLeft: "solid",
                    borderLeftWidth: "thin",
                    paddingLeft: "20px",
                    marginLeft: "9px",
                }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "5px",
                            marginBottom: "5px",
                            height: "30px"
                        }}
                    >
                        <Typography variant="subtitle1" style={{ marginRight: "20px" }}>
                            환경 변수
                        </Typography>
                        <AddButton onClick={handleAddLabel}>
                            Add Env
                        </AddButton>
                    </div>
                    {labels.map((label, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "white",
                                marginBottom: "10px",
                            }}
                        >
                            <TextField
                                id={`labelKey${index}`}
                                label="key"
                                variant="standard"
                                sx={{ color: "#ffffff" }}
                                value={label.key}
                                onChange={(e) =>
                                    handleLabelChange(
                                        index,
                                        "key",
                                        e.target.value
                                    )
                                }
                                InputLabelProps={{ style: { color: "white" } }}
                                InputProps={{ style: { color: "white" } }}
                            />
                            <TextField
                                id={`labelValue${index}`}
                                label="value"
                                variant="standard"
                                sx={{ color: "#ffffff" }}
                                value={label.value}
                                onChange={(e) =>
                                    handleLabelChange(
                                        index,
                                        "value",
                                        e.target.value
                                    )
                                }
                                InputLabelProps={{ style: { color: "white" } }}
                                InputProps={{ style: { color: "white" } }}
                            />
                            <DeleteButton
                                onClick={() => handleDeleteLabel(index)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default EnvSet;
