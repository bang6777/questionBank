module.exports = (sequelize, DataTypes) =>{
    const user = sequelize.define("user",{
        Username: {
            type: DataTypes.STRING,
            allowNull:false,
            primaryKey: true
        },
        Password: {
            type: DataTypes.STRING,
            allowNull:false
        }
    });
    return user;
}