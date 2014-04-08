L.Control.BrittasModule = L.Control.extend({
	options: {
		position: 'bottomright' // just an example
	},

	_lang: {
		"sv": {
			exampleLabel: "Ett exempel"
		},
		"en": {
			exampleLabel: "An example"
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
		this.map = map;

		this._container = L.DomUtil.create('div', 'leaflet-control-brittasModule'); // second parameter is class name
		L.DomEvent.disableClickPropagation(this._container);

		this.$container = $(this._container);

        //alert("hi");
        this._createButtonZoomIn();
        this._createButtonZoomUt();

		return this._container;
	},

    _createButtonZoomIn: function() {
        var btn = $('<button class="btn btn-default"><span class="fa fa-bars fa-2x"></span></button>');
        this.$container.append(btn);
        // -- TODO: Do something when clicking the button --
        var self = this;
        btn.on("click", function() {
            self.map.zoomIn();
        });
    },

    _createButtonZoomUt: function() {
        var btn = $('<button class="btn btn-default"><span class="fa fa-bars fa-2x"></span></button>');
        this.$container.append(btn);
        // -- TODO: Do something when clicking the button --
        var self = this;
        btn.on("click", function() {
            self.map.zoomOut();
        });
    },




    onRemove: function(map) {
		// Do everything "opposite" of onAdd – e.g. unbind events and destroy things
		// map.off('layeradd', this._onLayerAdd).off('layerremove', this._onLayerRemove);
	}
});

/*
 * This code lets us skip "new" before the
 * Class name when instantiating it.
 */
L.control.brittasModule = function (options) {
	return new L.Control.BrittasModule(options);
};