const express = require('express');
const { OpenApiValidator } = require('express-openapi-validator');
const bodyParser = require('body-parser');
const path = require('path');
const swaggerUi = require('swagger-ui-express');

const app = express();
const apiSpecPath = path.join(__dirname, 'api', 'openapi.json'); // Adjust the path

app.use(bodyParser.json());

// Serve OpenAPI documentation
const swaggerDocument = require(apiSpecPath);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Install OpenAPI Validator
new OpenApiValidator({
  apiSpec: './api/openapi.yaml',
  validateRequests: true, // (default)
  validateResponses: true, // false by default
}).install(app);

// Import your controllers
const customerController = require('./controllers/customerController');

// Define your routes
app.post('/customers/create', customerController.createCustomer);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
