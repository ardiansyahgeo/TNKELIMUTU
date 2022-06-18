var size = 0;
var placement = 'point';
function categories_PenutupLahan_12(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Badan Jalan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,26,28,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bangunan':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(15,32,15,0.5333333333333333)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Danau':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(166,206,227,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Gulma':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(137,97,49,0.8313725490196079)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Semak Belukar':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,255,111,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tanah Terbuka':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,127,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vegetasi Kerapatan Rendah':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(85,255,23,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vegetasi Kerapatan Sedang':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(25,175,25,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vegetasi Kerapatan Tinggi':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,110,26,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_PenutupLahan_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("landcover");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_PenutupLahan_12(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
