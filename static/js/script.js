/*
** script.js for Ext.ux.Playground
**
** Made by Gary van Woerkens
** Contact <gary@chewam.com>
**
** Started on  Fri Feb 19 15:29:27 2010 Gary van Woerkens
** Last update Sat Feb 20 05:44:43 2010 
*/

Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

Ext.QuickTips.init();

Ext.onReady(function() {

  var viewport = new Ext.Viewport({
    layout:"fit"
    ,items:{xtype:"playground"}
  });

});
