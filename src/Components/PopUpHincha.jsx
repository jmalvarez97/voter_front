import Popup from "reactjs-popup";
import {TiTickOutline} from "react-icons/ti"
import "reactjs-popup/dist/index.css";
import clubes from "../clubes/data.json"
import Select from 'react-select'



export const PopUpHincha = ({setTeamSelected}) => {
    
    let options = []
    const getOptions = (clubes) => clubes.forEach((c) => options.push({value:c.nombre , label:c.nombre}))
     
    getOptions(clubes)
    return (
        <Popup modal nested open={true}>
        {(close) => (
            <div>
                <div className="banner" style={{"display":"flex"}}>
                    <h3>Hola! contanos de que club sos y podes votar que club te cae mejor</h3>
                </div>
                <p>El objetivo de esta página es únicamente recolectar datos </p>
                <Select options={options} 
                        onChange={setTeamSelected}
                        closeMenuOnSelect={true}
                        isSearchable={false}
                />
                <TiTickOutline size={"2rem"} style={{"width":"100%", "border": "1px solid"}}
                                onClick={close}
                />
            </div>
        )}
      </Popup>
      )
}