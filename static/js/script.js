/*
** script.js for Ext.ux.Playground
**
** Made by Gary van Woerkens
** Contact <gary@chewam.com>
**
** Started on  Fri Feb 19 15:29:27 2010 Gary van Woerkens
** Last update Fri Feb 19 15:29:42 2010 Gary van Woerkens
*/

Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

Ext.QuickTips.init();

Ext.onReady(function() {

  var viewport = new Ext.Viewport({
    layout:"fit"
    ,items:{xtype:"testcases"}
  });

});
