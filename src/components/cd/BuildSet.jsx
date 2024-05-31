import React from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
} from "@mui/material";
import Typography from "@mui/material/Typography";

function BuildSet({
    language,
    setLanguage,
    version,
    setVersion,
    buildTool,
    setBuildTool,
}) {
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        setVersion("");
        setBuildTool("");
    };

    const handleVersionChange = (event) => {
        setVersion(event.target.value);
    };

    const handleBuildToolChange = (event) => {
        setBuildTool(event.target.value);
    };

    const languageOptions = [
        { value: "Python", label: "Python" },
        { value: "Java", label: "Java" },
        { value: "JS", label: "JavaScript" },
    ];

    const javaVersions = [
        "Java SE 8",
        "Java SE 9",
        "Java SE 10",
        "Java SE 11",
        "Java SE 12",
        "Java SE 13",
        "Java SE 14",
        "Java SE 15",
        "Java SE 16",
        "Java SE 17",
    ];

    const jsVersions = [
        "v22.2.0",
        "v21.7.3",
        "v20.14.0",
        "v19.9.0",
        "v18.20.3",
        "v17.9.1",
        "v16.20.2",
        "v15.14.0",
        "v14.21.3",
        "v13.14.0",
        "v12.22.12",
        "v11.15.0",
        "v10.24.1",
        "v9.11.2",
        "v8.17.0",
        "v7.10.1",
        "v6.17.1",
        "v5.12.0",
        "v4.9.1",
        "v0.12.18",
    ];

    const buildTools = {
        Java: ["AUTO", "gradle", "maven"],
        JS: ["AUTO", "npm", "yarn"],
    };

    return (
        <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
            <Typography variant="subtitle1" style={{ marginRight: "20px" }}>
                Project Info
            </Typography>
            <div>
                <FormControl required sx={{ m: 1, minWidth: 200, width: "25vw" }}>
                    <InputLabel id="language-label" sx={{ color: "#ffffff" }}>
                        Language
                    </InputLabel>
                    <Select
                        labelId="language-label"
                        id="language"
                        value={language}
                        sx={{ color: "#ffffff", borderColor: "#ffffff" }}
                        label="Language"
                        onChange={handleLanguageChange}
                    >
                        {languageOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText sx={{ color: "#ffffff" }}>
                        Required
                    </FormHelperText>
                </FormControl>
                <FormControl
                    sx={{ m: 1, minWidth: 200, width: "25vw" }}
                    disabled={!language || language === "Python"}
                >
                    <InputLabel
                        id="language-version-label"
                        sx={{ color: "#ffffff" }}
                    >
                        Language Version
                    </InputLabel>
                    <Select
                        labelId="language-version-label"
                        id="language-version"
                        value={version}
                        sx={{ color: "#ffffff", borderColor: "#ffffff" }}
                        label="Language Version"
                        onChange={handleVersionChange}
                    >
                        {language === "Java" &&
                            javaVersions.map((version, index) => (
                                <MenuItem key={index} value={version}>
                                    {version}
                                </MenuItem>
                            ))}
                        {language === "JS" &&
                            jsVersions.map((version, index) => (
                                <MenuItem key={index} value={version}>
                                    {version}
                                </MenuItem>
                            ))}
                    </Select>
                    <FormHelperText sx={{ color: "#ffffff" }}>
                        {language === "Python" ? "Disabled" : "Required"}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    required
                    sx={{ m: 1, minWidth: 200, width: "25vw" }}
                    disabled={!language || language === "Python"}
                >
                    <InputLabel id="build-tool-label" sx={{ color: "#ffffff" }}>
                        Build Tool
                    </InputLabel>
                    <Select
                        labelId="build-tool-label"
                        id="build-tool"
                        value={buildTool || "AUTO"}
                        label="Build Tool"
                        sx={{ color: "#ffffff", borderColor: "#ffffff" }}
                        onChange={handleBuildToolChange}
                    >
                        {language &&
                            buildTools[language]?.map((tool, index) => (
                                <MenuItem key={index} value={tool}>
                                    {tool}
                                </MenuItem>
                            ))}
                    </Select>
                    <FormHelperText sx={{ color: "#ffffff" }}>
                        {language === "Python" ? "Disabled" : "Required"}
                    </FormHelperText>
                </FormControl>
            </div>
        </div>
    );
}

export default BuildSet;
