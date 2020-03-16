import Sequelize, { Model } from 'sequelize';

class Result extends Model {
  static init(sequelize) {
    super.init(
      {
        total_invested: Sequelize.FLOAT,
        total_return: Sequelize.FLOAT,
        roi: Sequelize.FLOAT,
        bust_rate: Sequelize.FLOAT,
        profit_rate: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Result;
