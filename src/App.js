import "./styles/App.css";
import clubes from "./clubes/data.json";
import { Seccion } from "./Components/Seccion";
import { Banner } from "./Components/Banner";
import { PopUpHincha } from "./Components/PopUpHincha";
import { addVote } from "./utils/querys";
import { randomClubsSelected, isDarkColor } from "./utils/utils";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

// Conjunto de colores oscuros, hardcodeados
const DARK_COLORS = [
  [4, 4, 4],
  [5, 5, 5],
  [4, 28, 106],
  [4, 44, 84],
  [12, 28, 84],
  [75, 43, 12],
  [4, 36, 117],
  [4, 32, 15],
  [6, 36, 21],
];

let randomClubs, img1, img2;
function App() {
  const [rcs, setRcs] = useState(false);
  const [teamSelected, setTeamSelected] = useState("");
  if (!rcs) {
    randomClubs = randomClubsSelected(clubes);
    img1 = require(`./clubes/${randomClubs[0].club}`);
    img2 = require(`./clubes/${randomClubs[1].club}`);
    setRcs(true);
  }
  return (
    <div className="App">
      <PopUpHincha setTeamSelected={setTeamSelected} />
      <Banner />
      <div
        className="firstTeam"
        onClick={() => {
          if (teamSelected) {
            addVote(
              {
                firstTeam: randomClubs[0].nombre,
                lastTeam: randomClubs[1].nombre,
                winner: randomClubs[0].nombre,
                fanOf: teamSelected.value,
              },
              setRcs
            );
          } else {
            alert("Selecciona de que club sos :C");
            window.location.reload();
          }
        }}
      >
        <Seccion
          color={randomClubs[0].color}
          nombre={randomClubs[0].nombre}
          img={img1}
          float={"left"}
          isBlack={isDarkColor(DARK_COLORS, randomClubs[0].color)}
        />
      </div>

      <div
        className="secondTeam"
        onClick={() => {
          if (teamSelected) {
            addVote(
              {
                firstTeam: randomClubs[0].nombre,
                lastTeam: randomClubs[1].nombre,
                winner: randomClubs[1].nombre,
                fanOf: teamSelected.value,
              },
              setRcs
            );
          } else {
            alert("Selecciona de que club sos :C");
            window.location.reload();
          }
        }}
      >
        <Seccion
          color={randomClubs[1].color}
          nombre={randomClubs[1].nombre}
          img={img2}
          float={"right"}
          isBlack={isDarkColor(DARK_COLORS, randomClubs[1].color)}
        />
      </div>
    </div>
  );
}

export default App;
