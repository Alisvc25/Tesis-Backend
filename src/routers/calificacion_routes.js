import express from "express";
import { crearCalificaciones, actualizarCalificaciones, obtenerCalificaciones, 
    listarCalificaciones, eliminarCalificaciones } from "../controllers/calificaciones_controller.js";

const router = express.Router();

router.post("/crear", crearCalificaciones);

router.put("/actualizar/:id", actualizarCalificaciones);

router.get("/obtener/:id", obtenerCalificaciones);

router.get("/listar", listarCalificaciones);

router.delete("/eliminar/:id", eliminarCalificaciones);

export default router;