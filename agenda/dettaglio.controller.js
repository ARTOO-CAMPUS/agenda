angular.module('app').controller('DettaglioCtrl',
	function (
		$scope,
		appuntamento,
		AgendaSrv,
		$timeout,
		$stateParams,
		$state) {

		$scope.loading = true;
		// $scope.appuntamento = appuntamento;

		$timeout(function () {
			$scope.appuntamento = AgendaSrv.getAppuntamento($stateParams.id);
			$scope.loading = false;
		}, 50);

		$scope.modifica = function () {
			AgendaSrv.aggiornaAppuntamento($scope.appuntamento);
			$state.go('/');
		}

		$scope.back = function () {
			$state.go('/');
		}




	});