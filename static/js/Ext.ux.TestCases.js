/*
Ext.override(Ext.Component, {
  initState : function(){
    if(Ext.state.Manager){
      var id = this.getStateId();
      if(id){
	var state = Ext.state.Manager.get(id);
	console.log("STATE: ", state);
	if(state){
	  if(this.fireEvent('beforestaterestore', this, state) !== false){
	    this.applyState(Ext.apply({}, state));
	    this.fireEvent('staterestore', this, state);
	  }
	}
      }
    }
  }
});
*/
Ext.ns('Ext.ux');

Ext.ux.TestCases = Ext.extend(Ext.Panel, {

  initComponent:function() {

    Ext.apply(this, {
      layout:"border"
      ,border:false
      ,items:[{
	region:"center"
	,title:"center"
	,ref:"center"
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
	  ,handler:this.clearCenter
	}, {
	  text:"run"
	  ,scope:this
	  ,handler:this.run
	  ,tooltip:"CTRL + ENTER"
	}]
      }]
    });

    Ext.ux.TestCases.superclass.initComponent.call(this);

  }

  ,onTextareaRender:function(textarea) {
    new Ext.KeyMap(textarea.el, [{
      key:[10, 13]
      ,ctrl:true
      ,scope:this
      ,fn:this.run
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
    code = "(function() {"+code+"}).call(this.center)";
    eval(code);
  }

  ,clearCenter:function() {
    this.center.update("");
    this.center.doLayout();
  }

});

Ext.reg('testcases', Ext.ux.TestCases);
