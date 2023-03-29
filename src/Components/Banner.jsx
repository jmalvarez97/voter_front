import "../styles/Banner.css";
import { CiViewTable } from "react-icons/ci";
import { AiFillCloseCircle } from "react-icons/ai";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import TablaRates from "./TablaRates";
import { getVotes } from "../utils/querys";
import { useState, useEffect } from "react";

export const Banner = () => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    getVotes(setNumber);
  }, []);
  return (
    <div>
      <div className="banner">
        <div>{number === 0 ? "" : `${number} votos!`}</div>
        <div className="title">Elegi el club que mas te guste :)</div>
        <Popup trigger={<CiViewTable size={"2rem"} />} modal nested>
          {(close) => (
            <div style={{ height: "600px", overflow: "auto" }}>
              <button className={"close"} onClick={close}>
                <AiFillCloseCircle />
              </button>
              <TablaRates />
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};
