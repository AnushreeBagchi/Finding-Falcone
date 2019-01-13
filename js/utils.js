var app = app || {};
app.utils = {};

(function (utils) {
    var $current;var selectedVehicle; var selectedPlanet;
    utils.populatePlanets = function (data) {
        for (var key in data) {
            $('.planet').append(`<option value='${data[key].name}'>${data[key].name}</option>`);
        }
    }
    utils.planetsSetEvent = function (callback) {
        $('.planet').change(function () {
            $(this).parent().append(`<div class= 'vehicle'></div>`);
            $current = $(this).parent().children('.vehicle');
            callback();
        });

    }

    utils.populateVehicles = function (data) {
        if ($current.children().length==0) {
            for (var key in data) {
                if(data[key].total_no===0){
                    $current.append(`<input type='radio' value='${data[key].name}' disabled>${data[key].name}(${data[key].total_no})<br>`);
                }
                else{
                $current.append(`<input type='radio' value='${data[key].name}'>${data[key].name}(${data[key].total_no})<br>`);
                }
            }
        }
    }

    utils.vehicleSetEvent= function(callback){
        
        $('.vehicle input').on('click',function(){
            $(this).parent().children('input').prop("checked", false); //uncheck all other radio buttons
            $(this).parent().children('input').removeClass('selected'); // remove selected class
            $(this).addClass('selected'); 
            $('.selected').prop("checked", true);   
            selectedPlanet=$(this).parent().parent()[0].className;
            selectedVehicle=$(this)[0].defaultValue;
            callback(selectedPlanet,selectedVehicle);
        } );       
    }

    
})(app.utils);

// debugger;
            // selectedVehicle.push($(this)[0].defaultValue);
            // console.log($(this)[0].defaultValue);
            // console.log(selectedVehicle)