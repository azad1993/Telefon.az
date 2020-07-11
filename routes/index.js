const express = require('express');
const fetch = require("node-fetch");
const router = express.Router();

var adss;
const adsFunc = async () => {
    const url = 'http://127.0.0.1:8000/';
    try {
        const adsPromise = await fetch(url);
        const adsResponse = await adsPromise.json();
        adss = adsResponse.all_ads.results;

    } catch (error) {
        throw error;
    }
}

adsFunc();


router.get('/', (req, res) => {


    const data = {
        ads: JSON.stringify(adss),
        test: "salam"
    }

    res.render('pages/index', data);
});


router.post('/', async (req, res) => {
    console.log('---');
});


module.exports = router;