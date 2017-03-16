angular.module('app').controller('DettaglioCtrl',
	function (
		$scope,
		appuntamento,
		AgendaSrv,
		$timeout,
		$stateParams) {

		$scope.loading = true;
		// $scope.appuntamento = appuntamento;

		$timeout(function () {
			$scope.appuntamento = AgendaSrv.getAppuntamento($stateParams.id);
			$scope.loading = false;
		}, 1000);




	});