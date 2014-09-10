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
        
        
        
        return self._container;
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