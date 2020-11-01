const express = require('express');
const router = express.Router();

// @route       GET api/contacts
// @desc        Get all users contacts
// @access      Private
router.get('/', (req, res) => {
    res.send('Get all contacts');
});

// @route       PUT api/contacts
// @desc        Add new contack
// @access      Private
router.get('/', (req, res) => {
    res.send('Login user');
});


module.exports = router;