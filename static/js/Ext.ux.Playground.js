/*
** Ext.ux.Playground.js for Ext.ux.Playground
**
** Made by Gary van Woerkens
** Contact <gary@chewam.com>
**
** Started on  Fri Feb 19 15:28:18 2010 Gary van Woerkens
** Last update Fri Feb 19 15:33:05 2010 Gary van Woerkens
*/

Ext.ns('Ext.ux');

Ext.ux.Playground = Ext.extend(Ext.Panel, {

  initComponent:function() {

    Ext.apply(this, {
      layout:"border"
      ,border:false
      ,items:[{
	region:"center"
	,title:"Playground"
	,ref:"playground"
	,autoScroll:true
	,bodyCssClass:"x-panel-playground"
      }, {
	region:"west"
	,title:"west"
	,layout:"fit"
	,width:300
	,split:true
	,cmargins:"4"
	,collapsible:true
	,items:[{
	  xtype:"textarea"
	  ,ref:"../textarea"
	  ,stateful:true
	  ,stateId:"textarea"
	  ,stateEvents:["change"]
	  ,getState:this.getTextareaState
	  ,applyState:this.applyTextareaState
	  ,listeners:{scope:this, afterrender:this.onTextareaRender}
	}]
	,buttons:[{
	  text:"clear"
	  ,scope:this
	  ,handler:this.clear
	  ,tooltip:"CTRL + SHIFT + ENTER"
	}, {
	  text:"run"
	  ,scope:this
	  ,handler:this.run
	  ,tooltip:"CTRL + ENTER"
	}]
      }]
    });

    Ext.ux.Playground.superclass.initComponent.call(this);

  }

  ,onTextareaRender:function(textarea) {
    new Ext.KeyMap(textarea.el, [{
      key:[10, 13]
      ,ctrl:true
      ,shift:false
      ,scope:this
      ,fn:this.run
    }]);
    new Ext.KeyMap(textarea.el, [{
      key:[10, 13]
      ,ctrl:true
      ,shift:true
      ,scope:this
      ,fn:this.clear
    }]);
  }

  ,getTextareaState:function() {
    var value = Ext.util.Format.nl2br(this.getValue());
    return {value:value};
  }

  ,applyTextareaState:function(state) {
    if (state && state.value) {
      var reg = RegExp("<br/>", "gi");
      var value = state.value.replace(reg, "\n");
      Ext.apply(this, {value:value});
    }
  }

  ,run:function() {
    var code = this.textarea.getValue();
    code = "(function() {"+code+"}).call(this.playground)";
    eval(code);
  }

  ,clear:function() {
    this.playground.update("");
    this.playground.doLayout();
  }

});

Ext.reg('playground', Ext.ux.Playground);
