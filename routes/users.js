var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

   /* var wifi = require('node-wifi');

// Initialize wifi module
// Absolutely necessary even to set interface to null
    wifi.init({
        iface : null // network interface, choose a random wifi interface if set to null
    });

// Scan networks
    wifi.scan(function(err, networks) {
        if (err) {
            console.log(err);
        } else {
            console.log(networks);
            res.send(networks);

          /*
           networks = [
           {
           ssid: '...',
           mac: '...',
           frequency: <number>, // in MHz
           signal_level: <number>, // in dB
           security: '...' // unfortunately the format still depends of the OS
           },
           ...
           ];

        }
    });
  //res.send('respond with a resource');*/


    var piWifi= require('pi-wifi');

    piWifi.scan(function(err,result){

        res.send(result);
    })
});
router.post('/', function(req, res, next) {

    var piWifi= require('pi-wifi');

    piWifi.connect( "Belong47GK43RD",  "GT7NMPMYP3",function(err,result){
        console.log("In connect")
        console.log("error :" +err)
        console.log(result)
        if(err) res.send(err)
        else
        res.send(result);
    })

    // var wifi = require('node-wifi');


  /*  wifi.init({
        iface : null// network interface, choose a random wifi interface if set to null
    });

// Scan networks
    wifi.connect({ ssid : "Belong47GK43RD", password : "GT7NMPMYP3"}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log('Connected');
        wifi.getCurrentConnections(function(err, currentConnections) {
            if (err) {
                console.log(err);
            }
            console.log(currentConnections);
            res.send(currentConnections)

           // you may have several connections
           [
           {
           iface: '...', // network interface used for the connection, not available on macOS
           ssid: '...',
           mac: '...',
           frequency: <number>, // in MHz
           signal_level: <number>, // in dB
           security: '...' // not available on linux
           }
           ]

        });
    });*/

});

module.exports = router;
