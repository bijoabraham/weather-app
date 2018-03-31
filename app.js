const yargs = require("yargs");
const geoLocation = require("./googlegeo/geolocation");

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
        console.log(JSON.stringify(result,undefined,2));
    }    
});