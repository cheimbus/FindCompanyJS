module.exports = function(sequelize, DataTypes){
    require("dotenv").config();
    let applicant = sequelize.define("applicant", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            onDelete : "cascade"
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            onDelete : "cascade",
            references: {
                model: "user",
                key: "id"
              }
        },
        employer_id: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        isApply: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    }, {
        underscored: true,
        tableName: "applicant"
    });
    applicant.associate = function (models) {
        applicant.belongsTo(models.user, { foreignKey: "user_id"})
    }
    return applicant;
}