var wms_layers = [];


        var lyr_Maps_0 = new ol.layer.Tile({
            'title': 'Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_HYBRID_1 = new ol.layer.Tile({
            'title': 'HYBRID',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CitraSatelit_2 = new ol.layer.Tile({
            'title': 'Citra Satelit',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_TOPOGRAFI_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "TOPOGRAFI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TOPOGRAFI_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13551485.130488, -983905.264250, 13562607.059811, -974485.307905]
                            })
                        });
var format_BATASRESORT_4 = new ol.format.GeoJSON();
var features_BATASRESORT_4 = format_BATASRESORT_4.readFeatures(json_BATASRESORT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASRESORT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASRESORT_4.addFeatures(features_BATASRESORT_4);
var lyr_BATASRESORT_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASRESORT_4, 
                style: style_BATASRESORT_4,
                interactive: true,
    title: 'BATAS RESORT<br />\
    <img src="styles/legend/BATASRESORT_4_0.png" /> Detusoko<br />\
    <img src="styles/legend/BATASRESORT_4_1.png" /> Kelimutu<br />\
    <img src="styles/legend/BATASRESORT_4_2.png" /> Moni<br />\
    <img src="styles/legend/BATASRESORT_4_3.png" /> Ndona<br />\
    <img src="styles/legend/BATASRESORT_4_4.png" /> Ndona Timur<br />\
    <img src="styles/legend/BATASRESORT_4_5.png" /> Niowula<br />\
    <img src="styles/legend/BATASRESORT_4_6.png" /> Wolojita<br />'
        });
var format_batas_kawasan_5 = new ol.format.GeoJSON();
var features_batas_kawasan_5 = format_batas_kawasan_5.readFeatures(json_batas_kawasan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_kawasan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_kawasan_5.addFeatures(features_batas_kawasan_5);
var lyr_batas_kawasan_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_kawasan_5, 
                style: style_batas_kawasan_5,
                interactive: true,
                title: '<img src="styles/legend/batas_kawasan_5.png" /> batas_kawasan'
            });
var format_SISTEMGRIDDANDESAPENYANGGA_6 = new ol.format.GeoJSON();
var features_SISTEMGRIDDANDESAPENYANGGA_6 = format_SISTEMGRIDDANDESAPENYANGGA_6.readFeatures(json_SISTEMGRIDDANDESAPENYANGGA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SISTEMGRIDDANDESAPENYANGGA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SISTEMGRIDDANDESAPENYANGGA_6.addFeatures(features_SISTEMGRIDDANDESAPENYANGGA_6);
var lyr_SISTEMGRIDDANDESAPENYANGGA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SISTEMGRIDDANDESAPENYANGGA_6, 
                style: style_SISTEMGRIDDANDESAPENYANGGA_6,
                interactive: true,
    title: 'SISTEM GRID DAN DESA PENYANGGA<br />\
    <img src="styles/legend/SISTEMGRIDDANDESAPENYANGGA_6_0.png" /> Detusoko<br />\
    <img src="styles/legend/SISTEMGRIDDANDESAPENYANGGA_6_1.png" /> Kelimutu<br />\
    <img src="styles/legend/SISTEMGRIDDANDESAPENYANGGA_6_2.png" /> Moni<br />\
    <img src="styles/legend/SISTEMGRIDDANDESAPENYANGGA_6_3.png" /> Ndona<br />\
    <img src="styles/legend/SISTEMGRIDDANDESAPENYANGGA_6_4.png" /> Ndona Timur<br />\
    <img src="styles/legend/SISTEMGRIDDANDESAPENYANGGA_6_5.png" /> Niowula<br />\
    <img src="styles/legend/SISTEMGRIDDANDESAPENYANGGA_6_6.png" /> Wolojita<br />'
        });
var format_RawanBencanaGunungApi_7 = new ol.format.GeoJSON();
var features_RawanBencanaGunungApi_7 = format_RawanBencanaGunungApi_7.readFeatures(json_RawanBencanaGunungApi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanBencanaGunungApi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanBencanaGunungApi_7.addFeatures(features_RawanBencanaGunungApi_7);
var lyr_RawanBencanaGunungApi_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RawanBencanaGunungApi_7, 
                style: style_RawanBencanaGunungApi_7,
                interactive: true,
    title: 'Rawan Bencana Gunung Api<br />\
    <img src="styles/legend/RawanBencanaGunungApi_7_0.png" /> RAWAN<br />\
    <img src="styles/legend/RawanBencanaGunungApi_7_1.png" /> TIDAK RAWAN<br />'
        });
var format_Litologi_8 = new ol.format.GeoJSON();
var features_Litologi_8 = format_Litologi_8.readFeatures(json_Litologi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Litologi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Litologi_8.addFeatures(features_Litologi_8);
var lyr_Litologi_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Litologi_8, 
                style: style_Litologi_8,
                interactive: true,
    title: 'Litologi <br />\
    <img src="styles/legend/Litologi_8_0.png" /> Hasil Gunung Api Muda<br />'
        });
var format_RawanGerakanTanah_9 = new ol.format.GeoJSON();
var features_RawanGerakanTanah_9 = format_RawanGerakanTanah_9.readFeatures(json_RawanGerakanTanah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanGerakanTanah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanGerakanTanah_9.addFeatures(features_RawanGerakanTanah_9);
var lyr_RawanGerakanTanah_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RawanGerakanTanah_9, 
                style: style_RawanGerakanTanah_9,
                interactive: true,
    title: 'Rawan Gerakan Tanah<br />\
    <img src="styles/legend/RawanGerakanTanah_9_0.png" /> Menengah<br />\
    <img src="styles/legend/RawanGerakanTanah_9_1.png" /> Tinggi<br />'
        });
var format_JenisTanah_10 = new ol.format.GeoJSON();
var features_JenisTanah_10 = format_JenisTanah_10.readFeatures(json_JenisTanah_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JenisTanah_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JenisTanah_10.addFeatures(features_JenisTanah_10);
var lyr_JenisTanah_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JenisTanah_10, 
                style: style_JenisTanah_10,
                interactive: true,
    title: 'Jenis Tanah<br />\
    <img src="styles/legend/JenisTanah_10_0.png" /> Haplustepts<br />\
    <img src="styles/legend/JenisTanah_10_1.png" /> Haplustolls<br />'
        });
var format_WilayahKetinggian_11 = new ol.format.GeoJSON();
var features_WilayahKetinggian_11 = format_WilayahKetinggian_11.readFeatures(json_WilayahKetinggian_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahKetinggian_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahKetinggian_11.addFeatures(features_WilayahKetinggian_11);
var lyr_WilayahKetinggian_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilayahKetinggian_11, 
                style: style_WilayahKetinggian_11,
                interactive: true,
    title: 'Wilayah Ketinggian<br />\
    <img src="styles/legend/WilayahKetinggian_11_0.png" /> 937 - 1000 m dpl<br />\
    <img src="styles/legend/WilayahKetinggian_11_1.png" /> 1000 - 1250 m dpl<br />\
    <img src="styles/legend/WilayahKetinggian_11_2.png" /> 1250 - 1500 m dpl<br />\
    <img src="styles/legend/WilayahKetinggian_11_3.png" /> 1500 - 1700 m dpl<br />'
        });
var format_PenutupLahan_12 = new ol.format.GeoJSON();
var features_PenutupLahan_12 = format_PenutupLahan_12.readFeatures(json_PenutupLahan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenutupLahan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenutupLahan_12.addFeatures(features_PenutupLahan_12);
var lyr_PenutupLahan_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PenutupLahan_12, 
                style: style_PenutupLahan_12,
                interactive: true,
    title: 'Penutup Lahan<br />\
    <img src="styles/legend/PenutupLahan_12_0.png" /> Badan Jalan<br />\
    <img src="styles/legend/PenutupLahan_12_1.png" /> Bangunan<br />\
    <img src="styles/legend/PenutupLahan_12_2.png" /> Danau<br />\
    <img src="styles/legend/PenutupLahan_12_3.png" /> Gulma<br />\
    <img src="styles/legend/PenutupLahan_12_4.png" /> Semak Belukar<br />\
    <img src="styles/legend/PenutupLahan_12_5.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/PenutupLahan_12_6.png" /> Vegetasi Kerapatan Rendah<br />\
    <img src="styles/legend/PenutupLahan_12_7.png" /> Vegetasi Kerapatan Sedang<br />\
    <img src="styles/legend/PenutupLahan_12_8.png" /> Vegetasi Kerapatan Tinggi<br />'
        });
var lyr_IndeksVegetasi_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "Indeks Vegetasi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IndeksVegetasi_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13551484.520190, -983944.922084, 13562624.520190, -974464.278834]
                            })
                        });
var format_Zonasi_14 = new ol.format.GeoJSON();
var features_Zonasi_14 = format_Zonasi_14.readFeatures(json_Zonasi_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonasi_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonasi_14.addFeatures(features_Zonasi_14);
var lyr_Zonasi_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonasi_14, 
                style: style_Zonasi_14,
                interactive: true,
    title: 'Zonasi<br />\
    <img src="styles/legend/Zonasi_14_0.png" /> Zona Budaya<br />\
    <img src="styles/legend/Zonasi_14_1.png" /> Zona Inti<br />\
    <img src="styles/legend/Zonasi_14_2.png" /> Zona Khusus<br />\
    <img src="styles/legend/Zonasi_14_3.png" /> Zona Pemanfaatan<br />\
    <img src="styles/legend/Zonasi_14_4.png" /> Zona Rehabilitasi<br />\
    <img src="styles/legend/Zonasi_14_5.png" /> Zona Rimba<br />\
    <img src="styles/legend/Zonasi_14_6.png" /> Zona Tradisional<br />'
        });
var format_Lereng_15 = new ol.format.GeoJSON();
var features_Lereng_15 = format_Lereng_15.readFeatures(json_Lereng_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lereng_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lereng_15.addFeatures(features_Lereng_15);
var lyr_Lereng_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lereng_15, 
                style: style_Lereng_15,
                interactive: true,
    title: 'Lereng<br />\
    <img src="styles/legend/Lereng_15_0.png" /> 0-2%<br />\
    <img src="styles/legend/Lereng_15_1.png" /> 2-8%<br />\
    <img src="styles/legend/Lereng_15_2.png" /> 8-15%<br />\
    <img src="styles/legend/Lereng_15_3.png" /> 15-25%<br />\
    <img src="styles/legend/Lereng_15_4.png" /> 25-40%<br />\
    <img src="styles/legend/Lereng_15_5.png" /> >40%<br />'
        });
var format_DaerahTangkapanAir_16 = new ol.format.GeoJSON();
var features_DaerahTangkapanAir_16 = format_DaerahTangkapanAir_16.readFeatures(json_DaerahTangkapanAir_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DaerahTangkapanAir_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaerahTangkapanAir_16.addFeatures(features_DaerahTangkapanAir_16);
var lyr_DaerahTangkapanAir_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DaerahTangkapanAir_16, 
                style: style_DaerahTangkapanAir_16,
                interactive: true,
                title: '<img src="styles/legend/DaerahTangkapanAir_16.png" /> Daerah Tangkapan Air'
            });
var format_KantorResortdanKantorSeksi_17 = new ol.format.GeoJSON();
var features_KantorResortdanKantorSeksi_17 = format_KantorResortdanKantorSeksi_17.readFeatures(json_KantorResortdanKantorSeksi_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorResortdanKantorSeksi_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorResortdanKantorSeksi_17.addFeatures(features_KantorResortdanKantorSeksi_17);
var lyr_KantorResortdanKantorSeksi_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KantorResortdanKantorSeksi_17, 
                style: style_KantorResortdanKantorSeksi_17,
                interactive: true,
    title: 'Kantor Resort dan Kantor Seksi<br />\
    <img src="styles/legend/KantorResortdanKantorSeksi_17_0.png" /> Kantor Resort<br />\
    <img src="styles/legend/KantorResortdanKantorSeksi_17_1.png" /> Kantor Seksi<br />'
        });
var format_danau_18 = new ol.format.GeoJSON();
var features_danau_18 = format_danau_18.readFeatures(json_danau_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_danau_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_danau_18.addFeatures(features_danau_18);
var lyr_danau_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_danau_18, 
                style: style_danau_18,
                interactive: true,
                title: '<img src="styles/legend/danau_18.png" /> danau'
            });
var format_Lokasiviewpemandangan_19 = new ol.format.GeoJSON();
var features_Lokasiviewpemandangan_19 = format_Lokasiviewpemandangan_19.readFeatures(json_Lokasiviewpemandangan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokasiviewpemandangan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokasiviewpemandangan_19.addFeatures(features_Lokasiviewpemandangan_19);
var lyr_Lokasiviewpemandangan_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lokasiviewpemandangan_19, 
                style: style_Lokasiviewpemandangan_19,
                interactive: true,
                title: '<img src="styles/legend/Lokasiviewpemandangan_19.png" /> Lokasi view pemandangan'
            });
var format_Sungai_20 = new ol.format.GeoJSON();
var features_Sungai_20 = format_Sungai_20.readFeatures(json_Sungai_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_20.addFeatures(features_Sungai_20);
var lyr_Sungai_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_20, 
                style: style_Sungai_20,
                interactive: true,
                title: '<img src="styles/legend/Sungai_20.png" /> Sungai'
            });
var format_MataAir_21 = new ol.format.GeoJSON();
var features_MataAir_21 = format_MataAir_21.readFeatures(json_MataAir_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MataAir_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MataAir_21.addFeatures(features_MataAir_21);
var lyr_MataAir_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MataAir_21, 
                style: style_MataAir_21,
                interactive: true,
                title: '<img src="styles/legend/MataAir_21.png" /> Mata Air'
            });
var format_LahanTerbakar_22 = new ol.format.GeoJSON();
var features_LahanTerbakar_22 = format_LahanTerbakar_22.readFeatures(json_LahanTerbakar_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LahanTerbakar_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahanTerbakar_22.addFeatures(features_LahanTerbakar_22);
var lyr_LahanTerbakar_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LahanTerbakar_22, 
                style: style_LahanTerbakar_22,
                interactive: true,
                title: '<img src="styles/legend/LahanTerbakar_22.png" /> Lahan Terbakar'
            });
var format_PotensiKebakaranHutan_23 = new ol.format.GeoJSON();
var features_PotensiKebakaranHutan_23 = format_PotensiKebakaranHutan_23.readFeatures(json_PotensiKebakaranHutan_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiKebakaranHutan_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiKebakaranHutan_23.addFeatures(features_PotensiKebakaranHutan_23);
var lyr_PotensiKebakaranHutan_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotensiKebakaranHutan_23, 
                style: style_PotensiKebakaranHutan_23,
                interactive: true,
                title: '<img src="styles/legend/PotensiKebakaranHutan_23.png" /> Potensi Kebakaran Hutan'
            });
var format_ODTWA_24 = new ol.format.GeoJSON();
var features_ODTWA_24 = format_ODTWA_24.readFeatures(json_ODTWA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ODTWA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODTWA_24.addFeatures(features_ODTWA_24);
var lyr_ODTWA_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ODTWA_24, 
                style: style_ODTWA_24,
                interactive: true,
    title: 'ODTWA<br />\
    <img src="styles/legend/ODTWA_24_0.png" /> Air Panas<br />\
    <img src="styles/legend/ODTWA_24_1.png" /> Air Terjun<br />\
    <img src="styles/legend/ODTWA_24_2.png" /> Embung<br />\
    <img src="styles/legend/ODTWA_24_3.png" /> Fenomena geologis di sekitar pantai<br />\
    <img src="styles/legend/ODTWA_24_4.png" /> Kampung Adat<br />\
    <img src="styles/legend/ODTWA_24_5.png" /> Perbukitan<br />'
        });
var format_Gangguan_25 = new ol.format.GeoJSON();
var features_Gangguan_25 = format_Gangguan_25.readFeatures(json_Gangguan_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gangguan_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gangguan_25.addFeatures(features_Gangguan_25);
var lyr_Gangguan_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gangguan_25, 
                style: style_Gangguan_25,
                interactive: true,
                title: '<img src="styles/legend/Gangguan_25.png" /> Gangguan'
            });
var format_TransekTikusBesardanLandakJawa_26 = new ol.format.GeoJSON();
var features_TransekTikusBesardanLandakJawa_26 = format_TransekTikusBesardanLandakJawa_26.readFeatures(json_TransekTikusBesardanLandakJawa_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransekTikusBesardanLandakJawa_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransekTikusBesardanLandakJawa_26.addFeatures(features_TransekTikusBesardanLandakJawa_26);
var lyr_TransekTikusBesardanLandakJawa_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TransekTikusBesardanLandakJawa_26, 
                style: style_TransekTikusBesardanLandakJawa_26,
                interactive: true,
                title: '<img src="styles/legend/TransekTikusBesardanLandakJawa_26.png" /> Transek Tikus Besar dan Landak Jawa'
            });
var format_Fauna_27 = new ol.format.GeoJSON();
var features_Fauna_27 = format_Fauna_27.readFeatures(json_Fauna_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fauna_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fauna_27.addFeatures(features_Fauna_27);
var lyr_Fauna_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fauna_27, 
                style: style_Fauna_27,
                interactive: true,
                title: '<img src="styles/legend/Fauna_27.png" /> Fauna'
            });
var format_Flora_28 = new ol.format.GeoJSON();
var features_Flora_28 = format_Flora_28.readFeatures(json_Flora_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Flora_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flora_28.addFeatures(features_Flora_28);
var lyr_Flora_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Flora_28, 
                style: style_Flora_28,
                interactive: true,
                title: '<img src="styles/legend/Flora_28.png" /> Flora'
            });
var format_Kontur_29 = new ol.format.GeoJSON();
var features_Kontur_29 = format_Kontur_29.readFeatures(json_Kontur_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kontur_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kontur_29.addFeatures(features_Kontur_29);
var lyr_Kontur_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kontur_29, 
                style: style_Kontur_29,
                interactive: true,
                title: '<img src="styles/legend/Kontur_29.png" /> Kontur'
            });
var format_AksesibilitasJaringanJalan_30 = new ol.format.GeoJSON();
var features_AksesibilitasJaringanJalan_30 = format_AksesibilitasJaringanJalan_30.readFeatures(json_AksesibilitasJaringanJalan_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AksesibilitasJaringanJalan_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AksesibilitasJaringanJalan_30.addFeatures(features_AksesibilitasJaringanJalan_30);
var lyr_AksesibilitasJaringanJalan_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AksesibilitasJaringanJalan_30, 
                style: style_AksesibilitasJaringanJalan_30,
                interactive: true,
                title: '<img src="styles/legend/AksesibilitasJaringanJalan_30.png" /> Aksesibilitas Jaringan Jalan'
            });
var format_AksesibilitasJalurTrack_31 = new ol.format.GeoJSON();
var features_AksesibilitasJalurTrack_31 = format_AksesibilitasJalurTrack_31.readFeatures(json_AksesibilitasJalurTrack_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AksesibilitasJalurTrack_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AksesibilitasJalurTrack_31.addFeatures(features_AksesibilitasJalurTrack_31);
var lyr_AksesibilitasJalurTrack_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AksesibilitasJalurTrack_31, 
                style: style_AksesibilitasJalurTrack_31,
                interactive: true,
                title: '<img src="styles/legend/AksesibilitasJalurTrack_31.png" /> Aksesibilitas Jalur Track'
            });
var format_TapalBatas_32 = new ol.format.GeoJSON();
var features_TapalBatas_32 = format_TapalBatas_32.readFeatures(json_TapalBatas_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TapalBatas_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TapalBatas_32.addFeatures(features_TapalBatas_32);
var lyr_TapalBatas_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TapalBatas_32, 
                style: style_TapalBatas_32,
                interactive: true,
                title: '<img src="styles/legend/TapalBatas_32.png" /> Tapal Batas'
            });

lyr_Maps_0.setVisible(true);lyr_HYBRID_1.setVisible(true);lyr_CitraSatelit_2.setVisible(true);lyr_TOPOGRAFI_3.setVisible(false);lyr_BATASRESORT_4.setVisible(true);lyr_batas_kawasan_5.setVisible(true);lyr_SISTEMGRIDDANDESAPENYANGGA_6.setVisible(false);lyr_RawanBencanaGunungApi_7.setVisible(false);lyr_Litologi_8.setVisible(false);lyr_RawanGerakanTanah_9.setVisible(false);lyr_JenisTanah_10.setVisible(false);lyr_WilayahKetinggian_11.setVisible(false);lyr_PenutupLahan_12.setVisible(false);lyr_IndeksVegetasi_13.setVisible(false);lyr_Zonasi_14.setVisible(false);lyr_Lereng_15.setVisible(false);lyr_DaerahTangkapanAir_16.setVisible(false);lyr_KantorResortdanKantorSeksi_17.setVisible(false);lyr_danau_18.setVisible(false);lyr_Lokasiviewpemandangan_19.setVisible(false);lyr_Sungai_20.setVisible(false);lyr_MataAir_21.setVisible(false);lyr_LahanTerbakar_22.setVisible(false);lyr_PotensiKebakaranHutan_23.setVisible(false);lyr_ODTWA_24.setVisible(false);lyr_Gangguan_25.setVisible(false);lyr_TransekTikusBesardanLandakJawa_26.setVisible(false);lyr_Fauna_27.setVisible(false);lyr_Flora_28.setVisible(false);lyr_Kontur_29.setVisible(false);lyr_AksesibilitasJaringanJalan_30.setVisible(false);lyr_AksesibilitasJalurTrack_31.setVisible(false);lyr_TapalBatas_32.setVisible(false);
var layersList = [lyr_Maps_0,lyr_HYBRID_1,lyr_CitraSatelit_2,lyr_TOPOGRAFI_3,lyr_BATASRESORT_4,lyr_batas_kawasan_5,lyr_SISTEMGRIDDANDESAPENYANGGA_6,lyr_RawanBencanaGunungApi_7,lyr_Litologi_8,lyr_RawanGerakanTanah_9,lyr_JenisTanah_10,lyr_WilayahKetinggian_11,lyr_PenutupLahan_12,lyr_IndeksVegetasi_13,lyr_Zonasi_14,lyr_Lereng_15,lyr_DaerahTangkapanAir_16,lyr_KantorResortdanKantorSeksi_17,lyr_danau_18,lyr_Lokasiviewpemandangan_19,lyr_Sungai_20,lyr_MataAir_21,lyr_LahanTerbakar_22,lyr_PotensiKebakaranHutan_23,lyr_ODTWA_24,lyr_Gangguan_25,lyr_TransekTikusBesardanLandakJawa_26,lyr_Fauna_27,lyr_Flora_28,lyr_Kontur_29,lyr_AksesibilitasJaringanJalan_30,lyr_AksesibilitasJalurTrack_31,lyr_TapalBatas_32];
lyr_BATASRESORT_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'luas': 'luas', 'Wil_seksi': 'Wil_seksi', });
lyr_batas_kawasan_5.set('fieldAliases', {'LAYER': 'LAYER', 'Luas_Ha': 'Luas_Ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SISTEMGRIDDANDESAPENYANGGA_6.set('fieldAliases', {'KODE_GRID': 'KODE_GRID', 'LABEL': 'LABEL', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'UUPP': 'UUPP', 'resort': 'resort', 'RESORT_G': 'RESORT_G', });
lyr_RawanBencanaGunungApi_7.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', 'KRB': 'KRB', 'ST_KRB': 'ST_KRB', });
lyr_Litologi_8.set('fieldAliases', {'Formasi': 'Formasi', 'Formasi02': 'Formasi02', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_RawanGerakanTanah_9.set('fieldAliases', {'Id': 'Id', 'LUAS': 'LUAS', 'Gerakan_Ta': 'Gerakan_Ta', 'Sumber': 'Sumber', 'B_GT': 'B_GT', });
lyr_JenisTanah_10.set('fieldAliases', {'FID_': 'FID_', 'SPT': 'SPT', 'KLAS2': 'KLAS2', 'KLASIFIKAS': 'KLASIFIKAS', 'BHN_INDUK': 'BHN_INDUK', 'SUB_LFORM': 'SUB_LFORM', 'RELIEF': 'RELIEF', 'LUAS_KM2_': 'LUAS_KM2_', });
lyr_WilayahKetinggian_11.set('fieldAliases', {'gridcode': 'gridcode', 'ELEVASI': 'ELEVASI', });
lyr_PenutupLahan_12.set('fieldAliases', {'landcover': 'landcover', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ORDE1': 'ORDE1', 'HA': 'HA', });
lyr_Zonasi_14.set('fieldAliases', {'LAYER': 'LAYER', 'zonasi': 'zonasi', 'Luas_Ha': 'Luas_Ha', 'Kode': 'Kode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Lereng_15.set('fieldAliases', {'gridcode': 'gridcode', 'Lereng': 'Lereng', 'Luas_Ha': 'Luas_Ha', });
lyr_DaerahTangkapanAir_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KantorResortdanKantorSeksi_17.set('fieldAliases', {'No_': 'No_', 'nama_titik': 'nama_titik', 'X': 'X', 'Y': 'Y', 'FOTO': 'FOTO', 'PHOTO': 'PHOTO', 'jenis': 'jenis', });
lyr_danau_18.set('fieldAliases', {'landcover': 'landcover', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ORDE1': 'ORDE1', 'HA': 'HA', });
lyr_Lokasiviewpemandangan_19.set('fieldAliases', {'Id': 'Id', 'NAME': 'NAME', 'DESCR': 'DESCR', 'FOLDER': 'FOLDER', 'X': 'X', 'Y': 'Y', 'Keterangan': 'Keterangan', 'Elevation': 'Elevation', 'Panjang': 'Panjang', });
lyr_Sungai_20.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'STREAM_ID': 'STREAM_ID', 'IN_FLOW': 'IN_FLOW', 'OUT_FLOW': 'OUT_FLOW', 'DRAIN_AREA': 'DRAIN_AREA', });
lyr_MataAir_21.set('fieldAliases', {'Id': 'Id', 'keterangan': 'keterangan', 'X': 'X', 'Y': 'Y', 'Resort': 'Resort', });
lyr_LahanTerbakar_22.set('fieldAliases', {'LABEL': 'LABEL', 'luas': 'luas', });
lyr_PotensiKebakaranHutan_23.set('fieldAliases', {'Permasalah': 'Permasalah', });
lyr_ODTWA_24.set('fieldAliases', {'No': 'No', 'Kampung_Ad': 'Kampung_Ad', 'Jenis': 'Jenis', 'x': 'x', 'y': 'y', 'lokasi': 'lokasi', 'Atraksi': 'Atraksi', 'Akses': 'Akses', 'Amenitas': 'Amenitas', 'Pengelola': 'Pengelola', });
lyr_Gangguan_25.set('fieldAliases', {'No_': 'No_', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Keterangan': 'Keterangan', 'foto': 'foto', });
lyr_TransekTikusBesardanLandakJawa_26.set('fieldAliases', {'Id': 'Id', 'KETERANGAN': 'KETERANGAN', });
lyr_Fauna_27.set('fieldAliases', {'Jenis_Satw': 'Jenis_Satw', 'Nama_Ilmia': 'Nama_Ilmia', 'x': 'x', 'y': 'y', 'SUMBER': 'SUMBER', 'keterangan': 'keterangan', });
lyr_Flora_28.set('fieldAliases', {'Nomor': 'Nomor', 'x': 'x', 'y': 'y', 'keterangan': 'keterangan', 'Kode_Plot': 'Kode_Plot', 'Resort': 'Resort', 'sumber': 'sumber', });
lyr_Kontur_29.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'CLOSED_CON': 'CLOSED_CON', });
lyr_AksesibilitasJaringanJalan_30.set('fieldAliases', {'fclass': 'fclass', 'name': 'name', });
lyr_AksesibilitasJalurTrack_31.set('fieldAliases', {'DESCR': 'DESCR', 'METER': 'METER', });
lyr_TapalBatas_32.set('fieldAliases', {'No': 'No', 'Nama_Pal': 'Nama_Pal', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'elev': 'elev', 'keterangan': 'keterangan', 'flora': 'flora', 'Fauna': 'Fauna', 'Mata_Air': 'Mata_Air', 'Permasalah': 'Permasalah', 'Kondisi_Pa': 'Kondisi_Pa', 'Perbatasan': 'Perbatasan', 'Perbatas_1': 'Perbatas_1', });
lyr_BATASRESORT_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'luas': 'TextEdit', 'Wil_seksi': 'TextEdit', });
lyr_batas_kawasan_5.set('fieldImages', {'LAYER': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SISTEMGRIDDANDESAPENYANGGA_6.set('fieldImages', {'KODE_GRID': 'TextEdit', 'LABEL': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'UUPP': 'TextEdit', 'resort': 'TextEdit', 'RESORT_G': 'TextEdit', });
lyr_RawanBencanaGunungApi_7.set('fieldImages', {'Id': 'TextEdit', 'LUAS': 'TextEdit', 'KRB': 'Range', 'ST_KRB': 'TextEdit', });
lyr_Litologi_8.set('fieldImages', {'Formasi': 'TextEdit', 'Formasi02': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_RawanGerakanTanah_9.set('fieldImages', {'Id': 'TextEdit', 'LUAS': 'TextEdit', 'Gerakan_Ta': 'TextEdit', 'Sumber': 'TextEdit', 'B_GT': 'Range', });
lyr_JenisTanah_10.set('fieldImages', {'FID_': 'Range', 'SPT': 'TextEdit', 'KLAS2': 'TextEdit', 'KLASIFIKAS': 'TextEdit', 'BHN_INDUK': 'TextEdit', 'SUB_LFORM': 'TextEdit', 'RELIEF': 'TextEdit', 'LUAS_KM2_': 'TextEdit', });
lyr_WilayahKetinggian_11.set('fieldImages', {'gridcode': 'TextEdit', 'ELEVASI': 'TextEdit', });
lyr_PenutupLahan_12.set('fieldImages', {'landcover': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ORDE1': 'TextEdit', 'HA': 'TextEdit', });
lyr_Zonasi_14.set('fieldImages', {'LAYER': 'TextEdit', 'zonasi': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Kode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Lereng_15.set('fieldImages', {'gridcode': 'TextEdit', 'Lereng': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_DaerahTangkapanAir_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KantorResortdanKantorSeksi_17.set('fieldImages', {'No_': 'TextEdit', 'nama_titik': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'FOTO': 'ExternalResource', 'PHOTO': 'ExternalResource', 'jenis': 'TextEdit', });
lyr_danau_18.set('fieldImages', {'landcover': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ORDE1': 'TextEdit', 'HA': 'TextEdit', });
lyr_Lokasiviewpemandangan_19.set('fieldImages', {'Id': 'TextEdit', 'NAME': 'TextEdit', 'DESCR': 'TextEdit', 'FOLDER': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Keterangan': 'TextEdit', 'Elevation': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_Sungai_20.set('fieldImages', {'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'STREAM_ID': 'Range', 'IN_FLOW': 'TextEdit', 'OUT_FLOW': 'TextEdit', 'DRAIN_AREA': 'TextEdit', });
lyr_MataAir_21.set('fieldImages', {'Id': 'Range', 'keterangan': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Resort': 'TextEdit', });
lyr_LahanTerbakar_22.set('fieldImages', {'LABEL': 'TextEdit', 'luas': '', });
lyr_PotensiKebakaranHutan_23.set('fieldImages', {'Permasalah': 'TextEdit', });
lyr_ODTWA_24.set('fieldImages', {'No': 'TextEdit', 'Kampung_Ad': 'TextEdit', 'Jenis': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'lokasi': 'TextEdit', 'Atraksi': 'TextEdit', 'Akses': 'TextEdit', 'Amenitas': 'TextEdit', 'Pengelola': 'TextEdit', });
lyr_Gangguan_25.set('fieldImages', {'No_': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Keterangan': 'TextEdit', 'foto': 'ExternalResource', });
lyr_TransekTikusBesardanLandakJawa_26.set('fieldImages', {'Id': 'Range', 'KETERANGAN': 'TextEdit', });
lyr_Fauna_27.set('fieldImages', {'Jenis_Satw': 'TextEdit', 'Nama_Ilmia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'SUMBER': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_Flora_28.set('fieldImages', {'Nomor': '', 'x': '', 'y': '', 'keterangan': 'TextEdit', 'Kode_Plot': '', 'Resort': '', 'sumber': '', });
lyr_Kontur_29.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'CLOSED_CON': 'TextEdit', });
lyr_AksesibilitasJaringanJalan_30.set('fieldImages', {'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_AksesibilitasJalurTrack_31.set('fieldImages', {'DESCR': 'TextEdit', 'METER': 'TextEdit', });
lyr_TapalBatas_32.set('fieldImages', {'No': 'TextEdit', 'Nama_Pal': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'elev': 'TextEdit', 'keterangan': 'TextEdit', 'flora': 'TextEdit', 'Fauna': 'TextEdit', 'Mata_Air': 'TextEdit', 'Permasalah': 'TextEdit', 'Kondisi_Pa': 'TextEdit', 'Perbatasan': 'TextEdit', 'Perbatas_1': 'TextEdit', });
lyr_BATASRESORT_4.set('fieldLabels', {'OBJECTID': 'inline label', 'REMARK': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'luas': 'inline label', 'Wil_seksi': 'no label', });
lyr_batas_kawasan_5.set('fieldLabels', {'LAYER': 'inline label', 'Luas_Ha': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_SISTEMGRIDDANDESAPENYANGGA_6.set('fieldLabels', {'KODE_GRID': 'inline label', 'LABEL': 'inline label', 'Kecamatan': 'inline label', 'Desa': 'inline label', 'UUPP': 'inline label', 'resort': 'inline label', 'RESORT_G': 'inline label', });
lyr_RawanBencanaGunungApi_7.set('fieldLabels', {'Id': 'inline label', 'LUAS': 'inline label', 'KRB': 'inline label', 'ST_KRB': 'inline label', });
lyr_Litologi_8.set('fieldLabels', {'Formasi': 'inline label', 'Formasi02': 'inline label', 'Keterangan': 'inline label', 'Sumber': 'header label', });
lyr_RawanGerakanTanah_9.set('fieldLabels', {'Id': 'inline label', 'LUAS': 'inline label', 'Gerakan_Ta': 'inline label', 'Sumber': 'inline label', 'B_GT': 'inline label', });
lyr_JenisTanah_10.set('fieldLabels', {'FID_': 'inline label', 'SPT': 'inline label', 'KLAS2': 'inline label', 'KLASIFIKAS': 'inline label', 'BHN_INDUK': 'inline label', 'SUB_LFORM': 'inline label', 'RELIEF': 'inline label', 'LUAS_KM2_': 'inline label', });
lyr_WilayahKetinggian_11.set('fieldLabels', {'gridcode': 'inline label', 'ELEVASI': 'inline label', });
lyr_PenutupLahan_12.set('fieldLabels', {'landcover': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'ORDE1': 'inline label', 'HA': 'inline label', });
lyr_Zonasi_14.set('fieldLabels', {'LAYER': 'inline label', 'zonasi': 'inline label', 'Luas_Ha': 'inline label', 'Kode': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_Lereng_15.set('fieldLabels', {'gridcode': 'inline label', 'Lereng': 'inline label', 'Luas_Ha': 'inline label', });
lyr_DaerahTangkapanAir_16.set('fieldLabels', {'OBJECTID': 'inline label', 'LAYER': 'inline label', 'STREAM_ID': 'inline label', 'NEXT_STREA': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_KantorResortdanKantorSeksi_17.set('fieldLabels', {'No_': 'inline label', 'nama_titik': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'FOTO': 'inline label', 'PHOTO': 'inline label', 'jenis': 'inline label', });
lyr_danau_18.set('fieldLabels', {'landcover': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'ORDE1': 'inline label', 'HA': 'inline label', });
lyr_Lokasiviewpemandangan_19.set('fieldLabels', {'Id': 'inline label', 'NAME': 'inline label', 'DESCR': 'inline label', 'FOLDER': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'Keterangan': 'inline label', 'Elevation': 'inline label', 'Panjang': 'inline label', });
lyr_Sungai_20.set('fieldLabels', {'LAYER': 'inline label', 'ELEVATION': 'inline label', 'STREAM_ID': 'inline label', 'IN_FLOW': 'inline label', 'OUT_FLOW': 'inline label', 'DRAIN_AREA': 'inline label', });
lyr_MataAir_21.set('fieldLabels', {'Id': 'inline label', 'keterangan': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'Resort': 'inline label', });
lyr_LahanTerbakar_22.set('fieldLabels', {'LABEL': 'inline label', 'luas': 'inline label', });
lyr_PotensiKebakaranHutan_23.set('fieldLabels', {'Permasalah': 'inline label', });
lyr_ODTWA_24.set('fieldLabels', {'No': 'inline label', 'Kampung_Ad': 'inline label', 'Jenis': 'inline label', 'x': 'inline label', 'y': 'inline label', 'lokasi': 'inline label', 'Atraksi': 'inline label', 'Akses': 'inline label', 'Amenitas': 'inline label', 'Pengelola': 'inline label', });
lyr_Gangguan_25.set('fieldLabels', {'No_': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Keterangan': 'inline label', 'foto': 'inline label', });
lyr_TransekTikusBesardanLandakJawa_26.set('fieldLabels', {'Id': 'inline label', 'KETERANGAN': 'inline label', });
lyr_Fauna_27.set('fieldLabels', {'Jenis_Satw': 'inline label', 'Nama_Ilmia': 'inline label', 'x': 'inline label', 'y': 'inline label', 'SUMBER': 'inline label', 'keterangan': 'inline label', });
lyr_Flora_28.set('fieldLabels', {'Nomor': 'inline label', 'x': 'inline label', 'y': 'inline label', 'keterangan': 'inline label', 'Kode_Plot': 'inline label', 'Resort': 'inline label', 'sumber': 'inline label', });
lyr_Kontur_29.set('fieldLabels', {'NAME': 'inline label', 'LAYER': 'inline label', 'ELEVATION': 'inline label', 'CLOSED_CON': 'inline label', });
lyr_AksesibilitasJaringanJalan_30.set('fieldLabels', {'fclass': 'inline label', 'name': 'inline label', });
lyr_AksesibilitasJalurTrack_31.set('fieldLabels', {'DESCR': 'inline label', 'METER': 'inline label', });
lyr_TapalBatas_32.set('fieldLabels', {'No': 'inline label', 'Nama_Pal': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'elev': 'inline label', 'keterangan': 'inline label', 'flora': 'inline label', 'Fauna': 'inline label', 'Mata_Air': 'inline label', 'Permasalah': 'inline label', 'Kondisi_Pa': 'inline label', 'Perbatasan': 'inline label', 'Perbatas_1': 'inline label', });
lyr_TapalBatas_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});