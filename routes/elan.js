const express = require('express');
const fetch = require("node-fetch");
const router = express.Router();


router.get('/', (req, res) => {
    data = {
        test: 'elan sehifesi'
    }
    res.render('pages/elan', data);
});

router.get('/:nomre', (req, res) => {
    data = {
        test: 'elan sehifesi ' + req.params.nomre,

    }
    res.render('pages/index', data);
});

router.post('/', async (req, res) => {
    console.log('---');
});




module.exports = router;