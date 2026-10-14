var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_KL_Districts_1 = new ol.format.GeoJSON();
var features_KL_Districts_1 = format_KL_Districts_1.readFeatures(json_KL_Districts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KL_Districts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KL_Districts_1.addFeatures(features_KL_Districts_1);
var lyr_KL_Districts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KL_Districts_1, 
                style: style_KL_Districts_1,
                popuplayertitle: 'KL_Districts',
                interactive: true,
                title: '<img src="styles/legend/KL_Districts_1.png" /> KL_Districts'
            });
var format_Pallakkad_2 = new ol.format.GeoJSON();
var features_Pallakkad_2 = format_Pallakkad_2.readFeatures(json_Pallakkad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pallakkad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pallakkad_2.addFeatures(features_Pallakkad_2);
var lyr_Pallakkad_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pallakkad_2, 
                style: style_Pallakkad_2,
                popuplayertitle: 'Pallakkad',
                interactive: true,
                title: '<img src="styles/legend/Pallakkad_2.png" /> Pallakkad'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_KL_Districts_1.setVisible(true);lyr_Pallakkad_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_KL_Districts_1,lyr_Pallakkad_2];
lyr_KL_Districts_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'VARNAME_2': 'VARNAME_2', });
lyr_Pallakkad_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'VARNAME_2': 'VARNAME_2', });
lyr_KL_Districts_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_Pallakkad_2.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_KL_Districts_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'VARNAME_2': 'no label', });
lyr_Pallakkad_2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'header label - always visible', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'VARNAME_2': 'no label', });
lyr_Pallakkad_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});