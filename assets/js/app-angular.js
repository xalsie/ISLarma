(function(angular) {
  'use strict';
  var app = angular.module('appRoot', ['infinite-scroll']);

  app.controller('appCommon', ['$scope', '$http', function($scope, $http) {

      $scope.responseMap = false;
      $scope.mapShop = false;
      $scope.mapItemNumber = false;

      $scope.numberItem = 0;
      $scope.totalPrice = 0;

      $scope.selectedDelivery = [];
      $scope.deliveryOpt = "";

      $scope.limit = 25;
      $scope.badgeCartShop = 0;


      $scope.getFromUrl = () => {
        $http.get("/assets/js/appAngular.php?action=getListItems")
        .then(function (response) {
          $scope.responseMap = response.data;
        });
      }

      $scope.addToCart = (id) => {
        $scope.badgeCartShop += 1;

        $http.post("/assets/js/appAngular.php?action=addPanier&id="+id)
        .then(function (response) {
          // console.log(response.data);
        });
      }

      $scope.delToCart = () => {
        $http.post("/assets/js/appAngular.php?action=deletePanier")
        .then(function (response) {
          // console.log(response.data);

          $scope.mapShop = false;
          $scope.mapItemNumber = false;
          $scope.numberItem = 0;
          $scope.totalPrice = 0;
          $scope.badgeCartShop = 0;
          $scope.deliveryOpt = $scope.selectedDelivery[0];

          $scope.getBadgeCart();
          $scope.getCart();
          $scope.getTotalItem();
          $scope.getTotalPrice();
        });
      }

      $scope.getBadgeCart = () => {
        $http.post("/assets/js/appAngular.php?action=getBadgePanier")
        .then(function (response) {
          $scope.badgeCartShop = response.data.length;
        });
      }

      $scope.getDelivery = () => {
        $http.post("/assets/js/appAngular.php?action=Delivery")
        .then(function (response) {
          $scope.selectedDelivery = response.data;

          $scope.deliveryOpt = $scope.selectedDelivery[0];
        });
      }

      $scope.getTotalItem = () => {
        for(var i = 0; i < $scope.mapShop.length; i++) {
          $scope.numberItem += $scope.mapItemNumber[$scope.mapShop[i].id];
        }
      }

      $scope.getTotalPrice = () => {
        for(var i = 0; i < $scope.mapShop.length; i++) {
          $scope.totalPrice += ($scope.mapShop[i].price * $scope.mapItemNumber[$scope.mapShop[i].id]);
        }
      }

      $scope.getCart = () => {
        $http.post("/assets/js/appAngular.php?action=getPanier")
        .then(function (response) {
          $scope.mapShop = response.data[0];
          $scope.mapItemNumber = response.data[1];

          $scope.getTotalItem();
          $scope.getTotalPrice();
        });
      }

      $scope.convertNumber = (x) => {
        return "$ "+x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }
      
      // $scope.getFromUrl();
      // $scope.getBadgeCart();
      // $scope.getCart();

      // $scope.getDelivery();
  }]);

})(window.angular);