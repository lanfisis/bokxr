var express = require("express");
var app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(express.logger());
app.use(express.static(__dirname + '/public'))


app.get('/', function(req, res) {
    res.render('index', { title : 'Bokxr - A Flickr Box' })
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});