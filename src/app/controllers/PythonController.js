import { PythonShell } from 'python-shell';
// import Result from '../models/Result';

const { resolve } = require('path');

const pythonPath = resolve(__dirname, '..', '..', 'python', 'd_alembert.py');

class PythonController {
  async store(req, res) {
    const options = {
      args: [
        req.query.funds, // Fundos Inicial
        req.query.size, // Tamanho da Aposta
        req.query.count, // Número de Apostas por Simulação
        req.query.sims, // Número Por Simulações
      ],
    };
    PythonShell.run(pythonPath, options, async (err, data) => {
      if (err) throw err;
      // const body = JSON.parse(data);
      // const simulation = await Result.create({ ...body });
      res.json(JSON.parse(data));
    });
  }
}

export default new PythonController();
