(function () {
 'use strict';
 
  angular.module('namecalculator', [])
  .controller('namecalculatorcontrol', function ($scope){
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.display = function(){
    	var totalNameValue = claculate($scope.name);
    	$scope.totalValue = totalNameValue;
    };

    function claculate(string){
    	var totalSrtingValue = 0;
    	for (var i = 0; i< string.length; i++){
    		totalSrtingValue += string.charCodeAt(i);
    	};
    	return totalSrtingValue;
    };
  });

})();