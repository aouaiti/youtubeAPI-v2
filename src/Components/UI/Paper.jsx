import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function SimplePaper({ children, className }) {
  //   const val = className === "box2" ? "100%" : "inherit";
  return (
    <Box
      className={className}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          //   height: "fit-content",
        },
      }}
    >
      <Paper elevation={3}>{children}</Paper>
    </Box>
  );
}
