sap.ui.define([
	"./BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.esweckert.profile.controller.Contact", {

		onInit: function () {

		},

        onToHome: function () {
			this.getOwnerComponent().getTargets().display("home");
		}

	});

});
