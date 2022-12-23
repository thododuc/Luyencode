// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope) {
//   $scope.contacts = [
//     {id: 0, 'name': 'Ngo Anh Tuan', 'email': 'tuananhngo@gmail.com', 'password': 123, 'phone': '111-222-333'},
//     {id: 1, 'name': 'Do Duc Tho', 'email' : 'doductho@gmail.com','password': 123, 'phone': '123-456-789'}
//   ];

//   $scope.saveInfo = function() {
//     if ($scope.newContact.id == null) {
//       $scope.newContact.id = $scope.contacts.length;
//       $scope.contacts.push($scope.newContact);
//     }
//     $scope.newContact = {};
//   }
// });

var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope) {
  $scope.contacts = [
    {
      id: 0,
      'name': 'Ngo Anh Tuan',
      'email': 'ngoanhtuan@gmail.com',
      'password': '123456',
      'phone': '1-22-33'
    },
    {
      id: 1,
      'name': 'Nguyen Hoang Anh',
      'email': 'anh.nguyen@gmail.com',
      'password': 'kljafi#3',
      'phone': '888-999-777'
    }
  ]

  $scope.saveInfo = function() {
    if($scope.newContact.id == null) {
      $scope.newContact.id = $scope.contacts.length;
      $scope.contacts.push($scope.newContact);
    } else {
      $scope.contacts[$scope.newContact.id] = $scope.newContact;
    }
    $scope.newContact = {};
  };

  $scope.edit = function(id) {
    $scope.newContact = angular.copy($scope.contacts[id]);
  }

  $scope.delete = function(id) {
    $scope.contacts.splice(id, 1);
  }

  $scope.sortThis = function(x) {
    $scope.sortValue = x;
    if($scope.reverse) {
      $scope.reverse = "";
    } else {$scope.reverse = 'reverse'}
  }

  $scope.clearSearch = function() {
    $scope.searchValue = "";
  }
});

