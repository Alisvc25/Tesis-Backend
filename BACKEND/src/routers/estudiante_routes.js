import {Router} from 'express'
import { loginEstudiante, listarCalificaciones } from '../controllers/estudiantes_controller.js'
import { verificarTokenJWT } from '../middlewares/JWT.js'

const router = Router()

router.post("/login", loginEstudiante);

router.get("/calificaciones/:id", verificarTokenJWT, listarCalificaciones);

export default router