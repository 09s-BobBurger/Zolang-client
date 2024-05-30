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

export default function RepositoryCard({ key, repository }) {

    const renderStatusIcon = () => {
        if (repository.lastBuildStatus === "success") {
            return <TagFaces />;
        } else if (repository.lastBuildStatus === "building") {
            return <SentimentNeutral />;
        } else {
            return <MoodBad />;
        } 
    };

    function calculateElapsedTime(timestamp) {
        const currentTime = Date.now();
        const elapsedMilliseconds = currentTime - timestamp * 1000;
        const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
        const days = Math.floor(elapsedSeconds / (24 * 60 * 60));
        const hours = Math.floor((elapsedSeconds % (24 * 60 * 60)) / 3600);
        const minutes = Math.floor((elapsedSeconds % 3600) / 60);
        const seconds = elapsedSeconds % 60;
        return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
    }
    

    return (
        <ThemeProvider theme={theme}>
            <Card
                sx={{
                    width: 240,
                    height: 114,
                    padding: "5px",
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
                        {repository.repositoryName}
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
                                    {repository.createdAt}
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
                                        calculateElapsedTime({repository.createdAt})
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
