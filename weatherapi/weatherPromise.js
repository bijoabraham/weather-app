
const request = require("request");
getTemparature = (log,lat)=>{

    return new Promise((resolve,reject)=>{
        request({
            url: `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${log},${lat}`,
            json: true
        }, (error, response, body) => {
            //console.log(JSON.stringify(body,undefined,2));
            if (error) {
                reject('Unable to connect to Forecast.io server.');
            } else if (response.statusCode === 400) {
                reject('Unable to fetch weather.');
            } else if (response.statusCode === 200) {
                resolve(body.currently.temperature);
            }
        });

    });    
}
module.exports={
    getTemparature
}