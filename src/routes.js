import { Router } from 'express';

import PythonController from './app/controllers/PythonController';

const routes = new Router();

routes.post('/d_lambert', PythonController.store);

export default routes;
