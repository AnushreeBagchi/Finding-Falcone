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
        // debugger;
        utils.clearVehicles(destinationName);
        models.getVehicles().then((data)=>{
            models.updatePlanet(destinationName, planetName);
            utils.populateVehicles(data);
            reRender();
        });
        utils.markSelectedPlanet(destinationName,planetName);
    }

    function onVehicleSelect (destination,vehicle, planet){
        models.updateVehicleNumber (destination,vehicle, planet);
        utils.calculateTotalTime(models.getCurrentState());
        reRender();  
    }

    function reRender() {
        utils.clearEvents();
        utils.renderState(models.getCurrentState());
        utils.setUpEventHandlersForVehicle(onVehicleSelect);
        utils.displayTotalTime();
        pqr();
    }

    function getToken(){
        models.postFunction().then(data=>{
            debugger;
            console.log(data);
        })
    }

    init();
})(app); 