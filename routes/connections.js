var express = require('express');
var router = express.Router();
var piWifi= require('pi-wifi');

router.get('/scan', function(req, res, next) {
    piWifi.scan(function(err,result){
        res.send(result);
    })
});
router.post('/connect', function(req, res, next) {

    piWifi.connect(req.body.ssid,req.body.passPhrase,function(err,result){
        if (err) res.send(err);
        else res.send("WiFi Enabled ");

    })

});

module.exports = router;
