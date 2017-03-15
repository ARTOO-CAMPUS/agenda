angular.module('app').controller('AgendaCtrl', function ($scope, appuntamenti) {

	$scope.appuntamenti = appuntamenti;
	console.log($scope.appuntamenti);
});