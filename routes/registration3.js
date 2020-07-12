const express = require('express');
const fetch = require("node-fetch");
const router = express.Router();


router.get('/', (req, res) => {
    const data = {
        test: 'elan sehifesi' 
    }
    res.render('pages/registration3', data);
});


router.post('/', async (req, res) => {
    console.log('---');
});




module.exports = router;