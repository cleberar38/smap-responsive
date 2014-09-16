L.Control.DrawWFST = L.Control.extend({
    options: {
        
    },

    _lang: {
        "sv": {
            
        },
        "en": {
            
        }
    },
    
    
    _setLang: function(langCode) {
        langCode = langCode || smap.config.langCode;
        if (this._lang) {
            this.lang = this._lang ? this._lang[langCode] : null;
        }
    },

    initialize: function(options) {
        L.setOptions(this, options);
        this._setLang(options.langCode);
    },

    
    onAdd: function(map) {
        var self = this;
        self._container = L.DomUtil.create('div', 'leaflet-control-drawwfst'); // second parameter is class name
        L.DomEvent.disableClickPropagation(self._container);

        self.$container = $(self._container);
		
		wfst_ctrl = {};
		
		self = this;
		
		this.initWFSTControl(map);
        
        return self._container;
    },
    
    initWFSTControl: function(map) {
    	// Initialize the WFST layers 
//	    this.wfst_ctrl.drawnPolyline = L.wfst(null,{
	    //Required
//	      url : 'http://193.17.67.229:80/geoserver/hborg/ows',
//	      featureNS : 'hborg',
//	      featureType : 'wfst_smap_resp',
//	      primaryKeyField: 'id',
//	      geomField: 'geom'
//	        
//	    }).addTo(map);

		wfst_ctrl.drawnMarker = L.wfst(null,{
		    //Required
		    url : 'http://geoserver.smap.se:80/geoserver/hbgws/wfs',
		    featureNS : 'hbgws',
		    featureType : 'wfst_smap_resp',
		    primaryKeyField: 'id',
		    geomField: 'geom'
		    
		}).addTo(map);
    },

    activate: function() {},

    onRemove: function(map) {
        // Do everything "opposite" of onAdd – e.g. unbind events and destroy things
        // map.off('layeradd', this._onLayerAdd).off('layerremove', this._onLayerRemove);
    }
});

/*
 * This code lets us skip "new" before the
 * Class name when instantiating it.
 */
L.control.drawwfst = function (options) {
    return new L.Control.DrawWFST(options);
};