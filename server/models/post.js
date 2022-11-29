module.exports = function (sequelize, DataTypes) {
  require("dotenv").config();
  let post = sequelize.define(
    "post",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete: "cascade",
      },
      employer_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      tech: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      detail: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      underscored: true,
      tableName: "post",
    }
  );
  post.associate = function (models) {};

  return post;
};
