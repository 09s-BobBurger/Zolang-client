import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TagFaces from "../icon/TagFaces";
import MoodBad from "../icon/MoodBad";
import SentimentNeutral from "../icon/SentimentNeutral";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        caption: {
            fontSize: "0.65rem",
        },
        body2: {
            fontSize: "0.8rem",
        },
    },
});

export default function RepositoryCard({ name }) {
    const [data, setData] = useState({});

    useEffect(() => {
        axios
            .get("#")
            .then((response) => {
                // setData(response.data);
                setData({
                    name: {name},
                    time: "9.3s",
                    age: "2 months",
                    status: "good",
                });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const renderStatusIcon = () => {
        if (data.status === "good") {
            return <TagFaces />;
        } else if (data.status === "bad") {
            return <MoodBad />;
        } else if (data.status === "well") {
            return <SentimentNeutral />;
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Card
                sx={{
                    width: 240,
                    height: 114,
                    padding: "5px",
                    margin: "10px",
                    marginTop: 0,
                }}
                style={{
                    backgroundColor: "#2E3240",
                    color: "#ffffff",
                    outline: "1px solid #606472",
                    borderRadius: "10px",
                }}
            >
                <CardContent>
                    <Typography sx={{ mb: 1.5 }} component="div">
                        {name}
                    </Typography>
                    <div
                        style={{
                            textAlign: "left",
                            display: "flex",
                            height: "32px",
                        }}
                    >
                        <div style={{ flex: 8 }}>
                            <div style={{ display: "flex" }}>
                                <div style={{ flex: 1, marginRight: "5px" }}>
                                    <Typography
                                        variant="caption"
                                        color="#ABAFBD"
                                    >
                                        Time
                                    </Typography>
                                    <Typography variant="body2">
                                        {data.time}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography
                                        variant="caption"
                                        color="#ABAFBD"
                                    >
                                        Age
                                    </Typography>
                                    <Typography variant="body2">
                                        {data.age}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                flex: 4,
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "right",
                                paddingTop: "10px",
                            }}
                        >
                            {renderStatusIcon()}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
