import connection from '../db.js'


// CONDUCTORES HABILITADOS
export const conductorHabilitado = (req, res)=>{
    try {
        connection.query(`SELECT idVehiculo, idConductor, placaVehiculo, nombreCON, apellidoCON, nroTelefonoCON, nroDocumentoCON, correoElectronicoCON, DireccionResidenciaCON, IngresoCON, habilitadoCON
        FROM Tbl_Vehiculo
        JOIN Tbl_Conductores ON Tbl_Vehiculo.idVehiculo = Tbl_Conductores.idConductor
        WHERE  IngresoCON = 1 AND habilitadoCON = 1 AND estadoCON = 0 AND disponibilidadCON = 0 AND motivoRechazoCON IS NULL;`, async(error, results)=>{
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

// INHABILITAR CONDUCTOR
export const inhabilitarConductor = async(req, res)=>{
    const inhabilitarCon = [{
        "habilitadoCON": 0,
        "motivoRechazoCON": req.body.motivoRechazoCON
    }]

    try {
        connection.query(`UPDATE Tbl_Conductores SET ? WHERE idConductor=?`, [ inhabilitarCon[0], req.params.id], async(error, results)=>{
            if(error){
                console.log(error)
            }else{
                res.json(results);
            }
        });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}


// CONDUCTORES INHABILITADOS
export const conductorInhabilitado = (req, res)=>{
    try {
        connection.query(`SELECT idVehiculo, idConductor, placaVehiculo, nombreCON, apellidoCON, nroTelefonoCON, nroDocumentoCON, correoElectronicoCON, DireccionResidenciaCON, IngresoCON, habilitadoCON, motivoRechazoCON
        FROM Tbl_Vehiculo
        JOIN Tbl_Conductores ON Tbl_Vehiculo.idVehiculo = Tbl_Conductores.idConductor
        WHERE  IngresoCON = 1 AND habilitadoCON = 0 AND estadoCON = 0 AND disponibilidadCON = 0 AND motivoRechazoCON IS NOT NULL;`, async(error, results)=>{
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

// HABALITAR CONDUCTOR
export const habilitarConductor = async(req, res)=>{
    const habilitarCon = [{
        "habilitadoCON": 1,
        "motivoRechazoCON": null
    }]
    try {
        connection.query(`UPDATE Tbl_Conductores SET ? WHERE idConductor=?`, [ habilitarCon[0], req.params.id], async(error, results)=>{
            if(error){
                console.log(error)
            }else{
                res.json(results);
            }
        });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}