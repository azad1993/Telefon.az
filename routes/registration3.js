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
    console.log('---', req.body);
    const { phone ,password, fullname, gender} = req.body;
    const url = 'http://127.0.0.1:8000/api/v1/users/register/';
    const settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone ,password, fullname, gender }),
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
            res.render('pages/index', data);


        } else {
            console.log('alinmadi', adsResponse.detail);
            data = {
                message: adsResponse.detail
            }
            res.render('pages/registration3', data);
        }
        
    } catch (error) {
        throw error;
    }

});





module.exports = router;