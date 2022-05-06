import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useState } from "react";
import Youtube from "./API/YoutubeAPI";

export default function CustomizedInputBase({ onSubmit }) {
  const [term, setTerm] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(term);
    const data = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(data);
    onSubmit(data);
  };
  return (
    <Paper
      component="form"
      onSubmit={submitHandler}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        value={term}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Youtube videos"
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => setTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}
