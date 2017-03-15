angular.module('app').controller('AgendaCtrl', function ($scope, appuntamenti) {

	$scope.appuntamenti = appuntamenti;

	$scope.$watch('colore', function (colore) {
		console.log(colore);
	});

});