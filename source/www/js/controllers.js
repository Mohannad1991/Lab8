angular.module('starter.controllers', [])

.controller('singincontroller', function($scope, $state) {
     $scope.home = function() {
       $state.go('home')
    }
    
    $scope.signup = function(){
        $state.go('signup')
    }
})

.controller('registercntrl', function($scope, $state) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.singup = function(){
      $state.go('signin')
      
  }
});
