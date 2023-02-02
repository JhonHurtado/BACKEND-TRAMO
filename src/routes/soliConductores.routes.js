import { Router } from "express";

import { soliPendiente, soliPendienteUnica, rechazarSoli, aceptarSoliConductor, soliRechazada } from "../controllers/soliConductores.controller.js"

const router = Router();

//==========================================================
// SOLICITUDES PENDIENTES
//==========================================================

router.get('/solicitudesPendiente', soliPendiente);

router.get('/solicitudesPendienteUnica/:id', soliPendienteUnica);

router.put('/rechazarSolicitud/:id', rechazarSoli);

router.put('/aceptarSoli/:id', aceptarSoliConductor);

//==========================================================
// SOLICITUDES RECHAZADAS
//==========================================================

router.get('/solicitudesRechazadas', soliRechazada)

export default router