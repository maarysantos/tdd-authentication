module.exports = (sequelize, DataTypes)=>{
    //Definindo nome do Model
    const User = sequelize.define('User',{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
    });
    
    return User;
}