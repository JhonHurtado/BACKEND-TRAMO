import { Router } from "express";
import { conductorHabilitado, conductorInhabilitado, inhabilitarConductor, habilitarConductor } from '../controllers/datosConductores.controller.js'

const router = Router()

// CONDUCTORES HABILITADOS
router.get('/datosConductoresHabilitados', conductorHabilitado);

// INHABILITAR CONDUCTOR
router.put('/datosInhabilitarConductor/:id', inhabilitarConductor)

// CONDUCTORES INHABILITADOS
router.get('/datosConductoresInhabilitados', conductorInhabilitado);

// HABALITAR CONDUCTOR

router.put('/datosHabilitarConductor/:id', habilitarConductor)

export default router