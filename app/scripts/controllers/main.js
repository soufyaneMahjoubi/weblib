'use strict';

/**
 * @ngdoc function
 * @name weblibApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weblibApp
 */
angular.module('testWeblibApp').controller('MainCtrl', function($scope, $http, $q) {
    $scope.myInterval = 2000;
    $scope.noWrapSlides = false;
    $scope.search = "cars"
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
    $scope.nbrSlide = 5;
    var path = 'https://api.gettyimages.com/v3/search/images?phrase=' + $scope.search;

    $scope.Getimage = () => {
        var slides = $scope.slides = [];
        var currIndex = 0;
        $scope.nbrSlide = 5;
        var path = `https://api.gettyimages.com/v3/search/images?phrase=${($scope.search || $scope.search === '' )? $scope.search : 'cars'}` // +  ? $scope.search : 'cars';
        console.log(path)
        $http.get(path, {
            headers: {
                "Api-Key": 'es89cy3tngjcvx9rk4yrtsq9'
            }
        }).then(function(success) {
            for (var i = 0; i < $scope.nbrSlide; i++) {
                $scope.slides.push({
                    image: success.data.images[i].display_sizes[0]['uri'],
                    id: i
                });
            }

        }, (error) => {
            console.log(error)
        });
    }

    $scope.Getimage();
});