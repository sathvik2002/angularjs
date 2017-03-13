(function(){
	angular.module('DIapp', [])
	.controller('DIcontroller', DIcontroller )
	function DIcontroller ($scope, $filter){
      $scope.name = "sathvik";


      $scope.upper =  function(){
         var upcase = $filter('uppercase');
         $scope.name = upcase($scope.name);
      };
	};
})();