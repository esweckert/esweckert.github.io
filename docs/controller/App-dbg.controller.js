sap.ui.define([
	'./BaseController',
	'sap/m/library'
], function(
	BaseController,
	mobileLibrary
) {
	"use strict";

	// shortcut for sap.m.PlacementType
	var PlacementType = mobileLibrary.PlacementType;

	// shortcut for sap.m.VerticalPlacementType
	var VerticalPlacementType = mobileLibrary.VerticalPlacementType;

	// shortcut for sap.m.ButtonType
	var ButtonType = mobileLibrary.ButtonType;

	return BaseController.extend("com.esweckert.profile.controller.App", {


		onInit: function() {
//			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());

		},

		onExit: function() {

		},

		onToHome : function () {
			this.getOwnerComponent().getTargets().display("home");
		},



		/**
		 * Returns a promise which resolves with the resource bundle value of the given key <code>sI18nKey</code>
		 *
		 * @public
		 * @param {string} sI18nKey The key
		 * @param {string[]} [aPlaceholderValues] The values which will repalce the placeholders in the i18n value
		 * @returns {Promise<string>} The promise
		 */
		getBundleText: function(sI18nKey, aPlaceholderValues){
			return this.getBundleTextByModel(sI18nKey, this.getOwnerComponent().getModel("i18n"), aPlaceholderValues);
		}

	});
});