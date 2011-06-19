Ext.define('belajar.form.EditPasswordForm', {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.belajar.form.EditPasswordForm',
	id: 'belajar.panel.EditPasswordForm',


    title: 'Edit Password',
    width: 400,
    height: 250,
    padding: 10,
    initComponent: function() {
        this.items = [
            {
                xtype: 'textfield',
                fieldLabel: 'Current Password',
                anchor: '100%'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'New Password',
                anchor: '100%'
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Confirm New Password',
                anchor: '100%'
            },
            {
                xtype: 'button',
                text: 'Submit',
                width: 86
            }
        ];
        belajar.form.EditPasswordForm.superclass.initComponent.call(this);
    }
});
