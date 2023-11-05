import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      className={`flex flex-col absolute mt-[62px] no right-0 ${isMenuOpen ? "min-w-[calc(100%-16.666667%)]" : "w-[100%]"}`}
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
