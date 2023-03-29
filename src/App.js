import "./App.css";
import clubes from "./clubes/data.json";
import { Seccion } from "./Seccion";
import { Banner } from "./Banner";
import {PopUpHincha} from "./PopUpHincha"
import { addVote } from "./utils/querys";
import {randomNumberInRange, isDarkColor} from "./utils/utils"
import 'bootstrap/dist/css/bootstrap.min.css';
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

const randomClubs = clubes.reduce(() => {
  let rand1 = randomNumberInRange(1, clubes.length),
    rand2;
  do {
    rand2 = randomNumberInRange(1, clubes.length);
  } while (rand1 === rand2);

  return [clubes[rand1], clubes[rand2]];
});

const img1 = require(`./clubes/${randomClubs[0].club}`);
const img2 = require(`./clubes/${randomClubs[1].club}`);


function App() {

  const [teamSelected, setTeamSelected] = useState("");
  return (
    <div className="App">
      <PopUpHincha
        setTeamSelected={setTeamSelected}
      />
      <Banner/>
      <div
        className="firstTeam"
        onClick={() => {
          if(teamSelected){
            addVote({
              firstTeam: randomClubs[0].nombre,
              lastTeam: randomClubs[1].nombre,
              winner: randomClubs[0].nombre,
              fanOf: teamSelected.value
            });
          }
          else{
            alert("Selecciona de que club sos :C")
            window.location.reload()
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
          if(teamSelected){
            addVote({
              firstTeam: randomClubs[0].nombre,
              lastTeam: randomClubs[1].nombre,
              winner: randomClubs[1].nombre,
              fanOf: teamSelected.value
            });
          }
          else{
            alert("Selecciona de que club sos :C")
            window.location.reload()
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
