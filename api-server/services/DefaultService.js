/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* 
*
* createCustomerRequest CreateCustomerRequest  (optional)
* returns create_customer_200_response
* */
const createCustomer = ({ createCustomerRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createCustomerRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createCustomer,
};
