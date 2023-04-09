import React, { useContext } from "react";

import { GameContext } from "../../context/GameContex";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";

const Start = () => {
  const { activeUser, setActiveUser, handleStart } = useContext(GameContext);

  return (
    <div className="start">
      <div className="start__header">
        <h2 className="start__title">Let's Play Tic Tac Toe</h2>
        {/* <Xicon />
        <Oicon /> */}
      </div>
      <div className="card shadow-gray">
        <h1 className="text-lg">Pick Your Mark</h1>
        <div className="start__players">
          <span
            className={activeUser === "x" ? "start__players--active" : ""}
            onClick={() => setActiveUser("x")}
          >
            <Xicon color={activeUser === "x" ? "dark" : "light"} />
          </span>
          <span
            className={activeUser === "o" ? "start__players--active" : ""}
            onClick={() => setActiveUser("o")}
          >
            <Oicon color={activeUser === "o" ? "dark" : "light"} />
          </span>
        </div>
      </div>
      <div className="start__btns">
        <button className="btn btn-yellow" onClick={() => handleStart("user")}>
            {" "}
            Player Vs Player
          </button>
        <button className="btn btn-yellow" onClick={() => handleStart("cpu")}>
          Player VS Computer
        </button>
        
      </div>
    </div>
  );
};

export default Start;
