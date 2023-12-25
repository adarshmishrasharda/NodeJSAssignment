const request = require('supertest');
const app = require('../../JSAssignment2/UnitTesting'); // Update the path based on your file structure

describe('API endpoints', () => {
  // Test GET /api/products
  it('GET /api/products should return a list of products', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Array));
  });

  // Test POST /api/products
  it('POST /api/products should create a new product', async () => {
    const newProduct = { id: 4, name: 'Product 5', price: 70 };
    const response = await request(app).post('/api/products').send(newProduct);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(expect.any(Object));
  });
});
