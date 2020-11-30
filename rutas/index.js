const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index.html', { title: 'firtst website'});
    
   // sres.sendFile(path.join(__dirname +'/Views/index.ejs'));
});

router.get('/contacto.html', (req,res) => {
    res.render('contacto.html', { title: 'Contactanos!'});
    
    //res.sendFile(path.join(__dirname +'/Views/index.ejs'));
});

router.get('/ubicacion', (req,res) => {
    res.render('ubicación.html', { title: 'Contactanos!'});
    
    //res.sendFile(path.join(__dirname +'/Views/index.ejs'));
});

module.exports = router;