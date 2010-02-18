Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
Ext.QuickTips.init();

Ext.onReady(function() {

  var viewport = new Ext.Viewport({
    layout:"fit"
    ,items:{xtype:"testcases"}
  });

});
