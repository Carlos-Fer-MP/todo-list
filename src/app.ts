import express from 'express';
import { routes } from './routes/route';

const app = express();
const port = 3000;

app.use(express.json())

routes(app);

app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});