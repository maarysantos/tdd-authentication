const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes)=>{
    //Definindo nome do Model
    const User = sequelize.define('User',{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
    }, {
        hooks : {
            beforeSave: async user => {
                if (user.password)
                   user.password_hash = await bcrypt.hash(user.password, 8)
            }
        }
    });
    
    return User;
}