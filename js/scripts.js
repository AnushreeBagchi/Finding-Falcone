var app= app||{};

(function(){
    var {utils, models}= app;

    var planets;
    function init(){
       models.getPlanets().then(data=>{
         utils.populatePlanets(data);
        });
    }

   

    init();
})(app); 