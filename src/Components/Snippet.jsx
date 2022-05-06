import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import style from "./Snippet.module.css";

export default function AlignItemsList({ data, clickHandler2 }) {
  const clickHandler = (e) => {
    clickHandler2(data);
  };
  return (
    <>
      <ListItem
        className={style.list}
        onClick={clickHandler}
        alignItems="flex-start"
        sx={{
          display: "flex",
          flexDirection: "column",
          background: "#1c1c1c",
          color: "white",
          cursor: "pointer",
          overflow: "hidden",
          //   padding: "0 10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            className={style.img}
            alt="Remy Sharp"
            src={data.snippet.thumbnails.medium.url}
          />
        </Box>
        <ListItemText
          primary={data.snippet.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="#d0d3d8"
              >
                {data.snippet.description}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider className={style.data} variant="inset" component="li" />
    </>
  );
}
