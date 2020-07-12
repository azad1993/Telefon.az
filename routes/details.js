const express = require('express');
const fetch = require("node-fetch");
const router = express.Router();


router.get('/', (req, res) => {
    const data = {
        test: 'details sehifesi'
    }
    res.render('pages/details', data);
});



router.post('/', async (req, res) => {
    console.log('---');
});




module.exports = router;