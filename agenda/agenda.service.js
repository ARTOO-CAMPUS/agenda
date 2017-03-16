angular.module('app').service('AgendaSrv', function () {

	var appuntamenti = [{
			id: 1,
			titolo: "appuntamento con angular",
			data: new Date(),
			descrizione: "oggi ci sarà da divertirsi... yahooooo",
			luogo: "domus stella maris",
			priorita: "#ffa500"
		}, {
			id: 2,
			titolo: "dentista",
			data: new Date(),
			descrizione: "oggi ci sarà da divertirsi... yahooooo",
			luogo: "domus stella maris",
			priorita: "#ff0000"
		},
		{
			id: 3,
			titolo: "booohh",
			data: new Date(),
			descrizione: "oggi ci sarà da divertirsi... yahooooo",
			luogo: "domus stella maris",
			priorita: "#00ff00"
		}
	];

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

	var aggiornaAppuntamento = function (app) {
		var updateoggetto = angular.copy(app);
		var indice = appuntamenti.findIndex(function (el) {
			return el.id == app.id;
		})
		appuntamenti.splice(indice, 1, updateoggetto);
	}


	return {
		getAppuntamenti: getAppuntamenti,
		deleteAppuntamento: deleteAppuntamento,
		getAppuntamento: getAppuntamento,
		aggiornaAppuntamento: aggiornaAppuntamento
	}
});