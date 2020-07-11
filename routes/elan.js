const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    data = {
        test: 'elan sehifesi'
    }
    res.render('pages/index', data);
});

router.get('/:nomre', (req, res) => {
    data = {
        test: 'elan sehifesi ' + req.params.nomre,

    }
    res.render('pages/index', data);
});



module.exports = router;