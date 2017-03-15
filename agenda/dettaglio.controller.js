angular.module('app').controller('DettaglioCtrl', function ($scope, AgendaSrv, $state) {

	// $scope.appuntamento = appuntamento;
	// console.log($scope.appuntamento);
	$scope.appuntamento = AgendaSrv.getAppuntamento($state.params.id);
	console.log($scope.appuntamento);

});