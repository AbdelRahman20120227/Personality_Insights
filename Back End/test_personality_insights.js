var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var PersonalityInsights = new PersonalityInsightsV3(
    {
        url: 'https://gateway-wdc.watsonplatform.net/personality-insights/api',
        iam_apikey: 'movoO0RALv_nClFy598ipfNYBO9DWA1R9nojmexJA6No',
        version_date: '2017-10-13'
    }
);
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(express.static("../Front End/"));
app.use(bodyParser.urlencoded({extended:true}));

var analysis;

app.get('/getResult', function(req,res){
	res.send(analysis);
});

app.post('/test', function(req, res){

    var profileParams = {
    	content: req.body.data,
    	content_type: "text/plain",
    	raw_scores: true
    }
    console.log(profileParams.content);
    PersonalityInsights.profile(profileParams, function(err, profile){
    	if(err){
    		console.log(err);
    		res.send({"status": "error"});
    	}
    	else{
    		analysis = JSON.stringify(profile, null, 2);
    		res.send({"status": "success"});
    	}
    });
});

app.listen(3000);
