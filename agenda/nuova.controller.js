angular.module('app').controller('NuovaCtrl', function ($scope, AgendaSrv, $state) {

	$scope.crea = function () {
		AgendaSrv.creaAppuntamento($scope.appuntamento);
		$state.go('/');
	}

	$scope.back = function () {
		$state.go('/');
	}

	$scope.appuntamento = {};
	$scope.appuntamento.priorita = "#ff0000";
	$scope.appuntamento.data = new Date();
});