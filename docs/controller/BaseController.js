sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent"],function(e,t,o){"use strict";return e.extend("com.esweckert.profile.controller.BaseController",{getRouter:function(){return o.getRouterFor(this)},onNavBack:function(){var e,o;e=t.getInstance();o=e.getPreviousHash();if(o!==undefined){window.history.go(-1)}else{this.getRouter().navTo("home",{},true)}},getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getBundleTextByModel:function(e,t,o){return t.getResourceBundle().then(function(t){return t.getText(e,o)})}})});
//# sourceMappingURL=BaseController.js.map