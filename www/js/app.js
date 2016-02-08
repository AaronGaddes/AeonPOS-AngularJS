// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('main', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('Sections', function($scope){
  $scope.sections = [
    {
      name:"1's",
      waiter:"Aaron",
      tables:[
        {name:1,maxPpl:6,status:"ocupied",
          orders:[
            {item:"Steak",addons:["Well Done", "No Sauce"]}
          ]
        },
        {name:2,maxPpl:6,status:"ocupied"},
        {name:3,maxPpl:6,status:"ocupied"},
        {name:4,maxPpl:6,status:"ocupied"},
        {name:5,maxPpl:6,status:"ocupied"},
        {name:6,maxPpl:6,status:"ocupied"},
        {name:7,maxPpl:6,status:"ocupied"},
        {name:8,maxPpl:6,status:"ocupied"},
        {name:9,maxPpl:6,status:"ocupied"}
      ]
    },
    {name:"10's",
      waiter:"Mike"}];
});
