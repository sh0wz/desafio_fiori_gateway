/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"vdl/desafiogateway/desafiofiorigateway/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});