const express = require('express');
const Airdata = require('../models/Airdata');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newEntry = new Airdata(req.body);
    await newEntry.save();
    res.status(201).send('Airdata entry added successfully!');
  } catch (error) {
    res.status(400).send('Error adding airdata entry: ' + error.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await Airdata.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send('Error retrieving airdata: ' + error.message);
  }
});

module.exports = router;
