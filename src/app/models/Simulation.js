import Sequelize, { Model } from 'sequelize';

class Simulation extends Model {
  static init(sequelize) {
    super.init(
      {
        totalInvested: Sequelize.FLOAT,
        totalReturn: Sequelize.FLOAT,
        roi: Sequelize.FLOAT,
        bustRate: Sequelize.FLOAT,
        profitRate: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Simulation;
