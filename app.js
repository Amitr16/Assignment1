var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=AAPL&region=US"',
  headers: { 
    'x-rapidapi-key': 'ca666435e5mshe31babb4e23c614p10c058jsndc5cb266de0b'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
