module.exports = function (sequelize, DataTypes) {
  require("dotenv").config();
  let user = sequelize.define(
    "user",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete: "cascade",
      },
    },
    {
      underscored: true,
      tableName: "user",
    }
  );
  user.associate = function (models) {
    user.hasMany(models.applicant, { targetKey: "id", foreignKey: "user_id" });
  };
  return user;
};
