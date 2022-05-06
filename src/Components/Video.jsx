import * as React from "react";
import style from "./Video.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function MediaCard({ data }) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  console.log(data);
  return (
    <ThemeProvider theme={darkTheme}>
      <Card sx={{ maxWidth: "100%", height: "100%" }}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${data.id.videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <CardContent className={style.dis}>
          <Typography gutterBottom variant="h5" component="div">
            {data.snippet.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.snippet.description}
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
