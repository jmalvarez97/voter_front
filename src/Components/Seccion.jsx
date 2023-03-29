import "../styles/Seccion.css";


export function Seccion({color,nombre, img, float, isBlack}) {
    return (
        <div id="section"
        style={{"backgroundColor": `rgb(${color})`, "float":float}}
        >
            <div className="escudo">
                <img src={img} alt="" width={"25%"}></img>
                <div className="nombre"
                     style={isBlack ? {"color": "white"} : {"color":"black"}}>
                    {nombre}
                </div>
            </div>
      </div>
    )
}