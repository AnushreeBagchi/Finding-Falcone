var app= app||{};

(function(){
    var {utils, models}= app;
    function init(){
       models.getPlanets().then(data=>{
         utils.planetsSetEvent (onPlanetSelect);
         utils.populatePlanets(data);
        });
    }

    function onPlanetSelect (destinationName, planetName){
        models.getVehicles().then((data)=>{
            models.updatePlanet(destinationName, planetName);
            utils.populateVehicles(data);
            reRender();
        });
    }

    function onVehicleSelect (destination,vehicle, planet){
        models.updateVehicleNumber (destination,vehicle, planet);
        reRender();  
    }

    function reRender() {
        utils.clearEvents();
        utils.renderState(models.getCurrentState());
        utils.setUpEventHandlersForVehicle(onVehicleSelect);
    }

    init();
})(app); 