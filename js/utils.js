var app = app || {};
app.utils = {};

(function (utils) {
    var $current;
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
                $current.append(`<input type='radio' value='${data[key].name}'>${data[key].name}(${data[key].total_no})<br>`);
            }
        }
    }
})(app.utils);