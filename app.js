const yargs = require("yargs");
const geoLocation = require("./googlegeo/geolocation");
const weather = require("./weatherapi/weather");

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

geoLocation.getGeoLocationForAddress(encodedAddress,(errorMessage,result)=>{
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
});