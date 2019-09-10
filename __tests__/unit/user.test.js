const bcrypt = require('bcrypt');

const { User } = require('../../src/app/models');
const  truncate  = require('../utils/truncate');

describe('User', () =>{
  beforeEach(async () => {
    await truncate()
  })

   it('shold encrypt user password', async() =>{
     const user = await User.create({
        name: 'Marilaine', 
        email: 'maary.santos1@gmail.com', 
        password: '123'
    })

        const compareHash = await bcrypt.compare('123', user.password_hash);

        expect(compareHash).toBe(true);


    })

})