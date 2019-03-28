var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var PersonalityInsights = new PersonalityInsightsV3(
    {
        url: 'https://gateway-wdc.watsonplatform.net/personality-insights/api',
        iam_apikey: 'movoO0RALv_nClFy598ipfNYBO9DWA1R9nojmexJA6No',
        version_date: '2017-10-13'
    }
);
var express = require('express');
var app = express();
app.get('/test', function(req, res){

    while(1);
    res.send("Hello World");

});
app.listen(3000);
