// Invocamos a la conexion de la DB
import connection from '../db.js';

export const conductoresDisponibles = (req, res)=>{

    try {
        connection.query(`SELECT idConductor, nombreCON, nroTelefonoCON, calificacionCON, habilitadoCON, estadoCON, disponibilidadCON
        FROM Tbl_Conductores
        WHERE IngresoCON = 1 AND habilitadoCON = 1 AND estadoCON = 1 AND disponibilidadCON = 1;`, async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.json(results)
        }
    })
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const conductoresEnServicio = (req, res)=>{

    try {
        connection.query(`SELECT idConductor, nombreCON, nroTelefonoCON, calificacionCON, habilitadoCON, estadoCON, disponibilidadCON
        FROM Tbl_Conductores
        WHERE IngresoCON = 1 AND habilitadoCON = 1 AND estadoCON = 1 AND disponibilidadCON = 0;`, async(error, results)=>{
        if(error){
            console.log(error)
        }else{
            res.json(results)
        }
    })
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

