angular
	.module('ngCribs')
	
	.controller('cribsController',function ($scope,cribsFactory) {
 	
		$scope.cribs;

		cribsFactory.getCribs().success(function(data){
			$scope.cribs=data;

		}).error(function(error){
			console.log(error);
		});
		$scope.incrimentLikes=function (cribs) {
			cribs.likes++;
			// body...
		}
		$scope.incrimentDislikes=function (cribs) {
			cribs.dislikes++;
			// body...
		};
		

		  
            // $scope.ShowHide = function (cribs) {
            //     //If DIV is visible it will be hidden and vice versa.
            //     $scope.IsVisible = !$scope.IsVisible ;
            // };

		// body...
	});