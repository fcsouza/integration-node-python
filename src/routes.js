import { Router } from 'express';

import PythonController from './app/controllers/PythonController';

const routes = new Router();

routes.post('/dlambert', PythonController.store);

export default routes;
