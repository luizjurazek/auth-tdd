const request = require('supertest');
const { User } = require('../../src/app/models');

const app = require('../../src/app');
const truncate = require('../utils/truncate')

describe('Authentication', () =>{
    beforeEach(async () => {
        await truncate();
    });

    it('should authenticate with valid credentials', async () => {
        const user = await User.create({ 
            name: 'Luiz', 
            email: 'luizjurazek@gmail.com', 
            password_hash: '1243432'
        });

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '12234'
            });

        expect(response.status).toBe(200)
    });
});
