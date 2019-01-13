var app=app||{};
app.models={};

(function(models){
    var planets, vehicle, originalPlanets, originalVehicle;
    var prevSelectedPlanet;
    var dataSet={};
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

    models.updateVehicleNumber = function (selectedPlanet,selectedVehicle){
        if(selectedPlanet===prevSelectedPlanet){
            vehicle=JSON.parse(JSON.stringify(originalVehicle)); //resetting the original number incase of multiple clicks within same planet
        }
        for(var key in vehicle){
            if(vehicle[key].name===selectedVehicle && vehicle[key].total_no!=0){
                vehicle[key].total_no--;
                prevSelectedPlanet=selectedPlanet;
                    // console.log(selectedVehicle+' 's+vehicle[key].total_no);
            }
        }
    }
    

})(app.models);
