"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // define association here
    static associate() {}
  }
  Company.init(
    {
      company_id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      stipend_min: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
        allowNull: false,
        type: Sequelize.JSON,
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
        allowNull: false,
        type: Sequelize.JSON,
        // set(value) {
        //   this.setDataValue("requie", value.split("\n"));
        // },
      },
      respo: {
        allowNull: false,
        type: Sequelize.JSON,
        // set(value) {
        //   this.setDataValue("respo", value.split("\n"));
        // },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
