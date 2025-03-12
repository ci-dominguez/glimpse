import { Router } from 'express';
import {
  createColorSystem,
  getColorSystemById,
} from '../controllers/color-systems';

const router = Router();

router.post('/', createColorSystem);
router.get('/:id', getColorSystemById);

export default router;
