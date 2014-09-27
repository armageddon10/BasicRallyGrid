Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'<a href="https://help.rallydev.com/apps/2.0rc3/doc/">App SDK 2.0rc3 Docs</a>'},
    launch: function() {
        var myStore = Ext.create('Rally.data.wsapi.Store', {
            model: 'User Story',
            autoLoad: true,
            listeners: {
                load: function(myStore, data, success) {
                    console.log("got data", myStore, data, success);
                    var myGrid = Ext.create("Rally.ui.grid.Grid" , {
                       store: myStore,
                       columnCfgs:[
                            "FormattedID", "Name", "ScheduleState"
                           ]
                    });
                    this.add(myGrid);
                    console.log("what is this?", this);
                },
                scope: this
            },
            fetch: ['FormattedID', 'Name', 'ScheduleState']
        });
    }
});
