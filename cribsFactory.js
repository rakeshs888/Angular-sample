angular
	.module('ngCribs')
	.factory('cribsFactory', function ($http) {

			
			function getCribs(){
			return $http.get('data.json');
			}

			return{
				getCribs:getCribs
			}
		// body...
	});