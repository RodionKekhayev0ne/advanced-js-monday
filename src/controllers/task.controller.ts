import { Request, Response } from 'express';
import { TaskService } from '../services/task.service';

const service = new TaskService();

export class TaskController {
    getAll(req: Request, res: Response) {
        res.json(service.getAll());
    }

    getById(req: Request, res: Response) {
        const task = service.getById(req.params.id);
        if (!task) return res.status(404).json({message: 'Task not found'});
        res.json(task);
    }

    create(req: Request, res: Response) {
        const {description} = req.body;
        if (!description || description.trim() === '') {
            return res.status(400).json({message: 'Description is required'});
        }
        const task = service.create(description);
        res.status(201).json(task);
    }

    update(req: Request, res: Response) {
        const {description, completed} = req.body;
        const task = service.update(req.params.id, {description, completed});
        if (!task) return res.status(404).json({message: 'Task not found'});
        res.json(task);
    }

    complete(req: Request, res: Response) {

        const task = service.update(req.params.id, {completed: true});
        if (!task) return res.status(404).json({message: 'Task not found'});
        res.json(task);
    }


    delete(req: Request, res: Response) {
        const success = service.delete(req.params.id);
        if (!success) return res.status(404).json({message: 'Task not found'});
        res.status(204).send();
    }

    deleteAll(req: Request, res: Response) {
        service.clearAll();
        res.status(204).send(); // 204 No Content — успешно, но без тела ответа
    }

}