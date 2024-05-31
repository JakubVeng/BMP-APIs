exports.createCustomer = (req, res) => {
    const customer = req.body;
    // Add logic to process and save the customer
    res.status(200).json({ message: 'Customer created successfully' });
  };
  