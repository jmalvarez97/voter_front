import Popup from "reactjs-popup";
import {AiFillCloseCircle} from "react-icons/ai"
import {TiTickOutline} from "react-icons/ti"
import "reactjs-popup/dist/index.css";
import { useEffect, useState } from "react";
import clubes from "./clubes/data.json"
import Select from 'react-select'



export const PopUpHincha = ({setTeamSelected}) => {
    
    let options = []
    const getOptions = (clubes) => clubes.forEach((c) => options.push({value:c.nombre , label:c.nombre}))
     
    useEffect(() => {
        getOptions(clubes)
    }, [])

    return (
        <Popup modal nested open={true}>
        {(close) => (
            <div>
                <div className="banner" style={{"display":"flex"}}>
                    <h3>Hola! Contanos de que club sos y podes votar que club te cae mejor</h3>
                </div>
                <p>El objetivo de esta pagina es solamente para recolectar datos </p>
                <Select options={options} 
                        onChange={setTeamSelected}
                        closeMenuOnSelect={true}
                />
                <TiTickOutline size={"2rem"} style={{"width":"100%", "border": "1px solid"}}
                                onClick={close}
                />
            </div>
        )}
      </Popup>
      )
}