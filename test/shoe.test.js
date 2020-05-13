const request = require('supertest');
const shoeSchema = require('../models/shoe.model');
const setupTestDB = require('../utils/setupTestDB');
const { shoeOne, shoeTwo, insertShoes } = require('./fixtures/shoe.fixture');
const app = require('../server');

setupTestDB();

describe('shoe routes', () => {
    describe('POST /', () => {
        let newShoe;

        beforeEach(() => {
            newShoe = {
                brand: "test",
                colorVariant: [{
                    color: "blue",
                    image: { binData: 'test' }
                }],
                laceImg: { binData: 'test' }
            }

        })

        test('should return 201 and successfully create new shoe if data is ok', async () => {
            const res = await request(app)
                .post('/')
                .send(newShoe)
                .expect(201);

            const dbShoe = await shoeSchema.findById(res.body.id);
            expect(dbShoe).toBeDefined();
        });


    })
    // describe('GET /', () => {

    //     test('should return all the shoes ', async () => {
    //         const res = await request(app)
    //             .get('/')
    //             .expect(201);

    //         const dbShoe = await shoeSchema.findById(res.body.id);
    //         expect(dbShoe).toBeDefined();
    //     });


    // })
})
