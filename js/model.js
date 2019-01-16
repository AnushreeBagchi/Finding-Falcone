var app=app||{};
app.models={};

(function(models){
    var planets, vehicle, originalVehicle;
    var destinations = ["destination1", "destination2", "destination3", "destination4"];
    var currentState = {
        destination1 : {
            selectedPlanet: {
                name: "",
                distance:""
            },
            selectedVehicle: {
                name: "",
                max_distance: "",
                speed: ""
            },
            vehiclesList : [
                {
                    name: "",
                    total_no: 0
                }
            ]
        },
        destination2: {
            selectedPlanet: null,
            selectedVehicle: null,
            vehiclesList : []
        },
        destination3: {
            selectedPlanet: null,
            selectedVehicle: null,
            vehiclesList : []
        },
        destination4: {
            selectedPlanet: null,
            selectedVehicle: null,
            vehiclesList : []
        }
    };


    

    models.getState=function(){
        return currentState;
    }
    models.getPlanets= function() {
        if (planets) {
            return new Promise((resolve,reject)=>{
                resolve(planets);
            })
        }
        return fetch('code/planet.json').then(function(response){
            return response.json();
        }).then(data=>{
            planets= data;
            originalPlanets= planets;
            return planets;
        });
    }

    models.getVehicles= function(){
        if(vehicle){
            return new Promise((resolve, reject)=>{
                resolve(vehicle);
            })
        }
        return fetch ('code/vehicle.json').then(function(response){
            return response.json();
        }).then((data)=>{
            vehicle=data;
            originalVehicle= JSON.parse(JSON.stringify(data)); // creating another copy of the data 
            return data;
        }
        );
    }
    models.updatePlanet = function(destinationName, selectedPlanetName) {
        currentState[destinationName].selectedPlanet =  getPlanetWithName(selectedPlanetName);
        recalculate();
    }

    models.updateVehicleNumber = function (destinationName,selectedVehicleName){
        currentState[destinationName].selectedVehicle = getVehicleWithName(selectedVehicleName);
        recalculate();
        return;
    }

    getVehicleWithName = function(name) {
        let selected ;
        vehicle.forEach((vehicle) => {
            if(vehicle.name == name) {
                selected = vehicle;
            }
        });
        return selected;
    }

    getPlanetWithName = function(name) {
        let selected ;
        planets.forEach((planet) => {
            if(planet.name == name) {
                selected = planet;
            }
        });
        return selected;
    }


    models.getCurrentState = function (){
        return currentState;
    }
    
    function recalculate() {
       clearVehiclesListInCurrentState();
       let vehicles = JSON.parse(JSON.stringify(originalVehicle));
       vehicles.forEach((vehicle) => {
         destinations.forEach((destinationName)=>{
            if(isVehicleNameSelectedInDestination(vehicle.name, destinationName)) {
                vehicle.total_no--;
                
            };
            addtoVehicleList(destinationName, {
                name: vehicle.name,
                total_no: vehicle.total_no
            })
         })
       });
    //    console.log(currentState);
    }

    function isVehicleNameSelectedInDestination(vehicleName, destinationName) {
        if(!currentState[destinationName].selectedVehicle) {
            return false;
        }
        return currentState[destinationName].selectedVehicle.name === vehicleName;
    }
    function clearVehiclesListInCurrentState() {
        for(key in currentState) {
            currentState[key].vehiclesList = [];
        }
    }

    function addtoVehicleList(destinationName, vehicleDetails) {
        currentState[destinationName]["vehiclesList"].push(vehicleDetails);
    }

    
    

})(app.models);
