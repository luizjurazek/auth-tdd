const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: 'created_at' // Especifica o nome da coluna no banco de dados
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: 'updated_at' // Especifica o nome da coluna no banco de dados
        }
    },{
        updatedAt: 'updated_at',
        hooks: {
            beforeSave: async user => {
                if(user.password){
                    user.password_hash = await bcrypt.hash(user.password, 8)
                }
            }
        }
    });

    return User
};