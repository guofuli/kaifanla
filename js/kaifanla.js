/**
 * Created by admin on 2017/8/11.
 */
angular.module('kaifanla', ['ng', 'ngRoute', 'ngAnimate'])
  .controller('startCtr1', function () {

  })
  .controller('mainCtr1', function () {

  })
  .controller('detailCtr1', function ($scope,$location) {
    $scope.myorder=function(){
      $location.path('/main')

    }
  })
  .controller('orderCtr1', function () {

  })
  .controller('myorderCtr1', function () {

  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/start', {
        templateUrl: 'tpl/start.html',
        controller:'startCtr1'
      })
      .when('/main', {
        templateUrl: 'tpl/main.html',
        controller:'mainCtr1'
      })
      .when('/detail', {
        templateUrl: 'tpl/detail.html',
        controller:'detailCtr1'
      })
      .when('/order', {
        templateUrl: 'tpl/order.html',
        controller:'orderCtr1'
      })
      .when('/myorder', {
        templateUrl: 'tpl/myorder.html',
        controller:'myorderCtr1'
      })
      .otherwise('/start',{
        templateUrl: 'tpl/start.html'
      })

  })