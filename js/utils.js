var app=app||{};
app.utils= {};

(function(utils){
    utils.populatePlanets= function(data){
        for (var key in data){
            console.log(data[key].name);
            $('.planet').append(`<option value='${data[key].name}'>${data[key].name}</option>`);
        }
    }
})(app.utils);