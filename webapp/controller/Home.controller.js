sap.ui.define([
	'./BaseController',
	'sap/ui/model/json/JSONModel',
	'sap/ui/Device',
	'com/esweckert/profile/model/formatter'
], function (BaseController, JSONModel, Device, formatter) {
	"use strict";
	return BaseController.extend("com.esweckert.profile.controller.Home", {
		formatter: formatter,

		onInit: function () {
			var oViewModel = new JSONModel({
				isPhone : Device.system.phone
			});
			this.setModel(oViewModel, "view");
			Device.media.attachHandler(function (oDevice) {
				this.getModel("view").setProperty("/isPhone", oDevice.name === "Phone");
			}.bind(this));


		},
		  bookAppointment: function (oEvent) {
			var sURL = "https://app.usemotion.com/meet/thomas.wecker/meeting";
			sap.m.URLHelper.redirect(sURL, true);
		},

		onToContact : function () {
			this.getOwnerComponent().getTargets().display("contact");
		},
		onToDataMigration : function () {
			this.getOwnerComponent().getTargets().display("dataMigration");
		}
	});
});