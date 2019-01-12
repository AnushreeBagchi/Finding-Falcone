var app=app||{};
app.models={};

(function(models){
    var planets;
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

    

})(app.models);