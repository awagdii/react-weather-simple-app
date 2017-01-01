var axios = require('axios');
const API_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=b1b15e88fa797225412429c1c50c122a1&apikey=9e530ba10dd0627ef2f34e597c28a094';

//9e530ba10dd0627ef2f34e597c28a094

module.exports={
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl =`${API_URL}&q=${encodedLocation}`;
  return  axios.get(requestUrl).then(function(res){
      if (res.data.cod&&res.data.message){
        throw new Error(res.data.message);
      }else {
        return res.data.main.temp;
      }
    },function(res){
      throw new Error(res.data.message);
    });
  }
}
