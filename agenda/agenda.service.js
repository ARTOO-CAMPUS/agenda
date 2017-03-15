angular.module('app').service('AgendaSrv', function () {

	var appuntamenti = [{
		id: 1,
		titolo: "appuntamento con angular",
		data: new Date(),
		descrizione: "oggi ci sarà da divertirsi... yahooooo",
		luogo: "domus stella maris",
		priorita: "#ffa500"
	}];

	var getAppuntamenti = function () {
		return appuntamenti;
	}

	var deleteAppuntamento = function (indice) {
		appuntamenti.splice(indice, 1);
	}
	var getAppuntamento = function (id) {
		return appuntamenti.find(function (el) {
			return el.id == id;
		});
	}


	return {
		getAppuntamenti: getAppuntamenti,
		deleteAppuntamento: deleteAppuntamento,
		getAppuntamento: getAppuntamento
	}
});