var app = angular.module('weather', []);

app.controller('mainCtrl', function($scope, $http){
    const key = '4cfcbb4d048c88236845931c777c045a'

    $scope.displayWeather = false;
    $scope.current;
    $scope.forecast;

    $scope.searchWeather = function(){
        $scope.displayWeather = true;
        let zip = $('#zip').val();


        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather',
            params: {
                'appid' : key,
                'zip': zip + ',us'
            }
        }).then(function(response){
            console.log(response);
            $scope.current = response.data;
        });

        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/forecast',
            params: {
                'appid': key,
                'zip': zip + ',us'
            }

        }).then(function(response){
            console.log(response);
            $scope.forecast = response.data
        })
    };

});

app.component('navbar', {
    template: `
    <nav class="navbar navbar-dark bg-dark">
    <span class="navcolor">Angular Weather</span>
    <button type="button" class="btn btn-outline-light ml-auto mr-1">Register</button>
    <button type="button" class="btn btn-outline-light">Sign In</button>
    </nav>
    `
})
