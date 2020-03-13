import { PythonShell } from 'python-shell';
import Simulation from '../models/Simulation';

const { resolve } = require('path');

const pythonPath = resolve(__dirname, '..', '..', 'python', 'd_alembert.py');

class PythonController {
  async store(req, res) {
    const options = {
      args: [
        req.query.funds, // starting funds
        req.query.size, // (initial) wager size
        req.query.count, // wager count — number of wagers per sim
        req.query.sims, // number of simulations
      ],
    };
    PythonShell.run(pythonPath, options, function(err, data) {
      if (err) throw err;
      console.log('@', data);
      res.send(data.toString());
    });
  }
}

export default new PythonController();
