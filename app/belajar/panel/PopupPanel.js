/*
 * File: MyPanel.ui.js
 * Date: Fri Jun 17 2011 15:35:30 GMT+0700 (WIT)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('belajar.panel.PopupPanel', {
    extend : 'Ext.panel.Panel',
    alias : 'widget.belajar.panel.PopupPanel',
    id: 'belajar.panel.PopupPanel',

    title: 'popup',
    width: 859,
    height: 657,
    layout: 'border',
    initComponent: function() {
        Ext.define('model', {
            extend: 'Ext.data.Model',
            fields: [
            {
                type: 'string',
                name: 'name'
                
            }
            ]
        });

        var category = [
        {
            "name":"Alabama"
        },

        {
            "name":"Alaska"
        },

        {
            "name":"Arizona"
        }
        ];

        var status = [
        {
            "name":"Report Close"
        },

        {
            "name":"Report Open"
        },

        {
            "name":"Report kepet"
        }
        ];

        var propinsi = [
        {
            "name":"DKI Jakarta"
        },

        {
            "name":"Jawa Barat"
        },

        {
            "name":"Jawa Tengah"
        }
        ];

        var lokasi = [
        {
            "name":"Perkantoran"
        },

        {
            "name":"Perumahan"
        },

        {
            "name":"Rumah Sakit"
        }
        ];

        var penelpon = [
        {
            "name":"Perusahaan"
        },

        {
            "name":"Receptionist"
        },

        {
            "name":"Administrator"
        }
        ];

        var klaim = [
        {
            "name":"Transport"
        },

        {
            "name":"Telepon"
        },

        {
            "name":"Listrik"
        }
        ];

        var marketing = [
        {
            "name":"Keuangan"
        },

        {
            "name":"Dokumen"
        },

        {
            "name":"Arsip"
        }
        ];

        var resolusi = [
        {
            "name":"100 MHz"
        },

        {
            "name":"200 MHz"
        },

        {
            "name":"250 MHz"
        }
        ];

        var inhealth = [
        {
            "name":"opname"
        },

        {
            "name":"operasi"
        },

        {
            "name":"donor"
        }
        ];

        var keluhan = [
        {
            "name":"koneksi"
        },

        {
            "name":"sinyal"
        },

        {
            "name":"terputus"
        }
        ];

        var tipe = [
        {
            "name":"jaringan putus"
        },

        {
            "name":"kerusakan jaringan"
        },

        {
            "name":"jaringan terputus"
        }
        ];

        var rincian = [
        {
            "name":"2.000.000"
        },

        {
            "name":"3.000.000"
        },

        {
            "name":"1.000.000"
        }
        ];

        var permintaan = [
        {
            "name":"Jaringan"
        },

        {
            "name":"Koneksi"
        },

        {
            "name":"Penghubung"
        }
        ]

        var categoryStore = new Ext.data.Store({
            model: 'model',
            id : 'categoryStore',
            data : category,
            autoLoad: true
        });

        var statusStore = new Ext.data.Store({
            model: 'model',
            id : 'statusStore',
            data : status,
            autoLoad: true
        });

        var propinsiStore = new Ext.data.Store({
            model: 'model',
            id : 'propinsiStore',
            data : propinsi,
            autoLoad: true
        });

        var lokasiStore = new Ext.data.Store({
            model: 'model',
            id : 'lokasiStore',
            data : lokasi,
            autoLoad: true
        });

        var penelponStore = new Ext.data.Store({
            model: 'model',
            id : 'penelponStore',
            data : penelpon,
            autoLoad: true
        });

        var klaimStore = new Ext.data.Store({
            model: 'model',
            id : 'klaimStore',
            data : klaim,
            autoLoad: true
        });

        var marketingStore = new Ext.data.Store({
            model: 'model',
            id : 'marketingStore',
            data : marketing,
            autoLoad: true
        });

        var resolusiStore = new Ext.data.Store({
            model: 'model',
            id : 'resolusiStore',
            data : resolusi,
            autoLoad: true
        });

        var inhealthStore = new Ext.data.Store({
            model: 'model',
            id : 'inhealthStore',
            data : inhealth,
            autoLoad: true
        });

        var keluhanStore = new Ext.data.Store({
            model: 'model',
            id : 'keluhanStore',
            data : keluhan,
            autoLoad: true
        });

        var tipeStore = new Ext.data.Store({
            model: 'model',
            id : 'tipeStore',
            data : tipe,
            autoLoad: true
        });

        var rincianStore = new Ext.data.Store({
            model: 'model',
            id : 'rincianStore',
            data : rincian,
            autoLoad: true
        });

        var permintaanStore = new Ext.data.Store({
            model: 'model',
            id : 'permintaanStore',
            data : permintaan,
            autoLoad: true
        });

        this.items = [
        {
            xtype: 'fieldset',
            title: 'Incoming Call',
            region: 'west',
            width: 500,
            items: [
            {
                xtype: 'textfield',
                fieldLabel: 'Search',
                anchor: '88%'
            },
            {
                xtype: 'button',
                text: 'Find',
                width: 40,
                margin: '10 0 0 0'

            },
            {
                xtype: 'button',
                text: 'Update',
                width: 73,
                margin: '10 0 0 0'
            },
            {
                xtype: 'grid',
                height: 153,
                width: 419,
                margin: '10 0 0 0',
                store: new Ext.data.Store({
                    model: 'belajar.model.PopupModel',
                    data: [
                    {
                        info: 'Callstatus',
                        value: 'Ringring'
                    },

                    {
                        info: 'Callerid',
                        value: '2129978900'
                    },

                    {
                        info: 'Timestamp',
                        value: '2011-06-17 10:55:54'
                    },

                    {
                        info: 'Nomor Kartu Peserta'
                    },

                    {
                        info: 'Nama Peserta'
                    },

                    {
                        info: 'Tanggal Lahir Peserta'
                    },

                    {
                        info: 'Jenis Kelamin Peserta'
                    },

                    {
                        info: 'Kantor Cabang'
                    },

                    {
                        info: 'Kode Dokter'
                    },

                    {
                        info: 'Nama Dokter'
                    },

                    {
                        info: 'Status Kepesertaan'
                    },

                    {
                        info: 'Kode Perusahaan'
                    },

                    {
                        info: 'PKSNM'
                    },

                    {
                        info: 'Kelas Rawat'
                    },

                    {
                        info: 'Produk'
                    }
                    ]
                }),
                columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'info',
                    header: 'Info',
                    sortable: true,
                    width: 200
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'value',
                    header: 'Value',
                    sortable: true,
                    width: 200,
                    align: 'right'
                }
                ]
            },
            {
                xtype: 'fieldset',
                margin: '10 0 0 0',
                width: 417,
                height: 74,
                items: [
                {
                    xtype: 'textarea',
                    anchor: '100%',
                    fieldLabel: 'Uraian'
                }
                ]
            },
            {
                xtype: 'fieldset',
                margin: '10 0 0 0',
                width: 417,
                height: 76,
                items: [
                {
                    xtype: 'textarea',
                    anchor: '100%',
                    fieldLabel: 'Tindak Lanjut'
                }
                ]
            },
            {
                xtype: 'combo',
                fieldLabel: 'Category',
                store: 'categoryStore',
                displayField: 'name',
                queryMode: 'local',
                margin: '10 0 0 0',
                width: 420
            },
            {
                xtype: 'combo',
                fieldLabel: 'Status',
                store: 'statusStore',
                displayField: 'name',
                queryMode: 'local',
                margin: '5 0 0 0',
                width: 420
            },
            {
                xtype: 'button',
                text: 'Save and Hangup',
                margin: '20 0 0 0'
            },
            {
                xtype: 'button',
                text: 'Save',
                width: 80,
                margin: '20 0 0 0'
            },
            {
                xtype: 'button',
                text: 'Hangup',
                width: 80,
                margin: '20 0 0 0'
            },
            {
                xtype: 'button',
                text: 'Clear',
                width: 80,
                margin: '20 0 0 0'
            },
            {
                xtype: 'button',
                text: 'Close',
                width: 81,
                margin: '20 0 0 0'
            }
            ]
        },
        {
            xtype: 'form',
            region: 'center',
            layout: 'border',
            items: [
            {
                xtype: 'fieldset',
                region: 'center',
                items: [
                {
                    xtype: 'combo',
                    fieldLabel: 'Propinsi',
                    store: 'propinsiStore',
                    displayField: 'name',
                    queryMode: 'local',
                    labelWidth: 160,
                    width: 420
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Lokasi',
                    store: 'lokasiStore',
                    displayField: 'name',
                    queryMode: 'local',
                    margin: '5 0 0 0',
                    labelWidth: 160,
                    width: 420
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Tipe Penelpon',
                    store: 'penelponStore',
                    displayField: 'name',
                    queryMode: 'local',
                    margin: '20 0 0 0',
                    labelWidth: 160,
                    width: 420
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Untuk Panggilan Klaim',
                    store: 'klaimStore',
                    displayField: 'name',
                    queryMode: 'local',
                    margin: '5 0 0 0',
                    labelWidth: 160,
                    width: 420
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Untuk Panggilan Marketing',
                    store: 'marketingStore',
                    displayField: 'name',
                    queryMode: 'local',
                    margin: '5 0 0 0',
                    labelWidth: 160,
                    width: 420
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Resolusi Panggilan Pertama',
                    store: 'resolusiStore',
                    displayField: 'name',
                    queryMode: 'local',
                    margin: '5 0 0 0',
                    labelWidth: 160,
                    width: 420
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'KPP/KPM Inhealth',
                    store: 'inhealthStore',
                    displayField: 'name',
                    queryMode: 'local',
                    margin: '20 0 0 0',
                    labelWidth: 160,
                    width: 420
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Keluhan Keputusan',
                    store: 'keluhanStore',
                    displayField: 'name',
                    queryMode: 'local',
                    margin: '5 0 0 0',
                    labelWidth: 160,
                    width: 420
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Tipe Keluhan',
                    store: 'tipeStore',
                    displayField: 'name',
                    queryMode: 'local',
                    margin: '5 0 0 0',
                    labelWidth: 160,
                    width: 420
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Rincian Kategori',
                    store: 'rincianStore',
                    displayField: 'name',
                    queryMode: 'local',
                    margin: '20 0 0 0',
                    labelWidth: 160,
                    width: 420
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Tipe Permintaan',
                    store: 'permintaanStore',
                    displayField: 'name',
                    queryMode: 'local',
                    margin: '5 0 0 0',
                    labelWidth: 160,
                    width: 420
                }
                ]
            }
            ]
        }
        ];
        belajar.panel.PopupPanel.superclass.initComponent.call(this);
    }
});