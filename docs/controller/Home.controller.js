sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel","sap/ui/Device","com/esweckert/profile/model/formatter"],function(e,t,o,n){"use strict";return e.extend("com.esweckert.profile.controller.Home",{formatter:n,onInit:function(){var e=new t({isPhone:o.system.phone});this.setModel(e,"view");o.media.attachHandler(function(e){this.getModel("view").setProperty("/isPhone",e.name==="Phone")}.bind(this))},onToContact:function(){this.getOwnerComponent().getTargets().display("contact")},onToDataMigration:function(){this.getOwnerComponent().getTargets().display("dataMigration")}})});
//# sourceMappingURL=Home.controller.js.map