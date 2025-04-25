import { Router } from 'express';
import { TaskController } from '../controllers/task.controller';


const router = Router();
const controller = new TaskController();

router.get('/tasks', controller.getAll);

router.get('/tasks/:id', controller.getById);

router.post('/tasks', controller.create);

router.put('/tasks/:id', controller.update);

router.delete('/tasks/:id', controller.delete);

router.delete('/tasks/:id', controller.delete);

router.post('/tasks/complete/:id', controller.complete);

router.delete('/tasks', controller.deleteAll);

export default router;