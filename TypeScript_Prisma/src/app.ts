import express from 'express';
import noteRoutes from './routes/note.route';

const app = express();

app.use('/api/notes', noteRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
