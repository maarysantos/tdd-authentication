const { User } = require('../../src/app/models');

class sessionController{
    async store (req,res){

        const { email, password } = req.body;
        const user = User.findOne ({ where : { email } });

        if(!user){
            return res.status(401).json ({ message: 'Usuário não encontrado'})
        }
        res.status(200).send();

    }
}

module.exports= new sessionController();