var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_StLlorenPositius_1 = new ol.format.GeoJSON();
var features_StLlorenPositius_1 = format_StLlorenPositius_1.readFeatures(json_StLlorenPositius_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StLlorenPositius_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StLlorenPositius_1.addFeatures(features_StLlorenPositius_1);
var lyr_StLlorenPositius_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StLlorenPositius_1, 
                style: style_StLlorenPositius_1,
                interactive: true,
                title: '<img src="styles/legend/StLlorenPositius_1.png" /> St Llorenç Positius'
            });
var format_TorrelavitPositius_2 = new ol.format.GeoJSON();
var features_TorrelavitPositius_2 = format_TorrelavitPositius_2.readFeatures(json_TorrelavitPositius_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TorrelavitPositius_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorrelavitPositius_2.addFeatures(features_TorrelavitPositius_2);
var lyr_TorrelavitPositius_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TorrelavitPositius_2, 
                style: style_TorrelavitPositius_2,
                interactive: true,
                title: '<img src="styles/legend/TorrelavitPositius_2.png" /> Torrelavit Positius'
            });
var format_StPerePositius_3 = new ol.format.GeoJSON();
var features_StPerePositius_3 = format_StPerePositius_3.readFeatures(json_StPerePositius_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StPerePositius_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StPerePositius_3.addFeatures(features_StPerePositius_3);
var lyr_StPerePositius_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StPerePositius_3, 
                style: style_StPerePositius_3,
                interactive: true,
                title: '<img src="styles/legend/StPerePositius_3.png" /> St Pere Positius'
            });
var format_StPerePositiusEncapsulat_4 = new ol.format.GeoJSON();
var features_StPerePositiusEncapsulat_4 = format_StPerePositiusEncapsulat_4.readFeatures(json_StPerePositiusEncapsulat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StPerePositiusEncapsulat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StPerePositiusEncapsulat_4.addFeatures(features_StPerePositiusEncapsulat_4);
var lyr_StPerePositiusEncapsulat_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StPerePositiusEncapsulat_4, 
                style: style_StPerePositiusEncapsulat_4,
                interactive: true,
                title: '<img src="styles/legend/StPerePositiusEncapsulat_4.png" /> St Pere Positius Encapsulat'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_StLlorenPositius_1.setVisible(true);lyr_TorrelavitPositius_2.setVisible(true);lyr_StPerePositius_3.setVisible(true);lyr_StPerePositiusEncapsulat_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_StLlorenPositius_1,lyr_TorrelavitPositius_2,lyr_StPerePositius_3,lyr_StPerePositiusEncapsulat_4];
lyr_StLlorenPositius_1.set('fieldAliases', {'fid': 'fid', 'Coordenades': 'Coordenades', });
lyr_TorrelavitPositius_2.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'heightBelowGround': 'heightBelowGround', 'heightBelowGround_uom': 'heightBelowGround_uom', 'numberOfFloorsBelowGround': 'numberOfFloorsBelowGround', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', 'layer': 'layer', 'path': 'path', });
lyr_StPerePositius_3.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_StPerePositiusEncapsulat_4.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_StLlorenPositius_1.set('fieldImages', {'fid': 'TextEdit', 'Coordenades': '', });
lyr_TorrelavitPositius_2.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'beginLifespanVersion': 'TextEdit', 'conditionOfConstruction': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'horizontalGeometryEstimatedAccuracy': 'TextEdit', 'horizontalGeometryEstimatedAccuracy_uom': 'TextEdit', 'horizontalGeometryReference': 'TextEdit', 'referenceGeometry': 'CheckBox', 'numberOfFloorsAboveGround': 'TextEdit', 'heightBelowGround': 'Range', 'heightBelowGround_uom': 'TextEdit', 'numberOfFloorsBelowGround': 'Range', 'beginning': 'TextEdit', 'end': 'TextEdit', 'endLifespanVersion': 'TextEdit', 'informationSystem': 'TextEdit', 'reference': 'TextEdit', 'currentUse': 'TextEdit', 'numberOfBuildingUnits': 'Range', 'numberOfDwellings': 'Range', 'documentLink': 'TextEdit', 'format': 'TextEdit', 'sourceStatus': 'TextEdit', 'officialAreaReference': 'TextEdit', 'value': 'Range', 'value_uom': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_StPerePositius_3.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'beginLifespanVersion': 'TextEdit', 'conditionOfConstruction': 'TextEdit', 'beginning': 'TextEdit', 'end': 'TextEdit', 'endLifespanVersion': 'TextEdit', 'informationSystem': 'TextEdit', 'reference': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'horizontalGeometryEstimatedAccuracy': 'TextEdit', 'horizontalGeometryEstimatedAccuracy_uom': 'TextEdit', 'horizontalGeometryReference': 'TextEdit', 'referenceGeometry': 'CheckBox', 'currentUse': 'TextEdit', 'numberOfBuildingUnits': 'Range', 'numberOfDwellings': 'Range', 'numberOfFloorsAboveGround': 'TextEdit', 'documentLink': 'TextEdit', 'format': 'TextEdit', 'sourceStatus': 'TextEdit', 'officialAreaReference': 'TextEdit', 'value': 'Range', 'value_uom': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_StPerePositiusEncapsulat_4.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'beginLifespanVersion': 'TextEdit', 'conditionOfConstruction': 'TextEdit', 'beginning': 'TextEdit', 'end': 'TextEdit', 'endLifespanVersion': 'TextEdit', 'informationSystem': 'TextEdit', 'reference': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'horizontalGeometryEstimatedAccuracy': 'TextEdit', 'horizontalGeometryEstimatedAccuracy_uom': 'TextEdit', 'horizontalGeometryReference': 'TextEdit', 'referenceGeometry': 'CheckBox', 'currentUse': 'TextEdit', 'numberOfBuildingUnits': 'Range', 'numberOfDwellings': 'Range', 'numberOfFloorsAboveGround': 'TextEdit', 'documentLink': 'TextEdit', 'format': 'TextEdit', 'sourceStatus': 'TextEdit', 'officialAreaReference': 'TextEdit', 'value': 'Range', 'value_uom': 'TextEdit', });
lyr_StLlorenPositius_1.set('fieldLabels', {'fid': 'no label', 'Coordenades': 'no label', });
lyr_TorrelavitPositius_2.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'numberOfFloorsAboveGround': 'no label', 'heightBelowGround': 'no label', 'heightBelowGround_uom': 'no label', 'numberOfFloorsBelowGround': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_StPerePositius_3.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_StPerePositiusEncapsulat_4.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_StPerePositiusEncapsulat_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});