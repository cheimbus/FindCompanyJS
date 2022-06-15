module.exports = function(sequelize, DataTypes){
    require("dotenv").config();
    let company = sequelize.define("company", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            onDelete : "cascade"
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
    }, {
        underscored: true,
        tableName: "company"
    });
    company.associate = function (models) {
        
        
    }
    return company;
}