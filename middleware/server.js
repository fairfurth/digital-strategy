const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://malcolmpaul:AyKXPXc1fx7KliQo@digistrat.nqngpt9.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const customerSchema = new mongoose.Schema({
  customerId: Number,
  name: String,
  email: String,
  phone: String,
  address: String,
  industryType: String,
  mainContact: Number
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  lastLoggedIn: String,
  customerId: Number,
  userId: Number
});

const planSchema = new mongoose.Schema({
  planId: Number,
  planStartDate: Date,
  planEndDate: Date,
  planDescription: String,
  customerId: Number
});

// strategy schema


const strategySchema = new mongoose.Schema({
  customerId: Number,
  title:  String,
  startDate:  Date,
  endDate:  Date,
  strategyId:  Number,
  currentState: [{
    currentItemId:  Number,
    currentItemName:  String,
    currentItemDescription:  String,
    currentItemState:  String
  }],
  futureState: [{
    futureItemId:  Number,
    futureItemName:  String,
    futureItemDescription:  String,
    futureItemGoal:  String
  }],
  initiatives: [{
    initiativeId:  String,
    initiativeName:  String,
    initiativeDescription:  String,
    initiativePurpose:  String
  }]
})

const Customer = mongoose.model('Customer', customerSchema);
const User = mongoose.model('Users', userSchema);
const Plan = mongoose.model('Plan', planSchema);
const Strategy = mongoose.model('Strategy', strategySchema);

// Routes
app.post('/api/customers', async (req, res) => {
  console.log('Post requested for customer')
  const customer = new Customer(req.body);
  try {
    await customer.save();
    res.status(201).send(customer);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET route to retrieve all customers
app.get('/api/customers', async (req, res) => {
  try {
    console.log("Getting Customers", req.query.customerId);
    const query = {};
    query.customerId = Number(req.query.customerId);
    const customers = await Customer.find(query);
    res.status(200).send(customers);
  } catch (err) {
    console.error('Error retrieving customer data:', err);
    res.status(500).send(err);
  }
});

app.post('/api/users', async (req, res) => {
  console.log('Post requested for users')
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET route to retrieve all users
app.get('/api/users', async (req, res) => {
  try {
    console.log("Getting Users", req.query.customerId, req.query.userId);
    const query = {};
    query.customerId = Number(req.query.customerId);
    query.userId = Number(req.query.userId);
    const users = await User.find(query);
    res.status(200).send(users);
  } catch (err) {
    console.error('Error retrieving customer data:', err);
    res.status(500).send(err);
  }
});

app.post('/api/plans', async (req, res) => {
  console.log('Post requested for plans')
  const plan = new Plan(req.body);
  try {
    await plan.save();
    res.status(201).send(plan);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET route to retrieve all plans
app.get('/api/plans', async (req, res) => {
  try {
    console.log("Getting Plans", req.query.planId);
    const query = {};
    query.planId = Number(req.query.planId);
    const plans = await Plan.find(query);
    res.status(200).send(plans);
  } catch (err) {
    console.error('Error retrieving customer data:', err);
    res.status(500).send(err);
  }
});

app.post('/api/strategy', async (req, res) => {
  console.log('Post requested for strategy')
  const strategy = new Strategy(req.body);
  try {
    await strategy.save();
    res.status(201).send(strategy);
  } catch (err) {
    res.status(400).send(err);
    console.log(err)
  }
});

app.get('/api/strategy', async (req, res) => {
  try {
    console.log("Getting Strategy for ", req.query.strategyId);
    const query = {};
    query.strategyId = Number(req.query.strategyId);
    const strategy = await Strategy.find(query);
    res.status(200).send(strategy);
  } catch (err) {
    console.error('Error retrieving customer data:', err);
    res.status(500).send(err);
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
