angular.module('app').controller('DettaglioCtrl', function ($scope, appuntamento, AgendaSrv, $timeout) {
	$scope.loading = true;
	$timeout(function () {
		$scope.appuntamento = appuntamento;
		$scope.loading = false;
	}, 1000);
});