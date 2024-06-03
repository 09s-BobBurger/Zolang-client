import React from "react";
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

export default function RepositoryCard({ repository }) {

    const renderStatusIcon = () => {
        if (repository.lastBuildStatus === "success") {
            return <TagFaces />;
        } else if (repository.lastBuildStatus === "building") {
            return <SentimentNeutral />;
        } else {
            return <MoodBad />;
        } 
    };

    const changeTime = (time) => {
        const [year, month, day, hour, minute, second] = time;
        return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second)));
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
                                    {changeTime(repository.createdAt).toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                flex: 2,
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
