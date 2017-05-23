angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $rootScope) {

  $rootScope.tableData = {"data": 
  [{
 "id": 1,
 "name": "Jhon",
 "phone": "9999999999",
 "address":
 {
 "city": "Pune",
 "address_line1":"ABC road",
 "address_line2":"XYZ building",
 "postal_code":"12455"
 }
 }, {
 "id": 2,
 "name": "Jacob",
 "phone": "AZ99A99PQ9",
 "address":
 {
 "city": "Pune",
 "address_line1":"PQR road",
 "address_line2":"ABC building",
 "postal_code":"13455"
 }
 }, {
 "id": 3,
 "name": "Ari",
 "phone": "145458522",
 "address":
 {
 "city": "Mumbai",
 "address_line1":"ABC road",
 "address_line2":"XYZ building",
 "postal_code":"12455"
 }
 }]
}

  $scope.checkValidate = function(){
    angular.forEach($rootScope.tableData.data , function(value, key){
      var isnum = /^\d+$/.test(value.phone);
      if(!isnum){
        value.phone = 'NA';
      }
    });
  }

  $scope.showHideForm = function(clickVal, button, rowData){
    $scope.add = [];
    $scope.buttonToShow = button;
    if(clickVal == 1){
      $scope.clicked = 0;
    }else{
      $scope.clicked = 1;
    }
    $scope.add.address = {};
    if(button == 'edit'){
        $scope.add.id = rowData.id;
        $scope.add.name = rowData.name;
        $scope.add.phone = rowData.phone;
        $scope.add.address.city = rowData.address.city;
        $scope.add.address.address_line1 = rowData.address.address_line1;
        $scope.add.address.address_line2 = rowData.address.address_line2;
        $scope.add.address.postal_code = rowData.address.postal_code;
    }
    
  }

  $scope.updateRow = function(data){
    angular.forEach($rootScope.tableData.data, function(value, key){
      if(data.id == value.id){
        $rootScope.tableData.data[key] = data;
        $scope.add = [];
        $scope.showHideForm($scope.clicked, null, null)
      }
    });
  }

  $scope.addRow = function(){
    if($scope.add.id || $scope.add.name ||$scope.add.phone || $scope.add.address.city ||$scope.add.address.address_line1 ||$scope.add.address.address_line2 || $scope.add.address.postal_code){
      $rootScope.tableData.data.push($scope.add);
      $scope.add = [];
    }else{
      alert('error');
    }    
  }

  $scope.init = function(){
    $scope.add =[];
    $scope.checkValidate();
    $scope.clicked=0;
  }

  $scope.init();

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
