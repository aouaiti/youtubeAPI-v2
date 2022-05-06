import List from "@mui/material/List";
import AlignItemsList from "./Snippet";
import style from "./DataList.module.css";

const DataList = ({ data, clickHandler3 }) => {
  const clickHandler = (data) => {
    clickHandler3(data);
  };
  const arr = data?.data?.items?.map((x) => {
    return (
      <AlignItemsList
        key={x.id.videoId}
        data={x}
        clickHandler2={clickHandler}
      />
    );
  });
  return <List className={style.data}>{arr}</List>;
};
export default DataList;
