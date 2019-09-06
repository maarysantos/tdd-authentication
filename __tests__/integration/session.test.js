const request = require('supertest');

const truncate = require ('../utils/truncate');
const app = require('../../src/app');
const { User } = require ('../../src/app/models');

describe ('Authentication', () => {
  beforeEach(async () => await truncate())
    it('shold authenticate with valid credentials', async() =>{
      const user = await User.create({
        name: 'Marilaine', 
        email: 'maary.santos1@gmail.com', 
        password_hash: '123'
      });
      
      const response = await request(app)
      .post('/sessions')
      .send({
        email :user.email,
        password: 123456
      })

      expect(response.status).toBe(200);
      
    });
});