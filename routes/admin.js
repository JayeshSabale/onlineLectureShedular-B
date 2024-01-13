const express = require('express');
const {adminUser, addLecture} = require('../controllers/adminController.js');

const router = express.Router();

router.get('/', adminUser);
router.post('/addLecture', addLecture)

module.exports = router;
