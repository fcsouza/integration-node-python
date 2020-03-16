module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('results', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      total_invested: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      total_return: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      roi: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      bust_rate: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      profit_rate: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('results');
  },
};
