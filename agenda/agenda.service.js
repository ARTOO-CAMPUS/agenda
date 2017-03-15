angular.module('app').service('AgendaSrv', function () {

	var appuntamenti = [{
		titolo: "appuntamento con angular",
		data: new Date(),
		descrizione: "oggi ci sarà da divertirsi... yahooooo",
		luogo: "domus stella maris",
		priorita: "#ffa500"
	}];

	var getAppuntamenti = function () {
		return appuntamenti;
	}

	return {
		getAppuntamenti: getAppuntamenti
	}
});