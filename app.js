$(document).ready(function () {
    var zipcode = "";
    var apikey = "afbe116e2efffa373247065ba46d08b3";
    var city = "San Francisco";
    $("#button").on("click", function (e) {
        e.preventDefault();
        zipcode = $("#text").val();
        $.ajax({
            type: "GET",
            //units would change the temperature from kelvin to fahrenheit
            url: `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&id=${city}&units=imperial&appid=${apikey}`,
            dataType: "json",
        }).then(function (response) {
            console.log(response.name);
            kelvin = response.main.temp;
            city = response.name;
            // var fah = (kelvin - 273.15) * 9 / 5 + 32;
            $("body").append(`<h1>The weather is ${kelvin} Degrees Fahrenheit in ${city}</h1>`);
        });
    });

});