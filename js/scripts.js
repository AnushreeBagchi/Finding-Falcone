var app= app||{};

(function(){
    var {utils, models}= app;
    function init(){
       models.getPlanets().then(data=>{
         utils.populatePlanets(data);
        });
    }

    utils.planetsSetEvent (onPlanetSelect);
    
    function onPlanetSelect (){
        models.getVehicles().then((data)=>{
            console.log(data);
            utils.populateVehicles(data);
        });
    }

   

    init();
})(app); 