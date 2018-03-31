const request = require("request");
var getGeoLocationForAddress = (encodedAddress) => {
    return new Promise((resolve,reject)=>{
        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json:true
        },(error,response,body)=>{
            if(error){
                reject('Technical error');
            }else if(body.status!=="OK"){
                reject('Unable to find location');
            }
            else if(body.status==="OK"){ 
                resolve({
                    Address:body.results[0].formatted_address,
                    Latitude:body.results[0].geometry.location.lat,
                    Longitude:body.results[0].geometry.location.lng
                });
            }
        });
    });   
};

module.exports={
    getGeoLocationForAddress
}