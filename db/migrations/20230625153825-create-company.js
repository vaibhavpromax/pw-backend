"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable("Companies", {
      company_id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      stipend_min: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      stipend_max: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number_of_positions: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      total_applicants: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      duration: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      experience: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      timing: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      expiry_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      date_posted: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      skills: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
      },
      job_type: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      company_status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      position: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      company_logo: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      about_us: {
        allowNull: false,
        type: Sequelize.TEXT("long"),
      },
      requie: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      respo: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("Companies");
  },
};
