angular.module('ShowTrackrApp')
  	.controller('LoginCtrl', ['$scope', 'Auth', function ($scope, Auth) {
  		$scope.login = function(){
	  		Auth.login({
	  			email: $scope.mail,
	  			password: $scope.password
	  		});
	  	};
	}]);