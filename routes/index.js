const express = require('express');
const fetch = require("node-fetch");
const router = express.Router();

// //var adss;
// //const adsFunc = async () => {
//  //   const url = 'http://127.0.0.1:8000/';
//     try {
//         const adsPromise = await fetch(url);
//         const adsResponse = await adsPromise.json();
//         adss = adsResponse.all_ads.results;

//     } catch (error) {
//         throw error;
//     }
// }

//adsFunc();


router.get('/', (req, res) => {


    const data = {
      //  ads: JSON.stringify(adss),
        test: "salam"
    }

    res.render('pages/index', data);
});

router.post('/', async (req, res) => {
    console.log('---', req.body);
    const { phone } = req.body;
    const url = 'http://127.0.0.1:8000/api/v1/';
    const settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
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