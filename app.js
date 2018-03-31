const yargs = require("yargs");
const geoLocation = require("./googlegeo/geolocation");
const geoLocationPromise = require("./googlegeo/geolocationPromise");

const weather = require("./weatherapi/weather");
const weatherPromise = require("./weatherapi/weatherPromise");

const args = yargs
    .options({
        a:{
            demand:true,
            alias:'address',
            description:'Address for weather details',
            string:true
        }
    })
    .help()
    .alias('help','h')
    .argv;

var encodedAddress = encodeURIComponent(args.a);

geoLocationPromise.getGeoLocationForAddress(encodedAddress).then((result)=>{
        //console.log(JSON.stringify(result,undefined,2));
        return  weatherPromise.getTemparature(result.Latitude,result.Longitude);
    }).then((temp)=>{
            console.log(`Temperature :${temp}`) ;
        }).catch((error)=>{
            console.log(error);
            });
/*geoLocation.getGeoLocationForAddress(encodedAddress,(errorMessage,result)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        weather.getTemparature(result.Latitude,result.Longitude,(error,temp)=>{
            if(error){
                console.log(error);
            }else{
                console.log(`Location :${result.Address}, Temperature :${temp}`) ;
            }
        });
    }    
});*/