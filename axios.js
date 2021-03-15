const express = require('express');
const axios = require('axios');
const ejs = require("ejs");
const path = require("path");

var app = express();

app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {

//   res.render('index');
// });


app.get('/', (req, res) => {

  axios.get('http://localhost:3333/v3/sms-template/fetchall',{
    headers: {
      Authorization: 'Bearer ' +  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYxNDg1NjI2OCwiZXhwIjoxNjE0OTQyNjY4fQ.8jDpb5XVOH9mShRSstfzRs3mc9LhCyjXbbJPrhp_j5Y'
    }
   })
    .then((response) => {
       //res.render(response.data.result);
     res.render('index', { str: response.data.result });
    })
    .catch(console.error);
});



app.get('/user', (req, res) => {

  axios.get('http://localhost:3333/v3/users/fetchall',{
    headers: {
      Authorization: 'Bearer ' +  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYxNDg1NjI2OCwiZXhwIjoxNjE0OTQyNjY4fQ.8jDpb5XVOH9mShRSstfzRs3mc9LhCyjXbbJPrhp_j5Y'
    }
   })
    .then((response) => {
     //  res.render(response.data.result);
     res.render('user', { str: response.data.result });
    })
    .catch(console.error);
});




app.get('/user_subscription', (req, res) => {

  axios.get('http://localhost:3333/v3/usersubscription/fetchall',{
    headers: {
      Authorization: 'Bearer ' +  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYxNDg1NjI2OCwiZXhwIjoxNjE0OTQyNjY4fQ.8jDpb5XVOH9mShRSstfzRs3mc9LhCyjXbbJPrhp_j5Y'
    }
   })
    .then((response) => {
     //  res.render(response.data.result);
     res.render('user_subscription', { str: response.data.result });
    })
    .catch(console.error);
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});