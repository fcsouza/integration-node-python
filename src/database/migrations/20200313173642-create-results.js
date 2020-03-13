module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('results', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      totalInvested: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      totalReturn: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      roi: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      bustRate: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      profitRate: {
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
