var app=app||{};
app.models={};

(function(models){
    var planets, vehicle;
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
            return data;
        }
        );
    }

    

})(app.models);