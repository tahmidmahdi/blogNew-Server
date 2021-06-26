// Require express
const express = require('express');

// Initiate express router
const router = express.Router();

/**
 * @method - GET
 * @param - /users/*
 * @description - Show all users
 */
router.get('/', (req, res) => {
    res.json({ message: "Show all users" });
});

module.exports = router;
