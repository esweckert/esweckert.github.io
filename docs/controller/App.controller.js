sap.ui.define(["./BaseController","sap/m/library"],function(e,t){"use strict";var n=t.PlacementType;var o=t.VerticalPlacementType;var r=t.ButtonType;return e.extend("com.esweckert.profile.controller.App",{onInit:function(){},onExit:function(){},onToHome:function(){this.getOwnerComponent().getTargets().display("home")},getBundleText:function(e,t){return this.getBundleTextByModel(e,this.getOwnerComponent().getModel("i18n"),t)}})});
//# sourceMappingURL=App.controller.js.map