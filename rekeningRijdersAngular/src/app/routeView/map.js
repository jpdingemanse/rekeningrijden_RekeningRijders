/*global angular */
(function (ng) {
  'use strict';

  var app = ng.module('ngLoadScript', []);

  app.directive('script', function() {
    return {
      restrict: 'E',
      scope: false,
      link: function(scope, elem, attr) {
        if (attr.type === 'text/javascript-lazy') {
          var code = elem.text();
          var f = new Function(code);
          f();
        }
      }
    };
  });

}(angular));


// angular.module('myModule', [])

// .factory('utilsFactory', function() {

// function initMap() {
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 8,
//           center: {lat: 52.3702, lng: 4.8952},
//           mapTypeId: 'terrain'
//         });
//          // Define the LatLng coordinates for the polygon's path.
//         var routePoints = [
//     //{lat: 51.563025, lng: 5.065169},
//     {lat: 52.3702, lng: 4.8952},
//     {lat: 52.3602, lng: 4.8962},
//     {lat: 51.563025, lng: 5.065169},
//     {lat: 51.562372, lng: 5.064955},
//     {lat: 51.561652, lng: 5.064826},
//     {lat: 51.560931, lng: 5.064697},
//     {lat: 51.560211, lng: 5.064569},
//     {lat: 51.559504, lng: 5.064386},
//     {lat: 51.559164, lng: 5.064268},
//     {lat: 51.558737, lng: 5.064139},
//     {lat: 51.55823, lng: 5.064054},
//     {lat: 51.557716, lng: 5.063968},
//     {lat: 51.557203, lng: 5.063882},
//     {lat: 51.556696, lng: 5.063796},
//     {lat: 51.556255, lng: 5.063721},
//     {lat: 51.556195, lng: 5.064493},
//     {lat: 51.556135, lng: 5.065277},
//     {lat: 51.556075, lng: 5.06606},
//     {lat: 51.556012, lng: 5.066848},
//     {lat: 51.555982, lng: 5.067245},
//     {lat: 51.555952, lng: 5.067669},
//     {lat: 51.555922, lng: 5.068093},
//     {lat: 51.555893, lng: 5.068514},
//     {lat: 51.555878, lng: 5.068723},
//     {lat: 51.555863, lng: 5.06897},
//     {lat: 51.555848, lng: 5.069225},
//     {lat: 51.555833, lng: 5.06948},
//     {lat: 51.555819, lng: 5.069752},
// ];
//         var route = new google.maps.Polyline({
//           path: routePoints,
//           geodesic: true,
//           strokeColor: '#00FFFFF',
//           strokeOpacity: 1.0,
//           strokeWeight: 2
//         });

//         route.setMap(map);
//       }

// return {
//     initMap: initMap,
// };
// })

// .controller('myController', ['$scope', 'utilsFactory', function($scope, utilsFactory) {
//   $scope.someNumber = utilsFactory.initMap();
// }]);

