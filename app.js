// Register namespaces and their corresponding paths to Ext.Loader
Ext.Loader.setPath({
    'belajar': 'app/belajar'
});

// Specify a list of classes your application your application needs
Ext.require([
    'Ext.container.Viewport',
    'Ext.layout.container.Border',
    'Ext.menu.Menu',
    'Ext.form.Label',
    'belajar.form.RoleForm',
    'belajar.form.UserForm',
    'belajar.form.EditPasswordForm',
    'belajar.model.PopupModel',
    'belajar.panel.PopupPanel',
    'belajar.panel.CenterPanel',
    'belajar.panel.MainPanel'
]);

// Application's initialization
Ext.onReady(function() {
    var win = Ext.create('Ext.container.Viewport', {
        id: 'mainScreen',
        layout: 'fit',
        plain: true,
        closable: false,
        items: [
            {xtype : 'belajar.panel.MainPanel'}
        ]
    });
    win.show();
});
