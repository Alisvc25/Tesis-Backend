import { Router } from 'express'
import {loginEstudiante, listarCalificaciones, verCalificaciones,
    perfil} from '../controllers/estudiantes_controller.js'
import { verificarTokenJWT } from '../middlewares/JWT.js'

const router = Router()

router.post("/login", loginEstudiante);
router.get("/perfil", verificarTokenJWT, perfil);


router.get("/calificaciones/:id", verificarTokenJWT, listarCalificaciones);
router.get("/calificacion/:id", verificarTokenJWT, verCalificaciones);

export default router