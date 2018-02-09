const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.resolve(__dirname, '../build')));


app.get('/dictionary', (req, res) => {
    let param = req.query.inputWord
    let options = {
        url: 'https://od-api.oxforddictionaries.com/api/v1/entries/en/' + param ,
        headers: {
            'app_id': '32c2be1e', 
            'app_key': '4c44c4127979ee5c9a06f51a58339fe1'
        }
      };
    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            res.status(200).send('ok')
          }
          else {
              res.status(404).send('error')
          }
      })
    
})


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + './../build/index.html'));
// });




app.listen(3001);
console.log('Listening on port 3001');