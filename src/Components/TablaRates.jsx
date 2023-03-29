import { useState, useEffect } from "react";
import { getRates } from "../utils/querys";
import { sorted } from "../utils/utils";
import Table from 'react-bootstrap/Table';



export default function TablaRates() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        getRates(setDatos);
    }, [])

    return (
        <Table striped hover>
            <thead>
                <tr>
                    <th>Club</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                <td>
                    {Object.keys(sorted(datos)).map((k) => <tr style={{"padding":"1rem"}}>{k}</tr>)}
                </td>
                <td>
                    {Object.values(sorted(datos)).map((v) => <tr style={{"padding":"1rem"}}>{(v*100).toFixed(2)}</tr>)}
                </td>
            </tbody>
        </Table>
          );
    }