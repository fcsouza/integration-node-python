import Sequelize, { Model } from 'sequelize';

class Results extends Model {
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

export default Results;
