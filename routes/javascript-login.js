const express = require('express');
const fetch = require("node-fetch");
const router = express.Router();


router.get('/', (req, res) => {
    const data = {
        test: 'login sehifesi'
    }
    res.render('pages/javascript-login', data);
});



router.post('/', async (req, res) => {
    console.log('---', req.body);
    const { number, password } = req.body;
    const url = 'http://127.0.0.1:8000/api/v1/users/login/';
    const settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number,password  }),
    }
    try {
        const adsPromise = await fetch(url, settings);
        const adsResponse = await adsPromise.json();
        console.log('---------', adsResponse.status);
        if (adsResponse.status) {
            console.log('success', adsResponse.detail);
            data = {
                message: adsResponse.detail
            }
            res.render('pages/login', data);


        } else {
            console.log('alinmdai', adsResponse.detail);
            data = {
                message: adsResponse.detail
            }
            res.render('pages/index', data);
        }
    } catch (error) {
        throw error;
    }

});




module.exports = router;