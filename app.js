(function (){
	'use strict';
 
 angular.module('myFirstApp', [])
 .controller('myFirstController', function($scope){
 	$scope.name = "sathvik";
 	$scope.sayHello = function(){
 		return "hello world";
 	}
    
 });

})();