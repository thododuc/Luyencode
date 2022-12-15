var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $interval) {

  $scope.imgList = [
    "https://images.unsplash.com/photo-1554747706-2e474e1ae0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1670510953302-b676801bcb5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://plus.unsplash.com/premium_photo-1669796647725-9322aa28c9af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1669759016637-9fc970d592b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1669752012473-a12e9a47883d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1669545192788-f87f5e571510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
  ];
  
  $scope.imgNo = 0;
  $scope.mainImg = $scope.imgList[$scope.imgNo];
  $scope.uploadImg = function() {
    $scope.mainImg = $scope.imgList[$scope.imgNo];
  }
  
  $scope.nextImg = function() {
    if ($scope.imgNo == 5) {
      $scope.imgNo = 0;
    } else {$scope.imgNo++;}
    $scope.uploadImg();
  }

  $scope.prevImg = function() {
    if ($scope.imgNo == 0) {
      $scope.imgNo = 5;
    } else {$scope.imgNo--;}
    $scope.uploadImg();
  }

  $interval(function() {
    if ($scope.imgNo == 5) {
      $scope.imgNo = 0;
    } else {$scope.imgNo++;}
    $scope.uploadImg();
  }, 5000);
});