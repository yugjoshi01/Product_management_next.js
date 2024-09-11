"use client";
import { toggleDarkMode } from "@/store/themeSlice";
import { Checkbox } from "antd";
import { useDispatch } from "react-redux";

function Check() {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Checkbox
      onChange={handleCheckboxChange}
      style={{ display: "flex", justifyContent: "right", margin: "5px 2px" }}
    >
      Change Mode
    </Checkbox>
  );
}

export default Check;
