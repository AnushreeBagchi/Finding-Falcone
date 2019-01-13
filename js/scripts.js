var app= app||{};

(function(){
    var {utils, models}= app;
    function init(){
       models.getPlanets().then(data=>{
         utils.populatePlanets(data);
        });
        models.getVehicles().then(data=>{
            //data fetched
        });
    }

    utils.planetsSetEvent (onPlanetSelect);
    
    function onPlanetSelect (){
        models.getVehicles().then((data)=>{
            utils.populateVehicles(data);
            utils.vehicleSetEvent(onVehicleSelect);
        });
    }

    function onVehicleSelect (planet,vehicle){
        models.updateVehicleNumber (planet,vehicle);
    }

   

    init();
})(app); 