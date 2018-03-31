const request = require("request");
var getGeoLocationForAddress = (encodedAddress,callback) => {

    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json:true
    },(error,response,body)=>{
        if(error){
            callback('Technical error');
        }else if(body.status!=="OK"){
            callback('Unable to find location');
        }
        else if(body.status==="OK"){ 
            callback(undefined,{
                Address:body.results[0].formatted_address,
                Latitude:body.results[0].geometry.location.lat,
                Longitude:body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports={
    getGeoLocationForAddress
}