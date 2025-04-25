import express from 'express';
import taskRoutes from './routes/task.routes';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
    res.send('Task Management API is running...');
});

app.use(express.json());
app.use('/', taskRoutes);

export default app;
