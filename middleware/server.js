const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://malcolmpaul:AyKXPXc1fx7KliQo@digistrat.nqngpt9.mongodb.net/';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });


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
  age: Number,
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
  title: String,
  startDate: Date,
  endDate: Date,
  strategyId: Number,
  visionText: String,
  currentState: [{
    currentItemId: Number,
    currentItemName: String,
    currentItemDescription: String,
    currentItemState: String
  }],
  futureState: [{
    futureItemId: Number,
    futureItemName: String,
    futureItemDescription: String,
    futureItemGoal: String
  }],
  initiatives: [{
    initiativeId: String,
    initiativeName: String,
    initiativeDescription: String,
    initiativePurpose: String
  }]
});

const currentStateSchema = new mongoose.Schema({
  strategyId: Number,
  currentItemId: Number,
  currentItemName: String,
  currentItemDescription: String,
  currentItemState: String
});

const futureStateSchema = new mongoose.Schema({
  strategyId: Number,
  futureItemId: Number,
  futureItemName: String,
  futureItemDescription: String,
  futureItemState: String
});

const initiativesSchema = new mongoose.Schema({
  strategyId: Number,
  initiativeId: Number,
  initiativeName: String,
  initiatveDescription: String,
  initiativePurpose: String
});

const caseSchema = new mongoose.Schema({
  customerId: Number,
  caseId: Number,
  caseName: String,
  caseDescription: String,
  caseCreateDate: String
});

const metaIds = new mongoose.Schema({
  nextItemId: Number,
  nextStrategyId: Number
})


const Customer = mongoose.model('Customer', customerSchema);
const User = mongoose.model('Users', userSchema);
const Plan = mongoose.model('Plan', planSchema);
const Strategy = mongoose.model('Strategy', strategySchema);
const CurrentState = mongoose.model('CurrentState', currentStateSchema);
const FutureState = mongoose.model('FutureState', futureStateSchema);
const Initiatives = mongoose.model('Initiatives', initiativesSchema);
const Case = mongoose.model('Case', caseSchema);
const MetaId = mongoose.model('MetaId', metaIds);

function hello() { console.log("hello") };

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
    hello();
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

// GET route to retrieve one users
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

// GET route to retrieve all users for reporting
app.get('/report/users', async (req, res) => {
  try {
    console.log("Getting Users for Reporting", req.query.customerId);
    const query = {};
    query.customerId = Number(req.query.customerId);

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

app.post('/api/currentstate', async (req, res) => {
  console.log('Post requested for current state')
  const currentstate = new CurrentState(req.body);
  try {
    await currentstate.save();
    res.status(201).send(currentstate);
  } catch (err) {
    res.status(400).send(err);
    console.log(err)
  }
});

app.get('/api/currentstate', async (req, res) => {
  try {
    console.log("Getting Current State for ", req.query.strategyId);
    const query = {};
    query.strategyId = Number(req.query.strategyId);
    const currentstate = await CurrentState.find(query);
    res.status(200).send(currentstate);
  } catch (err) {
    console.error('Error retrieving customer data:', err);
    res.status(500).send(err);
  }
});

app.get('/api/futurestate', async (req, res) => {
  try {
    console.log("Getting Future State for ", req.query.strategyId);
    const query = {};
    query.strategyId = Number(req.query.strategyId);
    const futurestate = await FutureState.find(query);
    res.status(200).send(futurestate);
  } catch (err) {
    console.error('Error retrieving customer data:', err);
    res.status(500).send(err);
  }
});

app.post('/api/futurestate', async (req, res) => {
  console.log('Post requested for future state')
  const futurestate = new FutureState(req.body);
  try {
    await futurestate.save();
    res.status(201).send(futurestate);
  } catch (err) {
    res.status(400).send(err);
    console.log(err)
  }
});

app.get('/api/initiative', async (req, res) => {
  try {
    console.log("Getting Initiative for ", req.query.strategyId);
    const query = {};
    query.strategyId = Number(req.query.strategyId);
    const initiative = await Initiatives.find(query);
    res.status(200).send(initiative);
  } catch (err) {
    console.error('Error retrieving customer data:', err);
    res.status(500).send(err);
  }
});

app.post('/api/initiative', async (req, res) => {
  console.log('Post requested for future state')
  const initiative = new Initiatives(req.body);
  try {
    await initiative.save();
    res.status(201).send(initiative);
  } catch (err) {
    res.status(400).send(err);
    console.log(err)
  }
});

// GET route to retrieve user data grouped by customers
app.get('/report/users-by-customer', async (req, res) => {
  try {
    const customerId = req.query.customerId;
    console.log('CustomerId: ',customerId)
    const userData = await User.aggregate([
      {
        "$group": {
          "_id": "$customerId",
          "count": { "$sum": 1 }
        }
      },
      {
        "$lookup": {
          "from": "customers",
          "localField": "_id",
          "foreignField": "customerId",
          "as": "customer_info"
        }
      },
      {
        "$unwind": "$customer_info"
      },
      {
        "$project": {
          "_id": 0,
          "customerName": "$customer_info.name",
          "userCount": "$count"
        }
      }
    ]);
    res.status(200).send(userData);
  } catch (err) {
    console.error('Error retrieving user data for graph:', err);
    res.status(500).send(err);
  }
});

app.get('/api/case', async (req, res) => {
  try {
    console.log("Getting Case for ", req.query.customerId);
    const query = {};
    query.customerId = Number(req.query.customerId);
    const cases = await Case.aggregate
      ([
        {
          $match: {
            customerId: query.customerId
          }
        },
        {
          $group: {
            _id: {
              $substr: ["$caseCreateDate", 3, 2]
            },
            count: {
              $sum: 1
            }
          }
        },
        {
          $sort: {
            _id: 1
          }
        }
      ]);

    res.status(200).send(cases);
  } catch (err) {
    console.error('Error retrieving customer data:', err);
    res.status(500).send(err);
  }
});

app.post('/api/case', async (req, res) => {
  console.log('Post requested for case')
  const cases = new Case(req.body);
  try {
    await cases.save();
    res.status(201).send(cases);
  } catch (err) {
    res.status(400).send(err);
    console.log(err)
  }
});

app.get('/api/identifier', async (req, res) => {
  try {
    console.log("Getting next Id for ", req.query.nextItemId);
    const query = {};
    query.nextItemId = Number(req.query.nextItemId);
    const nextId = await MetaId.find(query);
    console.log(query.nextItemId)
    res.status(200).send(nextId);
  } catch (err) {
    console.error('Error retrieving customer data:', err);
    res.status(500).send(err);
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
