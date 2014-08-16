angular.module('ShowTrackrApp')
  .controller('AddCtrl', ['$scope', '$alert', 'Show', function ($scope, $alert, Show) {
  	$scope.addShow = function(){ // $alert is similar to Toastr
  		Show.save({showName: $scope.showName},
  			function(){
  				$scope.showName = '';
  				$scope.addForm.$setPristine(); // Remove ng-dirty class in form and propogate all the controls in the form in add.html
  				$alert({
  					content: 'TV show has been added.',
  					placement: 'top-right',
  					type: 'success',
  					duration: 3
  				});
  			},
  			function(response){
  				$scope.showName = '';
  				$scope.addForm.$setPristine();
  				$alert({
  					content: response.data.message,
  					placement: 'top-right',
  					type: 'danger',
  					duration: 3
  				});
  			});
  	};
  }]);