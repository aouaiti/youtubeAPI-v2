import { useState } from "react";
import { Box } from "@mui/material";
import "./App.css";
import FixedContainer from "./Components/UI/Container";
import SimplePaper from "./Components/UI/Paper";
import CustomizedInputBase from "./Components/SearchBar";
import DataList from "./Components/DataList";
import MediaCard from "./Components/Video";

function App() {
  const [data, setData] = useState([]);
  const [vid, setVid] = useState(null);
  const clickHandler = (data) => {
    setVid(<MediaCard data={data} />);
  };
  const onSubmit = (fetchedData) => {
    return setData(fetchedData);
  };
  return (
    <FixedContainer className={"container"}>
      <Box sx={{ flex: 1 }}>
        <SimplePaper className={"box1"}>
          <CustomizedInputBase onSubmit={onSubmit} />
        </SimplePaper>
      </Box>
      <Box className="dataSection">
        <SimplePaper className={"box2"}>{vid}</SimplePaper>
        <SimplePaper className={"box3"}>
          <DataList data={data} clickHandler3={clickHandler} />
        </SimplePaper>
      </Box>
    </FixedContainer>
  );
}

export default App;
