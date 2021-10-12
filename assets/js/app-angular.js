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

      $scope.addToCart = (id, stock) => {
        $scope.responseMap.forEach((values, keys) => {
          if (id == values.id) {
            if ($scope.responseMap[keys].stock > 0) {
              $scope.responseMap[keys].stock -= 1;
              $scope.badgeCartShop += 1;
              $http.post("/assets/js/appAngular.php?action=addPanier&id="+id).then();
            }
          }
        })
      }

      $scope.delToCart = () => {
        $http.post("/assets/js/appAngular.php?action=deletePanier")
        .then(function (response) {
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

      $scope.deleteItem = (id) => {
        $http.post("/assets/js/appAngular.php?action=deleteItem&id="+id)
        .then(function (response) {
          for(var i = 0; i < $scope.mapShop.length; i++) {
            if ($scope.mapShop[i].id == id) delete $scope.mapShop[i];
          }
          delete $scope.mapItemNumber[id];
          $scope.numberItem = 0;
          $scope.totalPrice = 0;
          $scope.badgeCartShop = 0;
          $scope.getCart();
          $scope.getBadgeCart();
        });
      }

      $scope.getBadgeCart = () => {
        $http.post("/assets/js/appAngular.php?action=getBadgePanier")
        .then(function (response) {
          $scope.badgeCartShop = Object.keys(response.data).length;
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
        return "$ "+parseInt(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }
  }]);
})(window.angular);