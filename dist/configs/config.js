
var config = {

		params:{
			center: [13.0, 55.6],
			zoom: 10,
			hash: false
		},
		
		
		ws: {
			"localhost": {
				proxy: "http://localhost/cgi-bin/proxy.py?url="
			},
			"xyz.malmo.se": {
				proxy: "http://xyz.malmo.se/myproxy/proxy.py?url="
			},
			"mobile.smap.se": {
				proxy: "http://mobile.smap.se/smap-mobile/ws/proxy.py?url="
			},
			"91.123.201.52": {
				proxy: "http://91.123.201.52/cgi-bin/proxy.py?url="
			},
			"kartor.helsingborg.se": {
				proxy: "http://kartor.helsingborg.se/cgi-bin/proxy.py?url="
			}
		},
		
		ol: [
			{
					init: "L.GeoJSON.WFS",
					url: "http://xyz.malmo.se:8081/geoserver/wfs",
					options: {
						layerId: "stadsdel",
						displayName: "Stadsdel",
						attribution: "Stadsbyggnadskontoret, Malmö",
						inputCrs: "EPSG:3008",
						reverseAxis: false,
						reverseAxisBbox: true,
						selectable: true,
						popup: '${id}',
						uniqueKey: "gid",
						params: {
							typeName: "malmows:stadsdel",
							version: "1.1.0",
							maxFeatures: 10000,
							format: "text/geojson",
							outputFormat: "json"
						}
						// ,
						// style: {
						// 	color: '#00F',
						// 	fillOpacity: 0.3
						// }
				}
			},
			{
				init: "L.TileLayer.WMS",
				url: "http://193.17.67.229/geos/wms",
				parentTag: "bobyggmiljo",
				options: {
					category: ["Bo bygga & miljö"],
					layerId: "dp_pagaende",
					displayName: "Pågående detaljplaner",
					layers: 'dp_pagaende_poly',
					format: 'image/png',
					featureType: "polygon",
					selectable: true,
					transparent: true,
					attribution: "@ Helsingborg stad",
					zIndex: 9
				}
			},

			{
				init: "L.TileLayer.WMS",
				url: "http://193.17.67.229/geos/wms",
				parentTag: "bobyggmiljo",
				options: {
					category: ["Bo bygga & miljö"],
					layerId: "dp_gallande",
					displayName: "Gällande detaljplaner",
					layers: 'dp_gallande_poly',
					format: 'image/png',
					featureType: "polygon",
					selectable: true,
					transparent: true,
					attribution: "@ Helsingborg stad",
					zIndex: 9
					
				}
			},

			{
				init: "L.TileLayer.WMS",
				url: "http://193.17.67.229/geos/wms",
				parentTag: "oversiktsplan",
				options: {
					category: ["Översiktsplan 2010"],
					layerId: "fastighet",
					displayName: "Fastighet",
					layers: 'fastighet_polygon',
					format: 'image/png',
					featureType: "polygon",
					selectable: true,
					transparent: true,
					attribution: "@ Helsingborg stad",
					zIndex: 5
				}
			}
		
//			{
//				init: "L.TileLayer.WMS",
//				url: "http://opendata-view.smhi.se/klim-stat_temperatur/wms",
//				options: {
//					layerId: "gangstig",
//					displayName: "Gångstig",
//					layers: 'arsmedeltemperatur',
//					format: 'image/png',
//					selectable: true,
//					transparent: true,
//					attribution: "@ Malmö Stadsbyggnadskontor"
//				}
//			},
//			{
//				init: "L.TileLayer.WMS",
//				url: "http://xyz.malmo.se:8081/geoserver/gwc/service/wms",
//				options: {
//					layerId: "test",
//					displayName: "Test",
//					layers: 'malmows:smap-mobile-bakgrundskarta',
//					format: 'image/png',
//					selectable: true,
//					transparent: true,
//					attribution: "@ Malmö Stadsbyggnadskontor",
//					popup: "<h3>${_displayName}</h3><p>Beläggning: ${belaggning}</p><p>${shape_leng}</p>"
//				}
//			},
//			{
//				init: "L.TileLayer.WMS",
//				url: "http://geoserver.smap.se/geoserver/wms",
//				options: {
//					layerId: "cykelvag",
//					displayName: "Cykelväg",
//					layers: 'malmows:GK_CYKELVAG_L',
//					format: 'image/png',
//					selectable: true,
//					transparent: true,
//					attribution: "@ Malmö Stadsbyggnadskontor",
//					popup: "<h3>${_displayName}</h3><p>Typ: ${typ}</p><p>Geom: ${geom}</p>"
//				}
//			},
//			{
//					init: "L.GeoJSON.WFS",
//					url: "http://193.17.67.229/cgi-bin/externt/kkarta/qgis_mapserv.fcgi",
//					options: {
//						layerId: "wfstest_qgis_server",
//						displayName: "Elnät Kristianstad",
//						attribution: "Kristianstads WFS",
//						inputCrs: "EPSG:3008",
//						reverseAxis: false,
//						reverseAxisBbox: false,
//						xhrType: "GET",
//						selectable: true,
//						popup: 'agare: ${agare}',
//						uniqueKey: "id",
//						params: {
//							version: "1.0.0"
//							typeName: "c4elnat",
//							format: "text/xml",
//							srs: "EPSG:3008",
//							maxFeatures: 10000,
//							outputFormat: "GeoJSON"
//						},
//						style: {
//							weight: 2,
//							color: '#F00',
//							dashArray: '',
//							opacity: .5
//						}
//					}
//				},
//
//				{
//					init: "L.GeoJSON.WFS",
//					url: "http://localhost/cgi-bin/cultMap/getGeoData.py",
//					options: {
//						layerId: "Kulturlagret",
//						displayName: "Kulturlagret",
//						attribution: "Stadsbyggnadskontoret, Malmö",
//						inputCrs: "EPSG:4326",
//						reverseAxis: false,
//						reverseAxisBbox: false,
//						selectable: true,
//						popup: '<h4>${txt_name}</h4>',
//						uniqueKey: "id",
//						params: {
//							q: "hembygdsgard"
				  // 		typeName: null,
							// version: null,
							// maxFeatures: 10000,
							// format: "text/geojson",
							// outputFormat: "json"
//						},
//						style: {
//							radius: 8,
//							fillColor: "#ff7800",
//							color: "#000",
//							weight: 1,
//							opacity: 1,
//							fillOpacity: 0.8
//						},
//						selectStyle: {
//							radius: 8,
//							fillColor: "#0FF",
//							color: "#0FF",
//							weight: 1,
//							opacity: 1,
//							fillOpacity: 0.5
//						}
//					}
//				},
				,
				{
					init: "L.GeoJSON.WFS",
					url: "http://xyz.malmo.se:8081/geoserver/wfs",
					options: {
						layerId: "busstation",
						displayName: "Busstationer",
						attribution: "Stadsbyggnadskontoret, Malmö",
						inputCrs: "EPSG:3008",
						reverseAxis: false,
						reverseAxisBbox: true,
						selectable: true,
						popup: '${id}',
						uniqueKey: "id",
						params: {
							typeName: "malmows:busstation",
							version: "1.1.0",
							maxFeatures: 10000,
							format: "text/geojson",
							outputFormat: "json"
						}
						// ,
						// style: {
							// radius: 8,
							// fillColor: "#ff7800",
							// color: "#000",
							// weight: 1,
							// opacity: 1,
							// fillOpacity: 0.8
						// },
						// selectStyle: {
						// 	radius: 8,
						// 	fillColor: "#0FF",
						// 	color: "#0FF",
						// 	weight: 1,
						// 	opacity: 1,
						// 	fillOpacity: 0.5
						// }
					}
				}
//				{
//					init: "L.GeoJSON.WFS",
//					url: "http://xyz.malmo.se:8081/geoserver/wfs",
//					options: {
//						layerId: "stadsdel",
//						displayName: "Stadsdel",
//						attribution: "Stadsbyggnadskontoret, Malmö",
//						inputCrs: "EPSG:3008",
//						reverseAxis: false,
//						reverseAxisBbox: true,
//						selectable: true,
//						popup: '${id}',
//						uniqueKey: "gid",
//						params: {
//							typeName: "malmows:stadsdel",
//							version: "1.1.0",
//							maxFeatures: 10000,
//							format: "text/geojson",
//							outputFormat: "json"
//						},
						// style: {
						//	color: '#00F',
						//	fillOpacity: 0.3
						// }
//					},
//				},
//			{
//				init: "L.GeoJSON.WFS",
//				url: "http://geoserver.smap.se/geoserver/wfs",
//				options: {
//					layerId: "malmows_STADSDEL_L",
//					displayName: "Stadsdel Linje",
//					attribution: "Stadsbyggnadskontoret, Malmö",
//					inputCrs: "EPSG:3008",
//					reverseAxis: false,
//					reverseAxisBbox: true,
//					selectable: true,
//					popup: 'The FID: ${fid}',
//					uniqueKey: null,
//					params: {
//						typeName: "malmows:STADSDEL_L",
//						version: "1.1.0",
//						maxFeatures: 10000,
//						format: "text/geojson",
//						outputFormat: "json"
//					},
//					style: {
//						weight: 6,
//						color: '#F00',
//						dashArray: '',
//						opacity: 0.1
//					},
//					selectStyle: {
//						weight: 5,
//						color: '#00FF00',
//						opacity: 1
//					}
//				}
//			},
			//  {
			//	init: "L.GeoJSON.WFS",
			//	url: "http://xyz.malmo.se:8081/geoserver/wfs",
			//	options: {
			//		layerId: "stadsdel3d",
			//		displayName: "Stadsdel 3D",
			//		attribution: "Stadsbyggnadskontoret, Malmö",
			//		inputCrs: "EPSG:4326",
			//		reverseAxis: false,
			//		reverseAxisBbox: true,
			//		selectable: true,
			//		popup: 'The ID: ${id}',
			//		uniqueKey: "id",
			//		params: {
			  // 		typeName: "malmows:malmo_kvarter_3d",
						// version: "1.1.0",
						// maxFeatures: 10000,
						// format: "text/geojson",
						// outputFormat: "json"
			// 		}
			// 	}
			//  },
//			{
//				 init: "L.GeoJSON.WFS",
//				 url: "http://xyz.malmo.se:8081/geoserver/wfs",
//				 options: {
//					 layerId: "vhamnen_pt",
//					 displayName: "Punkter av intresse",
//					 params: {
//						typeName: "malmows:POI_VHAMN_PT"
//					 },
//					 attribution: "Stadsbyggnadskontoret, Malmö",
//					 inputCrs: "EPSG:4326",
//					 uniqueKey: "gid",
//					 reverseAxis: false,
//					 reverseAxisBbox: true,
//					 popup: 
//						'<div>${function(p) {'+
//  							'var out = "";'+
//  							'var style="margin-right:.3em;";'+
//  							'if (p.urlvideo) {'+
//  								'	out += \'<span style="\'+style+\'" class="fa fa-film fa-2x"></span>\';'+
//  								'}'+
//  							'if (p.urlsound) {'+
//  							'	out += \'<span style="\'+style+\'" class="fa fa-volume-up fa-2x"></span>\';'+
//  							'}'+
//  						'if (p.picture && p.picture.split(",").length > 1) {'+
//  						'	out += \'<span style="\'+style+\'" class="fa fa-picture-o fa-2x"></span>\';'+
//  						'}'+
//  					'return out;'+
//						'}'+
//					'}</div>'+
//					'<h4>${id}: ${namn} </h4><img style="width:200px;max-height:200px;" src="http://maja-k.com/promenad/vh/popup/${picture}"></img>'
//					}
//				},
//			{
//				 init: "L.GeoJSON.WFS",
//				 url: "http://geoserver.smap.se/geoserver/wfs",
//				 options: {
//					 layerId: "malmows_kvarter",
//					 displayName: "Kvarter",
//					 attribution: "Stadsbyggnadskontoret, Malmö",
//					 inputCrs: "EPSG:3008",
//					 reverseAxis: false,
//					 reverseAxisBbox: true,
//					 selectable: true,
//					 popup: 'The FID: ${fid}',
//					 uniqueKey: "easting;northing",
//					 params: {
//							typeName: "malmows:SUM_KVARTER_P",
//							version: "1.1.0",
//							maxFeatures: 10000,
//							format: "text/geojson",
//							outputFormat: "json"
//						},
//					 hoverColor: '#FF0',
//					 style: {
//						 weight: 2,
//						 color: '#F00',
//						 dashArray: '',
//						 fillOpacity: 0.5
//					 }
//				 }
//			},
//			{
//				init: "L.GeoJSON.Custom",
//				url: 'http://www.vakant.nu/gis_json.aspx?',
//				options: {
//					layerId: "vakant_mark",
//					displayName: "Vakant Mark",
//					params: {
//						mId : "1290",
//						type : "Mark"
//					},
//					selectable: true,
//					popup: 'Owner: ${owner_name}',
//					style: {
//						radius: 8,
//						fillColor: "#ff7800",
//						color: "#f00",
//						weight: 1,
//						opacity: 1,
//						fillOpacity: 0.8
//					}
//				}
//			}
//			,
//			{
//				 init: "L.GeoJSON.WFS",
//				 url: "http://geoserver.smap.se/geoserver/wfs",
//				 options: {
//					 layerId: "intressepunkter",
//					 displayName: "Intressepunkter",
//					 featureType: "sandboxws:regispt",
//					 attribution: "Stadsbyggnadskontoret, Malmö",
//					 inputCrs: "EPSG:3008",
//					 reverseAxis: false,
//					 popup: '<h1>${namn}</h1><p>En popup med en bild</p><img style="width:200px;max-height:200px;" src="${picture}"></img>',
//					 bigPopup: {
//						 headerHtml: "${namn}",
//						 srcVideo: '<video controls="controls" autoplay width="240" height="135">' +
//							 			'<source src="http://geoserver.smap.se/~cleber/regis1330/video/video_061.m4v" type="video/mp4" />' +
//							 			'<source src="http://geoserver.smap.se/~cleber/regis1330/video/video_061.webm" type="video/webm" />' +
//							 			'<source src="http://geoserver.smap.se/~cleber/regis1330/video/video_061.ogg" type="video/ogg" />' +
//						 			'</video>',
//						 	srcImage: '${pictures}',
//						 	srcAudio: '${video}'
//					}
//				}
//			}
			],
			
		bl: [
		{
			init: "L.TileLayer",
			url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			options: {
				layerId: "osm",
				displayName: "OSM",
				attribution: '<span>© OpenStreetMap contributors</span>&nbsp;|&nbsp;<span>Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png"></span>',
				maxZoom: 18
			}
		}
//		,
//		{
//			init: "L.TileLayer",
//			url: 'http://xyz.malmo.se/data_e/Tilecache/malmo/malmo_leaflet_cache_EPSG900913/{z}/{x}/{y}.jpeg',
//			options: {
//				layerId: "malmotile",
//				displayName: "Malmö karta",
//				attribution: "© Malmö Stadsbyggnadskontor",
//				minZoom: 6,
//				maxZoom: 18,
//				tms: true
//			}
//		},
//		{
//			init: "L.TileLayer.WMS",
//			url: 'http://xyz.malmo.se/geoserver/gwc/service/wms',  // gwc/service/
//			options: {
//				layerId: "wms-op",
//				displayName: "WMS-op",
//				layers: "malmows:smap-mobile-bakgrundskarta",
//				format: 'image/jpeg',
//				subdomains: ["xyz"],
//				transparent: true,
//				minZoom: 6,
//				maxZoom: 18,
//				tiled: true
//			}
//		},		
//		{
//			init: "L.TileLayer.WMS",
//			url: 'http://xyz.malmo.se/geoserver/gwc/service/wms',  // gwc/service/
//			options: {
//				layerId: "wms-topo",
//				displayName: "WMS-Topo (OBS! endast för test)",
//				layers: "malmows:smap-mobile-bakgrundskarta-topo",
//				format: 'image/jpeg',
//				subdomains: ["xyz"],
//				transparent: true,
//				minZoom: 6,
//				maxZoom: 18,
//				tiled: true
//			}
//		},
//		{
//			init: "L.TileLayer.WMS",
//			url: 'http://geoserver.smap.se/geoserver/gwc/service/wms',  // gwc/service/
//			options: {
//				layerId: "wms",
//				displayName: "WMS",
//				layers: "malmows:MALMO_SMA_DELOMR_P_3857_TEST2",
//				format: 'image/png',
//				subdomains: ["xyz"],
//				transparent: true,
//				minZoom: 1,
//				maxZoom: 18,
//				tiled: true
//			}
//		}
		],
		
		plugins: [
				  {
					  init: "L.Control.Scale",
					  options: {
						  imperial: false
					  }
				  },
				  {
					  init: "L.Control.LayerSwitcher",
					  options: {}
				  },
//				  {
//				 	  init: "L.Control.LayerSwitcherResponsive",
//				 	  options: {}
//				  },
				  {
					  init: "L.Control.Geolocate",
					  options: {}
				  },
				  {
					  init: "L.Control.SelectWMS",
					  options: {
						  buffer: 5
					  }
				  },
				  {
					  init: "L.Control.SelectVector",
					  options: {
						  buffer: 5
					  }
				  },
//				  {
//					  init: "L.Control.MyPlugin",
//					  options: {
//					 		position: "bottomright"
//					  }
//				  },
//				  {
//					  init: "L.Control.ShareTweet",
//					  options: {}
//				  },
//				  {
//					  init: "L.Control.SharePosition",
//					  options: {}
//				  },
				  {
					  init: "L.Control.Search",
					  options: {}
				  },
					{
						init: "L.Control.Zoombar",
						options: {}
					},
				  // {
			//		  init: "L.Control.ThreeD",
			//		  options: {
					 		
				  //		}
			//	  }
					{
						init: "L.Control.ShareLink",
						options: {
							addToMenu: false
						}
					}
					,
					// {
					//	init: "L.Control.Menu",
					//	options: {}
					// },
					{
						init : "L.Control.RedirectClick",		
						option: {
							addToMenu: false,
							url: "http://xyz.malmo.se/urbex/index.htm?p=true&xy=${x};${y}"
						}
					},
					{
 					  init: "L.Control.Info",
 					  options: {}
 				 	},
					{
 					  init: "L.Control.Print",
 					  options: {}
 				 	},
 				 	{
					  init: "L.Control.Opacity",
					  options: {
					 		addToMenu: false,
					 		savePrefBox: true
					  }
				  },
				  {
					  init: "L.Control.ToolHandler",
					  options: {
					 		addToMenu: false
					  }
				  },
				  {
					  init: "L.Control.Add2HomeScreen",
					  options: {}
				  },
				  {
				      init: "L.Control.FullScreen",
				  	  options: {position: 'topright'}
				  },
				  {
				      init: "L.Control.DrawSmap",
				  	  options: {}
				  },
				  {
				      init: "L.Control.DrawWFST",
				  	  options: {}
				  }
	  ]
};
