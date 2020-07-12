const express = require('express');
const fetch = require("node-fetch");
const router = express.Router();


router.get('/', (req, res) => {
    const data = {
        test: 'login sehifesi'
    }
    res.render('pages/javascript_login', data);
});



router.post('/', async (req, res) => {
    console.log('---');
});




module.exports = router;